import React from "react";
import { HeaderNavigationContainer } from "../../../../entities";
import { Pressable, Text, View } from "react-native";
import { H2 } from "../../../../shared/components/HeadingElements";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { RightArrow } from "../../../../shared/assets";

export const ProductFilterHeader: React.FC<NativeStackHeaderProps> = (
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
