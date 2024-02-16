import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Modal,
} from "react-native";
import styles from "./TaskScreen.js";
import { PieChart } from "react-native-gifted-charts";
import ToggleSwitch from "toggle-switch-react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";

function TaskScreen() {
  const graphData = [
    { value: 80, label: "Mon" },
    { value: 20, label: "Mon" },
  ];

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const collaborationData = [{ label: "Individual", value: "1" }];
  const durationData = [
    { label: "Weekly", value: "1" },
    { label: "Daily", value: "2" },
    { label: "Monthly", value: "3" },
  ];

  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33"];
  const [isFocus, setIsFocus] = useState(false);

  const [reminder, setReminder] = useState(false);
  const [duration, setDuration] = useState();
  const [purpose, setPurpose] = useState(false);
  const [collaboration, setCollaboration] = useState();
  const [selectedColor, setSelectedColor] = useState();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [showDatePicker, setshowDatePickerModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerType, setDatePickerType] = useState("start"); // Added state to determine if it's for start or end date

  const handleColorPress = (color) => {
    setSelectedColor(color);
  };

  const handleStartDate = () => {
    setDatePickerType("start");

    setshowDatePickerModal(true);
  };
  const handleEndDate = () => {
    setDatePickerType("end");

    setshowDatePickerModal(true);
  };
  const handleDateChange = (event, selectedDate) => {
    if (event.type === "set") {
      // Handle selected date
      const formattedDate = selectedDate.toLocaleDateString();
      if (datePickerType === "start") {
        setStartDate(formattedDate);
      } else if (datePickerType === "end") {
        setEndDate(formattedDate);
      }
      setSelectedDate(selectedDate);
      // setDatePickerVisible(false);
      setshowDatePickerModal(false);
    } else if (event.type === "dismissed") {
      // Handle modal dismissal
      setshowDatePickerModal(false);
      // setDatePickerVisible(false);
    }
    // setshowDatePickerModal(false);
  };
  const handleDatePickerDismiss = () => {
    setshowDatePickerModal(false);
  };

  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : 0}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.heading}>Study UX Design</Text>
          <View style={styles.properties}>
            <Text style={styles.property}>In progress</Text>
            <Text style={styles.property}>Team</Text>
            <Text style={styles.property}>Monthly</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.chart}>
              <PieChart
                labelsPosition="mid"
                showValuesAsLabels={true}
                showText={true}
                radius={40}
                data={graphData}
              />
            </View>
            <View style={styles.chart}>
              <PieChart
                labelsPosition="mid"
                showValuesAsLabels={true}
                showText={true}
                radius={40}
                data={graphData}
              />
            </View>
            <View style={styles.chart}>
              <PieChart
                labelsPosition="mid"
                showValuesAsLabels={true}
                showText={true}
                radius={40}
                data={graphData}
              />
            </View>
          </View>
        </View>

        <Modal
          transparent={true}
          visible={showDatePicker}
          animationType="slide"
        >
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
              onPress={() => setshowDatePickerModal(false)}
              onDismiss={handleDatePickerDismiss}
            />
            <View
              style={{
                backgroundColor: "#FFF",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                padding: 20,
              }}
            >
              <DateTimePicker
                value={selectedDate} // Pass your initial date here
                mode="date"
                display="spinner"
                onChange={handleDateChange}
                onDismiss={handleDatePickerDismiss}
              />
            </View>
          </View>
        </Modal>

        <View style={styles.bottomContainer}>
          <Text style={styles.titleHeading}>Title</Text>
          <TextInput style={styles.inputContainer} placeholder="Title here" />
          <Text style={styles.titleHeading}>Description</Text>
          <TextInput
            style={styles.inputContainer}
            placeholder="Description here"
          />

          <View style={styles.shortContainers}>
            <View style={styles.firstContainer}>
              <View style={styles.leftContainer}>
                <Text style={styles.containerTitle}>Purpose</Text>

                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  search
                  maxHeight={230}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? "Select item" : "..."}
                  searchPlaceholder="Search..."
                  value={purpose}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setPurpose(item.value);
                    setIsFocus(false);
                  }}
                  renderLeftIcon={() => (
                    <AntDesign
                      style={styles.icon}
                      color={isFocus ? "blue" : "black"}
                      name="Safety"
                      size={20}
                    />
                  )}
                />
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.containerTitle}>Collaboration</Text>
                {/* <TextInput
                  style={styles.shortInputContainer}
                  placeholder="Collaboration"
                /> */}
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={collaborationData}
                  search
                  maxHeight={230}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? "Select item" : "..."}
                  searchPlaceholder="Search..."
                  value={collaboration}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setCollaboration(item.value);
                    setIsFocus(false);
                  }}
                  renderLeftIcon={() => (
                    <AntDesign
                      style={styles.icon}
                      color={isFocus ? "blue" : "black"}
                      name="Safety"
                      size={20}
                    />
                  )}
                />
              </View>
            </View>
            <View style={styles.firstContainer}>
              <View style={styles.leftContainer}>
                <Text style={styles.containerTitle}>Duration</Text>

                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={durationData}
                  search
                  maxHeight={230}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? "Select item" : "..."}
                  searchPlaceholder="Search..."
                  value={duration}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setDuration(item.value);
                    setIsFocus(false);
                  }}
                  renderLeftIcon={() => (
                    <AntDesign
                      style={styles.icon}
                      color={isFocus ? "blue" : "black"}
                      name="Safety"
                      size={20}
                    />
                  )}
                />
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.containerTitle}>Color</Text>

                <View style={styles.colorSelectionContainer}>
                  {colors.map((color, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.colorButton,
                        {
                          backgroundColor: color,
                          borderColor:
                            selectedColor === color ? "#000" : "#FFF",
                        },
                      ]}
                      onPress={() => handleColorPress(color)}
                    />
                  ))}
                </View>
              </View>
            </View>
            <View style={styles.firstContainer}>
              <View style={styles.leftContainer}>
                <Text style={styles.containerTitle}>From</Text>

                <TouchableOpacity
                  onPress={handleStartDate}
                  style={styles.shortInputContainer}
                >
                  <Text>{startDate}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.containerTitle}>To</Text>

                <TouchableOpacity
                  onPress={handleEndDate}
                  style={styles.shortInputContainer}
                >
                  <Text>{endDate}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.reminderContainer}>
            <Text style={styles.reminderTitle}>Reminder</Text>
            <ToggleSwitch
              isOn={reminder}
              onColor="#FEA1A1"
              offColor="black"
              size="large"
              onToggle={() => setReminder(!reminder)}
            />
          </View>

          <View style={styles.taskOptions}>
            <TouchableOpacity style={styles.deleteButton}>
              <Text>DELETE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delayButton}>
              <Text>DELAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default TaskScreen;
