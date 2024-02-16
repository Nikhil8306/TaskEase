import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    alignItems: "center",
    // justifyContent: "space-around",
  },
  topContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    minHeight: 170,
    height: "28%",
  },
  heading: {
    color: "#FEA1A1",
    fontSize: 24,
  },
  properties: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
  property: {
    backgroundColor: "pink",
    borderRadius: 10,
    width: "31%",
    textAlign: "center",
  },
  progressContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottomContainer: {
    alignItems: "center",
    width: "90%",
    height: "72%",
  },
  titleHeading: {
    color: "#FDB7B3",
    fontSize: 20,
    alignSelf: "flex-start",
  },
  inputContainer: {
    backgroundColor: "#CCE7D5",
    width: "95%",
    borderRadius: 10,
    height: "9%",
    minHeight: 40,
  },
  shortContainers: {
    width: "100%",
    height: "45%",
    minHeight: 250,
  },
  firstContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "28%",
  },
  leftContainer: {
    width: "45%",
    justifyContent: "space-around",
  },
  rightContainer: {
    width: "45%",
    justifyContent: "space-around",
  },
  containerTitle: {
    fontSize: 20,
    color: "#FEA1A1",
  },
  shortInputContainer: {
    backgroundColor: "#CCE7D5",
    width: "85%",
    height: "50%",
    borderRadius: 10,
    alignSelf: "center",
  },
  reminderContainer: {
    width: "100%",
    height: "8%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  taskOptions: {
    marginTop: "5%",
    width: "100%",
    height: "10%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteButton: {
    backgroundColor: "#FEA1A1",
    height: "100%",
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  delayButton: {
    backgroundColor: "#F9FBE7",
    borderColor: "#FCD0C6",
    borderRadius: 12,
    borderWidth: 2,
    height: "100%",
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  reminderTitle: {
    fontSize: 18,
    color: "#FEA1A1",
  },
  placeholderStyle: {
    backgroundColor: "#CCE7D5",
  },
  inputSearchStyle: {
    backgroundColor: "#CCE7D5",
  },
  iconStyle: {
    backgroundColor: "#CCE7D5",
  },
  selectedTextStyle: {
    // backgroundColor: "#CCE7D5",
    // borderRadius: 10,
    backgroundColor: "#CCE7D5",
    width: "85%",
    height: "70%",
    borderRadius: 10,
    alignSelf: "center",
  },
  colorSelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    marginHorizontal: 5,
  },
});

export default styles;
