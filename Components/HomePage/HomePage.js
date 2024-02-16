import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  navbarContainer: {
    height: "5%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  menuImage: {
    objectFit: "contain",
    height: "80%",
  },
  notificationContainer: {
    width: "30%",
    height: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  notificationImageContainer: {
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
    height: "80%",
    // backgroundColor: "red",Jz
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

  communityContainer: {
    height: "25%",
    width: "95%",
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
    borderColor: "black",
    // borderWidth: 5,
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
    height: "80%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImage: {
    objectFit: "contain",
    height: "80%",
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
  rowBack: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: "90%",
    borderColor: "red",
    borderRadius: 25,
  },
  deleteButton: {
    backgroundColor: "#C03D3D",
    alignSelf: "flex-start",
    height: "100%",
    width: "30%",
    borderTopStartRadius: 25,
    borderBottomStartRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "white",
    fontSize: 18,
  },
  completeText: {
    fontSize: 18,
    color: "white",
  },
});

export default styles;
