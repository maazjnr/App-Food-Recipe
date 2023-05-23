import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../app/Screens/HomeScreen";
const Stack = createStackNavigator();

const TabNav = () => {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>

  );
};

export default TabNav;
