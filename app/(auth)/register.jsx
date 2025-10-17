import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { Link } from "expo-router";
import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import { useState } from "react";
import ThemedTextInput from "../../components/ThemedTextInput";
import { COLORS } from "../../constants/colors";
import { useUser } from "../../hooks/UseUser";


const Register = () => {
    const [email, setEmail] = useState("");
    const { user, register } = useUser();
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const handleSubmit = async () => {
        try {
            setError(null);
            await register(email, password);
           // console.log("User data", user);
        }
        catch (error) {
            console.log("Error thrown", error);
            setError(error.message);
        }
    }
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}  >
                <ThemedText title={true}>Зареєструватися</ThemedText>
                <Spacer height={40} />
                <ThemedTextInput style={styles.textInp}
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                />
                <ThemedTextInput style={styles.textInp}
                    placeholder="Password"
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    value={password}
                />
                <Button onPress={handleSubmit} title="Зареєструватися" />
                <Spacer />
                {error && <Text style={styles.warning}>
                    {error}
                </Text>}
                <ThemedView style={styles.linkGroup}>
                    <Link href="/" style={styles.link}>
                        <ThemedText>На головну</ThemedText>
                    </Link>
                    <Link href="/login" style={styles.link}>
                        <ThemedText>Увійти</ThemedText>
                    </Link>
                </ThemedView>
            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    link: {
        marginTop: 20,
        fontSize: 20,
        color: 'blue'
    },
    linkGroup: {
        flexDirection: "row",
        gap: 20,
        justifyContent: "center"
    },
    textInp: {
        marginBottom: 20,
        width: "80%"
    },
    warning: {
        backgroundColor: COLORS.warning,
        borderColor: COLORS.warningBorder,
        color: "#efe2e2ff",
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        marginHorizontal: 20,
    },
})