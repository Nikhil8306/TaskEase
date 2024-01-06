import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  navbarContainer: {
    // backgroundColor: "red",
    height: "5%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  menuImage: {
    objectFit: "contain",
    // backgroundColor: "blue",
    height: "80%",
  },
  notificationContainer: {
    // backgroundColor: "pink",
    width: "30%",
    height: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  notificationImageContainer: {
    // backgroundColor: "blue",
    height: "100%",
    width: "30%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationImage: {
    objectFit: "contain",
    height: "85%",
  },
  profileImageContainer: {
    width: "30%",
    height: "100%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    objectFit: "contain",
    borderRadius: 100,
    height: "85%",
    width: "100%",
  },

  progressContainer: {
    // backgroundColor: "red",
    height: "30%",
    width: "95%",
    justifyContent: "space-evenly",
    alignItems: "centre",
  },
  progressText: {
    color: "#FDB6B1",
    fontSize: 23,
  },
  graphContainer: {
    backgroundColor: "#FDB6B1",
    height: "90%",
    marginTop: "1.5%",
    justifyContent: "center",
    borderRadius: 15,
    width: "100%",
  },
  taskContainer: {
    marginTop: "5%",
    // backgroundColor: "red",
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
    // backgroundColor: "blue",
    height: "100%",
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
    // backgroundColor: "red",
    width: "50%",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-around",
  },
  taskBoxContentOptions: {
    // backgroundColor: "pink",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },

  // Community Container ka js yahan se hai
  communityContainer: {
    height: "25%",
    width: "95%",
    // backgroundColor: "blue",
  },
  communityContainerTop: {
    height: "12%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollViewCommunityContainer: {
    marginTop: "3%",
    height: "100%",
  },
  communityBox: {
    backgroundColor: "#FCC7BE",
    backgroundColor: "#9FBCC5",
    height: 80,
    borderRadius: 25,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "2%",
  },

  communityTextHeading: {
    fontSize: 20,
    color: "#FDB6B1",
  },
  bottomContainer: {
    backgroundColor: "#F9FBE7",
    height: "8%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonContainer: {
    // backgroundColor: "black",
    height: "80%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImage: {
    objectFit: "contain",
    height: "80%",
  },
});

export default styles;
