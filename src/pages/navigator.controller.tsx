import {
  DrawerNavigationEventMap,
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import {
  DrawerNavigationState,
  ParamListBase,
  RouteConfig,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LogIn } from "./navigator.list";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

interface IProps {
  DrawerScreen: <RouteName extends string>(
    _: RouteConfig<
      ParamListBase,
      RouteName,
      DrawerNavigationState<ParamListBase>,
      DrawerNavigationOptions,
      DrawerNavigationEventMap
    >
  ) => null;
  component: (props: any) => JSX.Element;
}

const StackAuthNavigator = (props: any) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login">
        {(stackProps: any) => (
          <LogIn drawProps={props} stackProps={stackProps} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export const NavigatorController: React.FC<IProps> = (props) => {
  console.log(props);

  return <Drawer.Screen name="Auth" component={StackAuthNavigator} />;
};
