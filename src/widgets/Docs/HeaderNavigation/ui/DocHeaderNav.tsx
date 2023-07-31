import React from "react";
import { Pressable, View } from "react-native";
import { HeaderNavigationContainer } from "../../../../entities";
import { H2 } from "../../../../shared/components/HeadingElements";
import { FilterSVG } from "../../../../shared/assets";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export const DocHeaderNav: React.FC<NativeStackHeaderProps> = (props) => {
  const handlePress = () => {
    props.navigation.navigate("StackDocsFilter")
  };

  return (
    <HeaderNavigationContainer>
      <View>
        <H2>Документы</H2>
      </View>
      <View>
        <Pressable onPress={handlePress}>
          <FilterSVG />
        </Pressable>
      </View>
    </HeaderNavigationContainer>
  );
};
