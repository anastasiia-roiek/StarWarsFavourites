import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { getCharacters } from '../API';
import { Counter } from '../components/Counter';
import Header from '../components/Header';
import { Search } from '../components/Search';
import { Pagination } from '../components/Pagination';


export default function Main({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [maleFans, setMaleFans] = useState(0);
  const [femaleFans, setFemaleFans] = useState(0);
  const [otherFans, setOtherFans] = useState(0);

  const [count, setCount] = useState(0);
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const loadScene = ( character) => {
    navigation.navigate('Details', { character });
  }

  const handleCheckboxPress = (item) => {
    let newSelectedCharacters = [...selectedCharacters];
    if (newSelectedCharacters.includes(item)) {
      newSelectedCharacters = newSelectedCharacters.filter((character) => character !== item);
      updateFanCounters(item.gender, -1);
    } else {
      newSelectedCharacters.push(item);
      updateFanCounters(item.gender, 1);
    }
    setSelectedCharacters(newSelectedCharacters);
  }

  const updateFanCounters = (gender, value) => {
    if (gender === 'male') {
      setMaleFans(maleFans + value);
    } else if (gender === 'female') {
      setFemaleFans(femaleFans + value);
    } else {
      setOtherFans(otherFans + value);
    }
  }

  const resetAll = () => {
    setFemaleFans(0);
    setMaleFans(0);
    setOtherFans(0);
    setSelectedCharacters([]);
  }

  React.useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters(currentPage);
      setCharacters(data.results);
      setCount(data.count);
      setNext(data.next);
      setPrevious(data.previous);
    };
    fetchCharacters();
  }, [currentPage]);

  const handleClickNext = React.useCallback(() => {
    if (next !== null) {
      setCurrentPage((prev) => prev + 1);
    }
    return;
  }, [])

  const handleClickPrev = React.useCallback(() => {
    if (previous !== null) {
      setCurrentPage((prev) => prev - 1);
    }
    return;
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => loadScene(item)}>
      <TouchableOpacity onPress={() => handleCheckboxPress(item)}>
        <View style={styles.checkbox}>
          {selectedCharacters.includes(item) && <View style={styles.checkmark} />}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => loadScene(item)} >
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header onClear={resetAll} />
      <View style={styles.counters}>
        <Counter genderFans='Female Fans' genderCounts={femaleFans} />
        <Counter genderFans='Male Fans' genderCounts={maleFans} />
        <Counter genderFans='Others' genderCounts={otherFans} />
      </View>

      <Search setCharacters={setCharacters}/>

      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.url}
      />
      <Pagination 
        characters={characters} 
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        count={count}
        currentPage={currentPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbb',
    marginRight: 12,
  },
  checkmark: {
    width: 14,
    height: 14,
    borderRadius: 2,
    backgroundColor: 'red',
  },
  counters: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
