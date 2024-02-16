import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SwipeListView } from "react-native-swipe-list-view";
import muscleIcon from "./../../assets/muscleIcon.png";
import addIcon from "./../../assets/addIcon.png";
import styles from "./Workspaces";
import { format } from "date-fns";

function WorkSpaces() {
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;

  console.log(
    `The user is on WorkSpaces Currently and the userId is ${userId}`
  );

  const [workspaces, setWorkspaces] = useState([]);
  const SWIPE_THRESHOLD = 130;

  const handleAddWorkSpace = () => {
    console.log("Navigating to add workspace to screen");
    navigation.navigate("AddWorkSpace", { userId });
  };

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await fetch(
          `http://192.168.1.246:4000/workSpaces/${userId}`
        );
        const data = await response.json();

        if (
          (data.workspacesCreatedByUser &&
            data.workspacesCreatedByUser.length > 0) ||
          (data.workspacesAssignedToUser &&
            data.workspacesAssignedToUser.some(Boolean))
        ) {
          // Combine the arrays
          const combinedWorkspaces = [
            ...(data.workspacesCreatedByUser || []),
            ...(data.workspacesAssignedToUser || []).filter(Boolean),
          ];

          // Set unique workspaces and apply sorting
          const uniqueWorkspaces = Array.from(
            new Set(combinedWorkspaces.map((w) => w._id))
          ).map((id) => combinedWorkspaces.find((w) => w._id === id));

          const sortedWorkspaces = uniqueWorkspaces.sort((a, b) => {
            // Define the order based on status priority
            const statusOrder = {
              delayed: 1,
              inprogress: 2,
              completed: 3,
            };

            return statusOrder[a.status] - statusOrder[b.status];
          });

          setWorkspaces(sortedWorkspaces);
        }
      } catch (error) {
        console.error("Error fetching workspaces:", error);
      }
    };

    fetchWorkspaces();
  }, [userId]);

  console.log(typeof userId);

  const isAdmin = (workspace) => workspace.workSpaceAdmin === userId;

  const handleWorkspaceButton = (workSpace) => {
    const workSpaceId = workSpace._id;
    console.log("The workSpace id is ", workSpaceId);
    const userIsAdmin = isAdmin(workSpace);
    console.log(userIsAdmin);
    navigation.navigate("WorkSpace", { workSpaceId, userIsAdmin });
  };

  const handleDeleteWorkspace = async (workSpaceId) => {
    try {
      const response = await fetch(
        `http://192.168.1.246:4000/workSpaces/delete/${workSpaceId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log(`Deleted workspace with ID: ${workSpaceId}`);
        // Update state without fetching if deletion is successful
        setWorkspaces((prevWorkspaces) =>
          prevWorkspaces.filter((workspace) => workspace._id !== workSpaceId)
        );
      } else {
        console.error(`Error deleting workspace with ID: ${workSpaceId}`);
      }
    } catch (error) {
      console.error("Error deleting workspace:", error);
    }
  };

  const handleCompleteWorkspace = async (workSpaceId) => {
    try {
      const response = await fetch(
        `http://192.168.1.246:4000/workSpaces/status/${workSpaceId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "completed" }),
        }
      );

      if (response.ok) {
        console.log(`Completed workspace with ID: ${workSpaceId}`);
        // Update state to remove the completed workspace
        setWorkspaces((prevWorkspaces) =>
          prevWorkspaces.filter((workspace) => workspace._id !== workSpaceId)
        );
      } else {
        console.error(`Error completing workspace with ID: ${workSpaceId}`);
      }
    } catch (error) {
      console.error("Error completing workspace:", error);
    }
  };

  const renderWorkspaceItem = (data) => (
    <TouchableWithoutFeedback onPress={() => handleWorkspaceButton(data.item)}>
      <View style={[styles.taskBox, { backgroundColor: data.item.color }]}>
        <View style={styles.taskImageContainer}>
          <Image style={styles.taskImage} source={muscleIcon} />
        </View>
        <View style={styles.taskBoxContent}>
          <Text>{data.item.title}</Text>
          <View style={styles.taskBoxContentOptions}>
            <Text>Team</Text>
            <Text>{format(new Date(data.item.startDate), "yyyy-MM-dd")}</Text>
          </View>
        </View>
        <View style={styles.taskStatus}>
          <Text>{data.item.status}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={[styles.rowBack, { backgroundColor: data.item.color }]}>
      {isAdmin(data.item) && (
        <>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteWorkspace(data.item._id)}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => handleCompleteWorkspace(data.item._id)}
          >
            <Text style={styles.completeText}>Complete</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.scrollViewContainer}>
        <SwipeListView
          data={workspaces}
          renderItem={renderWorkspaceItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={SWIPE_THRESHOLD}
          rightOpenValue={-SWIPE_THRESHOLD}
          keyExtractor={(item) => item._id.toString()}
        />
      </View>
      <View style={styles.addButton}>
        <TouchableOpacity onPress={handleAddWorkSpace}>
          <Image source={addIcon}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// export default WorkSpaces;

export default WorkSpaces;
