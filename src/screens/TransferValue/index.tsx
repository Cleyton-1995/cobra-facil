import React from "react";
import "react-native-gesture-handler";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import {
  AntDesign,
} from "@expo/vector-icons";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import InputCurrency from "../../components/Form/InputCurrency";

export function TransferValue() {
  const [valor, setValor] = React.useState<number | null>(0);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8}>
          <AntDesign style={styles.icon} name="left" size={15} color="white" />
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Qual o valor da transferência?</Text>
        <Text style={styles.paragraph}>Saldo diponível em conta</Text>
        <Text style={{ color: "#ffffff", fontSize: 18, marginLeft: 15, marginTop: -15 }}>1920,00</Text>
        <ImageHeadersWhite />
      </View>

      <View style={styles.content}>
        <View style={styles.currency}>
        <InputCurrency
        style={styles.currencyInput }
          value={valor} 
          onChangeValue={setValor}
          minValue={0}
          prefix="R$ "
          precision={2}
          separator=","
          signPosition="beforePrefix"
          delimiter="."
          placeholder="RS 0,00"
        />
        </View>

        <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
          <Text style={styles.txt}>
            Continue
          </Text>
          <AntDesign style={styles.iconRight} name="right" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
