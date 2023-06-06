import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../Constants/Constants";
const styles = StyleSheet.create({

    scrollContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: SIZES.large * 2

    },
    
    cardImage: {
        width: 410,
        height: 300,
        borderRadius: SIZES.small,
    },

    textContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },

    titleText: {
        fontSize: SIZES.xSmall * 1.5,
        fontWeight: "600",
        color: COLORS.primary,
        padding: SIZES.small,
        flexWrap: "nowrap",
        textAlign: "center"
    },


});

export default styles;
