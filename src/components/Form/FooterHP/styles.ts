import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";

export const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 220,
    bottom: 100,
    backgroundColor: COLORS.WHITE,
    alignSelf: "center",
    borderRadius: 5,
    paddingTop: 10,
  },

  balance: {
    fontSize: 12,
    paddingLeft: 25,
    color: COLORS.RED_500,
  },

  title: {
    fontSize: 13.5,
    marginLeft: 5,
    marginBottom: 10,
  },

  personalInformation: {
    fontSize: 13,
    paddingLeft: 25,
  },

  personal: {
    fontSize: 12,
    marginLeft: 25,
    marginBottom: 10,
    color: COLORS.BLUE_500,
  },
  billingInformation: {
    fontSize: 12,
    paddingLeft: 25,
  },

  billing: {
    fontSize: 13,
    marginLeft: 25,
    marginBottom: 10,
    color: COLORS.GRAY_PRIMARY,
  },

  documentationInformation: {
    fontSize: 13,
    paddingLeft: 25,
  },

  documentation: {
    fontSize: 12,
    marginLeft: 25,
    marginBottom: 10,
    color: COLORS.GRAY_PRIMARY,
  },
});
