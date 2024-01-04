import { StyleSheet, Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "#FE9F9F",
  },
  logo: {
    width: "30%",
    height: "14%",
  },
  signInText: {
    color: "#FE9F9F",
    fontSize: 30,
    fontWeight: "700",
  },
  formArea: {
    // backgroundColor: "red",
    width: "88%",
    height: "40%",
  },
  labelText: {
    fontSize: 20,
    marginBottom: "4%",
    color: "#FE9F9F",
  },
  input: {
    backgroundColor: "#CCE7D5",
    width: "100%",
    height: "14%",
    borderRadius: 10,
    borderWidth: 2,
  },
  rememberMeContainer: {
    width: "34%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  otherOptions: {
    marginTop: "6%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mediaHandlesContainer: {
    marginTop: "10%",
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "35%",
  },
  mediaButton: {
    width: "15%",
    height: "60%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  mediaLogo: {
    width: "80%",
    height: "100%",
    borderRadius: 100,
  },
  submitButton: {
    marginTop: "10%",
    backgroundColor: "#FE9F9F",
    width: "100%",
    height: "15%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  noAccount: {
    marginTop: "6%",
    flexDirection: "row",
    alignSelf: "center",
  },
  connectWith: {
    // backgroundColor: "red",
    alignSelf: "center",
    marginTop: "3%",
    fontSize: 20,
  },
});

export default styles;
