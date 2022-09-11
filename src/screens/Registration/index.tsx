import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { BackButton } from "../../components/Form/BackButton";
import { Input } from "../../components/Form/Input";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { MostHeaders } from "../../components/Header/MostHeaders";
import { api } from "../../services/api";

import { styles } from "./styles";

export function Registrarion() {
  const navigation = useNavigation();
  function backScreenLogin() {
    navigation.navigate("login");
  }

  const [name, setName] = useState<String>();
  const [email, setEmail] = useState<String>();
  const [phone, setPhone] = useState<String>();
  const [password, setPassword] = useState<String>();

  async function createUser() {
    try {
      const user = await api.post("/user", {
        name: name,
        email: email,
        phone: phone,
        password: password,
      });
      navigation.navigate("login")
      
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <BackButton onPress={backScreenLogin} title="Voltar" />
        <MostHeaders title="Cadastre-se" />
        <ImageHeaders />

        <View style={styles.mainContainer}>
          <View style={styles.name}>
            <Input
              label="Nome Completo"
              placeholder="Nome Completo"
              onChangeText={(value: string) => setName(value)}
            />
            <Input
              label="Telefone"
              placeholder="(  ) - - - - _ - - - -"
              onChangeText={(value: string) => setPhone(value)}
            />
          </View>
        </View>

        <View style={styles.emailContainer}>
          <View style={styles.email}>
            <Input
              label="E-mail"
              placeholder="Seu e-mail"
              onChangeText={(value: string) => setEmail(value)}
            />
            <Input
              label="Senha"
              placeholder="Sua senha"
              secureTextEntry
              onChangeText={(value: string) => setPassword(value)}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={createUser}
          style={styles.access}
          activeOpacity={0.8}
        >
          <Text style={styles.accessColor}>Finalizar Cadastro</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
