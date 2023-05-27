import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SIZES, COLORS } from "../../Constants/Constants";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, {useState} from "react";

const CatFood = () => {


  
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: SIZES.xLarge,
      }}
    >
      <TouchableOpacity>
        <LinearGradient
          // Button Linear Gradient
          colors={[COLORS.primary, COLORS.primary, "orange"]}
          style={{
            width: 75,
            height: 75,
            borderRadius: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="fast-food" size={20} color="#fff" />
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Africa
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity>
        <LinearGradient
          // Button Linear Gradient
          colors={[COLORS.primary, COLORS.primary, "orange"]}
          style={{
            width: 75,
            height: 75,
            borderRadius: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="food-bank" size={20} color="#fff" />
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Chinese
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity>
        <LinearGradient
          // Button Linear Gradient
          colors={[COLORS.primary, COLORS.primary, "orange"]}
          style={{
            width: 75,
            height: 75,
            borderRadius: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="food-takeout-box"
            size={20}
            color="#fff"
          />
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Italian
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CatFood;
