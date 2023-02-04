import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DatePicker() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <DateTimePicker
      themeVariant="dark"
      testID="dateTimePicker"
      value={date}
      onChange={onChange}
      display="spinner"
      key={3}
    />
  );
}

const styles = StyleSheet.create({});
