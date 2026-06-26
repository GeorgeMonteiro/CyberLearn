import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadows } from '../theme';

const LESSON_DATA = {
  logica_1: {
    title: 'O que é Lógica de Programação',
    icon: 'code-slash-outline',
    steps: [
      {
        type: 'intro',
        icon: 'bulb-outline',
        title: 'O que é Lógica?',
        text: 'Lógica é a ciência que estuda as formas corretas de raciocinar. É a arte de pensar de forma estruturada para chegar a conclusões válidas a partir de premissas conhecidas.\n\nNo dia a dia, usamos lógica o tempo todo sem perceber: quando decidimos o melhor caminho para ir ao trabalho, quando organizamos nossas tarefas ou quando resolvemos um problema qualquer.',
      },
      {
        type: 'diagram',
        title: 'Raciocínio Lógico',
        text: 'O raciocínio lógico segue uma sequência organizada de pensamentos. Veja como funciona na prática:',
        diagram: 'flow',
        items: ['Problema', 'Analisar', 'Raciocinar', 'Solução'],
      },
      {
        type: 'content',
        title: 'Lógica no Cotidiano',
        text: 'Você usa lógica todos os dias! Veja alguns exemplos:\n\n• Se está chovendo, então pego um guarda-chuva.\n• Se estou com fome, então preparo uma refeição.\n• Se o semáforo está vermelho, então paro o carro.\n\nPerceba que essas são estruturas condicionais: "Se (condição), então (ação)". Isso é a base da lógica aplicada!',
        highlight: 'Pensar logicamente é simplesmente conectar ideias de forma organizada.',
      },
      {
        type: 'diagram',
        title: 'Sequência Lógica',
        text: 'Toda tarefa do dia a dia segue uma sequência lógica de passos:',
        diagram: 'sequence',
        items: ['Acordar', 'Escovar dentes', 'Tomar café', 'Sair de casa'],
      },
      {
        type: 'content',
        title: 'O que é Lógica de Programação?',
        text: 'Lógica de Programação é a técnica de organizar o pensamento para criar instruções claras e ordenadas que um computador possa entender e executar.\n\nDiferente dos humanos, os computadores não interpretam ambiguidades. Eles precisam de instruções precisas, passo a passo, na ordem correta.\n\nProgramar nada mais é do que ensinar o computador a resolver problemas através de sequências lógicas de instruções.',
      },
      {
        type: 'diagram',
        title: 'Entrada → Processamento → Saída',
        text: 'Todo programa de computador segue este modelo fundamental:',
        diagram: 'io',
        items: ['Entrada\n(Dados)', 'Processamento\n(Lógica)', 'Saída\n(Resultado)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'O que é Lógica de Programação?',
        options: [
          'Uma linguagem de programação específica',
          'A técnica de organizar pensamentos para criar instruções que o computador entenda',
          'Um tipo de hardware de computador',
          'Um aplicativo usado para programar',
        ],
        correctIndex: 1,
        explanation: 'Lógica de Programação é a técnica de organizar o raciocínio para criar instruções claras e sequenciais que o computador possa executar.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual das alternativas abaixo representa um raciocínio lógico?',
        options: [
          'Se está chovendo, vou à praia',
          'Se estou com sono, então vou dormir',
          'Se é aniversário, amanhã é segunda-feira',
          'Se acordei cedo, o jantar está pronto',
        ],
        correctIndex: 1,
        explanation: '"Se estou com sono, então vou dormir" é uma relação lógica: a condição (sono) leva a uma ação coerente (dormir).',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu o conceito fundamental da lógica de programação!\n\nResumindo:\n• Lógica é a arte de pensar de forma estruturada\n• Usamos lógica no dia a dia sem perceber\n• Lógica de Programação é organizar instruções para o computador\n• Todo programa segue: Entrada → Processamento → Saída\n\nAgora você está pronto para avançar para o próximo módulo: Algoritmos!',
      },
    ],
  },
};

function FlowDiagram({ items }) {
  return (
    <View style={diagramStyles.container}>
      {items.map((item, index) => (
        <View key={index} style={diagramStyles.flowRow}>
          <View style={diagramStyles.flowBox}>
            <Text style={diagramStyles.flowText}>{item}</Text>
          </View>
          {index < items.length - 1 && (
            <View style={diagramStyles.arrowContainer}>
              <Ionicons name="arrow-down" size={20} color={colors.primary} />
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

function SequenceDiagram({ items }) {
  return (
    <View style={diagramStyles.container}>
      <View style={diagramStyles.sequenceRow}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <View style={diagramStyles.sequenceBox}>
              <View style={diagramStyles.sequenceNumber}>
                <Text style={diagramStyles.sequenceNumberText}>{index + 1}</Text>
              </View>
              <Text style={diagramStyles.sequenceText}>{item}</Text>
            </View>
            {index < items.length - 1 && (
              <View style={diagramStyles.sequenceArrow}>
                <Ionicons name="arrow-forward" size={18} color={colors.primary} />
              </View>
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

function IODiagram({ items }) {
  return (
    <View style={diagramStyles.container}>
      <View style={diagramStyles.ioRow}>
        <View style={[diagramStyles.ioBox, diagramStyles.ioInput]}>
          <Ionicons name="download-outline" size={24} color={colors.white} />
          <Text style={diagramStyles.ioText}>{items[0]}</Text>
        </View>
        <View style={diagramStyles.ioArrow}>
          <Ionicons name="arrow-forward" size={20} color={colors.primary} />
        </View>
        <View style={[diagramStyles.ioBox, diagramStyles.ioProcess]}>
          <Ionicons name="settings-outline" size={24} color={colors.white} />
          <Text style={diagramStyles.ioText}>{items[1]}</Text>
        </View>
        <View style={diagramStyles.ioArrow}>
          <Ionicons name="arrow-forward" size={20} color={colors.primary} />
        </View>
        <View style={[diagramStyles.ioBox, diagramStyles.ioOutput]}>
          <Ionicons name="checkmark-circle-outline" size={24} color={colors.white} />
          <Text style={diagramStyles.ioText}>{items[2]}</Text>
        </View>
      </View>
    </View>
  );
}

function StepIndicator({ current, total }) {
  return (
    <View style={indicatorStyles.container}>
      {Array.from({ length: total }, (_, i) => (
        <View
          key={i}
          style={[
            indicatorStyles.dot,
            i === current && indicatorStyles.dotActive,
            i < current && indicatorStyles.dotCompleted,
          ]}
        />
      ))}
    </View>
  );
}

function QuestionCard({ question, options, selectedIndex, correctIndex, onSelect, answered }) {
  return (
    <View style={questionStyles.container}>
      <Text style={questionStyles.question}>{question}</Text>
      <View style={questionStyles.options}>
        {options.map((option, index) => {
          let optionStyle = questionStyles.option;
          let textStyle = questionStyles.optionText;
          let iconName = null;

          if (answered) {
            if (index === correctIndex) {
              optionStyle = [optionStyle, questionStyles.optionCorrect];
              textStyle = [textStyle, questionStyles.optionTextCorrect];
              iconName = 'checkmark-circle';
            } else if (index === selectedIndex) {
              optionStyle = [optionStyle, questionStyles.optionWrong];
              textStyle = [textStyle, questionStyles.optionTextWrong];
              iconName = 'close-circle';
            } else {
              optionStyle = [optionStyle, questionStyles.optionDisabled];
              textStyle = [textStyle, questionStyles.optionTextDisabled];
            }
          } else if (index === selectedIndex) {
            optionStyle = [optionStyle, questionStyles.optionSelected];
            textStyle = [textStyle, questionStyles.optionTextSelected];
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={() => !answered && onSelect(index)}
              activeOpacity={0.7}
              style={optionStyle}
              disabled={answered}
            >
              <Text style={textStyle}>{option}</Text>
              {iconName && (
                <Ionicons
                  name={iconName}
                  size={20}
                  color={index === correctIndex ? colors.success : colors.error}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function LessonScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { lessonId } = route.params || {};

  const lesson = LESSON_DATA[lessonId] || LESSON_DATA.logica_1;
  const steps = lesson.steps;
  const totalSteps = steps.length;

  const [currentStep, setCurrentStep] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  const [completed, setCompleted] = useState(false);

  const step = steps[currentStep];
  const isLastStep = currentStep === totalSteps - 1;
  const isFirstStep = currentStep === 0;

  function handleNext() {
    if (isLastStep) {
      setCompleted(true);
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  }

  function handleBack() {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }

  function handleQuestionSelect(optionIndex) {
    const stepKey = currentStep;
    setQuestionAnswers((prev) => ({ ...prev, [stepKey]: optionIndex }));
  }

  function handleCheckAnswer() {
    const stepKey = currentStep;
    setShowExplanation((prev) => ({ ...prev, [stepKey]: true }));
  }

  function renderStepContent() {
    switch (step.type) {
      case 'intro':
        return (
          <View style={contentStyles.stepContainer}>
            <View style={contentStyles.introIconWrap}>
              <LinearGradient
                colors={[colors.gradientStart, colors.gradientEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={contentStyles.introIcon}
              >
                <Ionicons name={step.icon} size={36} color={colors.white} />
              </LinearGradient>
            </View>
            <Text style={contentStyles.stepTitle}>{step.title}</Text>
            <Text style={contentStyles.stepText}>{step.text}</Text>
          </View>
        );

      case 'content':
        return (
          <View style={contentStyles.stepContainer}>
            <Text style={contentStyles.stepTitle}>{step.title}</Text>
            <Text style={contentStyles.stepText}>{step.text}</Text>
            {step.highlight && (
              <View style={contentStyles.highlightBox}>
                <Ionicons name="bulb-outline" size={18} color={colors.warning} />
                <Text style={contentStyles.highlightText}>{step.highlight}</Text>
              </View>
            )}
          </View>
        );

      case 'diagram':
        return (
          <View style={contentStyles.stepContainer}>
            <Text style={contentStyles.stepTitle}>{step.title}</Text>
            <Text style={contentStyles.stepText}>{step.text}</Text>
            <View style={contentStyles.diagramWrap}>
              {step.diagram === 'flow' && <FlowDiagram items={step.items} />}
              {step.diagram === 'sequence' && <SequenceDiagram items={step.items} />}
              {step.diagram === 'io' && <IODiagram items={step.items} />}
            </View>
          </View>
        );

      case 'question': {
        const selectedIndex = questionAnswers[currentStep];
        const answered = showExplanation[currentStep];
        return (
          <View style={contentStyles.stepContainer}>
            <Text style={contentStyles.stepTitle}>{step.title}</Text>
            <QuestionCard
              question={step.question}
              options={step.options}
              selectedIndex={selectedIndex}
              correctIndex={step.correctIndex}
              onSelect={handleQuestionSelect}
              answered={answered}
            />
            {selectedIndex !== undefined && !answered && (
              <TouchableOpacity
                onPress={handleCheckAnswer}
                activeOpacity={0.8}
                style={contentStyles.checkButton}
              >
                <LinearGradient
                  colors={[colors.gradientStart, colors.gradientEnd]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={contentStyles.checkButtonGradient}
                >
                  <Text style={contentStyles.checkButtonText}>Verificar resposta</Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
            {answered && (
              <View style={contentStyles.explanationBox}>
                <View style={[
                  contentStyles.explanationIcon,
                  selectedIndex === step.correctIndex
                    ? contentStyles.explanationCorrect
                    : contentStyles.explanationWrong,
                ]}>
                  <Ionicons
                    name={selectedIndex === step.correctIndex ? 'checkmark-circle' : 'alert-circle'}
                    size={22}
                    color={colors.white}
                  />
                  <Text style={contentStyles.explanationTitle}>
                    {selectedIndex === step.correctIndex ? 'Correto!' : 'Ops!'}
                  </Text>
                </View>
                <Text style={contentStyles.explanationText}>{step.explanation}</Text>
              </View>
            )}
          </View>
        );
      }

      case 'conclusion':
        return (
          <View style={contentStyles.stepContainer}>
            <View style={contentStyles.conclusionIconWrap}>
              <LinearGradient
                colors={['#22C55E', '#16A34A']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={contentStyles.conclusionIcon}
              >
                <Ionicons name="trophy" size={40} color={colors.white} />
              </LinearGradient>
            </View>
            <Text style={contentStyles.conclusionTitle}>{step.title}</Text>
            <Text style={contentStyles.stepText}>{step.text}</Text>
          </View>
        );

      default:
        return null;
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
            <Text style={styles.headerTitle}>{lesson.title}</Text>
            <View style={styles.headerRight} />
          </View>
          <StepIndicator current={currentStep} total={totalSteps} />
        </SafeAreaView>
      </LinearGradient>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderStepContent()}
      </ScrollView>

      <View style={styles.footer}>
        {!completed ? (
          <View style={styles.footerRow}>
            <TouchableOpacity
              onPress={handleBack}
              disabled={isFirstStep}
              activeOpacity={0.7}
              style={[styles.footerBtn, styles.footerBtnBack, isFirstStep && styles.footerBtnDisabled]}
            >
              <Ionicons
                name="chevron-back"
                size={20}
                color={isFirstStep ? colors.textMuted : colors.text}
              />
              <Text style={[styles.footerBtnBackText, isFirstStep && styles.footerBtnTextDisabled]}>
                Voltar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNext}
              activeOpacity={0.8}
              style={styles.footerBtnNext}
            >
              <LinearGradient
                colors={[colors.gradientStart, colors.gradientEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.footerBtnNextGradient}
              >
                <Text style={styles.footerBtnNextText}>
                  {isLastStep ? 'Concluir' : 'Continuar'}
                </Text>
                <Ionicons name="arrow-forward" size={18} color={colors.white} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={styles.completedButton}
          >
            <LinearGradient
              colors={['#22C55E', '#16A34A']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.completedButtonGradient}
            >
              <Ionicons name="checkmark-circle" size={22} color={colors.white} />
              <Text style={styles.completedButtonText}>Aula Concluída! Voltar</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
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
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
    letterSpacing: typography.letterSpacing.wide,
    marginHorizontal: spacing.sm,
  },
  headerRight: {
    width: 40,
  },
  scrollContent: {
    padding: spacing.xl,
    paddingBottom: spacing.xxl,
  },
  footer: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.base,
    borderTopWidth: 1,
    borderTopColor: colors.border + '20',
    backgroundColor: colors.background,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  footerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border + '40',
  },
  footerBtnBack: {
    flex: 1,
  },
  footerBtnBackText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginLeft: spacing.xs,
  },
  footerBtnDisabled: {
    opacity: 0.4,
  },
  footerBtnTextDisabled: {
    color: colors.textMuted,
  },
  footerBtnNext: {
    flex: 2,
    ...shadows.md,
  },
  footerBtnNextGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
    borderRadius: radius.xl,
  },
  footerBtnNextText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
  completedButton: {
    ...shadows.md,
  },
  completedButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md + 2,
    borderRadius: radius.xl,
  },
  completedButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
});

const contentStyles = StyleSheet.create({
  stepContainer: {
    gap: spacing.lg,
  },
  introIconWrap: {
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  introIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.glow,
  },
  stepTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    letterSpacing: typography.letterSpacing.wide,
  },
  stepText: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.md * typography.lineHeight.relaxed,
  },
  highlightBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderLeftWidth: 3,
    borderLeftColor: colors.warning,
    padding: spacing.base,
    borderRadius: radius.md,
  },
  highlightText: {
    flex: 1,
    fontSize: typography.fontSize.sm,
    color: colors.warning,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  diagramWrap: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border + '30',
    ...shadows.md,
    alignItems: 'center',
  },
  checkButton: {
    ...shadows.md,
  },
  checkButtonGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: radius.xl,
  },
  checkButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
  explanationBox: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.base,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
    ...shadows.sm,
  },
  explanationIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  explanationCorrect: {
    borderLeftColor: colors.success,
  },
  explanationWrong: {
    borderLeftColor: colors.error,
  },
  explanationTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  explanationText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  conclusionIconWrap: {
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  conclusionIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.glow,
  },
  conclusionTitle: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    textAlign: 'center',
    letterSpacing: typography.letterSpacing.wide,
  },
});

const indicatorStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  dotActive: {
    width: 28,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  dotCompleted: {
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
});

const diagramStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  flowRow: {
    alignItems: 'center',
  },
  flowBox: {
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.lg,
    paddingVertical: spacing.md + 2,
    paddingHorizontal: spacing.xl,
    borderWidth: 1,
    borderColor: colors.primary + '40',
    minWidth: 160,
    alignItems: 'center',
  },
  flowText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
  },
  arrowContainer: {
    paddingVertical: spacing.xs,
    alignItems: 'center',
  },
  sequenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  sequenceBox: {
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.primary + '30',
    alignItems: 'center',
    minWidth: 100,
  },
  sequenceNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  sequenceNumberText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
  sequenceText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.text,
    textAlign: 'center',
  },
  sequenceArrow: {
    paddingHorizontal: spacing.xs,
  },
  ioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ioBox: {
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
    alignItems: 'center',
    minWidth: 100,
    gap: spacing.xs,
  },
  ioInput: {
    backgroundColor: 'rgba(0, 212, 255, 0.15)',
    borderWidth: 1,
    borderColor: colors.cyberBlue + '40',
  },
  ioProcess: {
    backgroundColor: 'rgba(139, 61, 255, 0.15)',
    borderWidth: 1,
    borderColor: colors.primaryPurple + '40',
  },
  ioOutput: {
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
    borderWidth: 1,
    borderColor: colors.success + '40',
  },
  ioText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    textAlign: 'center',
  },
  ioArrow: {
    paddingHorizontal: spacing.xs,
  },
});

const questionStyles = StyleSheet.create({
  container: {
    gap: spacing.base,
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
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.base,
    borderWidth: 1,
    borderColor: colors.border + '30',
    ...shadows.sm,
  },
  optionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.surface,
  },
  optionText: {
    flex: 1,
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.md * typography.lineHeight.relaxed,
  },
  optionTextSelected: {
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
  optionCorrect: {
    borderColor: colors.success,
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
  },
  optionTextCorrect: {
    color: colors.success,
    fontWeight: typography.fontWeight.semibold,
  },
  optionWrong: {
    borderColor: colors.error,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  optionTextWrong: {
    color: colors.error,
    fontWeight: typography.fontWeight.semibold,
  },
  optionDisabled: {
    opacity: 0.5,
  },
  optionTextDisabled: {
    color: colors.textMuted,
  },
});
