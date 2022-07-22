// import React from 'react';''
// import { View, Text, TouchableOpacity } from 'react-native';
// import { PanGestureHandler } from "react-native-gesture-handler"
// import  Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

// const BUTTON_WIDTH = 55;
// const BUTTON_HEIGHT = 30;
// const BUTTON_PADDING = 1;
// const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT  - 2 * BUTTON_PADDING;
// const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS  + 2 * BUTTON_PADDING;
// const H_SWIPE_RANGE = BUTTON_WIDTH  - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

// const SwipeButton = ({ onToggle }) => {
//   const X = useSharedValue(0);
//   const animateGestureHandler = useAnimatedGestureHandler({
//     onActive: (e) => {
//       X.value = e.translationX;
//     },

//     onEnd: () => {
//       if (X.value < BUTTON_WIDTH/2 - SWIPEABLE_DIMENSIONS/2) {
//         X.value = 0;
//       } else {
//         X.value = H_SWIPE_RANGE;
//       }
//     }
//   });

//   const AnimatedStyles = {
//     swipeable: useAnimatedStyle(() => {
//       return {
//         transform: [{ translateX: X.value }],
//       };
//     }),
//   };

//   return (
//     <View style={styles.container}>
//         <PanGestureHandler  onGestureEvent={animateGestureHandler} >
//           <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]} ></Animated.View>
//         </PanGestureHandler>      
//     </View>
//   );
// }

// import { StyleSheet } from 'react-native';
// import { COLORS } from '../../../themes/colors';

// const styles = StyleSheet.create({
//   container: {
//     height: BUTTON_HEIGHT,
//     width: BUTTON_WIDTH,
//     padding: BUTTON_PADDING,
//     backgroundColor: COLORS.BLUE_300,
//     display: 'flex',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginTop: 10,
//     marginBottom: 10,
//     borderRadius: BUTTON_HEIGHT,
//     borderColor: COLORS.GRAY_SECONDARY,
//     borderWidth: 2,
//   },

//   swipeable: {
//     height: SWIPEABLE_DIMENSIONS,
//     width: SWIPEABLE_DIMENSIONS,
//     borderRadius: SWIPEABLE_DIMENSIONS,
//     borderColor: COLORS.WHITE,
//     borderWidth: 2,
//     backgroundColor: COLORS.BLUE_500,
//     position: 'absolute',
//     leftt: BUTTON_PADDING,
//   }
// });

// export default SwipeButton;