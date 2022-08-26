import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 17,
    backgroundColor: COLORS.BLUE_500,
    height: 230,
  },

  content: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 17,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    height: 1350,
  },

  back: {
    paddingLeft: 15,
    height: 10,
    top: -5,
    marginBottom: 25,
  },

  title: {
    fontSize: 22, 
    marginLeft: 15,
    marginTop: 5,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },

  subtitle: {
    marginLeft: 15,
    marginTop: -5,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },

  hide: {
    marginLeft: 15,
    marginTop: 40,
    color: COLORS.WHITE,
  },

  name: {
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLUE_500,
    alignSelf: "center",
    width: 330,
    padding: 15,
    borderRadius: 5,
    marginTop: -70,
  },

  customerContact: {
    backgroundColor: COLORS.WHITE,
    width: 330,
    alignSelf: "center",
    borderRadius: 5,
    paddingLeft: 15,
    padding: 20,
    marginBottom: 20,
  },

  contact: {
    color: COLORS.BLUE_500,
    marginBottom: 10,
  },

  contactInput: {
    width: 300,
    color: COLORS.BLACK_TERTIARY,
    borderColor: COLORS.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    paddingLeft: 10,
  },

  typesOfPerson: {
    backgroundColor: COLORS.WHITE,
    width: 330,
    alignSelf: "center",
    borderRadius: 5,
    paddingLeft: 15,
    padding: 5,
    marginBottom: 20,
  },

  kindOfPerson: {
    color: COLORS.BLUE_500,
    marginBottom: 10,
  },

  iconDown: {
    position: "absolute",
    marginTop: 48,
    right: 30,
  },

  type: {
    color: COLORS.BLACK_TERTIARY,
    borderColor: COLORS.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    paddingLeft: 10,
    marginBottom: 15,
    width: 300,
  },

  status: {
    color: COLORS.BLACK_TERTIARY,
    borderColor: COLORS.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    paddingLeft: 10,
    marginBottom: 15,
    width: 180,
    marginLeft: 120,
  },

  btn: {
    width: 300,
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: COLORS.BLUE_500,
    color: COLORS.WHITE,
    padding: 12,
    fontSize: 18,
    borderRadius: 5,
  },

  borderBottom: {
    padding: 40,
    borderBottomColor: COLORS.GRAY_SECONDARY,
    borderBottomWidth: 1,
    width: 330,
    alignSelf: "center",
    marginBottom: 20,
  },

  linkedCharges: {
    color: COLORS.BLUE_500,
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 20,
  },

  select: {
    backgroundColor: COLORS.WHITE,
    width: 330,
    alignSelf: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },

  selectChrages: {
    color: COLORS.BLUE_500,
    marginBottom: 10,
    marginLeft: 10,
  },

  selectInput: {
    color: COLORS.BLACK_TERTIARY,
    borderColor: COLORS.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    paddingLeft: 10,
    marginBottom: 15,
    width: 300,
    alignSelf: "center",
  },

  iconCharges: {
    position: "absolute",
    top: 55,
    right: 30,
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

  textLatestPayments: {
    color: COLORS.BLUE_500,
    fontSize: 18,
    paddingBottom: 20,
  },

  view: {
    width: 330,
    alignSelf: "center",
    padding: 8,
    paddingTop: 50,
    borderTopColor: COLORS.GRAY_SECONDARY,
    borderTopWidth: 1,
  },

  latestPayments1: {
    height: 80,
    backgroundColor: COLORS.WHITE,
    marginBottom: 20,
    borderRadius: 5,
    padding: 10,
  },

  latestPayments2: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    padding: 10,
    height: 80,
  },

  circlePayment: {
    position: "absolute",
    backgroundColor: COLORS.GRAY_PRIMARY,
    display: "flex",
    width: 8,
    height: 8, 
    borderRadius: 10,
    marginLeft: 125,
    marginTop: 50,
  }
});
