import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HealthyCard from "../common/card/Healthy/HealthyCard";
import GetHealthyData from "../../Hook/getHealthyData";
import GetData from "../../Hook/getData";
import { COLORS } from "../../Constants/Constants";
import styles from "./HealthyStyle";

const Healthy = () => {
  const navigation = useNavigation();

  const { error, data, isLoading } = GetHealthyData("recipes");

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
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text style={styles.errorText}>
          There's an error trying to fetch data
        </Text>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <HealthyCard
              item={item}
              handleCardPress={() => handleCardPress(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Healthy;
