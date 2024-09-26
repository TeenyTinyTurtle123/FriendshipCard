import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ToDetailsButton from "../components/ToDetailsButton";
import { MockFriendsData } from "../data";

export default function DisplayFriendsScreen({ navigation }: any) {
  const [friends] = useState(MockFriendsData);

  return (
    <ScrollView>
      <Text>Display Screen 🐛</Text>
      {friends.map((friend) => (
        <View key={friend.id}>
          <ToDetailsButton friend={friend} navigation={navigation} />
        </View>
      ))}
    </ScrollView>
  );
}
