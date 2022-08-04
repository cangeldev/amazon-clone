import { StyleSheet } from "react-native";
import colors from "assets/colors/colors";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundGrey,
        padding: 10,
        paddingBottom: 15,
        borderBottomWidth:5,       
        borderBottomColor: colors.lightGrey
    },
    title: {
        paddingLeft: 7,
        fontSize: 22,
        color: colors.black
    },
    text: {
        paddingLeft: 7,
        fontSize: 17,
        color: colors.green1,
        marginTop: 2,
        marginBottom: -5
    }
});