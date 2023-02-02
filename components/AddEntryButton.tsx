import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import EntryCreation from "./EntryCreation";

interface Props {
  setEntryCreationModeParent: (bool: boolean) => void
}
export default function AddEntry({setEntryCreationModeParent}: Props) {

  const onTouchEnd = (e: any) => {
    setEntryCreationModeParent(true);
  };
  const onSubmitEditing = (e: any) => {
    setEntryCreationModeParent(false);
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
