import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing, radius } from '../theme';
import Card from './Card';

export default function ProgressCard({ label, value, total, percentage, color = colors.cyberBlue }) {
  const percent = percentage || (total ? Math.round((value / total) * 100) : 0);

  return (
    <Card style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueRow}>
        <Text style={styles.value}>{value}</Text>
        {total !== undefined && (
          <Text style={styles.total}> / {total}</Text>
        )}
      </View>
      <View style={styles.barContainer}>
        <View style={styles.bar}>
          <View
            style={[
              styles.fill,
              {
                width: `${Math.min(percent, 100)}%`,
                backgroundColor: color,
              },
            ]}
          />
        </View>
        <Text style={styles.percent}>{percent}%</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    color: colors.textSecondary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    textTransform: 'uppercase',
    letterSpacing: typography.letterSpacing.wider,
    marginBottom: spacing.xs,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: spacing.sm,
  },
  value: {
    color: colors.text,
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
  },
  total: {
    color: colors.textMuted,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.regular,
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: {
    flex: 1,
    height: 8,
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.full,
    overflow: 'hidden',
    marginRight: spacing.sm,
  },
  fill: {
    height: '100%',
    borderRadius: radius.full,
  },
  percent: {
    color: colors.textSecondary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    minWidth: 36,
    textAlign: 'right',
  },
});
