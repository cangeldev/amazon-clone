import { StyleSheet, Dimensions } from "react-native";
import colors from "assets/colors/colors";
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        width: windowWidth / 2.3,
        marginTop: 10,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        backgroundColor: colors.fafafa,
        height: 50,
        justifyContent: "center",
        marginBottom: 3
    },
    text: {
        fontSize: 17,
        minHeight: 45,
        textAlignVertical: "center",
        alignSelf: "center",
        color: colors.black,
        textAlign: "center",
        paddingHorizontal: 16
    },
    profileButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 6,
        marginBottom: 10
    }
})