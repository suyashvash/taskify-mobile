import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingNavigator from './screens/onBoarding/onBoardIndex';
import { Routes } from './utils/routes';
import useFonts from './hooks/useFonts';
import AppLoading from 'expo-app-loading';


const AppStack = createStackNavigator();

function AppNavigator() {
  return (
    <AppStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <AppStack.Screen name={Routes.OnBoardingStack.tag} component={OnBoardingNavigator} />
    </AppStack.Navigator>
  );
}

export default function App() {


  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <NavigationContainer>
        <AppNavigator/>
    </NavigationContainer>
  );
}


