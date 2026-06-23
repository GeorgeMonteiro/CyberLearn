import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ModuleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F172A',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8F5F0',
  },
});
