import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./loginScreen";
import SignUpScreen from "./signupScreen";
import { Routes } from "../../utils/routes";
import WelcomeScreen from "./welcomeScreen";

const OnBoardStack = createStackNavigator();

function OnBoardingNavigator() {
  return (
    <OnBoardStack.Navigator 
    screenOptions={{
        headerShown: false
    }}
    initialRouteName={Routes.OnBoardingStack.welcomeScreen}
    >
      <OnBoardStack.Screen name={Routes.OnBoardingStack.welcomeScreen} component={WelcomeScreen} />
      <OnBoardStack.Screen name={Routes.OnBoardingStack.loginScreen} component={LoginScreen} />
      <OnBoardStack.Screen name={Routes.OnBoardingStack.signUpScreen} component={SignUpScreen} />

    </OnBoardStack.Navigator>
  );
}

export default OnBoardingNavigator;