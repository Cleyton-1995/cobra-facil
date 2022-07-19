import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View, } from "react-native";
import { BackButtonWhite } from "../../components/Form/BackButtonWhite";
import { BankData } from "../../components/Header/BankData";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import { Profile } from "../../components/Header/Profile";

import { styles } from "./styles";

export function MyProfile() {
  const navigation = useNavigation();
  function backMyProfile() {
    navigation.navigate("homepage");
  }

  function exitTheApp() {
    navigation.navigate("login");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Profile title="Perfil de  Pedro" />
        <BackButtonWhite onPress={backMyProfile} title="Voltar" />
        <ImageHeadersWhite />
      </View>
      <View style={styles.content}>
      <BankData onPress={exitTheApp} />   
      </View>
    </ScrollView>
  );
}
