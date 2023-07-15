import React from "react";
import { View, StyleSheet } from "react-native";
import { ProductFIlter } from "../../../../widgets";

interface IProps {
  children?: React.ReactNode;
}

const ProductFilter: React.FC<IProps> = (props) => {
  return (
    <View style={style.contain}>
      <View>
        <ProductFIlter />
      </View>
    </View>
  );
};

export default ProductFilter;

const style = StyleSheet.create({
  contain: {
    backgroundColor: "white",
    flex: 1,
    padding: 16,
  },
});
