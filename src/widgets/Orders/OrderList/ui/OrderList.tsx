import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ProductContain } from "../../../../entities";
import { H2 } from "../../../../shared/components/HeadingElements";
import { CancleSVG } from "../../../../shared/assets";

export const OrderList = () => {
  return (
    <ScrollView>
      <ProductContain
        productImage={
          <View>
            <Text>Some Image</Text>
          </View>
        }
      >
        <View>
          <Text>Кофе растворимый Nescafe Classic</Text>
          <View>
            <CancleSVG />
          </View>
        </View>
        <View>
          <H2>17 с</H2>
        </View>
        <View></View>
      </ProductContain>
    </ScrollView>
  );
};
