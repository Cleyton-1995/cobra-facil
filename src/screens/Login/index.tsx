import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header/HeaderWelcome";

import { styles } from "./styles";

export function Login() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        <Text style={styles.login}>Acesse sua conta</Text>
        <Input label="E-mail" placeholder="Seu e-mail" />
        <Input label="Senha" placeholder="Sua senha" type="password" />
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.access} activeOpacity={0.8}>
          <Text style={styles.accessColor}>Acessar sua conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registration} activeOpacity={0.8}>
          <Text style={styles.registrationColor}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
