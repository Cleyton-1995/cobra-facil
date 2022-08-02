import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { ImageHeaders } from "../../components/Header/ImageHeaders";

import { styles } from "./styles";

export function Home() {

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
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

       <TextInput placeholder="Nome, CPF/CPJ ou Chave Pix" style={styles.textInput} />
       <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
          <Text style={styles.continues}>
            Continue
          </Text>
          <AntDesign style={styles.iconRight} name="right" size={25} color="white" />
        </TouchableOpacity>
    </View>
  );
}
