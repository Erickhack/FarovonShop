import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { View } from "react-native";

export const WithNavigate = (component: () => React.ReactNode) => () => {
  return <NavigationContainer>{component()}</NavigationContainer>;
};
