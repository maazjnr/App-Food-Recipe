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
import SeeMore from "./SeeMore/SeeMore";
import { COLORS, SIZES } from "../Constants/Constants";
import HomeHeaderRight from "../Components/HomeHeaderRight";
import ResultSearched from "./Search/ResultSearched";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStatusBarHeight: 50,
        // headerTitle: () => null,
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTitleStyle: {
          color: COLORS.lightWhite,
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRight: () => <HomeHeader />,
          headerLeft: () => <HomeHeaderRight />,
        }}
      />
      <Stack.Screen
        name="RecipeDetails"
        options={{
          // header: () => false,
          headerTitleStyle: {
            color: COLORS.primary,
            fontSize: SIZES.large - 3,
          },

          headerStyle: {
            backgroundColor: "#000",
          },

          headerTintColor: COLORS.primary,
        }}
        component={RecipeDetails}
      />


      <Stack.Screen
        name="Seemore"
        options={{
          header: () => false,
        }}
        component={SeeMore}
      />

      <Stack.Screen
        name="Results"
        options={{
          header: () => false,
        }}
        component={ResultSearched}
      />

      <Stack.Screen
        name="SearchRecipes"
        options={{
          header: () => false,
        }}
        component={ResultSearched}
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
                size={20}
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
                size={20}
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
                size={20}
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
