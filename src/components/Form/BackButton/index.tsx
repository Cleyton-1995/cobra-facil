import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface BackButtonProps {
  title: string;
  onPress?: () => void;
  color?: string;
}

export function BackButton({ title, onPress, color = '#0073FB' }: BackButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <AntDesign name="left" size={15} color={color} />
        <Text onPress={onPress} style={[styles.back, {color: color}]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
