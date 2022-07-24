import React from "react";
import "react-native-gesture-handler";
import {
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { BackButton } from "../../components/Form/BackButton";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { MostHeaders } from "../../components/Header/MostHeaders";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function CustomerList() {
  const navigation = useNavigation();
  function backScreenHome() {
    navigation.navigate("homepage");
  }
  function addNewCustomer() {
    navigation.navigate("newcustomer");
  }
  function openCustomerProfile() {
    navigation.navigate("customerprofile");
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

        <TouchableOpacity onPress={openCustomerProfile} activeOpacity={0.8} style={styles.input}>
          <Text onPress={openCustomerProfile} style={styles.title}>Felipe André Roberto</Text>
          <Text onPress={openCustomerProfile} style={styles.textInput}>Mostrar informações pessoais </Text>
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

        <TouchableOpacity onPress={ addNewCustomer} activeOpacity={0.8}>
          <Text onPress={ addNewCustomer} style={styles.btn}>Adicionar um novo cliente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
