import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export const Search = ( { setCharacters }) => {
  const [input, setInput] = useState('');
  

  const handleChange = (value) => {
    setInput(value);
    searchCharacters(value);
    console.log(value);
  };

  const searchCharacters = (value) => {
    fetch(`https://swapi.dev/api/people/?search=${encodeURIComponent(value)}`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        console.log("Кількість результатів:", results.length);
        setCharacters(results);
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.input_wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Type to search..."
        value={input}
        onChangeText={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input_wrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    width: '100%',
    height: 60,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  input: {
    height: '100%',
    padding: 10,
    backgroundColor: 'transparent',
    fontSize: 20,
  },
});
