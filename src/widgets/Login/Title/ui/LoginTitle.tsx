import React from "react";
import { View, StyleSheet } from "react-native";
import { HeadDesc } from "../../../../entities";

interface IProps {
  children?: React.ReactNode;
}

const IconLogoProduct = () => (
  <svg
    width="84"
    height="84"
    viewBox="0 0 84 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="84" height="84" rx="5.91238" fill="#E42346" />
    <path
      d="M25.6665 46.6689V10.5H49.353V16.7412H33.2362V26.4414H47.9494V32.432H33.2362V46.6689H25.6665Z"
      fill="white"
    />
    <path
      d="M37.3286 73.5044V37.3354H51.8664C59.4862 37.3354 64.5744 42.2482 64.5744 49.6925V49.7427C64.5744 57.187 59.4862 62.0998 51.8664 62.0998H44.8983V73.5044H37.3286ZM50.0116 43.326H44.8983V56.1844H50.0116C54.3478 56.1844 56.9045 53.8784 56.9045 49.7677V49.7176C56.9045 45.6069 54.3478 43.326 50.0116 43.326Z"
      fill="white"
    />
  </svg>
);

export const LoginTitle: React.FC<IProps> = (props) => {
  return (
    <View>
      <View style={style.IconContain}>
        <IconLogoProduct />
      </View>
      <View>
        <HeadDesc title="Добро пожаловать">
          Введите свои данные которые {"\n"} указывали при регистрации
        </HeadDesc>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  IconContain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 34,
  },
});
