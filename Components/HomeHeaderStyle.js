import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../Constants/Constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.xSmall,
    color: COLORS.gray,
    paddingBottom: SIZES.xLarge ,
    paddingRight: SIZES.large
  },


  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default styles;
