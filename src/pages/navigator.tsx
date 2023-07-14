import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LogIn } from "./Auth/LogIn";
import Products from "./App/Products";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProductSVG } from "../shared/assets";
import { ProductHeadNav } from "../widgets";
import ProductFilter from "./App/Products/ui/ProductFilter";
import { ProductFilterHeader } from "../widgets/Products/ProductFilter/ui/ProductFilterHeader";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const StackAuthNavigator = (props: any) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={(stackProps: any) => (
          <LogIn drawProps={props} stackProps={stackProps} />
        )}
      />
    </Stack.Navigator>
  );
};

const StackProductNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          header: ProductHeadNav,
        }}
      />
      <Stack.Screen
        name="Filters"
        component={ProductFilter}
        options={{
          header: ProductFilterHeader,
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Products"
        component={StackProductNavigation}
        options={({ route }) => {
          return {
            tabBarIcon: ({ focused }) => (
              <ProductSVG color={focused ? "#E42346" : "#91989F"} />
            ),
            title: "Товары",
            tabBarStyle: {},
          };
        }}
      />
      <Tab.Screen name="Orders" component={Products} />
      <Tab.Screen name="Documents" component={Products} />
      <Tab.Screen name="Clients" component={Products} />
      <Tab.Screen name="Profiles" component={Products} />
    </Tab.Navigator>
  );
};

export const Navigations = () => {
  return (
    <Drawer.Navigator
      initialRouteName="App"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Auth" component={StackAuthNavigator} />
      <Drawer.Screen name="App" component={TabNavigation} />
    </Drawer.Navigator>
  );
};
