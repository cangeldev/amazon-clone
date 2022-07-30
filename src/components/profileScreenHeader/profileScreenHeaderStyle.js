import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        backgroundColor: colors.headerBackground,
        alignItems: "center",
        justifyContent: "space-between",
    },
    image: {
        width: 100,
        resizeMode: "contain",
        height: 45,
        marginTop: 4
    },
    headerText: {
        fontSize: 18,
        color: colors.black,
        marginBottom: 4,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginTop: 6
    },
    headerLogoContainer: {
        flexDirection: "row",
        marginRight: 15,
        width: 55,
        alignItems: "center",
        justifyContent: "space-between",
    },
}
);