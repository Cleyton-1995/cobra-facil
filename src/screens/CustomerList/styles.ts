import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 17,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    // height: 850,
  },


  back: {
    paddingLeft: 15,
    height: 10,
    top: -5,
  },

  search: {
    padding: 10,
    width: 330,
    marginTop: 100,
    alignSelf: "center",
    paddingLeft: 110,
    borderColor: COLORS.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 10,
  },

  input: {
    height:80,
    marginTop: 10,
    backgroundColor: COLORS.WHITE,
    width: 325,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    paddingTop: 30,
  },

  title: {
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLUE_500,
    marginBottom: 3,
    marginLeft: 40,
  },

  textInput: {
    fontSize: 15,
    height: 40,
    width: 300,
    marginBottom: 20,
    paddingLeft: 40,
    opacity: 0.6,
  },

  circleBlue: {
    position: "absolute",
    backgroundColor: COLORS.BLUE_500,
    display: "flex",
    width: 15,
    height: 15,
    borderRadius: 10,
    marginLeft: 10,
  },

  circleRed: {
    position: "absolute",
    backgroundColor: COLORS.RED_500,
    display: "flex",
    width: 15,
    height: 15, 
    borderRadius: 10,
    marginLeft: 10,
  } ,

  btn: {
    padding: 12,
    height: 50,
    width: 300,
    textAlign: 'center',
    alignSelf : 'center',
    backgroundColor: COLORS.BLUE_500,
    color: COLORS.WHITE,
    borderRadius: 5,
    fontSize: 17,
    marginTop: 40,
    marginBottom: 40,
  },

  icon: {
    position: 'absolute',
    bottom: 20,
    left: 280,
  },

  listContent: {
    padding: 24,
    paddingBottom: 50
  },

  list: {
    flex: 1,
    width: '100%'
  },
});
