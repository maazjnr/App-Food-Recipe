import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
 import styles from "./PopularStyle";
  
  const apiUrl =
    "https://api.spoonacular.com/recipes/random?apiKey=dc08124ff78a4ea9855372247525457d&number=3";
  
  const PopularFood = () => {
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
      if (title.length > 30) {
        return title.substring(0, 20) + "...";
      }
      return title;
    };
  
    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item) => (
            <TouchableOpacity key={item.id} style={styles.cardBtn}>
              <Image
                source={{ uri: `${item.image}` }}
                resizeMode="cover"
                style={styles.cardImage}
              />
  
              <View style={styles.textContainer}>
                <Text numberOfLines={10} style={styles.titleText}>
                  {" "}
                  {renderTitle(item.title)}{" "}
                </Text>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={24}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };
  
  export default PopularFood;
  