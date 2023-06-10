import { View, Text, ActivityIndicator, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { GetAmericaData } from "../../Hook/getData";
import { useNavigation } from "expo-router";
import styles from "./UsaStyles";

const Usa = () => {

  const navigation = useNavigation();

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
  
  const { data, isLoading, error } = GetAmericaData("recipes");

  return (

     <ScrollView contentContainerStyle={styles.scrollContainer}>
     {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : error ? (
        <Text>There's an error trying to fetchData</Text>
      ) : (
        data?.map((item) => (
          <TouchableOpacity onPress={() => handleCardPress(item)} style={styles.foodBtn} key={item.id} >
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

export default Usa;