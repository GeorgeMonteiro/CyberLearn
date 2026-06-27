import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useProgress } from '../context/ProgressContext';
import { colors, spacing, typography, radius, shadows } from '../theme';
import ShieldIcon from '../components/ShieldIcon';
import Avatar from '../components/Avatar';

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

const LESSON_TITLES = {
  logica_1: 'O que é Lógica de Programação',
  logica_2: 'Algoritmos',
  logica_3: 'Fluxogramas',
  logica_4: 'Variáveis',
  logica_5: 'Tipos de Dados',
  logica_6: 'Operadores',
  logica_7: 'Estruturas Condicionais',
  logica_8: 'Estruturas de Repetição',
  logica_9: 'Exercícios Práticos',
  redes_1: 'Introdução às Redes',
  redes_2: 'Modelo OSI',
  redes_3: 'Modelo TCP/IP',
  redes_4: 'Endereçamento IP',
  redes_5: 'DNS',
  redes_6: 'Protocolos de Comunicação',
  redes_7: 'Dispositivos de Rede',
  redes_8: 'Segurança em Redes',
  redes_9: 'Exercícios Práticos',
  seguranca_1: 'Introdução à Cibersegurança',
  seguranca_2: 'Os 3 Pilares da Informação',
  seguranca_3: 'Malware',
  seguranca_4: 'Ameaças e Vulnerabilidades',
  seguranca_5: 'Tipos de Ataques',
  seguranca_6: 'Criptografia',
  seguranca_7: 'Segurança em Redes e Firewall',
  seguranca_8: 'Boas Práticas de Segurança',
  seguranca_9: 'Exercícios Práticos',
  cti_1: 'Introdução à CTI',
  cti_2: 'Ciclo de Inteligência',
  cti_3: 'Fontes de Inteligência',
  cti_4: 'Indicadores de Compromisso',
  cti_5: 'Análise de Ameaças (TTPs)',
  cti_6: 'Frameworks de Inteligência',
  cti_7: 'Coleta e Análise de Dados',
  cti_8: 'Relatórios e Disseminação',
  cti_9: 'Exercícios Práticos',
  redteam_1: 'Introdução ao Red Team',
  redteam_2: 'Planejamento e Escopo',
  redteam_3: 'Reconhecimento (Footprinting)',
  redteam_4: 'Análise de Vulnerabilidades',
  redteam_5: 'Exploração (Exploitation)',
  redteam_6: 'Pós-Exploração e Movimento Lateral',
  redteam_7: 'Engenharia Social',
  redteam_8: 'Relatórios e Remediação',
  redteam_9: 'Exercícios Práticos',
  blueteam_1: 'Introdução ao Blue Team',
  blueteam_2: 'Monitoramento e SIEM',
  blueteam_3: 'Detecção de Intrusões (IDS/IPS)',
  blueteam_4: 'Análise de Logs e Forense',
  blueteam_5: 'Resposta a Incidentes',
  blueteam_6: 'Threat Hunting',
  blueteam_7: 'Hardening e Configuração Segura',
  blueteam_8: 'Continuidade e DRP',
  blueteam_9: 'Exercícios Práticos',
  gestao_1: 'Introdução à Gestão de Vulnerabilidades',
  gestao_2: 'Identificação e Descoberta',
  gestao_3: 'Classificação e Priorização',
  gestao_4: 'CVSS e Pontuação de Riscos',
  gestao_5: 'Remediação e Mitigação',
  gestao_6: 'Ferramentas de Scan',
  gestao_7: 'Políticas e SLAs',
  gestao_8: 'Relatórios e Métricas',
  gestao_9: 'Exercícios Práticos',
  grc_1: 'Introdução à GRC',
  grc_2: 'Governança Corporativa e de TI',
  grc_3: 'Gestão de Riscos',
  grc_4: 'Conformidade e Auditoria',
  grc_5: 'Frameworks e Normas de Segurança',
  grc_6: 'Políticas e Procedimentos',
  grc_7: 'Gestão de Incidentes e Continuidade',
  grc_8: 'Métricas e Reportes de GRC',
  grc_9: 'Exercícios Práticos',
};

