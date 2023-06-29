import React, { useEffect,useState } from "react";
import { UserToken, LoggedIn } from "../../utils/reduxStore/app/useStore";
import { View,Text,Image } from "react-native";
import axios from "axios";
import { ApiCollection } from "../../utils/configs/envConfig";


export default function Main() {

    const token = UserToken();

    useEffect(async() => {
        await axios.get(ApiCollection.user.getUser, {headers: {Authorization: `Bearer ${token}`}})
        .then(res => {
            console.log(res.data)
            setUser(res.data.result)
        })
        .catch(err => {
            console.log(err)
        })

    },[])



    const [user, setUser] = useState(null);


    return(
        user !== null &&
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Hello, {user.username}</Text>
        </View>
    )
}