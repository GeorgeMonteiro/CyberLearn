import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, radius, shadows } from '../../theme';

function getMessage(percent) {
  if (percent === 100) return 'Perfeito! Você acertou todas as questões!';
  if (percent >= 80) return 'Excelente! Continue assim!';
  if (percent >= 60) return 'Bom trabalho! Continue praticando para melhorar seu desempenho.';
  if (percent >= 40) return 'Vamos lá! Revise o conteúdo e tente novamente.';
  return 'Não desista! Estude um pouco mais e tente novamente.';
}

export default function ResultCard({ hits, total }) {
  const percent = total > 0 ? Math.round((hits / total) * 100) : 0;

  return (
    <View style={styles.card}>
      <View style={styles.iconWrap}>
        <LinearGradient
          colors={percent >= 60 ? ['#22C55E', '#16A34A'] : [colors.gradientStart, colors.gradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.iconBg}
        >
          <Ionicons
            name={percent >= 60 ? 'trophy' : 'refresh'}
            size={36}
            color={colors.white}
          />
        </LinearGradient>
      </View>

      <Text style={styles.title}>Exercícios Finalizados</Text>

      <View style={styles.scoreRow}>
        <Text style={styles.score}>
          {hits} de {total}
        </Text>
      </View>

      <View style={styles.percentContainer}>
        <View style={styles.percentTrack}>
          <View style={[styles.percentFill, { width: `${percent}%` }]} />
        </View>
        <Text style={styles.percentText}>{percent}%</Text>
      </View>

      <Text style={styles.message}>{getMessage(percent)}</Text>
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
    alignItems: 'center',
    gap: spacing.base,
  },
  iconWrap: {
    marginBottom: spacing.sm,
  },
  iconBg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.glow,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    letterSpacing: typography.letterSpacing.wide,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  score: {
    fontSize: typography.fontSize.giant || 36,
    fontWeight: typography.fontWeight.extrabold,
    color: colors.text,
  },
  percentContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  percentTrack: {
    flex: 1,
    height: 8,
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  percentFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: radius.full,
  },
  percentText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    minWidth: 50,
    textAlign: 'right',
  },
  message: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.fontSize.md * typography.lineHeight.relaxed,
  },
});
