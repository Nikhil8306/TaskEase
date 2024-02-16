import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
import styles from "./SignUp.js";
import SignInImage from "../../assets/signIn.png";

import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple-logo.png";
function SignUp() {
  const navigation = useNavigation();
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = async () => {
    // navigation.navigate("ProfileCreation");

    try {
      const response = await fetch("http://192.168.1.246:4000/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userMail,
          userPassword,
        }),
      });

      if (response.status === 201) {
        console.log("User signed up successfully");
        navigation.navigate("MobileVerification");
      } else {
        const errorData = await response.json();
        console.error("Signup failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={SignInImage}></Image>
      <Text style={styles.signUpText}>Sign up</Text>

      <View style={styles.formArea}>
        <Text style={styles.labelText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="JohnDoe@gmail.com"
          value={userMail}
          onChangeText={(text) => setUserMail(text)}
        />

        <Text style={styles.labelText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={userPassword}
          onChangeText={(text) => setUserPassword(text)}
        />

        <TouchableOpacity onPress={handleSignUp} style={styles.submitButton}>
          <Text>Sign up</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.connectWith}>Or Connect with</Text>

          <View style={styles.mediaHandlesContainer}>
            <TouchableOpacity style={styles.mediaButton}>
              <Image style={styles.mediaLogo} source={google} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaButton}>
              <Image style={styles.mediaLogo} source={twitter} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaButton}>
              <Image style={styles.mediaLogo} source={facebook} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaButton}>
              <Image style={styles.mediaLogo} source={apple}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default SignUp;
