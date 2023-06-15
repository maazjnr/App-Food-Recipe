import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../Constants/Constants";
const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small * 3,
    padding: SIZES.large,
  },

  profileContainer: {
    borderColor: COLORS.gray,
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    alignItems: "center",
    marginTop: SIZES.small * 2
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  profileText: {
    fontSize: SIZES.large,
    fontWeight: "600",
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  goBackContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default styles;
