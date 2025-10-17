import { Image, StyleSheet, useColorScheme, View } from "react-native";
import ThemedView from "./ThemedView";
import ThemedText from "./ThemedText";
import { COLORS } from "../constants/colors";
import CorrectLogo from "../assets/images/correct.png";
import InvalidLogo from "../assets/images/multiply.png";
import { useWindowDimensions } from "react-native";

const ThemedCard = ({style, title, completed, ...props})=>{
    const colorScheme = useColorScheme();
    const theme = COLORS[colorScheme] ?? COLORS.light;
    const Logo = completed ? CorrectLogo : InvalidLogo;
    const {width, height} = useWindowDimensions();
    return (

        <ThemedView style={[
            {
                backgroundColor: theme.background,
                maxWidth: width,
            },
            styles.card, 
            style    
        ]}>
            <Image source={Logo} style={styles.logo}></Image>
            <ThemedText  style={styles.text}
            >{title}</ThemedText>

        </ThemedView>
    )
}

export default ThemedCard;

const styles = StyleSheet.create({
    card: {
        width: "100%",
        flexDirection: "row",
        gap: 20
    },
    text: {
        flexShrink: 1,
        marginVertical: 5,
        backgroundColor: "#888"
        //boxShadow: 
    },
    logo: {
        width: 32,
        height: 32
    }
})