import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./HomeScreens/HomeScreensStyle";
import HomeRecipeCard from "../../Components/HomeRecipeCard";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.recContain}>
      <Text style={styles.RecipeText}>Recipes</Text>
      <TouchableOpacity>
      <Text style={styles.seeMoreText}>See more</Text>
      </TouchableOpacity>
      </View>
      
      <HomeRecipeCard />
    </View>
  );
};

export default HomeScreen;
