import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DisplayFriendsScreen from "../Screens/DisplayFriendsScreen";
import FriendDetailsScreen from "../Screens/FriendDetailsScreen";
import HomeScreen from "../Screens/HomeScreen";

type RootStackParamList = {
  Home: undefined;
  Details: { id: number };
  Display: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Details" component={FriendDetailsScreen} />
      <RootStack.Screen name="Display" component={DisplayFriendsScreen} />
    </RootStack.Navigator>
  );
}
