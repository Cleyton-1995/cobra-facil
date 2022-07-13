import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { ScrollView, View } from "react-native";
import { ButtonHomePage } from "../../components/Form/ButtonHomePage";
import { FooterHP } from "../../components/Form/FooterHP";
import { Input } from "../../components/Form/Input";
import { ProfileHeaders } from "../../components/Header/ProfileHeaders";

import { styles } from "./styles";

export function HomePage() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileHeaders title="Olá, Pedro!" />
      </View>
      <View style={styles.content}>
        <ButtonHomePage />
        <AntDesign style={styles.plus} name="plus" size={24} color="#0073FB" />
        <Feather
          style={styles.dollar_sign}
          name="dollar-sign"
          size={24}
          color="#0073FB"
        />
        <AntDesign
          style={styles.addusergroup}
          name="addusergroup"
          size={24}
          color="#0073FB"
        />
        <Feather
          style={styles.dollar}
          name="dollar-sign"
          size={24}
          color="#0073FB"
        />
        <FooterHP/>
      </View>
    </ScrollView>
  );
}
