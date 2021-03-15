/* eslint-disable consistent-return */
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeStorageData = async (keyName, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    return await AsyncStorage.setItem(keyName, jsonValue);
  } catch (e) {
    // error reading value
  }
};

const getStorageData = async (keyName) => {
  try {
    const jsonValue = await AsyncStorage.getItem(keyName);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const removeStorageData = async (keyName) => {
  try {
    return await AsyncStorage.removeItem(keyName);
  } catch (e) {
    // remove error
  }
};

export { getStorageData, storeStorageData, removeStorageData };
