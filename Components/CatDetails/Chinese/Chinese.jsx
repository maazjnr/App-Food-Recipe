import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import styles from "./ChineseStyle";
import { GetThaiData } from "../../../Hook/getData";
import { useNavigation } from "expo-router";

const Chinese = () => {

  const navigation = useNavigation();

  const {data, error, isLoading} = GetThaiData("recipes");

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
  

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : error ? (
        <Text>There's an error trying to fetchData</Text>
      ) : (
        data?.map((item) => (
          <TouchableOpacity onPress={() => handleCardPress(item)} style={styles.foodBtn} key={item.id}>
            <Text style={styles.titleText}> {item.title} </Text>
            <Image
              source={{ uri: `${item.image}` }}
              resizeMode="cover"
              style={styles.cardImage}
            />
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

export default Chinese;
