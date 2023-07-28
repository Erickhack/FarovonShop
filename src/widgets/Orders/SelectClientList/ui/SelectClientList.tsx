import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SelectClientContain } from "../../../../entities/Orders/Clients";

export const SelectClientList = () => {
  return (
    <View style={style.contain}>
      <SelectClientContain focused>
        <Text>Some Text</Text>
        <Text>Some Text</Text>
        <Text>Some Text</Text>
      </SelectClientContain>
      <SelectClientContain focused={false}>
        <Text>Some Text</Text>
        <Text>Some Text</Text>
        <Text>Some Text</Text>
      </SelectClientContain>
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    display: "flex",
    gap: 12,
  },
});
