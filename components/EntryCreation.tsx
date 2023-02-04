import { useRef, useState, useEffect } from "react";
import {
  Animated,
  Image,
  Keyboard,
  KeyboardAvoidingView,
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

  const [animation] = useState(new Animated.Value(0));
  const [overlayOpacityAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();

    Animated.timing(overlayOpacityAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [200, 0],
        }),
      },
    ],
  };

  const opacityStyle = {
    opacity: overlayOpacityAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  return (
    <Animated.ScrollView style={[styles.overlay, opacityStyle]} keyboardShouldPersistTaps="always">
      <Animated.ScrollView
        style={[styles.container, animatedStyle, { top: 280 }]}
        keyboardShouldPersistTaps="always"
      >
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={{ alignItems: "center", marginBottom: 15 }}>
            <TouchableOpacity
              onPressIn={(e) => Keyboard.dismiss()}
              style={{ width: 70, height: 5, backgroundColor: "white", borderRadius: 5 }}
            ></TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
          >
            <TouchableOpacity style={styles.button} onPress={onCloseButtonPress}>
              <Image source={require("../assets/close.png")} resizeMode="contain" />
            </TouchableOpacity>
            <DatePickerButton setShowDatePickerParent={setShowDatePickerParent} />
          </View>
          <View style={{ marginTop: 20, flexDirection: "row" }}>
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
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.entryButton}>
                <Text style={styles.entryButtonText}>@ Add Category</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.entryButton}>
                <Text style={styles.entryButtonText}># Add Tags</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addEntry}>
              <Image source={require("../assets/add.png")} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          {showDatePicker && <DatePicker />}
        </ScrollView>
      </Animated.ScrollView>
    </Animated.ScrollView>
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
  entryButton: {
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  entryButtonText: {
    color: "white",
  },

  button: {
    padding: 15,
    marginLeft: -15,
  },
  addEntry: {
    padding: 15,
    marginLeft: -15,
  },
});
