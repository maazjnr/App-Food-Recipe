import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../Constants/Constants";

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.xSmall,
    width: 310,
    borderRadius: SIZES.small,
    height: SIZES.large * 3,
    fontSize: SIZES.large - 5,
  },

  searchRecipesText: {
    color: COLORS.gray,
    fontSize: SIZES.large - 5,
    fontWeight: "400",
    paddingBottom: SIZES.large - 5,
  },

  searchUserText: {
    color: COLORS.primary,
    fontSize: SIZES.large - 5,
    fontWeight: "500",
    paddingBottom: SIZES.large - 16,
  },
});

export default styles;
