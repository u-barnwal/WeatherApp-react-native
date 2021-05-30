import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function WeatherInfo({ currentWeather }) {
  if (!currentWeather) return null;

  const {
    main: { temp },
    weather: [{ icon, description, main }],
    name,
  } = currentWeather;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.info}>
      <Text>{name}</Text>
      <Image style={styles.icon} source={{ uri: iconUrl }} />
      <Text>{temp}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
  description: {
    textTransform: "capitalize",
  },
});
