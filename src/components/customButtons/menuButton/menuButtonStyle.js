import { StyleSheet, Dimensions } from "react-native";
import colors from "assets/colors/colors";
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        width: windowWidth - 15,
        alignSelf: "center",
        marginBottom: 15,
        borderRadius: 8,
        borderWidth: 0.7,
        borderColor: colors.lightGrey,
        backgroundColor: colors.fafafa,
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 15,
        minHeight: 50,
        textAlignVertical: "center",
        color: colors.black,
        paddingHorizontal: 16,
        fontFamily: "OpenSans-Regular",
    },
    image: {
        width: 30,
        height: 20,
    },
    icon: {
        position: "absolute",
        right: 15,
        top: 15,
    }
})