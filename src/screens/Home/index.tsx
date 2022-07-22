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
import { AntDesign } from "@expo/vector-icons";

export function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <BackButton title="Voltar" />
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
          <Text style={styles.cnpj}>Pessoa física - 400.000.0001-22</Text>
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
