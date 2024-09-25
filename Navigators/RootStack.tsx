import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FriendDetailsScreen from "../Screens/FriendDetailsScreen";
import TabNavigator, { TabParamList } from "./TabNavigator";

type RootStackParamList = {
  HomeNavigator: NavigatorScreenParams<TabParamList>;
  Details: { id: number };
  //   Display: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="HomeNavigator"
        options={{ headerShown: false }}
        component={TabNavigator}
      />
      <RootStack.Screen name="Details" component={FriendDetailsScreen} />
      {/* <RootStack.Screen name="Display" component={DisplayFriendsScreen} /> */}
    </RootStack.Navigator>
  );
}
