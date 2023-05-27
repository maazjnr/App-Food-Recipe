import { SIZES, COLORS } from "../../Constants/Constants";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    headerContainer: {
        marginTop: SIZES.xSmall * 3,
        width: "100%",
    },

    container: {
        padding: SIZES.xSmall,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: SIZES.xSmall * 2,
        width: "100%",
        justifyContent: "center",
        marginBottom: SIZES.large,
    },
    
    cardImage: {
        width: 400,
        height: 300,
        borderRadius: SIZES.small,
    },

    titleText: {
        fontSize: SIZES.xSmall * 2,
        fontWeight: "600",
        color: COLORS.primary,
        padding: SIZES.small,
    },

    cardBtn: {
        paddingEnd: SIZES.xSmall
    },

    exploreText: {
        fontSize: SIZES.xLarge,
        fontWeight: "600",
        color: COLORS.gray2,
        textAlign: "center",
    },

    categoryRecipeContainer: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    categoryRecipeBtn: {
        width: 80,
        height: 80,
        borderRadius: 80
    }

});

export default styles;