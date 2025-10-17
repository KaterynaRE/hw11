import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import AuthProvider from "../contexts/AuthContext";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";
import AsteroidProvider from "../contexts/AsteroidContext";

const RootLayout = ({ children }) => {
  const colorScheme = useColorScheme();
  const createDbIfNeeded = async (db: SQLiteDatabase) => {
    try {
      await db.execAsync(`
      CREATE TABLE IF NOT EXISTS asteroids (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ObjectT TEXT,
        Close_Approach_Date TEXT,
        CA_Distance_Nominal REAL,
        CA_Distance_Minimum REAL,
        relative REAL,
        infinity REAL,
        H_mag REAL,
        Diameter REAL
      );
    `);
    } catch (error) {
      console.error("DB init error:", error.message);
    }
  };

  return (
    <SQLiteProvider databaseName="aster.db" onInit={createDbIfNeeded}>
      <AsteroidProvider>
        <AuthProvider>
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: "#000" },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold" },
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="index"
              options={{
                title: "Головна",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Asteroids"
              options={{
                title: "Астероїди",
                headerShown: true,
              }}
            />
          </Stack>
        </AuthProvider>
      </AsteroidProvider>
    </SQLiteProvider>
  );
};
export default RootLayout;

const styles = StyleSheet.create({
 
});
