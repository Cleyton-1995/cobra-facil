import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 17,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    height: 615,
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

  icon: {
    marginLeft: 15,
    top: -12
  },

  transferring: {
    height: 170,
    backgroundColor: COLORS.WHITE,
    width: 330,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 50,
    paddingTop: 20,
    paddingLeft: 15,
  
  },

  btn: {
    width: 300,
    backgroundColor: COLORS.BLUE_500,
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },

  txtbtn: {
    color: COLORS.WHITE,
    textAlign: "center",
    fontSize: 16,
    padding: 3
  },

  textInput: {
    borderColor: COLORS.GRAY_PRIMARY,
    borderWidth:1,
    padding: 10,
    width:300,
    borderRadius: 5,
    paddingLeft: 10,
  }
});
