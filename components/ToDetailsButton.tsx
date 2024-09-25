import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MockFriendsData } from "../data";

export default function ToDetailsButton() {
  return (
    <Pressable onPress={() => alert("you pressed me!")}>
      <View style={s.container}>
        <Image
          source={require("../assets/images/default.jpg")}
          style={s.image}
          blurRadius={50}
        />
        <Text style={s.text}>Name</Text>
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute",
    fontSize: 24,
    fontWeight: "bold",
  },
});
