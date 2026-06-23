import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing, radius, shadows } from '../theme';

export default function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isOutline = variant === 'outline';

  const content = (
    <>
      {loading && (
        <ActivityIndicator
          color={isOutline ? colors.primaryPurple : colors.white}
          size="small"
          style={{ marginRight: spacing.sm }}
        />
      )}
      <Text
        style={[
          styles.text,
          isOutline && styles.outlineText,
          isSecondary && styles.secondaryText,
          disabled && styles.disabledText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </>
  );

  if (isPrimary) {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        style={style}
      >
        <LinearGradient
          colors={[colors.gradientStart, colors.gradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.button,
            styles.gradientButton,
            disabled && styles.disabled,
          ]}
        >
          {content}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[
        styles.button,
        isSecondary && styles.secondaryButton,
        isOutline && styles.outlineButton,
        disabled && styles.disabled,
        style,
      ]}
    >
      {content}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.lg,
    minHeight: 52,
  },
  gradientButton: {
    ...shadows.md,
  },
  secondaryButton: {
    backgroundColor: colors.darkPurple,
    ...shadows.sm,
  },
  outlineButton: {
    backgroundColor: colors.transparent,
    borderWidth: 1.5,
    borderColor: colors.primaryPurple,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: colors.white,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.letterSpacing.wide,
  },
  outlineText: {
    color: colors.primaryPurple,
  },
  secondaryText: {
    color: colors.white,
  },
  disabledText: {
    opacity: 0.7,
  },
});
