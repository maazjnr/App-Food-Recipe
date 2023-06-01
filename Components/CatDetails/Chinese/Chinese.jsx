import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./ChineseStyle";
import GetData from "../../../Hook/getData";

const Chinese = () => {

  const {data, error, isLoading} = GetData("recipes");

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : error ? (
        <Text>TGere's an error trying to fetchData</Text>
      ) : (
        data?.map((item) => (
          <TouchableOpacity style={styles.foodBtn} key={item.id}>
            <Text style={styles.titleText}> {item.title} </Text>
            <Image
              source={{ uri: `${item.image}` }}
              resizeMode="cover"
              style={styles.cardImage}
            />
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

export default Chinese;
