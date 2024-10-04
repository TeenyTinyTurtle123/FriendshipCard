import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import defaultImage from "../assets/images/flowerDefault.jpg";

export default function ToDetailsButton({ friend, navigation }: any) {
  return (
    <Pressable
      onPress={() => navigation.navigate("Details", { id: friend.id })}
    >
      <View style={s.container}>
        <Image
          source={friend.image ?? defaultImage}
          style={s.image}
          blurRadius={10}
        />
        <Text style={s.text}>{friend.name}</Text>
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
