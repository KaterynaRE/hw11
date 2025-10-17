import { Slot } from "expo-router";
import { StyleSheet } from "react-native";
import ThemedView from "../../components/ThemedView";
import { Link } from "expo-router";
import ThemedText from "../../components/ThemedText";

export default function AsteroidsLayout() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.topMenu}>
        <Link href="/" asChild>
          <ThemedText style={styles.menuText}>Головна</ThemedText>
        </Link>
        <Link href="/profile" asChild>
          <ThemedText style={styles.menuText}>Профіль</ThemedText>
        </Link>
      </ThemedView>

      <Slot />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#5aaacfff",
    paddingVertical: 35,
  },
  menuText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    top: 10,
  },
});
