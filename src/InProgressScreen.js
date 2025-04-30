// screens/InProgressScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InProgressScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>In-Progress</Text>
      <Text style={styles.subHeader}>Completed</Text>
      <Text style={styles.noBooking}>No booking found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 20,
  },
  noBooking: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default InProgressScreen;