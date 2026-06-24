import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadows } from '../theme';
import ShieldIcon from '../components/ShieldIcon';

function RecaptchaCheckbox({ checked, onToggle }) {
  return (
    <TouchableOpacity style={styles.recaptchaContainer} onPress={onToggle} activeOpacity={0.8}>
      <View style={[styles.recaptchaCheckbox, checked && styles.recaptchaCheckboxChecked]}>
        {checked && <Text style={styles.recaptchaCheckmark}>✓</Text>}
      </View>
      <View style={styles.recaptchaTextContainer}>
        <Text style={styles.recaptchaText}>Não sou um robô</Text>
        <Text style={styles.recaptchaBadge}>reCAPTCHA</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);

  function handleLogin() {
    console.log('Tentativa de login');
    console.log({ email, password, recaptchaChecked });
    navigation.replace('LevelSelection');
  }

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.topSection}>
          <ShieldIcon size={70} />
          <Text style={styles.title}>Fazer Login</Text>
          <Text style={styles.subtitle}>
            Entre com suas credenciais para continuar
          </Text>
        </View>

        <View style={styles.formSection}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="seu@email.com"
              placeholderTextColor={colors.textMuted}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor={colors.textMuted}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <RecaptchaCheckbox
            checked={recaptchaChecked}
            onToggle={() => setRecaptchaChecked(!recaptchaChecked)}
          />

          <TouchableOpacity onPress={handleLogin} activeOpacity={0.8} style={styles.buttonWrapper}>
            <LinearGradient
              colors={[colors.gradientStart, colors.gradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPassword} activeOpacity={0.7}>
            <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
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
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.display,
    paddingBottom: spacing.xxxl,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: spacing.lg,
  },
  backArrow: {
    fontSize: typography.fontSize.xl,
    color: colors.textLight,
    marginRight: spacing.xs,
  },
  backText: {
    fontSize: typography.fontSize.base,
    color: colors.textLight,
    fontWeight: typography.fontWeight.semibold,
  },
  topSection: {
    alignItems: 'center',
    width: '100%',
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textLight,
    letterSpacing: typography.letterSpacing.wider,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.textLight,
    opacity: 0.85,
    textAlign: 'center',
  },
  formSection: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textLight,
    marginBottom: spacing.sm,
    letterSpacing: typography.letterSpacing.wide,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: radius.lg,
    paddingHorizontal: spacing.base,
    height: 52,
    fontSize: typography.fontSize.base,
    color: colors.textLight,
  },
  recaptchaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.xl,
  },
  recaptchaCheckbox: {
    width: 26,
    height: 26,
    borderRadius: radius.sm,
    borderWidth: 2,
    borderColor: colors.textLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  recaptchaCheckboxChecked: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  recaptchaCheckmark: {
    color: colors.white,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
  },
  recaptchaTextContainer: {
    flex: 1,
  },
  recaptchaText: {
    fontSize: typography.fontSize.md,
    color: colors.textLight,
    fontWeight: typography.fontWeight.medium,
  },
  recaptchaBadge: {
    fontSize: typography.fontSize.xs,
    color: colors.textLight,
    opacity: 0.6,
    letterSpacing: typography.letterSpacing.wider,
  },
  buttonWrapper: {
    marginBottom: spacing.md,
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
  forgotPassword: {
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  forgotPasswordText: {
    fontSize: typography.fontSize.md,
    color: colors.textLight,
    fontWeight: typography.fontWeight.semibold,
    opacity: 0.85,
    textDecorationLine: 'underline',
  },
});
