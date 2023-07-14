import React from "react";
import { View, StyleSheet } from "react-native";
import {
  ProductFilterList,
  ProductList,
  ProductsSearch,
} from "../../../../widgets";

const Products: React.FC<any> = (props) => {
  return (
    <View>
      <View style={style.headerContain}>
        <View>
          <ProductsSearch />
        </View>
        <View>
          <ProductFilterList />
        </View>
      </View>
      <View style={style.productList}>
        <ProductList />
      </View>
    </View>
  );
};

export default Products;

const style = StyleSheet.create({
  headerContain: {
    padding: 16,
    backgroundColor: "white",
    display: "flex",
    gap: 16,
  },
  productList: {
    padding: 16,
  },
});
