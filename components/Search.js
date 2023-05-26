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
    let timer;
    
    const delayedSearch = (searchValue) => {
      fetch(`https://swapi.dev/api/people/?search=${encodeURIComponent(searchValue)}`)
        .then((response) => response.json())
        .then((data) => {
          const results = data.results;
          console.log("Кількість результатів:", results.length);
          setCharacters(results);
        })
        .catch((error) => console.log(error));
    };
  
    const debounceSearch = (searchValue) => {
      if (timer) {
        clearTimeout(timer);
      }
  
      timer = setTimeout(() => {
        delayedSearch(searchValue);
      }, 300);
    };
  
    debounceSearch(value);
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
