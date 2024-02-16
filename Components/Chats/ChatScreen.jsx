// ChatScreen.js
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./ChatScreen";
import sendButton from "./../../assets/sendButton.png";

const dummyData = [
  { id: 1, sender: false, message: "Hi there!" },
  { id: 2, sender: true, message: "Hello! How are you?" },
  { id: 3, sender: false, message: "I'm doing well, thanks for asking." },
  { id: 4, sender: true, message: "Great to hear! What have you been up to?" },
  { id: 5, sender: false, message: "Hi there!" },
  { id: 6, sender: true, message: "Hello! How are you?" },
  { id: 7, sender: false, message: "I'm doing well, thanks for asking." },
  { id: 8, sender: true, message: "Great to hear! What have you been up to?" },
  { id: 9, sender: false, message: "Hi there!" },
  { id: 10, sender: true, message: "Hello! How are you?" },
  { id: 13, sender: false, message: "I'm doing well, thanks for asking." },
  { id: 14, sender: true, message: "Great to hear! What have you been up to?" },
  { id: 11, sender: false, message: "Hi there!" },
  { id: 22, sender: true, message: "Hello! How are you?" },
  { id: 23, sender: false, message: "I'm doing well, thanks for asking." },
  { id: 24, sender: true, message: "Great to hear! What have you been up to?" },
  // Add more messages as needed
];

function ChatScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        {dummyData.map((data) => (
          <View
            key={data.id}
            style={
              data.sender ? styles.senderContainer : styles.receiverContainer
            }
          >
            <View
              style={[
                styles.messageContainer,
                data.sender ? styles.senderMessage : styles.receiverMessage,
              ]}
            >
              <Text style={styles.messageText}>{data.message}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.textContainer}>
        <TextInput
          style={styles.textContainerText}
          placeholder="Enter Message here"
        />
        <TouchableOpacity>
          <Image style={styles.sendButtonImage} source={sendButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ChatScreen;
