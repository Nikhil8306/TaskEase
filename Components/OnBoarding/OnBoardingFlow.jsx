import React, { useState } from "react";
import { View } from "react-native";
import OnboardingScreen from "./OnBoardingScreen.jsx";
import { useNavigation } from "@react-navigation/native";

const OnboardingFlow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();

  const onSkip = () => {
    navigation.navigate("login");
  };

  const onNext = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("Directed to the Authentication page");
      navigation.navigate("SignIn");
    }
  };

  const screens = [
    {
      imageSource: require("../../assets/manOnCalendar.png"),
      title: "Manage your tasks with ease.",
      description:
        "Stay on top of your workload with our easy-to-use task management system",
    },
    {
      imageSource: require("../../assets/meetingIcon.png"),
      title: "Work together, achieve more.",
      description:
        "Join communities of people working towards similar goals. Share ideas and collaborate on tasks.",
    },
    {
      imageSource: require("../../assets/studyIcon.png"),
      title: "Express yourself and stay motivated.",
      description:
        "Our journal feature allows you to reflect on your progress, express your feelings, and track your mood.",
    },
    {
      imageSource: require("../../assets/manWithPencil.png"),
      title: "Track your tasks and improve productivity",
      description:
        "Identify the areas where you can improve your productivity and make better decisions",
    },
  ];

  return (
    <View>
      <OnboardingScreen
        imageSource={screens[currentIndex].imageSource}
        title={screens[currentIndex].title}
        description={screens[currentIndex].description}
        onNext={onNext}
        onSkip={onSkip}
      />
    </View>
  );
};

export default OnboardingFlow;
