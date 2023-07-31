import React from "react";
import { View, StyleSheet } from "react-native";
import { Search } from "../../../../widgets";

const Docs = () => {
  return (
    <View style={style.contain}>
      <View>
        <Search />
      </View>
      <View></View>
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    display: "flex",
    padding: 16,
    height: "100%",
    flex: 1,
    backgroundColor: "white",
    gap: 25,
  },
});

export default Docs;
