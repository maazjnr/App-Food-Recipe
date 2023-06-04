import { View, Text, FlatList} from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import HealthyCard from "../common/card/Healthy/HealthyCard";

const apiUrl =
  "https://api.spoonacular.com/recipes/random?apiKey=dc08124ff78a4ea9855372247525457d&number=1";


const Healthy = () => {
  const router = useRouter();

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
        return title.substring(0, 20) + "...";
      }
      return title;
    };

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          // <TouchableOpacity
          //   onPress={() => router.push(`/recipe-details/${item.id}`)}
          //   style={styles.cardBtn}
          // >
          //   <Image
          //     source={{ uri: `${item.image}` }}
          //     resizeMode="cover"
          //     style={styles.cardImage}
          //   />

          //   <View style={styles.textContainer}>
          //     <Text numberOfLines={10} style={styles.titleText}>
          //       {" "}
          //       {renderTitle(item.title)}{" "}
          //     </Text>
          //     <MaterialCommunityIcons
          //       name="dots-vertical"
          //       size={24}
          //       color="black"
          //     />
          //   </View>
          // </TouchableOpacity>

        <HealthyCard />
         
        )}
      />
    </View>
  );
};

export default Healthy;
