import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveObject = async (object: any, key: string) => {
  try {
    const jsonData = JSON.stringify(object);
    await AsyncStorage.setItem("@" + key, jsonData);
  } catch (e) {
    console.log("Couldn't write to storage", e);
  }
};

export const getObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem("@" + key);
    return JSON.parse((jsonValue) as string);
  } catch (e) {
    console.log("Couldn't read from storage", e);
  }
};


