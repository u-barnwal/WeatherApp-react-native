import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import WeatherInfo from "./components/WeatherInfo";
import UnitsPicker from "./components/UnitsPicker";

const WEATHER_API_KEY = "b9907084d3a3897b632ee419f4d9519a";

const getWeatherAPIUrl = (latitude, longitude, units) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${WEATHER_API_KEY}`;

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const [unitsSystem, setUnitsSystem] = useState("metic");

  useEffect(() => {
    load();
  }, [unitsSystem]);

  async function load() {
    setCurrentWeather(null);

    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status != "granted") {
        setErrorMessage("Access to location is needed to run the app!");
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const response = await fetch(
        getWeatherAPIUrl(latitude, longitude, unitsSystem)
      );
      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.message);
        return;
      }

      setCurrentWeather(result);
    } catch (error) {
      setErrorMessage(error);
    }
  }

  // + Showing error
  if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  if (!currentWeather) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <UnitsPicker
          unitsSystem={unitsSystem}
          setUnitsSystem={setUnitsSystem}
        />
        <WeatherInfo currentWeather={currentWeather} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
});
