import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import profileImage from "./../../assets/profileImage.png";
import messageIcon from "./../../assets/messageIcon.png";
import styles from "./WorkSpace.js";
import addIcon from "./../../assets/addIcon.png";

import { useNavigation, useRoute } from "@react-navigation/native";

function WorkSpace() {
  const navigation = useNavigation();
  const route = useRoute();
  const { workSpaceId, userIsAdmin } = route.params;
  const SWIPE_THRESHOLD = 130;
  const [taskData, setTaskData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [memberId, setMemberId] = useState("");
  const [role, setRole] = useState("");

  const handleAddMember = () => {
    setIsModalVisible(true);
  };

  // console.log(`The workspaceId is ${workSpaceId} and the userId is ${userId}`);

  const handleAddMemberSubmit = async () => {
    console.log("Entered email and role:", memberId, role);

    try {
      const response = await fetch(
        "http://192.168.1.246:4000/workSpace/create/member",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            memberId,
            role,
            workSpaceId,
          }),
        }
      );
      if (response.status === 201) {
        console.log("Member Added successfully");
      } else {
        const errorData = await response.json();
        console.log("Got an error:", errorData.message);
      }
    } catch (error) {
      console.error(error);
    }
    setIsModalVisible(false);
    setMemberId("");
    setRole("");
  };

  useEffect(() => {
    // Fetch tasks/members data on component mount
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          `http://192.168.1.246:4000/workSpace/members/${workSpaceId}`
        );
        const data = await response.json();
        setTaskData(data);
        console.log(taskData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [workSpaceId]);

  // ... (other code)

  const handleChat = () => {
    console.log("Chat");
  };

  const handleWorkspaceButton = (userId) => {
    // console.log("Hii");
    // console.log(userId);
    navigation.navigate("MembersTask", { userId, workSpaceId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskHeading}>
        <Text style={styles.taskHeadingText}>ToDo App 🖋️</Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <SwipeListView
          showsVerticalScrollIndicator={false}
          data={taskData}
          renderItem={(data, rowMap) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                handleWorkspaceButton(data.item.memberDetail._id);
              }}
              style={[styles.taskBox, { backgroundColor: "violet" }]}
            >
              {/* ... Your task item content */}
              <View style={styles.taskImageContainer}>
                <Image style={styles.taskImage} source={profileImage} />
              </View>
              <View style={styles.taskBoxContent}>
                <View style={styles.nameAndRole}>
                  <Text style={styles.nameText}>
                    {data.item.memberDetail.userFullName}
                  </Text>
                  <Text style={styles.roleText}>
                    {data.item.memberDetail.userOccupation}
                  </Text>
                </View>

                <View>
                  <View style={styles.taskBoxContentOptions}>
                    <View style={styles.statusText}>
                      <Text>In progress</Text>
                    </View>
                    <Text>Admin</Text>
                  </View>
                </View>
              </View>

              <View style={styles.taskStatus}>
                <TouchableOpacity onPress={handleChat}>
                  <Image source={messageIcon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.memberDetail._id.toString()}
        />
      </View>

      {userIsAdmin && (
        <View style={styles.addContainer}>
          <TouchableOpacity onPress={handleAddMember}>
            <Image source={addIcon} />
          </TouchableOpacity>
        </View>
      )}

      {/* Modal for adding a member */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.inputHeading}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={memberId}
              onChangeText={(text) => setMemberId(text)}
            />

            <TouchableOpacity
              onPress={handleAddMemberSubmit}
              style={styles.memberButton}
            >
              <Text>Add Member</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={styles.memberButton}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default WorkSpace;
