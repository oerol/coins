import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Day from './components/Day';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Day/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283858',
    alignItems: 'center',
  },
});
