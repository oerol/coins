import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Day from "./components/Day";
import MonthOverview from "./components/MonthOverview";
import Menu from "./components/Menu";
import LatestPurchases from "./components/LatestPurchases";
import AddEntry from "./components/AddEntryButton";
import EntryCreation from "./components/EntryCreation";
import { useState, useEffect } from "react";
import { getLastEntries } from "./services/Storage";

export default function App() {
  const [entryCreationMode, setEntryCreationMode] = useState(false);
  const [latestEntries, setLatestEntries] = useState<IEntry[]>([])
  
  useEffect(() => {
    retrieveLatestEntries();
  }, [])
  
  const setEntryCreationModeParent = (bool: boolean) => {
    setEntryCreationMode(bool);
  };

  const retrieveLatestEntries = () => {
    getLastEntries(6).then((entries: IEntry[]) => setLatestEntries(entries));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Day />
      <MonthOverview />
      <Menu />
      <LatestPurchases entries={latestEntries}/>
      <AddEntry setEntryCreationModeParent={setEntryCreationModeParent} />
      {entryCreationMode && <EntryCreation setEntryCreationModeParent={setEntryCreationModeParent} retrieveLatestEntries={retrieveLatestEntries}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#283858",
  },
});
