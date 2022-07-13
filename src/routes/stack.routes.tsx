import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Welcome } from "../screens/Welcome";
import { WelcomeOne } from "../screens/WelcomeOne";
import { WelcomeTwo } from "../screens/WelcomeTwo";
import { RecoverPassword } from "../screens/RecoverPassword";
import { Registrarion } from "../screens/Registration";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes () {
  return (
    <Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <Screen name="welcome" component={Welcome} />
      <Screen name="welcomeOne" component={WelcomeOne} />
      <Screen name="welcomeTwo" component={WelcomeTwo} />
      <Screen name="login" component={Login} />
      <Screen name="recoverPassword" component={RecoverPassword} />
      <Screen name="registration" component={Registrarion} />
    </Navigator>
  );
}