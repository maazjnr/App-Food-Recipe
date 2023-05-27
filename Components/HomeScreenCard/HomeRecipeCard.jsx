import { View, Text, Image} from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./HomeCardStyle";
const apiUrl =
  "https://api.spoonacular.com/recipes/random?apiKey=dc08124ff78a4ea9855372247525457d&number=3";

const HomeRecipeCard = () => {

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


  const renderTitle = (title) => {
    if (title.length > 15) {
      return title.substring(0, 20) + '...';
    }
    return title;
  };

  return (
    <View>
      {/* <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={styles.cardBtn}>
              <Image
                source={{ uri: `${item.image}` }}
                resizeMode="cover"
                style={styles.cardImage}
              />

              <View style={styles.textContainer}>
              <Text numberOfLines={10} style={styles.titleText}> {renderTitle(item.title)} </Text>
              <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        )}
      /> */}
    </View>
  );
};

export default HomeRecipeCard;
