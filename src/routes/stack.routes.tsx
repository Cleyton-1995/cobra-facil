import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Welcome } from "../screens/Welcome";
import { WelcomeOne } from "../screens/WelcomeOne";
import { WelcomeTwo } from "../screens/WelcomeTwo";
import { RecoverPassword } from "../screens/RecoverPassword";
import { Registrarion } from "../screens/Registration";
import { HomePage } from "../screens/HomePage";
import { MyProfile } from "../screens/MyProfile";
import { NewCharge } from "../screens/NewCharge";
import { CustomerList } from "../screens/CustomerList";
import { NewCustomer } from "../screens/NewCustomer";
import { CustomerProfile } from "../screens/CustomerProfile";
import { PixArea } from "../screens/PixArea";
import { TransferValue } from "../screens/TransferValue";
import { TypeYourPix } from "../screens/TypeYourPix";
import { SelectInstitution } from "../screens/SelectInstitution";
import { TransferringDate } from "../screens/TransferringDate";

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
      <Screen name="homepage" component={HomePage} />
      <Screen name="myprofile" component={MyProfile} />
      <Screen name="newcharge" component={NewCharge} />
      <Screen name="customerlist" component={CustomerList} />
      <Screen name="newcustomer" component={ NewCustomer} />
      <Screen name="customerprofile" component={ CustomerProfile } />
      <Screen name="pixarea" component={ PixArea } />
      <Screen name="transfervalue" component={ TransferValue } />
      <Screen name="typeyourpix" component={ TypeYourPix } />
      <Screen name="selectinstitution" component={ SelectInstitution } />
      <Screen name="transferringdate" component={ TransferringDate } />
    </Navigator>
  );
}