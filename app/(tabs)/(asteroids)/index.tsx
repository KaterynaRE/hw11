import React from "react";
import { StyleSheet } from "react-native";
import ThemedView from "../../../components/ThemedView";
import Asteroids from "./Asteroids";


export default function IndexAsteroids() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.aster}>
        <Asteroids />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aster: {
    top: 20,
    flex: 1,
  },
});
