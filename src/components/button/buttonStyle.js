import { StyleSheet, Dimensions } from "react-native";
import colors from "../../assets/colors/colors";
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        width: windowWidth / 1.1,
        alignSelf: "center",
        marginTop: 20,
        borderRadius: 8,
        borderWidth: 0.7,
        borderColor: colors.lightGrey,
        elevation: 4,
    },
    textB: {
        fontSize: 16,
        minHeight: 45,
        textAlignVertical: "center",
        alignSelf: "center",
        color: colors.black,
        textAlign: "center",
        paddingHorizontal: 16
    }
})