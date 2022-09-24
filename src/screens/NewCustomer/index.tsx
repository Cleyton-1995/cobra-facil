import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import "react-native-gesture-handler";
import { BackButton } from "../../components/Form/BackButton";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { MostHeaders } from "../../components/Header/MostHeaders";
import { api } from "../../services/api";
import { styles } from "./styles";

export function NewCustomer () {
  const navigation = useNavigation();
  function backScreenHome() {
    navigation.navigate("customerlist");
  };

  const [name, setName] = useState<String>();
  const [document, setDocument] = useState<String>();
  const [phone, setPhone] = useState<String>();

  async function createCustomer() {
    try {
      const user = await api.post("/customers", {
        name: name,
        document: document,
        phone: phone,
      });
      navigation.navigate("customerlist")
      
    } catch (error) {
      console.log("error", error)
    }
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
            onChangeText={(value: string) => setName(value)}

          />
          <Text style={styles.contact}>Telefone</Text>
          <TextInput
            style={styles.contactInput}
            placeholder="( ) - - - - _ - - - -"
            onChangeText={(value: string) => setPhone(value)}
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
            onChangeText={(value: string) => setDocument(value)}
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

        <TouchableOpacity onPress={createCustomer} activeOpacity={0.8}>
          <Text style={styles.btn}>Salvar dados do cliente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
