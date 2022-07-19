import React from "react";
import { ScrollView, View, } from "react-native";
import { BackButtonWhite } from "../../components/Form/BackButtonWhite";
import { BankData } from "../../components/Header/BankData";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import { Profile } from "../../components/Header/Profile";

import { styles } from "./styles";

export function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Profile title="Perfil de  Pedro" />
        <BackButtonWhite title="Voltar" />
        <ImageHeadersWhite />
      </View>
      <View style={styles.content}>
      </View>
    </ScrollView>
  );
}
