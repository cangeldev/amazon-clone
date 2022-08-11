import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        width: 120,
        height: 180,
        margin: 5,
        borderRadius: 10,
        overflow: "hidden",
        
    },
    image: {
        position: "absolute",
        width: 100,
        height: 100,
        alignSelf: "center",
        bottom: 5,
        resizeMode: "contain",
    },
    text: {
        fontSize: 14,
        marginTop: 10,
        marginHorizontal: 10,
        color: colors.black,
        fontFamily: "OpenSans-Regular",
        
    },
    background: {
        position: "absolute",
        width: 140,
        height: 140,
        alignSelf: "center",
        bottom: -30,
       

        borderRadius: 60,
        
    },
    

});