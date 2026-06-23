import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen() {
  return (
    <LinearGradient
      colors={['#F2557A', '#8B3DFF']}
      style={styles.container}
    >
      <Text style={styles.title}>CyberLearn</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#F8F5F0',
  },
});
