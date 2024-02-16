import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    alignItems: "center",
  },
  top: {
    height: "50%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 33,
    color: "#FEA1A1",
  },
  description: {
    width: "80%",
    height: "20%",
    // backgroundColor: "black",
    fontSize: 21,
    textAlign: "center",
    marginBottom: "10%",
  },
  inputContainer: {
    width: "90%",
    height: "30%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  labelText: {
    fontSize: 20,
    alignSelf: "flex-start",
    color: "#FEA1A1",
  },
  input: {
    backgroundColor: "#CCE7D5",
    width: "95%",
    borderRadius: 10,
    height: "25%",
  },
  createButton: {
    backgroundColor: "#FEA1A1",
    width: "85%",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default styles;
