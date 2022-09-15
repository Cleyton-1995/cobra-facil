import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

interface HeaderPtops {
  title: string;
  onPress?: () => void;
}

export function ProfileHeaders({ title, onPress }: HeaderPtops) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Que bom ter você aqui.</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <Entypo
          onPress={onPress}
          style={styles.entypo}
          name="login"
          size={24}
          color="white"
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.balance}>Saldo em conta</Text>
      </View>
    </View>
  );
}
