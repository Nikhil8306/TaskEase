import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./ForgotPassword.js";
import authentication from "../../assets/authentication.png";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleSend = () => {
    console.log("Redirected to NewPassword");
    navigation.navigate("NewPassword");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={authentication} />
      </View>

      <View style={styles.textContent}>
        <Text style={styles.heading}>Forgot your Email password?</Text>
        <Text style={styles.description}>
          Enter your Email address to send you a message
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="JohnDoe@gmail.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.sendButtonContainer}>
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ForgotPassword;
