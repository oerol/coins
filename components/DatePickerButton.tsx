import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DatePickerButton({setShowDatePickerParent}: IDatePickerButton) {
  return (
    <TouchableOpacity onPress={(e) => setShowDatePickerParent(true)}>
    <Text style={styles.text}>Today</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "white",
    fontWeight: "bold"
},
});