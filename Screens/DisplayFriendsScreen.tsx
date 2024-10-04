import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useFriendProvider } from "../components/FriendProvider";
import ToDetailsButton from "../components/ToDetailsButton";
import { TabParamList } from "../Navigators/TabNavigator";

type DisplayProps = NativeStackScreenProps<TabParamList, "Display">;

export default function DisplayFriendsScreen({ navigation }: DisplayProps) {
  const { friendList } = useFriendProvider();

  console.log(friendList.length);

  return (
    <ScrollView>
      <SafeAreaView style={s.gridContainer}>
        {friendList.map((friend) => (
          <View key={friend.id} style={s.gridItem}>
            <ToDetailsButton friend={friend} navigation={navigation} />
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    flex: 1,
    backgroundColor: "#aae8d8",
  },
  gridItem: {
    flexBasis: "48%",
    marginBottom: 10,
  },
});
