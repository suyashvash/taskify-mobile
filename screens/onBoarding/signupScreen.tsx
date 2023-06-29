import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import AppText from "../../components/text";
import AppTextInput from "../../components/textInput";
import { Routes } from "../../utils/routes";
import { Colors } from "../../utils/colors";
import axios from "axios";
import { LoadingModal } from "react-native-loading-modal";
import { ApiCollection } from "../../utils/configs/envConfig";

interface SignupProps {
    navigation: any
}


const SignUpScreen = ({ navigation }:SignupProps) => {

    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [confirmPassword, setConfirmPassword] = useState<String>("");


    const register =async () => {
        if(username.length == 0 || password.length == 0 || confirmPassword.length == 0){
            Alert.alert("Register","Please fill all the fields")
            return
        }

        if(password != confirmPassword){
            Alert.alert("Register","Passwords do not match")
            return
        }

        setIsLoading(true)
        await axios.post(ApiCollection.auth.register,{
            "email": username.toLowerCase(),
            "password": password
          })
        .then((res)=>{
            console.log(res)

            if(res.data.status){
                Alert.alert("Success",res.data.message)
                navigation.navigate(Routes.OnBoardingStack.loginScreen, { email: username.toLowerCase() });
            }else{
                Alert.alert("Error",res.data.message)
            }
            setIsLoading(false)
        })
        .catch((err)=>{
            console.warn(err)
            setIsLoading(false)
        })
    }

    const toLogin = () => {
        navigation.navigate(Routes.OnBoardingStack.loginScreen);
    }

    return (
        <View style={styles.container}>

            <LoadingModal modalVisible={isLoading}/>

            <Image source={require('../../utils/images/registerV.png')} style={{width:'100%',height:100,marginBottom:20}} resizeMode="contain" />

            <AppText style={{fontSize:25,color:'white'}}>Register</AppText>
            <AppText style={{fontSize:14,color:'grey',marginTop:10}}>And explore the amazing world with us !</AppText>

            <View style={{width:'100%',padding:10,marginTop:20,justifyContent:'center',alignItems:'center'}}>
                <AppTextInput 
                    placeholder="Enter Email"
                    placeholderTextColor={'grey'}
                    onChangeText={(text:String)=>setUsername(text)}
                    style={{width:'80%',padding:10,borderRadius:5,marginTop:10, color: "white",backgroundColor:Colors.accent }} />

                <AppTextInput 
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    placeholderTextColor={'grey'}
                    onChangeText={(text:String)=>setPassword(text)}
                    style={{width:'80%',padding:10,borderRadius:5,marginTop:10, color: "white",backgroundColor:Colors.accent }} />

                <AppTextInput 
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor={'grey'}
                    onChangeText={(text:String)=>setConfirmPassword(text)}
                    style={{width:'80%',padding:10,borderRadius:5,marginTop:10, color: "white",backgroundColor:Colors.accent }} />
            
            <TouchableOpacity onPress={register} style={{width:'80%',padding:10,paddingVertical:15,borderRadius:5,marginTop:20,justifyContent:'center',alignItems:'center',backgroundColor:Colors.third}}>
                <AppText style={{color:'white'}}>Register</AppText>
            </TouchableOpacity>

            <TouchableOpacity onPress={toLogin}  style={{width:'80%',marginTop:30,justifyContent:'center',alignItems:'center'}}>
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