import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { BackButton } from "../../components/Form/BackButton";
import { Input } from "../../components/Form/Input";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { MostHeaders } from "../../components/Header/MostHeaders";

import { styles } from "./styles";

export function RecoverPassword() {
  const navigation = useNavigation();
  function backScreenLogin() {
    navigation.navigate('login');
  }
  return (
    <ScrollView>
    <View  style={styles.container}>
      <BackButton onPress={backScreenLogin} title="Voltar" />
      <MostHeaders title="Recuperar Senha" />
      <ImageHeaders/>
      <View style={styles.mainContainer}>
        <Text style={styles.text}>
          Para recuperar a sua senha, você precisa fornecer o e-mail da sua
          conta. Depois é só seguir o passo a passo do e-mail que iremos lhe
          enviar.
        </Text>
        <View style={styles.email}>
        <Input  label="E-mail" placeholder="Seu e-mail" />
        </View>
        <TouchableOpacity style={styles.access} activeOpacity={0.8}>
          <Text style={styles.accessColor}>Enviar e-mail</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>

  );
}
