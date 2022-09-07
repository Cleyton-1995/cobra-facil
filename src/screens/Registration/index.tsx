import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { BackButton } from "../../components/Form/BackButton";
import { Input } from "../../components/Form/Input";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { MostHeaders } from "../../components/Header/MostHeaders";

import { styles } from "./styles";

export function Registrarion() {
  
  const navigation = useNavigation();
  function backScreenLogin() {
      navigation.navigate('login')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <BackButton onPress={backScreenLogin} title="Voltar" />
        <MostHeaders title="Cadastre-se" />
        <ImageHeaders />

        <View style={styles.mainContainer}>
          <View style={styles.name}>
            <Input label="Nome Completo" placeholder="Nome Completo" />
            <Input label="Telefone" placeholder="(  ) - - - - _ - - - -" />
          </View>
        </View>

        <View style={styles.emailContainer}>
          <View style={styles.email}>
            <Input label="E-mail" placeholder="Seu e-mail" />
            <Input label="Senha" placeholder="Sua senha" secureTextEntry   />
          </View>
        </View>

        <TouchableOpacity style={styles.access} activeOpacity={0.8}>
          <Text style={styles.accessColor}>Finalizar Cadastro</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
