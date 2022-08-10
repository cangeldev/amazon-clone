import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    bagContainer: {
        marginTop: 15,
        minHeight: 140,
        flexDirection: "row",
      
    },
    innerBagContainer: {
        justifyContent: "center",
        marginLeft: 10,
    },
    animation: {
        width: 120,
    },
    text: {
        fontSize: 18,
        color: colors.black,
        fontFamily: "OpenSans-Light",
    },
    navigateText: {
        marginVertical: 5,
        fontSize: 18,
        color: colors.green1,
        fontFamily: "OpenSans-Regular",
    }


});