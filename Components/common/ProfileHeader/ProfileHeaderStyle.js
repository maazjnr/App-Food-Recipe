import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../Constants/Constants";
    const styles = StyleSheet.create({

        profileText: {
          fontSize: SIZES.large,
          fontWeight: "600",
          marginTop: SIZES.large,
        },
      
        goBackContainer: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginTop: SIZES.xLarge + 6,
          padding: SIZES.xSmall
        },

      });

export default styles;
