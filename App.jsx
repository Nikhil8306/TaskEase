import React from "react";
import { View, SafeAreaView, StatusBar, Text } from "react-native";
import FirstScreen from "./Components/FirstScreen/FirstScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingFlow from "./Components/OnBoarding/OnBoardingFlow.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import ForgotPassword from "./Components/SignIn/ForgotPassword.jsx";
import NewPassword from "./Components/SignIn/NewPassword.jsx";
import Verification from "./Components/SignIn/Verification.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import MobileVerification from "./Components/SignUp/MobileVerification.jsx";
import MobileOTPVerification from "./Components/SignUp/MobileOTPVerification.jsx";
import ProfileCreation from "./Components/ProfileCreation/ProfileCreation.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="FirstScreen">
          <Stack.Screen
            options={{
              title: "",
              headerShown: false,
            }}
            name="FirstScreen"
            component={FirstScreen}
          />
          <Stack.Screen
            options={{
              title: "",
              headerShown: false,
            }}
            name="OnBoardingFlow"
            component={OnBoardingFlow}
          />
          <Stack.Screen
            options={{
              title: "",
              headerShown: false,
            }}
            name="SignIn"
            component={SignIn}
          />
          <Stack.Screen
            options={{
              title: "Forgot Password",
              headerTitleAlign: "center",
              headerBackground: () => (
                <View style={{ backgroundColor: "#F9FBE7", flex: 1 }} />
              ),
            }}
            name="ForgotPassword"
            component={ForgotPassword}
          />
          <Stack.Screen
            options={{
              title: "New Password",
              headerTitleAlign: "center",
              headerBackground: () => (
                <View style={{ backgroundColor: "#F9FBE7", flex: 1 }} />
              ),
            }}
            name="NewPassword"
            component={NewPassword}
          />
          <Stack.Screen
            options={{
              title: "Verification",
              headerTitleAlign: "center",
              headerBackground: () => (
                <View style={{ backgroundColor: "#F9FBE7", flex: 1 }} />
              ),
            }}
            name="Verification"
            component={Verification}
          />
          <Stack.Screen
            options={{
              headerTitleAlign: "center",
              headerShown: false,
            }}
            name="SignUp"
            component={SignUp}
          />
          <Stack.Screen
            options={{
              title: "Verification",
              headerTitleAlign: "center",
              headerBackground: () => (
                <View style={{ backgroundColor: "#F9FBE7", flex: 1 }} />
              ),
            }}
            name="MobileVerification"
            component={MobileVerification}
          />
          <Stack.Screen
            options={{
              title: "Verification",
              headerTitleAlign: "center",
              headerBackground: () => (
                <View style={{ backgroundColor: "#F9FBE7", flex: 1 }} />
              ),
            }}
            name="MobileOTPVerification"
            component={MobileOTPVerification}
          />
          <Stack.Screen
            options={{
              title: "Profile Creation",
              headerTitleAlign: "center",
              headerBackground: () => (
                <View style={{ backgroundColor: "#F9FBE7", flex: 1 }} />
              ),
            }}
            name="ProfileCreation"
            component={ProfileCreation}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="HomePage"
            component={HomePage}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
