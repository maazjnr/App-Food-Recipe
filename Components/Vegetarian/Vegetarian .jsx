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
import styles from "../Vegetarian/VegetarianStyle";
import { GetVegetarianData } from "../../Hook/getData";
import { useNavigation } from "expo-router";

const Vegetarian = () => {
  const navigation = useNavigation();

  const { error, data, isLoading } = GetVegetarianData("recipes");

  const handleCardPress = (item) => {
    navigation.navigate("RecipeDetails", {
      title: item.title,
      img: item.image,
      ingredientItem: item.extendedIngredients,
      summary: item.summary,
      instructionItem: item.instructions,
      diet: item.diets,
    });
  };

  const renderTitle = (title) => {
    if (title.length > 15) {
      return title.substring(0, 20) + "...";
    }
    return title;
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <TouchableOpacity
            onPress={() => handleCardPress(item)}
            key={item.id}
            style={styles.cardBtn}
          >
            <Image
              source={{ uri: `${item.image}` }}
              resizeMode="cover"
              style={styles.cardImage}
            />

            <View style={styles.textContainer}>
              <Text numberOfLines={10} style={styles.titleText}>
                {" "}
                {renderTitle(item.title)}{" "}
              </Text>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Vegetarian;
