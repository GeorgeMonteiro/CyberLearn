import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, typography, radius, shadows } from '../theme';
import ShieldIcon from '../components/ShieldIcon';
import Avatar from '../components/Avatar';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [editingField, setEditingField] = useState(null);
  const [nome, setNome] = useState('Usuário');
  const [email, setEmail] = useState('usuario@email.com');
  const [editNome, setEditNome] = useState(nome);
  const [editEmail, setEditEmail] = useState(email);
  const [editSenha, setEditSenha] = useState('');

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      const stored = await AsyncStorage.getItem('@cyberlearn_user');
      if (stored) {
        const user = JSON.parse(stored);
        if (user.name) setNome(user.name);
        if (user.email) setEmail(user.email);
      }
    } catch (e) {
      console.error('Failed to load user:', e);
    }
  }

  async function handleLogout() {
    await AsyncStorage.removeItem('@cyberlearn_token');
    await AsyncStorage.removeItem('@cyberlearn_user');
    const rootNav = navigation.getParent()?.getParent();
    if (rootNav) {
      rootNav.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      });
    }
  }

  const dropdownOptions = [
    { label: 'Meu Perfil', action: () => setDropdownVisible(false) },
    { label: 'Meu Desempenho', action: () => navigation.getParent()?.navigate('ProgressTab') },
    { label: 'Sair', action: handleLogout },
  ];

  function handleBack() {
    navigation.goBack();
  }

  function handleStartEdit(field) {
    if (field === 'nome') setEditNome(nome);
    if (field === 'email') setEditEmail(email);
    if (field === 'senha') setEditSenha('');
    setEditingField(field);
  }

  function handleSave(field) {
    if (field === 'nome') setNome(editNome);
    if (field === 'email') setEmail(editEmail);
    if (field === 'senha') setEditSenha('');
    setEditingField(null);
  }

  function handleCancel() {
    setEditingField(null);
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
        <Text style={styles.pageTitle}>Meu Perfil</Text>

        <View style={styles.avatarSection}>
          <Avatar name="Usuário" size={120} />
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.editImageText}>Editar Imagem</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fieldsCard}>
          <View style={styles.fieldBlock}>
            <View style={styles.fieldLabelRow}>
              <Text style={styles.fieldLabel}>Nome do usuário</Text>
              {editingField !== 'nome' && (
                <TouchableOpacity onPress={() => handleStartEdit('nome')} activeOpacity={0.7}>
                  <Text style={styles.fieldEditLink}>Editar</Text>
                </TouchableOpacity>
              )}
            </View>
            {editingField === 'nome' ? (
              <View>
                <TextInput
                  style={styles.input}
                  value={editNome}
                  onChangeText={setEditNome}
                  placeholderTextColor={colors.textMuted}
                  autoFocus
                />
                <View style={styles.editActions}>
                  <TouchableOpacity onPress={() => handleSave('nome')} activeOpacity={0.7}>
                    <Text style={styles.saveText}>Salvar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleCancel} activeOpacity={0.7}>
                    <Text style={styles.cancelText}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={styles.input}>
                <Text style={styles.inputText}>{nome}</Text>
              </View>
            )}
          </View>

          <View style={styles.divider} />

          <View style={styles.fieldBlock}>
            <Text style={styles.fieldLabel}>E-mail</Text>
            <View style={styles.input}>
              <Text style={styles.inputText}>{email}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.fieldBlock}>
            <Text style={styles.fieldLabel}>Redefinir senha</Text>
            {editingField === 'senha' ? (
              <View>
                <TextInput
                  style={styles.input}
                  value={editSenha}
                  onChangeText={setEditSenha}
                  placeholder="Nova senha"
                  placeholderTextColor={colors.textMuted}
                  secureTextEntry
                  autoFocus
                />
                <View style={styles.editActions}>
                  <TouchableOpacity onPress={() => handleSave('senha')} activeOpacity={0.7}>
                    <Text style={styles.saveText}>Salvar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleCancel} activeOpacity={0.7}>
                    <Text style={styles.cancelText}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <TouchableOpacity onPress={() => handleStartEdit('senha')} activeOpacity={0.7}>
                <View style={styles.input}>
                  <Text style={styles.inputText}>••••••••</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <TouchableOpacity
          style={styles.performanceButton}
          activeOpacity={0.8}
          onPress={() => navigation.getParent()?.navigate('ProgressTab')}
        >
          <View style={styles.performanceContent}>
            <Ionicons name="bar-chart-outline" size={22} color={colors.warning} />
            <Text style={styles.performanceText}>Meu Desempenho</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          </View>
        </TouchableOpacity>
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
    backgroundColor: colors.buttonBg,
    borderRadius: radius.lg,
    minWidth: 180,
    zIndex: 2,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  dropdownItem: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  dropdownItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
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
  pageTitle: {
    fontSize: typography.fontSize.display,
    fontWeight: typography.fontWeight.bold,
    color: colors.textLight,
    letterSpacing: typography.letterSpacing.wider,
    textAlign: 'center',
    marginBottom: spacing.xxl,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  editImageText: {
    fontSize: typography.fontSize.md,
    color: colors.primaryPurple,
    fontWeight: typography.fontWeight.semibold,
    marginTop: spacing.sm,
    letterSpacing: typography.letterSpacing.wide,
  },
  fieldsCard: {
    width: '100%',
    backgroundColor: colors.buttonBg,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    ...shadows.md,
    marginBottom: spacing.xxl,
  },
  fieldBlock: {
    gap: spacing.sm,
  },
  fieldLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fieldLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textSecondary,
    letterSpacing: typography.letterSpacing.wide,
    textTransform: 'uppercase',
  },
  fieldEditLink: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.cyberBlue,
    letterSpacing: typography.letterSpacing.wide,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: radius.xxl,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
  },
  inputText: {
    fontSize: typography.fontSize.base,
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
  editActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.base,
    marginTop: spacing.sm,
  },
  saveText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.success,
    letterSpacing: typography.letterSpacing.wide,
  },
  cancelText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.textMuted,
    letterSpacing: typography.letterSpacing.wide,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginVertical: spacing.lg,
  },
  performanceButton: {
    width: '100%',
    borderRadius: radius.xxl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  performanceContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  performanceText: {
    flex: 1,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.textLight,
    letterSpacing: typography.letterSpacing.wide,
    marginLeft: spacing.sm,
  },
});
