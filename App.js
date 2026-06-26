import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { ProgressProvider } from './src/context/ProgressContext';

export default function App() {
  return (
    <ProgressProvider>
      <StatusBar style="light" />
      <AppNavigator />
    </ProgressProvider>
  );
}
