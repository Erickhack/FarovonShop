import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { ProductContain } from "../../../../entities";
import { H2 } from "../../../../shared/components/HeadingElements";
import { CancleSVG, MinuseSVG } from "../../../../shared/assets";
import PluseSVG from "../../../../shared/assets/svgs/others/PluseSVG/PluseSVG";

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
        <View style={style.textInfoContain}>
          <View style={style.textInfo}>
            <Text>Кофе растворимый Nescafe Classic</Text>
          </View>
          <View>
            <CancleSVG />
          </View>
        </View>
        <View>
          <H2>17 с</H2>
        </View>
        <View style={style.actionContain}>
          <View>
            <MinuseSVG />
          </View>
          <View>
            <H2>6</H2>
          </View>
          <View>
            <PluseSVG />
          </View>
        </View>
      </ProductContain>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  textInfoContain: {
    display: "flex",
    flexDirection: "row",
  },
  textInfo: {
    flex: 1,
  },
  actionContain: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
