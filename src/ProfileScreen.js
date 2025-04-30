import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import LoginScreen from './LoginScreen';
import { Alert } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const profileOptions = [
    { id: 1, name: 'My Profile' },
    { id: 2, name: 'Invoices' },
    { id: 3, name: 'Kids' },
    { id: 4, name: 'About Us' },
    { id: 5, name: 'Terms & Conditions' },
    { id: 6, name: 'Logout' },
    { id: 7, name: 'Close Account' },
  ];

  const handleOptionPress = (optionName) => {
    switch(optionName) {
      case 'My Profile':
        navigation.navigate(LoginScreen);
        break;
      case 'Logout':
        showLogoutConfirmation();
        break;
      default:
        console.log(`${optionName} pressed`);
    }
  };

  const showLogoutConfirmation = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { 
          text: 'Yes', 
          onPress: () => {
            
            navigation.navigate(LoginScreen);
          } 
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {profileOptions.map(option => (
          <TouchableOpacity 
            key={option.id} 
            style={styles.optionButton}
            onPress={() => handleOptionPress(option.name)}
          >
            <Text style={styles.optionText}>{option.name}</Text>
          </TouchableOpacity>
        ))}

        {/* Version Text */}
        <Text style={styles.versionText}>Version 1.0 (1.03)</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0, 
  },
  header: {
    backgroundColor: '#A5D71E',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  optionButton: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  versionText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 40,
  },
});

export default ProfileScreen;
