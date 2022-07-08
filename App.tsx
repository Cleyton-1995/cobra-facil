import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { Welcome } from './src/screens/Welcome';
import { WelcomeOne } from './src/screens/WelcomeOne';
import { WelcomeTwo } from './src/screens/WelcomeTwo';

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
      <StatusBar />
        <Login/>
    </>
  );
}