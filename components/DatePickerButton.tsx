import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DatePickerButton({ setShowDatePickerParent }: IDatePickerButton) {
  const onPress = (e: any) => {
      Keyboard.dismiss()
    setShowDatePickerParent(true);
  };

  return (
    <TouchableOpacity onPress={(e) => onPress(e)}>
      <Text style={styles.text}>Today</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
