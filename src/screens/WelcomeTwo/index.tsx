import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Image, Text } from "react-native";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Image style={styles.image}
        source={require("../../assets/image_35-1.png")}/>
      <Text style={styles.salutation}>Realize cobranças automáticas</Text>
      <Text style={styles.next}>
        Fazer login
        <AntDesign name="right" size={15} color="#009BF4" />
      </Text>
    </View>
  );
}
