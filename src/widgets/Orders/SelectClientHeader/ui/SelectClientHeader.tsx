import React from "react";
import { HeaderNavigationContainer } from "../../../../entities";
import { Pressable, Text, View } from "react-native";
import { RightArrow } from "../../../../shared/assets";
import { H2 } from "../../../../shared/components/HeadingElements";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export const SelectClientHeader: React.FC<NativeStackHeaderProps> = (props) => {
  const handleOnPress = () => {
    props.navigation.goBack();
  };

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
