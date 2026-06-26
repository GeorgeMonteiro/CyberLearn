import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@cyberlearn_progress';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load progress:', e);
    } finally {
      setLoaded(true);
    }
  };

  const persistProgress = useCallback(async (updated) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  }, []);

  const completeLesson = useCallback((moduleId, lessonId) => {
    setProgress((prev) => {
      const moduleProgress = prev[moduleId] || { completedLessons: [] };
      if (moduleProgress.completedLessons.includes(lessonId)) {
        return prev;
      }
      const updated = {
        ...prev,
        [moduleId]: {
          ...moduleProgress,
          completedLessons: [...moduleProgress.completedLessons, lessonId],
        },
      };
      persistProgress(updated);
      return updated;
    });
  }, [persistProgress]);

  const getModuleProgress = useCallback((moduleId, totalLessons) => {
    const moduleProgress = progress[moduleId];
    if (!moduleProgress) {
      return { completed: 0, total: totalLessons, percentage: 0 };
    }
    const completed = moduleProgress.completedLessons.length;
    return {
      completed,
      total: totalLessons,
      percentage: Math.round((completed / totalLessons) * 100),
    };
  }, [progress]);

  const isLessonCompleted = useCallback((moduleId, lessonId) => {
    return progress[moduleId]?.completedLessons?.includes(lessonId) || false;
  }, [progress]);

  const isLessonUnlocked = useCallback((moduleId, lessonNumber) => {
    if (lessonNumber <= 1) return true;
    const prevLessonId = `${moduleId}_${lessonNumber - 1}`;
    return isLessonCompleted(moduleId, prevLessonId);
  }, [isLessonCompleted]);

  const saveQuizScore = useCallback((moduleId, score, total) => {
    setProgress((prev) => {
      const moduleProgress = prev[moduleId] || { completedLessons: [] };
      const updated = {
        ...prev,
        [moduleId]: {
          ...moduleProgress,
          quizScore: { score, total, percentage: Math.round((score / total) * 100) },
        },
      };
      persistProgress(updated);
      return updated;
    });
  }, [persistProgress]);

  const getQuizScore = useCallback((moduleId) => {
    return progress[moduleId]?.quizScore || null;
  }, [progress]);

  const completeModule = useCallback((moduleId, totalLessons = 9) => {
    setProgress((prev) => {
      const moduleProgress = prev[moduleId] || { completedLessons: [] };
      const existing = new Set(moduleProgress.completedLessons);
      const allLessonIds = Array.from({ length: totalLessons }, (_, i) => `${moduleId}_${i + 1}`);
      let changed = false;
      for (const id of allLessonIds) {
        if (!existing.has(id)) {
          existing.add(id);
          changed = true;
        }
      }
      if (!changed) return prev;
      const updated = {
        ...prev,
        [moduleId]: {
          ...moduleProgress,
          completedLessons: [...existing],
        },
      };
      persistProgress(updated);
      return updated;
    });
  }, [persistProgress]);

  return (
    <ProgressContext.Provider
      value={{ progress, loaded, completeLesson, getModuleProgress, isLessonCompleted, isLessonUnlocked, completeModule, saveQuizScore, getQuizScore }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
