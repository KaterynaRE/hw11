import { Button, Keyboard, TextInput, TouchableWithoutFeedback } from "react-native";
import ThemedView from "../../../components/ThemedView";
import { useEffect, useReducer, useState } from "react";
import ThemedTextInput from "../../../components/ThemedTextInput";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useAsteroid } from "../../../hooks/UseAsteroid";


export default function UpdateAster() {
    const [ObjectT, set_ObjectT] = useState("");
    const [Close_Approach_Date, set_Close_Approach_Date] = useState("");
    const [CA_Distance_Nominal, set_CA_Distance_Nominal] = useState("");
    const [CA_Distance_Minimum, set_CA_Distance_Minimum] = useState("");
    const [relative, set_relative] = useState("");
    const [infinity, set_infinity] = useState("");
    const [H_mag, set_H_mag] = useState("");
    const [Diameter, set_Diameter] = useState("");

    const router = useRouter();
    const { id } = useLocalSearchParams();
    const { updateAster, getAsteroidById } = useAsteroid();


    useEffect(() => {
        async function fetchAster() {
            const asteroid = await getAsteroidById(id);
            if (asteroid) {
                set_ObjectT(asteroid.ObjectT ?? "");
                set_Close_Approach_Date(asteroid.Close_Approach_Date ?? "");
                set_CA_Distance_Nominal(asteroid.CA_Distance_Nominal ?? "");
                set_CA_Distance_Minimum(asteroid.CA_Distance_Minimum ?? "");
                set_relative(asteroid.relative ?? "");
                set_infinity(asteroid.infinity ?? "");
                set_H_mag(asteroid.H_mag ?? "");
                set_Diameter(asteroid.Diameter ?? "");
            }
        }
        fetchAster();
    }, [id])

    const handleSubmit = async () => {
        await updateAster(id, {
            ObjectT,
            Close_Approach_Date,
            CA_Distance_Nominal,
            CA_Distance_Minimum,
            relative,
            infinity,
            H_mag,
            Diameter
        })
        router.push(`/asteroid/${id}`);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={{}}>
                <ThemedTextInput style={{}}
                    placeholder="ObjectT"
                    value={ObjectT}
                    onChangeText={set_ObjectT}
                />
                <ThemedTextInput style={{}}
                    placeholder="Close Approach Date"
                    value={Close_Approach_Date}
                    onChangeText={set_Close_Approach_Date}
                />
                <ThemedTextInput style={{}}
                    placeholder="CA Distance Nominal"
                    value={CA_Distance_Nominal}
                    onChangeText={set_CA_Distance_Nominal}
                />
                <ThemedTextInput style={{}}
                    placeholder="CA Distance Minimum"
                    value={CA_Distance_Minimum}
                    onChangeText={set_CA_Distance_Minimum}
                   
                />
                <ThemedTextInput style={{}}
                    placeholder="relative"
                    value={relative}
                    onChangeText={set_relative}
                />
                <ThemedTextInput style={{}}
                    placeholder="infinity"
                    value={infinity}
                    onChangeText={set_infinity}
                />
                <ThemedTextInput style={{}}
                    placeholder="H mag"
                    value={H_mag}
                    onChangeText={set_H_mag}
                />
                <ThemedTextInput style={{}}
                    placeholder="Diameter"
                    value={Diameter}
                    onChangeText={set_Diameter}
                />
                <Button title="Оновити" onPress={() => handleSubmit()}></Button>
                <Link href={"/"}>На головну</Link>
            </ThemedView>

        </TouchableWithoutFeedback>
    )
}