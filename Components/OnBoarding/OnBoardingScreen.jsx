// OnboardingScreen.js

import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./OnBoardingScreen.js";

const OnboardingScreen = ({
  imageSource,
  title,
  description,
  onNext,
  onSkip,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imageSource} source={imageSource} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.nextButton} onPress={onNext}>
        <Image
          style={styles.nextButtonImage}
          source={require("../../assets/forwardButtonIcon.png")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
        <Text style={styles.skipText}>Skip</Text>
        <Image
          style={styles.nextButtonImage}
          source={require("../../assets/forwardButtonIcon.png")}
        ></Image>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
