import { StyleSheet, Dimensions } from "react-native";
import colors from "../../assets/colors/colors";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    adressContainer: {
        backgroundColor: "#96DEDA",
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",

    },
    adressTxt: {
        fontSize: 17,
        color: colors.black,
        marginLeft: 6,
    }

});