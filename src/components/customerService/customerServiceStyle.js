import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 24,
        flex: 1,

    },
    headerView: {
        paddingTop: 10,
        height: 140
    },
    headerTitle: {
        marginLeft: 10,
        fontSize: 19,
        color: colors.black,
        fontFamily: "OpenSans-Bold",
    },
    headerText: {
        marginLeft: 10,
        fontSize: 14,
        color: colors.black,
        fontFamily: "OpenSans-Regular",
        marginTop: 6,
        marginBottom: 10
    },
    line: {
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,

    },
    content: {
        paddingBottom: 20,
        borderBottomWidth: 3,
        borderBottomColor: colors.lightGrey,
    },
    footerTitle: {
        marginLeft: 10,
        fontFamily: "OpenSans-Bold",
        fontSize: 16,
        color: colors.black,
        marginTop: 10,
    },
    txtInput: {
        marginHorizontal: 10,
        fontFamily: "OpenSans-Regular",
        fontSize: 14,
        color: colors.black,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: colors.silver,
        marginLeft: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    text: {
        fontSize: 15,
        color: colors.black,
        marginLeft: 20,
        fontFamily: "OpenSans-Regular",
    },
    icon: {
        position: "absolute",
        right: 25,
    },
    buton: {
        borderWidth: 1,
        borderColor: colors.silver,
        borderRadius: 3,
        marginHorizontal: 10,
        marginTop: 10,
        paddingVertical: 12,
        justifyContent: "center",
        backgroundColor: colors.fafafa,

    },
    footerContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.lightGrey,
        paddingVertical: 2,
        paddingBottom: 6,
        marginBottom: 45,
        marginTop: 10
    },
    footerText:
    {
        flex: 1,
        height: 1,
        backgroundColor: 'grey'
    },
    footerInnerText:
    {
        width: 295,
        textAlign: 'center',
        fontSize: 12,
        color: "grey",
        fontFamily: "OpenSans-Regular",
    }
});