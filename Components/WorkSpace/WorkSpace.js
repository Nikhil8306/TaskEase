import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    alignItems: "center",
  },

  taskHeadingText: {
    fontSize: 25,
  },
  scrollViewContainer: {
    marginTop: "3%",
    // height: "85%",
    // backgroundColor: "red",
    width: "95%",
  },
  taskBox: {
    backgroundColor: "#FCC7BE",
    // backgroundColor: "red",
    height: 80,
    borderRadius: 25,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "2%",
    width: "100%",
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
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectFit: "cover",
  },

  taskBoxContent: {
    width: "60%",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-around",

    // Changing now
    flexDirection: "row",
    // backgroundColor: "red",
  },
  nameAndRole: {
    // backgroundColor: "green",
    height: "100%",
    justifyContent: "space-evenly",
    minWidth: 160,
  },
  taskBoxContentOptions: {
    width: "90%",
    justifyContent: "space-evenly",
    minWidth: 90,
    alignItems: "center",
    height: "100%",
  },
  nameText: {
    color: "white",
    fontSize: 18,
  },
  roleText: {
    fontSize: 12,
  },
  statusText: {
    backgroundColor: "#8AC0DF",
    borderRadius: 10,
    width: "90%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
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
  addContainer: {
    // backgroundColor: "red",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  modalContainer: {
    backgroundColor: "#F9FBE7",
    position: "absolute",
    top: "20%",
    left: "5%",
    borderWidth: 2,
    borderRadius: 30,
    width: "90%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    // backgroundColor: "red",
    width: "90%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "#FFA1A1",
    width: "90%",
    height: "10%",
    borderRadius: 10,
    marginTop: 10,
    minHeight: 50,
  },
  inputHeading: {
    color: "black",
    alignSelf: "flex-start",
    fontSize: 18,
  },

  memberButton: {
    marginTop: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#FEB7B2",
    width: "30%",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 30,
  },
});

export default styles;
