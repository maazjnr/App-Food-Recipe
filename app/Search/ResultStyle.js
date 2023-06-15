import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../Constants/Constants";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: SIZES.xxLarge,
  },

  foodBtn: {
    marginBottom: SIZES.xSmall,
  },

  cardImage: {
    width: 370,
    height: 300,
    borderRadius: SIZES.small,
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  titleText: {
    fontSize: SIZES.xSmall * 1.5,
    fontWeight: "600",
    color: COLORS.primary,
    padding: SIZES.small,
    flexWrap: "nowrap",
    textAlign: "center",
  },

  cardBtn: {
    paddingEnd: SIZES.xSmall,
  },
});

export default styles;
