import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Details({ route }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{character.name}</Text>
      <Text style={styles.info}>Height: {character.height}</Text>
      <Text style={styles.info}>Mass: {character.mass}</Text>
      <Text style={styles.info}>Hair Color: {character.hair_color}</Text>
      <Text style={styles.info}>Skin Color: {character.skin_color}</Text>
      <Text style={styles.info}>Eye Color: {character.eye_color}</Text>
      <Text style={styles.info}>Birth Year: {character.birth_year}</Text>
      <Text style={styles.info}>Gender: {character.gender}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  info: {
    fontSize: 20,
    marginBottom: 8,
  },
});
