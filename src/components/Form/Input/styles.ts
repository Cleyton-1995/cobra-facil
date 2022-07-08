import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';
import { FONTS } from '../../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 450,
    paddingHorizontal: 16,
    fontSize: 14,
    padding: 90,
    backgroundColor: COLORS.WHITE,
    top: 50,
    borderRadius: 5,
  },

  input: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.GRAY_PRIMARY,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    width: '100%',
    paddingLeft: 16,
    padding: 10,
    margin: 15,
    bottom: 35,
  },

  email: {
    color: COLORS.BLUE_500,
  bottom: 30,
  },

  password: {
    color: COLORS.BLUE_500,
    bottom: 30,
  },

  login: {
    color: COLORS.BLUE_500,
    top: -50,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: FONTS.BOLD,
  },

  icon: {
    marginLeft : 250,
    bottom: 105,
  },

  forgotPassword: {
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    fontSize: 14,
    position: 'relative',
    bottom: 45,
    marginLeft: 140,
    textDecorationLine: 'underline',
    borderBottomColor: COLORS.BLUE_500,   
  },
})