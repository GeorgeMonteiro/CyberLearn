import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, typography, radius, shadows } from '../theme';
import ShieldIcon from '../components/ShieldIcon';
import API_BASE_URL from '../config/api';
import * as LocalAuthentication from 'expo-local-authentication';

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
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();
      setIsBiometricAvailable(compatible && enrolled);
    })();
  }, []);

  function clearError(field) {
    setErrors((prev) => ({ ...prev, [field]: '' }));
  }

  function validate() {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    }
    if (!recaptchaChecked) {
      newErrors.recaptcha = 'Confirme que é humano';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleLogin() {
    setApiError('');
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      await AsyncStorage.setItem('@cyberlearn_token', data.token);
      await AsyncStorage.setItem('@cyberlearn_user', JSON.stringify(data.user));
      await AsyncStorage.setItem('@cyberlearn_biometric_email', email);
      await AsyncStorage.setItem('@cyberlearn_biometric_password', password);

      navigation.getParent()?.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleBiometricLogin() {
    setApiError('');

    const { success } = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Autentique-se para entrar',
      fallbackLabel: 'Usar senha do dispositivo',
    });

    if (!success) return;

    const storedEmail = await AsyncStorage.getItem('@cyberlearn_biometric_email');
    const storedPassword = await AsyncStorage.getItem('@cyberlearn_biometric_password');

    if (!storedEmail || !storedPassword) {
      setApiError('Nenhuma sessão salva. Faça login com e-mail primeiro.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: storedEmail, password: storedPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      await AsyncStorage.setItem('@cyberlearn_token', data.token);
      await AsyncStorage.setItem('@cyberlearn_user', JSON.stringify(data.user));

      navigation.getParent()?.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
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
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="seu@email.com"
              placeholderTextColor={colors.textMuted}
              value={email}
              onChangeText={(v) => { setEmail(v); clearError('email'); }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email ? <Text style={styles.fieldError}>{errors.email}</Text> : null}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={[styles.input, errors.password && styles.inputError]}
              placeholder="••••••••"
              placeholderTextColor={colors.textMuted}
              value={password}
              onChangeText={(v) => { setPassword(v); clearError('password'); }}
              secureTextEntry
            />
            {errors.password ? <Text style={styles.fieldError}>{errors.password}</Text> : null}
          </View>

          <RecaptchaCheckbox
            checked={recaptchaChecked}
            onToggle={() => { setRecaptchaChecked(!recaptchaChecked); clearError('recaptcha'); }}
          />
          {errors.recaptcha ? <Text style={[styles.fieldError, { marginTop: -spacing.sm, marginBottom: spacing.md }]}>{errors.recaptcha}</Text> : null}

          {apiError ? <Text style={styles.apiError}>{apiError}</Text> : null}

          <TouchableOpacity onPress={handleLogin} activeOpacity={0.8} style={styles.buttonWrapper} disabled={loading}>
            <LinearGradient
              colors={[colors.gradientStart, colors.gradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientButton}
            >
              {loading ? (
                <ActivityIndicator color={colors.textLight} />
              ) : (
                <Text style={styles.buttonText}>Entrar</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPassword} activeOpacity={0.7} onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
          </TouchableOpacity>

          {isBiometricAvailable && (
            <TouchableOpacity style={styles.biometricButton} onPress={handleBiometricLogin} activeOpacity={0.8} disabled={loading}>
              <Text style={styles.biometricButtonText}>Login com Biometria</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
  formSection: { width: '100%' },
  inputGroup: { marginBottom: spacing.lg },
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
  inputError: {
    borderColor: '#FCA5A5',
  },
  fieldError: {
    color: '#FCA5A5',
    fontSize: typography.fontSize.sm,
    marginTop: spacing.xs,
    fontWeight: typography.fontWeight.medium,
  },
  apiError: {
    color: '#FCA5A5',
    fontSize: typography.fontSize.sm,
    marginBottom: spacing.md,
    textAlign: 'center',
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
  recaptchaTextContainer: { flex: 1 },
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
  buttonWrapper: { marginBottom: spacing.md },
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
  biometricButton: {
    alignItems: 'center',
    paddingVertical: spacing.md,
    marginTop: spacing.sm,
  },
  biometricButtonText: {
    fontSize: typography.fontSize.md,
    color: colors.textLight,
    fontWeight: typography.fontWeight.semibold,
    opacity: 0.85,
  },
});
