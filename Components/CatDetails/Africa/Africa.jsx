import { View, Text, ActivityIndicator, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import GetData from "../../../Hook/getData";
import styles from "./AfricaStyle";

const Africa = () => {
  
  const { data, isLoading, error } = GetData("recipes");
  return (

     <ScrollView contentContainerStyle={styles.scrollContainer}>
     {/* {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : error ? (
        <Text>TGere's an error trying to fetchData</Text>
      ) : (
        data?.map((item) => (
          <TouchableOpacity style={styles.foodBtn} key={item.id} >
            <Text style={styles.titleText}> {item.title} </Text>
            <Image
              source={{ uri: `${item.image}` }}
              resizeMode="cover"
              style={styles.cardImage}
            />
          </TouchableOpacity>
        ))
      )} */}
     </ScrollView>

  );
};

export default Africa;