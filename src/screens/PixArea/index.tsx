import React from "react";
import "react-native-gesture-handler";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { AntDesign, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import { ButtonHomePage } from "../../components/Form/ButtonHomePage";
import { useNavigation } from "@react-navigation/native";

export function PixArea() {
  const navigation = useNavigation();
  function back() {
    navigation.navigate("homepage");
  }

  function transfer() {
    navigation.navigate("transfervalue");
  }

  function charge() {
    navigation.navigate("newcharge");
  }
  
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={back} activeOpacity={0.8}>
          <AntDesign style={styles.icon} name="left" size={15} color="white" />
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Área Pix</Text>
        <Text style={styles.paragraph}>
          Transfira seu dinheiro a qualquer hora do dia e da semana
        </Text>
        <Text style={styles.submit}>Enviar</Text>
        <Text style={styles.received}>Receber</Text>
        <ImageHeadersWhite />
      </View>

      <View style={styles.content}>
        <TouchableOpacity onPress={transfer} activeOpacity={0.98} style={styles.transfer}>
          <Text style={styles.titleBottom} >
            Transferir
          </Text>
          <MaterialCommunityIcons style={styles.copy} name="cash-minus" size={35} color="#0073FB" />
        </TouchableOpacity>
    
        <TouchableOpacity onPress={charge} activeOpacity={0.98} style={styles.demand}>
          <ButtonHomePage />
          <Text style={styles.titlesBottom}>
            Cobrar
          </Text>
          <Fontisto style={styles.dollar} name="dollar" size={17} color="#0073FB" />
          <MaterialIcons style={styles.copy} name="chat-bubble-outline" size={35} color="#0073FB" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
