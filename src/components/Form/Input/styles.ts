import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';
import { FONTS } from '../../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 500,
    alignSelf: 'center',
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: FONTS.BOLD,
    color: COLORS.RED_500,
    padding: 90,
    backgroundColor: COLORS.WHITE,
    top: 100,
    borderRadius: 5,
  },

  input: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: COLORS.GRAY_PRIMARY,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    width: '100%',
    paddingLeft: 16,
    padding: 10,
    position: 'relative',
  },

  email: {
    color: COLORS.BLUE_500,
  },

  password: {
    color: COLORS.BLUE_500,
    top: 20,
  },

  login: {
    color: COLORS.BLUE_500,
    top: -30,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: FONTS.BOLD,
  },

  icon: {
    flexDirection: 'row',
    marginLeft : 250,
    
  }
})