import React from "react";
import { TextInput } from "react-native";


export default AppTextInput = (props) => {
    return <TextInput 
        {...props}  
        onChangeText={(text) => props.onChangeText(text)}
        style={[props.style, { fontFamily: "Open-Sans" }]} />;
}