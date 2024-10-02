import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import defaultImage from "../assets/images/flowerDefault.jpg";
import { useFriendProvider } from "../components/FriendProvider";
import { Friend } from "../data";

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
    const newFriend: Friend = {
      id: generateRandomID(),
      name,
      relation,
      likes: likes.split(",").map((like) => like.trim()), // Convert the likes string into an array
      giftIdea: giftIdeas.split(",").map((gift) => gift.trim()), // Convert the gift ideas string into an array
      image: image ? { uri: image } : defaultImage, // TODO: add a placeholder image if no image is selected
    };

    addFriend(newFriend);
    Alert.alert(newFriend.name + " was added! ✨");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
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
      <View>
        <Button title="Open library" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={s.image} />}
      </View>
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
  image: {
    width: 200,
    height: 200,
  },
});
