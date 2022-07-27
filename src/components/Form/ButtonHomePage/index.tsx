import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ButtonHomePageProps {
  onPress?: () => void;
  title?: string;
}

export function ButtonHomePage( { onPress, title}: ButtonHomePageProps ) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} >
        <Text > {title} </Text>
      </TouchableOpacity>
    </View>
  );
}
