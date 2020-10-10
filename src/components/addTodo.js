import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native';

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState('');

  // metodo para establecer el nuevo valor
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="nuevo todo ..."
        onChangeText={changeHandler}
      />
      <Button
        // funcion anonima que llama al submitHandler pasado por pros para asignar el texto
        onPress={() => submitHandler(text)}
        title="Añadir todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
