import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FriendCard from "../components/FriendCard";
import { useFriendProvider } from "../components/FriendProvider";
import TextColorButton from "../components/TextColorButton";
import { RootStackParamList } from "../Navigators/RootStack";

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

export default function FriendDetailsScreen({ route }: DetailsProps) {
  const { friendList, removeFriend } = useFriendProvider();

  const { id } = route.params;
  const friend = friendList.find((friend) => friend.id === id);
  console.log(friend?.name);

  const handleRemoveFriend = () => {
    removeFriend(id);
    Alert.alert(friend?.name + " has been deleted.");
  };
  return (
    <ScrollView style={s.container}>
      <SafeAreaView>
        {friend && <FriendCard friend={friend} />}

        <TextColorButton title="Update" bgColor="#6ebeb5" onPress={() => {}} />
        <TextColorButton title="Delete" onPress={handleRemoveFriend} />
      </SafeAreaView>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aae8d8",
  },
});
