import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BLUE_500,
    height: "100%",
  },

  back: {
    left: -133,
    top: 130,
  },

  touchableOpacity: {
    borderBottomColor: COLORS.WHITE,
    borderTopColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 15,
    top: -350,
    width: 310,
  },

  profile: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    paddingTop: 8,
    paddingLeft: 8,
    marginRight: 8,
    top: -450,
    left: -135
  },
});