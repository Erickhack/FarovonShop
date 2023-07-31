import React from "react";
import { HeaderNavigationContainer } from "../../../../entities";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { H2 } from "../../../../shared/components/HeadingElements";
import { CirclePluseSVG16, RightArrow } from "../../../../shared/assets";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export const HeaderNavigationAddClient: React.FC<NativeStackHeaderProps> = (
  props
) => {
  const handlePress = () => {
    props.navigation.goBack();
  };

  return (
    <HeaderNavigationContainer>
      <View>
        <Pressable onPress={handlePress}>
          <RightArrow />
        </Pressable>
      </View>
      <View>
        <H2>Добавить клиента</H2>
      </View>
      <View></View>
    </HeaderNavigationContainer>
  );
};

const style = StyleSheet.create({
  addClientContain: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});
