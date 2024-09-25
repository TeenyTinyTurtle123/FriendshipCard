import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ToDetailsButton({ friend, navigation }: any) {
  return (
    <Pressable
      onPress={() => navigation.navigate("Details", { id: friend.id })}
    >
      <View style={s.container}>
        <Image
          source={require("../assets/images/default.jpg")}
          style={s.image}
          blurRadius={50}
        />
        <Text style={s.text}>{friend.name}</Text>
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
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
