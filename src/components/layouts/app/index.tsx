import React from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "./Header/Header";

interface IAppLayoutProps {}

const AppLayout: React.FC<IAppLayoutProps> = (props) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Header />
      </View>
      <View>Main</View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  header: {},
});

export default AppLayout;
