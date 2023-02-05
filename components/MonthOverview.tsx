import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Progress from "./Progress";
import { amountToString } from "../utils";
import { settings } from "../config";


export default function MonthOverview() {

  const moneySpent = 340.6;
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
