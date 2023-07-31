import React from "react";
import { View, StyleSheet } from "react-native";
import { ClientList } from "../../../../widgets";

export const Clients = () => {
  return (
    <View style={style.contain}>
      <ClientList />
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});

export default Clients;
