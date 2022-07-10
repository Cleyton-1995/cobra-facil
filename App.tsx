import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';
import { RecoverPassword } from './src/screens/RecoverPassword';

export default function App() {
    const [fontsLoaded] = useFonts({
      Roboto_400Regular,
      Roboto_700Bold,
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    }
  
  return (
    <>
      <StatusBar backgroundColor='light' />
        <RecoverPassword/>
    </>
  );
}