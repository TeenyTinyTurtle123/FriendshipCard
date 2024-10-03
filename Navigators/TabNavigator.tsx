import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CreateFriendScreen from "../Screens/CreateFriendScreen";
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
    <TabNav.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "#008080" }}
    >
      <TabNav.Screen
        name="Create"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="create" size={size} color={color} />
          ),
        }}
        component={CreateFriendScreen}
      />
      <TabNav.Screen
        name="Home"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <TabNav.Screen
        name="Display"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}
        component={DisplayFriendsScreen}
      />
    </TabNav.Navigator>
  );
}
