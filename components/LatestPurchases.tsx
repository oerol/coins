import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Entry from "./Entry";

export default function LatestPurchases() {

  const latestEntries: IEntry[]= [
    {title:"Nike Shoes", category:"Clothing", amount: 100, date:"2 days ago"},
    {title:"Adidas Shoes", category:"Clothing", amount: 100.5, date:"3 days ago"},
    {title:"New Balance Shoes", category:"Clothing", amount: 101, date:"4 days ago"},
  ]

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Your latest purchases</Text>
        <TouchableOpacity>
          <Text style={styles.buttonText}>See all</Text>
        </TouchableOpacity>
      </View>
      {latestEntries.map((entry, i) => {
        return <Entry title={entry.title} category={entry.category} amount={entry.amount} date={entry.date} key={i} />
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  buttonText: {
    color: "#C888F8",
    fontWeight: "bold",
  },
  text: {
    color: "white",
  },
});
