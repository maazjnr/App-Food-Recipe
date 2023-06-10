import { View, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import styles from "./ItalianStyle";
import { useNavigation } from "expo-router";
import { GetItalianData } from "../../../Hook/getData";

const Italian = () => {
  const navigation = useNavigation();
  const { data, isLoading, error } = GetItalianData("Recipes");

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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : error ? (
        <Text>There's an error trying to fetchData</Text>
      ) : (
        data?.map((item) => (
          <TouchableOpacity onPress={() => handleCardPress(item)} style={styles.foodBtn} key={item.id}>
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

export default Italian;
