import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DatePickerButton({ setShowDatePickerParent }: IDatePickerButton) {
  const onPress = (e: any) => {
      Keyboard.dismiss()
    setShowDatePickerParent(true);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={(e) => onPress(e)}>
      <Text style={styles.text}>Today</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
