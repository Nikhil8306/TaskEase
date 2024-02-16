import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import styles from "./Tasks.js";
import muscleIcon from "./../../assets/muscleIcon.png";
import { SwipeListView } from "react-native-swipe-list-view";

import { useNavigation } from "@react-navigation/native";

// import addIcon from "./../../assets/addIcon.png";
import addIcon from "./../../assets/addIcon.png";

function Tasks() {
  const [taskData, setTaskData] = useState();
  const route = useRoute();
  const { userId, workSpaceId } = route.params;
  const SWIPE_THRESHOLD = 130;
  const [completedTasks, setCompletedTasks] = useState([]);

  const navigation = useNavigation();
  console.log(userId);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          `http://192.168.1.246:4000/workSpace/members/${workSpaceId}/${userId}`
        );
        const data = await response.json();
        console.log(data);
        setTaskData(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [userId]);

  const handleCompleteTask = async (taskId) => {
    try {
      const completedTask = taskData.find((task) => task._id === taskId);

      // Remove the completed task from the taskData list
      const updatedTaskData = taskData.filter((task) => task._id !== taskId);
      setTaskData(updatedTaskData);

      // Update task status to "Completed" in the backend
      await fetch(`http://192.168.1.246:4000/updateTask/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "Completed",
        }),
      });

      // Add the completed task to the completedTasks list
      setCompletedTasks((prevCompletedTasks) => [
        ...prevCompletedTasks,
        completedTask,
      ]);
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  const handleRefreshTasks = () => {
    // Fetch tasks including completed tasks
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          `http://192.168.1.246:4000/workSpace/members/${workSpaceId}/${userId}`
        );
        const data = await response.json();
        setTaskData(data);

        // Add completed tasks back to the taskData list
        setTaskData((prevTaskData) => [
          ...prevTaskData,
          ...completedTasks.reverse(),
        ]);
        setCompletedTasks([]); // Clear completedTasks list
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  };

  const handleDeleteTask = async (taskId) => {
    try {
      // Delete task from the backend
      await fetch(`http://192.168.1.246:4000/deleteTask/${taskId}`, {
        method: "DELETE",
      });

      // Remove the task from the array in the frontend
      const updatedTaskData = taskData.filter((task) => task._id !== taskId);
      setTaskData(updatedTaskData);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  const handleSwipeValueChange = (swipeData, rowMap) => {
    const { key, value } = swipeData;
    if (value >= SWIPE_THRESHOLD) {
      handleDeleteTask(key);
    } else if (value <= -SWIPE_THRESHOLD) {
      handleCompleteTask(key);
    }
  };

  const handleAddTask = () => {
    console.log("Handle add task");
    navigation.navigate("AddMemberTask", { userId, workSpaceId });
  };

  return (
    <View style={styles.container}>
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
                <Text style={styles.completeText}>Complete</Text>
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

      <View style={styles.addButton}>
        <TouchableOpacity onPress={handleAddTask}>
          <Image source={addIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Tasks;
