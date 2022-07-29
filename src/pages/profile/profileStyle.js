import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
    },
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
        width: 65,
        alignItems: "center",
        justifyContent: "space-between",
    },
    profileInnerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 15,
    },
    nameContainer: {
        flexDirection: "row",
    },
    name: {
        fontSize: 25,
        color: colors.black,
        marginLeft: 15,
    },
    profileImageContainer: {
        backgroundColor: colors.lightGrey,
        width: 55,
        height: 55,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
    },
    profileContainer: {
        paddingBottom: 20,
        borderBottomWidth: 7,
        borderColor: colors.lightGrey,
    },
});