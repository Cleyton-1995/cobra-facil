import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';

export const styles = StyleSheet.create({
  container: {},
  
  textInput: {
    width: 320,
    backgroundColor: COLORS.WHITE,
    top: -80,
    alignSelf: 'center',
    borderRadius: 5,
    paddingLeft: 30,
    padding: 8,
    color: COLORS.BLUE_500
  },

  icon: {
    position: "absolute",
    top: -70,
    right: 35,
  }
});