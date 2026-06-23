import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../theme';

export default function SectionTitle({ title, subtitle, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.base,
  },
  title: {
    color: colors.text,
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.letterSpacing.tight,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.fontSize.md,
    marginTop: spacing.xs,
    lineHeight: typography.fontSize.md * typography.lineHeight.relaxed,
  },
});
