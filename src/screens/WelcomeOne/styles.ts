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
  },

  image: {
    width: '80%',
  },

  salutation: {
    width: 245,
    fontSize: 22,
    textAlign: 'center',
    color:COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
  },
});