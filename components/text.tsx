import React,{ReactNode} from "react";
import { Text } from "react-native";

interface Props {
    children?: ReactNode
    style?: any
    bold?: boolean
    props?: any
}

export default function AppText ({ children, style,bold,props }: Props) {
    return <Text {...props} style={[style, { fontFamily: bold ? "Open-Sans-Bold" : "Open-Sans" }]}>{children}</Text>;
}