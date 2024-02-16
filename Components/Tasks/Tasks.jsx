import React, { useState, useEffect, useMemo } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import SearchBar from "react-native-dynamic-search-bar";
import { SwipeListView } from "react-native-swipe-list-view";
import { format } from "date-fns";

import muscleIcon from "./../../assets/muscleIcon.png";
import styles from "./Tasks.js";

function Tasks() {
  const [searchText, setSearchText] = useState("");
  const [taskData, setTaskData] = useState([]);
  const route = useRoute();
  const { userId } = route.params;
  const SWIPE_THRESHOLD = 130;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          `http://192.168.1.246:4000/task/${userId}`
        );
        const data = await response.json();
        // Frontend - Example sorting based on status
        const sortedTasks = data.sort((a, b) => {
          const statusOrder = {
            inprogress: 1,
            delayed: 2,
            completed: 3,
          };

          // Compare tasks based on status priority
          const statusComparison =
            statusOrder[a.status] - statusOrder[b.status];

          // If tasks have different statuses, return the comparison result
          if (statusComparison !== 0) {
            return statusComparison;
          }

          // Additional sorting by other criteria (e.g., completion date)
          // Add your additional sorting logic here if needed

          return 0; // Default order if statuses are the same
        });
        setTaskData(sortedTasks);

        // setTaskData(sortedTasks);

        // setTaskData(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [userId]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  // const handleCompleteTask = async(taskId) => {
  //   await fetch(`http://192.168.1.246:4000/completeTask/${taskId}`, {
  //     method: "PUT",
  //   });
  //   setTaskData((prevData) => prevData.filter((task) => task._id !== taskId));
  // };
  const handleCompleteTask = async (taskId) => {
    try {
      // Send PUT request to mark the task as completed
      const response = await fetch(
        `http://192.168.1.246:4000/updateTask/${taskId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "completed", // Set the new status here
            userId,
          }),
        }
      );

      if (response.status === 200) {
        // Update the local state only if the server update is successful
        setTaskData((prevData) =>
          prevData.filter((task) => task._id !== taskId)
        );
      } else {
        console.log(
          "Failed to complete task. Server returned:",
          response.status
        );
        // Handle the failure, show an error message, or take appropriate action
      }
    } catch (error) {
      console.error("Error completing task:", error);
      // Handle the error, show an error message, or take appropriate action
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      // Send DELETE request to delete the task
      const response = await fetch(
        `http://192.168.1.246:4000/deleteTask/${taskId}`,
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "deleted", // Set the new status here
            userId,
          }),
        }
      );

      if (response.status === 200) {
        // Update the local state only if the server deletion is successful
        setTaskData((prevData) =>
          prevData.filter((task) => task._id !== taskId)
        );
      } else {
        console.log("Failed to delete task. Server returned:", response.status);
        // Handle the failure, show an error message, or take appropriate action
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      // Handle the error, show an error message, or take appropriate action
    }
  };

  // const handleDeleteTask = async(taskId) => {
  //   await fetch(`http://192.168.1.246:4000/deleteTask/${taskId}`, {
  //     method: "DELETE",
  //   });
  //   setTaskData((prevData) => prevData.filter((task) => task._id !== taskId));
  // };

  const handleSwipeValueChange = (swipeData, rowMap) => {
    const { key, value } = swipeData;
    if (value >= SWIPE_THRESHOLD) {
      handleDeleteTask(key);
    } else if (value <= -SWIPE_THRESHOLD) {
      handleCompleteTask(key);
    }
  };

  const navigation = useNavigation();
  const handleTaskButton = () => {
    navigation.navigate("TaskScreen");
  };

  // Memoize the filtered data
  const filteredData = useMemo(() => {
    const searchQuery = searchText.toLowerCase();
    if (!searchQuery) {
      return taskData;
    } else {
      return taskData.filter(
        (item) => item.title && item.title.toLowerCase().includes(searchQuery)
      );
    }
  }, [taskData, searchText]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          style={styles.searchBar}
          placeholder="Search here"
          onChangeText={handleSearch}
        />
      </View>

      <View style={styles.scrollViewContainer}>
        <SwipeListView
          showsVerticalScrollIndicator={false}
          data={filteredData}
          renderItem={(data) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={handleTaskButton}
              style={[styles.taskBox, { backgroundColor: data.item.color }]}
            >
              <View style={styles.taskImageContainer}>
                <Image style={styles.taskImage} source={muscleIcon} />
              </View>
              <View style={styles.taskBoxContent}>
                <Text>{data.item.title}</Text>
                <View>
                  <View style={styles.taskBoxContentOptions}>
                    <Text>{data.item.collaboration}</Text>
                    <Text>{format(data.item.startDate, "yyyy-MM-dd")}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.taskStatus}>
                <Text>{data.item.status}</Text>
              </View>
            </TouchableOpacity>
          )}
          renderHiddenItem={(data) => (
            <View
              style={[styles.rowBack, { backgroundColor: data.item.color }]}
            >
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteTask(data.item._id)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.completeButton}
                onPress={() => handleCompleteTask(data.item._id)}
              >
                <Text style={styles.completeText}>Complete</Text>
              </TouchableOpacity>
            </View>
          )}
          leftOpenValue={SWIPE_THRESHOLD}
          rightOpenValue={-SWIPE_THRESHOLD}
          onSwipeValueChange={handleSwipeValueChange}
          keyExtractor={(item) => item._id.toString()}
        />
      </View>
    </View>
  );
}

export default Tasks;
