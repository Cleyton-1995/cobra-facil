import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 17,
    backgroundColor: COLORS.BLUE_500,
    height: 300,
  },

  content: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 17,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    height: 300,
  },

  back: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    top: -30,
    marginLeft: 35,
  },

  icon: {
    marginLeft: 15,
    top: -12,
  },

  title: {
    fontSize: 22,
    marginLeft: 15,
    marginTop: 5,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },

  submit: {
    fontSize: 20,
    marginLeft: 90,
    marginTop: 5,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },

  received: {
    fontSize: 20,
    marginLeft: 195,
    marginTop: -30,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },

  paragraph: {
    marginLeft: 15,
    marginTop: 25,
    color: COLORS.WHITE,
    marginHorizontal: 20,
    marginBottom: 20,
  },

  transfer: {   
    backgroundColor: COLORS.WHITE,
    width: 100,
    height: 90,
    marginTop: -90,
    left:  70,
    borderRadius: 5,
    paddingTop: 60,
  },

  demand: {   
    backgroundColor: COLORS.WHITE,
    width: 100,
    height: 90,
    marginTop: -90,
    borderRadius: 5,
    paddingTop: 60,
    marginLeft: 190,
  },

  titlesBottom: {
    marginTop: 10,
    marginBottom: -40,
    textAlign: 'center',
  },

  titleBottom: {
    marginTop: 30,
    marginBottom: -40,
    textAlign: 'center',
  },

  copy: {
    position: 'absolute',
    marginHorizontal: 33,
    marginVertical: 30,
    paddingHorizontal:  -30,
  },

  dollar: {
    position: 'absolute',
    marginVertical: 33,
    marginLeft: 46,
    marginTop: 36,
  } 
});
