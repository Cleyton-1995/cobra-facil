import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: getStatusBarHeight() + 17,
    backgroundColor: COLORS.GRAY_TERTIARY,
  },
  access: {
    width: 300,
    textAlign: 'center',
    padding: 12,
    alignItems: 'center',
    position: 'absolute',
    top: 490,
    backgroundColor: COLORS.BLUE_500,
    borderRadius: 5,
  },

  registration: {
    width: 300,
    textAlign: 'center',
    padding: 12,
    alignItems: 'center',
    position: 'absolute',
    top: 550,
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    fontSize: 16,
    borderRadius: 5,
  },

  accessColor: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONTS.BOLD,
  },

  registrationColor: {
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    fontSize: 16,
  },
});