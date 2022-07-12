import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

import { styles } from "./styles";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  color?: string;
}

export function Input({ label, placeholder, type = "text", color }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.email}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder}  />
      {type === "password" && (
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="eye" color="COLORS.GRAY_PRIMARY" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
}
