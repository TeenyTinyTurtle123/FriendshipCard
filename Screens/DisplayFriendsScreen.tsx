import { ScrollView, StyleSheet, View } from "react-native";
import { useFriendProvider } from "../components/FriendProvider";
import ToDetailsButton from "../components/ToDetailsButton";

export default function DisplayFriendsScreen({ navigation }: any) {
  const { friendList } = useFriendProvider();

  console.log(friendList.length);

  return (
    <ScrollView>
      <View style={s.gridContainer}>
        {friendList.map((friend) => (
          <View key={friend.id} style={s.gridItem}>
            <ToDetailsButton friend={friend} navigation={navigation} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  gridContainer: {
    flexDirection: "row", // Align items in a row
    flexWrap: "wrap", // Allow wrapping to next line
    justifyContent: "space-between", // Space evenly between rows
    padding: 10, // Add some padding to the sides
  },
  gridItem: {
    flexBasis: "48%", // Each item takes up almost half of the row
    marginBottom: 10, // Add some space between rows
  },
});
