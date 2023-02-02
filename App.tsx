import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Day from './components/Day';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Day/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
