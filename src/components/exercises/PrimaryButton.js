import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, radius, shadows } from '../../theme';

export default function PrimaryButton({ title, onPress, icon, disabled }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[styles.wrapper, disabled && styles.disabled]}
    >
      <LinearGradient
        colors={disabled ? [colors.surfaceLight, colors.surfaceLight] : [colors.gradientStart, colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        {icon && <Ionicons name={icon} size={20} color={disabled ? colors.textMuted : colors.white} />}
        <Text style={[styles.text, disabled && styles.textDisabled]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...shadows.md,
  },
  disabled: {
    opacity: 0.5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
    borderRadius: radius.xl,
    minHeight: 52,
  },
  text: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
    letterSpacing: typography.letterSpacing.wide,
  },
  textDisabled: {
    color: colors.textMuted,
  },
});
