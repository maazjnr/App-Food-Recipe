import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../Constants/Constants";
const styles = StyleSheet.create({

    errorText: {
        color: COLORS.primary,
        textAlign: "center",
        marginTop: SIZES.xxLarge,
        fontSize: SIZES.xxLarge - 15
    }

});

export default styles;
