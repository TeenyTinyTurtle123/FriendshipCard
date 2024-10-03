import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { Button, ScrollView, Text, View } from "react-native";
import defaultImage from "../assets/images/flowerDefault.jpg";
import { useFriendProvider } from "../components/FriendProvider";
import { Friend } from "../data";
import { TabParamList } from "../Navigators/TabNavigator";

type HomeProps = NativeStackScreenProps<TabParamList, "Home">;

export default function HomeScreen({ navigation }: HomeProps) {
  const { friendList, addFriend, removeFriend } = useFriendProvider();

  const handleAddAFriend = () => {
    const newFriend: Friend = {
      id: Date.now(), // Generate a unique ID
      name: "Sunny Andersson",
      relation: "Acquaintance",
      likes: ["Music", "Sports"],
      giftIdea: ["Concert tickets"],
      image: defaultImage,
    };

    addFriend(newFriend);
  };

  const handleRemoveFriend = (id: number) => {
    removeFriend(id);
  };

  return (
    <ScrollView>
      <Button
        title="Go to Display ❤️"
        onPress={() => navigation.navigate("Display")}
      ></Button>

      <Text>Friends: </Text>
      {friendList.map((friend) => (
        <View key={friend.id}>
          <Text>
            {friend.name} {friend.relation} {friend.likes}
          </Text>
          <Image source={friend.image} style={{ width: 200, height: 200 }} />
          <Button
            title="Remove friend"
            onPress={() => handleRemoveFriend(friend.id)}
          />
        </View>
      ))}
      <Button title="Add new friend" onPress={handleAddAFriend} />
    </ScrollView>
  );
}
