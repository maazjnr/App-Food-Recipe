import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./RecipesStyle";
import GetData from "../../Hook/getData";
const Recipes = () => {
  const { data } = GetData("Recipes");

  const renderTitle = (title) => {
    if (title.length > 30) {
      return title.substring(0, 20) + "...";
    }
    return title;
  };

  return (
      <ScrollView contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <TouchableOpacity key={item.id} style={styles.cardBtn}>
            <Image
              source={{ uri: `${item.image}` }}
              resizeMode="cover"
              style={styles.cardImage}
            />

            <Text numberOfLines={10} style={styles.titleText}>
              {renderTitle(item.title)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
  );
};

export default Recipes;
