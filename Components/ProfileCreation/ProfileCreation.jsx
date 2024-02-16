import { React, useEffect, useState } from "react";
import {
  View,
  Text,
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import styles from "./ProfileCreation.js";
import { useNavigation } from "@react-navigation/native";

function ProfileCreation() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [userFullName, setUserFullName] = useState("");
  const [userMobileNumber, setUserMobileNumber] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userOccupation, setUserOccupation] = useState("");

  const [userId, setUserId] = useState();

  const handleCreateButton = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.246:4000/profileCreation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userFullName,
            userMail,
            userMobileNumber,
            userAge,
            userOccupation,
          }),
        }
      );
      if (response.status === 201) {
        console.log("User data saved successfully");
        const responseData = await response.json();
        console.log(`The userId of the created user is ${responseData.userId}`);
        setUserId(responseData.userId);
        // console.log(userId);
        navigation.navigate("HomePage", { userId });
      } else {
        const errorData = await response.json();
        console.log("Profile verification failed");
      }
    } catch (error) {
      console.error("Got error in the profile creation", error);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    console.log("Image button pressed");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.photoWrapper}>
          {image && <Image source={{ uri: image }} style={styles.userImage} />}
        </TouchableOpacity>
        <Text style={styles.insertPhotoText}>Insert Photo</Text>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.labelText}>Full Name</Text>
        <TextInput
          value={userFullName}
          onChangeText={(text) => {
            setUserFullName(text);
          }}
          style={styles.inputContainer}
        />
        <Text style={styles.labelText}>Email</Text>
        <TextInput
          value={userMail}
          onChangeText={(text) => {
            setUserMail(text);
          }}
          style={styles.inputContainer}
        />
        <Text style={styles.labelText}>Phone Number</Text>
        <TextInput
          value={userMobileNumber}
          onChangeText={(text) => {
            setUserMobileNumber(text);
          }}
          style={styles.inputContainer}
        />

        <View style={styles.bottomInputContainer}>
          <View style={styles.ageContainer}>
            <Text style={styles.labelText}>Age</Text>
            <TextInput
              value={userAge}
              onChangeText={(text) => {
                setUserAge(text);
              }}
              style={styles.ageTextContainer}
            />
          </View>

          <View style={styles.occupationContainer}>
            <Text style={styles.labelText}>Occupation</Text>
            <TextInput
              value={userOccupation}
              onChangeText={(text) => {
                setUserOccupation(text);
              }}
              style={styles.occupationTextContainer}
            />
          </View>
        </View>
      </View>
      <View style={styles.createButtonContainer}>
        <TouchableOpacity
          onPress={handleCreateButton}
          style={styles.createButton}
        >
          <Text style={styles.buttonText}>Create Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileCreation;
