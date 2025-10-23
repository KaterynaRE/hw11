// import { Slot } from "expo-router";
// import { StyleSheet } from "react-native";
// import ThemedView from "../../../components/ThemedView";
// import { Link } from "expo-router";
// import ThemedText from "../../../components/ThemedText";

// export default function AsteroidsLayout() {
//   return (
//       <ThemedView style={styles.container}>
//         <ThemedView style={styles.topMenu}>
//           <Link href="/" asChild>
//             <ThemedText style={styles.menuText}>Головна</ThemedText>
//           </Link>
//           <Link href="/profile" asChild>
//             <ThemedText style={styles.menuText}>Профіль</ThemedText>
//           </Link>
//            <Link href="(asteroids)/AddAsteroid" asChild>
//           <ThemedText style={styles.menuText}>Add</ThemedText>
//         </Link>
//         </ThemedView>

//         <Slot />
//       </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   topMenu: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     backgroundColor: "#5aaacfff",
//     paddingVertical: 35,
//   },
//   menuText: {
//     fontSize: 18,
//     color: "#fff",
//     fontWeight: "bold",
//     top: 10,
//   },
// });
import { Slot, Link } from "expo-router";
import { StyleSheet } from "react-native";
import { useColor } from "../../../contexts/ColorContext";
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";

export default function AsteroidsLayout() {
  const { dark } = useColor();

  return (
    <ThemedView style={[styles.container, { backgroundColor: dark ? "#2c2c2c" : "#f5f5f5" }]}>
      <Slot />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
  },
  menuText: { fontSize: 18, fontWeight: "bold" },
});
