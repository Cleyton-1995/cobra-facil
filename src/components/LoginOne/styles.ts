import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    paddingTop: 20,
  },

  content: {
    alignSelf: 'center',
    maxWidth: '100%',
  },

  salutation: {
    fontSize: 20,
    maxWidth: '60%',
    marginLeft: 70,
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
    marginBottom: 20,
  },

  next: {
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',    
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
});