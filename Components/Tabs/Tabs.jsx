import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import CatFood from "../CatFood/CatFood";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZES } from "../../Constants/Constants";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import styles from "./TabStyle";
import { ScrollView } from "react-native-gesture-handler";

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.btnContainer} onPress={onHandleSearchType}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.primary, "orange"]}
        style={styles.linearStyle}
      >
        <Ionicons name="fast-food" size={20} color={COLORS.lightWhite} />
        <Text style={styles.btnText}>{name}</Text>
      </LinearGradient>
    </TouchableOpacity>
    </ScrollView>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: 5 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;
