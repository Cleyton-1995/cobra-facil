import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';
import { FONTS } from '../../../themes/fonts';
export const styles = StyleSheet.create({
  container: {
    width: 300,
    textAlign: 'center',
    padding: 10,
    alignItems: 'center',
    position: 'absolute',
    top: 550,
    backgroundColor: COLORS.WHITE,
  },
  
  buttonText: {
    color: COLORS.BLUE_500,
    fontSize: 16,
    fontFamily: FONTS.BOLD,
  }
})