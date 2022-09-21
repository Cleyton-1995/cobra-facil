import { AntDesign } from "@expo/vector-icons";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import uuid from 'react-native-uuid';
import { BackButton } from "../../components/Form/BackButton";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { MostHeaders } from "../../components/Header/MostHeaders";
import { styles } from "./styles";

export function NewCustomer () {
  const navigation = useNavigation();
  function backScreenHome() {
    navigation.navigate("customerlist");
  };

  const [name, setName] = useState("");

  const { getItem, setItem } = useAsyncStorage("@COBRA_FACIL:CustomerList");

  async function handleNew() {
    try {
      const id = uuid.v4();

      const newData = {
        id,
        name,
      }

      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];

      const data = [...previousData, newData];

      await setItem(JSON.stringify(data));
      Toast.show({
        type: "success",
        text1: "Cadastrado com sucesso!"
      })
    } catch (error) {
      console.log(error);

      Toast.show({
        type: "error",
        text1: "Não foi possível cadastrar."
      })
    }
    navigation.navigate("customerlist");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.back}>
          <BackButton onPress={backScreenHome} title="Voltar" />
        </View>
        <MostHeaders title="Dados do cliente" />
        <ImageHeaders />

        <View style={styles.customer}>
          <Text style={styles.customerName}>Novo cliente</Text>
          <TextInput
            style={styles.customerNameInput}
            placeholder="Nome completo do cliente"
            onChangeText={setName}

          />
          <Text style={styles.contact}>Telefone</Text>
          <TextInput
            style={styles.contactInput}
            placeholder="( ) - - - - _ - - - -"
          />
        </View>

        <View style={styles.customer}>
          <Text style={styles.customerName}>Pessoa física ou jurídica</Text>
          <AntDesign style={styles.icon1} name="down" size={18} color="black" />
          <TextInput
            style={styles.customerNameInput}
            placeholder="Selecioe o tipo de cliente"
          />
          <Text style={styles.contact}>CPF</Text>
          <TextInput
            style={styles.contactInput}
            placeholder=" - - - . - - - . - - -   - -"
          />
        </View>

        <View style={styles.select}>
          <Text style={styles.customerName}>
            Selecione cobrança para esse cliente
          </Text>
          <TextInput
            style={styles.customerNameInput}
            placeholder="Adicione uma cobrança"
          />
          <AntDesign style={styles.icon2} name="down" size={18} color="black" />
          <View style={styles.border}>
          <Text style={styles.typeCharge}>Aulas particulares - 2022</Text>
          <Text style={styles.value}>R$ 2.000,00</Text>
          <Text style={styles.circle} />
          <Text style={styles.valid}>Validade 30/08/2022</Text>
          </View>

          <View style={styles.border}>
            <Text style={styles.typeCharge}>Aulas particulares - 2022</Text>
            <Text style={styles.value}>R$ 2.000,00</Text>
            <Text style={styles.circle} />
            <Text style={styles.valid}>Validade 30/08/2022</Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleNew} activeOpacity={0.8}>
          <Text style={styles.btn}>Salvar dados do cliente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
