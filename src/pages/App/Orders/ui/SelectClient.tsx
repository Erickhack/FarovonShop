import React from "react";
import { View, StyleSheet } from "react-native";
import { Search, SelectClientList } from "../../../../widgets";

const SelectClient = () => {
  return (
    <View style={style.selectClient}>
      <View style={style.contain}>
        <View style={style.header}>
          <Search />
        </View>
        <View style={style.main}>
          <SelectClientList />
        </View>
        <View style={style.footer}></View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  selectClient: {},
  contain: {},
  header: {
    padding: 16,
    backgroundColor: "white",
  },
  main: {
    padding: 16,
  },
  footer: {},
});

export default SelectClient;
