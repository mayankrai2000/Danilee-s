import React from 'react';
import { View, ImageBackground, Image, StyleSheet } from 'react-native';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/girl.jpg')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={[styles.overlay, { backgroundColor: 'rgba(255,255,255,0.45)' }]} />
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 200,  
    height: 200, 
    zIndex: 1,   
  },
});

export default LandingPage;