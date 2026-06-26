import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadows } from '../theme';
import ShieldIcon from '../components/ShieldIcon';
import Avatar from '../components/Avatar';

const modules = [
  { id: 'logica', title: 'Lógica de Programação' },
  { id: 'redes', title: 'Fundamentos de Redes' },
  { id: 'seguranca', title: 'Fundamentos de Cibersegurança' },
];

export default function BeginnerTrackScreen() {
  const navigation = useNavigation();
  const [dropdownVisible, setDropdownVisible] = useState(false);

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
        <Text style={styles.title}>Trilha Iniciante</Text>
        <Text style={styles.subtitle}>Escolha um módulo para começar seus estudos:</Text>

        <View style={styles.modulesContainer}>
          {modules.map((module) => (
            <TouchableOpacity
              key={module.id}
              style={styles.moduleButton}
              onPress={() => handleModulePress(module.id)}
              activeOpacity={0.75}
            >
              <Text style={styles.moduleButtonText}>{module.title}</Text>
            </TouchableOpacity>
          ))}
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
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
    ...shadows.md,
  },
  moduleButtonText: {
    fontSize: typography.fontSize.xl,
    color: '#FBBF24',
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.letterSpacing.wide,
    textAlign: 'center',
  },
});
