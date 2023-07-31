import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Search, SelectClientList } from "../../../../widgets";

const SelectClient = () => {
  const handlePress = () => {};

  return (
    <View style={style.contain}>
      <View style={style.header}>
        <Search />
      </View>
      <View style={style.main}>
        <SelectClientList />
      </View>
      <View style={style.footer}>
        <View style={style.containerBtnForm}>
          <Button
            title="Оформить заказ"
            color="#032E4D"
            onPress={handlePress}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    height: "100%",
  },
  header: {
    padding: 16,
    backgroundColor: "white",
  },
  main: {
    padding: 16,
    flex: 1,
  },
  footer: {},
  containerBtnForm: {},
});

export default SelectClient;
