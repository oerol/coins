import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { useKeyboard } from "./Keyboard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const entryCreationHeight = 250;

export default function EntryCreation() {
  const keyboardHeight = useKeyboard();

  return (
    <View style={styles.overlay}>
      <Text style={styles.text}></Text>
      <View
        style={[styles.container, { top: windowHeight - keyboardHeight - entryCreationHeight }]}
      ></View>
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
  },
  text: {},
});
