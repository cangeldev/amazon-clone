import { StyleSheet, Dimensions } from "react-native";
import colors from "assets/colors/colors";
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        width: (windowWidth / 2) - 20,
        marginTop: 20,
        borderRadius: 8,
        borderWidth: 0.7,
        borderColor: colors.lightGrey,
        elevation: 1,
        marginLeft: 13,
        backgroundColor: colors.fafafa,
    },
    text: {
        fontSize: 18,
        minHeight: 55,
        textAlignVertical: "center",      
        color: colors.black,
        textAlign: "center",
    }
})