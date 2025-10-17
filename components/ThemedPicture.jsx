import { View, useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";

export default function ThemedView({ style, ...props }) {
    const colorScheme = useColorScheme();
    const theme = COLORS[colorScheme] ?? COLORS.light;

    return (
        <View
            style={[
                {
                    borderColor: theme.border,
                    margin: 5,
                    width: 180,
                    height: 180,
                },
                style,]}
            {...props}
        />
    );
}
