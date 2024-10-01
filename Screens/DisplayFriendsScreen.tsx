import { ScrollView, Text, View } from "react-native";
import { useFriendProvider } from "../components/FriendProvider";
import ToDetailsButton from "../components/ToDetailsButton";

export default function DisplayFriendsScreen({ navigation }: any) {
  const { friendList } = useFriendProvider();

  console.log(friendList.length);

  return (
    <ScrollView>
      <Text>Display Screen 🐛</Text>
      {friendList.map((friend) => (
        <View key={friend.id}>
          <ToDetailsButton friend={friend} navigation={navigation} />
        </View>
      ))}
    </ScrollView>
  );
}
