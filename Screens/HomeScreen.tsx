import { Button, View } from "react-native";
import ToDetailsButton from "../components/ToDetailsButton";

export default function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Button
        title="Go to Display ❤️"
        onPress={() => navigation.navigate("Display")}
      ></Button>
      <ToDetailsButton />
    </View>
  );
}
