import React from "react";
import { View, Text, Image, ScrollView} from "react-native";
import styles from "./RecipeDetailsStyle";

const RecipeDetails = ({ route }) => {

  const { title, img } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Image
          source={{ uri: `${img}` }}
          resizeMode="cover"
          style={styles.cardImage}
        />

      <Text style={styles.titleText}> {title} </Text>
    </ScrollView>
  );
};


export default RecipeDetails;
