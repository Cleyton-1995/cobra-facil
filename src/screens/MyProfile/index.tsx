import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  AsyncStorage,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Toast from "react-native-toast-message";
import uuid from "react-native-uuid";
import { BackButton } from "../../components/Form/BackButton";
import { BankData } from "../../components/Header/BankData";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import { Profile } from "../../components/Header/Profile";
import { api } from "../../services/api";

import { styles } from "./styles";

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

  const [bank, setBank] = useState<String>();
  const [account, setAccount] = useState<String>();
  const [agency, setAgency] = useState<String>();

    async function dataBank() {
      try {
        const id = uuid.v4();

        const bankData = await api.post("/bank", {
          bank: bank,
          account: account,
          agency: agency,
        });

        Toast.show({
          type: "success",
          text1: "Cadastrado com sucesso!",
        });
      } catch (error) {
        console.log(error);

        Toast.show({
          type: "error",
          text1: "Não foi possível cadastrar.",
        });
      };
    };

    async function handleNew() {
      try {
        const id = uuid.v4();

        const newData = {
          id,
          bank,
          account,
          agency,
        };

        await AsyncStorage.setItem(
          "@cobranca-facil:userData",
          JSON.stringify(newData)
        );

        Toast.show({
          type: "success",
          text1: "Cadastrado com sucesso!",
        });
      } catch (error) {
        console.log(error);

        Toast.show({
          type: "error",
          text1: "Não foi possível cadastrar.",
        });
      };
      navigation.navigate("profileuser");
    };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Profile title={"Olá"} />
        <View style={styles.back}>
          <BackButton onPress={backMyProfile} title="Voltar" color="#ffffff" />
        </View>
        <ImageHeadersWhite />
      </View>
      <View style={styles.content}>
        <View style={styles.view}>
          <TextInput editable={false} style={styles.textInput}>
            Banco
          </TextInput>
          <TextInput
            style={styles.input}
            placeholder="Selecione o Banco"
            onChangeText={setBank}
          />
          <TextInput editable={false} style={styles.textInput}>
            Conta
          </TextInput>
          <TextInput
            style={styles.input}
            placeholder="Número da sua conta"
            onChangeText={setAccount}
          />
          <TextInput editable={false} style={styles.textInput}>
            Agência
          </TextInput>
          <TextInput
            style={styles.input}
            placeholder="Número da agência"
            onChangeText={setAgency}
          />
          <TouchableOpacity onPress={handleNew} onPressIn={dataBank} activeOpacity={0.8}>
            <Text style={styles.touchableOpacity}>Salvar dados bancários</Text>
          </TouchableOpacity>
        </View>
        <BankData onPress={exitTheApp} />
      </View>
    </ScrollView>
  );
}
