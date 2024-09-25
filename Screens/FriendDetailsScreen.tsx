import { Image, Text, View } from "react-native";
import { resolveImage } from "../App";
import { MockFriendsData } from "../data";

export default function FriendDetailsScreen({ route }: any) {
  const { id } = route.params;
  const friend = MockFriendsData.find((friend) => friend.id === id);
  console.log(friend?.name);
  return (
    <View>
      <Text>Friend ID: {id}</Text>
      <Text>Friend Name: {friend?.name}</Text>
      <Image
        source={resolveImage(friend?.image ?? "default.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Text>Friend Details</Text>
      <Text>Friend relation: {friend?.relation}</Text>
      <Text>Likes: {friend?.likes.join(" ")}</Text>
      <Text>Gift ides: {friend?.giftIdea.join(" ")}</Text>
    </View>
  );
}
