import { StyleSheet, Text, TextInput, View } from "react-native";
import { useKeyboard } from "./Keyboard";
import { useState } from "react";

export default function AddEntry() {
  const [entryCreationMode, setEntryCreationMode] = useState(false);
  const keyboardHeight = useKeyboard();

  const onTouchEnd = (e: any) => {
    setEntryCreationMode(true);
  };
  const onSubmitEditing = (e: any) => {
    setEntryCreationMode(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.text}
          onTouchEnd={onTouchEnd}
          onSubmitEditing={onSubmitEditing}
          placeholder="I spent money on.."
          keyboardType="default"
        />
      </View>
      {entryCreationMode && <Text style={{ marginTop: -500 }}>hello</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#C898F8",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
