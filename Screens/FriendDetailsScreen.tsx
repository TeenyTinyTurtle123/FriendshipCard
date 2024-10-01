import { Image, Text, View } from "react-native";
import { resolveImage } from "../App";
import { useFriendProvider } from "../components/FriendProvider";

export default function FriendDetailsScreen({ route }: any) {
  const { friendList } = useFriendProvider();

  const { id } = route.params;
  const friend = friendList.find((friend) => friend.id === id);
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
