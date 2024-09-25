import { ScrollView, Text, View } from "react-native";
import ToDetailsButton from "../components/ToDetailsButton";
import { MockFriendsData } from "../data";

export default function DisplayFriendsScreen({ navigation }: any) {
  return (
    <ScrollView>
      <Text>Display Screen 🐛</Text>
      {MockFriendsData.map((friend) => (
        <View key={friend.id}>
          <ToDetailsButton friend={friend} navigation={navigation} />
        </View>
      ))}
    </ScrollView>
  );
}
