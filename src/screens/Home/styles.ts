import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    fontSize: 14,
    backgroundColor: COLORS.BLUE_500,
    alignSelf: "center",
    paddingTop: 100,
  },
  
  input: {
    alignSelf: "center",
    borderWidth: 1,
    backgroundColor: COLORS.WHITE,
    color: COLORS.GRAY_PRIMARY,
    borderRadius: 5,
    width: 330,
    paddingLeft: 16,
    padding: 10,
    margin: 15,
    bottom: 35,
    fontSize:18,
  },

  email: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    bottom: 30,
    fontSize:11,
  },

  icon: {
    right: 30,
    position: "absolute",
    top: 180,
  },

  total: {
    fontSize: 18,
    color: COLORS.BLUE_500,
    left:60,
    position: "absolute",
    top: 177,
  },

  avatar: {
    paddingTop: 12,
    paddingLeft: 12,
    width: 50,
    height: 50,
    position: "absolute",
    top: 50,
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 20,
    justifyContent: "center",
    backgroundColor: COLORS.WHITE,
  },

  title: {
    bottom:50,
    fontSize: 18,
    color: COLORS.WHITE,
    marginLeft: 65,
  },

  subtitle: {
    bottom: 50,
    fontSize: 14,
    color: COLORS.WHITE,
    marginLeft: 65,
  },

  entypo: {
    bottom: 70,
    fontSize: 20,
    marginLeft: 300,
  },

  charge: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    width: 150,
    height: 80,
    marginLeft: 15,
    paddingLeft: 5,
    paddingTop: 50,
  },

  invoicing: {
    bottom: 80,
    marginLeft: 185,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    width: 130,
    height: 80,
    paddingLeft: 5,
    paddingTop: 50,
  },

  transfer: {
    bottom:60,
    marginLeft: 15,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    width: 130,
    height: 80,
    paddingLeft: 5,
    paddingTop: 50,
  },

  customers: {
    bottom: 140,
    marginLeft: 165,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    width: 150,
    height: 80,
    paddingLeft: 5,
    paddingTop: 50,
  },

  text: {
    textAlign: 'center',
    fontSize: 12,
    top: -50,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    width: 325,
    height: 200,
    paddingTop: 25,
  },

  top: {
    fontSize: 11,
    left: 40,
    bottom: 250,
    paddingTop: 10,
    color: COLORS.RED_500,
  },

  personalInformation: {
    fontSize: 10,
    left: 40,
    bottom: 260,
    paddingTop: 10,
    color: COLORS.BLUE_500,
  },

  personal: {
    fontSize: 12,
    bottom: 250,
    borderRadius: 5,
    paddingTop: 25,
    left: 40,
  },

  receivingInformation: {
    fontSize: 10,
    left: 40,
    bottom: 280,
    paddingTop: 10,
    color: COLORS.GRAY_PRIMARY,
  },

  receiving: {
    fontSize: 12,
    bottom: 270,
    borderRadius: 5,
    paddingTop: 25,
    left: 40,
  },

  documentationInformation:{
    fontSize: 10,
    left: 40,
    bottom: 300,
    paddingTop: 10,
    color: COLORS.GRAY_PRIMARY,
  },

  documentation: {
    fontSize: 12,
    bottom: 290,
    borderRadius: 5,
    paddingTop: 25,
    left: 40,
  }
});