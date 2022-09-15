import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BackButton } from "../../components/Form/BackButton";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import { Profile } from "../../components/Header/Profile";

import { styles } from './styles';

export function ProfileUser() {
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
      <MaterialIcons style={styles.profile} name="add-photo-alternate" size={24} color="#0073FB" />
    
      <ImageHeadersWhite />

      <View style={styles.data}>
        <Text style={styles.text}>
          Nome
          <Text style={{ color: "#0073FB" }}> Cleyton de Souza Costa</Text>
        </Text>
        <Text style={styles.text}>
          Agência
          <Text style={{ color: "#0073FB" }}> 0000</Text>
        </Text>
        <Text style={styles.account}>
          Conta
          <Text style={{ color: "#0073FB" }}> 00000-0</Text>
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.touchableOpacity}>
        <Text onPress={myProfile} style={{ color: "#ffffff", textAlign: "center" }}>Atualização Cadastral</Text>
      </TouchableOpacity>
    </View>
  );
}


