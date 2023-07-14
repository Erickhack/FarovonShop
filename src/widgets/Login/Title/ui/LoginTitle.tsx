import React from "react";
import { Text, View } from "react-native";
import { HeadDesc } from "../../../../entities";

interface IProps {
  children?: React.ReactNode;
}

export const LoginTitle: React.FC<IProps> = (props) => {
  return (
    <View>
      <View></View>
      <View>
        <HeadDesc title="Добро пожаловать">
          Введите свои данные которые {"\n"} указывали при регистрации
        </HeadDesc>
      </View>
    </View>
  );
};
