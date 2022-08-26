import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ImageHeaders } from "../../components/Header/ImageHeaders";
import { RecoverPassword } from "../RecoverPassword";

import { styles } from "./styles";

export function Home() {

  return (
    <RecoverPassword/>
  );
}
