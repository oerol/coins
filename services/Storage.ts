import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveObject = async (object: any, key: string) => {
  try {
    const jsonData = JSON.stringify(object);
    await AsyncStorage.setItem("@" + key, jsonData);
  } catch (e) {
    console.log("Couldn't write to storage", e);
  }
};

export const saveEntry = async (newEntry: any) => {
  try {
    let entries = await getEntries();
    entries.push(newEntry);

    const jsonData = JSON.stringify(entries);
    await AsyncStorage.setItem("@entries", jsonData);
  } catch (e) {
    console.log("Couldn't write to storage", e);
  }
};

export const getEntries = async () => {
  try {
    return await (getObject("entries"));
  } catch (e) {
    console.log("Couldn't read from storage", e);
  }
};

export const getLastEntries = async (numberOfEntries: number) => {
  try {
    let entries = await getObject("entries");
    let latestEntries = entries.reverse().slice(0, numberOfEntries);
    return latestEntries;
  } catch (e) {
    console.log("Couldn't read from storage", e);
  }
};

export const removeEntries = async () => {
  try {
    const jsonData = JSON.stringify([]);
    AsyncStorage.setItem("@entries", jsonData);
  } catch (e) {
    console.log("Couldn't remove from storage", e);
  }
};

export const getObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem("@" + key);
    return JSON.parse(jsonValue as string);
  } catch (e) {
    console.log("Couldn't read from storage", e);
  }
};
