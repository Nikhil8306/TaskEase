import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  top: {
    height: "40%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  bottom: {
    height: "35%",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    color: "#FEA1A1",
  },
  description: {
    fontSize: 20,
  },
  enterCode: {
    color: "#FEA1A1",
    fontSize: 20,
  },
  input: {
    backgroundColor: "#FEA1A1",
    width: "80%",
    height: "15%",
    borderRadius: 10,
    fontSize: 18,
  },
  verifyButton: {
    backgroundColor: "#FEA1A1",
    width: "80%",
    height: "18%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sendAgain: {
    // backgroundColor: "red",
    flexDirection: "row",
  },
  verifyText: {
    fontSize: 20,
    color: "white",
  },
});

export default styles;
