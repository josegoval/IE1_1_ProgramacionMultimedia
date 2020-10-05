// React
import React, {useState} from 'react';
import {View, TextInput, FlatList, StyleSheet} from 'react-native';
// Components
import PhoneCard from '../components/PhoneCard';
// Utils
import {generateCustomList} from '../utils/FinderUtils';

/**
 * Parte de Ruso.
 * Lista de Todos.
 */
export default function Finder() {
  const [textInputValue, settextInputValue] = useState('');
  const [List, setList] = useState(generateCustomList(30));

  const handleInput = (text) => {
    settextInputValue(text);
    filterListResults(text);
  };

  const filterListResults = (text) => {
    setList((prevList) =>
      prevList.map((item) => {
        return {
          ...item,
          display: item.name.toUpperCase().includes(text.toUpperCase()),
        };
      }),
    );
  };

  return (
    <View>
      <TextInput
        onChangeText={handleInput}
        value={textInputValue}
        placeholder="Filter by name..."
        style={styles.textInput}
      />
      <FlatList
        data={List}
        renderItem={({item}) =>
          item.display && <PhoneCard name={item.name} phone={item.phone} />
        }
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 7,
    borderBottomColor: '#929292',
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
