import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: getStatusBarHeight() + 17,
  },

  image: {
  },

  salutation: {
    fontSize: 22,
    textAlign: 'center',
    color:COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
  },

  next: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 249,
    padding: 10,
    backgroundColor: COLORS.WHITE,
  },

  nextColor: {
    color: COLORS.BLUE_500,
    fontSize: 16,
    fontFamily: FONTS.BOLD,
  }
});