import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { ImageHeaders } from "../../components/Header/ImageHeaders";

import { styles } from "./styles";

export function TypeYourPix() {
  const navigation = useNavigation();
  function back() {
    navigation.navigate("transfervalue");
  }

  function continues() {
    navigation.navigate("selectinstitution");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={back} activeOpacity={0.8}>
        <AntDesign style={styles.icon} name="left" size={15} color="#0073FB" />
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Para quem você quer transferir   R$ 0,00 ?
      </Text>
       <ImageHeaders/>

       <Text style={styles.txt} >
        Encontre um contato na sua lista ou inicie uma nova transferência
       </Text>

       <TextInput placeholder="Nome, CPF/CNPJ ou Chave Pix" style={styles.textInput} />
       <TouchableOpacity onPress={continues} style={styles.btn} activeOpacity={0.8}>
          <Text style={styles.continues}>
            Continue
          </Text>
          <AntDesign style={styles.iconRight} name="right" size={25} color="white" />
        </TouchableOpacity>
    </View>
  );
}
