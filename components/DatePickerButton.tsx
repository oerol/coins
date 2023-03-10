import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface DatePickerButtonProps {
  setShowDatePickerParent: (bool: boolean) => void
  text: string;
}

export default function DatePickerButton({ setShowDatePickerParent, text }: DatePickerButtonProps) {
  const onPress = (e: any) => {
      Keyboard.dismiss()
    setShowDatePickerParent(true);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={(e) => onPress(e)}>
      <Text style={styles.text}>{text}</Text>
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
