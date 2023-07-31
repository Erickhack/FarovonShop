import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AddClientForm } from "../../../../widgets";
import { H1 } from "../../../../shared/components/HeadingElements";

export const AddClient = () => {
  const handleAddClient = () => {};

  return (
    <View style={style.AddClient}>
      <View style={style.contain}>
        <View style={style.info}>
          <View>
            <H1>Новый клиент</H1>
          </View>
          <View>
            <Text>
              Для добавление нового клиента {"\n"} заполните все данные поля
            </Text>
          </View>
        </View>
        <AddClientForm onAddClient={handleAddClient} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  AddClient: {
    padding: 16,
    height: "100%",
  },
  contain: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddClient;
