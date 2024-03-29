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
    marginLeft: 50,
    width: 210,
  },

  subtitle: {
    color: COLORS.WHITE,
    fontSize: 15,
    marginLeft: 50,

    // marginTop: 25,
    // marginLeft: -108,
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
    marginLeft: 40,
  },

  balance: {
    marginTop: 75,
    right: 310,
    color: COLORS.WHITE,
    fontSize: 12,
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
