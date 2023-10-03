import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../components/pages/home/Home"
import Search from "../../components/pages/search/Search"
import Scan from "../../components/pages/scan/Scan"

const BottomTab = createBottomTabNavigator();

export default function BottomRouter() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Scan" component={Scan} />
    </BottomTab.Navigator>
  );
}
