import { StyleSheet, Dimensions } from "react-native";
import colors from 'assets/colors/colors'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    amazonLogo: {
        width: windowWidth / 1.5,
        height: windowHeight / 3.5,
        resizeMode: "center",
        alignSelf: "center",
        marginTop: windowHeight / 16,
    },
    headerTitle: {
        width: windowWidth / 1.5,
        alignSelf: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: colors.black,
    },
    headerText: {
        fontSize: 17,
        marginLeft: 30,
        marginTop: 20,
        lineHeight: 30,
        color: colors.black,
        marginBottom: 15
    }
})