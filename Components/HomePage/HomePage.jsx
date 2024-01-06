import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./HomePage.js";
import menuIcon from "./../../assets/menuIcon.png";
import notificationIcon from "./../../assets/notificationIcon.png";
import profileImage from "./../../assets/profileImage.png";
function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <View style={styles.menuContainer}>
          <TouchableOpacity>
            <Image style={styles.menuImage} source={menuIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.notificationContainer}>
          <View style={styles.notificationImageContainer}>
            <TouchableOpacity>
              <Image
                style={styles.notificationImage}
                source={notificationIcon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.profileImageContainer}>
            <Image style={styles.profileImage} source={profileImage} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View>
          <Text>Overall Progress</Text>
        </View>
      </View>
    </View>
  );
}

export default HomePage;
