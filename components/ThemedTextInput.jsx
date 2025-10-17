import { TextInput, useColorScheme } from "react-native"
import { COLORS } from "../constants/colors";

const ThemedTextInput = ({style, ...props})=>{
    const colorScheme = useColorScheme();
    const theme = COLORS[colorScheme] ?? COLORS.light;
    return (
        <TextInput
        style={[{
            backgroundColor: theme.backgroundUI,
            color: theme.text,
            borderRadius: 6,
            padding: 10,
        }, style]}
        placeholderTextColor={theme.placeholderText}
        {...props}
        />
    )
}

export  default ThemedTextInput;