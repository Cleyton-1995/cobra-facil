import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function ButtonHomePage() {
  return (
    <View style={styles.container}>
      <TouchableOpacity disabled>
        <Text style={styles.charge}>
          Criar Cobrança
        </Text>
      </TouchableOpacity>
      <TouchableOpacity disabled>
        <Text style={styles.invoicing}>Faturameto</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled>
        <Text style={styles.transfer}>Transferir</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled>
        <Text style={styles.customers}>Clietes</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
}
