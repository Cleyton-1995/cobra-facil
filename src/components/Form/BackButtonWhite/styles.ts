import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';
import { FONTS } from '../../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    flexDirection: 'row',
    left: 0,
    marginTop: 15,
    marginLeft: 15,
  },
  back: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    top: -18,
    marginLeft: 20,
  },

  subtitle: {
    fontSize: 12,
    marginLeft: 4,
    marginTop: 55,
    color: COLORS.WHITE,
  }
});