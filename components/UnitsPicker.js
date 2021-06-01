import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
  return (
    <View style={styles.unitsPicker}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
        mode="dropdown"
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitsPicker: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 20,
      },
      web: {
        top: 20,
      },
    }),
    left: 20,
    height: 50,
    width: 100,
  },
});
