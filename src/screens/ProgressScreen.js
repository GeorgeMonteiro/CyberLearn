import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useProgress } from '../context/ProgressContext';
import { colors, spacing, typography, radius, shadows } from '../theme';

const MODULE_INFO = {
  logica: { title: 'Lógica de Programação', icon: 'code-slash', trail: 'iniciante', lessons: 9 },
  redes: { title: 'Fundamentos de Redes', icon: 'wifi', trail: 'iniciante', lessons: 9 },
  seguranca: { title: 'Fundamentos de Cibersegurança', icon: 'shield-checkmark', trail: 'iniciante', lessons: 9 },
  cti: { title: 'Cyber Threat Intelligence', icon: 'eye-outline', trail: 'especializada', lessons: 9 },
  redteam: { title: 'Red Team', icon: 'flame-outline', trail: 'especializada', lessons: 9 },
  blueteam: { title: 'Blue Team', icon: 'water-outline', trail: 'especializada', lessons: 9 },
  gestao: { title: 'Gestão de Vulnerabilidades', icon: 'warning-outline', trail: 'especializada', lessons: 9 },
  grc: { title: 'Governança, Risco e Conformidade', icon: 'briefcase-outline', trail: 'especializada', lessons: 9 },
};

export default function ProgressScreen() {
  const navigation = useNavigation();
  const { getModuleProgress } = useProgress();

  function handleBack() {
    navigation.getParent()?.navigate('HomeTab', { screen: 'LevelSelection' });
  }

  const moduleIds = Object.keys(MODULE_INFO);
  const totalLessonsAll = moduleIds.reduce((sum, id) => sum + MODULE_INFO[id].lessons, 0);
  const totalCompletedAll = moduleIds.reduce(
    (sum, id) => sum + getModuleProgress(id, MODULE_INFO[id].lessons).completed,
    0
  );
  const overallPercentage = Math.round((totalCompletedAll / totalLessonsAll) * 100);

  const beginnerModules = moduleIds.filter((id) => MODULE_INFO[id].trail === 'iniciante');
  const expertModules = moduleIds.filter((id) => MODULE_INFO[id].trail === 'especializada');

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <SafeAreaView>
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Ionicons name="chevron-back" size={24} color={colors.white} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Meu Progresso</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.overallCard}>
          <View style={styles.overallIconRow}>
            <Ionicons name="trophy" size={32} color={colors.warning} />
          </View>
          <Text style={styles.overallPercentage}>{overallPercentage}%</Text>
          <Text style={styles.overallLabel}>
            {totalCompletedAll} de {totalLessonsAll} aulas concluídas
          </Text>
          <View style={styles.overallBarTrack}>
            <View style={[styles.overallBarFill, { width: `${overallPercentage}%` }]} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Trilha Iniciante</Text>
        {beginnerModules.map((id) => {
          const info = MODULE_INFO[id];
          const { completed, percentage } = getModuleProgress(id, info.lessons);
          return (
            <View key={id} style={styles.moduleCard}>
              <View style={styles.moduleIcon}>
                <Ionicons name={info.icon} size={24} color={colors.cyberBlue} />
              </View>
              <View style={styles.moduleInfo}>
                <Text style={styles.moduleTitle}>{info.title}</Text>
                <View style={styles.moduleBarRow}>
                  <View style={styles.moduleBarTrack}>
                    <View style={[styles.moduleBarFill, { width: `${percentage}%` }]} />
                  </View>
                  <Text style={styles.moduleCount}>{completed}/{info.lessons}</Text>
                </View>
              </View>
            </View>
          );
        })}

        <Text style={styles.sectionTitle}>Trilha Especializada</Text>
        {expertModules.map((id) => {
          const info = MODULE_INFO[id];
          const { completed, percentage } = getModuleProgress(id, info.lessons);
          return (
            <View key={id} style={styles.moduleCard}>
              <View style={styles.moduleIcon}>
                <Ionicons name={info.icon} size={24} color={colors.cyberBlue} />
              </View>
              <View style={styles.moduleInfo}>
                <Text style={styles.moduleTitle}>{info.title}</Text>
                <View style={styles.moduleBarRow}>
                  <View style={styles.moduleBarTrack}>
                    <View style={[styles.moduleBarFill, { width: `${percentage}%` }]} />
                  </View>
                  <Text style={styles.moduleCount}>{completed}/{info.lessons}</Text>
                </View>
              </View>
            </View>
          );
        })}

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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing.display,
    paddingBottom: spacing.sm,
    paddingHorizontal: spacing.xl,
  },
  headerTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
    letterSpacing: typography.letterSpacing.wide,
    marginLeft: spacing.md,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    padding: spacing.xl,
  },
  overallCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.xl,
    alignItems: 'center',
    marginBottom: spacing.xxl,
    borderWidth: 1,
    borderColor: colors.border + '30',
    ...shadows.md,
  },
  overallIconRow: {
    marginBottom: spacing.md,
  },
  overallPercentage: {
    fontSize: 48,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    letterSpacing: typography.letterSpacing.wider,
  },
  overallLabel: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  overallBarTrack: {
    width: '100%',
    height: 12,
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  overallBarFill: {
    height: '100%',
    backgroundColor: colors.success,
    borderRadius: radius.full,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.base,
    letterSpacing: typography.letterSpacing.wide,
    marginTop: spacing.md,
  },
  moduleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.base,
    marginBottom: spacing.md,
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border + '30',
    ...shadows.sm,
  },
  moduleIcon: {
    width: 48,
    height: 48,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moduleInfo: {
    flex: 1,
  },
  moduleTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  moduleBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  moduleBarTrack: {
    flex: 1,
    height: 6,
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  moduleBarFill: {
    height: '100%',
    backgroundColor: colors.primaryPurple,
    borderRadius: radius.full,
  },
  moduleCount: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.textSecondary,
  },
  bottomSpacer: {
    height: spacing.xxxl,
  },
});
