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
  
  // https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
  const getOrdinalNumber = (number: number): string => {
    const j = number % 10
    const k = number % 100

    if (j == 1 && k != 11) {
        return number + "st";
    }
    if (j == 2 && k != 12) {
        return number + "nd";
    }
    if (j == 3 && k != 13) {
        return number + "rd";
    }

    return number + "th";
  };

  const onLayout = (event: LayoutChangeEvent) => {
    let progressBarElementWidth = event.nativeEvent.layout.width;
    setProgressWidth(getProgress(progressBarElementWidth));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          {getOrdinalNumber(currentDay)} of {currentMonthString} {currentYear}
        </Text>
        <View onLayout={(e) => onLayout(e)} style={styles.progressBar} />
        <View style={[styles.progressBarFilled, { width: progressWidth }]} />
      </View>
    </View>
  );
}

const progressBarHeight = 2;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 27,
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
