import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Input } from "../../components/Form/Input";
import { MostHeaders } from "../../components/Header/MostHeaders";

import { styles } from "./styles";

export function Home() {
  return (
    <ScrollView> 
    <View style={styles.container}>
      <AntDesign
        style={styles.avatar}
        circle="circle"
        name="user"
        size={24}
        color="black"
      />
      <Text style={styles.title}>Olá, Pedro!</Text>
      <Text style={styles.subtitle}>Que bom ter você aqui.</Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Entypo style={styles.entypo} name="login" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.email}>Saldo em conta</Text>
      <Text style={styles.input}>R$</Text>
      <Text style={styles.total}>1920,00</Text>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="eye" color="COLORS.GRAY_PRIMARY" size={20} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.charge}>
          Criar cobrança
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.invoicing}>
          Faturamento
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.transfer}>
          Trasnferir
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.customers}>
          Clientes
        </Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.text}>
          Complete seu cadastro para realizar cobranças
        </Text>
          <Text style={styles.top}>
            Cadastro Iincompleto
          </Text>

        <Text style={styles.personal}>
          Informações pessoais
        </Text>
          <Text style={styles.personalInformation}>
            Completo
          </Text>

        <Text style={styles.receiving}>
          Informações para recebimento
        </Text>
          <Text style={styles.receivingInformation}>
            Para que você possa receber seu dinheiro.
          </Text>

        <Text style={styles.documentation}>
          Documentação
        </Text>
          <Text style={styles.documentationInformation}>
            Para termos certeza que você é uma pessoa real.
          </Text>
      </View>
    </View>
    </ScrollView>
  );
}
