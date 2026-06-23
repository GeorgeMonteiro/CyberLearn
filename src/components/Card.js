import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, spacing, radius, shadows } from '../theme';

export default function Card({ children, style, shadow = 'md' }) {
  return (
    <View style={[styles.card, shadows[shadow], style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.base,
    borderWidth: 1,
    borderColor: colors.border + '30',
  },
});
