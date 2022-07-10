import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import Button from "../../components/Form/Button";
import { Header } from "../../components/Header/HeaderWelcome";
import { styles } from "./styles";

export function Welcome() {
  const navigation = useNavigation();
  function openWelcomeOne() {
    navigation.navigate('welcomeOne');
  }

  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={require("../../assets/Group_737.png")}
      />
      <Text style={styles.salutation}>Olá! Que bom ver você por aqui!</Text>
      <Text style={styles.paragraph}>
        O cobra fácil é um facilitador de cobranças, aqui você pode deixar suas
        cobranças salvas e realizá-las automaticamente todos os meses.
      </Text>
      <Button label="Próximo"  onPress={openWelcomeOne}/>
    </View>
  );
}
