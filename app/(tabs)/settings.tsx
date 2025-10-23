import React from "react";
import { View, StyleSheet } from "react-native";
import SettingsColor from "../../components/SettingColor";

export default function Settings() {
  return (
    <View style={styles.container}>
      <SettingsColor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
