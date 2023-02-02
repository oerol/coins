import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function MonthOverview() {
  const amountToString = (amount: number): string => {
    let text = amount.toString();
    let leftSide = text.split(".")[0];
    let rightSide = text.split(".")[1];

    if (leftSide.length > 3) { // 1234 => 1.234
      for (let i = leftSide.length - 3; i > 0; i -= 3) {
        leftSide = leftSide.slice(0, i) + "." + leftSide.slice(i);
      }
    }

    if (rightSide.length < 2) { // ,6 => ,60
        rightSide += "0";
    }

    return leftSide + "," + rightSide;
  };

  const moneySpent = 2140.6;
  const currency = "€"
  console.log(amountToString(moneySpent));
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>This month, you spent</Text>
      <Text style={styles.moneyText}>{currency}{amountToString(moneySpent)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  text: {
    color: "white",
    fontSize: 12
  },
  moneyText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
