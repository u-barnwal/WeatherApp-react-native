import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function WeatherDetails({ currentWeather, unitsSystem }) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  return (
    <View style={styles.details}>
      <View style={styles.detailRow}>
        <View
          style={[
            styles.detailBox,
            { borderRightWidth: 1, borderRightColor: colors.BORDER },
          ]}
        >
          <FontAwesome5
            name="temperature-low"
            size={25}
            color={colors.PRIMARY}
          />
          <View style={styles.detailTexts}>
            <Text>Feels Like</Text>
            <Text style={styles.textSecondary}>{feels_like}°</Text>
          </View>
        </View>

        <View style={styles.detailBox}>
          <MaterialCommunityIcons
            name="water"
            size={25}
            color={colors.PRIMARY}
          />
          <View style={styles.detailTexts}>
            <Text>Humidity</Text>
            <Text style={styles.textSecondary}>{humidity}%</Text>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.detailRow,
          { borderTopWidth: 1, borderTopColor: colors.BORDER },
        ]}
      >
        <View
          style={[
            styles.detailBox,
            { borderRightWidth: 1, borderRightColor: colors.BORDER },
          ]}
        >
          <MaterialCommunityIcons
            name="weather-windy"
            size={25}
            color={colors.PRIMARY}
          />
          <View style={styles.detailTexts}>
            <Text>Wind Speed</Text>
            <Text style={styles.textSecondary}>
              {`${Math.round(speed)} ${
                unitsSystem === "metric" ? "m/s" : "miles/h"
              }`}
            </Text>
          </View>
        </View>

        <View style={styles.detailBox}>
          <MaterialCommunityIcons
            name="speedometer"
            size={25}
            color={colors.PRIMARY}
          />
          <View style={styles.detailTexts}>
            <Text>Pressure</Text>
            <Text style={styles.textSecondary}>{pressure} hPa</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    marginTop: "auto",
    borderWidth: 1,
    borderColor: colors.BORDER,
    borderRadius: 10,
    margin: 15,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    padding: 20,
  },
  detailTexts: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  textSecondary: {
    fontSize: 15,
    color: colors.SECONDARY,
    fontWeight: "700",
    marginTop: 4,
  },
});
