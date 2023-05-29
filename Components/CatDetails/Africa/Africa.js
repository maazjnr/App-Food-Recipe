import { View, Text, ActivityIndicator, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import GetData from "../../../Hook/getData";
import axios from "axios";

const Africa = () => {
  
  const { data, isLoading, error } = GetData("recipes");
  console.warn(data);

  return (

     <ScrollView>
     {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : error ? (
        <Text>There's an error trying to fetchData</Text>
      ) : (
        data?.map((item) => (
          <View>
            <Text> {item.title} </Text>
            <Image
              source={{ uri: `${item.image}` }}
              resizeMode="cover"
              style={{ width: 200, height: 200 }}
            />
          </View>
        ))
      )}
     </ScrollView>

  );
};

export default Africa;
