import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function PhoneCard({name, phone}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={[styles.text, styles.name]}>{name}</Text>
      <Text style={[styles.text, styles.phone]}>{phone}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: '#C0C0C0',
    paddingLeft: 10,
    // backgroundColor: 'red',
    // height: 30,
  },
  text: {
    fontSize: 20,
  },
  name: {
    fontWeight: '700',
  },
  phone: {
    fontStyle: 'italic',
  },
});
