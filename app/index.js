import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNav from "../Navigation/TabNav";
import HomeScreen from "./Screens/HomeScreen";
import HomeHeader from "../Components/common/HomeHeader";
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Favorite from "./Screens/Favourite/Favorite";
import Profile from "./Screens/Profile/Profile";
import RecipeDetails from "./recipe-details/RecipeDetails";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => <HomeHeader />,
        }}
      />
      <Stack.Screen
        name="RecipeDetails"
        options={{
          header: () => false,
        }}
        component={RecipeDetails}
      />
    </Stack.Navigator>
  );
};

export default function Page() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Feather
                name="home"
                size={24}
                color={focused ? "#fb7d10" : "#000"}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
        component={MainScreens}
      />

      <Tab.Screen
        name="Fav"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <MaterialIcons
                name="favorite"
                size={24}
                color={focused ? "#fb7d10" : "#000"}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
        component={Favorite}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <FontAwesome
                name="user"
                size={24}
                color={focused ? "#fb7d10" : "#000"}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
