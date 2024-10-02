import { Pressable, StyleSheet, Text, View } from "react-native";

interface TextColorButtonProp {
  onPress: () => void;
  title: string;
  bgColor?: string;
}

export default function TextColorButton({
  onPress,
  title,
  bgColor = "#008080", //default color
}: TextColorButtonProp) {
  return (
    <Pressable onPress={onPress}>
      <View style={[s.container, { backgroundColor: bgColor }]}>
        <Text style={s.inputText}>{title}</Text>
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  inputText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
