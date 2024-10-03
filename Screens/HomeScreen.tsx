import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={s.container}>
      <Text style={s.header}>Welcome to FriendshipCard! 🎉</Text>

      <Text style={s.description}>
        Keeping track of your friends' favorite things has never been easier.
        Whether it's their hobbies, interests, or gift ideas, you'll always be
        ready to make their day special.
      </Text>

      <View style={s.instructionContainer}>
        <MaterialIcons name="create" size={24} color="black" />
        <Text style={s.instructionText}>
          <Text style={s.boldText}>Create a new friend card</Text> by tapping
          the <Text style={s.iconText}>pen icon</Text>. Fill it with details
          about your friend’s likes, relations, and gift ideas.
        </Text>
      </View>

      <View style={s.instructionContainer}>
        <MaterialIcons name="favorite" size={24} color="black" />
        <Text style={s.instructionText}>
          <Text style={s.boldText}>View your friend list</Text> by pressing the{" "}
          <Text style={s.iconText}>heart icon</Text>. See all your saved cards
          at a glance and never forget what your friends love.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aae8d8",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  instructionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 8,
  },
  instructionText: {
    fontSize: 16,
    marginLeft: 13, // Spacing between icon and text
  },
  boldText: {
    fontWeight: "bold",
  },
  iconText: {
    fontStyle: "italic",
    color: "#008080",
  },
});
