import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LogIn } from "./Auth/LogIn";
import Products, { ProductFilter } from "./App/Products";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ClientsSVG,
  DocsSVG,
  OrderSVG,
  ProductSVG,
  ProfileSVG,
} from "../shared/assets";
import {
  DocHeaderNav,
  DovsFilterHeader,
  HeaderNavigationAddClient,
  HeaderNavigationClient,
  ProductHeadNav,
  ProfileHeaderNavigation,
  SelectClientHeader,
} from "../widgets";
import { ProductFilterHeader } from "../widgets";
import { Orders, SelectClient } from "./App/Orders";
import Docs, { DocsFilter } from "./App/Docs";
import Clients, { AddClient } from "./App/Clients";
import Profile from "./App/Profile";

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
      <Stack.Screen name="Login">
        {(stackProps: any) => (
          <LogIn drawProps={props} stackProps={stackProps} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const StackProductNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackProducts"
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

const StackOrderNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackOrders"
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StackOrdersSelectClient"
        component={SelectClient}
        options={{
          header: SelectClientHeader,
        }}
      />
    </Stack.Navigator>
  );
};

const StackDocsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackDocs"
        component={Docs}
        options={{
          header: DocHeaderNav,
        }}
      />
      <Stack.Screen
        name="StackDocsFilter"
        component={DocsFilter}
        options={{
          header: DovsFilterHeader,
        }}
      />
    </Stack.Navigator>
  );
};

const StackClientsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackClients"
        component={Clients}
        options={{
          header: HeaderNavigationClient,
        }}
      />
      <Stack.Screen
        name="StackAddClient"
        component={AddClient}
        options={{
          header: HeaderNavigationAddClient,
        }}
      />
    </Stack.Navigator>
  );
};

const StackProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackPrifle"
        component={Profile}
        options={{
          header: ProfileHeaderNavigation,
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
      initialRouteName="TabClients"
    >
      <Tab.Screen
        name="TabProducts"
        component={StackProductNavigation}
        options={({ route }) => {
          return {
            tabBarIcon: ({ focused }) => (
              <ProductSVG color={focused ? "#E42346" : "#91989F"} />
            ),
            title: "Товары",
          };
        }}
      />
      <Tab.Screen
        name="TabOrders"
        component={StackOrderNavigation}
        options={() => {
          return {
            tabBarIcon: ({ focused }) => (
              <OrderSVG fill={focused ? "#E42346" : "#91989F"} />
            ),
            title: "Товары",
          };
        }}
      />
      <Tab.Screen
        name="TabDocs"
        component={StackDocsNavigation}
        options={() => {
          return {
            tabBarIcon: ({ focused }) => (
              <DocsSVG fill={focused ? "#E42346" : "#91989F"} />
            ),
            title: "Документы",
          };
        }}
      />
      <Tab.Screen
        name="TabClients"
        component={StackClientsNavigation}
        options={() => {
          return {
            tabBarIcon: ({ focused }) => (
              <ClientsSVG fill={focused ? "#E42346" : "#91989F"} />
            ),
            title: "Документы",
          };
        }}
      />
      <Tab.Screen
        name="TabProfile"
        component={StackProfileNavigation}
        options={() => {
          return {
            tabBarIcon: ({ focused }) => (
              <ProfileSVG fill={focused ? "#E42346" : "#91989F"} />
            ),
            title: "Профиль",
          };
        }}
      />
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
