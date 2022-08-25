import React from "react";
import "react-native-gesture-handler";
import {
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { MostHeaders } from "../../components/Header/MostHeaders";

import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../components/Form/BackButton";

export function NewCharge() {
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
        <MostHeaders title="Nova Cobrança" />
        <ImageHeaders />

        <View style={styles.input}>
          <Text style={styles.title}>Nome da Cobrança</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Dê um apelido para a cobrança"
          />

          <Text style={styles.secondTitle}>Descrição</Text>
          <TextInput
            style={styles.secondTextInput}
            placeholder="Descreva a cobrança"
          />
        </View>

        <View style={styles.secondInput}>
          <Text style={styles.charge}>Repetir cobrança</Text>
          <TextInput style={styles.repeatCharge} placeholder="Todos os meses" />
          <TouchableOpacity activeOpacity={0.8} style={styles.iconRepeat}>
          <AntDesign name="down" size={18} color="black" />
          </TouchableOpacity>
          <Text style={styles.value}>Valor</Text>
          <TextInput style={styles.values} placeholder="R$ _ _" />

          <Text style={styles.repetition}>Repetições</Text>
          <TextInput style={styles.repetitions} placeholder="_ _" />
        </View>

        <View style={styles.dueDate}>
          <Text style={styles.date}>Data de vencimento</Text>
          <TextInput style={styles.textInput} placeholder="DD / MM / AAAA" />
        </View>

        <View style={styles.selectBilling}>
          <Text style={styles.select}>Selecione cobranças para esse cliente</Text>
          <TouchableOpacity style={styles.iconSelect} activeOpacity={0.8}>
          <AntDesign name="down" size={18} color="black" />
          </TouchableOpacity>
          <TextInput style={styles.textInput} placeholder="Selecione o tipo de cobrança" />
          
          <View style={styles.information}>
          <Text style={styles.name}>José Roberto</Text>
          <Text style={styles.cnpj}>Pessoa física - 400.000.000-22</Text>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.8} >
          <Text style={styles.button}>
            Salvar e publicar cobrança
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
