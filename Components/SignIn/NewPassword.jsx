import { React } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./NewPassword";
import newPassword from "./../../assets/newPassword.png";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();
  const handleCreateButton = () => {
    console.log("Redirected to verification screen");
    navigation.navigate("Verification");
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={newPassword} />
        <Text style={styles.heading}>Create New Password</Text>
        <Text style={styles.description}>
          Enter your password to send you a message
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.labelText}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity
        onPress={handleCreateButton}
        style={styles.createButton}
      >
        <Text>Create</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NewPassword;
