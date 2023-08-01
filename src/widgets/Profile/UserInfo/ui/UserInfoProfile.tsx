import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const UserInfoProfile = () => {
  return (
    <View style={style.contain}>
      <View style={style.InfoUserViewContain}>
        <Text style={style.InfouserViewTitle}>Имя</Text>
        <Text style={style.InfouserView}>Холмурод</Text>
      </View>
      <View style={style.InfoUserViewContain}>
        <Text style={style.InfouserViewTitle}>Фамилия</Text>
        <Text style={style.InfouserView}>Тошмуродов</Text>
      </View>
      <View style={style.InfoUserViewContain}>
        <Text style={style.InfouserViewTitle}>Телефон</Text>
        <Text style={style.InfouserView}>+992672352362</Text>
      </View>
      <View style={style.InfoUserViewContain}>
        <Text style={style.InfouserViewTitle}>Позиция</Text>
        <Text style={style.InfouserView}>Мерчендайзер</Text>
      </View>
      <View style={style.InfoUserViewContain}>
        <Text style={style.InfouserViewTitle}>Адрес</Text>
        <Text style={style.InfouserView}>Варашлобод</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    width: "100%",
  },
  InfoUserViewContain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18,
  },
  InfouserViewTitle: {},
  InfouserView: {},
});
