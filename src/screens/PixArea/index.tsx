import React from "react";
import "react-native-gesture-handler";
import {
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { BackButton } from "../../components/Form/BackButton";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { MostHeaders } from "../../components/Header/MostHeaders";
import { styles } from "./styles";
import { AntDesign, Entypo, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { ProfileHeaders } from "../../components/Header/ProfileHeaders";
import { ImageHeadersWhite } from "../../components/Header/ImageHeadersWhite";
import { BackButtonWhite } from "../../components/Form/BackButtonWhite";
import { ButtonHomePage } from "../../components/Form/ButtonHomePage";

export function PixArea() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8}>
          <AntDesign style={styles.icon} name="left" size={15} color="white" />
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Área Pix</Text>
        <Text style={styles.paragraph}>
          Transfira seu dinheir a qualquer hora do dia e da semana
        </Text>
        <Text style={styles.submit}>Enviar</Text>
        <ImageHeadersWhite />
      </View>

      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.98} style={styles.transfer}>
          <ButtonHomePage />
          <Text style={styles.titlesBottom} >
            Transferir
          </Text>
          <MaterialCommunityIcons style={styles.copy} name="cash-minus" size={35} color="black" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.98} style={styles.copyPaste}>
          <ButtonHomePage />
          <Text style={styles.titlesBottom}>
            Pix Copia e Cola
          </Text>
          <Octicons style={styles.copy} name="copy" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.98} style={styles.qrcode}>
          <ButtonHomePage  />
          <Text style={styles.titlesBottom} >
            Ler Qr code
          </Text>
          <Ionicons style={styles.copy} name="md-qr-code-sharp" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.toReceive}>Receber</Text>

        <TouchableOpacity activeOpacity={0.98} style={styles.demand}>
          <ButtonHomePage />
          <Text style={styles.titlesBottom}>
            Cobrar
          </Text>
          <Fontisto style={styles.dollar} name="dollar" size={17} color="black" />
          <MaterialIcons style={styles.copy} name="chat-bubble-outline" size={35} color="black" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.98} style={styles.deposit}>
          <ButtonHomePage  />
          <Text style={styles.titlesBottom} >
            Depositar
          </Text>
          <MaterialCommunityIcons style={styles.copy} name="cash-plus" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
