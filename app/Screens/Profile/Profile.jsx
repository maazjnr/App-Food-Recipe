import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import styles from "./ProfileStyle";
import { COLORS } from "../../../Constants/Constants";

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

        <View style={styles.userTextContainer}>
          <Text style={styles.userName}>Programmer maaz junior</Text>

          <View style={styles.locationContainer}>
            <Ionicons name="location-sharp" size={20} color={COLORS.gray} />
            <Text style={styles.locationText}>Nigeria, Abuja F.c.t</Text>
          </View>
        </View>
      </View>

      <View style={styles.transViewCard}>
        <View style={styles.transactionCard}>
          <Text style={styles.transactionText}>Transactions</Text>
          <Text style={styles.transactionNo}>372</Text>
        </View>

        <View style={styles.reviewCard}>
          <Text style={styles.transactionText}>Reviews</Text>
          <Text style={styles.transactionNo}>290</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
