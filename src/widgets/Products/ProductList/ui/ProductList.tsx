import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ProductContain } from "../../../../entities";
import { H2 } from "../../../../shared/components/HeadingElements";
import { CirculeAddSVG } from "../../../../shared/assets";
import { useAppSelector } from "../../../../shared/hooks";

export const ProductList: React.FC = () => {
  const { data } = useAppSelector((store) => store.Products);

  return (
    <View style={style.contain}>
      <ScrollView>
        <View style={style.scrollViewContain}>
          {data.products?.map((product, index) => (
            <ProductContain
              key={`${index}-${product.id}`}
              productImage={
                <View style={style.imageContain}>
                  <Image
                    style={style.image}
                    source={{
                      uri: product.images[0].path,
                    }}
                  />
                </View>
              }
            >
              <View>
                <Text>{product.shortDescription}</Text>
              </View>
              <View style={style.actionContain}>
                <H2>
                  {/* {product.value} {product.currency} */}
                  {100} {"Сомони"}
                </H2>
                <View>
                  <CirculeAddSVG />
                </View>
              </View>
            </ProductContain>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    height: "87%",
  },
  scrollViewContain: {
    flex: 1,
    gap: 16,
  },
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
