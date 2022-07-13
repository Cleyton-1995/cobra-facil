import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function FooterHP() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.balance}>
          Cadastro incompleto
        </Text>
        <AntDesign style={{bottom: 15, left: 5 }} name="exclamationcircleo" size={12} color="#E53E3E" />
        <Text style={styles.title}>
          Complete seu cadastro para realizar cobranças
        </Text>
      </View>
      <View>
        <Text style={styles.personalInformation}>
          Informações pessoais
        </Text>
        <Text style={styles.personal}>
          Completo
        </Text>
      </View>
      <View>
        <Text style={styles.billingInformation}>
          Informações para recebimeto
        </Text>
        <Text style={styles.billing}>
          Para que você possa receber seu dinheiro.
        </Text>
      </View>
      <View>
        <Text style={styles.documentationInformation}>
          Documentação
        </Text>
        <Text style={styles.documentation}>
          Para termos certeza que você é uma pessoa real.
        </Text>
      </View>
    </View>
  );
}
