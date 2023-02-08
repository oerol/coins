import { useRef, useState, useEffect } from "react";
import {
  Animated,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Dimensions } from "react-native";
import { useKeyboard } from "./Keyboard";
import { settings } from "../config";
import DatePicker from "./DatePicker";
import DatePickerButton from "./DatePickerButton";
import CategorySelection from "./CategorySelection";
import { saveEntry, saveObject } from "../services/Storage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const entryCreationHeight = 200;

export default function EntryCreation({ setEntryCreationModeParent }: IEntryCreation) {
  const keyboardHeight = useKeyboard();

  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCategorySelection, setShowCategorySelection] = useState(false);

  const titleInputRef = useRef<TextInput>(null);

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

  const setShowCategorySelectionParent = (bool: boolean) => {
    setShowCategorySelection(bool);
  };

  const setShowDatePickerParent = (bool: boolean) => {
    setShowDatePicker(bool);
  };

  const onCloseButtonPress = (e: any) => {
    setEntryCreationModeParent(false);
    Keyboard.dismiss();
  };

  const inputIsValid = (): boolean => {
    if (amount == "") return false;
    if (title == "") return false;

    return true;
  }

  const onAdd = (e: any) => {
    if (inputIsValid()) {
      let parsedAmount = parseInt(amount);
      const newEntry: IEntry = { amount: parsedAmount, title, category: "", date: "" };
      saveEntry(newEntry);
    } else {
      console.log("Check the input!")
    }
  };

  return (
    <TouchableWithoutFeedback>
      <Animated.View style={[styles.overlay, opacityStyle]}>
        <Animated.View style={[styles.container, animatedStyle, { top: 280 }]}>
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
            {showCategorySelection && (
              <CategorySelection setShowCategorySelectionParent={setShowCategorySelectionParent} />
            )}

            <Text style={styles.text}>I spent</Text>
            <TextInput
              onChangeText={(newValue) => setAmount(newValue)}
              style={styles.inputText}
              placeholder="0,00"
              placeholderTextColor="white"
              keyboardType="numbers-and-punctuation"
              onLayout={(e) => e.target.focus()}
              onSubmitEditing={(e) => titleInputRef.current!.focus()}
            />
            <Text style={[styles.inputText, { marginRight: 5 }]}>{settings.currency}</Text>
            <Text style={styles.text}>on:</Text>
            <TextInput
              ref={titleInputRef}
              onChangeText={(newValue) => setTitle(newValue)}
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
              <TouchableOpacity
                style={styles.entryButton}
                onPress={(e) => setShowCategorySelection(true)}
              >
                <Text style={styles.entryButtonText}>@ Add Category</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.entryButton}>
                <Text style={styles.entryButtonText}># Add Tags</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addEntry} onPress={(e) => onAdd(e)}>
              <Image source={require("../assets/add.png")} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          {showDatePicker && <DatePicker />}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  container: {
    overflow: "visible",
    width: windowWidth,
    height: windowHeight - entryCreationHeight,
    backgroundColor: "#281340",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
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
