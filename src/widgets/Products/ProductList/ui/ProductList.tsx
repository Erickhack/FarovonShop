import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ProductContain } from "../../../../entities";
import { H2 } from "../../../../shared/components/HeadingElements";
import { CirculeAddSVG } from "../../../../shared/assets";

export const ProductList: React.FC = () => {
  return (
    <ScrollView>
      <ProductContain
        productImage={
          <View style={style.imageContain}>
            <Image
              style={style.image}
              source={{
                uri: "https://picsum.photos/seed/o4wCgFG/640/480",
              }}
            />
          </View>
        }
      >
        <View>
          <Text>
            Молоко пастеризованное отборное 3,4%-4,5% Простоквашино 0,93л
          </Text>
        </View>
        <View style={style.actionContain}>
          <H2>8 с</H2>
          <View>
            <CirculeAddSVG />
          </View>
        </View>
      </ProductContain>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  actionContain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContain: {
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
  },
});
