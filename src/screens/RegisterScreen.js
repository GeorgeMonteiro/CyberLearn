import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, typography, radius, shadows } from '../theme';
import ShieldIcon from '../components/ShieldIcon';
import API_BASE_URL from '../config/api';

function RecaptchaCheckbox({ checked, onToggle }) {
  return (
    <TouchableOpacity style={styles.recaptchaContainer} onPress={onToggle} activeOpacity={0.8}>
      <View style={[styles.recaptchaCheckbox, checked && styles.recaptchaCheckboxChecked]}>
        {checked && <Text style={styles.recaptchaCheckmark}>✓</Text>}
      </View>
      <View style={styles.recaptchaTextContainer}>
        <Text style={styles.recaptchaText}>Confirme que é Humano</Text>
        <Text style={styles.recaptchaBadge}>reCAPTCHA</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  function validate() {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    if (!email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'Mínimo de 6 caracteres';
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirme sua senha';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Senhas não coincidem';
    }
    if (!recaptchaChecked) {
      newErrors.recaptcha = 'Confirme que é humano';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function clearError(field) {
    setErrors((prev) => ({ ...prev, [field]: '' }));
  }

  async function handleRegister() {
    setApiError('');
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
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
          <Text style={styles.title}>CyberLearn</Text>
          <Text style={styles.subtitle}>Cadastrar-se</Text>
        </View>

        <View style={styles.formSection}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              placeholder="Seu nome completo"
              placeholderTextColor={colors.textMuted}
              value={name}
              onChangeText={(v) => { setName(v); clearError('name'); }}
              autoCapitalize="words"
            />
            {errors.name ? <Text style={styles.fieldError}>{errors.name}</Text> : null}
          </View>

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

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Digite novamente a senha</Text>
            <TextInput
              style={[styles.input, errors.confirmPassword && styles.inputError]}
              placeholder="••••••••"
              placeholderTextColor={colors.textMuted}
              value={confirmPassword}
              onChangeText={(v) => { setConfirmPassword(v); clearError('confirmPassword'); }}
              secureTextEntry
            />
            {errors.confirmPassword ? <Text style={styles.fieldError}>{errors.confirmPassword}</Text> : null}
          </View>

          <RecaptchaCheckbox
            checked={recaptchaChecked}
            onToggle={() => { setRecaptchaChecked(!recaptchaChecked); clearError('recaptcha'); }}
          />
          {errors.recaptcha ? <Text style={[styles.fieldError, { marginTop: -spacing.sm, marginBottom: spacing.md }]}>{errors.recaptcha}</Text> : null}

          {apiError ? <Text style={styles.apiError}>{apiError}</Text> : null}

          <TouchableOpacity onPress={handleRegister} activeOpacity={0.8} style={styles.buttonWrapper} disabled={loading}>
            <LinearGradient
              colors={[colors.gradientStart, colors.gradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientButton}
            >
              {loading ? (
                <ActivityIndicator color={colors.textLight} />
              ) : (
                <Text style={styles.buttonText}>Cadastrar-se</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
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
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textLight,
    opacity: 0.9,
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
});
