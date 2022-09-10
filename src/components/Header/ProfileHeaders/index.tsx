import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface HeaderPtops {
  title: string;
  onPress?: () => void;
}

export function ProfileHeaders({ title, onPress }: HeaderPtops) {
  return (
    <View style={styles.container}>
      <AntDesign style={styles.profile} name="user" size={24} color="#0073FB" />
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
        <Text style={styles.balanceInput}>
          R$ <Text style={{ color: "#0073FB", fontSize: 18 }}>1920,00</Text>
        </Text>
        <TouchableOpacity>
          <Ionicons
            style={{ marginLeft: -20, marginTop: -35, color: "#8D8D99" }}
            name="eye"
            color="COLORS.GRAY_PRIMARY"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
