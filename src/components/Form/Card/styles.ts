import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    top: 10,
  },
  
  data: {
    backgroundColor: COLORS.WHITE,
    height: 90,
    bottom: 400,
    width: 320,
    borderRadius: 5,
    padding: 15,
  },

  text: {
    color: COLORS.GRAY_PRIMARY,
    marginBottom: 15,
  },

  account: {
    color: COLORS.GRAY_PRIMARY,
    marginBottom: 15,
    bottom: 36,
    marginLeft: 150,
  },
});
