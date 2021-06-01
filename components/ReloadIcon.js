import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils";

export default function ReloadIcon({ load }) {
  const icon = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";

  return (
    <View style={styles.icon}>
      <Ionicons name={icon} size={24} color={colors.PRIMARY} onPress={load} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 40,
      },
      web: {
        top: 20,
      },
    }),
    right: 20,
  },
});
