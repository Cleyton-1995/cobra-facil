import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 700,
    alignItems: 'center',
    paddingTop: getStatusBarHeight() + 17,
    backgroundColor: COLORS.GRAY_QUINTENAY,
  },
  text: {
      width: '90%',
      top: -50,
      fontSize: 12,
      textAlign: 'justify',
      paddingRight: 5,
  },
  
  access: {
    width: 300,
    padding: 12,
    alignItems: 'center',
    backgroundColor: COLORS.BLUE_500,
    borderRadius: 5,
  },

  accessColor: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONTS.BOLD,
  },

  mainContainer: {
    top: -200,
    backgroundColor:  COLORS.WHITE,
    width: '90%',
    height: 320,
    alignItems: 'center',
    paddingBottom: 100,
    paddingTop: 80,
    borderRadius: 5,
  },

  email: {
    alignItems: 'center',
    width: "110%",
  }
});