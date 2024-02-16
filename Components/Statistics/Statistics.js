import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FBE7",
    height: "100%",
    alignItems: "center",
  },
  graphContainer: {
    backgroundColor: "#FDB6B1",
    height: "30%",
    marginTop: "1.5%",
    justifyContent: "center",
    borderRadius: 15,
    width: "98%",
  },
  performanceContainer: {
    flexDirection: "row",
    width: "98%",
    height: "30%",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
  },
  chartContainer: {
    // backgroundColor: "red",
    alignItems: "center",
  },
  chartText: {
    fontSize: 16,
  },
  taskHeading: {
    fontSize: 18,
    alignSelf: "flex-start",
    color: "#FDB6B1",
    fontWeight: "900",
  },
  taskPerformanceContainerTop: {
    flexDirection: "row",
    // backgroundColor: "red",
    width: "98%",
    justifyContent: "space-between",
  },
});

export default styles;
