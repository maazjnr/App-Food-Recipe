import { View, Text, Image, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { SIZES } from "../Constants/Constants";

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

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity>
              <Image
                source={{ uri: `${item.image}` }}
                resizeMode="cover"
                style={{
                  width: 300,
                  height: 200,
                  marginRight: 15,
                  borderRadius: SIZES.small,
                }}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default HomeRecipeCard;
