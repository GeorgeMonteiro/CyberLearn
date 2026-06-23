import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadows } from '../theme';
import ShieldIcon from '../components/ShieldIcon';
import GmailIcon from '../components/GmailIcon';

const features = [
  'Fundamentos de Redes',
  'Ameaças e Vulnerabilidades',
  'SOC e CTI',
  'Resposta a Incidentes',
];

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const renderGradientButton = (onPress, children) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.buttonWrapper}>
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientButton}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topSection}>
          <ShieldIcon size={90} />
          <Text style={styles.title}>CyberLearn</Text>
          <Text style={styles.subtitle}>
            Aprenda cibersegurança de forma prática e moderna
          </Text>
          <Text style={styles.introText}>
            Sua Plataforma Mobile de Aprendizado em Cybersecurity.
          </Text>
          <Text style={styles.introText}>
            <Text style={styles.introHighlight}>Cadastre-se</Text> e descubra um mundo de aprendizado e possibilidades.
          </Text>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.featuresTitle}>O que você vai aprender</Text>
          {features.map((item, index) => (
            <View key={index} style={styles.featureRow}>
              <View style={styles.bullet} />
              <Text style={styles.featureText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          {renderGradientButton(
            () => navigation.navigate('Login'),
            <Text style={styles.buttonText}>Fazer Login</Text>
          )}
          {renderGradientButton(
            () => navigation.navigate('Register'),
            <Text style={styles.buttonText}>Cadastrar-se</Text>
          )}
          {renderGradientButton(
            () => navigation.navigate('EmailLogin'),
            <View style={styles.gmailContent}>
              <GmailIcon size={22} />
              <Text style={styles.buttonText}>Entrar com Gmail</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.huge,
    paddingBottom: spacing.xxxl,
  },
  topSection: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: typography.fontSize.giant,
    fontWeight: typography.fontWeight.bold,
    color: colors.textLight,
    letterSpacing: typography.letterSpacing.wider,
    marginBottom: spacing.sm,
    marginTop: spacing.lg,
  },
  subtitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: '#FBBF24',
    textAlign: 'center',
    lineHeight: typography.fontSize.xl * typography.lineHeight.relaxed,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  introText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  introHighlight: {
    color: '#FBBF24',
  },
  featuresSection: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: spacing.lg,
    marginBottom: spacing.xxl,
  },
  featuresTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.textLight,
    marginBottom: spacing.md,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.cyberBlue,
    marginRight: spacing.sm,
  },
  featureText: {
    fontSize: typography.fontSize.md,
    color: colors.textLight,
    opacity: 0.9,
  },
  buttonContainer: {
    gap: spacing.sm,
    width: '100%',
  },
  buttonWrapper: {
    marginVertical: spacing.xs,
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
    minHeight: 52,
    ...shadows.md,
  },
  buttonText: {
    fontSize: typography.fontSize.base,
    color: colors.textLight,
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.letterSpacing.wide,
  },
  gmailContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
});
