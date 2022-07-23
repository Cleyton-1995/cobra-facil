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
    bottom: 180,
    marginLeft: 40,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    width: 30,
    height: 30,
    paddingTop: 2,
    paddingLeft: 3,
    borderRadius : 5,
  },

  addusergroup: {
    bottom: 140,
    marginLeft: 180,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    width: 30,
    height: 30,
    paddingTop: 2,
    paddingLeft: 3,
    borderRadius : 5,
  },

  dollar: {
    bottom: 170,
    marginLeft: 40,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    width: 30,
    height: 30,
    paddingTop: 2,
    paddingLeft: 3,
    borderRadius : 5,
  },

  dollar_sign: {
    bottom: 210,
    marginLeft: 210,
    backgroundColor: COLORS.GRAY_QUINTENAY,
    width: 30,
    height: 30,
    paddingTop: 2,
    paddingLeft: 3,
    borderRadius : 5,
  },

  charge: {
    backgroundColor: COLORS.WHITE,
    width: 160,
    height: 90,
    marginTop: -60,
    marginLeft:  30,
    borderRadius: 5,
    paddingTop: 60,
    paddingLeft: 10,
  },
  
  invoicing: {
    backgroundColor: COLORS.WHITE,
    width: 130,
    height: 90,
    marginTop: -90,
    marginLeft:  200,
    borderRadius: 5,
    paddingTop: 60,
    paddingLeft: 10,
  },
  
  transfer: {
    backgroundColor: COLORS.WHITE,
    width: 130,
    height: 90,
    marginTop: 10,
    marginLeft:  30,
    borderRadius: 5,
    paddingTop: 60,
    paddingLeft: 10,
  },
  
  customers: {
    backgroundColor: COLORS.WHITE,
    width: 160,
    height: 90,
    marginTop: -90,
    marginLeft:  170,
    borderRadius: 5,
    paddingTop: 60,
    paddingLeft: 10,
  },
});