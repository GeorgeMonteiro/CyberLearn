import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadows } from '../theme';
import assessmentQuestions from '../data/assessmentQuestions';
import mockQuestions from '../data/mockQuestions';
import { useProgress } from '../context/ProgressContext';

export default function QuizScreen() {
  const route = useRoute();
  const moduleId = route.params?.moduleId || 'logica';
  const isModuleQuiz = route.params?.source === 'module';
  const isFinalTest = route.params?.source === 'final';

  const navigation = useNavigation();
  const { completeModule, getModuleProgress, saveQuizScore, saveFinalTestScore } = useProgress();

  if (!isFinalTest) {
    const moduleLessonsCount = 9;
    const { completed } = getModuleProgress(moduleId, moduleLessonsCount);
    const allCompleted = completed >= moduleLessonsCount;

    if (!allCompleted) {
      return (
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', padding: spacing.xl }]}>
          <Ionicons name="lock-closed-outline" size={64} color={colors.textMuted} />
          <Text style={{ color: colors.textMuted, fontSize: 18, marginTop: spacing.lg, textAlign: 'center', marginBottom: spacing.xl }}>
            Complete todas as {moduleLessonsCount} lições do módulo para fazer o Quiz.
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} style={{ backgroundColor: colors.surface, paddingVertical: spacing.base, paddingHorizontal: spacing.xxl, borderRadius: radius.xl, borderWidth: 1, borderColor: colors.border + '50' }}>
            <Text style={{ color: colors.text, fontWeight: 'bold' }}>Voltar ao módulo</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const QUESTIONS = useMemo(() => {
    if (isModuleQuiz) {
      const filtered = mockQuestions.filter((q) => q.moduleId === moduleId);
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 10);
    }
    if (isFinalTest) {
      const filtered = assessmentQuestions.filter((q) => q.moduleId === moduleId);
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 30);
    }
    const filtered = mockQuestions.filter((q) => q.moduleId === moduleId);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }, [moduleId, isModuleQuiz, isFinalTest]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = QUESTIONS.length;
  const current = total > 0 ? QUESTIONS[currentIndex] : null;
  const progress = total > 0 ? ((currentIndex + 1) / total) * 100 : 0;

  if (!current && !finished) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', padding: spacing.xl }]}>
        <Ionicons name="alert-circle-outline" size={64} color={colors.textMuted} />
        <Text style={{ color: colors.textMuted, fontSize: 18, marginTop: spacing.lg, textAlign: 'center' }}>
          Nenhuma pergunta disponível para este módulo.
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} style={{ backgroundColor: colors.surface, paddingVertical: spacing.base, paddingHorizontal: spacing.xxl, borderRadius: radius.xl, borderWidth: 1, borderColor: colors.border + '50', marginTop: spacing.xl }}>
          <Text style={{ color: colors.text, fontWeight: 'bold' }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function handleSelect(index) {
    setSelectedOption(index);
  }

  function handleNext() {
    if (selectedOption === current.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setFinished(true);
    }
  }

  function percentage() {
    return Math.round((score / total) * 100);
  }

  function isApproved() {
    return percentage() >= 70;
  }

  useEffect(() => {
    if (finished) {
      const pct = Math.round((score / total) * 100);
      if (isFinalTest) {
        saveFinalTestScore(moduleId, score, total);
      } else {
        saveQuizScore(moduleId, score, total);
      }
      if (!isFinalTest && pct >= 70) {
        completeModule(moduleId);
      }
    }
  }, [finished, score, total, moduleId, isFinalTest]);

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = percentage();
    const approved = isApproved();
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={
            approved
              ? ['rgba(34, 197, 94, 0.8)', 'rgba(16, 185, 129, 0.6)']
              : ['rgba(239, 68, 68, 0.8)', 'rgba(185, 28, 28, 0.6)']
          }
          style={styles.resultHeader}
        >
          <SafeAreaView>
            <View style={styles.resultContent}>
              <Ionicons
                name={approved ? 'trophy' : 'sad-outline'}
                size={72}
                color={colors.white}
              />
              <Text style={styles.resultTitle}>
                {approved ? 'Aprovado!' : 'Não aprovado'}
              </Text>
              <Text style={styles.resultScore}>{pct}%</Text>
              {approved && (
                <Text style={styles.resultBadge}>
                  {isFinalTest ? 'Parabéns! Você concluiu o teste final do módulo!' : 'Parabéns! Você atingiu a média necessária.'}
                </Text>
              )}
              {!approved && (
                <Text style={styles.resultBadge}>
                  Você precisa de 70% ou mais para ser aprovado. Continue estudando!
                </Text>
              )}
            </View>
          </SafeAreaView>
        </LinearGradient>

        <View style={styles.resultActions}>
          <TouchableOpacity
            onPress={handleRestart}
            activeOpacity={0.8}
            style={styles.restartButton}
          >
            <Ionicons name="refresh-outline" size={20} color={colors.white} />
            <Text style={styles.restartButtonText}>{isFinalTest ? 'Refazer Teste Final' : 'Refazer QUIZ'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={[styles.restartButton, { marginTop: spacing.md }]}
          >
            <Ionicons name="arrow-back-outline" size={20} color={colors.white} />
            <Text style={styles.restartButtonText}>Voltar ao módulo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <SafeAreaView>
          <View style={styles.headerTop}>
            <Text style={styles.headerLabel}>{isFinalTest ? 'TESTE FINAL' : 'QUIZ'}</Text>
            <Text style={styles.headerTitle}>
              {currentIndex + 1} de {total}
            </Text>
            <Text style={styles.headerProgress}>{progress.toFixed(0)}%</Text>
          </View>
          <View style={styles.progressBarTrack}>
            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.questionCard}>
          <Text style={styles.questionNumber}>Questão {currentIndex + 1}</Text>
          <Text style={styles.questionText}>{current.question}</Text>
        </View>

        <View style={styles.optionsContainer}>
          {current.options.map((opt, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelect(index)}
                activeOpacity={0.7}
                style={[
                  styles.option,
                  selectedOption === index && styles.optionSelected,
                ]}
              >
                <View style={styles.optionRow}>
                  <View
                    style={[
                      styles.optionCircle,
                      selectedOption === index && styles.optionCircleSelected,
                    ]}
                  >
                    <Text style={styles.optionLetter}>
                      {String.fromCharCode(65 + index)}
                    </Text>
                  </View>
                  <Text style={styles.optionText}>{opt}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {selectedOption !== null && (
          <TouchableOpacity
            onPress={handleNext}
            activeOpacity={0.8}
            style={styles.nextOuter}
          >
            <LinearGradient
              colors={[colors.gradientStart, colors.gradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.nextButton}
            >
              <Text style={styles.nextButtonText}>
                {currentIndex < total - 1 ? 'Próxima questão' : 'Ver resultado'}
              </Text>
              <Ionicons name="arrow-forward" size={18} color={colors.white} />
            </LinearGradient>
          </TouchableOpacity>
        )}

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingBottom: spacing.lg,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
  },
  headerLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: typography.letterSpacing.wide,
    minWidth: 80,
  },
  headerTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
  headerProgress: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
  progressBarTrack: {
    marginHorizontal: spacing.xl,
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.white,
    borderRadius: radius.full,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
  },
  questionCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border + '30',
    ...shadows.md,
  },
  questionNumber: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.cyberBlue,
    marginBottom: spacing.sm,
    letterSpacing: typography.letterSpacing.wide,
  },
  questionText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.text,
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
  },
  optionsContainer: {
    marginTop: spacing.xl,
    gap: spacing.md,
  },
  option: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.base,
    borderWidth: 1,
    borderColor: colors.border + '30',
    ...shadows.sm,
  },
  optionCorrect: {
    borderColor: colors.success,
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
  },
  optionWrong: {
    borderColor: colors.error,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  optionSelected: {
    borderColor: colors.primary,
    backgroundColor: 'rgba(242, 85, 122, 0.1)',
  },
  optionDisabled: {
    opacity: 0.5,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  optionCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionCircleSelected: {
    backgroundColor: colors.primary,
  },
  optionCircleCorrect: {
    backgroundColor: colors.success,
  },
  optionCircleWrong: {
    backgroundColor: colors.error,
  },
  optionLetter: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.textSecondary,
  },
  optionText: {
    flex: 1,
    fontSize: typography.fontSize.md,
    color: colors.text,
    lineHeight: typography.fontSize.md * typography.lineHeight.relaxed,
  },
  optionTextCorrect: {
    color: colors.success,
  },
  optionTextWrong: {
    color: colors.error,
  },
  optionTextDisabled: {
    color: colors.textMuted,
  },
  nextOuter: {
    marginTop: spacing.xxl,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.base,
    borderRadius: radius.xl,
    minHeight: 56,
    ...shadows.lg,
  },
  nextButtonText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
    letterSpacing: typography.letterSpacing.wide,
  },
  bottomSpacer: {
    height: spacing.xxxl,
  },
  resultHeader: {
    paddingBottom: spacing.xxl,
  },
  resultContent: {
    alignItems: 'center',
    paddingTop: spacing.huge,
    paddingHorizontal: spacing.xl,
  },
  resultTitle: {
    fontSize: typography.fontSize.display,
    fontWeight: typography.fontWeight.extrabold,
    color: colors.white,
    marginTop: spacing.lg,
  },
  resultScore: {
    fontSize: typography.fontSize.giant,
    fontWeight: typography.fontWeight.extrabold,
    color: colors.white,
    marginTop: spacing.sm,
  },
  resultDetail: {
    fontSize: typography.fontSize.base,
    color: 'rgba(255,255,255,0.8)',
    marginTop: spacing.sm,
  },
  resultBadge: {
    fontSize: typography.fontSize.md,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginTop: spacing.lg,
    lineHeight: typography.fontSize.md * typography.lineHeight.relaxed,
    paddingHorizontal: spacing.lg,
  },
  resultActions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  restartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    paddingVertical: spacing.base,
    paddingHorizontal: spacing.xxl,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border + '50',
    ...shadows.md,
  },
  restartButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
});
