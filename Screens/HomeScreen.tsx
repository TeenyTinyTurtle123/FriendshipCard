import { Button, Text, View } from "react-native";
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
    <View>
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
          <Button
            title="Remove friend"
            onPress={() => handleRemoveFriend(friend.id)}
          />
        </View>
      ))}
      <Button title="Add new friend" onPress={handleAddAFriend} />
    </View>
  );
}
