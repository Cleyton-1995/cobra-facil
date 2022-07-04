import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },

  text : {
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    top: 250,
  }
});