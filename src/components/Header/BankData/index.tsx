import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface BankDataProps {
  onPress: () => void;
}

export function BankData( { onPress }: BankDataProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.balance}>Dados Bancários</Text>
      <View style={styles.view}>
        <TextInput style={styles.textInput}>Banco</TextInput>
        <TextInput style={styles.input} placeholder="Selecione o Banco" />
        <TextInput style={styles.textInput}>Conta</TextInput>
        <TextInput style={styles.input} placeholder="Número da sua conta" />
        <TextInput style={styles.textInput}>Agência</TextInput>
        <TextInput style={styles.input} placeholder="Número da agência" />

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.touchableOpacity}>Salvar dados bancários</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
      <TouchableOpacity   activeOpacity={0.8}>
      <AntDesign style={styles.icons}  name="questioncircleo" size={20} color="black" />
        <Text style={styles.help}>
          Ajuda
          </Text>
      </TouchableOpacity>
      </View>

      <View style={styles.footer}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <MaterialCommunityIcons style={styles.icons}  name="logout" size={20} color="black" />
        <Text style={styles.help} >
        Sair do aplicativo
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
