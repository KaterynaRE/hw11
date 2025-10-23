import { Text, useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";
import { ContextTColor, useColor } from "../contexts/ColorContext";


export default function ThemedText ({ style, title=false, ...props}){
    const {dark} = useColor();
    const theme = dark ? COLORS.dark : COLORS.light;
    //const colorScheme = useColorScheme();
    //const theme = COLORS[colorScheme] ??  COLORS.light;
   
   
    return <Text style={[{
        color: title ? theme.title : theme.text
    },  style]} {...props}></Text>
}  