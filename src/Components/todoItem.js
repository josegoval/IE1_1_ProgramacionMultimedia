import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
/* import {MaterialIcons} from '@expo/vector-icons';*/

export default function TodoItem({item, pressHandler}) {
  return (
    /* la funcion anonima llama al pressHandler pasado por parametro que recibe los items */
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        {/* la funcion anonima llama al pressHandler pasado por parametro y muestra el texto de los items */}
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  },
});