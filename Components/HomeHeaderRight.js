import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS,SIZES } from "../Constants/Constants";

const HomeHeaderRight = () => {
  return (
    <View
      style={{
        paddingBottom: 20,
        paddingLeft: SIZES.large
      }}
    >
      <Ionicons name="ios-menu-outline" size={40} color={COLORS.gray} />
    </View>
  );
};

export default HomeHeaderRight;