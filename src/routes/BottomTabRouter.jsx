import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/pages/home/Home";
import Search from "../components/pages/search/Search";
import Scan from "../components/pages/scan/Scan";
import Colors from "../css/default/Colors";
import { Image } from "react-native";

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
        title: '',
        tabBarOptions: { showIcon: true },
        tabBarStyle: { backgroundColor: Colors.backgroundColor },
      }}
    >
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Scan" component={Scan} />
    </BottomTab.Navigator>
  );
}