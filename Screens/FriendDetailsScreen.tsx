import { Alert, Button, View } from "react-native";
import FriendCard from "../components/FriendCard";
import { useFriendProvider } from "../components/FriendProvider";

export default function FriendDetailsScreen({ route }: any) {
  const { friendList, removeFriend } = useFriendProvider();

  const { id } = route.params;
  const friend = friendList.find((friend) => friend.id === id);
  console.log(friend?.name);

  const handleRemoveFriend = () => {
    removeFriend(id);
    Alert.alert(friend?.name + " has been deleted.");
  };
  return (
    <View>
      {/* <Text>Friend ID: {id}</Text>
      <Text>Friend Name: {friend?.name}</Text>
      <Image source={friend?.image} style={{ width: 200, height: 200 }} />
      <Text>Friend Details</Text>
      <Text>Friend relation: {friend?.relation}</Text>
      <Text>Likes: {friend?.likes.join(" ")}</Text>
      <Text>Gift ides: {friend?.giftIdea.join(" ")}</Text> */}

      {friend && <FriendCard friend={friend} />}

      <Button title="Delete" onPress={() => handleRemoveFriend()} />
    </View>
  );
}
