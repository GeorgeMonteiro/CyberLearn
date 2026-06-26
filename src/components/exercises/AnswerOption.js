import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, radius, shadows } from '../../theme';

export default function AnswerOption({ label, selected, correct, showResult, onPress }) {
  let containerStyle = styles.option;
  let textStyle = styles.optionText;
  let iconName = null;
  let iconColor = null;

  if (showResult) {
    if (selected && selected === correct) {
      containerStyle = [containerStyle, styles.optionCorrect];
      textStyle = [textStyle, styles.optionTextCorrect];
      iconName = 'checkmark-circle';
      iconColor = colors.success;
    } else if (selected && selected !== correct) {
      containerStyle = [containerStyle, styles.optionWrong];
      textStyle = [textStyle, styles.optionTextWrong];
      iconName = 'close-circle';
      iconColor = colors.error;
    } else {
      containerStyle = [containerStyle, styles.optionDisabled];
      textStyle = [textStyle, styles.optionTextDisabled];
    }
  } else if (selected) {
    containerStyle = [containerStyle, styles.optionSelected];
    textStyle = [textStyle, styles.optionTextSelected];
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={showResult}
      activeOpacity={0.7}
      style={containerStyle}
    >
      <Text style={textStyle}>{label}</Text>
      {iconName && <Ionicons name={iconName} size={20} color={iconColor} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.base,
    borderWidth: 1,
    borderColor: colors.border + '30',
    ...shadows.sm,
  },
  optionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.surface,
  },
  optionCorrect: {
    borderColor: colors.success,
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
  },
  optionWrong: {
    borderColor: colors.error,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  optionDisabled: {
    opacity: 0.5,
  },
  optionText: {
    flex: 1,
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.md * typography.lineHeight.relaxed,
  },
  optionTextSelected: {
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
  optionTextCorrect: {
    color: colors.success,
    fontWeight: typography.fontWeight.semibold,
  },
  optionTextWrong: {
    color: colors.error,
    fontWeight: typography.fontWeight.semibold,
  },
  optionTextDisabled: {
    color: colors.textMuted,
  },
});
