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

  icon: {
    marginLeft: 15,
    top: -12
  },

  txt: {
    color: COLORS.BLUE_500,
    marginTop: 20,
    marginHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
  },

  iconRight: {
    position: "absolute",
    right: 70,
    margin: 12,
  },

  continues: {
    color: COLORS.WHITE,
    textAlign: "center",
    fontSize: 20,
  },

  bank: {
    height: 70,
    backgroundColor: COLORS.WHITE,
    width: 330,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 50,
  },

  bankOne: {
    marginBottom: 5,
    fontSize: 17,
  },

  anotherInstitution: {
    marginBottom: 5,
    fontSize: 17,
    marginTop: 12,
  },

  bankAccount: {
    color: COLORS.GRAY_PRIMARY,
  },

  iconBank: {
    position: "absolute",
    marginTop: 22,
    marginLeft: 15,
  },

    right: {
    position: "absolute",
    marginTop: 22,
    right: 10,
  },
});
