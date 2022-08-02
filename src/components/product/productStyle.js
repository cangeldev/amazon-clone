import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    text: {
        color: colors.black,
        fontSize: 20,
        marginLeft: 10,
        marginVertical:5
    },
    image: {
        width: "94%",
        alignSelf: "center",
        marginBottom:10
    }
});