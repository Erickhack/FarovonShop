import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { InputTextContainer } from "../../../../entities";
import { Button } from "react-native";
import { InputText } from "../../../../features";

const IconUser = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.12 13.53C12.1 13.53 12.07 13.53 12.05 13.53C12.02 13.53 11.98 13.53 11.95 13.53C9.67998 13.46 7.97998 11.69 7.97998 9.50998C7.97998 7.28998 9.78998 5.47998 12.01 5.47998C14.23 5.47998 16.04 7.28998 16.04 9.50998C16.03 11.7 14.32 13.46 12.15 13.53C12.13 13.53 12.13 13.53 12.12 13.53ZM12 6.96998C10.6 6.96998 9.46998 8.10998 9.46998 9.49998C9.46998 10.87 10.54 11.98 11.9 12.03C11.93 12.02 12.03 12.02 12.13 12.03C13.47 11.96 14.52 10.86 14.53 9.49998C14.53 8.10998 13.4 6.96998 12 6.96998Z"
      fill="#4D6373"
    />
    <path
      d="M12.0001 22.7501C9.31008 22.7501 6.74008 21.7501 4.75008 19.9301C4.57008 19.7701 4.49008 19.5301 4.51008 19.3001C4.64008 18.1101 5.38008 17.0001 6.61008 16.1801C9.59008 14.2001 14.4201 14.2001 17.3901 16.1801C18.6201 17.0101 19.3601 18.1101 19.4901 19.3001C19.5201 19.5401 19.4301 19.7701 19.2501 19.9301C17.2601 21.7501 14.6901 22.7501 12.0001 22.7501ZM6.08008 19.1001C7.74008 20.4901 9.83008 21.2501 12.0001 21.2501C14.1701 21.2501 16.2601 20.4901 17.9201 19.1001C17.7401 18.4901 17.2601 17.9001 16.5501 17.4201C14.0901 15.7801 9.92008 15.7801 7.44008 17.4201C6.73008 17.9001 6.26008 18.4901 6.08008 19.1001Z"
      fill="#4D6373"
    />
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
      fill="#4D6373"
    />
  </svg>
);

const IconKey = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.17989 22.7499C6.07989 22.7499 5.96989 22.7399 5.87989 22.7299L3.70989 22.4299C2.66989 22.2899 1.72989 21.3599 1.56989 20.2999L1.26989 18.1099C1.16989 17.4099 1.46989 16.4999 1.96989 15.9899L6.35989 11.5999C5.64989 8.75992 6.46989 5.75992 8.55989 3.68992C11.7999 0.459923 17.0699 0.449923 20.3199 3.68992C21.8899 5.25992 22.7499 7.34992 22.7499 9.56992C22.7499 11.7899 21.8899 13.8799 20.3199 15.4499C18.2199 17.5299 15.2299 18.3499 12.4099 17.6299L8.00989 22.0199C7.58989 22.4599 6.83989 22.7499 6.17989 22.7499ZM14.4299 2.75992C12.6799 2.75992 10.9399 3.41992 9.60989 4.74992C7.80989 6.53992 7.15989 9.15992 7.90989 11.5999C7.98989 11.8699 7.91989 12.1499 7.71989 12.3499L3.01989 17.0499C2.84989 17.2199 2.70989 17.6599 2.73989 17.8899L3.03989 20.0799C3.09989 20.4599 3.50989 20.8899 3.88989 20.9399L6.06989 21.2399C6.30989 21.2799 6.74989 21.1399 6.91989 20.9699L11.6399 16.2599C11.8399 16.0599 12.1299 15.9999 12.3899 16.0799C14.7999 16.8399 17.4299 16.1899 19.2299 14.3899C20.5099 13.1099 21.2199 11.3899 21.2199 9.56992C21.2199 7.73992 20.5099 6.02992 19.2299 4.74992C17.9299 3.42992 16.1799 2.75992 14.4299 2.75992Z"
      fill="#4D6373"
    />
    <path
      d="M9.19008 20.5399C9.00008 20.5399 8.81008 20.4699 8.66008 20.3199L6.36008 18.0199C6.07008 17.7299 6.07008 17.2499 6.36008 16.9599C6.65008 16.6699 7.13008 16.6699 7.42008 16.9599L9.72008 19.2599C10.0101 19.5499 10.0101 20.0299 9.72008 20.3199C9.57008 20.4699 9.38008 20.5399 9.19008 20.5399Z"
      fill="#4D6373"
    />
    <path
      d="M14.5 11.75C13.26 11.75 12.25 10.74 12.25 9.5C12.25 8.26 13.26 7.25 14.5 7.25C15.74 7.25 16.75 8.26 16.75 9.5C16.75 10.74 15.74 11.75 14.5 11.75ZM14.5 8.75C14.09 8.75 13.75 9.09 13.75 9.5C13.75 9.91 14.09 10.25 14.5 10.25C14.91 10.25 15.25 9.91 15.25 9.5C15.25 9.09 14.91 8.75 14.5 8.75Z"
      fill="#4D6373"
    />
  </svg>
);

export const LoginForm = () => {
  return (
    <View>
      <View>
        <View>
          <View>
            <Text>Логин</Text>
          </View>
          <View>
            <InputTextContainer icon={IconUser}>
              <InputText placeholder="Введите ваш логин" />
            </InputTextContainer>
          </View>
        </View>
        <View>
          <View>
            <Text>Пароль</Text>
          </View>
          <View>
            <InputTextContainer icon={IconKey}>
              <InputText placeholder="Введите ваш пароль" />
            </InputTextContainer>
          </View>
        </View>
      </View>
      <View style={styles.containerBtnForm}>
        <Button title="Войти" color="#032E4D" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBtnForm: {
    borderRadius: 5,
  },
});
