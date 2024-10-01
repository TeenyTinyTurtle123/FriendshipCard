import { Image } from "expo-image";
import { Button, ScrollView, Text, View } from "react-native";
import { useFriendProvider } from "../components/FriendProvider";
import { FriendCard } from "../data";

export default function HomeScreen({ navigation }: any) {
  const { friendList, addFriend, removeFriend } = useFriendProvider();

  const handleAddAFriend = () => {
    const newFriend: FriendCard = {
      id: Date.now(), // Generate a unique ID
      name: "Sunny Andersson",
      relation: "Acquaintance",
      likes: ["Music", "Sports"],
      giftIdea: ["Concert tickets"],
      image: "",
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
          <Image
            source={{ uri: friend.image }}
            style={{ width: 200, height: 200 }}
          />
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
