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

function ProfileCreation() {
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //   getPermissionAsync();
  // }, []);
  // const getPermissionAsync = async () => {
  //   if (Platform.OS === "android") {
  //     const { status } =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync();

  //     if (status === "granted") {
  //       console.log("Permission granted move ahead");
  //     } else {
  //       alert("Sorry cannot procced without permission");
  //     }
  //   } else {
  //     console.log("Platform mai dikkat hai");
  //   }
  // };
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
        <TextInput style={styles.inputContainer} />
        <Text style={styles.labelText}>Email</Text>
        <TextInput style={styles.inputContainer} />
        <Text style={styles.labelText}>Phone Number</Text>
        <TextInput style={styles.inputContainer} />

        <View style={styles.bottomInputContainer}>
          <View style={styles.ageContainer}>
            <Text style={styles.labelText}>Age</Text>
            <TextInput style={styles.ageTextContainer} />
          </View>

          <View style={styles.occupationContainer}>
            <Text style={styles.labelText}>Occupation</Text>
            <TextInput style={styles.occupationTextContainer} />
          </View>
        </View>
      </View>
      <View style={styles.createButtonContainer}>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.buttonText}>Create Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileCreation;
