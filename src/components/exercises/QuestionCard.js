import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';
import ProgressBar from './ProgressBar';
import AnswerOption from './AnswerOption';

export default function QuestionCard({ question, currentIndex, total, selectedAnswer, showResult, onSelect }) {
  return (
    <View style={styles.card}>
      <ProgressBar current={currentIndex + 1} total={total} />

      <Text style={styles.question}>{question.question}</Text>

      <View style={styles.options}>
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            label={option}
            selected={selectedAnswer}
            correct={question.correctAnswer}
            showResult={showResult}
            onPress={() => onSelect(index)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border + '30',
    gap: spacing.lg,
  },
  question: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.text,
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
  },
  options: {
    gap: spacing.sm,
  },
});
