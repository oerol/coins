import { useState } from "react";
import { LayoutChangeEvent, StyleSheet, Text, View } from "react-native";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
const currentMonthString = currentDate
  .toLocaleString("default", { month: "long" })
  .toUpperCase();
const numberOfDays = new Date(currentYear, currentMonth + 1, 0).getDate(); // Returns the last day of the current month

export default function Day() {
  const [progressWidth, setProgressWidth] = useState(0);

  const getProgress = (progressBarElementWidth: number) => {
    return (currentDay / numberOfDays) * progressBarElementWidth;
  };

  const onLayout = (event: LayoutChangeEvent) => {
    let progressBarElementWidth = event.nativeEvent.layout.width;
    setProgressWidth(getProgress(progressBarElementWidth));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {currentDay}th of {currentMonthString} {currentYear}
      </Text>
      <View onLayout={(e) => onLayout(e)} style={styles.progressBar} />
      <View style={[styles.progressBarFilled, { width: progressWidth }]} />
    </View>
  );
}

const progressBarHeight = 2;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,

  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  progressBar: {
    height: progressBarHeight,
    backgroundColor: "#959C83",
  },
  progressBarFilled: {
    transform: [{ translateY: -progressBarHeight }],
    height: progressBarHeight,
    backgroundColor: "#C898F8",
  },
});
