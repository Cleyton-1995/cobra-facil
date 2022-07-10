import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: getStatusBarHeight() + 17,
    backgroundColor: COLORS.GRAY_QUINTENAY,
  },
  text: {
      width: '90%',
      top: -50,
      fontSize: 11,
      textAlign: 'justify',
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
    fontSize: 14,
    fontFamily: FONTS.BOLD,
  },

  mainContainer: {
    top: -150,
    backgroundColor:  COLORS.WHITE,
    width: '90%',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 80,
  },

  email: {
    alignItems: 'center',
    width: "110%",
  }
});