import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Header( props ) {
  const { onClear } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fans</Text>

      <TouchableOpacity style={styles.button} onPress={onClear}>
        <Text style={styles.buttonText}>Clear fans</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  buttonText: {
    color: 'red',
    fontSize: 20,
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  }
});
