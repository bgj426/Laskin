import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [text, setText] = useState('');

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const calcSum = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
    setNum1('')
    setNum2('')
  }

  const calcSub = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
    setNum1('')
    setNum2('')
  }

  return (
    
    <View style={styles.container}>
        <View style={styles.container}>

        <Text style={{fontSize: 25, paddingBottom: 10}}>Result: {result}</Text>

      <TextInput
      keyboardType='numeric'
      style={{fontSize: 20, width:200, borderColor: 'gray', borderWidth:1, marginBottom: 5}}
      onChangeText={num1 => setNum1(num1)}
      value={String(num1)}
      />

      <TextInput
      keyboardType='numeric'
      style={{fontSize: 20, width:200, borderColor: 'gray', borderWidth:1}}
      onChangeText={num2 => setNum2(num2)}
      value={String(num2)}
      />
      </View>

       <View style={styles.buttons}>
      <Button onPress={calcSum} title=" + " />
      <Button onPress={calcSub} title=" - " />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttons: {
    flex: 2,
    width: 120,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 10,
  },
});
