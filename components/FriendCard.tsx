import { Image } from "expo-image";
import { Platform, StyleSheet, Text, View } from "react-native";
import defaultImage from "../assets/images/flowerDefault.jpg";
import { Friend } from "../data";

interface Props {
  friend: Friend;
}

export default function FriendCard({ friend }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.name}>{friend.name}</Text>
      <View style={s.imageContainer}>
        <Image source={friend.image ?? defaultImage} style={s.image} />
      </View>
      <View style={s.relationContainer}>
        <View style={s.relationInnerContainer}>
          <Text style={s.relationText}>{friend.relation}</Text>
        </View>
      </View>
      <Text style={s.titleText}>Likes</Text>
      <Text style={s.underText}>{friend.likes.join(" ")}</Text>
      <Text style={s.titleText}>Gift Ideas</Text>
      <Text style={s.underText}>{friend.giftIdea.join(" ")}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 10,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 270,
    height: 310,
    borderWidth: 6,
    borderColor: "#008080",
    borderRadius: 16,
  },
  relationContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  relationInnerContainer: {
    borderWidth: 4,
    borderRadius: 20,
    borderColor: "#008080",
  },
  relationText: {
    fontSize: 20,
    margin: 6,
  },
  titleText: {
    fontSize: 25,
    borderBottomWidth: 2,
  },
  underText: {
    fontSize: 20,
  },
});
