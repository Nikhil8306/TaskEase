import React from "react";
import { View, Text } from "react-native";
import { LineChart, PieChart } from "react-native-gifted-charts";
import styles from "./Statistics";

function Statistics() {
  const data = [
    { value: 0.1, label: "Mon" },
    { value: 0.8, label: "Tue" },
    { value: 0.8, label: "Wed" },
    { value: 0.5, label: "Thu" },
    { value: 0.99, label: "Fri" },
    { value: 0.99, label: "Sat" },
    { value: 0.99, label: "Sun" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.graphContainer}>
        <LineChart
          height={150}
          width={335}
          data={data}
          maxValue={1}
          noOfSections={1}
          curved={true}
          hideYAxisText={true}
          color1="white"
          dataPointsColor1="white"
          xAxisColor={"white"}
          yAxisColor={"white"}
        />
      </View>

      <View style={styles.performanceContainer}>
        <View style={styles.chartContainer}>
          <PieChart radius={55} data={data} />
          <Text style={styles.chartText}>Performance</Text>
        </View>
        <View style={styles.chartContainer}>
          <PieChart radius={55} data={data} />
          <Text style={styles.chartText}>Achievements</Text>
        </View>
        <View style={styles.chartContainer}>
          <PieChart radius={55} data={data} />
          <Text style={styles.chartText}>Collaboration</Text>
        </View>
      </View>

      <Text style={styles.taskHeading}>Tasks</Text>
      <View style={styles.taskPerformanceContainerTop}>
        <View style={styles.chartContainer}>
          <PieChart radius={55} data={data} />
          <Text style={styles.chartText}>Completed</Text>
        </View>
        <View style={styles.chartContainer}>
          <PieChart radius={55} data={data} />
          <Text style={styles.chartText}>Cancelled</Text>
        </View>
        <View style={styles.chartContainer}>
          <PieChart radius={55} data={data} />
          <Text style={styles.chartText}>In progress</Text>
        </View>
      </View>

      <View style={styles.taskPerformanceContainerBottom}>
        <View style={styles.chartContainer}>
          <PieChart radius={55} data={data} />
          <Text style={styles.chartText}>In progress</Text>
        </View>
      </View>
    </View>
  );
}

export default Statistics;
