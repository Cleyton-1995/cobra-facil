import React, { useRef, useState } from "react";
import {  Dimensions, FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import slide from "../../../../slide";

interface OnboardingProps {
  onPress: () => void;
};

interface SlideProps {
  item: any;
};

const { width, height } = Dimensions.get("window");

const Slide = ({ item }: SlideProps) => {
  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.img} style={[styles.img, { resizeMode: "contain" }]}/>
      <Image source={item.image}style={[styles.image, { resizeMode: "contain"}]}/>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.paragraph}>{item.paragraph}</Text>
    </View>
  );
};

export function Onboarding({ onPress}: OnboardingProps) {
  
  const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

  const ref = useRef(null);

  const Footer = () => {
      return (
        <View style={{ height: height * 0.25, justifyContent: 'center', paddingHorizontal: 20 }}>
          {
            currentSlideIndex === slide.length - 1
            ? <View>
                <TouchableOpacity activeOpacity={0.8}  >
                  <Text onPress={onPress} style={styles.btnLogin} >
                    Fazer login
                    <AntDesign name="right" size={15} color="#009BF4" style={styles.right}/>
                  </Text>
                </TouchableOpacity>
              </View>
            : <View>
                <TouchableOpacity onPress={goNextSlide}  activeOpacity={0.8} >
                  <Text style={styles.btntext} onPress={goNextSlide} >
                    Próximo 
                    <AntDesign name="right" size={15} color="#009BF4" style={styles.right}/>
                  </Text>
                </TouchableOpacity>
              </View>
          }

          <View style={{ flexDirection: "row", justifyContent: 'center', top: -50 }} >
            { slide.map((_, index) => (
            <View key={index} style={[ styles.indicator, currentSlideIndex == index && {
              backgroundColor: COLORS.BLUE_500,
            }]} />
            )) }
          </View>
        </View>
      );
    };

    const updateCurrentSlideIndex = e => {
      const contentOffsetX = e.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(contentOffsetX / width); 
      setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
      const nextSlideIndex = currentSlideIndex + 1;
      if (nextSlideIndex != slide.length) {
        const offset = nextSlideIndex * width;
        ref?.current.scrollToOffset({offset});
        setCurrentSlideIndex(nextSlideIndex);
      };
    };

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={slide}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Slide item={item}/>}
        pagingEnabled
      />
      <Footer/>
    </View>
  );
};

import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";
import { FONTS } from "../../../themes/fonts";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { AntDesign } from "@expo/vector-icons";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: getStatusBarHeight() + 17,
  },

  indicator: {
    height: 7,
    width: 90,
    backgroundColor: 'grey',
    marginHorizontal: 5,
    borderRadius: 5,
  },

  image: {
    flex: 0.7,
    justifyContent: "center",
    bottom: -60,
  },

  img: {
    flex: 0.7,
    justifyContent: "center",
    width: 200,
    top: 20,
    position: "absolute",
  },

  title: {
    color: COLORS.BLUE_500,
    fontSize: 24,
    textAlign: "center",
    fontFamily: FONTS.BOLD,
    width: 250,
    top: 30,    
  },

  paragraph: {
    color: COLORS.BLACK_PRIMARY,
    textAlign: "center",
    fontSize: 12,
    width: 290,
    top: 40,    
    paddingBottom: 25,
  },

  btntext: {
    color: COLORS.BLUE_500,
    fontSize: 16,
    alignSelf: "center",
    top: 10,
    fontFamily: FONTS.BOLD,
  },

  right: {
    position: "absolute",
    fontFamily: FONTS.BOLD,
  },

  btnLogin: {
    color: COLORS.BLUE_500,
    fontSize: 16,
    alignSelf: "center",
    top: 10,
    fontFamily: FONTS.BOLD,
  }
});
