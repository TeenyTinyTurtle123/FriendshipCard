import { Button, Image, ScrollView, Text, View } from "react-native";
import { resolveImage } from "../App";
import { MockFriendsData } from "../data";

export default function DisplayFriendsScreen({ navigation }: any) {
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
