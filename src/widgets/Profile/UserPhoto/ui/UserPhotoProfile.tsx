import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { H2 } from "../../../../shared/components/HeadingElements";

export const UserPhotoProfile = () => {
  return (
    <View style={styel.contain}>
      <View style={styel.imageContain}>
        <View style={styel.image}>
          <Text>User Image</Text>
        </View>
      </View>
      <View style={styel.firstLastNameContain}>
        <H2>Тошмуродов Холмурод</H2>
        <Text style={styel.secondName}>Мерчендайзер</Text>
      </View>
    </View>
  );
};

const WidthHeight = 100;

const styel = StyleSheet.create({
  contain: {
    alignItems: "center",
    gap: 12,
  },
  secondName: {
    color: "#525E68",
    textAlign: "center",
  },
  image: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContain: {
    width: WidthHeight,
    height: WidthHeight,
    borderRadius: WidthHeight / 2,
    borderWidth: 1,
  },
  firstLastNameContain: {},
});
