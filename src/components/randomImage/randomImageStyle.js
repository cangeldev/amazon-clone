import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
  container: {
    borderTopWidth: 5,
    borderTopColor: colors.lightGrey
  },
  image: {
    width: "100%",
    height: 70,
    resizeMode: "stretch",
  }
});