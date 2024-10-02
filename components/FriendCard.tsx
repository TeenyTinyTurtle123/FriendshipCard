import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import defaultImage from "../assets/images/flowerDefault.jpg";
import { Friend } from "../data";

interface Props {
  friend: Friend;
}

export default function FriendCard({ friend }: Props) {
  return (
    <View style={s.container}>
      <Text>This is a card: </Text>
      <Text>Friend Name: {friend.name}</Text>
      <Image
        source={friend.image ?? defaultImage}
        style={{ width: 200, height: 200 }}
      />
      <Text>Friend Details</Text>
      <Text>Friend relation: {friend.relation}</Text>
      <Text>Likes: {friend.likes.join(" ")}</Text>
      <Text>Gift ides: {friend.giftIdea.join(" ")}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
