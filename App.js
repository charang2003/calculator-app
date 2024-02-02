import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text, backgroundColor, textColor }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
    <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEquals = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };
  const delectLastdigit=()=>{
    setInput((prevInput)=> prevInput.slice(0,-1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.input}>{input}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button onPress={() => handlePress('7')} text="7" backgroundColor="#F4FCFD" textColor="black" />
          <Button onPress={() => handlePress('8')} text="8" backgroundColor="#F4FCFD" textColor="black" />
          <Button onPress={() => handlePress('9')} text="9" backgroundColor="#F4FCFD" textColor="black" />
          <Button onPress={() => handlePress('/')} text="/" backgroundColor="#FFB14F" textColor="black" />
        </View>
        <View style={styles.row}>
          <Button onPress={() => handlePress('4')} text="4" backgroundColor="#F4FCFD" textColor="black" />
          <Button onPress={() => handlePress('5')} text="5" backgroundColor="#F4FCFD" textColor="black" />
          <Button onPress={() => handlePress('6')} text="6" backgroundColor="#F4FCFD" textColor="black" />
          <Button onPress={() => handlePress('*')} text="*" backgroundColor="#FFB14F" textColor="black" />
        </View>
        <View style={styles.row}>
          <Button onPress={() => handlePress('1')} text="1" backgroundColor="#F4FCFD" textColor="black" />
          <Button onPress={() => handlePress('2')} text="2" backgroundColor="#F4FCFD" textColor="black" />
          <Button onPress={() => handlePress('3')} text="3" backgroundColor="#F4FCFD" textColor="black" />
          <Button onPress={() => handlePress('-')} text="-" backgroundColor="#FFB14F" textColor="black" />
        </View>
        <View style={styles.row}>
          <Button onPress={() => handlePress('0')} text="0" backgroundColor="#F4FCFD" textColor="black" />
          <Button onPress={() => handlePress('.')} text="." backgroundColor="#FFB14F" textColor="black" />
          <Button onPress={() => handlePress('+')} text="+" backgroundColor="#FFB14F" textColor="black" />
          <Button onPress={handleEquals} text="=" backgroundColor="#5163FF" textColor="#F4FCFD" />
        </View>
        <View style={styles.row}>
        <Button onPress={delectLastdigit} text="DEL" backgroundColor="#FFB14F" textColor="black" />
        <Button onPress={clearInput} text="AC" backgroundColor="#FFB14F" textColor="black" />

        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F0F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0.5,
  },
  inputContainer: {
    flex: 1.5,
    justifyContent: 'flex-end',
  },
  input: {
    fontSize: 50,
    textAlign: 'right',
    marginRight: 20,
  },
  buttonsContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 1,
    padding: 10.5,
  },
  button: {
    width: 80,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 28,
  },
});