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
    width: 200,
    fontSize: 22,
    marginLeft: 15,
    marginTop: -5,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },

  paragraph: {
    marginLeft: 15,
    marginTop: 40,
    color: COLORS.WHITE,
    marginHorizontal: 20,
    marginBottom: 15,
  },

  currency: {
    padding: 15,
    width: 330,
    marginLeft: 15,
    fontSize: 20,
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK_PRIMARY,
    borderRadius: 5,
    marginTop: -70,
  },

  currencyInput: {
    color: COLORS.BLACK_PRIMARY,
    fontSize: 20,
  },

  btn: {
    width: 300,
    backgroundColor: COLORS.BLUE_500,
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    marginTop: 100,
  },  

  txt: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: 20,
  },

  iconRight: {
    position: 'absolute',
    right: 70,
    margin: 12,
  },

  continues: {
    color: COLORS.BLUE_500,
    marginTop: 20,
    marginHorizontal: 15,
  },
});
