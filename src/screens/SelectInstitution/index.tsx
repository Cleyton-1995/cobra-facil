import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { ImageHeaders } from "../../components/Header/ImageHeaders";

import { styles } from "./styles";

export function SelectInstitution() {
  const navigation = useNavigation();
  function back() {
    navigation.navigate("transfervalue");
  }

  function selectInstitution() {
    navigation.navigate("transferringdate");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={back} activeOpacity={0.8}>
        <AntDesign style={styles.icon} name="left" size={15} color="#0073FB" />
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>
      <ImageHeaders />

      <Text style={styles.title}>Cleyton de Souza Costa</Text>
      <Text style={styles.txt}>Transferindo R$ 10,00</Text>

      <TouchableOpacity activeOpacity={0.8} style={styles.bank}>
        <MaterialCommunityIcons
          style={styles.iconBank}
          name="bank-outline"
          size={24}
          color="black"
        />
        <Text style={styles.bankOne}>BCO BRADESCO S. A</Text>
        <Text style={styles.bankAccount}>Agência 0000 - Conta 0000-0</Text>
        <AntDesign style={styles.right} name="right" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={selectInstitution}
        activeOpacity={0.8}
        style={styles.bank}
      >
        <MaterialCommunityIcons
          style={styles.iconBank}
          name="bank-outline"
          size={24}
          color="black"
        />
        <Text style={styles.bankOne}>NU PAGAMENTOS S. A</Text>
        <Text style={styles.bankAccount}>Agência 0000 - Conta 0000-0</Text>
        <AntDesign style={styles.right} name="right" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} style={styles.bank}>
        <MaterialCommunityIcons
          style={styles.iconBank}
          name="bank-outline"
          size={24}
          color="black"
        />
        <Text style={styles.anotherInstitution}>Outra Instituição</Text>
        <AntDesign style={styles.right} name="right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
