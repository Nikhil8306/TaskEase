import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: "#F9FBE7",
    // backgroundColor: "red",
    height: "50%",
    position: "absolute",
    zIndex: 1,
    top: "25%",
    left: "5%",
    width: "80%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  modalContent: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-evenly",
  },
  giftImage: {
    height: "40%",
    objectFit: "contain",
    // backgroundColor: "red",
    width: "100%",
  },
  modalHeading: {
    fontSize: 25,
    color: "#7BC3B6",
  },
  modalDescription: {
    // backgroundColor: "red",
    width: "85%",
    alignContent: "center",
    textAlign: "center",
  },
  appreciationText: {
    width: "88%",
    color: "#FEA1A1",
    fontSize: 16,
    alignSelf: "center",
    alignContent: "center",
    marginTop: "2%",
    marginBottom: "2%",
    textAlign: "center",
  },
  shareButton: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "40%",
    height: "8%",
    // justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FEA1A1",
    borderRadius: 10,
  },
  shareImage: {
    width: "40%",
    height: "90%",
    objectFit: "contain",
  },
  shareText: {
    fontSize: 20,
    color: "#FEA1A1",
  },
});

export default styles;
