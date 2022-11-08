import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BackButton } from "../../components/Form/BackButton";
import { Card } from "../../components/Form/Card";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import { Profile } from "../../components/Header/Profile";
import { api } from "../../services/api";

import { styles } from "./styles";

type BanksProps = {
  id: string;
  bank: string;
  account: string;
  agency: string;
};

export function ProfileUser() {
  const [banks, setBanks] = useState<BanksProps[]>([]);

  async function getBanks() {
    const response = await api.get("/bank");
    setBanks(response.data);
  }

  useFocusEffect(
    useCallback(() => {
      getBanks();
    }, [])
  );

  const navigation = useNavigation();
  function back() {
    navigation.navigate("homepage");
  }

  function myProfile() {
    navigation.navigate("myprofile");
  }
  return (
    <View style={styles.container}>
      <Profile title="          Meu Perfil" />
      <View style={styles.back}>
        <BackButton onPress={back} title="Voltar" color="#ffffff" />
      </View>
      <MaterialIcons
        style={styles.profile}
        name="add-photo-alternate"
        size={24}
        color="#0073FB"
      />

      <ImageHeadersWhite />

      {banks.map((bank, index) => {
        return (
          <Card
            key={index}
            data={{
              bank: bank.bank,
              account: bank.account,
              agency: bank.agency,
            }}
          />
        );
      })}

      <TouchableOpacity activeOpacity={0.8} style={styles.touchableOpacity}>
        <Text
          onPress={myProfile}
          style={{ color: "#ffffff", textAlign: "center" }}
        >
          Atualização Cadastral
        </Text>
      </TouchableOpacity>
    </View>
  );
}
