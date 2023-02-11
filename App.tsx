import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Day from "./components/Day";
import MonthOverview from "./components/MonthOverview";
import Menu from "./components/Menu";
import LatestPurchases from "./components/LatestPurchases";
import AddEntry from "./components/AddEntryButton";
import EntryCreation from "./components/EntryCreation";
import { useState} from "react";

export default function App() {
  const [entryCreationMode, setEntryCreationMode] = useState(false);
  const [refresh, setRefresh] = useState(false);  

  const setEntryCreationModeParent = (bool: boolean) => {
    setEntryCreationMode(bool);
  };

  const refreshComponents = () => {
    setRefresh(!refresh)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Day />
      <MonthOverview refresh={refresh}/>
      <Menu />
      <LatestPurchases refresh={refresh}/>
      <AddEntry setEntryCreationModeParent={setEntryCreationModeParent} />
      {entryCreationMode && <EntryCreation setEntryCreationModeParent={setEntryCreationModeParent} refreshComponents={refreshComponents}/>}
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
