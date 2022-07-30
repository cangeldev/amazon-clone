import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        marginBottom:16
    },
    text: {
        fontSize: 20,
        color: colors.black,
        marginLeft: 15,       
        fontWeight: "bold",      
    },
    textInfo: {
        fontSize: 18,
        color: colors.grey,
        marginLeft: 15,
        marginTop: 10,
    }
});