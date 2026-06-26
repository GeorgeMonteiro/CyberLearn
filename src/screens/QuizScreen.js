import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, radius, shadows } from '../theme';

const QUESTIONS = [
  {
    id: 1,
    question: 'Qual a saída do seguinte pseudocódigo? \n\nINICIO\n  x <- 10\n  y <- 3\n  z <- x DIV y\n  ESCREVER z\nFIM',
    options: ['3', '3.33', '1', '0'],
    answer: 0,
  },
  {
    id: 2,
    question: 'Em um fluxograma, qual forma geométrica representa uma decisão (condicional)?',
    options: ['Retângulo', 'Losango', 'Círculo', 'Paralelogramo'],
    answer: 1,
  },
  {
    id: 3,
    question: 'Qual operador lógico retorna VERDADEIRO apenas quando ambas as proposições são verdadeiras?',
    options: ['OR', 'NOT', 'AND', 'XOR'],
    answer: 2,
  },
  {
    id: 4,
    question: 'Analise o código:\n\nx <- 7\ny <- 2\nSE (x MOD y = 0) ENTÃO\n  ESCREVER "par"\nSENÃO\n  ESCREVER "ímpar"\nFIM SE\n\nQual o resultado?',
    options: ['par', 'ímpar', '0', '1'],
    answer: 1,
  },
  {
    id: 5,
    question: 'Qual estrutura de repetição garante que o bloco de código seja executado pelo menos uma vez?',
    options: ['ENQUANTO', 'PARA', 'REPITA...ATÉ', 'PARA CADA'],
    answer: 2,
  },
  {
    id: 6,
    question: 'Dado o vetor V = [15, 8, 23, 4, 42], qual o valor de V[3] considerando indexação iniciando em 1?',
    options: ['8', '23', '4', '42'],
    answer: 2,
  },
  {
    id: 7,
    question: 'Qual a complexidade do algoritmo de busca linear no pior caso?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    answer: 2,
  },
  {
    id: 8,
    question: 'Em lógica proposicional, a tabela verdade de p → q (implicação) é falsa apenas quando:',
    options: ['p = V e q = V', 'p = V e q = F', 'p = F e q = V', 'p = F e q = F'],
    answer: 1,
  },
  {
    id: 9,
    question: 'Qual o resultado da expressão: (VERDADEIRO E NÃO (FALSO OU VERDADEIRO))?',
    options: ['VERDADEIRO', 'FALSO', 'Erro de sintaxe', 'Depende do contexto'],
    answer: 1,
  },
  {
    id: 10,
    question: 'No algoritmo de ordenação bolha (bubble sort), quantas comparações são feitas no pior caso para um vetor de n elementos?',
    options: ['n - 1', 'n * (n - 1) / 2', 'n²', 'n * log n'],
    answer: 1,
  },
  {
    id: 11,
    question: 'Considere o código:\n\nPARA i DE 1 ATÉ 5 FAÇA\n  SE (i MOD 2 = 0) ENTÃO\n    ESCREVER i\n  FIM SE\nFIM PARA\n\nQual a saída?',
    options: ['1, 3, 5', '2, 4', '1, 2, 3, 4, 5', '2, 4, 6'],
    answer: 1,
  },
  {
    id: 12,
    question: 'Qual o valor da variável "a" ao final da execução?\n\na <- 2\nb <- 3\na <- a * b + b - a',
    options: ['6', '7', '5', '8'],
    answer: 1,
  },
  {
    id: 13,
    question: 'O que é um Algoritmo?',
    options: [
      'Um programa de computador executável',
      'Uma sequência finita e ordenada de passos para resolver um problema',
      'Uma linguagem de programação específica',
      'Um tipo de dado estruturado',
    ],
    answer: 1,
  },
  {
    id: 14,
    question: 'Em um fluxograma, qual símbolo representa o início e o fim do algoritmo?',
    options: ['Retângulo com bordas arredondadas', 'Elipse (oval)', 'Círculo', 'Losango'],
    answer: 1,
  },
  {
    id: 15,
    question: 'Qual a diferença entre uma variável do tipo INTEIRO e uma do tipo REAL?',
    options: [
      'Não há diferença',
      'INTEIRO armazena apenas números sem parte fracionária; REAL armazena números com ponto flutuante',
      'INTEIRO ocupa mais memória',
      'REAL só pode armazenar números negativos',
    ],
    answer: 1,
  },
  {
    id: 16,
    question: 'Analise:\n\nx <- 10\nENQUANTO x > 0 FAÇA\n  x <- x - 3\nFIM ENQUANTO\n\nQuantas iterações serão executadas?',
    options: ['3', '4', '5', '6'],
    answer: 1,
  },
  {
    id: 17,
    question: 'Qual operador tem a maior precedência na maioria das linguagens?',
    options: ['Adição (+)', 'Multiplicação (*)', 'Parênteses ()', 'Atribuição (=)'],
    answer: 2,
  },
  {
    id: 18,
    question: 'Dado que A = VERDADEIRO e B = FALSO, qual o resultado de (A OU B) E (NÃO A OU NÃO B)?',
    options: ['VERDADEIRO', 'FALSO', 'A', 'B'],
    answer: 1,
  },
  {
    id: 19,
    question: 'Qual estrutura condicional permite testar múltiplas condições de forma encadeada?',
    options: ['SE...ENTÃO', 'SE...SENÃO', 'ESCOLHA...CASO', ' TODAS AS ANTERIORES'],
    answer: 2,
  },
  {
    id: 20,
    question: 'Um vetor de 10 elementos foi preenchido com os números de 1 a 10. Qual a soma dos elementos nas posições pares (considerando índice inicial 1)?',
    options: ['25', '30', '20', '35'],
    answer: 1,
  },
  {
    id: 21,
    question: 'Qual o conceito fundamental da programação estruturada?',
    options: [
      'GOTO e desvios incondicionais',
      'Sequência, decisão e iteração',
      'Herança e polimorfismo',
      'Tabelas hash',
    ],
    answer: 1,
  },
  {
    id: 22,
    question: 'Analise o fluxo:\n\na <- 0\nPARA i <- 1 ATÉ 5 FAÇA\n  a <- a + i * 2\nFIM PARA\n\nQual o valor final de a?',
    options: ['20', '30', '15', '25'],
    answer: 1,
  },
  {
    id: 23,
    question: 'Qual o resultado lógico da expressão: (10 > 5) E (3 < 1) OU (8 = 8)?',
    options: ['VERDADEIRO', 'FALSO', 'Erro de tipo', 'Indefinido'],
    answer: 0,
  },
  {
    id: 24,
    question: 'Em lógica de programação, o que é uma "variável contadora"?',
    options: [
      'Uma variável que armazena o tempo de execução',
      'Uma variável que é incrementada ou decrementada em um valor fixo a cada iteração',
      'Uma variável que só pode ser lida, nunca modificada',
      'Uma variável que conta o número de variáveis no programa',
    ],
    answer: 1,
  },
  {
    id: 25,
    question: 'Dado:\n\nPROCEDIMENTO Dobro(x)\n  RETORNAR x * 2\nFIM PROCEDIMENTO\n\ny <- Dobro(Dobro(3))\n\nQual o valor de y?',
    options: ['6', '9', '12', '18'],
    answer: 2,
  },
  {
    id: 26,
    question: 'Qual(is) valor(es) a variável "tipo_logico" pode armazenar?',
    options: [
      'Apenas números inteiros',
      'VERDADEIRO ou FALSO',
      'Qualquer string',
      'Apenas números positivos',
    ],
    answer: 1,
  },
  {
    id: 27,
    question: 'Analise:\n\nx <- 1\nREPITA\n  x <- x + 1\nATÉ x > 5\n\nQual o valor de x ao final?',
    options: ['5', '6', '4', '7'],
    answer: 1,
  },
  {
    id: 28,
    question: 'Qual a principal vantagem de usar fluxogramas para representar algoritmos?',
    options: [
      'Executar o código automaticamente',
      'Visualizar o fluxo lógico de forma gráfica e intuitiva',
      'Economizar memória do computador',
      'Escrever código em qualquer linguagem',
    ],
    answer: 1,
  },
  {
    id: 29,
    question: 'Se um algoritmo tem complexidade O(log n), qual o comportamento esperado ao dobrar o tamanho da entrada?',
    options: [
      'O tempo de execução dobra',
      'O tempo de execução aumenta em 1 unidade',
      'O tempo de execução quadruplica',
      'O tempo de execução se mantém constante',
    ],
    answer: 1,
  },
  {
    id: 30,
    question: 'Complete a lacuna:\n\n"Uma ______ é uma variável que armazena múltiplos valores do mesmo tipo, acessados por um índice."',
    options: ['Matriz', 'String', 'Estrutura', 'Vetor (array)'],
    answer: 3,
  },
];

export default function QuizScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = QUESTIONS[currentIndex];
  const total = QUESTIONS.length;
  const progress = ((currentIndex + 1) / total) * 100;

  function handleSelect(index) {
    setSelectedOption(index);
  }

  function handleNext() {
    if (selectedOption === current.answer) {
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
                  Parabéns! Você atingiu a média necessária.
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
            <Text style={styles.restartButtonText}>Refazer avaliação</Text>
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
