import React, { useEffect } from "react";
import { View, Image, StatusBar } from "react-native";
import Styles from "./FirstScreen.js";
import logo from "../../assets/logo.png";
import styles from "./FirstScreen.js";
import { useNavigation } from "@react-navigation/native";

function FirstScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      console.log("Delayed for 1 second");
      navigation.navigate("OnBoardingFlow");
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#F9FBE7" />
      <Image
        style={{
          width: "95%",
          height: "45%",
          marginLeft: "10%",
        }}
        source={logo}
      ></Image>
    </View>
  );
}

export default FirstScreen;
