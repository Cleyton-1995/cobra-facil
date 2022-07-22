import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';
  import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GRAY_QUINTENAY,
    justifyContent: 'center',
  },

  input: {
    marginTop: 100,
    marginBottom: 20,
    backgroundColor: COLORS.WHITE,
    width: 325,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    paddingTop: 10,
  },

  title: {
    fontFamily: FONTS.BOLD,
    color: COLORS.BLUE_500,
    marginBottom: 5,
    marginLeft: 15,
  },

  textInput: {
    borderColor: COLORS.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 300,
    alignSelf: 'center',
    marginBottom: 20,
    paddingLeft: 10,
  },

  secondTitle: {
    fontFamily: FONTS.BOLD,
    color: COLORS.BLUE_500,
    marginBottom: 5,
    marginLeft: 15,
  },

  secondTextInput: {
    borderColor: COLORS.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    height: 100,
    width: 300,
    alignSelf: 'center',
    marginBottom: 20,
    paddingLeft: 10,
    paddingBottom: 50,
  },

  secondInput: {
    marginBottom: -80,
    backgroundColor: COLORS.WHITE,
    width: 325,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },

  charge: {
    top: 50,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLUE_500,
    marginBottom: 10,
    marginLeft: 15,
    paddingTop: 10,
  },

  repeatCharge: {
    top: 50,
    borderColor: COLORS.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 180,
    alignSelf: 'center',
    marginBottom: 20,
    paddingLeft: 10,
    marginLeft: 120,
  },

  value: {
    top: 50,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLUE_500,
    marginBottom: 10,
    marginLeft: 15,
    paddingTop: 10,

  },

  values: {
    top: 50,
    borderColor: COLORS.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 160,
    alignSelf: 'center',
    marginBottom: 20,
    paddingLeft: 10,
    marginRight: 140,
  },

  repetition: {
    top: -50,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLUE_500,
    marginBottom: 10,
    marginLeft: 185,
    paddingTop: 10,
    bottom: 100,
  },

  repetitions: {
    top: -50,
    borderColor: COLORS.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 130,
    alignSelf: 'center',
    marginBottom: 20,
    paddingLeft: 10,
    marginLeft: 170,
  },

  dueDate: {
    marginTop: 100,
    marginBottom: -80,
    backgroundColor: COLORS.WHITE,
    width: 325,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    paddingTop: 10,
  },

  date: {
    fontFamily: FONTS.BOLD,
    color: COLORS.BLUE_500,
    marginBottom: 5,
    marginLeft: 15,
  },
  
  selectBilling: {
    marginTop: 100,
    marginBottom: 50,
    backgroundColor: COLORS.WHITE,
    width: 325,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    paddingTop: 10,
  },

  select: {
    fontFamily: FONTS.BOLD,
    color: COLORS.BLUE_500,
    marginBottom: 5,
    marginLeft: 15,
  },

  information: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.GRAY_SECONDARY,
    marginBottom: 20,
  },

  name: {
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 16,
  },

  cnpj: {
    color: COLORS.GRAY_PRIMARY,
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 16,
  },

  button: {
    padding: 12,
    height: 50,
    width: 300,
    textAlign: 'center',
    alignSelf : 'center',
    backgroundColor: COLORS.BLUE_500,
    color: COLORS.WHITE,
    marginBottom: 30,
    borderRadius: 5,
    fontSize: 17,
  },

  iconSelect: {
    position: 'absolute',
    bottom: 110,
    left: 280,
  },

  iconRepeat: {
    position: 'absolute',
    bottom: 130,
    left: 280,
  }
});