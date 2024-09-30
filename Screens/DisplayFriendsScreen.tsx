import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ToDetailsButton from "../components/ToDetailsButton";
import { MockFriendsData } from "../data";

export default function DisplayFriendsScreen({ navigation }: any) {
  const [friends, setFriends] = useState(MockFriendsData);

  useEffect(() => {
    const refreshFriends = () => setFriends([...MockFriendsData]);

    const unsubscribe = navigation.addListener("focus", refreshFriends);

    // No cleanup needed if the app is small, but keeping this ensures best practices
    return () => unsubscribe();
  }, [navigation]);

  console.log(friends.length);
  console.log(friends.length);
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
