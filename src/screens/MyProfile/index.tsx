import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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

import { styles } from "./styles";

type CardProps = {
  id: string;
  bank: string;
  account: string;
  agency: string;
}

interface MyProfileProps {
  onChangeText?: boolean;
  data: CardProps;
};

export function MyProfile({ onChangeText }: MyProfileProps) {
  const [ data, setData ] = useState<CardProps[]>([])

  const navigation = useNavigation();
  function backMyProfile() {
    navigation.navigate("homepage");
  }

  function exitTheApp() {
    navigation.navigate("login");
  }

  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [agency, setAgency] = useState("");

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
        "@cobranca-facil:bank",
        JSON.stringify(newData)
        );
        console.log(newData);
      Toast.show({
        type: "success",
        text1: "Cadastro com sucesso",
      });
    } catch (err) {
      console.log(err);

      Toast.show({
        type: "error",
        text1: "Cadastro não realizado"
      });
    }


    async function handleFectchData() {
      const response = await AsyncStorage.getItem("@cobranca-facil:bank");
      const data = response ? JSON.parse(response) : {};
      setData([data]);
      console.log(response);
    }

    useEffect(() =>{
      handleFectchData();
    }, [])
  }

  return (
    <ScrollView >
      <View style={styles.container}>
        <Profile title={"Olá"} />
        <View style={styles.back}>
          <BackButton onPress={backMyProfile} title="Voltar" color="#ffffff" />
        </View>
        <ImageHeadersWhite />
      </View>
      <View style={styles.content}>
        <View style={styles.view}>
          <TextInput editable={false} style={styles.textInput}>Banco</TextInput>
          <TextInput
            style={styles.input}
            placeholder="Selecione o Banco"
            onChangeText={setBank}
            // data={data}
            // value={bank}
          />
          <TextInput editable={false} style={styles.textInput}>Conta</TextInput>
          <TextInput
            style={styles.input}
            placeholder="Número da sua conta"
            onChangeText={setAccount}
            // value={account}
          />
          <TextInput editable={false} style={styles.textInput}>Agência</TextInput>
          <TextInput
            style={styles.input}
            placeholder="Número da agência"
            onChangeText={setAgency}
            // value={agency}
          />
          <TouchableOpacity onPress={handleNew} activeOpacity={0.8}>
            <Text style={styles.touchableOpacity}>Salvar dados bancários</Text>
          </TouchableOpacity>
        </View>
        <BankData onPress={exitTheApp} />
      </View>
    </ScrollView>
  );
}
