import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Image, Text} from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import Button from "../../components/Form/Button";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigation = useNavigation();
  function openWelcomeOne() {
    navigation.navigate('welcomeOne');
  }

  return (
    <View style={styles.container}>
      <Header />
      <Image
        style={styles.image}
        source={require("../../assets/Group_737.png")}
      />
      <Text style={styles.salutation}>Olá! Que bom ver você por aqui!</Text>
      <Text style={styles.paragraph}>
        O cobra fácil é um facilitador de cobranças, aqui você pode deixar suas
        cobranças salvas e realizá-las automaticamente todos os meses.
      </Text>
      <Button onPress={openWelcomeOne}/>
    </View>
  );
}
