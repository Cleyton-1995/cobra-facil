import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function Login() {
  return (
    <View style={styles.container}>
      <Header />
      <Input />
      <TouchableOpacity style={styles.access} activeOpacity={0.8}>
        <Text style={styles.accessColor}>
          Acessar sua conta
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registration}  activeOpacity={0.8}>
        <Text   style={styles.registrationColor} >Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
}
