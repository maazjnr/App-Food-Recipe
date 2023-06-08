import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../Constants/Constants";
const styles = StyleSheet.create({

    scrollContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: SIZES.large * 2,

    },
    
    cardImage: {
        width: 410,
        height: 300,
        borderRadius: SIZES.small,
    },

    textContainer: {
        justifyContent: "flex-start",
        paddingHorizontal: SIZES.xxLarge - 10,
        margin: 50
    },

    titleText: {
        fontSize: SIZES.xSmall * 1.5,
        fontWeight: "600",
        color: COLORS.primary,
        padding: SIZES.small,
        flexWrap: "nowrap",
        textAlign: "center"
    },

    summaryText: {
        fontSize: SIZES.xSmall * 2,
        fontWeight: "700",
        color: COLORS.primary,
        paddingVertical: SIZES.xSmall
    },

    summaryList: {
        fontSize: SIZES.xSmall * 1.5,
        color: COLORS.gray,
        lineHeight: SIZES.xSmall * 2.5
    },

    ingredientText: {
        color: COLORS.gray,
        textAlign: "left",
        marginBottom: SIZES.xSmall
    },

    htmlVeiwContainer: {
        paddingHorizontal: SIZES.xSmall
    }

});

export default styles;
