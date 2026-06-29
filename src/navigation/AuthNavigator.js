import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import EmailLoginScreen from '../screens/EmailLoginScreen';
import LevelSelectionScreen from '../screens/LevelSelectionScreen';
import BeginnerTrackScreen from '../screens/BeginnerTrackScreen';
import ExpertTrackScreen from '../screens/ExpertTrackScreen';
import ModuleDetailScreen from '../screens/ModuleDetailScreen';
import LessonScreen from '../screens/LessonScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import QuizScreen from '../screens/QuizScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="EmailLogin" component={EmailLoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="LevelSelection" component={LevelSelectionScreen} />
      <Stack.Screen name="BeginnerTrack" component={BeginnerTrackScreen} />
      <Stack.Screen name="ExpertTrack" component={ExpertTrackScreen} />
      <Stack.Screen name="ModuleDetail" component={ModuleDetailScreen} />
      <Stack.Screen name="Lesson" component={LessonScreen} />
      <Stack.Screen name="Exercise" component={ExerciseScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
    </Stack.Navigator>
  );
}
