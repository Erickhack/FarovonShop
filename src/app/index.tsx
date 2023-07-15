import React from "react";
import { WithProvider } from "./provider";
import { Navigations } from "../pages";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter: require("../shared/assets/fonts/Inter-Regular.otf"),
  });

  return (
    <>
      <Navigations />
    </>
  );
};

export default WithProvider(App);
