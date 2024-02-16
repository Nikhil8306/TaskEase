import { React, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./MobileVerification.js";
import logo from "../../assets/verification.png";
import { useNavigation } from "@react-navigation/native";

function MobileVerification() {
  const navigation = useNavigation();
  const [userMobileNumber, setUserMobileNumber] = useState("");
  // const handleVerify = () => {
  //   console.log("Verified and redirected to verify the otp");
  //   navigation.navigate("MobileOTPVerification");
  // };

  const handleVerify = async () => {
    console.log("Verify button clicked");
    console.log(`Sending otp to ${userMobileNumber}`);
    try {
      const response = await fetch("http://192.168.1.246:4000/verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userMobileNumber,
        }),
      });

      if (response.status === 201) {
        console.log("Otp send successfully");
        navigation.navigate("MobileOTPVerification");
      } else {
        const errorData = await response.json();
        console.error("OTP sent failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during OTP sending:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.logo} source={logo} />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.heading}>Mobile Verification</Text>
        <Text style={styles.description}>
          Enter your mobile number to recieve OTP
        </Text>
        <Text style={styles.enterCode}>Enter the Number</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Enter your number  here"
          placeholderTextColor="white"
          value={userMobileNumber}
          onChangeText={(text) => setUserMobileNumber(text)}
        />

        <TouchableOpacity onPress={handleVerify} style={styles.verifyButton}>
          <Text style={styles.verifyText}>Get the Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MobileVerification;
