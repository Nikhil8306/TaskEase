import { React, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import CheckBox from "react-native-check-box";

import styles from "./Tasks.js";
import SearchBar from "react-native-dynamic-search-bar";
import filterIcon from "./../../assets/filterIcon.png";
import muscleIcon from "./../../assets/muscleIcon.png";
import { SwipeListView } from "react-native-swipe-list-view";

import Modal from "react-native-modal";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function Tasks() {
  const [isChecked, setIsChecked] = useState(false);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [filters, setFilters] = useState([
    "All",
    "Completed",
    "In progress",
    "Cancelled",
  ]); // Replace with your actual filters
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
    {
      id: 5,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 6,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 7,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 8,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 9,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 10,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 11,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 12,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 13,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 14,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 15,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 16,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 17,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 18,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 19,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 20,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 21,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
    {
      id: 22,
      image: "",
      title: "This is title3",
      time: "Daily",
      owner: "Group",
      habit: "Habit",
      status: "Cancelled",
      color: "pink",
    },
  ]);

  const handleFilterButton = () => {
    console.log("Filter button pressed");
    setIsFilterModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          style={styles.searchBar}
          placeholder="Search here"
          onChangeText={(text) => console.log(text)}
        />
        <TouchableOpacity onPress={handleFilterButton}>
          <Image source={filterIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.currentFiltersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filters.map((filter, index) => (
            <View key={index} style={styles.filterBox}>
              <TouchableOpacity>
                <Text>{filter}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* <Modal style={styles.modalWrapper} isVisible={true}>
        <View style={styles.modalContainer}>
          <Text>Filter</Text>

          <View style={styles.achievementsContainer}>
            <BouncyCheckbox
              onPress={() => {
                setIsChecked(!isChecked);
              }}
            />
          </View>
        </View>
      </Modal> */}

      <Modal
        onBackButtonPress={() => {
          setIsFilterModalVisible(false);
        }}
        animationOut={"bounceOut"}
        animationIn={"bounceIn"}
        style={styles.modalWrapper}
        isVisible={isFilterModalVisible}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.heading}>Filter</Text>

          {/* Achievements Section */}
          <View style={styles.filterSection}>
            <Text>Achievements</Text>
            <View style={styles.checkboxContainer}>
              <BouncyCheckbox
                onPress={() => {}}
                text="Completed"
                isChecked={isChecked}
              />
              <BouncyCheckbox
                onPress={() => {}}
                text="In Progress"
                isChecked={isChecked}
              />
              <BouncyCheckbox
                onPress={() => {}}
                text="Cancelled"
                isChecked={isChecked}
              />
              <BouncyCheckbox
                onPress={() => {}}
                text="Delayed"
                isChecked={isChecked}
              />
            </View>
          </View>

          {/* Duration Section */}
          <View style={styles.filterSection}>
            <Text>Duration</Text>
            <View style={styles.checkboxContainer}>
              <BouncyCheckbox
                onPress={() => {}}
                text="Daily"
                isChecked={isChecked}
              />
              <BouncyCheckbox
                onPress={() => {}}
                text="Monthly"
                isChecked={isChecked}
              />
              <BouncyCheckbox
                onPress={() => {}}
                text="Yearly"
                isChecked={isChecked}
              />
            </View>
          </View>

          {/* Collaboration Section */}
          <View style={styles.filterSection}>
            <Text>Collaboration</Text>
            <View style={styles.checkboxContainer}>
              <BouncyCheckbox
                onPress={() => {}}
                text="Team"
                isChecked={isChecked}
              />
              <BouncyCheckbox
                onPress={() => {}}
                text="Individual"
                isChecked={isChecked}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log("Modal disabled");
              setIsFilterModalVisible(false);
            }}
            style={styles.applyButton}
          >
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </Modal>

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
  );
}

export default Tasks;
