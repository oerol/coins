import { useRef, useState } from "react";
import {
  Image,
  Keyboard,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { Dimensions } from "react-native";
import { useKeyboard } from "./Keyboard";
import { settings } from "../config";
import DatePicker from "./DatePicker";
import DatePickerButton from "./DatePickerButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const entryCreationHeight = 200;

export default function EntryCreation({ setEntryCreationModeParent }: IEntryCreation) {
  const keyboardHeight = useKeyboard();

  const secondTextInput = useRef<TextInput>(null);

  const [amountCursorPositon, setAmountCursorPositon] = useState(0);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const setShowDatePickerParent = (bool: boolean) => {
    setShowDatePicker(bool);
  };

  const onCloseButtonPress = (e: any) => {
    setEntryCreationModeParent(false);
    Keyboard.dismiss();
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.overlay}>
      <View
        style={[styles.container, { top: 280 }]}
      >
        <View style={{ alignItems: "center", marginBottom: 15 }}>
          <View style={{ width: 70, height: 5, backgroundColor: "white", borderRadius: 5 }}></View>
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <TouchableOpacity style={styles.button} onPress={onCloseButtonPress}>
            <Image source={require("../assets/close.png")} resizeMode="contain" />
          </TouchableOpacity>
          <DatePickerButton setShowDatePickerParent={setShowDatePickerParent}/>
        </View>
        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <Text style={styles.text}>I spent</Text>
          <TextInput
            style={styles.inputText}
            placeholder="0,00"
            placeholderTextColor="white"
            keyboardType="numbers-and-punctuation"
            onLayout={(e) => e.target.focus()}
            onSubmitEditing={(e) => secondTextInput.current!.focus()}
          />
          <Text style={[styles.inputText, { marginRight: 5 }]}>{settings.currency}</Text>
          <Text style={styles.text}>on:</Text>
          <TextInput
            ref={secondTextInput}
            style={[styles.inputText, { marginRight: 5, width: 150 }]}
            placeholder=""
            placeholderTextColor="white"
            keyboardType="default"
          />
        </View>
      {showDatePicker && <DatePicker/>}
      </View>
    </ScrollView>
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
    height: windowHeight - entryCreationHeight,
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
    marginRight: 5,
  },
  button: {padding: 15, marginLeft: -15},
});
