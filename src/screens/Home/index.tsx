import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { InputPassword } from "../../components/Form/Button/InputPassword";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Input />
      <InputPassword />
      <TouchableOpacity style={styles.password}  activeOpacity={0.8}>
        <Text   style={styles.forgotPassword} >Esqueci minha senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.access} activeOpacity={0.8}>
        <Text style={styles.accessColor}>
          Acessar sua conta
          <AntDesign name="right" size={15} color="#009BF4" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registration}  activeOpacity={0.8}>
        <Text   style={styles.registrationColor} >Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
}
