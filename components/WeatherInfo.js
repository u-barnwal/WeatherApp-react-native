import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WeatherInfo({ currentWeather }) {
  if (!currentWeather) return null;

  const {
    main: { temp },
  } = currentWeather;

  return (
    <View style={styles.weatherInfo}>
      <Text>{temp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
});
