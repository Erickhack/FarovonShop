import React from "react";
import { HeaderNavigationContainer } from "../../../../entities";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { H2 } from "../../../../shared/components/HeadingElements";
import { CirclePluseSVG16 } from "../../../../shared/assets";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export const HeaderNavigationClient: React.FC<NativeStackHeaderProps> = (
  props
) => {
  const handlePress = () => {
    props.navigation.navigate("StackAddClient");
  };

  return (
    <HeaderNavigationContainer>
      <View>
        <H2>Клиенты</H2>
      </View>
      <View></View>
      <View>
        <Pressable style={style.addClientContain} onPress={handlePress}>
          <View>
            <CirclePluseSVG16 />
          </View>
          <View>
            <Text>Добавить</Text>
          </View>
        </Pressable>
      </View>
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
