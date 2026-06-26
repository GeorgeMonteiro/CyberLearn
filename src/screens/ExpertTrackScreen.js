import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadows } from '../theme';
import ShieldIcon from '../components/ShieldIcon';
import Avatar from '../components/Avatar';
import { useProgress } from '../context/ProgressContext';

const MODULE_LESSONS = {
  cti: 9,
  redteam: 9,
  blueteam: 9,
  gestao: 9,
  grc: 9,
};

const modules = [
  { id: 'cti', title: 'Cyber Threat Intelligence' },
  { id: 'redteam', title: 'Red Team' },
  { id: 'blueteam', title: 'Blue Team' },
  { id: 'gestao', title: 'Gestão de Vulnerabilidades' },
  { id: 'grc', title: 'Governança, Risco e Conformidade (GRC)' },
];

function totalTrailLessons() {
  return modules.reduce((sum, m) => sum + (MODULE_LESSONS[m.id] || 9), 0);
}

export default function ExpertTrackScreen() {
  const navigation = useNavigation();
  const { getModuleProgress } = useProgress();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const totalLessons = totalTrailLessons();
  const totalCompleted = modules.reduce(
    (sum, m) => sum + getModuleProgress(m.id, MODULE_LESSONS[m.id]).completed,
    0
  );
  const trailProgress = Math.round((totalCompleted / totalLessons) * 100);

  const dropdownOptions = [
    { label: 'Meu Perfil', action: () => {} },
    { label: 'Meu Desempenho', action: () => {} },
    { label: 'Sair', action: () => navigation.replace('Welcome') },
  ];

  function handleModulePress(moduleId) {
    navigation.navigate('ModuleDetail', { moduleId });
  }

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      style={styles.container}
    >
      {dropdownVisible && (
        <Pressable style={styles.overlay} onPress={() => setDropdownVisible(false)} />
      )}

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ShieldIcon size={40} />
          <Text style={styles.headerTitle}>CYBERLEARN</Text>
        </View>
        <TouchableOpacity
          onPress={() => setDropdownVisible(!dropdownVisible)}
          activeOpacity={0.7}
        >
          <Avatar name="Usuário" size={44} />
        </TouchableOpacity>
      </View>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          {dropdownOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.dropdownItem, index < dropdownOptions.length - 1 && styles.dropdownItemBorder]}
              onPress={() => {
                setDropdownVisible(false);
                option.action();
              }}
              activeOpacity={0.7}
            >
              <Text style={styles.dropdownItemText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.trailProgressSection}>
          <View style={styles.trailProgressRow}>
            <Ionicons name="trophy-outline" size={20} color={colors.warning} />
            <Text style={styles.trailProgressTitle}>Progresso da Trilha</Text>
          </View>
          <View style={styles.trailProgressBarTrack}>
            <View style={[styles.trailProgressBarFill, { width: `${trailProgress}%` }]} />
          </View>
          <Text style={styles.trailProgressLabel}>
            {totalCompleted}/{totalLessons} aulas concluídas ({trailProgress}%)
          </Text>
        </View>

        <Text style={styles.title}>Trilha Especializada</Text>
        <Text style={styles.subtitle}>Escolha sua área de especialização para continuar:</Text>

        <View style={styles.modulesContainer}>
          {modules.map((module) => {
            const { completed, percentage } = getModuleProgress(module.id, MODULE_LESSONS[module.id]);
            return (
              <TouchableOpacity
                key={module.id}
                style={styles.moduleButton}
                onPress={() => handleModulePress(module.id)}
                activeOpacity={0.75}
              >
                <View style={styles.moduleButtonContent}>
                  <Text style={styles.moduleButtonText}>
                    {module.title}
                  </Text>
                  <View style={styles.moduleProgressRow}>
                    <View style={styles.moduleProgressTrack}>
                      <View
                        style={[styles.moduleProgressFill, { width: `${percentage}%` }]}
                      />
                    </View>
                    <Text style={styles.moduleProgressLabel}>
                      {completed}/{MODULE_LESSONS[module.id]}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.display,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.lg,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  headerTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textLight,
    letterSpacing: typography.letterSpacing.wider,
  },
  dropdown: {
    position: 'absolute',
    top: 100,
    right: spacing.xl,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    minWidth: 180,
    zIndex: 2,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  dropdownItem: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  dropdownItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  dropdownItemText: {
    fontSize: typography.fontSize.base,
    color: colors.textLight,
    fontWeight: typography.fontWeight.medium,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
    paddingTop: spacing.xxl,
  },
  trailProgressSection: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginBottom: spacing.xxl,
  },
  trailProgressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  trailProgressTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textLight,
    letterSpacing: typography.letterSpacing.wide,
  },
  trailProgressBarTrack: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  trailProgressBarFill: {
    height: '100%',
    backgroundColor: colors.warning,
    borderRadius: radius.full,
  },
  trailProgressLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: 'rgba(255,255,255,0.8)',
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  title: {
    fontSize: typography.fontSize.display,
    fontWeight: typography.fontWeight.bold,
    color: colors.textLight,
    letterSpacing: typography.letterSpacing.wider,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.xxxl,
    opacity: 0.9,
  },
  modulesContainer: {
    width: '100%',
    gap: spacing.lg,
  },
  moduleButton: {
    backgroundColor: colors.buttonBg,
    borderRadius: radius.xxl,
    ...shadows.md,
  },
  moduleButtonContent: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
  },
  moduleButtonText: {
    fontSize: typography.fontSize.xl,
    color: '#FBBF24',
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.letterSpacing.wide,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  moduleProgressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  moduleProgressTrack: {
    flex: 1,
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  moduleProgressFill: {
    height: '100%',
    backgroundColor: colors.success,
    borderRadius: radius.full,
  },
  moduleProgressLabel: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: 'rgba(255,255,255,0.7)',
  },
});
