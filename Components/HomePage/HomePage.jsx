import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./HomePage.js";
import menuIcon from "./../../assets/menuIcon.png";
import notificationIcon from "./../../assets/notificationIcon.png";
import profileImage from "./../../assets/profileImage.png";
import { LineChart, PieChart } from "react-native-gifted-charts";

import forwardIcon from "./../../assets/forwardIcon.png";
import muscleIcon from "./../../assets/muscleIcon.png";

import homeIcon from "./../../assets/homeIcon.png";
import statistics from "./../../assets/statistics.png";
import addIcon from "./../../assets/add.png";
import communityIcon from "./../../assets/community.png";
import writingIcon from "./../../assets/writing.png";

function HomePage() {
  const data = [
    { value: 0.1, label: "Mon" },
    { value: 0.8, label: "Tue" },
    { value: 0.8, label: "Wed" },
    { value: 0.5, label: "Thu" },
    { value: 0.99, label: "Fri" },
    { value: 0.99, label: "Sat" },
    { value: 0.99, label: "Sun" },
  ];

  const taskData = [
    {
      id: 1,
      image: "",
      title: "This is title1",
      time: "Yearly",
      owner: "Individual",
      habit: "Habit",
      status: "Completed",
      color: "red",
    },
    {
      id: 2,
      image: "",
      title: "This is title2",
      time: "7-8",
      owner: "Individual",
      habit: "Pta nahi",
      status: "InProgress",
      color: "blue",
    },
    {
      id: 3,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "delayed",
      color: "green",
    },
    {
      id: 4,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
  ];
  const communityData = [
    {
      id: 1,
      image: "",
      title: "Study UI/UX",
      time: "Started on 1st",
      owner: "Individual",
      habit: "Habit",
      status: "Completed",
      color: "red",
    },
    {
      id: 2,
      image: "",
      title: "Study Web Development",
      time: "Started on 3rd",
      owner: "Individual",
      habit: "Pta nahi",
      status: "InProgress",
      color: "green",
    },
    {
      id: 3,
      image: "",
      title: "Study React Native",
      time: "Started on 10th",
      status: "delayed",
      color: "pink",
    },
    {
      id: 4,
      image: "",
      title: "This is title3",
      time: "Ye to nahi pta ",
      status: "Cancelled",
      color: "violet",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <View style={styles.menuContainer}>
          <TouchableOpacity>
            <Image style={styles.menuImage} source={menuIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.notificationContainer}>
          <View style={styles.notificationImageContainer}>
            <TouchableOpacity>
              <Image
                style={styles.notificationImage}
                source={notificationIcon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.profileImageContainer}>
            <Image style={styles.profileImage} source={profileImage} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View>
          <Text style={styles.progressText}>Overall Progress</Text>

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
        </View>
      </View>

      <View style={styles.taskContainer}>
        <View style={styles.taskContainerTop}>
          <View style={styles.tasksText}>
            <Text style={styles.yourTaskText}>Your Tasks</Text>
          </View>

          <View style={styles.forwardButtonContainer}>
            <TouchableOpacity style={styles.forwardButton}>
              <Image style={styles.forwardImage} source={forwardIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.scrollViewContainer}>
          {taskData.map((task) => (
            <View
              key={task.id}
              style={[styles.taskBox, { backgroundColor: task.color }]}
            >
              <View style={styles.taskImageContainer}>
                <Image style={styles.taskImage} source={muscleIcon} />
              </View>

              <View style={styles.taskBoxContent}>
                <Text>{task.title}</Text>
                <View>
                  <View style={styles.taskBoxContentOptions}>
                    <Text>{task.time}</Text>
                    <Text>{task.person}</Text>
                    <Text>{task.habit}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.taskStatus}>
                <Text>{task.status}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.communityContainer}>
        <View style={styles.communityContainerTop}>
          <View style={styles.communityText}>
            <Text style={styles.communityTextHeading}>Community</Text>
          </View>

          <View style={styles.forwardButtonContainer}>
            <TouchableOpacity style={styles.forwardButton}>
              <Image style={styles.forwardImage} source={forwardIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.scrollViewCommunityContainer}>
          {communityData.map((task) => (
            <View
              style={[styles.communityBox, { backgroundColor: task.color }]}
            >
              <View style={styles.communityBoxContent}>
                <View>
                  <Text>{task.title}</Text>
                </View>

                <View>
                  <Text>Photos here</Text>
                </View>

                <View>
                  <Text>{task.time}</Text>
                </View>
              </View>

              <View style={styles.communityStatus}>
                <Text>Completed</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Image style={styles.buttonImage} source={homeIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Image style={styles.buttonImage} source={statistics} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Image style={styles.buttonImage} source={addIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Image style={styles.buttonImage} source={communityIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Image style={styles.buttonImage} source={writingIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomePage;
