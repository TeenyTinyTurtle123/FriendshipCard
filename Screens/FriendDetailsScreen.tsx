import { Text, View } from "react-native";
import { MockFriendsData } from "../data";

export default function FriendDetailsScreen({ route }: any) {
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
