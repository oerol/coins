import { useRef, useState } from "react";
import { Image, Keyboard, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";
import { useKeyboard } from "./Keyboard";
import { settings } from "../config";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const entryCreationHeight = 250;

export default function EntryCreation({ setEntryCreationModeParent }: IEntryCreation) {
  const keyboardHeight = useKeyboard();

  const secondTextInput = useRef<TextInput>(null);

  const [amountCursorPositon, setAmountCursorPositon] = useState(0)

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
          <Text style={styles.text}>I spent</Text>
          <TextInput
            style={styles.inputText}
            placeholder="0,00"
            placeholderTextColor= "white"
            keyboardType="numbers-and-punctuation"
            onLayout={(e) => e.target.focus()}
            onSubmitEditing={(e) => secondTextInput.current!.focus()}
          />
          <Text style={[styles.inputText, {marginRight: 5}]}>{settings.currency}</Text>
          <Text style={styles.text}>on:</Text>
          <TextInput
            ref={secondTextInput}
            style={[styles.inputText, {marginRight: 5}]}
            placeholder=""
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
  inputText: { color: "white", fontSize: 20, fontWeight: "bold" },
  text: {
    color: "white",
    fontSize: 20,
    marginRight: 5
  },
  closeButton: {},
});
