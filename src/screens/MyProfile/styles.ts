import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLUE_500,
    height: 300,
  },
  
  back: {
    paddingLeft: 15,
    height: 10,
    top: 40,
    marginBottom: 25,
  },

  content: {
    backgroundColor: COLORS.GRAY_QUINTENAY,
    height: 430,
  },
});