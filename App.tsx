import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Day from './components/Day';
import MonthOverview from './components/MonthOverview';
import Menu from './components/Menu';
import LatestPurchases from './components/LatestPurchases';
import AddEntry from './components/AddEntry';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Day/>
      <MonthOverview/>
      <Menu/>
      <LatestPurchases/>
      <AddEntry/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#283858',
  },
});
