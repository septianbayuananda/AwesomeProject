import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/bg.jpeg')} // gambar dari folder assets
      style={styles.container}
    >
      <View style={styles.footer}>
        <Text style={styles.title}>Your Next Adventure Starts Here</Text>
        <Text style={styles.subtitle}>
          Life’s too short to stay in one place. Find your next favorite city, beach, or mountain and let's get moving!
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Exploring</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#e5e5e5',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#10B981',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },
});

export default App;
