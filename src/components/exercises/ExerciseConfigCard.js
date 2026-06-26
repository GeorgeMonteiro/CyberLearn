import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, radius, shadows } from '../../theme';
import DifficultySelector from './DifficultySelector';

export default function ExerciseConfigCard({ difficulty, onDifficultyChange, quantity, onQuantityChange }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Personalizar exercícios</Text>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Dificuldade</Text>
        <DifficultySelector selected={difficulty} onSelect={onDifficultyChange} />
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Quantidade de questões</Text>
        <View style={styles.stepper}>
          <TouchableOpacity
            onPress={() => quantity > 5 && onQuantityChange(quantity - 1)}
            style={[styles.stepperBtn, quantity <= 5 && styles.stepperBtnDisabled]}
          >
            <Ionicons
              name="remove"
              size={20}
              color={quantity <= 5 ? colors.textMuted : colors.text}
            />
          </TouchableOpacity>
          <Text style={styles.stepperValue}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => quantity < 20 && onQuantityChange(quantity + 1)}
            style={[styles.stepperBtn, quantity >= 20 && styles.stepperBtnDisabled]}
          >
            <Ionicons
              name="add"
              size={20}
              color={quantity >= 20 ? colors.textMuted : colors.text}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Tema</Text>
        <View style={styles.selectDisabled}>
          <Ionicons name="book-outline" size={18} color={colors.textMuted} />
          <Text style={styles.selectDisabledText}>Lógica de Programação</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border + '30',
    ...shadows.md,
    gap: spacing.lg,
  },
  cardTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    letterSpacing: typography.letterSpacing.wide,
  },
  field: {
    gap: spacing.sm,
  },
  fieldLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: typography.letterSpacing.wide,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border + '30',
  },
  stepperBtn: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperBtnDisabled: {
    opacity: 0.4,
  },
  stepperValue: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    minWidth: 40,
    textAlign: 'center',
  },
  selectDisabled: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.lg,
    padding: spacing.base,
    borderWidth: 1,
    borderColor: colors.border + '20',
    opacity: 0.6,
  },
  selectDisabledText: {
    fontSize: typography.fontSize.base,
    color: colors.textMuted,
    fontWeight: typography.fontWeight.medium,
  },
});
