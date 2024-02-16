import { StyleSheet, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    flex: 0.4,
  },
  labelText: {
    // backgroundColor: "red",
    fontSize: 20,
    marginBottom: "2%",
    color: "#FE9F9F",
    alignSelf: "flex-start",
  },
  textContent: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 0.3,
    // backgroundColor: "blue",
    width: "95%",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#CCE7D5",
    width: "100%",
    height: "20%",
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 20,
  },
  heading: {
    fontSize: 28,
    color: "#FFA1A1",
    fontWeight: "800",
  },
  description: {
    fontSize: 18,
    width: "70%",
    textAlign: "center",
  },
  sendButton: {
    backgroundColor: "#FFA1A1",
    width: "100%",
    height: "40%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sendText: {
    color: "white",
    fontSize: 20,
  },
  sendButtonContainer: {
    flex: 0.2,
    width: "95%",
    justifyContent: "center",
  },
});

export default styles;
