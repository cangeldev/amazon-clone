import { StyleSheet } from "react-native";
import colors from "assets/colors/colors";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 10,
        paddingBottom: 15,
        borderBottomWidth:5,       
        borderBottomColor: colors.lightGrey
    },
    title: {
        paddingLeft: 7,
        fontSize: 19,
        color: colors.black,
        fontFamily: "OpenSans-Regular",
    },  
   
});