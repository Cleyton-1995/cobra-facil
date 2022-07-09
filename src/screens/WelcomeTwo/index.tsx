import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text} from "react-native";
import Button from "../../components/Form/Button";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function WelcomeTwo() {
  const navigation = useNavigation();
  function openScreenLogin() {
    navigation.navigate('login');
  }
  return (
    <View style={styles.container}>
      <Header/>
      <Image style={styles.image}
        source={require("../../assets/image_35-1.png")}/>
      <Text style={styles.salutation}>Realize cobranças automáticas</Text>
      <Button label="Fazer login" onPress={openScreenLogin} />
    </View>
  );
}
