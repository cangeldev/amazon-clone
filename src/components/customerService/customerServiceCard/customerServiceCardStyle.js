import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 70,
        alignItems: "center",
        marginVertical: 2,
    },
    image: {
        width: 35,
        height: 35,
        marginLeft: 15,
    },
    text: {
        fontSize: 14,
        color: colors.black,
        marginLeft: 20,
        fontFamily: "OpenSans-Regular",
    },
    icon: {
        position: "absolute",
        right: 25,
    },
});