import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

import { styles } from "./styles";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  color?: string;
  secureTextEntry?: boolean;
  keyboarrdType?: string;
}

export function Input({ label, placeholder, secureTextEntry, keyboarrdType }: InputProps) {
  const [sec, setSec] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <Text style={styles.email}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={sec}
        keyboardType="email-address"  
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setSec(!sec)} style={styles.icon}>
          <Ionicons name={ sec ? "eye" : "eye-off"} color="#8D8D99" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
}
