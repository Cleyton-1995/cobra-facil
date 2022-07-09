import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: getStatusBarHeight() + 17,
  },
  access: {
    width: 300,
    textAlign: 'center',
    padding: 12,
    alignItems: 'center',
    backgroundColor: COLORS.BLUE_500,
    borderRadius: 5,
  },

  registration: {
    width: 300,
    textAlign: 'center',
    padding: 12,
    alignItems: 'center',
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    fontSize: 16,
    borderRadius: 5,
  },

  accessColor: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONTS.BOLD,
  },

  registrationColor: {
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    fontSize: 16,
  },

  button: {
    justifyContent: 'space-around',
    position: 'absolute', 
  },

  login: {
    color: COLORS.BLUE_500,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: FONTS.BOLD,
    paddingVertical: 50,
  },

  mainContainer: {
    top: 40,
    backgroundColor:  COLORS.WHITE,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },

  
  forgotPassword: {
    color: COLORS.BLUE_500,
    fontFamily: FONTS.BOLD,
    fontSize: 14,
    position: 'relative',
    bottom: 45,
    marginLeft: 140,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.BLUE_500,   
  },
});