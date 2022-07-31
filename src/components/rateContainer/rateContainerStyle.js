import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        alignSelf: "flex-start",
        marginLeft: 7,
        flexDirection: "row",
        alignItems: "center",
    },
    myStarStyle: {
        color: colors.btnYellow,
        backgroundColor: 'transparent',
    },
    myEmptyStarStyle: {
        color: colors.lightGrey,
    },
    count: {
        color: colors.black,
        
    }
});