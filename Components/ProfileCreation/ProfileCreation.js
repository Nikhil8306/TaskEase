import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    alignItems: "center",
  },
  photoContainer: {
    // backgroundColor: "red",
    height: "20%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  photoWrapper: {
    backgroundColor: "#FEA1A1",
    height: "70%",
    width: "30%",
    borderRadius: 100,
  },
  insertPhotoText: {
    color: "#FEA1A1",
    fontSize: 20,
  },
  inputWrapper: {
    // backgroundColor: "blue",
    height: "50%",
    width: "90%",
  },
  inputContainer: {
    backgroundColor: "#CCE7D5",
    height: "13%",
    width: "95%",
    borderRadius: 10,
    marginTop: "2%",
  },
  bottomInputContainer: {
    width: "95%",
    height: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ageContainer: {
    width: "45%",
    height: "40%",
    justifyContent: "space-between",
  },
  occupationContainer: {
    width: "45%",
    height: "40%",
    // flexDirection: "row",
    justifyContent: "space-between",
  },
  ageTextContainer: {
    backgroundColor: "#CCE7D5",
    width: "100%",
    height: "60%",
    borderRadius: 10,
  },
  occupationTextContainer: {
    backgroundColor: "#CCE7D5",
    width: "100%",
    height: "60%",
    borderRadius: 10,
  },
  labelText: {
    color: "#FEA1A1",
    fontSize: 18,
  },
  createButtonContainer: {
    backgroundColor: "red",
    height: "8%",
    marginTop: "10%",
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#E59191",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  userImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 100,
  },
  createButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
