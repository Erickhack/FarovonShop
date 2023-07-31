import React from "react";
import { Pressable, Text, View } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { HeaderNavigationContainer } from "../../../../../entities";
import { RightArrow } from "../../../../../shared/assets";
import { H2 } from "../../../../../shared/components/HeadingElements";

export const DovsFilterHeader: React.FC<NativeStackHeaderProps> = (
  props
) => {
  const handlOnPress = () => {
    props.navigation.goBack();
  };

  return (
    <HeaderNavigationContainer>
      <View>
        <Pressable onPress={handlOnPress}>
          <RightArrow />
        </Pressable>
      </View>
      <View>
        <H2>Фильтры</H2>
      </View>
      <View>
        <Pressable>
          <Text>Сбросить</Text>
        </Pressable>
      </View>
    </HeaderNavigationContainer>
  );
};
