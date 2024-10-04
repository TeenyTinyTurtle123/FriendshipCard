import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootStackNavigator from "./Navigators/RootStack";
import FriendProvider from "./components/FriendProvider";

export default function App() {
  return (
    <FriendProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootStackNavigator />
      </NavigationContainer>
    </FriendProvider>
  );
}
