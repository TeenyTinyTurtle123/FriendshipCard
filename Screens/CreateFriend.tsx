import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function CreateFriend() {
  const [value, setValue] = useState({
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
    setValue((startValue) => ({
      ...startValue,
      [field]: inputValue, //update only the field (name, relation ...) that has changed
    }));
  };

  function setId() {
    const id = generateRandomID();
    setValue((startValue) => ({
      ...startValue,
      id,
    }));

    console.log("Friend data: " + value.id);
  }

  return (
    <View>
      <Text>Create a new friend card ✨</Text>

      <Text>Name of person:</Text>
      <TextInput
        style={s.textInput}
        onChangeText={(text) => handleInputChange("name", text)}
        value={value.name} //this is to help sync the state change
        placeholder="name"
      />
      <Text>Relationship:</Text>
      <TextInput
        style={s.textInput}
        onChangeText={(text) => handleInputChange("relation", text)}
        value={value.relation}
        placeholder="friend, brother ..."
      />
      <Text>Likes (separate each new thing with a ' , '):</Text>
      <TextInput
        style={s.textInput}
        placeholder="green socks, cats, pancakes ..."
        onChangeText={(text) => handleInputChange("likes", text)}
        value={value.likes}
      />
      <Text>Gift ideas (separate each new thing with a ' , '):</Text>
      <TextInput
        style={s.textInput}
        onChangeText={(text) => handleInputChange("giftIdea", text)}
        value={value.giftIdea}
        placeholder="Trip to Liseberg, limited edition frog  ..."
      />
      <Text>Add a picture (optional)</Text>
      <TextInput placeholder="added in version 2" />
      <Button title="Add" onPress={setId} />
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
