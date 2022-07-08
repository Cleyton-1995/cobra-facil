import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

import { styles } from "./styles";

export function Input() {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Acesse sua conta</Text>
      <Text style={styles.email}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
      />

      <Text style={styles.password}>Senha</Text>
      <TextInput style={styles.input} placeholder="******" />
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="eye" color="COLORS.GRAY_PRIMARY" size={20} />
      </TouchableOpacity>
    </View>
  );
}
