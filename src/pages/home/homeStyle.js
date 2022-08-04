import { StyleSheet, Dimensions } from "react-native";
import colors from "assets/colors/colors";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imageContainer: {
        borderTopWidth: 5,
        borderBottomWidth: 1, borderColor: colors.lightGrey
    },
    image: {
        width: "100%",
        height: 70,
        resizeMode: "stretch",
    },
    footerContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.grey2,
        paddingVertical: 2,
        paddingBottom: 6
    },
    text:
    {
        flex: 1,
        height: 1,
        backgroundColor: 'grey'
    },
    footerInnerText:
    {
        width: 310,
        textAlign: 'center',
        fontSize: 13,
        color: "grey"
    }
});