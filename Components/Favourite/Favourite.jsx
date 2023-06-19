import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./FavouriteStyle";
import { SIZES } from "../../Constants/Constants";

const Favourite = () => {

  return (

    <View style={styles.container}>
      <Text style={styles.yaFavText}>Your Favourite</Text>

      <View style={styles.favContainer}>
        <ImageBackground
          borderRadius={SIZES.small + 6}
          style={styles.image}
          source={require("../../Asset/chicken-fillet-1.jpg")}
        >
          <Text style={styles.titleText}>Chicken Filet</Text>
        </ImageBackground>

        <ImageBackground
          borderRadius={SIZES.small + 6}
          style={styles.image}
          source={require("../../Asset/chicken-fillet-2.jpg")}
        >
          <Text style={styles.titleText}>Chicken Filet</Text>
        </ImageBackground>
      </View>

      <View style={styles.favContainer2}>
        <ImageBackground
          borderRadius={SIZES.small + 6}
          style={styles.image}
          source={require("../../Asset/chicken-fillet-3.jpg")}
        >
          <Text style={styles.titleText}>Chicken Filet</Text>
        </ImageBackground>

        <ImageBackground
          borderRadius={SIZES.small + 6}
          style={styles.image}
          source={require("../../Asset/chicken-fillet-4.jpg")}
        >
          <Text style={styles.titleText}>Chicken Filet</Text>
        </ImageBackground>
      </View>

      
    </View>
    
  );
};

export default Favourite;