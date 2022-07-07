import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
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