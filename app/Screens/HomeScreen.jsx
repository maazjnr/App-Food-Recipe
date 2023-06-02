import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./HomeScreens/HomeScreensStyle";
import HomeRecipeCard from "../../Components/HomeScreenCard/HomeRecipeCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import Vegetarian from "../../Components/Vegetarian/Vegetarian ";
import PopularFood from "../../Components/Popular/Popular";
import Recipes from "../../Components/Recipes/Recipes";

const HomeScreen = () => {

  const router = useRouter();
  return (
    <View style={styles.container}>

    <ScrollView>

    <View style={styles.recContain}>
      <Text style={styles.RecipeText}>Popular Recipes</Text>
      <TouchableOpacity>
      <Text onPress={() => router.push('../SeeMore/SeeMore')} style={styles.seeMoreText}>See more</Text>
      </TouchableOpacity>
      </View>
      
      <HomeRecipeCard />

      <Text style={styles.RecipeText}>Recommended for you</Text>
      <PopularFood />

      <Text style={styles.RecipeText}>Vegetarian</Text>
      <Vegetarian />

      <Recipes />
    </ScrollView>

    </View>
  );
};

export default HomeScreen;
