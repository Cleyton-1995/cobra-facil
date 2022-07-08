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
    paddingTop: getStatusBarHeight() + 17,
  },

  image: {
    top: 110,
    position: 'absolute',
  },

  salutation: {
    top: 160,
    width: 245,
    fontSize: 22,
    textAlign: 'center',
    color:COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
  },

  next: {
    padding: 10,
    position: 'absolute',
    top: 550,
    backgroundColor: COLORS.WHITE,
  },

  nextColor: {
    color: COLORS.BLUE_500,
    fontSize: 16,
    fontFamily: FONTS.BOLD,
  }
});