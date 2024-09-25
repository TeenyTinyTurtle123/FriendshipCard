import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FriendDetailsScreen from "../Screens/FriendDetailsScreen";
import TabNavigator from "./TabNavigator";

type RootStackParamList = {
  Home: undefined;
  Details: { id: number };
  //   Display: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={TabNavigator} />
      <RootStack.Screen name="Details" component={FriendDetailsScreen} />
      {/* <RootStack.Screen name="Display" component={DisplayFriendsScreen} /> */}
    </RootStack.Navigator>
  );
}
