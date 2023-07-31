import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SelectClientViewer } from "../../../../features";

const Informations = [
  {
    user: "Тошмат Салимов",
    phoneNumber: "+992 97283 76834",
    location: "Кучаи Карабоев нохия Сино",
  },
  {
    user: "Тошмат Салимов",
    phoneNumber: "+992 97283 76834",
    location: "Кучаи Карабоев нохия Сино",
  },
  {
    user: "Тошмат Салимов",
    phoneNumber: "+992 97283 76834",
    location: "Кучаи Карабоев нохия Сино",
  },
  {
    user: "Тошмат Салимов",
    phoneNumber: "+992 97283 76834",
    location: "Кучаи Карабоев нохия Сино",
  },
];

export const SelectClientList = () => {
  return (
    <ScrollView>
      <SelectClientViewer Infos={Informations} />
    </ScrollView>
  );
};

const style = StyleSheet.create({});
