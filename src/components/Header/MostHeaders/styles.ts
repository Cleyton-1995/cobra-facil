import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";
import { FONTS } from "../../../themes/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    top: 100,
    alignSelf: "center",
    position: "absolute",
  },

  title: {
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    fontSize: 20,
  },

  image: {
    width: 100,
    left: 40,
    top: -10,
  },
});
