import React from "react";
import { View, Image, Text } from "react-native";
import Button from "../../components/Form/Button";
import { Header } from "../../components/Header";
import { styles } from "./styles";

export function Home() {
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
      <Button label={""} />
    </View>
  );
}
