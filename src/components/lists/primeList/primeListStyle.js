import { StyleSheet } from "react-native";
import colors from "assets/colors/colors";

export default StyleSheet.create({
    container: {        
        paddingBottom: 15,
        borderBottomWidth:5,       
        borderBottomColor: colors.lightGrey,        
    },
    title: {
        paddingLeft: 7,
        fontSize: 20,
        color: colors.black,
        fontFamily:"OpenSans-SemiBold",
    },
    text: {
        paddingLeft: 7,
        fontSize: 16,
        color: colors.green1,
        marginTop:5,
        marginBottom:-5,
        fontFamily:"OpenSans-Light",
    }
});