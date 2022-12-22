import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {setCount(count + 1)};

  const decrementCount = () => {setCount(count - 1)};

  return (
    <View style={styles.container}>
      <Text style={count % 2 == 0 ? styles.text : styles.oddText}>{count}</Text>
      <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'papayawhip' : 'white'}, styles.button, {padding: pressed ? 20 : 10}]} onPress={incrementCount}>
          <Text style={styles.buttonText}>Press Me</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'papayawhip' : 'white' }, styles.button, {padding: pressed ? 20 : 10}]} onPress={decrementCount}>
          <Text style= {styles.buttonText}>No, Press Me</Text>
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'powderblue',
    fontWeight: 'bold',
    fontSize: 100
  },

  oddText: {
    color: 'papayawhip',
    fontWeight: 'bold',
    fontSize: 100
  },

  button: {
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },

  buttonText: {
    color: 'powderblue',
    fontWeight: 'bold',
    fontSize: 40
  }
});
