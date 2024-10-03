import * as ImagePicker from "expo-image-picker";

// not tested yet TODO:

export const pickImage = async (setImage: (uri: string) => void) => {
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
