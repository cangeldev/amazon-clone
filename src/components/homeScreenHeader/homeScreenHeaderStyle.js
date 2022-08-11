import { StyleSheet, Dimensions } from "react-native";
import colors from "assets/colors/colors";
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    txtInput: {
        borderWidth: 0.7,
        borderRadius: 6,
        width: windowWidth / 1.06,
        backgroundColor: colors.white,
        paddingHorizontal: 35,
        borderColor: colors.lightGrey,
        fontSize: 16,
        fontFamily:"OpenSans-Medium",
        height: 45,
    },
    iconM: {
        position: "absolute",
        alignSelf: "flex-end",
        paddingRight: 10
    },
    headerContainer: {
        position: "relative",
        justifyContent: "center",
        width: "100%",
        height: 60,
        alignItems: "center",
        marginTop: 5,
    },
    innerContainer: {
        justifyContent: "center",
    },
    
});