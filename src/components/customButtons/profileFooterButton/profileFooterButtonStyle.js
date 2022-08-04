import { StyleSheet, Dimensions } from "react-native";
import colors from "assets/colors/colors";
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        width: windowWidth - 20,
        alignSelf: "center",
        marginTop: 15,
        borderRadius: 8,
        borderWidth: 0.7,
        borderColor: colors.lightGrey,        
        backgroundColor: colors.fafafa,
    },
    text: {
        fontSize: 18,
        minHeight: 55,
        textAlignVertical: "center",
        alignSelf: "center",
        color: colors.black,
        textAlign: "center",
        paddingHorizontal: 16
    }
})