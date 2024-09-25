import { Button, View } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Button
        title="Go to Display ❤️"
        onPress={() => navigation.navigate("Display")}
      ></Button>
    </View>
  );
}
