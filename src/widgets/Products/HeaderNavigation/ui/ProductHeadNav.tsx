import React from "react";
import { HeaderNavigationContainer } from "../../../../entities";
import { View, StyleSheet, Pressable } from "react-native";
import { FilterSVG } from "../../../../shared/assets";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { H2 } from "../../../../shared/components/HeadingElements";

export const ProductHeadNav: React.FC<NativeStackHeaderProps> = (props) => {
  const handlOnPress = () => {
    props.navigation.push("Filters");
  };

  return (
    <HeaderNavigationContainer>
      <View>
        <H2>Товары</H2>
      </View>
      <View>
        <Pressable onPress={handlOnPress}>
          <FilterSVG />
        </Pressable>
      </View>
    </HeaderNavigationContainer>
  );
};

const style = StyleSheet.create({});
