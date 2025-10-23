import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Switch, Text } from "react-native";
import { useColor } from "../contexts/ColorContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingColor() {
  const { dark, tgColor } = useColor();

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("theme", jsonValue);
      console.log("add storage");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("theme");
        console.log("get storage");

        if (jsonValue != null) {
          const saveTh = JSON.parse(jsonValue);
          if (saveTh != dark) {
            tgColor();
          }
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getData();
  }, []);

  const handleToggle = () => {
    tgColor();
    storeData(!dark);
  };

  return (
    <View
      style={[styles.mainView, { backgroundColor: dark ? "#2c2c2c" : "#eee" }]}
    >
      <Text style={[styles.t, { color: dark ? "#fff" : "#333" }]}>
        Темна тема
      </Text>
      <Switch
        value={dark}
        onValueChange={handleToggle}
        thumbColor={dark ? "#0af" : "#ccc"}
        trackColor={{ false: "#999", true: "#555" }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
  },
  t: {
    fontSize: 20,
  },
});
