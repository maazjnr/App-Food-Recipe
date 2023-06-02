import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../Constants/Constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.xSmall,
    color: COLORS.gray,
    flexDirection: "row",
    paddingBottom: SIZES.xLarge * 1.5,
    paddingTop: SIZES.xLarge * 1.5
  },

  inputText: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.xSmall,
    width: '80%',
    borderRadius: SIZES.xLarge ,
    height: SIZES.large * 3,
    marginBottom: SIZES.xSmall * 2,
    marginRight: SIZES.xSmall * 2,
  },

  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
});

export default styles;
