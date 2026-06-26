import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, typography, radius } from '../../theme';

const DIFFICULTIES = ['Fácil', 'Médio', 'Difícil'];

export default function DifficultySelector({ selected, onSelect }) {
  return (
    <View style={styles.container}>
      {DIFFICULTIES.map((item) => {
        const isActive = item === selected;
        return (
          <TouchableOpacity
            key={item}
            onPress={() => onSelect(item)}
            activeOpacity={0.7}
            style={[styles.option, isActive && styles.optionActive]}
          >
            <Text style={[styles.optionText, isActive && styles.optionTextActive]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: 3,
    borderWidth: 1,
    borderColor: colors.border + '30',
  },
  option: {
    flex: 1,
    paddingVertical: spacing.sm + 2,
    alignItems: 'center',
    borderRadius: radius.md,
  },
  optionActive: {
    backgroundColor: colors.primaryPurple,
  },
  optionText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.textSecondary,
  },
  optionTextActive: {
    color: colors.white,
    fontWeight: typography.fontWeight.semibold,
  },
});
