import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadows } from '../theme';
import ShieldIcon from '../components/ShieldIcon';
import Avatar from '../components/Avatar';

export default function LevelSelectionScreen() {
  const navigation = useNavigation();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownOptions = [
    { label: 'Meu Perfil', action: () => {} },
    { label: 'Meu Desempenho', action: () => navigation.navigate('Main', { screen: 'Progress' }) },
    { label: 'Sair', action: () => navigation.replace('Welcome') },
  ];

  function handleBack() {
    navigation.replace('Welcome');
  }

  function handleLevelSelect(level) {
    console.log('Nível selecionado:', level);
    if (level === 'iniciante') {
      navigation.replace('BeginnerTrack');
    } else {
      navigation.replace('ExpertTrack');
    }
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
        <Text style={styles.welcomeTitle}>Bem-vindo ao CyberLearn!</Text>
        <Text style={styles.questionText}>
          Qual seu nível de aprendizado em Cibersegurança? Marque abaixo seu nível para seguir uma trilha adequada para você.
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.levelButton}
            onPress={() => handleLevelSelect('iniciante')}
            activeOpacity={0.8}
          >
            <Text style={styles.levelButtonText}>Iniciante</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.levelButton}
            onPress={() => handleLevelSelect('especializacao')}
            activeOpacity={0.8}
          >
            <Text style={styles.levelButtonText}>Especialização</Text>
          </TouchableOpacity>
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
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  welcomeTitle: {
    fontSize: typography.fontSize.display,
    fontWeight: typography.fontWeight.bold,
    color: colors.textLight,
    letterSpacing: typography.letterSpacing.wider,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  questionText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.xxxl,
    opacity: 0.9,
  },
  buttonsContainer: {
    width: '100%',
    gap: spacing.lg,
  },
  levelButton: {
    backgroundColor: colors.buttonBg,
    borderRadius: radius.xxl,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
    ...shadows.md,
  },
  levelButtonText: {
    fontSize: typography.fontSize.xl,
    color: '#FBBF24',
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.letterSpacing.wide,
  },
});
