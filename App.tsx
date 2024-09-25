import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import RootStackNavigator from "./Navigators/RootStack";

export function resolveImage(imageName: string) {
  switch (imageName) {
    case "pexels-javon-swaby-197616-1697912.jpg":
      return require("./assets/images/pexels-javon-swaby-197616-1697912.jpg");
    case "pexels-luizclas-170497-1848565.jpg":
      return require("./assets/images/pexels-luizclas-170497-1848565.jpg");
    case "pexels-olly-837358.jpg":
      return require("./assets/images/pexels-olly-837358.jpg");
    case "pexels-trinitykubassek-445109.jpg":
      return require("./assets/images/pexels-trinitykubassek-445109.jpg");
    default:
      return require("./assets/images/default.jpg"); // fallback image if needed
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
