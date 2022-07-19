import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";
import { FONTS } from "../../../themes/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    top: 80,
    alignSelf: "center",
    position: "absolute",
  },

  title: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    fontSize: 20,
  },

  image: {
    width: 100,
    left: 50,
    top: -10,
  },
});
