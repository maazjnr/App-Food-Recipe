import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../../Constants/Constants";
const styles = StyleSheet.create({
    
    cardImage: {
        width: 200,
        height: 150,
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
        flexWrap: "nowrap"
    },

    cardBtn: {
        paddingEnd: SIZES.xSmall
    }

});

export default styles;
