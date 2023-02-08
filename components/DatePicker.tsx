import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { StyleSheet } from "react-native";

interface DatePickerProps {
  date: Date;
  setDateParent: (bool: boolean) => void
}

export default function DatePicker({ setDateParent, date }: DatePickerProps) {

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDateParent(currentDate);
  };

  return (
    <DateTimePicker
      themeVariant="dark"
      testID="dateTimePicker"
      value={date}
      onChange={onChange}
      display="inline"
      key={3}
      accentColor="#C898F8"
    />
  );
}

const styles = StyleSheet.create({});
