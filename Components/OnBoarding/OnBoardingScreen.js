import { StyleSheet, Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  imageSource: {
    width: "90%",
    height: "40%",
  },
  text: {
    color: "#FE999A",
    fontSize: 30,
    fontWeight: "600",
    // backgroundColor: "red",
    width: "80%",
    marginBottom: "7%",
  },
  description: {
    fontSize: 17,
    fontWeight: "300",
    width: "80%",
  },
  nextButton: {
    backgroundColor: "pink",
    width: "20%",
    height: "10%",
    justifyContent: "center",
    borderColor: "#BDBFB7",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 10,
    marginTop: "20%",
  },
  nextButtonImage: {
    width: "30%",
    height: "30%",
  },
  skipButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "15%",
    height: "4%",
    position: "absolute",
    top: "1%",
    right: "2%",
  },
  skipText: {
    fontSize: 17,
  },
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "white",
    height: "100%",
    position: "absolute",
    borderRadius: 100, // Half of the width for a perfect circle
  },
});

export default styles;
