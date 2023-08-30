import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Routes() {

  function loggedScreen() {
    return (
        <BottomTab.Navigator>
          <BottomTab.Screen name="Home" component={Home} />
          <BottomTab.Screen name="Search" component={Search} />
          <BottomTab.Screen name="Scan" component={Scan} />
        </BottomTab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Screen name="Login" />
      <Stack.Screen name="" />
    </NavigationContainer>
  );
}
