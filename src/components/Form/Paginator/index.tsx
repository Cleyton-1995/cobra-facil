import React from "react";
import { Animated, useWindowDimensions, View } from "react-native";

interface PaginatorProps {
  data: any;
  scrrollX: any;
}

export function Paginator({ data, scrrollX }: PaginatorProps) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i - 1) * width];

        // const dotWidth = scrrollX.interpolateNode({
        //   inputRange,
        //   outputRange: [10, 20, 10],
        //   extrapolate: "clamp",
        // });

        // const opacity = scrrollX.interpolateNode({
        //   inputRange,
        //   outputRange: [10, 20, 10],
        //   extrapolate: "clamp",
        // });

        return (
          <Animated.View
            style={[styles.dot, {  }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";

export const styles = StyleSheet.create({
  dot: {
    height: 8,
    borderRadius: 5,
    backgroundColor: COLORS.GRAY_SECONDARY,
    marginHorizontal: 8,
    top: 10,
  },
});
