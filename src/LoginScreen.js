import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      
      <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#000"
          keyboardType="email-address"
          autoCapitalize="none"
        />

       <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry
        />
    
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 0, 
  },
  logo: {
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#000',
  },
  forgotPassword: {
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#A5D71E',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  createAccount: {
    color: '#A5D71E',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default LoginScreen;