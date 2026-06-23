import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors, typography, spacing, radius } from '../theme';

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  icon,
  secureTextEntry,
  keyboardType,
  multiline,
  autoCapitalize,
  style,
}) {
  return (
    <View style={[styles.wrapper, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          error && styles.inputError,
          multiline && styles.inputMultiline,
        ]}
      >
        {icon && <Text style={styles.icon}>{icon}</Text>}
        <TextInput
          style={[styles.input, icon && styles.inputWithIcon, multiline && styles.multilineInput]}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          multiline={multiline}
          autoCapitalize={autoCapitalize}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.base,
  },
  label: {
    color: colors.text,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    marginBottom: spacing.sm,
    letterSpacing: typography.letterSpacing.wide,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.base,
    height: 52,
  },
  inputMultiline: {
    height: 100,
    alignItems: 'flex-start',
  },
  inputError: {
    borderColor: colors.error,
  },
  icon: {
    fontSize: 18,
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.regular,
    height: '100%',
  },
  inputWithIcon: {
    marginLeft: 0,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
    paddingTop: spacing.md,
  },
  error: {
    color: colors.error,
    fontSize: typography.fontSize.sm,
    marginTop: spacing.xs,
    fontWeight: typography.fontWeight.medium,
  },
});
