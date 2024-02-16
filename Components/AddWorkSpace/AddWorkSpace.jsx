import { React, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import ToggleSwitch from "toggle-switch-react-native";
import AddImage from "./../../assets/add.png";
import styles from "./styles.js";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/native";

function AddWorkSpace() {
  const route = useRoute();
  const { userId } = route.params;
  console.log(`The user is on addWorkSpace and the userId is ${userId}`);
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33"];
  const [isFocus, setIsFocus] = useState(false);
  const [purpose, setPurpose] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState();
  const [reminder, setReminder] = useState(false);
  const [duration, setDuration] = useState();
  const [collaboration, setCollaboration] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [showDatePicker, setshowDatePickerModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerType, setDatePickerType] = useState("start");

  const navigation = useNavigation();
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
      const formattedDate = selectedDate.toLocaleDateString();
      if (datePickerType === "start") {
        setStartDate(formattedDate);
      } else if (datePickerType === "end") {
        setEndDate(formattedDate);
      }
      setSelectedDate(selectedDate);
      setshowDatePickerModal(false);
    } else if (event.type === "dismissed") {
      setshowDatePickerModal(false);
    }
  };
  const handleDatePickerDismiss = () => {
    setshowDatePickerModal(false);
  };

  //   };
  const purposeData = [
    { label: "Fitness", value: "Fitness" },
    { label: "Study", value: "Study" },
  ];
  const durationData = [
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
    { label: "Daily", value: "Daily" },
  ];
  const collaborationData = [{ label: "Team", value: "Team" }];

  const handleAddTask = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.246:4000/workSpace/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            purpose,
            collaboration,
            duration,
            selectedColor,
            startDate,
            endDate,
            userId,
          }),
        }
      );
      if (response.status === 201) {
        console.log("Task Added successfully");
        navigation.navigate("WorkSpaces", { userId: userId });
      } else {
        const errorData = await response.json();
        console.log("Got an error:", errorData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.addIconContainer}>
        <Text style={styles.iconTitle}>Icon</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Image />
        </TouchableOpacity>
      </View>

      <Modal transparent={true} visible={showDatePicker} animationType="slide">
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

      <View style={styles.inputWrapper}>
        <View style={styles.textContainer}>
          <Text style={styles.titleHeading}>Title</Text>
          <TextInput
            value={title}
            onChangeText={(text) => {
              setTitle(text);
            }}
            style={styles.inputContainer}
            placeholder="Title"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleHeading}>Description</Text>
          <TextInput
            value={description}
            onChangeText={(text) => {
              setDescription(text);
            }}
            style={styles.inputContainer}
            placeholder="Description"
          />
        </View>
        <View style={styles.shortContainer}>
          <View style={styles.shortContainerTop}>
            <View style={styles.leftShortContainer}>
              <Text style={styles.titleHeading}>Purpose</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={purposeData}
                search
                maxHeight={200}
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

            <View style={styles.rightShortContainer}>
              <Text style={styles.titleHeading}>Collaboration</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={collaborationData}
                search
                maxHeight={200}
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
          <View style={styles.shortContainerTop}>
            <View style={styles.leftShortContainer}>
              <Text style={styles.titleHeading}>Duration</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={durationData}
                search
                maxHeight={200}
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

            <View style={styles.rightShortContainer}>
              <Text style={styles.titleHeading}>Color</Text>

              <View style={styles.colorSelectionContainer}>
                {colors.map((color, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.colorButton,
                      {
                        backgroundColor: color,
                        borderColor: selectedColor === color ? "#000" : "#FFF",
                      },
                    ]}
                    onPress={() => handleColorPress(color)}
                  />
                ))}
              </View>
            </View>
          </View>
          <View style={styles.shortContainerTop}>
            <View style={styles.leftShortContainer}>
              <Text style={styles.titleHeading}>From</Text>

              <TouchableOpacity
                onPress={handleStartDate}
                style={styles.shortInputContainer}
              >
                <Text>{startDate}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rightShortContainer}>
              <Text style={styles.titleHeading}>To</Text>
              <TouchableOpacity
                onPress={handleEndDate}
                style={styles.shortInputContainer}
              >
                <Text>{endDate}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.reminderContainer}>
        <Text style={styles.reminderTitle}>Reminder</Text>
        <ToggleSwitch
          isOn={reminder}
          onColor="#FEA1A1"
          offColor="black"
          //   size prop kaam nahi kr raha tha isliye ye use mai liya hai
          style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
          onToggle={() => setReminder(!reminder)}
        />
      </View>
      {/* <View style={styles.reminderContainer}>
        <Text style={styles.reminderTitle}>Add to Habits</Text>
        <ToggleSwitch
          isOn={reminder}
          onColor="#FEA1A1"
          offColor="black"
          //   size prop was not working so using this method
          style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
          onToggle={() => setReminder(!reminder)}
        />
      </View> */}

      {/* {collaboration === "Team" && (
        <View style={styles.reminderContainer}>
          <Text style={styles.reminderTitle}>Add Members</Text>
          <TouchableOpacity>
            <Image source={AddImage} />
          </TouchableOpacity>
        </View>
      )} */}
      <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddWorkSpace;
