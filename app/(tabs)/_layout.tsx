import { Tabs, useRouter, Link } from "expo-router";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useColor } from "../../contexts/ColorContext";

export default function TabsLayout() {
  const { dark } = useColor();
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Tabs screenOptions={{ tabBarStyle: { display: "none" } }}>
        <Tabs.Screen name="asteroids" />
        <Tabs.Screen name="settings" />
      </Tabs>

      <View
        style={[styles.bottomMenu, { backgroundColor: dark ? "#222" : "#fff" }]}
      >
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => router.push("/")}
        >
          <Text style={[styles.tabText, { color: dark ? "#0af" : "#007aff" }]}>
            Головна
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => router.push("/(tabs)/(asteroids)/Asteroids")}
        >
          <Text style={[styles.tabText, { color: dark ? "#fff" : "#000" }]}>
            Астероїди
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => router.push("/(tabs)/settings")}
        >
          <Text style={[styles.tabText, { color: dark ? "#fff" : "#000" }]}>
            Налаштування
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 110,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    position: "relative",
    top: -20
  },
});
