import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import styles from "./ProfileStyle";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.goBackContainer}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text style={styles.profileText}>Profile</Text>
        <Feather name="share" size={24} color="black" />
      </View>

      <View style={styles.imageContainer}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={require("../../../Asset/mz.jpg")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
