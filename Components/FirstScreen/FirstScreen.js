import { StyleSheet, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEA1A1",
    height: deviceHeight,
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: "red",
  },
});

export default styles;
