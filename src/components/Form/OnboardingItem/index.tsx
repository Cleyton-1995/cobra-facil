import React from "react";
import { FlatList, Text, useWindowDimensions, View, Image } from "react-native";

import slide from "../../../../slide";

interface Slides {
  item: {
    id: string;
    image: any;
    img: any;
    paragraph: string;
    title: string;
  };
}

export function OnboardingItem({ item }: Slides) {
    const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.img}
        style={[styles.img, { resizeMode: "contain" }]}
      />
      <Image
        source={item.image}
        style={[styles.image, { resizeMode: "contain"}]}
      />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.paragraph}>{item.paragraph}</Text>
    </View>
  );
}

import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";
import { FONTS } from "../../../themes/fonts";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: getStatusBarHeight() + 17,
  },

  image: {
    flex: 0.7,
    justifyContent: "center",
    bottom: -30,
  },

  img: {
    flex: 0.7,
    justifyContent: "center",
    width: 200,
    top: 30,
    position: "absolute",
  },

  title: {
    color: COLORS.BLUE_500,
    fontSize: 24,
    textAlign: "center",
    fontFamily: FONTS.BOLD,
    width: 250,
    top: -10,
    
  },

  paragraph: {
    color: COLORS.BLACK_PRIMARY,
    textAlign: "center",
    fontSize: 12,
    width: 290,
  },
});
