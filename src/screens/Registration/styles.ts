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
    height: 800,
  },
  
  access: {
    width: 300,
    alignItems: 'center',
    backgroundColor: COLORS.BLUE_500,
    borderRadius: 5,
    bottom: 30,
  },

  accessColor: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    padding: 12,
  },

  mainContainer: {
    top: -180,
    backgroundColor:  COLORS.WHITE,
    width: '90%',
    height: 200,
    alignItems: 'center',
    paddingTop: 40,
    borderRadius: 5,
    marginBottom: 20
  },

  emailContainer: {
    top: -150,
    height: 200,
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