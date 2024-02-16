import { React, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./HomePage.js";
import menuIcon from "./../../assets/menuIcon.png";
import notificationIcon from "./../../assets/notificationIcon.png";
import profileImage from "./../../assets/profileImage.png";
import { LineChart } from "react-native-gifted-charts";
import { useNavigation, useRoute } from "@react-navigation/native";
import forwardIcon from "./../../assets/forwardIcon.png";
import muscleIcon from "./../../assets/muscleIcon.png";
import homeIcon from "./../../assets/homeIcon.png";
import statistics from "./../../assets/statistics.png";
import addIcon from "./../../assets/add.png";
import communityIcon from "./../../assets/community.png";
import writingIcon from "./../../assets/writing.png";

import { SwipeListView } from "react-native-swipe-list-view";

import CustomModal from "./CustomModel.jsx";

function HomePage() {
  const route = useRoute();
  const { userId } = route.params;

  console.log(`The user is currently on HomePage and the userId is ${userId}`);
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState("complete");
  const SWIPE_THRESHOLD = 130;

  const data = [
    { value: 0.1, label: "Mon" },
    { value: 0.8, label: "Tue" },
    { value: 0.8, label: "Wed" },
    { value: 0.5, label: "Thu" },
    { value: 0.99, label: "Fri" },
    { value: 0.99, label: "Sat" },
    { value: 0.99, label: "Sun" },
  ];

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const [taskData, setTaskData] = useState([]);

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

  const handleCompleteTask = (taskId) => {
    const updatedTaskData = taskData.filter((task) => task._id !== taskId);
    setTaskData(updatedTaskData);
    setModalType("complete");
    setIsModalVisible(true);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTaskData = taskData.filter((task) => task._id !== taskId);
    setTaskData(updatedTaskData);
    setModalType("delete");
    setIsModalVisible(true);
  };

  const handleShowTasks = () => {
    navigation.navigate("Tasks", { userId: userId });
  };

  const handleAddTask = () => {
    navigation.navigate("AddTask", { userId: userId });
  };

  const handleSwipeValueChange = (swipeData, rowMap) => {
    const { key, value } = swipeData;
    if (value >= SWIPE_THRESHOLD) {
      handleDeleteTask(key);
    } else if (value <= -SWIPE_THRESHOLD) {
      handleCompleteTask(key);
    }
  };

  const handleStatistics = () => {
    console.log("Stats button pressed");
    navigation.navigate("Statistics");
  };

  const handleShowWorkSpaces = () => {
    console.log("Showing all the workspaces");
    navigation.navigate("WorkSpaces", { userId: userId });
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          `http://192.168.1.246:4000/task/${userId}`
        );
        const data = await response.json();
        setTaskData(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [userId]);

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

      {/* working on modal from here  */}

      <CustomModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        type={modalType}
      />

      <View style={styles.taskContainer}>
        <View style={styles.taskContainerTop}>
          <View style={styles.tasksText}>
            <Text style={styles.yourTaskText}>Your Tasks</Text>
          </View>

          <View style={styles.forwardButtonContainer}>
            <TouchableOpacity
              onPress={handleShowTasks}
              style={styles.forwardButton}
            >
              <Image style={styles.forwardImage} source={forwardIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.scrollViewContainer}>
          <SwipeListView
            showsVerticalScrollIndicator={false}
            data={taskData}
            renderItem={(data, rowMap) => (
              <View
                style={[styles.taskBox, { backgroundColor: data.item.color }]}
              >
                {/* ... Your task item content */}
                <View style={styles.taskImageContainer}>
                  <Image style={styles.taskImage} source={muscleIcon} />
                </View>
                <View style={styles.taskBoxContent}>
                  <Text>{data.item.title}</Text>
                  <View>
                    <View style={styles.taskBoxContentOptions}>
                      <Text>{data.item.collaboration}</Text>
                      <Text>{data.item.startDate}</Text>
                      <Text>{data.item.duration}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.taskStatus}>
                  <Text>{data.item.status}</Text>
                </View>
              </View>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View
                style={[styles.rowBack, { backgroundColor: data.item.color }]}
              >
                <View style={styles.deleteButton}>
                  <Text style={styles.deleteText}>Delete</Text>
                </View>
                <View style={styles.completeButton}>
                  <Text style={styles.completeTexta}>Complete</Text>
                </View>
              </View>
            )}
            leftOpenValue={SWIPE_THRESHOLD}
            rightOpenValue={-SWIPE_THRESHOLD}
            onSwipeValueChange={(swipeData, key) =>
              handleSwipeValueChange(swipeData, key)
            }
            keyExtractor={(item) => item._id.toString()}
          />
        </View>
      </View>

      <View style={styles.communityContainer}>
        <View style={styles.communityContainerTop}>
          <View style={styles.communityText}>
            <Text style={styles.communityTextHeading}>Your Workspaces</Text>
          </View>

          <View style={styles.forwardButtonContainer}>
            <TouchableOpacity
              onPress={handleShowWorkSpaces}
              style={styles.forwardButton}
            >
              <Image style={styles.forwardImage} source={forwardIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.scrollViewCommunityContainer}>
          <SwipeListView
            showsVerticalScrollIndicator={false}
            data={communityData}
            renderItem={(data, rowBack) => (
              <View
                key={data.id}
                style={[
                  styles.communityBox,
                  { backgroundColor: data.item.color },
                ]}
              >
                <View style={styles.communityBoxContent}>
                  <View>
                    <Text>{data.item.title}</Text>
                  </View>

                  <View>
                    <Text>Photos here</Text>
                  </View>

                  <View>
                    <Text>{data.item.time}</Text>
                  </View>
                </View>

                <View style={styles.communityStatus}>
                  <Text>Completed</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>

      {/* Working on modal functionality from here */}

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Image style={styles.buttonImage} source={homeIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleStatistics}
          style={styles.buttonContainer}
        >
          <Image style={styles.buttonImage} source={statistics} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleAddTask}
        >
          <Image style={styles.buttonImage} source={addIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleShowWorkSpaces}
          style={styles.buttonContainer}
        >
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
