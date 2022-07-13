import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLUE_500,
    height: 300,
  },

  content: {
    backgroundColor: COLORS.GRAY_QUINTENAY,
    height: 430,
  },

  plus: {
    bottom: 200,
    marginLeft: 40,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    width: 30,
    height: 30,
    paddingTop: 2,
    paddingLeft: 3,
    borderRadius : 5,
  },

  addusergroup: {
    bottom: 160,
    marginLeft: 180,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    width: 30,
    height: 30,
    paddingTop: 2,
    paddingLeft: 3,
    borderRadius : 5,
  },

  dollar: {
    bottom: 190,
    marginLeft: 40,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    width: 30,
    height: 30,
    paddingTop: 2,
    paddingLeft: 3,
    borderRadius : 5,
  },

  dollar_sign: {
    bottom: 230,
    marginLeft: 210,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    width: 30,
    height: 30,
    paddingTop: 2,
    paddingLeft: 3,
    borderRadius : 5,
  }
});