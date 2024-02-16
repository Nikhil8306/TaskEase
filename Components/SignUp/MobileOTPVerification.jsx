import { React, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./MobileOTPVerification.js";
import logo from "../../assets/verification.png";
import { useNavigation } from "@react-navigation/native";

function MobileOTPVerification() {
  const [OTP, setOTP] = useState("");
  const navigation = useNavigation();

  const handleVerify = async () => {
    navigation.navigate("ProfileCreation");
    console.log(`The entered OTP is ${OTP}`);
    try {
      const response = await fetch(
        "http://192.168.1.246:4000/OtpVerification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            OTP,
          }),
        }
      );
      if (response.status === 201) {
        navigation.navigate("ProfileCreation");
        console.log("Otp verified successfully");
      } else {
        const errorData = await response.json();
        console.error("OTP verification failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.logo} source={logo} />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.heading}>Verification</Text>
        <Text style={styles.description}>
          Enter the OTP code sent to your number
        </Text>
        <Text style={styles.enterCode}>Enter the Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the OTP here"
          placeholderTextColor="white"
          value={OTP}
          onChangeText={(text) => {
            setOTP(text);
          }}
        />
        <View style={styles.sendAgain}>
          <Text>Didn't receive the code?</Text>
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

export default MobileOTPVerification;
