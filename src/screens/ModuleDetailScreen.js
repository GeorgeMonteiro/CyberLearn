import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadows } from '../theme';

const INITIAL_LESSONS = [
  {
    id: 'logica_1',
    icon: 'code-slash-outline',
    title: 'O que é Lógica de Programação',
    description: 'Entenda o conceito fundamental da lógica aplicada à programação.',
    status: 'in_progress',
  },
  {
    id: 'logica_2',
    icon: 'list-outline',
    title: 'Algoritmos',
    description: 'Aprenda a criar sequências lógicas de instruções para resolver problemas.',
    status: 'in_progress',
  },
  {
    id: 'logica_3',
    icon: 'git-branch-outline',
    title: 'Fluxogramas',
    description: 'Visualize algoritmos através de representações gráficas.',
    status: 'in_progress',
  },
  {
    id: 'logica_4',
    icon: 'cube-outline',
    title: 'Variáveis',
    description: 'Descubra como armazenar e manipular dados na memória.',
    status: 'in_progress',
  },
  {
    id: 'logica_5',
    icon: 'layers-outline',
    title: 'Tipos de Dados',
    description: 'Conheça os diferentes tipos de dados usados na programação.',
    status: 'in_progress',
  },
  {
    id: 'logica_6',
    icon: 'calculator-outline',
    title: 'Operadores',
    description: 'Utilize operadores para realizar cálculos e comparações.',
    status: 'in_progress',
  },
  {
    id: 'logica_7',
    icon: 'git-merge-outline',
    title: 'Estruturas Condicionais',
    description: 'Tome decisões no código com if, else e switch.',
    status: 'in_progress',
  },
  {
    id: 'logica_8',
    icon: 'sync-outline',
    title: 'Estruturas de Repetição',
    description: 'Automatize tarefas repetitivas com loops.',
    status: 'in_progress',
  },
  {
    id: 'logica_9',
    icon: 'rocket-outline',
    title: 'Exercícios Práticos',
    description: 'Pratique tudo o que aprendeu com exercícios hands-on.',
    status: 'in_progress',
  },
];

function getIconGradient(status) {
  if (status === 'completed') return ['#22C55E', '#16A34A'];
  if (status === 'in_progress') return [colors.gradientStart, colors.gradientEnd];
  return [colors.surfaceLight, colors.surfaceLight];
}

function StatusBadge({ status }) {
  if (status === 'completed') {
    return (
      <View style={[styles.badge, styles.badgeCompleted]}>
        <Ionicons name="checkmark-circle" size={16} color={colors.white} />
        <Text style={[styles.badgeText, styles.badgeTextCompleted]}>Concluído</Text>
      </View>
    );
  }
  if (status === 'in_progress') {
    return (
      <View style={[styles.badge, styles.badgeInProgress]}>
        <Ionicons name="time-outline" size={16} color={colors.white} />
        <Text style={styles.badgeText}>Em andamento</Text>
      </View>
    );
  }
  return (
    <View style={[styles.badge, styles.badgeLocked]}>
      <Ionicons name="lock-closed-outline" size={14} color={colors.textMuted} />
      <Text style={[styles.badgeText, styles.badgeTextLocked]}>Bloqueado</Text>
    </View>
  );
}

