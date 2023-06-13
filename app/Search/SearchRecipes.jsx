import { View, Text, TextInput } from "react-native";
import React, {useState, useEffect} from "react";
import styles from "./SearchStyle";
import { useSearchParams } from "expo-router";
import { useNavigation } from "expo-router";

const SearchRecipes = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    navigation.navigate('Results', {query: searchQuery})
  }

  return (
    <View>
      <Text style={styles.searchUserText}>Welcome Maaz!</Text>
      <Text style={styles.searchRecipesText}>What type of recipes are you looking for today?</Text>
      <TextInput value={searchQuery}
      onChangeText={setSearchQuery}
      onSubmitEditing={handleSearch}
      style={styles.inputText} placeholder="Search recipes" />
    </View>
  );
};

export default SearchRecipes;