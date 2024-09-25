import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MockFriendsData } from "./data";

type RootStackParamList = {
  Home: undefined;
  Details: { id: number };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function resolveImage(imageName: string) {
  switch (imageName) {
    case "pexels-javon-swaby-197616-1697912.jpg":
      return require("./assets/images/pexels-javon-swaby-197616-1697912.jpg");
    case "pexels-luizclas-170497-1848565.jpg":
      return require("./assets/images/pexels-luizclas-170497-1848565.jpg");
    case "pexels-olly-837358.jpg":
      return require("./assets/images/pexels-olly-837358.jpg");
    case "pexels-trinitykubassek-445109.jpg":
      return require("./assets/images/pexels-trinitykubassek-445109.jpg");
    default:
      return require("./assets/images/default.jpg"); // fallback image if needed
  }
}

function HomeScreen({ navigation }: any) {
  return (
    <ScrollView>
      <Text>Home Screen 🐛</Text>
      {MockFriendsData.map((friend) => (
        <View>
          <Text key={friend.id}>
            {friend.name} is my {friend.relation}
          </Text>

          <Image
            source={resolveImage(friend.image)}
            style={{ width: 100, height: 100 }}
          />
          <Text>Likes: {friend.likes.join(" ")}</Text>
          <Text>Gift Ides: {friend.giftIdea.join(" ")}</Text>
          <Text></Text>
          <Button
            title={`Details for ${friend.name}`}
            onPress={() => navigation.navigate("Details", { id: friend.id })}
          ></Button>
        </View>
      ))}
    </ScrollView>
  );
}

function FriendDetails({ route }: any) {
  const { id } = route.params;
  const friend = MockFriendsData.find((friend) => friend.id === id);
  console.log(friend?.name);
  return (
    <View>
      <Text>Friend Details</Text>
      <Text>Friend ID: {id}</Text>
      <Text>Friend Name: {friend?.name}</Text>
      <Text>Friend relation: {friend?.relation}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Details" component={FriendDetails} />
      </RootStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
