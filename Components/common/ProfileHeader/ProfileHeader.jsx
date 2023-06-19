import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./ProfileHeaderStyle";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const ProfileHeader = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
      navigation.goBack();
    };

  return (
    <View style={styles.goBackContainer}>
      <Ionicons onPress={handleGoBack} name="arrow-back-outline" size={24} color="black" />
      <Text style={styles.profileText}>Profile</Text>
      <Feather name="share" size={24} color="black" />
    </View>
  );
};

export default ProfileHeader;
