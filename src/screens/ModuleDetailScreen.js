import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadows } from '../theme';
import { useProgress } from '../context/ProgressContext';
import { fetchAIQuestions } from '../services/QuizAIService';

const MODULE_DATA = {
  logica: {
    title: 'Lógica de Programação',
    icon: 'code-slash',
    banner: 'Aprenda os fundamentos da lógica de programação, desenvolvendo o raciocínio necessário para iniciar seus estudos em cibersegurança.',
    lessons: [
      { id: 'logica_1', icon: 'code-slash-outline', title: 'O que é Lógica de Programação', description: 'Entenda o conceito fundamental da lógica aplicada à programação.' },
      { id: 'logica_2', icon: 'list-outline', title: 'Algoritmos', description: 'Aprenda a criar sequências lógicas de instruções para resolver problemas.' },
      { id: 'logica_3', icon: 'git-branch-outline', title: 'Fluxogramas', description: 'Visualize algoritmos através de representações gráficas.' },
      { id: 'logica_4', icon: 'cube-outline', title: 'Variáveis', description: 'Descubra como armazenar e manipular dados na memória.' },
      { id: 'logica_5', icon: 'layers-outline', title: 'Tipos de Dados', description: 'Conheça os diferentes tipos de dados usados na programação.' },
      { id: 'logica_6', icon: 'calculator-outline', title: 'Operadores', description: 'Utilize operadores para realizar cálculos e comparações.' },
      { id: 'logica_7', icon: 'git-merge-outline', title: 'Estruturas Condicionais', description: 'Tome decisões no código com if, else e switch.' },
      { id: 'logica_8', icon: 'sync-outline', title: 'Estruturas de Repetição', description: 'Automatize tarefas repetitivas com loops.' },
      { id: 'logica_9', icon: 'rocket-outline', title: 'Exercícios Práticos', description: 'Pratique tudo o que aprendeu com exercícios hands-on.' },
    ],
  },
  redes: {
    title: 'Fundamentos de Redes',
    icon: 'wifi',
    banner: 'Aprenda os fundamentos de redes de computadores, desde o modelo OSI até protocolos de comunicação e segurança de rede.',
    lessons: [
      { id: 'redes_1', icon: 'wifi-outline', title: 'Introdução às Redes', description: 'Entenda o conceito fundamental de redes de computadores e suas topologias.' },
      { id: 'redes_2', icon: 'layers-outline', title: 'Modelo OSI', description: 'Conheça as 7 camadas do modelo OSI e como os dados fluem entre elas.' },
      { id: 'redes_3', icon: 'aperture-outline', title: 'Modelo TCP/IP', description: 'Aprenda o modelo TCP/IP e sua relação com o modelo OSI.' },
      { id: 'redes_4', icon: 'code-slash-outline', title: 'Endereçamento IP', description: 'Entenda IPv4, IPv6, máscaras de sub-rede e endereçamento.' },
      { id: 'redes_5', icon: 'search-outline', title: 'DNS', description: 'Descubra como o Sistema de Nomes de Domínio funciona na prática.' },
      { id: 'redes_6', icon: 'globe-outline', title: 'Protocolos de Comunicação', description: 'Conheça os principais protocolos: HTTP, HTTPS, FTP, SMTP, DHCP e SSH.' },
      { id: 'redes_7', icon: 'hardware-chip-outline', title: 'Dispositivos de Rede', description: 'Aprenda sobre hubs, switches, roteadores e meios de transmissão.' },
      { id: 'redes_8', icon: 'shield-checkmark-outline', title: 'Segurança em Redes', description: 'Proteja sua rede com firewalls, VPNs e criptografia.' },
      { id: 'redes_9', icon: 'rocket-outline', title: 'Exercícios Práticos', description: 'Pratique tudo o que aprendeu com exercícios hands-on.' },
    ],
  },
  seguranca: {
    title: 'Fundamentos de Cibersegurança',
    icon: 'shield-checkmark',
    banner: 'Aprenda os fundamentos da cibersegurança, desde os 3 pilares da informação até os principais tipos de malware, ameaças e ataques cibernéticos.',
    lessons: [
      { id: 'seguranca_1', icon: 'shield-outline', title: 'Introdução à Cibersegurança', description: 'Entenda o que é cibersegurança, sua importância e o cenário atual de ameaças.' },
      { id: 'seguranca_2', icon: 'key-outline', title: 'Os 3 Pilares da Informação', description: 'Conheça a Tríade CIA: Confidencialidade, Integridade e Disponibilidade.' },
      { id: 'seguranca_3', icon: 'bug-outline', title: 'Malware', description: 'Aprenda sobre vírus, worms, trojans, ransomware, spyware e outros malwares.' },
      { id: 'seguranca_4', icon: 'warning-outline', title: 'Ameaças e Vulnerabilidades', description: 'Entenda a diferença entre ameaça, vulnerabilidade e risco em segurança.' },
      { id: 'seguranca_5', icon: 'flash-off-outline', title: 'Tipos de Ataques', description: 'Conheça os principais ataques: phishing, DDoS, MitM, SQL Injection e engenharia social.' },
      { id: 'seguranca_6', icon: 'lock-closed-outline', title: 'Criptografia', description: 'Descubra como a criptografia simétrica, assimétrica e hashing protegem os dados.' },
      { id: 'seguranca_7', icon: 'shield-half-outline', title: 'Segurança em Redes e Firewall', description: 'Aprenda sobre firewalls, IDS/IPS, VPNs e proteção de perímetro.' },
      { id: 'seguranca_8', icon: 'checkmark-done-outline', title: 'Boas Práticas de Segurança', description: 'Implemente políticas de senhas, backups, 2FA e conscientização.' },
      { id: 'seguranca_9', icon: 'rocket-outline', title: 'Exercícios Práticos', description: 'Pratique tudo o que aprendeu com exercícios hands-on.' },
    ],
  },
  cti: {
    title: 'Cyber Threat Intelligence',
    icon: 'eye-outline',
    banner: 'Aprenda a coletar, analisar e disseminar inteligência sobre ameaças cibernéticas para antecipar e mitigar ataques.',
    lessons: [
      { id: 'cti_1', icon: 'compass-outline', title: 'Introdução à CTI', description: 'Entenda o que é Cyber Threat Intelligence e sua importância na segurança cibernética.' },
      { id: 'cti_2', icon: 'repeat-outline', title: 'Ciclo de Inteligência', description: 'Conheça as fases do ciclo de inteligência: planejamento, coleta, análise e disseminação.' },
      { id: 'cti_3', icon: 'search-outline', title: 'Fontes de Inteligência', description: 'Explore fontes como OSINT, HUMINT, SIGINT e feeds de ameaças.' },
      { id: 'cti_4', icon: 'pulse-outline', title: 'Indicadores de Compromisso', description: 'Aprenda sobre IOCs: hashes, IPs, domínios e assinaturas de malware.' },
      { id: 'cti_5', icon: 'git-network-outline', title: 'Análise de Ameaças (TTPs)', description: 'Estude Táticas, Técnicas e Procedimentos dos adversários.' },
      { id: 'cti_6', icon: 'layers-outline', title: 'Frameworks de Inteligência', description: 'Conheça MITRE ATT&CK, Diamond Model e Kill Chain.' },
      { id: 'cti_7', icon: 'funnel-outline', title: 'Coleta e Análise de Dados', description: 'Domine técnicas de coleta passiva e ativa e análise de dados.' },
      { id: 'cti_8', icon: 'document-text-outline', title: 'Relatórios e Disseminação', description: 'Produza relatórios de inteligência acionáveis para diferentes audiências.' },
      { id: 'cti_9', icon: 'rocket-outline', title: 'Exercícios Práticos', description: 'Pratique tudo o que aprendeu com exercícios hands-on.' },
    ],
  },
  redteam: {
    title: 'Red Team',
    icon: 'flame-outline',
    banner: 'Aprenda as técnicas e metodologias usadas por equipes Red Team para simular ataques reais e testar a segurança de organizações.',
    lessons: [
      { id: 'redteam_1', icon: 'flame-outline', title: 'Introdução ao Red Team', description: 'Entenda o papel do Red Team e a diferença entre pentest e Red Team.' },
      { id: 'redteam_2', icon: 'clipboard-outline', title: 'Planejamento e Escopo', description: 'Aprenda a definir escopo, regras de engajamento e autorizações.' },
      { id: 'redteam_3', icon: 'compass-outline', title: 'Reconhecimento (Footprinting)', description: 'Realize coleta de informações passiva e ativa sobre o alvo.' },
      { id: 'redteam_4', icon: 'search-circle-outline', title: 'Análise de Vulnerabilidades', description: 'Identifique e catalogue vulnerabilidades nos sistemas alvo.' },
      { id: 'redteam_5', icon: 'flash-outline', title: 'Exploração (Exploitation)', description: 'Execute exploração de vulnerabilidades para obter acesso inicial.' },
      { id: 'redteam_6', icon: 'git-branch-outline', title: 'Pós-Exploração e Movimento Lateral', description: 'Escalacione privilégios e mova-se lateralmente na rede.' },
      { id: 'redteam_7', icon: 'chatbubbles-outline', title: 'Engenharia Social', description: 'Aprenda técnicas de phishing, pretexting e manipulação psicológica.' },
      { id: 'redteam_8', icon: 'document-text-outline', title: 'Relatórios e Remediação', description: 'Documente descobertas e recomendações de correção.' },
      { id: 'redteam_9', icon: 'rocket-outline', title: 'Exercícios Práticos', description: 'Pratique tudo o que aprendeu com exercícios hands-on.' },
    ],
  },
  blueteam: {
    title: 'Blue Team',
    icon: 'water-outline',
    banner: 'Aprenda as estratégias e ferramentas usadas por equipes Blue Team para defender organizações contra ataques cibernéticos.',
    lessons: [
      { id: 'blueteam_1', icon: 'water-outline', title: 'Introdução ao Blue Team', description: 'Entenda o papel do Blue Team na defesa cibernética.' },
      { id: 'blueteam_2', icon: 'pulse-outline', title: 'Monitoramento e SIEM', description: 'Aprenda a centralizar e correlacionar logs com ferramentas SIEM.' },
      { id: 'blueteam_3', icon: 'warning-outline', title: 'Detecção de Intrusões (IDS/IPS)', description: 'Configure sistemas de detecção e prevenção de intrusões.' },
      { id: 'blueteam_4', icon: 'search-outline', title: 'Análise de Logs e Forense', description: 'Analise logs e evidências digitais para investigar incidentes.' },
      { id: 'blueteam_5', icon: 'flash-outline', title: 'Resposta a Incidentes', description: 'Siga o ciclo de resposta: preparação, detecção, contenção e recuperação.' },
      { id: 'blueteam_6', icon: 'git-network-outline', title: 'Threat Hunting', description: 'Proativamente busque por ameaças ocultas na rede.' },
      { id: 'blueteam_7', icon: 'lock-closed-outline', title: 'Hardening e Configuração Segura', description: 'Implemente endurecimento de sistemas e boas práticas de configuração.' },
      { id: 'blueteam_8', icon: 'sync-outline', title: 'Continuidade e DRP', description: 'Planeje continuidade de negócios e recuperação de desastres.' },
      { id: 'blueteam_9', icon: 'rocket-outline', title: 'Exercícios Práticos', description: 'Pratique tudo o que aprendeu com exercícios hands-on.' },
    ],
  },
  gestao: {
    title: 'Gestão de Vulnerabilidades',
    icon: 'warning-outline',
    banner: 'Aprenda a identificar, classificar, priorizar e remediar vulnerabilidades de forma estruturada e contínua.',
    lessons: [
      { id: 'gestao_1', icon: 'warning-outline', title: 'Introdução à Gestão de Vulnerabilidades', description: 'Entenda o que é gestão de vulnerabilidades e seu ciclo de vida.' },
      { id: 'gestao_2', icon: 'search-circle-outline', title: 'Identificação e Descoberta', description: 'Aprenda a descobrir vulnerabilidades com scanners e testes manuais.' },
      { id: 'gestao_3', icon: 'funnel-outline', title: 'Classificação e Priorização', description: 'Classifique vulnerabilidades por criticidade e contexto de negócio.' },
      { id: 'gestao_4', icon: 'bar-chart-outline', title: 'CVSS e Pontuação de Riscos', description: 'Domine o Common Vulnerability Scoring System e métricas de risco.' },
      { id: 'gestao_5', icon: 'hammer-outline', title: 'Remediação e Mitigação', description: 'Implemente correções, patches e controles compensatórios.' },
      { id: 'gestao_6', icon: 'hardware-chip-outline', title: 'Ferramentas de Scan', description: 'Trabalhe com Nessus, OpenVAS, Qualys e ferramentas de scan.' },
      { id: 'gestao_7', icon: 'document-text-outline', title: 'Políticas e SLAs', description: 'Crie políticas de gestão e acordos de nível de serviço.' },
      { id: 'gestao_8', icon: 'trending-up-outline', title: 'Relatórios e Métricas', description: 'Produza relatórios executivos e métricas de efetividade.' },
      { id: 'gestao_9', icon: 'rocket-outline', title: 'Exercícios Práticos', description: 'Pratique tudo o que aprendeu com exercícios hands-on.' },
    ],
  },
  grc: {
    title: 'Governança, Risco e Conformidade (GRC)',
    icon: 'briefcase-outline',
    banner: 'Aprenda os fundamentos de Governança, Risco e Conformidade, essenciais para estabelecer uma estrutura de segurança robusta e alinhada aos objetivos de negócio.',
    lessons: [
      { id: 'grc_1', icon: 'briefcase-outline', title: 'Introdução à GRC', description: 'Entenda o que é GRC e sua importância para a estratégia organizacional.' },
      { id: 'grc_2', icon: 'business-outline', title: 'Governança Corporativa e de TI', description: 'Conheça os princípios de governança aplicados à tecnologia e aos negócios.' },
      { id: 'grc_3', icon: 'warning-outline', title: 'Gestão de Riscos', description: 'Aprenda a identificar, analisar e tratar riscos organizacionais.' },
      { id: 'grc_4', icon: 'checkmark-done-outline', title: 'Conformidade e Auditoria', description: 'Compreenda os requisitos de compliance e processos de auditoria.' },
      { id: 'grc_5', icon: 'document-text-outline', title: 'Frameworks e Normas de Segurança', description: 'Estude ISO 27001, NIST CSF, COBIT e outros frameworks.' },
      { id: 'grc_6', icon: 'shield-checkmark-outline', title: 'Políticas e Procedimentos', description: 'Crie políticas de segurança efetivas e procedimentos operacionais.' },
      { id: 'grc_7', icon: 'sync-outline', title: 'Gestão de Incidentes e Continuidade', description: 'Estruture resposta a incidentes e planos de continuidade de negócios.' },
      { id: 'grc_8', icon: 'trending-up-outline', title: 'Métricas e Reportes de GRC', description: 'Desenvolva KPIs, KRIs e relatórios executivos de governança.' },
      { id: 'grc_9', icon: 'rocket-outline', title: 'Exercícios Práticos', description: 'Pratique tudo o que aprendeu com exercícios hands-on.' },
    ],
  },
};

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
  const { moduleId } = route.params || {};
  const moduleData = MODULE_DATA[moduleId] || MODULE_DATA.logica;
  const { isLessonCompleted, isLessonUnlocked, getModuleProgress } = useProgress();

  const totalCount = moduleData.lessons.length;
  const { completed: completedCount, percentage: progress } = getModuleProgress(moduleId, totalCount);

  const lessons = moduleData.lessons.map((l) => {
    const lessonNumber = parseInt(l.id.split('_')[1], 10);
    const completed = isLessonCompleted(moduleId, l.id);
    const unlocked = isLessonUnlocked(moduleId, lessonNumber);
    let status;
    if (completed) {
      status = 'completed';
    } else if (unlocked) {
      status = 'in_progress';
    } else {
      status = 'locked';
    }
    return { ...l, status };
  });

  function handleStudy(lessonId) {
    const isLastLesson = lessonId.endsWith('_9');
    if (isLastLesson) {
      navigation.navigate('Exercise', { moduleId });
    } else {
      navigation.navigate('Lesson', { lessonId, moduleId });
    }
  }

  const [aiLoading, setAiLoading] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => { mountedRef.current = false; };
  }, []);

  function handleStartQuiz() {
    navigation.navigate('Quiz', { moduleId });
  }

  async function handleAIQuiz() {
    setAiLoading(true);
    try {
      const questions = await fetchAIQuestions(moduleData.title, 'medium', 10);
      if (mountedRef.current) {
        navigation.navigate('Quiz', { moduleId, questions, source: 'ai' });
      }
    } catch (err) {
      if (mountedRef.current) {
        setAiLoading(false);
        Alert.alert('Erro', err.message || 'Não foi possível gerar o quiz com IA');
      }
    }
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
            <Text style={styles.headerTitle}>{moduleData.title}</Text>
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
              <Ionicons name={moduleData.icon} size={44} color={colors.cyberBlue} />
            </LinearGradient>
          </View>
          <Text style={styles.bannerText}>{moduleData.banner}</Text>
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
          disabled={completedCount < totalCount}
          style={[styles.quizOuter, completedCount < totalCount && styles.quizOuterDisabled]}
        >
          <LinearGradient
            colors={completedCount < totalCount ? [colors.surfaceLight, colors.surfaceLight] : [colors.gradientStart, colors.gradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.quizButton}
          >
            <Ionicons
              name={completedCount < totalCount ? 'lock-closed-outline' : 'trophy-outline'}
              size={24}
              color={completedCount < totalCount ? colors.textMuted : colors.white}
            />
            <Text style={[styles.quizButtonText, completedCount < totalCount && styles.quizButtonTextDisabled]}>
              {completedCount < totalCount ? 'Complete todas as lições primeiro' : 'Iniciar avaliação'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleAIQuiz}
          activeOpacity={0.8}
          disabled={aiLoading}
          style={styles.aiQuizOuter}
        >
          <LinearGradient
            colors={['rgba(139, 61, 255, 0.8)', 'rgba(0, 212, 255, 0.8)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.quizButton}
          >
            {aiLoading ? (
              <ActivityIndicator color={colors.white} style={{ marginRight: spacing.sm }} />
            ) : (
              <Ionicons name="sparkles-outline" size={24} color={colors.white} />
            )}
            <Text style={styles.quizButtonText}>
              {aiLoading ? 'Gerando perguntas...' : 'Gerar Quiz com IA'}
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
  aiQuizOuter: {
    marginTop: spacing.base,
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
