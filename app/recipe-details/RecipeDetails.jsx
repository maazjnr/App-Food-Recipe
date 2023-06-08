import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./RecipeDetailsStyle";
import HTMLView from "react-native-htmlview";
import { log } from "react-native-reanimated";

const RecipeDetails = ({ route }) => {
  const { title, img, ingredientItem, summary, instructionItem, diet } =
    route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        source={{ uri: `${img}` }}
        resizeMode="cover"
        style={styles.cardImage}
      />

      <Text style={styles.titleText}> {title} </Text>

      <View style={styles.htmlVeiwContainer}>
        <Text style={styles.summaryText}>Instructions</Text>
        <Text style={styles.summaryList}> {instructionItem} </Text>

        <Text style={styles.summaryText}>Summary</Text>
        <Text style={styles.summaryList}> {summary} </Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.summaryText}>Ingredients</Text>
        {ingredientItem.map((ingredient) => (
          <Text key={ingredient.id} style={styles.ingredientText}>
            {ingredient.original}
          </Text>
        ))}
        <Text style={styles.summaryText}>Diets</Text>
        <Text style={styles.ingredientText}> {diet} </Text>

      </View>
    </ScrollView>
  );
};

export default RecipeDetails;
