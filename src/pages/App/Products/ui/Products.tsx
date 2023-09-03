import React from "react";
import { View, StyleSheet } from "react-native";
import { ProductFilterList, ProductList, Search } from "../../../../widgets";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../../../../shared/hooks";
import { ProductService } from "../api/Products";

const Products: React.FC<any> = (props) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(ProductService.GetAllProducts());
  }, []);

  return (
    <View>
      <View style={style.headerContain}>
        <View>
          <Search />
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
