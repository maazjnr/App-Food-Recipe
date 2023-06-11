import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./SearchStyle";

const SearchRecipes = () => {
  return (
    <View>
      <Text style={styles.searchUserText}>Welcome Maaz!</Text>
      <Text style={styles.searchRecipesText}>What type of recipes are you looking for today?</Text>
      <TextInput style={styles.inputText} placeholder="Search recipes" />
    </View>
  );
};

export default SearchRecipes;