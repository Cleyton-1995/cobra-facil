import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ImageHeaders } from "../../components/Header/ImageHeaders";

import { styles } from "./styles";

export function Home() {

  return (
    <View style={styles.container}>
      <TouchableOpacity  activeOpacity={0.8}>
        <AntDesign style={styles.icon} name="left" size={15} color="#0073FB" />
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Insira ou cole o a chave pix aqui
      </Text>
       <ImageHeaders/>

       <TextInput placeholder="Cole ou Copie Aqui" style={styles.textInput} />
       <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
          <Text style={styles.continues}>
            Continue
          </Text>
          <AntDesign style={styles.iconRight} name="right" size={25} color="white" />
        </TouchableOpacity>
    </View>
  );
}
