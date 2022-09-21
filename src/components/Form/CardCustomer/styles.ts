import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';
import { FONTS } from '../../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  icon: {
    position: 'absolute',
    bottom: 20,
    left: 280,
  }  

});