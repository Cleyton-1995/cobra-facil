import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BackButton } from "../../components/Form/BackButton";
import { Card, CardProps } from "../../components/Form/Card";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import { Profile } from "../../components/Header/Profile";

import { styles } from "./styles";

export function ProfileUser() {
  const [data, setData] = useState<CardProps[]>([]);

  async function handleFetchData() {
    const response = await AsyncStorage.getItem("@cobranca-facil:userData");
    const data = response ? JSON.parse(response) : {};
    setData(data);
  }


  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));
  
  const navigation = useNavigation();
  function back() {
    navigation.navigate('homepage');
  };

  function myProfile() {
    navigation.navigate('myprofile');
  };
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
      <Card data={data}/>
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
