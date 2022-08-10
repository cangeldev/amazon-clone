import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
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
        marginLeft: 13,
        fontFamily: "OpenSans-Light",
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

        borderBottomWidth: 5,
        borderColor: colors.lightGrey,
    },
});