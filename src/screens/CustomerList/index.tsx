import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import "react-native-gesture-handler";
import { BackButton } from "../../components/Form/BackButton";
import { CardCustomer, CardProps } from "../../components/Form/CardCustomer";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { MostHeaders } from "../../components/Header/MostHeaders";
import { styles } from "./styles";

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

  // const DATA = [
  //   {name: 'Felipe André Roberto' },
  //   {name: 'Jonarhan Luiz' },
  //   {name: 'Henrique Cardoso' },
  //   {name: 'Paulo Fernando' },
  //   {name: 'José Roberto' },
  // ]

  const [data, setData] = useState<CardProps[]>([]);

  const { getItem, setItem } = useAsyncStorage("@COBRA_FACIL:CustomerList");

  async function handleFetchData() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setData(data);
  }

  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} activeOpacity={0.8}>
          <BackButton onPress={backScreenHome} title="Voltar" />
        </TouchableOpacity>
        <MostHeaders title="Seus Clientes" />
        <ImageHeaders />
        <TextInput placeholder="Pesquisar     🔍" style={styles.search} />

        <FlatList
        data={data}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) =>
          <CardCustomer
            data={item}
          />
        }
      />

        <TouchableOpacity onPress={addNewCustomer} activeOpacity={0.8}>
          <Text onPress={addNewCustomer} style={styles.btn}>
            Adicionar um novo cliente
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
