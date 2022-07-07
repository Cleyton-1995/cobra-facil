import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../themes/colors';
import { FONTS } from '../../../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: FONTS.BOLD,
    color: COLORS.RED_500,
    backgroundColor: COLORS.WHITE,
    bottom: 140,
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
    bottom: 30,
    position: 'relative',
  },

  password: {
    color: COLORS.BLUE_500,
    bottom: 30,
  },

  icon: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 240,
    bottom: 80,
  }
});