import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 17,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    height: 300,
  },

  back: {
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    top: -30,
    marginLeft: 35,
  },

  title: {
    width: 200,
    fontSize: 22,
    marginLeft: 15,
    marginTop: -5,
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
  },

  paragraph: {
    marginLeft: 15,
    marginTop: 40,
    color: COLORS.WHITE,
    marginHorizontal: 20,
    marginBottom: 15,
  },

  icon: {
    marginLeft: 15,
    top: -12
  },

  textInput: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 20,
    borderBottomColor: COLORS.GRAY_SECONDARY,
    borderBottomWidth: 1,
  },

  txt: {
    color: COLORS.BLUE_500,
    marginTop: 20,
    marginHorizontal: 15,
  },

  iconRight: {
    position: 'absolute',
    right: 70,
    margin: 12,
  },

  btn: {
    width: 300,
    backgroundColor: COLORS.BLUE_500,
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    marginTop: 100,
  },

  continues: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: 20,
  },

});
