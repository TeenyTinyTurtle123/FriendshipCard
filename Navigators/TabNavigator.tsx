import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateFriend from "../Screens/CreateFriend";
import DisplayFriendsScreen from "../Screens/DisplayFriendsScreen";
import HomeScreen from "../Screens/HomeScreen";

export type TabParamList = {
  Home: undefined;
  Create: undefined;
  Display: undefined;
};

const TabNav = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="Create" component={CreateFriend} />
      <TabNav.Screen name="Home" component={HomeScreen} />
      <TabNav.Screen name="Display" component={DisplayFriendsScreen} />
    </TabNav.Navigator>
  );
}
