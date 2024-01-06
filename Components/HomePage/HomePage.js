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
    backgroundColor: "red",
    height: "25%",
    width: "90%",
  },
});

export default styles;
