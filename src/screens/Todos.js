import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import AddTodo from '../components/addTodo';

export default function Todos() {
  const [todos, setTodos] = useState([
    {
      text: 'Aprender React Native',
      key: '1',
    },
    {
      text: 'Salir a hacer deporte',
      key: '2',
    },
    {
      text: 'Jugar a videojuegos',
      key: '3',
    },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  /*Importar una libreria de ids seria lo ideal */
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'todos deben tener 4 caracteres mínimo', [
        {text: 'Entendido', onPress: () => console.log('alerta cerrada')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('teclado minimizado');
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
