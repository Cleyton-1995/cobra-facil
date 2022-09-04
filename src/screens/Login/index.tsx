import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header/HeaderWelcome";

import { styles } from "./styles";

export function Login() {

  const navigation = useNavigation();
  function openRecoverPassword() {
    navigation.navigate("recoverPassword");
  }

  function register() {
    navigation.navigate("registration");
  }

  function login() {
    navigation.navigate("homepage")
  }
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.mainContainer}>
          <Text style={styles.login}>Acesse sua conta</Text>
          <View style={styles.email}>
            <Input
              label="E-mail"
              placeholder="Seu e-mail"
            />
            <Input
              label="Senha"
              placeholder="Sua senha"
              type="password"
              secureTextEntry

            />
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <Text onPress={openRecoverPassword} style={styles.forgotPassword}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={login}
            style={styles.access}
            activeOpacity={0.8}
          >
            <Text onPress={login} style={styles.accessColor}>
              Acessar sua conta
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registration} activeOpacity={0.8}>
            <Text onPress={register} style={styles.registrationColor}>
              Cadastrar-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
