import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, radius } from '../theme';
import { useProgress } from '../context/ProgressContext';
import ExerciseHeader from '../components/exercises/ExerciseHeader';
import ExerciseConfigCard from '../components/exercises/ExerciseConfigCard';
import QuestionCard from '../components/exercises/QuestionCard';
import ResultCard from '../components/exercises/ResultCard';
import ExplanationCard from '../components/exercises/ExplanationCard';
import PrimaryButton from '../components/exercises/PrimaryButton';
import mockQuestions from '../data/mockQuestions';

export default function ExerciseScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const moduleId = route.params?.moduleId || 'logica';
  const { isLessonUnlocked, isLessonCompleted } = useProgress();

  const lessonId = `${moduleId}_9`;
  const unlocked = isLessonUnlocked(moduleId, 9);
  const alreadyCompleted = isLessonCompleted(moduleId, lessonId);

  if (!unlocked && !alreadyCompleted) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', padding: spacing.xl }]}>
        <Ionicons name="lock-closed-outline" size={64} color={colors.textMuted} />
        <Text style={{ color: colors.textMuted, fontSize: 18, marginTop: spacing.lg, textAlign: 'center', marginBottom: spacing.xl }}>
          Complete todas as aulas anteriores para desbloquear os exercícios.
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} style={{ backgroundColor: colors.surface, paddingVertical: spacing.base, paddingHorizontal: spacing.xxl, borderRadius: radius.xl }}>
          <Text style={{ color: colors.text, fontWeight: 'bold' }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const [screenState, setScreenState] = useState('config');
  const [difficulty, setDifficulty] = useState('Fácil');
  const [quantity, setQuantity] = useState(5);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const hits = useMemo(() => {
    return questions.filter((q, idx) => answers[idx] === q.correctAnswer).length;
  }, [questions, answers]);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answers[currentIndex];
  const isLast = currentIndex === totalQuestions - 1;

  function handleGenerate() {
    const moduleQuestions = mockQuestions.filter((q) => q.moduleId === moduleId);
    const picked = [...moduleQuestions].sort(() => Math.random() - 0.5).slice(0, quantity);
    setQuestions(picked);
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
    setScreenState('answering');
  }

  function handleSelectAnswer(index) {
    if (showResult) return;
    setAnswers((prev) => ({ ...prev, [currentIndex]: index }));
    setShowResult(true);
  }

  function handleNext() {
    if (isLast) {
      setScreenState('result');
    } else {
      setShowResult(false);
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function handleNewExercises() {
    setScreenState('config');
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
  }

  function handleBackToModule() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExerciseHeader onBack={() => navigation.goBack()} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {screenState === 'config' && (
          <View style={styles.configSection}>
            <ExerciseConfigCard
              difficulty={difficulty}
              onDifficultyChange={setDifficulty}
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
            <PrimaryButton
              title="Gerar Exercícios"
              icon="sparkles-outline"
              onPress={handleGenerate}
            />
          </View>
        )}

        {screenState === 'answering' && currentQuestion && (
          <View style={styles.answeringSection}>
            <QuestionCard
              question={currentQuestion}
              currentIndex={currentIndex}
              total={totalQuestions}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
              onSelect={handleSelectAnswer}
            />

            {showResult && (
              <View style={styles.explanationContainer}>
                <ExplanationCard
                  question={currentQuestion}
                  selectedAnswer={selectedAnswer}
                />
              </View>
            )}

            {selectedAnswer !== undefined && (
              <PrimaryButton
                title={isLast ? 'Finalizar Exercícios' : 'Próxima Questão'}
                icon={isLast ? 'checkmark-circle' : 'arrow-forward'}
                onPress={handleNext}
              />
            )}
          </View>
        )}

        {screenState === 'result' && (
          <View style={styles.resultSection}>
            <ResultCard hits={hits} total={totalQuestions} />

            <View style={styles.reviewSection}>
              <Text style={styles.reviewTitle}>Revisão das Respostas</Text>
              {questions.map((q, idx) => (
                <ExplanationCard
                  key={q.id}
                  question={q}
                  selectedAnswer={answers[idx]}
                />
              ))}
            </View>

            <PrimaryButton
              title="Gerar Novos Exercícios"
              icon="refresh"
              onPress={handleNewExercises}
            />

            <PrimaryButton
              title="Voltar ao módulo"
              icon="arrow-back"
              onPress={handleBackToModule}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.xl,
    paddingBottom: spacing.xxl * 2,
    gap: spacing.xl,
  },
  configSection: {
    gap: spacing.xl,
  },
  answeringSection: {
    gap: spacing.xl,
  },
  explanationContainer: {
    gap: spacing.sm,
  },
  resultSection: {
    gap: spacing.xl,
  },
  reviewSection: {
    gap: spacing.md,
  },
  reviewTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    letterSpacing: typography.letterSpacing.wide,
  },
});
