import React from "react";
import { Text } from "react-native";

export default AppText = ({ children, style,props }) => {
    return <Text {...props} style={[style, { fontFamily: "Open-Sans" }]}>{children}</Text>;
}