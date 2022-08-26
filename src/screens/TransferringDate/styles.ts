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

  txt: {
    fontFamily: FONTS.BOLD,
    color: COLORS.BLUE_500,
    marginHorizontal: 15,
    fontSize: 25,
  },

  continues: {
    color: COLORS.WHITE,
    textAlign: "center",
    fontSize: 20,
  },

  transferring: {
    height: 70,
    backgroundColor: COLORS.WHITE,
    width: 330,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 15,
  },

  transferringDate: {
    height: 220,
    backgroundColor: COLORS.WHITE,
    width: 330,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 15,
  },

  bankAccount: {
    color: COLORS.GRAY_PRIMARY,
    marginBottom: 5,
  },

  cpf: {
    color: COLORS.BLACK_PRIMARY,
    marginTop: -26,
    marginBottom: 10,
    left: 189,
  },

  bank: {
    color: COLORS.BLACK_PRIMARY,
    marginTop: -26,
    marginBottom: 10,
    left: 137,
  },

  agency: {
    color: COLORS.BLACK_PRIMARY,
    marginTop: -26,
    marginBottom: 10,
    left: 289,
  },

  account: {
    color: COLORS.BLACK_PRIMARY,
    marginTop: -26,
    marginBottom: 10,
    left: 215,
  },

  iconBank: {
    position: "absolute",
    marginTop: 22,
    marginLeft: 15,
  },

  for: {
    marginLeft: 15,
    fontSize: 18,
  },
  person: {
    fontFamily: FONTS.BOLD,
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
    fontSize: 20,
  },

  iconDown: {
    position: "absolute",
    marginVertical: 25,
    right: 15,
  },
});
