import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    container: {
        width: 250,
        padding: 2,
        marginVertical: 8,
        marginHorizontal: 5,
        backgroundColor: colors.white,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: 170,
        borderRadius: 10,
        resizeMode: "center",
        marginTop: 20
    },
    title: {
        width: "90%",
        fontSize: 17,
        color: colors.black,
        marginLeft: 10,
        marginBottom: 10,
    },
    price: {
        color: colors.white,
        fontSize: 15,
        backgroundColor: "red",
        alignSelf: "flex-start",
        padding: 5,
        marginLeft: 10,
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
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        justifyContent: "space-between",
    },
    rateContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 5,
        alignContent: "center"


    },
    rateText: {
        marginLeft: 4,
        fontSize: 10,
        color: colors.black,
        marginTop: 2
    },
    rate: {
        paddingLeft: 6,
        fontSize: 15,
        color: colors.black
    }
});