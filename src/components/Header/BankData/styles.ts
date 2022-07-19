import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';
import { FONTS } from '../../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
  },

  view: {
    alignSelf: 'center',
    top: -180,
    backgroundColor: COLORS.WHITE,
    width: 325,
    height: 300,
    borderRadius: 5,
    paddingLeft: 3,
  },

  balance: {
    top: -190,
    marginTop: 80,
    marginLeft: 20,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },

  balanceInput: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: 260,
    backgroundColor: COLORS.WHITE,
    color: COLORS.GRAY_PRIMARY,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderColor: COLORS.GRAY_PRIMARY,
    borderWidth: 1,
  },

  textInput: {
    color: COLORS.BLUE_500,
    marginLeft: 10,
  },

  input: {
    width: 300,
    height: 45,
    marginLeft: 10,
    paddingLeft: 10,
    borderColor: COLORS.GRAY_PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
  },

  touchableOpacity: {
    marginTop: 20,
    width: 300,
    height: 45,
    borderRadius: 5,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: COLORS.BLUE_500,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },

  help: {
    marginLeft: 30,
    bottom: 15,
  },

  footer: {
    marginLeft: 30,
    borderBottomColor: COLORS.GRAY_SECONDARY,
    borderBottomWidth: 1,
    bottom: 100,
    marginBottom: 10,
    width: 300,
    height: 45,
  },
  icons: {
    bottom: -5,
  }
});