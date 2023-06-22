import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../Constants/Constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge - 15,
  },
  favContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  favContainer2: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.xLarge,
  },

  image: {
    width: 170,
    height: 170,
  },

  yaFavText: {
    paddingVertical: SIZES.small,
    fontSize: SIZES.small + 7,
  },

  titleText: {
    fontSize: SIZES.large,
    fontWeight: "700",
    color: COLORS.white,
    position: "absolute",
    top: 100,
    padding: SIZES.small,

    shadowColor: "#b9a8a8",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15,
  },
});

export default styles;
