import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Progress from "./Progress";
import { amountToString, getDifferenceInDays } from "../utils";
import { settings } from "../config";
import { getEntries } from "../services/Storage";
import {useState,useEffect} from "react"


export default function MonthOverview() {
  const [moneySpent, setMoneySpent] = useState(0)

  const getMoneySpentForMonth = () => {
    let amount = 0;
    
    getEntries().then((entries: IEntry[]) => {
      for(let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const entryDate = new Date(entry.date)
        const today = new Date();

        if (getDifferenceInDays(entryDate, today) <= 30) {
          amount += entry.amount;
          console.log(entryDate, entry.amount)
        } else {
          break; // no need to continue checking, since entries are ordered
        }
      }
      setMoneySpent(amount);
    });

  }

  useEffect(() => {
    getMoneySpentForMonth()
  }, [])

  const currency = "€";

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>This month, you spent</Text>
      <View style={styles.moneyContainer}>
        <Text style={styles.moneyText}>
          {settings.currency}
          {amountToString(moneySpent)}
        </Text>
        <Progress/>
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
