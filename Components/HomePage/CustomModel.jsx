// import { React, useState } from "react";
// import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
// import styles from "./CustomModel.js";

// import giftIcon from "./../../assets/giftImage.png";
// import sadIcon from "./../../assets/sadIcon.png";

// import shareIcon from "./../../assets/shareIcon.png";

// import Modal from "react-native-modal";

// function CustomModal({ isVisible, closeModal, type }) {
//   const getContent = () => {
//     if (type === "complete") {
//       return {
//         heading: "Congratulations",
//         description:
//           "You have successfully completed your task. It is a great step for a better life waiting for you.",
//         buttonText: "Share",
//         Image: giftIcon,
//       };
//     } else if (type === "delete") {
//       return {
//         heading: "Task Deleted",
//         description: "The task has been successfully deleted.",
//         buttonText: "OK",
//         Image: sadIcon,
//       };
//     }
//   };

//   const { heading, description, buttonText, Image } = getContent();

//   return (
//     <Modal
//       style={styles.modalWrapper}
//       isVisible={isVisible}
//       backdropOpacity={0.1}
//     >
//       <View style={styles.modalContent}>
//         <Image style={styles.giftImage} source={Image} />
//         <Text style={styles.modalHeading}>{heading}</Text>
//         <Text style={styles.modalDescription}>{description}</Text>
//         {type === "complete" && (
//           <Text style={styles.appreciationText}>
//             Want to share your achievement with others?
//           </Text>
//         )}
//         <TouchableOpacity onPress={closeModal} style={styles.shareButton}>
//           <Image style={styles.shareImage} source={shareIcon} />
//           <Text style={styles.shareText}>{buttonText}</Text>
//         </TouchableOpacity>
//       </View>
//     </Modal>
//   );
// }

// export default CustomModal;

import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./CustomModel.js";

import giftIcon from "./../../assets/giftImage.png";
import sadIcon from "./../../assets/sadIcon.png";
import shareIcon from "./../../assets/shareIcon.png";
import Modal from "react-native-modal";

function CustomModal({ isVisible, closeModal, type }) {
  const getContent = () => {
    if (type === "complete") {
      return {
        heading: "Congratulations",
        description:
          "You have successfully completed your task. It is a great step for a better life waiting for you.",
        buttonText: "Share",
        Photo: giftIcon,
        shareImage: shareIcon,
      };
    } else if (type === "delete") {
      return {
        heading: "Task Deleted",
        description: "The task has been successfully deleted.",
        buttonText: "OK",
        Photo: sadIcon,
      };
    }
  };

  const { heading, description, buttonText, Photo, shareImage } = getContent();

  return (
    <Modal
      style={styles.modalWrapper}
      isVisible={isVisible}
      backdropOpacity={0.1}
    >
      <View style={styles.modalContent}>
        <Image style={styles.giftImage} source={Photo} />
        <Text style={styles.modalHeading}>{heading}</Text>
        <Text style={styles.modalDescription}>{description}</Text>
        {type === "complete" && (
          <Text style={styles.appreciationText}>
            Want to share your achievement with others?
          </Text>
        )}
        <TouchableOpacity onPress={closeModal} style={styles.shareButton}>
          <Image style={styles.shareImage} source={shareImage} />
          <Text style={styles.shareText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default CustomModal;
