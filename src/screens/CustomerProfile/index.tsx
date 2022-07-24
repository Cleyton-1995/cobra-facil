import React from "react";
import "react-native-gesture-handler";
import {
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import { useNavigation } from "@react-navigation/native";

export function CustomerProfile() {
  const navigation = useNavigation();
  function back() {
    navigation.navigate("customerlist");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8}>
          <AntDesign style={styles.icon} name="left" size={15} color="white" />
          <Text onPress={back} style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          Perfil do Cliente
        </Text>
        <Text style={styles.subtitle}>
          Que bom ter você aqui.
        </Text>
        <Text style={styles.hide}>
          Ocutar informações pessoais
        </Text>
        <ImageHeadersWhite />
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.name} >
              Felipe André Roberto
           </Text>
        </View>

        <View style={styles.customerContact}>
          <Text style={styles.contact}>
            Telefone
          </Text>
          <Text style={styles.contactInput} >
            (19) 99565-8923
          </Text>
        </View>

        <View style={styles.typesOfPerson}>
          <Text style={styles.kindOfPerson}>Pessoa física ou jurídica</Text>
          <AntDesign style={styles.iconDown} name="down" size={18} color="black" />
          <Text style={styles.type}>Pessoa Física</Text>
          <Text style={styles.kindOfPerson}>CPF</Text>
          <Text style={styles.type}>444.555.676-22</Text>
        </View>

        <View style={styles.typesOfPerson} >
          <Text style={styles.kindOfPerson}>Status</Text>
          <Text style={styles.status}>Até ser alterado</Text>
          <AntDesign style={styles.iconDown} name="down" size={18} color="black" />
        </View>

        <TouchableOpacity style={styles.borderBottom} activeOpacity={0.8}>
          <Text style={styles.btn}>
            Salvar alterações
          </Text>
        </TouchableOpacity>

        <Text style={styles.linkedCharges} >Cobranças atreladas</Text>

        <View style={styles.select} >
          <Text style={styles.selectChrages}>Selecione cobranças para esse cliente</Text>
          <TextInput placeholder="Adicione uma cobrança" style={styles.selectInput}/>
          <AntDesign style={styles.iconCharges} name="down" size={18} color="black" />

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

        <View style={styles.view}>
          <Text style={styles.textLatestPayments} >Ultimos pagamentos</Text>

          <View style={styles.latestPayments1}>
          <Text style={styles.typeCharge}>Aulas particulares - 2022</Text>
            <Text style={styles.value}>R$ 2.000,00</Text>
            <Text style={styles.circlePayment} />
          <Text style={styles.valid}>Validade 30/08/2022</Text>
          </View>

          <View style={styles.latestPayments2}>
          <Text style={styles.typeCharge}>Aulas particulares - 2022</Text>
            <Text style={styles.value}>R$ 2.000,00</Text>
            <Text style={styles.circlePayment} />
          <Text style={styles.valid}>Validade 30/08/2022</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
