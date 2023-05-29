import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AppLayout from "./components/layouts/app";

export default function IndexApp() {
  return (
    <View>
      <AppLayout />
      <StatusBar style="auto" />
    </View>
  );
}
