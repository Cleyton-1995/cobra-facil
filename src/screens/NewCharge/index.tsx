import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import "react-native-gesture-handler";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { MostHeaders } from "../../components/Header/MostHeaders";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { BackButton } from "../../components/Form/BackButton";
import { SwipeButton } from "../../components/Form/SwipeButton";
import { api } from "../../services/api";
import { styles } from "./styles";

export function NewCharge() {
  const navigation = useNavigation();
  function backScreenHome() {
    navigation.navigate("homepage");
  }

  const [name, setName] = useState<String>();
  const [description, setDescription] = useState<String>();
  const [value, setValue] = useState<String>();
  const [dueDate, setDueDate] = useState<String>();

  async function dataBank() {
    try {
      // const id = uuid.v4();

      const createCharge = await api.post("/charge", {
        name: name,
        description: description,
        value: value,
        dueDate: dueDate,
      });

      Toast.show({
        type: "success",
        text1: "Cadastrado com sucesso!",
      });
    } catch (error) {
      console.log(error);

      Toast.show({
        type: "error",
        text1: "Não foi possível cadastrar.",
      });
    };
    navigation.navigate("homepage");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.back}>
          <BackButton onPress={backScreenHome} title="Voltar" />
        </View>
        <MostHeaders title="Nova Cobrança" />
        <ImageHeaders />

        <View style={styles.input}>
          <Text style={styles.title}>Nome da Cobrança</Text>
          <TextInput
            onChangeText={(value: string) => setName(value)}
            style={styles.textInput}
            placeholder="Dê um apelido para a cobrança"
          />

          <Text style={styles.secondTitle}>Descrição</Text>
          <TextInput
            onChangeText={(value: string) => setDescription(value)}
            style={styles.secondTextInput}
            placeholder="Descreva a cobrança"
          />
        </View>

        <View style={styles.secondInput}>
          <Text style={styles.charge}>Repetir cobrança</Text>
          <Text style={styles.repeatCharge}>Todos os meses</Text>
          <View style={styles.swipe}>
            <SwipeButton />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.iconRepeat}>
            <AntDesign name="down" size={18} color="black" />
          </TouchableOpacity>
          <Text style={styles.value}>Valor</Text>
          <TextInput
            style={styles.values}
            placeholder="R$ _ _"
            onChangeText={(value: string) => setValue(value)}
          />

          <Text style={styles.repetition}>Repetições</Text>
          <TextInput style={styles.repetitions} placeholder="_ _" />
        </View>

        <View style={styles.dueDate}>
          <Text style={styles.date}>Data de vencimento</Text>
          <TextInput style={styles.textInput} placeholder="DD / MM / AAAA"
              onChangeText={(value: string) => setDueDate(value)}
              />
        </View>

        <View style={styles.selectBilling}>
          <Text style={styles.select}>
            Selecione cobranças para esse cliente
          </Text>
          <TouchableOpacity style={styles.iconSelect} activeOpacity={0.8}>
            <AntDesign name="down" size={18} color="black" />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Selecione o tipo de cobrança"
          />

          <View style={styles.information}>
            <Text style={styles.name}>José Roberto</Text>
            <Text style={styles.cnpj}>Pessoa física - 400.000.000-22</Text>
          </View>
        </View>

        <TouchableOpacity onPress={dataBank} activeOpacity={0.8}>
          <Text style={styles.button}>Salvar e publicar cobrança</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
