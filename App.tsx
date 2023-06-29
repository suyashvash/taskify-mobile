import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingNavigator from './screens/onBoarding/onBoardIndex';
import { Routes } from './utils/routes';
import useFonts from './hooks/useFonts';
import AppLoading from 'expo-app-loading';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import store from './utils/reduxStore/app/store';
import Main from './screens/app/main';
import { LoggedIn } from './utils/reduxStore/app/useStore';

const AppStack = createStackNavigator();

function AppNavigator() {

  const loggedIn = LoggedIn();



  return (
    <AppStack.Navigator initialRouteName={loggedIn ? Routes.mainAppStack.tag : Routes.OnBoardingStack.tag} screenOptions={{
      headerShown: false,
    }}>
      <AppStack.Screen name={Routes.OnBoardingStack.tag} component={OnBoardingNavigator} />
      <AppStack.Screen name={Routes.mainAppStack.tag} component={Main} />
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

  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <NavigationContainer>
            <AppNavigator/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