export default function HomeScreen() {
  const navigation = useNavigation();
  const { progress, getModuleProgress, getQuizScore } = useProgress();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownOptions = [
    { label: 'Meu Perfil', action: () => navigation.navigate('Profile') },
    { label: 'Meu Desempenho', action: () => navigation.navigate('Main', { screen: 'Progress' }) },
    { label: 'Sair', action: () => navigation.replace('Welcome') },
  ];

  function handleBack() {
    navigation.goBack();
  }

  const moduleIds = Object.keys(MODULE_INFO);
  const allTrailOrder = ['iniciante', 'especializada'];
  const allModulesByTrail = {
    iniciante: moduleIds.filter((id) => MODULE_INFO[id].trail === 'iniciante'),
    especializada: moduleIds.filter((id) => MODULE_INFO[id].trail === 'especializada'),
  };
  const trailLabels = { iniciante: 'Trilha Iniciante', especializada: 'Trilha Especializada' };

  const totalLessonsAll = moduleIds.reduce((sum, id) => sum + MODULE_INFO[id].lessons, 0);
  const totalCompletedAll = moduleIds.reduce(
    (sum, id) => sum + getModuleProgress(id, MODULE_INFO[id].lessons).completed,
    0
  );
  const overallPercentage = Math.round((totalCompletedAll / totalLessonsAll) * 100);

  function getTrailAverage(trail) {
    const modules = allModulesByTrail[trail];
    const scores = modules
      .map((id) => getQuizScore(id))
      .filter((s) => s !== null);
    if (scores.length === 0) return null;
    const avg = Math.round(scores.reduce((sum, s) => sum + s.percentage, 0) / scores.length);
    return avg;
  }

  function findCurrentModule() {
    for (const trail of allTrailOrder) {
      for (const id of allModulesByTrail[trail]) {
        const { completed, total } = getModuleProgress(id, MODULE_INFO[id].lessons);
        if (completed > 0 && completed < total) return id;
      }
    }
    for (const trail of allTrailOrder) {
      for (const id of allModulesByTrail[trail]) {
        const { completed } = getModuleProgress(id, MODULE_INFO[id].lessons);
        if (completed === 0) return id;
      }
    }
    return 'logica';
  }

  function getLastLesson(moduleId) {
    const completedLessons = progress[moduleId]?.completedLessons || [];
    if (completedLessons.length === 0) return null;
    return completedLessons[completedLessons.length - 1];
  }

  function getNextLesson(moduleId) {
    const total = MODULE_INFO[moduleId].lessons;
    const completedLessons = progress[moduleId]?.completedLessons || [];
    for (let i = 1; i <= total; i++) {
      const lessonId = `${moduleId}_${i}`;
      if (!completedLessons.includes(lessonId)) return lessonId;
    }
    return null;
  }

  const currentModuleId = findCurrentModule();
  const currentInfo = MODULE_INFO[currentModuleId];
  const currentProgress = getModuleProgress(currentModuleId, currentInfo.lessons);
  const lastLessonId = getLastLesson(currentModuleId);
  const nextLessonId = getNextLesson(currentModuleId);

  function handleContinue() {
    if (nextLessonId) {
      const isLastLesson = nextLessonId.endsWith('_9');
      if (isLastLesson) {
        navigation.navigate('ModuleDetail', { moduleId: currentModuleId });
      } else {
        navigation.navigate('Lesson', { lessonId: nextLessonId, moduleId: currentModuleId });
      }
    } else {
      navigation.navigate('ModuleDetail', { moduleId: currentModuleId });
    }
  }

  function handleModulePress(moduleId) {
    navigation.navigate('ModuleDetail', { moduleId });
  }

  function renderProgressBar(percentage, color = colors.primaryPurple) {
    return (
      <View style={styles.moduleBarTrack}>
        <View style={[styles.moduleBarFill, { width: `${percentage}%`, backgroundColor: color }]} />
      </View>
    );
  }

  function renderNotasBlock(trail) {
    const modules = allModulesByTrail[trail];
    const avg = getTrailAverage(trail);
    return (
      <View key={trail} style={styles.notasBlock}>
        <View style={styles.notasHeader}>
          <Text style={styles.sectionTitle}>{trailLabels[trail]}</Text>
          {avg !== null && (
            <View style={[styles.notasAvgBadge, avg >= 70 ? styles.notaPassed : styles.notaFailed]}>
              <Text style={[styles.notasAvgText, { color: avg >= 70 ? colors.success : colors.error }]}>
                Média: {avg}%
              </Text>
            </View>
          )}
        </View>
        {modules.map((moduleId) => {
          const info = MODULE_INFO[moduleId];
          const quizScore = getQuizScore(moduleId);
          return (
            <View key={moduleId} style={styles.notaRow}>
              <View style={styles.notaRowLeft}>
                <Ionicons name={info.icon} size={16} color={colors.cyberBlue} />
                <Text style={styles.notaModuleTitle}>{info.title}</Text>
              </View>
              {quizScore ? (
                <View style={[styles.notaScoreBadge, quizScore.percentage >= 70 ? styles.notaPassed : styles.notaFailed]}>
                  <Ionicons
                    name={quizScore.percentage >= 70 ? 'checkmark-circle' : 'close-circle'}
                    size={14}
                    color={quizScore.percentage >= 70 ? colors.success : colors.error}
                  />
                  <Text style={[styles.notaScoreText, { color: quizScore.percentage >= 70 ? colors.success : colors.error }]}>
                    {quizScore.percentage}%
                  </Text>
                </View>
              ) : (
                <View style={styles.notaScoreBadge}>
                  <Text style={styles.notaScoreEmpty}>-</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    );
  }

  function renderScoreBadge(moduleId) {
    const quizScore = getQuizScore(moduleId);
    if (!quizScore) {
      return (
        <View style={styles.scoreBadge}>
          <Text style={styles.scoreBadgeText}>-</Text>
        </View>
      );
    }
    const passed = quizScore.percentage >= 70;
    return (
      <View style={[styles.scoreBadge, passed ? styles.scoreBadgePassed : styles.scoreBadgeFailed]}>
        <Ionicons
          name={passed ? 'checkmark-circle' : 'close-circle'}
          size={12}
          color={passed ? colors.success : colors.error}
        />
        <Text style={[styles.scoreBadgeText, { color: passed ? colors.success : colors.error }]}>
          {quizScore.percentage}%
        </Text>
      </View>
    );
  }

  function renderModuleCard(moduleId) {
    const info = MODULE_INFO[moduleId];
    const { completed, percentage } = getModuleProgress(moduleId, info.lessons);
    return (
      <TouchableOpacity
        key={moduleId}
        style={styles.moduleRow}
        onPress={() => handleModulePress(moduleId)}
        activeOpacity={0.7}
      >
        <View style={styles.moduleRowIcon}>
          <Ionicons name={info.icon} size={20} color={colors.cyberBlue} />
        </View>
        <View style={styles.moduleRowInfo}>
          <Text style={styles.moduleRowTitle}>{info.title}</Text>
          <View style={styles.moduleRowBottom}>
            {renderProgressBar(percentage)}
            <Text style={styles.moduleRowCount}>{completed}/{info.lessons}</Text>
          </View>
        </View>
        {renderScoreBadge(moduleId)}
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {dropdownVisible && (
        <Pressable style={styles.overlay} onPress={() => setDropdownVisible(false)} />
      )}

      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <SafeAreaView>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <Ionicons name="chevron-back" size={24} color={colors.white} />
              </TouchableOpacity>
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
        </SafeAreaView>
      </LinearGradient>

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
        <Text style={styles.sectionTitle}>Trilha Atual</Text>

        <LinearGradient
          colors={['rgba(139, 61, 255, 0.25)', 'rgba(236, 92, 135, 0.15)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.currentCard}
        >
          <View style={styles.currentTop}>
            <View style={styles.currentIcon}>
              <Ionicons name={currentInfo.icon} size={32} color={colors.primaryPurple} />
            </View>
            <View style={styles.currentInfo}>
              <Text style={styles.currentModuleTitle}>{currentInfo.title}</Text>
              {lastLessonId && (
                <Text style={styles.currentLastLesson}>
                  Última aula: {LESSON_TITLES[lastLessonId] || lastLessonId}
                </Text>
              )}
            </View>
          </View>

          <View style={styles.currentBarSection}>
            {renderProgressBar(currentProgress.percentage, colors.primaryPurple)}
            <Text style={styles.currentBarLabel}>{currentProgress.percentage}%</Text>
          </View>

          <TouchableOpacity
            onPress={handleContinue}
            activeOpacity={0.8}
            style={styles.continueButton}
          >
            <LinearGradient
              colors={[colors.gradientStart, colors.gradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.continueGradient}
            >
              <Ionicons name="play-outline" size={18} color={colors.white} />
              <Text style={styles.continueText}>
                {nextLessonId ? 'Continuar' : 'Revisar módulo'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.overallCard}>
          <View style={styles.overallIconRow}>
            <Ionicons name="trophy" size={28} color={colors.warning} />
          </View>
          <Text style={styles.overallPercentage}>{overallPercentage}%</Text>
          <Text style={styles.overallLabel}>
            {totalCompletedAll} de {totalLessonsAll} aulas concluídas
          </Text>
          <View style={styles.overallBarTrack}>
            <View style={[styles.overallBarFill, { width: `${overallPercentage}%` }]} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Notas por Trilha</Text>
        {allTrailOrder.map(renderNotasBlock)}

        <Text style={styles.sectionTitle}>Trilha Iniciante</Text>
        {allModulesByTrail.iniciante.map(renderModuleCard)}

        <Text style={styles.sectionTitle}>Trilha Especializada</Text>
        {allModulesByTrail.especializada.map(renderModuleCard)}

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
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  scrollContent: {
    padding: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.base,
    letterSpacing: typography.letterSpacing.wide,
    marginTop: spacing.md,
  },

  currentCard: {
    borderRadius: radius.xl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.primaryPurple + '40',
    ...shadows.glow,
    marginBottom: spacing.xxl,
  },
  currentTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.base,
    marginBottom: spacing.lg,
  },
  currentIcon: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(139, 61, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentInfo: {
    flex: 1,
  },
  currentModuleTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  currentLastLesson: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  currentBarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  currentBarLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    minWidth: 36,
    textAlign: 'right',
  },
  continueButton: {
    borderRadius: radius.full,
    overflow: 'hidden',
    alignSelf: 'stretch',
  },
  continueGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
    borderRadius: radius.full,
  },
  continueText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
    letterSpacing: typography.letterSpacing.wide,
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

  moduleRow: {
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
  moduleRowIcon: {
    width: 42,
    height: 42,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moduleRowInfo: {
    flex: 1,
  },
  moduleRowTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  moduleRowBottom: {
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
    borderRadius: radius.full,
  },
  moduleRowCount: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.textSecondary,
  },
  scoreBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.full,
    backgroundColor: colors.surfaceLight,
  },
  scoreBadgePassed: {
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
  },
  scoreBadgeFailed: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
  },
  scoreBadgeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.textMuted,
  },

  notasBlock: {
    marginBottom: spacing.xxl,
  },
  notasHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.base,
  },
  notasAvgBadge: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: radius.full,
  },
  notasAvgText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
  },
  notaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border + '30',
  },
  notaRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flex: 1,
  },
  notaModuleTitle: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
  },
  notaScoreBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.full,
    backgroundColor: colors.surfaceLight,
  },
  notaPassed: {
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
  },
  notaFailed: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
  },
  notaScoreText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
  },
  notaScoreEmpty: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.textMuted,
  },

  bottomSpacer: {
    height: spacing.xxxl,
  },
});
