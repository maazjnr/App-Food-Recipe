import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../Constants/Constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.xSmall,
    color: COLORS.gray,
    flexDirection: "row",
  },

  inputText: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.xSmall,
    width: '80%',
    borderRadius: SIZES.xSmall,
    height: SIZES.large * 3,
    marginBottom: SIZES.xSmall * 2,
    marginRight: SIZES.xSmall * 2,
  },

  headerImage: {
    width: 60,
    height: 60,
    borderRadius: SIZES.xSmall,
  },
});

export default styles;
