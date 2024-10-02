import { Alert, ScrollView } from "react-native";
import FriendCard from "../components/FriendCard";
import { useFriendProvider } from "../components/FriendProvider";
import TextColorButton from "../components/TextColorButton";

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
    <ScrollView>
      {friend && <FriendCard friend={friend} />}

      <TextColorButton
        title="Update"
        bgColor="#7cdcde"
        onPress={handleRemoveFriend}
      />
      <TextColorButton title="Delete" onPress={handleRemoveFriend} />
    </ScrollView>
  );
}
