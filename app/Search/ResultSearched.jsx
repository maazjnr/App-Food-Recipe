import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import styles from "./ResultStyle";
import { useNavigation } from "expo-router";

const ResultSearched = ({ route }) => {
  const myApi = "dc08124ff78a4ea9855372247525457d";

  const navigation = useNavigation();
  const { query } = route.params;
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const getSearched = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${myApi}&number=2&query=${query}`
      );
      const data = await response.json();
      setData(data.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSearched();
  }, [query]);
 
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : error ? (
        <Text>There's an error trying to fetchData</Text>
      ) : data !== null ? (
        data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleCardPress(item)}
                style={styles.foodBtn}
                key={item.id}
              >
                <Text style={styles.titleText}>{item.title}</Text>
                <Image
                  source={{ uri: `${item.image}` }}
                  resizeMode="cover"
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text>No results found</Text>
        )
      ) : null}
    </ScrollView>
  );
  
  
 
};

export default ResultSearched;
