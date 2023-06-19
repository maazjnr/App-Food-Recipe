import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../Constants/Constants";

const styles = StyleSheet.create({

  container: {
    padding: SIZES.large
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
    marginTop: SIZES.small * 2,
  },

  userTextContainer: {
    marginTop: SIZES.large ,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  userName: {
    fontSize: SIZES.large + 5,
    fontWeight: "600",
    color: COLORS.primary,
  },

  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.small -5,
    justifyContent: "space-evenly",
  },

  locationText: {
    fontSize: SIZES.small * 1.5,
    fontWeight: "600",
    color: COLORS.gray2,
    marginLeft: SIZES.small
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  profileText: {
    fontSize: SIZES.large,
    fontWeight: "600",
    marginTop: SIZES.large,
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

  transViewCard: {
    backgroundColor: COLORS.primary,
    width: 350,
    height: 100,
    marginTop: SIZES.xxLarge,
    borderRadius: SIZES.small * 2 - 5,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },

  transactionCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  transactionText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontWeight: "600"
  },

  transactionNo: {
    color: COLORS.white,
    fontSize: SIZES.large * 2 - 6,
    fontWeight: "700"
  },

  reviewCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

});

export default styles;
