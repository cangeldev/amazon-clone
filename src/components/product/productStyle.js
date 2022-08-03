import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 5,
    },
    text: {
        color: colors.black,
        fontSize: 20,
        marginLeft: 12,
        marginVertical:8,
     
    },
    image: {
        width: "94%",
        alignSelf: "center",
        marginBottom:16,
       
       
       
    }
});