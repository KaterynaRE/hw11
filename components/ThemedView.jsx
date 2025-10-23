import { View, useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";
import { ContextTColor, useColor } from "../contexts/ColorContext";

export default function ThemedView({ style, ...props }) {
    const { dark } = useColor();
    const theme = dark ? COLORS.dark : COLORS.light;

    // const colorScheme = useColorScheme();
    // const theme = COLORS[colorScheme] ??  COLORS.light;
    return <View style={[{ backgroundColor: theme.background }, style]} {...props} />
}