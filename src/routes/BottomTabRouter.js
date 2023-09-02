import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

export default function BottomTabRouter() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Search" component={Search} />
            <BottomTab.Screen name="Scan" component={Scan} />
        </BottomTab.Navigator>
    );
}