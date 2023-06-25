import React from "react";
import { TextInput } from "react-native";


export default AppTextInput = (props) => {
    return <TextInput {...props}  style={[props.style, { fontFamily: "Open-Sans" }]} />;
}