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
    top: 130,
    position: 'absolute',
  },

  salutation: {
    top: 100,
    width: '80%',
    fontSize: 26,
    textAlign: 'center',
    color:COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
  },
  paragraph: {
    top: 130,
    width: '80%',
    fontSize: 12,
    textAlign: 'center',
  }
});