import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
import styles from "./SignIn.js";
import SignInImage from "../../assets/signIn.png";

import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple-logo.png";

function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleForgotPassword = () => {
    console.log("Redirect to the forgot password");
    navigation.navigate("ForgotPassword");
  };
  const handleSignIn = () => {
    console.log("User Directed to the main page");
    navigation.navigate("HomeScreen");
  };

  const handleSignUp = () => {
    console.log("User directed to SignUp page");
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={SignInImage}></Image>
      <Text style={styles.signInText}>Sign In</Text>

      <View style={styles.formArea}>
        <Text style={styles.labelText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="JohnDoe@gmail.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.labelText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.otherOptions}>
          <View style={styles.rememberMeContainer}>
            <BouncyCheckbox
              onPress={() => {
                setIsChecked(!isChecked);
              }}
            />
            <Text>Remember me</Text>
          </View>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text>Sign In</Text>
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
          <View style={styles.noAccount}>
            <Text>Do not have an account ? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text>sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default SignIn;
