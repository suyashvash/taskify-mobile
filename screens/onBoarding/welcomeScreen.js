import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { Colors } from "../../utils/colors";
import AppText from "../../components/text";
import AppTextInput from "../../components/textInput";
import { Routes } from "../../utils/routes";

const WelcomeScreen = ({ navigation }) => {

    const toLogin = () => {
        navigation.navigate(Routes.OnBoardingStack.loginScreen);
    }

    const toRegister = () => {
        navigation.navigate(Routes.OnBoardingStack.signUpScreen);
    }


    return (
        <View style={styles.container}>

            <AppText style={{fontSize:35,color:'white'}}>Taskify</AppText>
            <AppText style={{fontSize:14,color:'grey',marginTop:10,marginBottom:30}}>Task with Gamification !</AppText>

            <TouchableOpacity onPress={toLogin} style={{width:'80%',padding:10,paddingVertical:15,borderRadius:5,marginTop:20,justifyContent:'center',alignItems:'center',backgroundColor:Colors.third}}>
                <AppText style={{color:'white'}}>Login</AppText>
            </TouchableOpacity>

            <TouchableOpacity onPress={toRegister} style={{width:'80%',padding:10,paddingVertical:15,borderRadius:5,marginTop:20,justifyContent:'center',alignItems:'center',borderColor:Colors.third,borderWidth:2}}>
                <AppText style={{color:'white'}}>Register</AppText>
            </TouchableOpacity>
            
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


export default WelcomeScreen;