import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderBottomColor: colors.grey2,
        borderBottomWidth: 5,
    },
    text: {
        color: colors.black,
        fontSize: 20,
        marginLeft: 12,
        marginVertical:8,
        fontFamily:"OpenSans-SemiBold",
     
    },
    image: {
        width: "94%",
        alignSelf: "center",
        marginBottom:16,
       
       
       
    }
});