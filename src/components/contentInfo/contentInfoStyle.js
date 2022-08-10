import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginBottom: 16
    },
    text: {
        fontSize: 20,
        color: colors.black,
        marginLeft: 15,
        fontFamily: "OpenSans-SemiBold",
    },
    textInfo: {
        fontSize: 16,
        color: colors.grey,
        marginLeft: 15,
        marginTop: 10,
        fontFamily: "OpenSans-Regular",
    }
});