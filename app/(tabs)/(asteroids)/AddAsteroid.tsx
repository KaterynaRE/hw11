import {
  StyleSheet,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useRouter, Link } from "expo-router";
import { useAsteroid } from "../../../hooks/UseAsteroid";
import ThemedView from "../../../components/ThemedView";
import { useReducer, useState } from "react";
import ThemedTextInput from "../../../components/ThemedTextInput";
import ThemedText from "../../../components/ThemedText";

export default function AddAsteroid() {
  const [ObjectT, setObject] = useState("");
  const [Close_Approach_Date, set_Close_Approach_Date] = useState("");
  const [CA_Distance_Nominal, set_CA_Distance_Nominal] = useState("");
  const [CA_Distance_Minimum, set_CA_Distance_Minimum] = useState("");
  const [relative, set_relative] = useState("");
  const [infinity, set_infinity] = useState("");
  const [H_mag, set_H_mag] = useState("");
  const [Diameter, set_Diameter] = useState("");

  const router = useRouter();
  const { createAsteroid } = useAsteroid();

  const handleSubmit = async () => {
    await createAsteroid({
      ObjectT,
      Close_Approach_Date,
      CA_Distance_Nominal,
      CA_Distance_Minimum,
      relative,
      infinity,
      H_mag,
      Diameter,
    });
    setObject(""), set_Close_Approach_Date("");
    set_CA_Distance_Nominal("");
    set_CA_Distance_Minimum("");
    set_relative("");
    set_infinity("");
    set_H_mag("");
    set_Diameter("");

    router.push("/Asteroids");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
      <ThemedView style={styles.container}>
        <ThemedView style={undefined}>
          <ThemedTextInput
            style={undefined}
            placeholder="Object"
            value={ObjectT}
            onChangeText={setObject}
          />
          <ThemedTextInput
            style={undefined}
            placeholder="Close Approach Date"
            value={Close_Approach_Date}
            onChangeText={set_Close_Approach_Date}
            keyboardType="numeric"
          />
          <ThemedTextInput
            style={undefined}
            placeholder="CA Distance Nominal"
            value={CA_Distance_Nominal}
            onChangeText={set_CA_Distance_Nominal}
          />
          <ThemedTextInput
            style={undefined}
            placeholder="CA Distance Minimum"
            value={CA_Distance_Minimum}
            onChangeText={set_CA_Distance_Minimum}
          />
          <ThemedTextInput
            style={undefined}
            placeholder="relative"
            value={relative}
            onChangeText={set_relative}
          />
          <ThemedTextInput
            style={undefined}
            placeholder="infinity"
            value={infinity}
            onChangeText={set_infinity}
          />
          <ThemedTextInput
            style={undefined}
            placeholder="H_mag"
            value={H_mag}
            onChangeText={set_H_mag}
          />
          <ThemedTextInput
            style={undefined}
            placeholder="Diameter"
            value={Diameter}
            onChangeText={set_Diameter}
          />
          <Button title="Додати" onPress={handleSubmit}></Button>
        </ThemedView>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
  },
 
});
