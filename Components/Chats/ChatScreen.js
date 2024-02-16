// styles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    alignItems: "center",
  },
  wrapper: {
    height: "100%",
    width: "100%",
    // backgroundColor: "red",
  },
  receiverContainer: {
    flexDirection: "row",
    justifyContent: "flex-start", // Adjusted for left alignment
    marginVertical: 5,
  },
  senderContainer: {
    flexDirection: "row",
    justifyContent: "flex-end", // Adjusted for right alignment
    marginVertical: 5,
  },
  messageContainer: {
    maxWidth: 200, // Adjusted for a slightly wider container
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20, // Rounded corners
  },
  receiverMessage: {
    backgroundColor: "#E9E9EA", // Background color for receiver messages
    backgroundColor: "black", // Background color for receiver messages
    fontSize: 18,
    borderRadius: 20,
    borderBottomLeftRadius: 0, // Removing the bottom left radius for the pointed effect
  },
  senderMessage: {
    backgroundColor: "#007AFF", // Background color for sender messages
    color: "white",
    fontSize: 16,
    borderRadius: 20,
    borderBottomRightRadius: 0, // Removing the bottom right radius for the pointed effect
  },
  messageText: {
    fontSize: 14, // Adjusted font size
    color: "white", // Text color for sender messages
  },
  textContainer: {
    flexDirection: "row",
    width: "100%",
    bottom: 2,
    height: 52,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
  },
  textContainerText: {
    fontSize: 18,
    paddingLeft: 20,
  },
  sendButtonImage: {
    width: 30,
    height: 30,
  },
});

export default styles;
