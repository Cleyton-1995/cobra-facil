import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "column",
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