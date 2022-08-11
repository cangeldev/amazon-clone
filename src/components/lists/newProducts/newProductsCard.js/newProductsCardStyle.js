import { StyleSheet } from "react-native";
import colors from "assets/colors/colors";

export default StyleSheet.create({
    container: {
        width: 180,
        padding: 2,
        marginBottom:10,
        marginHorizontal: 5,       
        borderRadius: 8,   
        backgroundColor: colors.white,
        elevation: 5,
        height: 220,
    },
    image: {
        width: "90%",
        height: 120,
        resizeMode: "center",
        marginTop:10,
        alignSelf: "center"
    },
    title: {
        width: "90%",
        fontSize: 14,
        color: colors.black,
        marginTop: 36,
        marginLeft:4
    },
    price: {
        color: colors.orange,
        fontSize: 14,
        marginLeft:4
    }
});