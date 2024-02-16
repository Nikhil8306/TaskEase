import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  searchBar: {
    backgroundColor: "pink",
    width: "100%",
  },
  searchContainer: {
    // backgroundColor: "red",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
  },
  currentFiltersContainer: {
    height: "6%",
    width: "90%",
    // backgroundColor: "violet",
    marginTop: "2%",
    flexDirection: "row",
  },

  filterBox: {
    backgroundColor: "red",
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 2,
    height: "90%",
    alignContent: "flex-start",
    // minWidth: "10%",
    paddingHorizontal: 8,
  },

  taskContainer: {
    marginTop: "5%",
    width: "95%",
    height: "35%",
  },
  taskContainerTop: {
    height: "12%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tasksText: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
  },
  yourTaskText: {
    fontSize: 20,
    color: "#FDB6B1",
  },
  forwardButtonContainer: {
    width: "10%",
  },
  forwardButton: {
    height: "100%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  forwardImage: {
    objectFit: "contain",
    height: "50%",
  },
  scrollViewContainer: {
    marginTop: "3%",
    height: "90%",
    // backgroundColor: "red",
    width: "90%",
  },
  taskBox: {
    backgroundColor: "#FCC7BE",
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
    width: "55%",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-around",
    // backgroundColor: "red",
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
  heading: {
    color: "#FEA1A1",
    fontSize: 22,
  },
});

export default styles;
