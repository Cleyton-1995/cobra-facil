import React, { useRef, useState } from "react";
import { Animated, Dimensions, FlatList, Text, View } from "react-native";

import { OnboardingItem } from "../OnboardingItem";
import { Paginator } from "../Paginator";
import slide from "../../../../slide";

interface OnboardingChargedProps {
  viewableItems: any;
}

const {width, height} = Dimensions.get('window');

export function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  // const Footer = () => {
  //   return (
  //     <View style={{ height: height * 0.25, justifyContent: 'center', paddingHorizontal: 20 }}>
  //       <View style={{ flexDirection: "row", justifyContent: 'center' }} >
  //         <View style={[ styles.indicator,  ]} />
  //       </View>
  //     </View>
  //   )
  // }

  const viewableItemsCharged = useRef(({ viewableItems }: OnboardingChargedProps) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  // const viewConfig = useRef({ viewAreaCovaragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slide}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          // onScroll={Animated.event([{ nativeEvent: { contenOffset: { x: scrrollX }}}], {
          //     useNativeDriver: false,
          // })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsCharged}
          // viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>

          <Paginator data={slide}scrrollX />

    </View>
  );
}

import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  indicator: {
    height: 20,
    width: 45,
    backgroundColor: COLORS.GRAY_QUATERNARY,
    marginHorizontal: 3,
    borderRadius: 2,
  }
})
