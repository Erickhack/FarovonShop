import React from "react";
import { HeaderNavigationContainer } from "../../../../entities";
import { View, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { H2 } from "../../../../shared/components/HeadingElements";

export const ProfileHeaderNavigation: React.FC<NativeStackHeaderProps> = (props) => {
  return (
    <HeaderNavigationContainer>
      <View>
        <H2>Мой профиль</H2>
      </View>
      <View></View>
      <View></View>
    </HeaderNavigationContainer>
  );
};

const style = StyleSheet.create({});
