import { StyleSheet, Text, View } from "react-native";

export default function asterCard({
  ObjectT,
  Close_Approach_Date,
  CA_Distance_Nominal,
  CA_Distance_Minimum,
  relative,
  infinity,
  H_mag,
  Diameter,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>name: {ObjectT}</Text>
      <Text style={styles.text}>
        Close_Approach_Date: {Close_Approach_Date}
      </Text>
      <Text style={styles.text}>
        CA_Distance_Nominal: {CA_Distance_Nominal}
      </Text>
      <Text style={styles.text}>
        CA_Distance_Minimum: {CA_Distance_Minimum}
      </Text>
      <Text style={styles.text}>relative: {relative}</Text>
      <Text style={styles.text}>infinity: {infinity}</Text>
      <Text style={styles.text}>H_mag: {H_mag}</Text>
      <Text style={styles.text}>Diameter: {Diameter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
    color: "black",
  },
});
