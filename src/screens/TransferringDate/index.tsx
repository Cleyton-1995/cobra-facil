import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ImageHeaders } from "../../components/Header/ImageHeaders";

import { styles } from "./styles";

export function TransferringDate() {
  const navigation = useNavigation();
  function back() {
    navigation.navigate("selectinstitution");
  }
  
  function transfer() {
    navigation.navigate("insertpassword");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={back} activeOpacity={0.8}>
          <AntDesign style={styles.icon}  name="left" size={15} color="#0073FB" />
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <ImageHeaders />

        <Text style={styles.title}>Transferindo </Text>
        <Text style={styles.txt}>R$ 10,00</Text>
        <Text style={styles.for}>
          para
          <Text style={styles.person}> Felipe André Roberto </Text>
        </Text>

        <View style={styles.transferring}>
        <AntDesign style={styles.iconDown} name="down" size={20} color="black" />
          <Text style={styles.bankAccount}>Quando</Text>
          <Text>Agora</Text>
        </View>

        <View style={styles.transferring}>
          <AntDesign style={styles.iconDown} name="down" size={20} color="black" />
          <Text style={styles.bankAccount}>Tipo de transferência</Text>
          <Text>Pix</Text>
        </View>

        <View style={styles.transferringDate}>
          <Text style={styles.bankAccount}>
            CPF
          </Text>
           <Text style={styles.cpf}>***.000.000-** </Text>

          <Text style={styles.bankAccount}>
            Instituição
          </Text>
           <Text style={styles.bank}>NU PAGAMENTOS S. A</Text>

          <Text style={styles.bankAccount}>
            Agência
          </Text>
           <Text style={styles.agency}>1</Text>

          <Text style={styles.bankAccount}>
            Conta corrente
          </Text>
           <Text style={styles.account}>0000000-0</Text>

           <TouchableOpacity onPress={transfer} style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.txtbtn}>
              Transferir
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
