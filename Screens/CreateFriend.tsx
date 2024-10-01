import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useFriendProvider } from "../components/FriendProvider";
import { FriendCard } from "../data";

export default function CreateFriend() {
  const { friendList, addFriend } = useFriendProvider();

  // state for form input:
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [likes, setLikes] = useState("");
  const [giftIdeas, seGiftIdeas] = useState("");
  const [image, setImage] = useState("");

  // Function to generate a unique ID
  function generateRandomID() {
    const timeComponent = Date.now();
    const randomComponent = Math.floor(Math.random() * 100);
    return timeComponent + randomComponent;
  }

  const handleAddFriend = () => {
    const newFriend: FriendCard = {
      id: generateRandomID(),
      name,
      relation,
      likes: likes.split(",").map((like) => like.trim()), // Convert the likes string into an array
      giftIdea: giftIdeas.split(",").map((gift) => gift.trim()), // Convert the gift ideas string into an array
      image: image || "default.jpg", // Use a default image if none is provided
    };

    addFriend(newFriend);
  };

  return (
    <View>
      <Text>Create a new friend card ✨</Text>

      <Text>Name of person:</Text>
      <TextInput
        style={s.textInput}
        placeholder="name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={s.textInput}
        placeholder="friend, brother ..."
        value={relation}
        onChangeText={setRelation}
      />

      <Text>Likes (separate each new thing with a ', '):</Text>
      <TextInput
        style={s.textInput}
        placeholder="green socks, cats, pancakes ..."
        value={likes}
        onChangeText={setLikes}
      />

      <Text>Gift ideas (separate each new thing with a ' , '):</Text>
      <TextInput
        style={s.textInput}
        placeholder="Trip to Liseberg, limited edition frog  ..."
        value={giftIdeas}
        onChangeText={seGiftIdeas}
      />

      <Text>Add a picture (optional)</Text>
      <TextInput
        style={s.textInput}
        placeholder="image url"
        value={image}
        onChangeText={setImage}
      />
      <Button title="Add" onPress={handleAddFriend} />
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
