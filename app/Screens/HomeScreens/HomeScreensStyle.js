import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../Constants/Constants";
const styles = StyleSheet.create({
  container: {
    padding: SIZES.xSmall,
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    marginBottom: SIZES.xLarge,
  },

  RecipeText: {
    fontSize: SIZES.large,
    fontWeight: "600",
    color: COLORS.secondary,
    marginBottom: SIZES.large
  },

  seeMoreText: {
    fontSize: SIZES.large - 2,
    fontWeight: "500",
    color: COLORS.primary,
    marginBottom: SIZES.xSmall,
  },

  recContain: {
    flexDirection: 'row',
    justifyContent: "space-between",
  }
});

export default styles;
