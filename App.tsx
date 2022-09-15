import {
  Roboto_400Regular,
  Roboto_700Bold, useFonts
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import React from 'react';
import { StatusBar } from 'react-native';
import "react-native-gesture-handler";
import { Routes } from "./src/routes";
// import { Home } from './src/screens/ProfileUser';

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
        <StatusBar barStyle={'dark-content'} backgroundColor="light"/>
        <Routes />
    </>
  );
}