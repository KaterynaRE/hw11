import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import Spacer from "../components/Spacer"
import ThemedText from "../components/ThemedText"
import ThemedView from "../components/ThemedView"

const NotFound = () => {
    return (<ThemedView style={styles.container}  >
        <ThemedText title={true}>404 - Сторінку не знайдено</ThemedText>
        <Spacer height={40}/>
        <Link href="/" style={styles.link}>
            <ThemedText>На головну</ThemedText>
        </Link>
    </ThemedView>)
}

export default NotFound;


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
})