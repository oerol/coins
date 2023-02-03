import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";
import { useKeyboard } from "./Keyboard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const entryCreationHeight = 250;

export default function EntryCreation({ setEntryCreationModeParent }: IEntryCreation) {
  const keyboardHeight = useKeyboard();

  const onCloseButtonPress = (e: any) => {
    setEntryCreationModeParent(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.overlay}>
      <Text style={styles.text}></Text>
      <View
        style={[styles.container, { top: windowHeight - keyboardHeight - entryCreationHeight }]}
      >
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <View style={{ width: 70, height: 5, backgroundColor: "white", borderRadius: 5 }}></View>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={onCloseButtonPress}>
          <Image source={require("../assets/close.png")} resizeMode="contain" />
        </TouchableOpacity>
        <View style={{ marginTop: 30, flexDirection: "row"}}>
          <Text style={styles.entryInputText}>I spent</Text>
          <TextInput
            style={{ color: "white", fontSize: 20, fontWeight: "bold", marginRight: 5 }}
            placeholder="0,00€"
            placeholderTextColor= "white"
            keyboardType="numeric"
          />
          <Text style={styles.entryInputText}>on</Text>
          <TextInput
            style={{ color: "white", fontSize: 20, fontWeight: "bold", marginRight: 5 }}
            placeholder="Shoes"
            placeholderTextColor= "white"
            keyboardType="default"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  container: {
    position: "absolute",
    width: windowWidth,
    height: entryCreationHeight,
    backgroundColor: "#281340",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {},
  entryInputText: {
    color: "white",
    fontSize: 20,
    marginRight: 5
  },
  closeButton: {},
});
