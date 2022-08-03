import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ImageHeaders } from "../../components/Header/ImageHeaders";

import { styles } from "./styles";

export function InsertPassword() {
  const navigation = useNavigation();
  function back() {
    navigation.navigate("selectinstitution");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={back} activeOpacity={0.8}>
          <AntDesign style={styles.icon}  name="left" size={15} color="#0073FB" />
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <ImageHeaders />

        <Text style={styles.title}>Insira a senha</Text>
        <Text style={styles.title}>de 4 dígitos</Text>
       

        <View style={styles.transferring}>
          <TextInput style={styles.textInput} placeholder="Senha" secureTextEntry maxLength={4} keyboardType="numeric" />

           <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.txtbtn}>
              Transferir
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
