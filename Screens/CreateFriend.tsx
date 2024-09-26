import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FriendCard, MockFriendsData } from "../data";

export default function CreateFriend() {
  const [friendValue, setFriendValue] = useState({
    id: 0,
    name: "",
    relation: "",
    likes: "", //array?
    giftIdea: "", //array
    image: "",
  });

  //   a silly little random number function
  // takes the milliseconds + a random generated number and return a almost uniq number each time
  function generateRandomID() {
    const timeComponent = Date.now();
    const randomComponent = Math.floor(Math.random() * 100);
    return timeComponent + randomComponent;
  }
  // handles input changes
  const handleInputChange = (field: string, inputValue: string) => {
    setFriendValue((startValue) => ({
      ...startValue,
      [field]: inputValue, //update only the field (name, relation ...) that has changed
    }));
  };

  function handleAddFriend() {
    const id = generateRandomID();

    const newFriend: FriendCard = {
      ...friendValue,
      id,
      likes: friendValue.likes.split(",").map((like) => like.trim()), // convert string to array
      giftIdea: friendValue.giftIdea.split(",").map((gift) => gift.trim()), // convert string to array
    };

    MockFriendsData.push(newFriend);

    console.log("Friend data: " + newFriend.name);

    console.log(MockFriendsData);
  }

  return (
    <View>
      <Text>Create a new friend card ✨</Text>

      <Text>Name of person:</Text>
      <TextInput
        style={s.textInput}
        onChangeText={(text) => handleInputChange("name", text)}
        value={friendValue.name} //this is to help sync the state change
        placeholder="name"
      />
      <Text>Relationship:</Text>
      <TextInput
        style={s.textInput}
        onChangeText={(text) => handleInputChange("relation", text)}
        value={friendValue.relation}
        placeholder="friend, brother ..."
      />
      <Text>Likes (separate each new thing with a ', '):</Text>
      <TextInput
        style={s.textInput}
        placeholder="green socks, cats, pancakes ..."
        onChangeText={(text) => handleInputChange("likes", text)}
        value={friendValue.likes}
      />
      <Text>Gift ideas (separate each new thing with a ' , '):</Text>
      <TextInput
        style={s.textInput}
        onChangeText={(text) => handleInputChange("giftIdea", text)}
        value={friendValue.giftIdea}
        placeholder="Trip to Liseberg, limited edition frog  ..."
      />
      <Text>Add a picture (optional)</Text>
      <TextInput placeholder="added in version 2" />
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
