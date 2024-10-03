import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import defaultImage from "../assets/images/flowerDefault.jpg";
import { useFriendProvider } from "../components/FriendProvider";
import generateRandomID from "../components/GenerateRandomID";
import TextColorButton from "../components/TextColorButton";
import { Friend } from "../data";

export default function CreateFriendScreen() {
  const { addFriend } = useFriendProvider();

  // state for form input:
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [likes, setLikes] = useState("");
  const [giftIdeas, seGiftIdeas] = useState("");
  const [image, setImage] = useState("");

  const handleAddFriend = () => {
    const newFriend: Friend = {
      id: generateRandomID(),
      name,
      relation,
      likes: likes.split(",").map((like) => like.trim()), // Convert the likes string into an array
      giftIdea: giftIdeas.split(",").map((gift) => gift.trim()), // Convert the gift ideas string into an array
      image: image ? { uri: image } : defaultImage,
    };

    addFriend(newFriend);
    Alert.alert(newFriend.name + " was added! ✨");
  };

  //TODO: add this to it's own file
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
  //

  return (
    <ScrollView style={s.container}>
      <SafeAreaView>
        <View style={s.headlineTextContainer}>
          <Text style={s.headlineText}>Create a new friend card ✨</Text>
        </View>

        <Text style={s.textTitle}>Name of person</Text>
        <TextInput
          style={s.textInput}
          placeholder="name"
          value={name}
          onChangeText={setName}
        />
        <Text style={s.textTitle}>Relationship</Text>
        <TextInput
          style={s.textInput}
          placeholder="friend, brother ..."
          value={relation}
          onChangeText={setRelation}
        />

        <Text style={s.textTitle}>
          Likes (separate each new thing with a ', ')
        </Text>
        <TextInput
          style={s.textInput}
          placeholder="green socks, cats, pancakes ..."
          value={likes}
          onChangeText={setLikes}
        />

        <Text style={s.textTitle}>
          Gift ideas (separate each new thing with a ' , ')
        </Text>
        <TextInput
          style={s.textInput}
          placeholder="Trip to Liseberg, limited edition frog  ..."
          value={giftIdeas}
          onChangeText={seGiftIdeas}
        />
        <View style={s.imageContainer}>
          <Text style={s.textTitle}>Add a picture (optional)</Text>
          {image && <Image source={{ uri: image }} style={s.image} />}

          <TextColorButton title="OPEN LIBRARY" onPress={pickImage} />
        </View>
        <TextColorButton title="Add" onPress={handleAddFriend} />
      </SafeAreaView>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aae8d8",
    padding: 10,
  },

  headlineTextContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  headlineText: {
    backgroundColor: "#008080",
    color: "white",
    borderRadius: 10,
    fontSize: 20,
    padding: 5,
    margin: 10,
  },

  textTitle: {
    fontSize: 15,
  },

  textInput: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    marginBottom: 5,
    backgroundColor: "white",
  },

  imageContainer: {
    alignItems: "center",
  },

  image: {
    width: 150,
    height: 150,
  },
});
