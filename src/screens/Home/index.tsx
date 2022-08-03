import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ImageHeaders } from "../../components/Header/ImageHeaders";

import { styles } from "./styles";

export function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8}>
          <AntDesign style={styles.icon}  name="left" size={15} color="#0073FB" />
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <ImageHeaders />

        <Text style={styles.title}>Pronto, enviamos sua transferência</Text>

        <View style={styles.transferring}>
        <Text style={styles.value}>R$ 10,00</Text>
        <Text style={styles.person}>para CLEYTON DE SOUZA COSTA</Text>

           <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
              <Entypo style={styles.shareProof} name="text-document" size={24} color="white" />
            <Text style={styles.txtbtn}>
              Enviar comprovate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
