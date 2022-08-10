import { StyleSheet, Dimensions } from "react-native";
import colors from "assets/colors/colors";
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {    
        marginVertical: 5,
        backgroundColor: colors.white,    
        flexDirection: "row",
        paddingVertical: 10,
        marginHorizontal: 4,
        position: "relative",
       width:windowWidth-10,
       elevation: 5,

    },
    favoriContainer: {
        width: 25,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "white",
        elevation: 5,        
        position: "absolute",
        right: 10,
        top: 10
      
    },
    image: {
        width: 100,
        height: 120,
        resizeMode: "center",
        marginRight:10,
        marginLeft:4
    },
    price: {
        color: colors.white,
        fontSize: 14,
        backgroundColor: colors.red,
        padding: 5,
        alignSelf: "flex-start",
        marginRight:5,
        fontFamily:"OpenSans-Light",
    },

    priceContainer: {      
        flexDirection: "row",
        alignItems: "center",
        height: 30,
        marginTop: 20,
    },
    priceText: {
        color: colors.red,
        fontSize: 14,
        marginLeft:5,
        fontFamily:"OpenSans-Light",
    },
    rateContainer:{
        alignItems: "center",
        flexDirection:"row",      
        position:"absolute",
        right:-5,
        bottom:0       
    },
    title:{
        marginTop:5,
        width:250,
        fontSize:15,
        color:colors.black,
        fontFamily:"OpenSans-Light",
    },
    rate:{
        fontSize:14,
        color:colors.black,
        marginHorizontal:5,
        fontFamily:"OpenSans-Regular",
    },
    rateText:{
        fontSize:11,
        color:colors.black,       
    }
});