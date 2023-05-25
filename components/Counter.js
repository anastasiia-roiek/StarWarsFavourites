import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Counter = (props) => {
  const { genderFans, genderCounts } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{genderCounts}</Text>
      <Text>{genderFans}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 90,
    padding: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  text: {
    fontSize: 35,
  },
});