import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    alignItems: "center",
  },
  scrollViewContainer: {
    marginTop: "3%",
    // height: "85%",
    // backgroundColor: "red",
    width: "95%",
  },
  addButton: {
    // backgroundColor: "red",
    height: "5%",
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 20,
    right: 10,
  },
  taskBox: {
    backgroundColor: "#FCC7BE",
    backgroundColor: "black",
    height: 80,
    borderRadius: 25,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "2%",
  },
  taskImageContainer: {
    backgroundColor: "white",
    width: "10%",
    height: "50%",
    borderRadius: 100,
    marginLeft: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  taskImage: {
    width: "80%",
    height: "80%",
    objectFit: "contain",
  },

  taskBoxContent: {
    width: "50%",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-around",
  },
  taskBoxContentOptions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  rowBack: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: "90%",
    borderColor: "red",
    borderRadius: 25,
  },
  deleteButton: {
    backgroundColor: "#C03B3B",
    alignSelf: "flex-start",
    height: "100%",
    width: "30%",
    borderTopStartRadius: 25,
    borderBottomStartRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  completeButton: {
    backgroundColor: "#69C03E",
    alignSelf: "flex-end",
    height: "100%",
    width: "30%",
    borderTopEndRadius: 25,
    borderBottomEndRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "white",
    fontSize: 19,
  },
  completeText: {
    color: "white",
    fontSize: 19,
  },
});

export default styles;
