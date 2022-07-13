import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";
import { FONTS } from "../../../themes/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    marginTop: 50,
    alignSelf: "center",
  },

  title: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    fontSize: 20,
  },

  subtitle: {
    color: COLORS.WHITE,
    fontSize: 15,
    marginTop: 25,
    marginLeft: -108,
  },

  profile: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    paddingTop: 8,
    paddingLeft: 8,
    marginRight: 8,
    marginTop: 5,
  },

  entypo: {
    marginTop: 10,
    marginLeft: 70,
  },

  balance: {
    marginTop: 80,
    right: 300,
    color: COLORS.WHITE,
  },

  balanceInput: {
    justifyContent: 'center',
    marginTop: 10,
    right: 310,
    width: 320,
    backgroundColor: COLORS.WHITE,
    color: COLORS.GRAY_PRIMARY,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
  },
});
