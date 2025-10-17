import {  StyleSheet } from "react-native";
import { Link } from "expo-router";
import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import { Controller, useForm } from "react-hook-form";
import ThemedTextInput from "../../components/ThemedTextInput";
import { Button, Text } from "react-native";
import { useUser } from "../../hooks/UseUser";
import { useState } from "react";
import { COLORS } from "../../constants/colors";


const Login = () => {
    const [error, setError] = useState(null);
    const {user, login} = useUser();
    const {
        control,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = async (data)=>{
        try{
            setError(null);
            await login(data.email, data.password);
            //console.log("User logged in", user);
        }
        catch(error){
            console.log(error.message);
            setError(error.message);
        }
    }
    return (<ThemedView style={styles.container}  >
        <ThemedText title={true}>Увійти в акаунт</ThemedText>
        <Spacer height={40} />
        <Controller
        control={control}
        rules={{
            required: true
        }}
        render={({field: {onChange, onBlur, value}})=>(
            <ThemedTextInput style={styles.textInp}
            placeholder="Email"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            keyboardType="email-address"
        />
        )}
        name="email"
        />
        <Controller
        control={control}
        render={({field: {onChange, onBlur, value}})=>(<ThemedTextInput style={styles.textInp}
            placeholder="Password"
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={true}
            value={value}
        />)}
        name="password"
        />
        {errors.password && <Text style={styles.validationError}>Password must be less then 10 chars</Text>}
        
        <Button onPress={handleSubmit(onSubmit)} title="Увійти" />
        { error && (<Text style={styles.warning}>{error}</Text>)}
        <ThemedView style={styles.linkGroup}>
            <Link href="/" style={styles.link}>
                <ThemedText>На головну</ThemedText>
            </Link>
            <Link href="/register" style={styles.link}>
                <ThemedText>Зареєструватися</ThemedText>
            </Link>
        </ThemedView>
    </ThemedView>)
}

export default Login;

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
    validationError: {
        textAlign: "center",
        color: "red"
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