function LessonCard({ lesson, onStudy }) {
  const isLocked = lesson.status === 'locked';
  const isCompleted = lesson.status === 'completed';

  return (
    <TouchableOpacity
      onPress={() => !isLocked && onStudy(lesson.id)}
      disabled={isLocked}
      activeOpacity={0.7}
      style={styles.cardWrapper}
    >
      <View style={[styles.lessonCard, isLocked && styles.lessonCardLocked]}>
        <View style={styles.lessonRow}>
          <LinearGradient
            colors={getIconGradient(lesson.status)}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.lessonIcon, isLocked && styles.lessonIconLocked]}
          >
            <Ionicons
              name={lesson.icon}
              size={22}
              color={isLocked ? colors.textMuted : colors.white}
            />
          </LinearGradient>

          <View style={styles.lessonContent}>
            <Text
              style={[styles.lessonTitle, isLocked && styles.lessonTitleLocked]}
              numberOfLines={2}
            >
              {lesson.title}
            </Text>
            <Text
              style={[styles.lessonDescription, isLocked && styles.lessonDescriptionLocked]}
              numberOfLines={2}
            >
              {lesson.description}
            </Text>
          </View>
        </View>

        <View style={styles.lessonFooter}>
          <StatusBadge status={lesson.status} />

          {!isLocked && (
            <TouchableOpacity
              onPress={() => onStudy(lesson.id)}
              activeOpacity={0.8}
              style={[styles.studyButton, isCompleted && styles.studyButtonCompleted]}
            >
              <Text style={styles.studyButtonText}>
                {isCompleted ? 'Revisar' : 'Estudar'}
              </Text>
              {!isCompleted && (
                <Ionicons name="arrow-forward" size={14} color={colors.white} style={{ marginLeft: 4 }} />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function ModuleDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [lessons, setLessons] = useState(INITIAL_LESSONS);

  const completedCount = lessons.filter((l) => l.status === 'completed').length;
  const totalCount = lessons.length;
  const progress = Math.round((completedCount / totalCount) * 100);
  const allCompleted = lessons.every((l) => l.status === 'completed');

  function handleStudy(lessonId) {
    if (lessonId === 'logica_9') {
      navigation.navigate('Exercise', { moduleId: 'logica' });
    } else {
      navigation.navigate('Lesson', { lessonId, moduleId: 'logica' });
    }
  }

  function handleStartQuiz() {
    navigation.navigate('Quiz', { moduleId: 'logica' });
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
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="chevron-back" size={24} color={colors.white} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Lógica de Programação</Text>
            <View style={styles.headerRight} />
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressBarTrack}>
              <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
            </View>
            <Text style={styles.progressLabel}>{completedCount}/{totalCount} lições</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.banner}>
          <View style={styles.bannerIconRow}>
            <LinearGradient
              colors={['rgba(0, 212, 255, 0.15)', 'rgba(139, 61, 255, 0.15)']}
              style={styles.bannerIconBg}
            >
              <Ionicons name="code-slash" size={44} color={colors.cyberBlue} />
            </LinearGradient>
          </View>
          <Text style={styles.bannerText}>
            Aprenda os fundamentos da lógica de programação, desenvolvendo o raciocínio
            necessário para iniciar seus estudos em cibersegurança.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Lições</Text>

        <View style={styles.lessonsList}>
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} onStudy={handleStudy} />
          ))}
        </View>

        <TouchableOpacity
          onPress={handleStartQuiz}
          activeOpacity={0.8}
          style={styles.quizOuter}
        >
          <LinearGradient
            colors={[colors.gradientStart, colors.gradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.quizButton}
          >
            <Ionicons
              name="trophy-outline"
              size={24}
              color={colors.white}
            />
            <Text style={styles.quizButtonText}>
              Iniciar avaliação
            </Text>
          </LinearGradient>
        </TouchableOpacity>

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
    paddingHorizontal: spacing.base,
    paddingTop: spacing.sm,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
    letterSpacing: typography.letterSpacing.wide,
  },
  headerRight: {
    width: 40,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    marginTop: spacing.md,
    gap: spacing.md,
  },
  progressBarTrack: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.white,
    borderRadius: radius.full,
  },
  progressLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: 'rgba(255,255,255,0.8)',
  },

  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
  },
  banner: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border + '30',
    ...shadows.md,
  },
  bannerIconRow: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  bannerIconBg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 255, 0.3)',
  },
  bannerText: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.fontSize.md * typography.lineHeight.relaxed,
  },

  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.base,
    letterSpacing: typography.letterSpacing.wide,
  },

  lessonsList: {
    gap: spacing.md,
  },
  cardWrapper: {},
  lessonCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.base,
    borderWidth: 1,
    borderColor: colors.border + '30',
    ...shadows.md,
  },
  lessonCardLocked: {
    opacity: 0.55,
  },
  lessonRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  lessonIcon: {
    width: 48,
    height: 48,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lessonIconLocked: {
    backgroundColor: colors.surfaceLight,
  },
  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    lineHeight: typography.fontSize.base * typography.lineHeight.tight,
    marginBottom: spacing.xxs,
  },
  lessonTitleLocked: {
    color: colors.textMuted,
  },
  lessonDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  lessonDescriptionLocked: {
    color: colors.textMuted,
  },

  lessonFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border + '20',
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.full,
  },
  badgeCompleted: {
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
  },
  badgeInProgress: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
  },
  badgeLocked: {
    backgroundColor: 'transparent',
  },
  badgeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warning,
  },
  badgeTextCompleted: {
    color: colors.success,
  },
  badgeTextLocked: {
    color: colors.textMuted,
  },

  studyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryPurple,
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.base,
    borderRadius: radius.full,
  },
  studyButtonCompleted: {
    backgroundColor: colors.surfaceLight,
  },
  studyButtonText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },

  quizOuter: {
    marginTop: spacing.xxl,
    marginBottom: spacing.xl,
  },
  quizOuterDisabled: {
    opacity: 0.5,
  },
  quizButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.base,
    borderRadius: radius.xl,
    minHeight: 56,
    ...shadows.lg,
  },
  quizButtonText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
    letterSpacing: typography.letterSpacing.wide,
  },
  quizButtonTextDisabled: {
    color: colors.textMuted,
  },

  bottomSpacer: {
    height: spacing.xxxl,
  },
});
