import { View } from "react-native"

const Spacer = ({ height=40, width="100%", style, ...props  }) => {
    return <View style={[{height, width}, style]} {...props}></View>
}

export default Spacer;