import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';
import { FONTS } from '../../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    flexDirection: 'row',
    left: 0,
    margin: -10,
  },
  
  back: {
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    top: -18,
    marginLeft: 20,
  }
});