import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./HealthyCardStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const HealthyCard = ({ item, handleCardPress}) => {
  const router = useRouter();

  const renderTitle = (title) => {
    if (title.length > 15) {
      return title.substring(0, 20) + "...";
    }
    return title;
  };

  return (
    <View>
      <TouchableOpacity onPress={handleCardPress} style={styles.cardBtn}>
        <Image
          source={{ uri: `${item.image}` }}
          resizeMode="cover"
          style={styles.cardImage}
        />

        <View style={styles.textContainer}>
          <Text numberOfLines={10} style={styles.titleText}>
            {renderTitle(item.title)}
          </Text>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HealthyCard;
