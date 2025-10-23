import { ScrollView, StyleSheet } from "react-native";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";
import { Link } from "expo-router";


export default function Index() {
  return (
    <ThemedView style={styles.contMain}>
      <ThemedView style={styles.lAll}>
        <Link href="/login" asChild>
          <ThemedText style={styles.lTMenu}>Увійти</ThemedText>
        </Link>
        <Link href="/profile" asChild>
          <ThemedText style={styles.lTMenu}>Профіль</ThemedText>
        </Link>
        <Link href="(asteroids)/Asteroids" asChild>
          <ThemedText style={styles.lTMenu}>All</ThemedText>
        </Link>
      </ThemedView>
      <Spacer style={undefined} height={200} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contMain: {
    flex: 1,
  },
  lAll: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
    backgroundColor: "#5aaacfff",
    width: "100%",
    padding: 20,
    position: "absolute",
    top: 0,
  },
  lTMenu: {
    marginTop: 20,
    fontSize: 20,
  },
  // aster: {
  //   top: 120,
  //   flex: 1,
  // },
});
