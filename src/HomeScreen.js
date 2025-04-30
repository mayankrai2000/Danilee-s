import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Adhoc');

  return (
    <View style={styles.container}>    
      <Text style={styles.header}>Schedule a Service</Text>
     
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tabButton, selectedTab === 'Adhoc' && styles.activeTab]}
            onPress={() => setSelectedTab('Adhoc')}
          >
            <Text style={[styles.tabText, selectedTab === 'Adhoc' && styles.activeTabText]}>Adhoc</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabButton, selectedTab === 'Recurring' && styles.activeTab]}
            onPress={() => setSelectedTab('Recurring')}
          >
            <Text style={[styles.tabText, selectedTab === 'Recurring' && styles.activeTabText]}>Recurring</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.inputBox}>
          <Text style={styles.inputText}>DaniLee's Pelham, NY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputBox}>
          <Text style={styles.inputText}>Select Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputBox}>
          <Text style={styles.inputText}>Select Date</Text>
        </TouchableOpacity>
        {selectedTab === 'Adhoc' && (
          <TouchableOpacity style={styles.inputBox}>
            <Text style={styles.inputText}>Select Time</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>See All Plans</Text>
        </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 0, 
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tabButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#A5D71E',
  },
  tabText: {
    color: '#555',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
  inputBox: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
  },
  inputText: {
    fontSize: 16,
    color: '#333',
    alignItems: 'center',
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#A5D71E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#A5D71E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  secondaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;