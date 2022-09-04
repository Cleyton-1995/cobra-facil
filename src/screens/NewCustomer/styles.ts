import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 17,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    height: 1000,
  },

  back: {
    paddingLeft: 15,
    height: 10,
    top: -5,
  },

  customer: {
    height: 200,
    marginTop: 100,
    backgroundColor: COLORS.WHITE,
    width: 325,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 5,
    paddingTop: 10,
    marginBottom: -80,
  },

  customerName: {
    fontFamily: FONTS.BOLD,
    color: COLORS.BLUE_500,
    marginBottom: 10,
    marginLeft: 20,
  },

  customerNameInput: {
    // height: 40,
    padding: 10,
    width: 300,
    marginBottom: 20,
    paddingLeft: 10,
    borderColor: COLORS.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "center",
  },

  contact: {
    fontFamily: FONTS.BOLD,
    color: COLORS.BLUE_500,
    marginBottom: 10,
    marginLeft: 20,
  },

  contactInput: {
    // height: 40,
    padding: 10,
    width: 300,
    marginBottom: 20,
    paddingLeft: 10,
    borderColor: COLORS.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "center",
  },

  select: {
    height: 300,
    marginTop: 100,
    backgroundColor: COLORS.WHITE,
    width: 325,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 5,
    paddingTop: 20,
    marginBottom: -80,
  },

  typeCharge: {
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLUE_500,
    marginBottom: 10,
    marginLeft: 15,
  },

  value: {
    fontSize: 15,
    height: 40,
    width: 300,
    marginBottom: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginLeft: 30,
    color: COLORS.BLACK_SECONDARY,
  },

  valid: {
    top: -60,
    marginLeft: 140,
    marginBottom: -20,
    color: COLORS.GRAY_PRIMARY,
  },

  border: {
    alignSelf: 'center',
    width: 300,
    height: 80,
    borderRadius: 5,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_TERTIARY,
    borderLeftColor: COLORS.GRAY_TERTIARY,
    marginBottom: 10,
  },

  circle: {
    position: "absolute",
    backgroundColor: COLORS.GRAY_PRIMARY,
    display: "flex",
    width: 8,
    height: 8, 
    borderRadius: 10,
    marginLeft: 120,
    marginTop: 40,
  } ,

  btn: {
    padding: 12,
    height: 50,
    width: 300,
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: COLORS.BLUE_500,
    color: COLORS.WHITE,
    borderRadius: 5,
    fontSize: 17,
    marginTop: 120,
  },

  icon1: {
    position: "absolute",
    bottom: 125,
    left: 280,
  },

  icon2: {
    position: "absolute",
    bottom: 215,
    left: 280,
  },
});
