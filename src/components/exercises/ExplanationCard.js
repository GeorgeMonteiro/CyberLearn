import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, radius } from '../../theme';

export default function ExplanationCard({ question, selectedAnswer }) {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <View style={[styles.card, isCorrect ? styles.cardCorrect : styles.cardWrong]}>
      <View style={styles.header}>
        <Ionicons
          name={isCorrect ? 'checkmark-circle' : 'alert-circle'}
          size={20}
          color={isCorrect ? colors.success : colors.error}
        />
        <Text style={[styles.headerText, isCorrect ? styles.headerTextCorrect : styles.headerTextWrong]}>
          {isCorrect ? 'Você acertou!' : 'Você errou'}
        </Text>
      </View>

      <Text style={styles.question}>{question.question}</Text>

      <View style={styles.answers}>
        <View style={styles.answerRow}>
          <Text style={styles.answerLabel}>Sua resposta:</Text>
          <Text style={[styles.answerValue, isCorrect ? styles.answerValueCorrect : styles.answerValueWrong]}>
            {question.options[selectedAnswer]}
          </Text>
        </View>
        {!isCorrect && (
          <View style={styles.answerRow}>
            <Text style={styles.answerLabel}>Resposta correta:</Text>
            <Text style={[styles.answerValue, styles.answerValueCorrect]}>
              {question.options[question.correctAnswer]}
            </Text>
          </View>
        )}
      </View>

      <Text style={styles.explanation}>{question.explanation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xl,
    padding: spacing.base,
    borderLeftWidth: 3,
    gap: spacing.sm,
  },
  cardCorrect: {
    backgroundColor: 'rgba(34, 197, 94, 0.08)',
    borderLeftColor: colors.success,
  },
  cardWrong: {
    backgroundColor: 'rgba(239, 68, 68, 0.08)',
    borderLeftColor: colors.error,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  headerText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
  },
  headerTextCorrect: {
    color: colors.success,
  },
  headerTextWrong: {
    color: colors.error,
  },
  question: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  answers: {
    gap: spacing.xs,
  },
  answerRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  answerLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textMuted,
    fontWeight: typography.fontWeight.medium,
  },
  answerValue: {
    flex: 1,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
  },
  answerValueCorrect: {
    color: colors.success,
  },
  answerValueWrong: {
    color: colors.error,
  },
  explanation: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
    fontStyle: 'italic',
  },
});
