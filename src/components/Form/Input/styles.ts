import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingHorizontal: 16,
    fontSize: 14,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
  },

  input: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: COLORS.GRAY_PRIMARY,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    width: 300,
    paddingLeft: 16,
    padding: 10,
    margin: 15,
    bottom: 35,
    fontSize:15,
  },

  email: {
    color: COLORS.BLUE_500,
    bottom: 30,
    fontSize:16,
  },

  password: {
    color: COLORS.BLUE_500,
    bottom: 30,
  },

  icon: {
    right: 30,
    position: "absolute",
    top: 19,
  },
});
