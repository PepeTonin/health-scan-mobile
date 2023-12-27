import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/pages/home/Home";
import Search from "../components/pages/search/Search";
import Scan from "../components/pages/scan/Scan";
import Colors from "../css/default/Colors";
import { Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function BottomTabRouter() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: (props) => (
          <Image
            style={{ width: 200, height: 50 }}
            source={require("../assets/icone-longo-branco.png")}
          />
        ),
        headerStyle: { backgroundColor: Colors.backgroundColor },
        headerTitleStyle: { color: Colors.primaryFontColor },
        title: "",
        tabBarOptions: { showIcon: true },
        tabBarStyle: { backgroundColor: Colors.backgroundColor },
      }}
    >
      <BottomTab.Screen
        name="PesquisarComparar"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="search"
                size={24}
                color={focused ? Colors.primaryColorLight : Colors.white}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Octicons
                name="home"
                size={24}
                color={focused ? Colors.primaryColorLight : Colors.white}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="fullscreen"
                size={24}
                color={focused ? Colors.primaryColorLight : Colors.white}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
