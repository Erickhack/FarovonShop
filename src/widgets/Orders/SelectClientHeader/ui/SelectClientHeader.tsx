import React from "react";
import { HeaderNavigationContainer } from "../../../../entities";
import { Pressable, Text, View } from "react-native";
import { RightArrow } from "../../../../shared/assets";
import { H2 } from "../../../../shared/components/HeadingElements";

export const SelectClientHeader = () => {
  const handleOnPress = () => {};

  return (
    <HeaderNavigationContainer>
      <View>
        <Pressable onPress={handleOnPress}>
          <RightArrow />
        </Pressable>
      </View>
      <View>
        <H2>Выбор клиента</H2>
      </View>
      <View></View>
    </HeaderNavigationContainer>
  );
};
