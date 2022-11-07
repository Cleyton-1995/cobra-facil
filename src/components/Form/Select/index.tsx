import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

interface SelectProps {
  options: Function;
  onChangeSelect: Function;
  text: string;
}

interface RendetProps {
  item: any;
}

const { width } = Dimensions.get("window");

export function Select({ options, onChangeSelect, text }: SelectProps) {
  const [txt, setTxt] = useState(text);
  const [modalVisible, setModalVisible] = useState(false);

  function renderOption({item}:RendetProps ) {
    return <Text> {item.name} </Text>;
  }
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.txt} numberOfLines={1}>
          {txt}
        </Text>
        <AntDesign name="down" size={18} color="black" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView>
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => setModalVisible(false)}>
              <AntDesign
                name="up"
                size={18}
                color="black"
                style={{ left: 290 }}
              />
            </TouchableOpacity>
            <Text>{text}</Text>
          </View>

          <FlatList
            data={options}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => renderOption(item)}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
}

import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { COLORS } from "../../../themes/colors";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 15,
    marginHorizontal: 12,
    borderRadius: 5,
    fontSize: 18,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: COLORS.GRAY_SECONDARY,
    marginBottom: 10,
  },

  txt: {
    color: COLORS.GRAY_PRIMARY,
    width: width - 110,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 15,
    borderBottomColor: COLORS.GRAY_PRIMARY,
    borderBottomWidth: 1,
    paddingBottom: 12,
  },
});
