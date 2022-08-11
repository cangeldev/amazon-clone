import { StyleSheet, Dimensions } from "react-native";
import colors from "assets/colors/colors";
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        width: 170,
        padding: 2,
        marginHorizontal: 4,
        backgroundColor: colors.white,
        marginTop: 5,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
        borderRadius: 10,
        marginBottom: 5,
        elevation: 5,
    },
    image: {
        width: "60%",
        height: 100,
        borderRadius: 10,
        resizeMode: "center",
        alignSelf: "center",
    },
    title: {
        width: "90%",
        fontSize: 15,
        color: colors.black,
        marginLeft: 10,
        marginBottom: 4,
        fontFamily: "OpenSans-Light",

    },
    price: {
        color: colors.red,
        fontSize: 14,
        alignSelf: "flex-start",
        marginLeft: 10,
        fontFamily: "OpenSans-SemiBold",
    },
    favoriContainer: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "white",
        elevation: 5,
        alignSelf: "flex-end",
        marginRight: 8,
        marginTop: 8
    },
    footerContainer: {
        alignItems: "center",
        paddingVertical: 10,
        justifyContent: "space-between",
    },
    button: {
        width: "90%",
        marginTop: 10,
        borderRadius: 8,
        borderWidth: 0.7,
        borderColor: colors.lightGrey,
        elevation: 1,
        backgroundColor: colors.white,
    },
    text: {
        fontSize: 15,
        minHeight: 50,
        textAlignVertical: "center",
        color: colors.black,
        textAlign: "center",
        fontFamily: "OpenSans-Regular",
    }

});