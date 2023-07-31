import React from "react";
import { View, StyleSheet } from "react-native";
import { DocsFilterList } from "../../../../widgets";

export const DocsFilter = () => {
  return (
    <View style={style.contain}>
      <DocsFilterList />
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    padding: 16,
    backgroundColor: "white",
    height: "100%",
    flex: 1,
  },
  docsFilter: {},
});

export default DocsFilter;
