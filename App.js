import { StyleSheet, View } from 'react-native';
import Clock from './Components/Clock.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Clock></Clock>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

