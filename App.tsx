import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';

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
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="light"/>
        <Routes/>
    </>
  );
}