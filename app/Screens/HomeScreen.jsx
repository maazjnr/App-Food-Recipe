import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./HomeScreens/HomeScreensStyle";
import HomeRecipeCard from "../../Components/Healthy/Healthy";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Vegetarian from "../../Components/Vegetarian/Vegetarian ";
import PopularFood from "../../Components/Popular/Popular";
import Recipes from "../../Components/Recipes/Recipes";
import Healthy from "../../Components/Healthy/Healthy";
import { useNavigation } from "expo-router";
import Wine from "../../Components/Wine/Wine";
import SearchRecipes from "../Search/SearchRecipes";

const HomeScreen = () => {
  
  const nav = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <SearchRecipes />

        <View style={styles.recContain}>
          <Text style={styles.RecipeText}>Healthy Plan</Text>
          <TouchableOpacity onPress={() => nav.navigate("Seemore")}>
            <Text style={styles.seeMoreText}>See more</Text>
          </TouchableOpacity>
        </View>

        {/* <Healthy />

        <Text style={styles.RecipeText}>Recommended for you</Text>
        <PopularFood />

        <Text style={styles.RecipeText}>Vegetarian</Text>
        <Vegetarian />

        <Text style={styles.RecipeText}>Wines Recommended</Text>
        <Wine />

        <Recipes /> */}

      </View>
    </ScrollView>
  );
};

export default HomeScreen;
