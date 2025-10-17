import { Text, useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";


export default function ThemedText ({ style, title=false, ...props}){
    const colorScheme = useColorScheme();
    const theme = COLORS[colorScheme] ??  COLORS.light;
   
   
    return <Text style={[{
        color: title ? theme.title : theme.text
    },  style]} {...props}></Text>
}  