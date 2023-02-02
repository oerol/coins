import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Day from "./components/Day";
import MonthOverview from "./components/MonthOverview";
import Menu from "./components/Menu";
import LatestPurchases from "./components/LatestPurchases";
import AddEntry from "./components/AddEntryButton";
import EntryCreation from "./components/EntryCreation";
import { useState } from "react";

export default function App() {
  const [entryCreationMode, setEntryCreationMode] = useState(false);

  const setEntryCreationModeParent = (bool: boolean) => {
    setEntryCreationMode(bool);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Day />
      <MonthOverview />
      <Menu />
      <LatestPurchases />
      <AddEntry setEntryCreationModeParent={setEntryCreationModeParent} />
      {entryCreationMode && <EntryCreation />}
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
