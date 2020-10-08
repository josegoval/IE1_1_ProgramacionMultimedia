import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Result from './Result'

  function generarNumeroSecreto() { 
    return  Math.floor(Math.random() * 20) + 1
   }
  
  const numeroSecreto = generarNumeroSecreto();

export default function ComponentMG() { 

  const [text, setText] = useState('');

    return ( 
      <View style={styles.container}> 
          <Text style={styles.title}> 
            Adivina un numero entre 1 y 20
          </Text>
        <TextInput
            style={styles.input}
            placeholder="Introduce aquí el número"
            keyboardType="numeric"
            onChangeText={text => setText(text)}
        /> 
        <Text style={styles.title}> 
          <Result
              term={text}  
              secretNum={numeroSecreto} /> 
        </Text>
      </View> 
    ) 
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold'
  },
  input: {height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});