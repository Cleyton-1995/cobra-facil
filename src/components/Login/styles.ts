import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    maxWidth: '100%',
    bottom: -15,
    position: 'absolute',
  },

  salutation: {
    fontSize: 20,
    maxWidth: '60%',
    marginLeft: 70,
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
    top: 110,
  },

  paragraph: {
    left: 40,
    right: 30,
    maxWidth: '80%',
    textAlign: 'center',
    fontSize:12,
    color: COLORS.BLACK_PRIMARY,
    top: 130,
  },
});