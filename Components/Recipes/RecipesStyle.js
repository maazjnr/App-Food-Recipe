import { SIZES, COLORS } from "../../Constants/Constants";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    
    cardImage: {
        width: 400,
        height: 250,
        borderRadius: SIZES.small,
    },

    titleText: {
        fontSize: SIZES.xSmall * 1.5,
        fontWeight: "600",
        color: COLORS.primary,
        padding: SIZES.small,
        flexWrap: "nowrap",
        textAlign: "center"
    },

    cardBtn: {
        paddingEnd: SIZES.xSmall
    }

});

export default styles