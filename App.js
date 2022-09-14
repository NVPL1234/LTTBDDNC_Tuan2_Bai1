import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState("")
  const [nameTemp, setNameTemp] = useState("")

  function onPressHandle() {
    setName(nameTemp)
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Enter name" onChangeText={setNameTemp}></TextInput>
      <Button title="Show test" onPress={onPressHandle}></Button>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginBottom: 10,
    height: 50,
    width: 400,
    borderColor: 'blue',
    borderWidth: 1,
    fontSize: 25
  },
  text: {
    fontSize: 25
  }
})