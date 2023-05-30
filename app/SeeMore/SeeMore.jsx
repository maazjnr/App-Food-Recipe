import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import styles from "../SeeMore/SeeMoreStyle";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../Constants/Constants";
import CatFood from "../../Components/CatFood/CatFood";
import CatFoodDetails from "../CatFood/[id]";

const apiUrl =
  "https://api.spoonacular.com/recipes/random?apiKey=dc08124ff78a4ea9855372247525457d&number=3";

const SeeMore = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((res) => {
        setData(res.recipes);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.headerContainer}>
      <CatFoodDetails />
      {/* {data.map((element) => (
        <TouchableOpacity key={element.id}>
          <Image
            source={{ uri: `${element.image}` }}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <Text numberOfLines={3} style={styles.titleText}>
            {" "}
            {element.title}{" "}
          </Text>
        </TouchableOpacity>
      ))} */}
    </ScrollView>
  );
};

export default SeeMore;
