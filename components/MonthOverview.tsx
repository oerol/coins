import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Progress from "./Progress";
import { amountToString, getDifferenceInDays } from "../utils";
import { settings } from "../config";
import { getEntries, removeEntries } from "../services/Storage";
import { useState, useEffect } from "react";

export default function MonthOverview({ refresh }: DynamicComponent) {
  const [moneySpent, setMoneySpent] = useState(0);

  const getMoneySpentForMonth = () => {
    let amount = 0;
    console.log("start");
    getEntries().then((entries: IEntry[]) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const entryDate = new Date(entry.date);
        const today = new Date();

        console.log(entry.amount);
        const sameYear = entryDate.getMonth() === today.getMonth();
        const sameMonth = entryDate.getFullYear() === today.getFullYear();

        if (sameYear && sameMonth) {
          amount += entry.amount;
        }
      }
      setMoneySpent(amount);
    });
  };

  useEffect(() => {
    getMoneySpentForMonth();
  }, [refresh]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>This month, you spent</Text>
      <View style={styles.moneyContainer}>
        <Text style={styles.moneyText}>
          {settings.currency}
          {amountToString(moneySpent)}
        </Text>
        <Progress />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  moneyContainer: {
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 12,
  },
  moneyText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
