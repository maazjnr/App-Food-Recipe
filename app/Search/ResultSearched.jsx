import { View, Text } from "react-native";
import React, {useState, useEffect} from "react";

const ResultSearched = ({route}) => {
  const { query } = route.params;
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const myApi = "dc08124ff78a4ea9855372247525457d";

  useEffect(() => {
    const getSearched = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${myApi}&number=10&query=${query}`
        );
        const data = await response.json();
        setSearchedRecipes(data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getSearched();
  }, [query]);

  return (
    <View>
      {searchedRecipes.map((recipe) => (
        <Text key={recipe.id}>{recipe.title}</Text>
      ))}
    </View>
  );
};

export default ResultSearched;
