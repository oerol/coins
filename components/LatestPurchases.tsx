import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { getEntries, removeEntries } from "../services/Storage";
import Entry from "./Entry";
import {useEffect,useState} from "react"

export default function LatestPurchases() {

/*   const latestEntries: IEntry[]= [
    {title:"Nike Shoes", category:"Shoes", amount: 100, date:"today"},
    {title:"Atomic Habits", category:"Books", amount: 30, date:"yesterday"},
    {title:"Jeans", category:"Shoes", amount: 55.50 , date:"1 day ago"},
    {title:"Barber", category:"Lifestyle", amount: 20, date:"1 day ago"},
    {title:"Restaurant", category:"Food", amount: 30, date:"2 days ago"},
    {title:"Cinema", category:"Lifestyle", amount: 10, date:"3 days ago"},
  ] */

  const [latestEntries, setLatestEntries] = useState<IEntry[]>([ ])

  useEffect(() => {
    getEntries().then((entries: IEntry[]) => setLatestEntries(entries));
  }, [])

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
