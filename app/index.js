import { StyleSheet, Text, View } from "react-native";
import TabNav from "../Navigation/TabNav";
import HomeScreen from "./Screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeHeader from "../Components/common/HomeHeader";
const Tab = createBottomTabNavigator();
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Favorite from "./Screens/Favourite/Favorite";
import Profile from "./Screens/Profile/Profile";

export default function Page() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: "#FFFFFF",
        headerStatusBarHeight: 60,
        tabBarStyle: { borderTopWidth: 0 },
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
          headerLeft: () => <HomeHeader />,
          tabBarLabel: () => null,
        }}
        component={HomeScreen}
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
          header: () => null,
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
          header: () => null,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
