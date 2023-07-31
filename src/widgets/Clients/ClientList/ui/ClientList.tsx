import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ClientsViewer } from "../../../../features";

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

export const ClientList = () => {
  return (
    <ScrollView>
      <ClientsViewer Infos={Informations} />
    </ScrollView>
  );
};
