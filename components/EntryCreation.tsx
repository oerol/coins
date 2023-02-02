import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import { useKeyboard } from './Keyboard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const entryCreationHeight = 200

export default function EntryCreation() {
  const keyboardHeight = useKeyboard();
  
  return (
    <View style={[styles.container, { top: windowHeight - keyboardHeight - entryCreationHeight}]}>
      <Text style={styles.text}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: windowWidth,
    height: entryCreationHeight,
    // left: -20, // App.tsx: padding
    backgroundColor: '#5ca5cc',
  },
  text: {},
});