import React,{useEffect, useState} from "react";
import { View, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { Colors } from "../../utils/colors";
import AppText from "../../components/text";
import AppTextInput from "../../components/textInput";
import { Routes } from "../../utils/routes";
import axios from "axios";
import { LoadingModal } from "react-native-loading-modal";
import { ApiCollection } from "../../utils/configs/envConfig";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../utils/reduxStore/features/userSlice";

interface LoginProps {
    navigation: any,
    route: any
}

const LoginScreen = ({ navigation,route }:LoginProps) => {

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    const login =async () => {
        if(username.length == 0 || password.length == 0){
            Alert.alert("Login","Please fill all the fields")
            return
        }
        setIsLoading(true)
        await axios.post(ApiCollection.auth.login,{
            "email": username.toLowerCase(),
            "password": password
          })
        .then((res)=>{
            console.log(res.data)
            if(res.data.status){
                Alert.alert("Success",res.data.message)
                if(res.data.result != ""){
                    dispatch(setActiveUser({userToken:res.data.result.token,loggedIn: true}))
                }
            }
            setIsLoading(false)
        })
        .catch((err)=>{
            console.warn(err.response.data)
            Alert.alert("Error",err.response?.data?.message || 'Somthing went wrong')
            setIsLoading(false)
        })
    }

    const toRegister = () => {
        navigation.navigate(Routes.OnBoardingStack.signUpScreen);
    }


    return (
        <View style={styles.container}>
            <LoadingModal modalVisible={isLoading}/>
            <Image source={require('../../utils/images/loginV.png')} style={{width:'100%',height:100,marginBottom:20}} resizeMode="contain" />

            <AppText style={{fontSize:25,color:'white'}}>Welcome Back</AppText>
            <AppText style={{fontSize:14,color:'grey',marginTop:10}}>Login and Continue where you left !</AppText>


            <View style={{width:'100%',padding:10,marginTop:20,justifyContent:'center',alignItems:'center'}}>
                <AppTextInput 
                    placeholder="Email / Username"
                    placeholderTextColor={'grey'}
                    onChangeText={(text:String)=>setUsername(text)}
                    style={{width:'80%',padding:10,borderRadius:5,marginTop:10, color: "white",backgroundColor:Colors.accent }} />

                <AppTextInput 
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor={'grey'}
                    onChangeText={(text:String)=>setPassword(text)}
                    style={{width:'80%',padding:10,borderRadius:5,marginTop:10, color: "white",backgroundColor:Colors.accent }} />
            
            <TouchableOpacity onPress={login} style={{width:'80%',padding:10,paddingVertical:15,borderRadius:5,marginTop:20,justifyContent:'center',alignItems:'center',backgroundColor:Colors.third}}>
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