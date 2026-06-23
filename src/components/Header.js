import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing } from '../theme';

export default function Header({
  title,
  onBack,
  rightAction,
  rightLabel,
  gradient = true,
}) {
  return (
    <LinearGradient
      colors={gradient ? [colors.gradientStart, colors.gradientEnd] : [colors.darkBlue, colors.darkBlue]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.inner}>
        <View style={styles.side}>
          {onBack && (
            <TouchableOpacity onPress={onBack} style={styles.backButton}>
              <Text style={styles.backIcon}>‹</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <View style={styles.side}>
          {rightAction && (
            <TouchableOpacity onPress={rightAction} style={styles.rightButton}>
              <Text style={styles.rightLabel}>{rightLabel || ''}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.display,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.base,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  side: {
    width: 60,
    alignItems: 'flex-start',
  },
  title: {
    flex: 1,
    color: colors.white,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    textAlign: 'center',
    letterSpacing: typography.letterSpacing.wide,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.overlay,
    borderRadius: 20,
  },
  backIcon: {
    color: colors.white,
    fontSize: 28,
    fontWeight: typography.fontWeight.bold,
    lineHeight: 30,
  },
  rightButton: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.overlay,
    borderRadius: 20,
  },
  rightLabel: {
    color: colors.white,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
  },
});
