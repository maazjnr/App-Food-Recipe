import { View, Text, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./SearchStyle";
import { useSearchParams } from "expo-router";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../Constants/Constants";
import { EvilIcons } from "@expo/vector-icons";

const SearchRecipes = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    navigation.navigate("Results", { query: searchQuery });
  };

  return (
    <View>
      <Text style={styles.searchUserText}>Welcome Maaz!</Text>
      <Text style={styles.searchRecipesText}>
        What type of recipes are you looking for today?
      </Text>

      <View
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: SIZES.xLarge,
        }}
      >
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          style={styles.inputText}
          placeholder="Search recipes"
        />

        <TouchableOpacity
          onPress={handleSearch}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#D4D4D4",
            borderRadius: SIZES.small,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EvilIcons name="search" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchRecipes;
