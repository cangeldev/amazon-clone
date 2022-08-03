import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        marginBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 20,
        borderBottomColor: colors.grey2,
        borderBottomWidth: 5,
    },
    text:{
        marginBottom: 10,
        backgroundColor: 'red',
    }
});