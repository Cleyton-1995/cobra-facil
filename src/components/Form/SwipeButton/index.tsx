import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import { styles } from './styles';

export function SwipeButton() {
    const [ isOn, setIsOn ] = useState(true);
    function toggleSwitch() {
        setIsOn(isOn => !isOn);
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.outter, isOn ? { justifyContent: "flex-end", backgroundColor: "#80AEDD" }:
        { justifyContent: "flex-start", backgroundColor: "#0073FB"}
    ]} activeOpacity={1} onPress={toggleSwitch} >
        <View style={[styles.inner, isOn ? { backgroundColor: "#0073FB" } : { backgroundColor: "#80AEDD" }]} /> 
      </TouchableOpacity>
            <Text style={styles.text}>  { isOn ? 'Repetir': '' } </Text>
    </View>
  );
}

import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";

export const styles = StyleSheet.create({
  inner: {
    width:25,
    height: 25,
    backgroundColor: COLORS.WHITE,
    borderRadius: 50, 
    borderWidth: 1,
    borderColor: COLORS.WHITE,
  },

  outter: {
    width: 50,
    height: 25,
    backgroundColor: COLORS.BLUE_300,
    borderRadius: 50,
    alignItems: "center",
    flexDirection: "row",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
},

text: {
    color: COLORS.GRAY_PRIMARY,
    left: 50,
    position: "absolute",
}

});
