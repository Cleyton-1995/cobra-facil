import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

interface InputProps {
  label?: string;
  placeholder: string;
  type?: string;
  color?: string; 
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: any;
  keyboardType?: string;
}

export function Input({ label, placeholder, secureTextEntry, onChangeText, keyboardType}: InputProps) {
  const [sec, setSec] = useState(secureTextEntry);
  return (
    <View style={styles.container}>
      <Text style={styles.email}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        keyboardType="email-address"
        secureTextEntry={sec}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setSec(!sec)} style={styles.icon}>
          <Ionicons name={ sec ? "eye" : "eye-off"} color="#8D8D99" size={20} />
        </TouchableOpacity>
      )}  
    </View>
  );
}
