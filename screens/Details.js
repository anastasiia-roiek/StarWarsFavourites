import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Details({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button title='Back' onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 16,
    backgroundColor: 'red',
  },
});
