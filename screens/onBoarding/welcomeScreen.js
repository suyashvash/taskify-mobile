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

            <View style={{width:'100%',height:'60%',position:'absolute',top:10,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../../utils/images/welcome1.png')} style={{width:'100%',height:450}} resizeMode="contain" />

            </View>

            <View style={{width:'100%',justifyContent:'center',alignItems:'center',position:'absolute',bottom:50 }}>

                <AppText bold={true} style={{fontSize:25,color:'white'}}>Welcome to Taskify</AppText>
                <AppText style={{fontSize:14,color:'grey',marginTop:10,marginBottom:20,width:'65%',textAlign:'center'}}>Join the new world where completing tasks is Fun!</AppText>

                <TouchableOpacity onPress={toLogin} style={{width:'80%',padding:15,borderRadius:50,marginTop:20,justifyContent:'center',alignItems:'center',backgroundColor:Colors.third}}>
                    <AppText style={{color:'white'}}>Login</AppText>
                </TouchableOpacity>

                <TouchableOpacity onPress={toRegister} style={{width:'80%',padding:10,borderRadius:5,marginTop:10,justifyContent:'center',alignItems:'center'}}>
                    <AppText style={{color:'white'}}>Register</AppText>
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


export default WelcomeScreen;