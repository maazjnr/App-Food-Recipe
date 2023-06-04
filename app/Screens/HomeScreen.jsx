import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./HomeScreens/HomeScreensStyle";
import HomeRecipeCard from "../../Components/Healthy/Healthy";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import Vegetarian from "../../Components/Vegetarian/Vegetarian ";
import PopularFood from "../../Components/Popular/Popular";
import Recipes from "../../Components/Recipes/Recipes";
import Healthy from "../../Components/Healthy/Healthy";

const HomeScreen = () => {

  const router = useRouter();

  return (
    <View style={styles.container}>

    <ScrollView>

    <View style={styles.recContain}>
      <Text style={styles.RecipeText}>Healthy Plan</Text>
      <TouchableOpacity onPress={() => router.push('/app/RecipeDetails/') }>
      <Text onPress={() => router.push('../SeeMore/SeeMore')} style={styles.seeMoreText}>See more</Text>
      </TouchableOpacity>
      </View>
      
      <Healthy />

      {/* <Text style={styles.RecipeText}>Recommended for you</Text>
      <PopularFood />

      <Text style={styles.RecipeText}>Vegetarian</Text>
      <Vegetarian /> */}

      {/* <Recipes /> */}
    </ScrollView>

    </View>
  );
};

export default HomeScreen;
