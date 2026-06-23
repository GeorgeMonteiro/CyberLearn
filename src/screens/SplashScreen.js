import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography } from '../theme';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.shield}>🛡️</Text>
        <Text style={styles.title}>CyberLearn</Text>
        <Text style={styles.subtitle}>Cibersegurança</Text>
      </View>

      <ActivityIndicator
        size="large"
        color={colors.white}
        style={styles.loader}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.huge,
  },
  shield: {
    fontSize: typography.fontSize.giant * 1.5,
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.fontSize.giant,
    fontWeight: typography.fontWeight.extrabold,
    color: colors.textLight,
    letterSpacing: typography.letterSpacing.wider,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    color: colors.textLight,
    opacity: 0.8,
    letterSpacing: typography.letterSpacing.wide,
    marginTop: spacing.sm,
  },
  loader: {
    position: 'absolute',
    bottom: spacing.huge,
  },
});
