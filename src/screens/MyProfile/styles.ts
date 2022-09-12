import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLUE_500,
    height: 300,
  },
  
  back: {
    paddingLeft: 15,
    height: 10,
    top: 40,
    marginBottom: 25,
  },

  content: {
    backgroundColor: COLORS.GRAY_QUINTENAY,
    height: 430,
  },

  textInput: {
    color: COLORS.BLUE_500,
    marginLeft: 12,
  },

  input: {
    width: 300,
    padding: 10,
    marginLeft: 10,
    paddingLeft: 10,
    borderColor: COLORS.GRAY_PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
  },

  touchableOpacity: {
    marginTop: 20,
    width: 300,
    // height: 45,
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: COLORS.BLUE_500,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    fontSize: 16,
  },

  view: {
    alignSelf: 'center',
    top: -80,
    backgroundColor: COLORS.WHITE,
    width: 325,
    height: 320,
    borderRadius: 5,
    paddingLeft: 3,
  },
});