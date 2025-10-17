import { usePathname, useRouter } from "expo-router";
import { StyleSheet, useColorScheme, Pressable, View, Text } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { AsteroidContext } from "../../contexts/AsteroidContext";
import { useEffect, useContext, useState, useMemo } from "react";

export default function Asteroids() {
  const router = useRouter();
  const { asteroid, getAsteroids } = useContext(AsteroidContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    getAsteroids();
  }, []);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(asteroid.length / itemsPerPage));
  }, [asteroid.length]);

  const paginatedData = useMemo(() => {
    return asteroid.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [asteroid, currentPage]);

  const handlePress = (item) => {
    router.push(`/asteroid/${item.id}`);
  };

  return (
    <ThemedView style={styles.container}>
      {paginatedData.length === 0 ? (
        <Text style={styles.loadingText}>Завантаження даних...</Text>
      ) : (
        paginatedData.map((a, i) => (
          <Pressable
            key={i}
            style={styles.card}
            onPress={() => handlePress(a)}
          >
            <ThemedText style={styles.title}>Object: {a.ObjectT || "Невідомий"}</ThemedText>
            <ThemedText style={styles.text}>Close Approach Date: {a.Close_Approach_Date || "-"}</ThemedText>
            <ThemedText style={styles.text}>CA Distance Nominal: {a.CA_Distance_Nominal || "-"}</ThemedText>
            <ThemedText style={styles.text}>CA Distance Minimum: {a.CA_Distance_Minimum || "-"}</ThemedText>
            <ThemedText style={styles.text}>Relative: {a.relative || "-"}</ThemedText>
            <ThemedText style={styles.text}>Infinity: {a.infinity || "-"}</ThemedText>
            <ThemedText style={styles.text}>H Mag: {a.H_mag || "-"}</ThemedText>
            <ThemedText style={styles.text}>Diameter: {a.Diameter || "-"}</ThemedText>
          </Pressable>
        ))
      )}

      {totalPages > 1 && (
        <View style={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <Pressable
              key={i}
              style={[styles.pageButton, currentPage === i + 1 && styles.pageButtonActive]}
              onPress={() => setCurrentPage(i + 1)}
            >
              <Text style={styles.pageText}>{i + 1}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  loadingText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#555",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#000",
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
    color: "#333",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 12,
    flexWrap: "wrap",
  },
  pageButton: {
    padding: 8,
    margin: 4,
    backgroundColor: "#ccc",
    borderRadius: 4,
  },
  pageButtonActive: {
    backgroundColor: "#5aaacfff",
  },
  pageText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
