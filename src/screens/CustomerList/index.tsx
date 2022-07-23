import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { BackButton } from "../../components/Form/BackButton";
import { BackButtonWhite } from "../../components/Form/BackButtonWhite";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import { MostHeaders } from "../../components/Header/MostHeaders";
import { Profile } from "../../components/Header/Profile";
import { styles } from "./styles";
import Button from "../../components/Form/Button";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function CustomerList() {
  const navigation = useNavigation();
  function backScreenHome() {
    navigation.navigate("homepage");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.back}>
          <BackButton onPress={backScreenHome} title="Voltar" />
        </View>
        <MostHeaders title="Seus Clientes" />
        <ImageHeaders />
        <TextInput placeholder="Pesquisar     🔍" style={styles.search} />

        <TouchableOpacity activeOpacity={0.8} style={styles.input}>
          <Text style={styles.title}>Felipe André Roberto</Text>
          <Text style={styles.textInput}>Mostrar informações pessoais </Text>
          <AntDesign style={styles.icon} name="down" size={18} color="black" />
          <Text style={styles.circleBlue} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.input}>
          <Text style={styles.title}>Jonathan Luiz</Text>
          <Text style={styles.textInput}>Mostrar informações pessoais </Text>
          <AntDesign style={styles.icon} name="down" size={18} color="black" />
          <Text style={styles.circleBlue} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.input}>
          <Text style={styles.title}>Henrique Cardoso</Text>
          <Text style={styles.textInput}>Mostrar informações pessoais </Text>
          <AntDesign style={styles.icon} name="down" size={18} color="black" />
          <Text style={styles.circleRed} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.input}>
          <Text style={styles.title}>Paulo Fernando</Text>
          <Text style={styles.textInput}>Mostrar informações pessoais </Text>
          <AntDesign style={styles.icon} name="down" size={18} color="black" />
          <Text style={styles.circleBlue} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.input}>
          <Text style={styles.title}>José Roberto</Text>
          <Text style={styles.textInput}>Mostrar informações pessoais </Text>
          <AntDesign style={styles.icon} name="down" size={18} color="black" />
          <Text style={styles.circleRed } />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.btn}>Adicionar um novo cliente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
