import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function CreateFriend() {
  const [value, setValue] = useState({
    name: "",
    relation: "",
    likes: [""],
    giftIdea: [""],
    image: "",
  });

  return (
    <View>
      <Text>Create a new friend card ✨</Text>
      <Text>Name of person:</Text>
      <TextInput style={s.textInput} placeholder="name" />
      <Text>Relationship:</Text>
      <TextInput style={s.textInput} placeholder="friend, brother ..." />
      <Text>Likes (separate each new thing with a ' , '):</Text>
      <TextInput
        style={s.textInput}
        placeholder="green socks, cats, pancakes ..."
      />
      <Text>Gift ideas (separate each new thing with a ' , '):</Text>
      <TextInput
        style={s.textInput}
        placeholder="Trip to Liseberg, limited edition frog  ..."
      />
      <Text>Add a picture (optional)</Text>
      <TextInput placeholder="added in version 2" />
    </View>
  );
}

const s = StyleSheet.create({
  component: {},
  textInput: {
    borderWidth: 2,
    padding: 5,
    marginBottom: 5,
  },
});
