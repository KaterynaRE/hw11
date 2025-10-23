import { Link, useLocalSearchParams, useRouter } from "expo-router";
import ThemedText from "../../../../components/ThemedText";
import ThemedView from "../../../../components/ThemedView";
import { StyleSheet, Text, Button } from "react-native";
import { useColorScheme } from "react-native";
import { COLORS } from "../../../../constants/colors";
import { useEffect, useState } from "react";
import AsterCard from "../asterCard";
import { useAsteroid } from "../../../../hooks/UseAsteroid";


export default function AsteroidDetail() {
    const colorScheme = useColorScheme();
    const theme = COLORS[colorScheme] ?? COLORS.light;

    const router = useRouter();
    const [asteroid, setAsteroid] = useState(null);
    const { id } = useLocalSearchParams();

    const { getAsteroidById, deleteAsterId } = useAsteroid();

    useEffect(() => {
        async function fetchAster() {
            const data = await getAsteroidById(id);
            setAsteroid(data);
        }
        fetchAster();
    }, [id])

    const handleDelete = async (id) => {
        await deleteAsterId(id);
        router.push("(asteroids)/Asteroids")
    }

    if (!asteroid) {
        return <ThemedText style={{}}>Loading...</ThemedText>;
    }

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={{}}>
                <AsterCard
                    ObjectT={asteroid.ObjectT}
                    Close_Approach_Date={asteroid.Close_Approach_Date}
                    CA_Distance_Nominal={asteroid.CA_Distance_Nominal}
                    CA_Distance_Minimum={asteroid.CA_Distance_Minimum}
                    relative={asteroid.relative}
                    infinity={asteroid.infinity}
                    H_mag={asteroid.H_mag}
                    Diameter={asteroid.Diameter}
                />
                  <ThemedView style={styles.btnGroup}>
                    <Button title="Видалити" onPress={() => handleDelete(asteroid.id)}></Button>
                    <Button title="Редагувати" onPress={() => router.push(`/updateaster/${asteroid.id}`)}></Button>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    btnGroup: {
        display: "flex",
        gap: 10,
        justifyContent: "space-between",
    }
});