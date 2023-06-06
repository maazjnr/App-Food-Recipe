import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HealthyCard from "../common/card/Healthy/HealthyCard";

const apiUrl =
  "https://api.spoonacular.com/recipes/random?apiKey=dc08124ff78a4ea9855372247525457d&number=1";

const Healthy = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

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
          <HealthyCard
            item={item}
            handleCardPress={() =>
              navigation.navigate("RecipeDetails", {
                title: item.title,
                img: item.image
              })
            }
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Healthy;
