import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ImageHeaders } from "../../Header/ImageHeaders";

import { styles } from "./styles";

interface BackButtonProps {
  title: string;
  onPress?: () => void;
}

export function BackButtonWhite({ title, onPress }: BackButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <AntDesign name="left" size={15} color="white" />
        <Text onPress={onPress} style={styles.back}>
          {title}
        </Text>
        <Text onPress={onPress} style={styles.subtitle}>
          Que bom ter você aqui.
        </Text>
      </TouchableOpacity>
    </View>
  );
}
