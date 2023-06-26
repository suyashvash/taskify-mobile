import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppText from "../../components/text";
import AppTextInput from "../../components/textInput";
import { Routes } from "../../utils/routes";
import { Colors } from "../../utils/colors";


const SignUpScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>

            <Image source={require('../../utils/images/registerV.png')} style={{width:'100%',height:100,marginBottom:20}} resizeMode="contain" />

            <AppText style={{fontSize:25,color:'white'}}>Register</AppText>
            <AppText style={{fontSize:14,color:'grey',marginTop:10}}>And explore the amazing world with us !</AppText>

            <View style={{width:'100%',padding:10,marginTop:20,justifyContent:'center',alignItems:'center'}}>
                <AppTextInput 
                    placeholder="Enter Email"
                    placeholderTextColor={'grey'}
                    style={{width:'80%',padding:10,borderRadius:5,marginTop:10, color: "white",backgroundColor:Colors.accent }} />

                <AppTextInput 
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    placeholderTextColor={'grey'}
                    style={{width:'80%',padding:10,borderRadius:5,marginTop:10, color: "white",backgroundColor:Colors.accent }} />

                <AppTextInput 
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor={'grey'}
                    style={{width:'80%',padding:10,borderRadius:5,marginTop:10, color: "white",backgroundColor:Colors.accent }} />
            
            <TouchableOpacity style={{width:'80%',padding:10,paddingVertical:15,borderRadius:5,marginTop:20,justifyContent:'center',alignItems:'center',backgroundColor:Colors.third}}>
                <AppText style={{color:'white'}}>Register</AppText>
            </TouchableOpacity>

            <TouchableOpacity   style={{width:'80%',marginTop:30,justifyContent:'center',alignItems:'center'}}>
                <AppText style={{color:'lightgrey'}}>Already have an Account ? Login here !</AppText>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        color: "white",
        marginTop: 20,
        fontWeight: "500",
        fontFamily:"Open-Sans"
    },
})



export default SignUpScreen;