import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { LogIn } from "./Auth/LogIn";

const Stack = createNativeStackNavigator();

export const Navigations = () => {
  const navigation = useNavigation();

  React.useEffect(() => {}, []);

  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={LogIn} />
      </Stack.Navigator>
    </>
  );
};
