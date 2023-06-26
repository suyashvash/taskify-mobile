import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { Colors } from "../../utils/colors";
import AppText from "../../components/text";
import AppTextInput from "../../components/textInput";
import { Routes } from "../../utils/routes";

const LoginScreen = ({ navigation }) => {

    const login = () => {

    }

    const toRegister = () => {
        navigation.navigate(Routes.OnBoardingStack.signUpScreen);
    }


    return (
        <View style={styles.container}>

            <Image source={require('../../utils/images/loginV.png')} style={{width:'100%',height:100,marginBottom:20}} resizeMode="contain" />

            <AppText style={{fontSize:25,color:'white'}}>Welcome Back</AppText>
            <AppText style={{fontSize:14,color:'grey',marginTop:10}}>Login and Continue where you left !</AppText>


            <View style={{width:'100%',padding:10,marginTop:20,justifyContent:'center',alignItems:'center'}}>
                <AppTextInput 
                    placeholder="Email / Username"
                    placeholderTextColor={'grey'}
                    style={{width:'80%',padding:10,borderRadius:5,marginTop:10, color: "white",backgroundColor:Colors.accent }} />

                <AppTextInput 
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor={'grey'}
                    style={{width:'80%',padding:10,borderRadius:5,marginTop:10, color: "white",backgroundColor:Colors.accent }} />
            
            <TouchableOpacity style={{width:'80%',padding:10,paddingVertical:15,borderRadius:5,marginTop:20,justifyContent:'center',alignItems:'center',backgroundColor:Colors.third}}>
                <AppText style={{color:'white'}}>Login</AppText>
            </TouchableOpacity>

            <TouchableOpacity onPress={toRegister}  style={{width:'80%',marginTop:30,justifyContent:'center',alignItems:'center'}}>
                <AppText style={{color:'lightgrey'}}>Don't have an Account ? Register Now !</AppText>
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


export default LoginScreen;