import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeDataString = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem("my-key", value);
  } catch (e) {
    // saving error
  }
};

export const storeDataObject = async (
  key: string,
  value: { [name: string]: any }
) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("my-key", jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getDataString = async () => {
  try {
    const value = await AsyncStorage.getItem("my-key");
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

export const getDataObject = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("my-key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
