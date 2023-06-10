import { SIZES, COLORS } from "../../Constants/Constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: SIZES.small,
  },

  linearStyle: {
    width: 70,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    fontSize: 15,
    color: COLORS.lightWhite,
    fontWeight: "bold",
  },

  tabContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default styles;
