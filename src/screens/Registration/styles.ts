import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: getStatusBarHeight() + 17,
    backgroundColor: COLORS.GRAY_QUINTENAY,
  },
  
  access: {
    width: 300,
    padding: 12,
    alignItems: 'center',
    backgroundColor: COLORS.BLUE_500,
    borderRadius: 5,
    bottom: 30,
  },

  accessColor: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontFamily: FONTS.BOLD,
  },

  mainContainer: {
    top: 70,
    backgroundColor:  COLORS.WHITE,
    width: '90%',
    alignItems: 'center',
    paddingTop: 40,
    borderRadius: 5,
  },

  emailContainer: {
    top: 30,
    backgroundColor:  COLORS.WHITE,
    width: '90%',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 5,
  },

  email: {
    alignItems: 'center',
    width: "110%",
  },
  
  name: {
    alignItems: 'center',
    width: "110%",
  }
});