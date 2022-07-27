import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    container: {
     
       backgroundColor:colors.backgroundGrey,
       padding:10,
       paddingBottom:25
    },   
    title: {
        paddingLeft:7,
        fontSize: 24,
        color: colors.black
    },
    text:{
        paddingLeft:7,
        fontSize: 19,
        color: colors.green1,
        marginTop:2
    }
   
});