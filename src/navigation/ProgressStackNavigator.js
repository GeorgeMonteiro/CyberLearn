import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProgressScreen from '../screens/ProgressScreen';

const Stack = createNativeStackNavigator();

export default function ProgressStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProgressMain" component={ProgressScreen} />
    </Stack.Navigator>
  );
}
