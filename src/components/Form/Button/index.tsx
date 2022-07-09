import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

const Button = ({ label, ...rest }: ButtonProps): JSX.Element => {
  const { style } = { ...rest };

  return (
    <TouchableOpacity
      {...rest}
      style={[styles.container, style]}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>
        {label} 
        <AntDesign name="right" size={15} color="#009BF4" />
        </Text>
    </TouchableOpacity>
  );
};

export default Button;
