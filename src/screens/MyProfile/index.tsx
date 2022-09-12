import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { BackButton } from "../../components/Form/BackButton";
import { BankData } from "../../components/Header/BankData";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import { Profile } from "../../components/Header/Profile";
import { api } from "../../services/api";

import { styles } from "./styles";

interface UserProps {
  name: string;
}

interface MyProfileProps {
  onChangeText?: boolean;
}

export function MyProfile({ onChangeText }: MyProfileProps) {
  const navigation = useNavigation();
  function backMyProfile() {
    navigation.navigate("homepage");
  }

  function exitTheApp() {
    navigation.navigate("login");
  }

  const [user, setUser] = useState<UserProps>();

  async function getUser() {
    try {
      const user = await api.get("/user/4");
      setUser(user.data);
      console.log("user", user.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const [bank, setBank] = useState<String>();
  const [account, setAccount] = useState<String>();
  const [agency, setAgency] = useState<String>();

  async function saveData() {
    try {
      const user = await api.patch("/user/3", {
        bank: bank,
        account: account,
        agency: agency,
      });
      navigation.navigate("homepage");
    } catch (error) {
      console.log("error", error);
    };
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Profile title={`Perfil de ${user?.name}`} />
        <View style={styles.back}>
          <BackButton onPress={backMyProfile} title="Voltar" color="#ffffff" />
        </View>
        <ImageHeadersWhite />
      </View>
      <View style={styles.content}>
        <View style={styles.view}>
          <TextInput style={styles.textInput}>Banco</TextInput>
          <TextInput
            style={styles.input}
            placeholder="Selecione o Banco"
            onChangeText={(value: string) => setBank(value)}
          />
          <TextInput style={styles.textInput}>Conta</TextInput>
          <TextInput
            style={styles.input}
            placeholder="Número da sua conta"
            onChangeText={(value: string) => setAccount(value)}
          />
          <TextInput style={styles.textInput}>Agência</TextInput>
          <TextInput
            style={styles.input}
            placeholder="Número da agência"
            onChangeText={(value: string) => setAgency(value)}
          />
          <TouchableOpacity onPress={saveData} activeOpacity={0.8}>
            <Text style={styles.touchableOpacity}>Salvar dados bancários</Text>
          </TouchableOpacity>
        </View>
        <BankData onPress={exitTheApp} />
      </View>
    </ScrollView>
  );
}
