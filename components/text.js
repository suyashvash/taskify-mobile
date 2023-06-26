import React from "react";
import { Text } from "react-native";

export default AppText = ({ children, style,bold,props }) => {
    return <Text {...props} style={[style, { fontFamily: bold ? "Open-Sans-Bold" : "Open-Sans" }]}>{children}</Text>;
}