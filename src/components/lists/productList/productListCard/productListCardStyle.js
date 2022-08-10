import { StyleSheet } from "react-native";
import colors from "assets/colors/colors";

export default StyleSheet.create({
    container: {
        width: 130,
        padding: 2,
        marginVertical: 8,
        marginHorizontal: 5,
        borderWidth: 3,
        borderColor: colors.greyButton,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        elevation: 6
    },
    image: {
        width: "90%",
        height: 120,
        resizeMode: "center",
        marginTop: 6
    },
    title: {
        width: "90%",
        fontSize: 13,
        color: colors.black,
        fontFamily:"OpenSans-Light",
    },
    price: {
        color: colors.orange,
        fontSize: 15,
        fontFamily:"OpenSans-Medium",
    }
});