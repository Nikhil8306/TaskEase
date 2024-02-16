import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./Verfication.js";
import logo from "./../../assets/verification.png";
import { useNavigation } from "@react-navigation/native";
function Verification() {
  const navigation = useNavigation();
  const handleVerify = () => {
    console.log("Verified and redirected to ");
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.logo} source={logo} />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.heading}>Verification</Text>
        <Text style={styles.description}>
          Enter the OTP code sent to your email
        </Text>
        <Text style={styles.enterCode}>Enter the Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the OTP here"
          placeholderTextColor="white"
        />
        <View style={styles.sendAgain}>
          <Text>Didn't recieve the code?</Text>
          <TouchableOpacity>
            <Text>ReSend</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleVerify} style={styles.verifyButton}>
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Verification;
