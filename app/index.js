import { StyleSheet, Text, View } from "react-native";
import TabNav from "../Navigation/TabNav";
import HomeScreen from "./Screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeHeader from "../Components/common/HomeHeader";
const Tab = createBottomTabNavigator();


export default function Page() {
  return (
    <Tab.Navigator screenOptions={{
      headerShadowVisible: false,
      headerTintColor: '#FFFFFF',
      headerStatusBarHeight: 60,
    }}>
      <Tab.Screen
       name="HomeScreen" options={{
        title: "Home Screen",
        headerLeft: () => (
        <HomeHeader />
        )
       }} component={HomeScreen} />
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
