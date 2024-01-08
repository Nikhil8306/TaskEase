import { React, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./HomePage.js";
import menuIcon from "./../../assets/menuIcon.png";
import notificationIcon from "./../../assets/notificationIcon.png";
import profileImage from "./../../assets/profileImage.png";
import { LineChart, PieChart } from "react-native-gifted-charts";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState("complete");
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
    console.log("Modal clossed");
    setIsModalVisible(false);
  };
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      image: "",
      title: "This is title1",
      time: "Yearly",
      owner: "Individual",
      habit: "Habit",
      status: "Completed",
      color: "yellow",
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
  ]);

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
    const updatedTaskData = taskData.filter((task) => task.id !== taskId);
    setTaskData(updatedTaskData);
    console.log("Modal should be visible now");
    setModalType("complete");
    setIsModalVisible(true);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTaskData = taskData.filter((task) => task.id !== taskId);
    setTaskData(updatedTaskData);
    setModalType("delete");
    setIsModalVisible(true);
  };

  const handleShowTasks = () => {
    console.log("User redirected to all tasks screen");
    navigation.navigate("Tasks");
  };

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
      {/* <Modal
        style={styles.modalWrapper}
        isVisible={isModalVisible}
        // backdropColor="transparent"
        backdropOpacity={0.1}
        onBackdropPress={() => setIsModalVisible(false)}
        animationIn={"bounceIn"}
        animationOut={"bounceOut"}
        onBackButtonPress={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={styles.modalContent}>
          <Image style={styles.giftImage} source={giftIcon} />

          <Text style={styles.modalHeading}>Congratulations</Text>

          <Text style={styles.modalDescription}>
            You have successfully completed your task,it is great step for the
            better life waiting for you.
          </Text>

          <Text style={styles.appreciationText}>
            Want to share your acheivement with others?
          </Text>

          <TouchableOpacity onPress={closeModal} style={styles.shareButton}>
            <Image style={styles.shareImage} source={shareIcon} />
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}

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
                      <Text>{data.item.person}</Text>
                      <Text>{data.item.time}</Text>
                      <Text>{data.item.habit}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.taskStatus}>
                  <Text>{data.item.status}</Text>
                </View>
                {/* </View> */}
              </View>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View
                style={[styles.rowBack, { backgroundColor: data.item.color }]}
              >
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteTask(data.item.id)}
                >
                  <Text>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.completeButton}
                  onPress={() => handleCompleteTask(data.item.id)}
                >
                  <Text>Complete</Text>
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
            // onRowOpen={(rowKey, rowMap) => handleCompleteTask(rowKey)}
            onRowOpen={() => {}}
          />
        </View>
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

        <View style={styles.scrollViewCommunityContainer}>
          <SwipeListView
            data={communityData}
            renderItem={(data, rowBack) => (
              <View
                key={data.id}
                style={
                  [styles.communityBox, { backgroundColor: data.item.color }]

                  // { backgroundColor: data.item.color },
                }
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
