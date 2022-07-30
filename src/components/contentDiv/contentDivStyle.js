import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    text: {
        fontSize: 18,
        color: colors.black,
        marginLeft: 15,
        marginTop: 15,
        fontWeight: "bold",
    },
    container: {
        borderColor: colors.lightGrey,
        borderTopWidth: 5,
        paddingBottom: 10,
    },
    navigateText: {
        fontSize: 16,
        color: colors.green1,
        position: "absolute",
        right: 12,
        top: 15,
        
    }
});