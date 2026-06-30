# Revisão de Código — Integração Quiz com IA Gemini

## 5 problemas encontrados e corrigidos

---

### 1. 🔒 `.gitignore` — API key vazava para o git

**Arquivo:** `.gitignore`

**Problema:** `.env` não estava no `.gitignore`, apenas `.env*.local`. A chave `GEMINI_API_KEY` seria commitada acidentalmente.

**Correção:** Adicionada linha `.env` ao `.gitignore`.

```diff
# local env files
+ .env
  .env*.local
```

---

### 2. 🧠 `ModuleDetailScreen` — Memory leak ao desmontar durante fetch

**Arquivo:** `src/screens/ModuleDetailScreen.js:271-295`

**Problema:** Se o usuário saísse da tela enquanto a IA gerava perguntas, `setAiLoading(false)` era chamado em componente já desmontado (React warning).

**Antes:**
```js
const [aiLoading, setAiLoading] = useState(false);

async function handleAIQuiz() {
  setAiLoading(true);
  try {
    const questions = await fetchAIQuestions(moduleData.title, 'medium', 10);
    navigation.navigate('Quiz', { moduleId, questions, source: 'ai' });
  } catch (err) {
    setAiLoading(false);  // ← crash se componente desmontou
    Alert.alert('Erro', err.message);
  }
}
```

**Depois:**
```js
const [aiLoading, setAiLoading] = useState(false);
const mountedRef = useRef(true);

useEffect(() => {
  return () => { mountedRef.current = false; };
}, []);

async function handleAIQuiz() {
  setAiLoading(true);
  try {
    const questions = await fetchAIQuestions(moduleData.title, 'medium', 10);
    if (mountedRef.current) {
      navigation.navigate('Quiz', { moduleId, questions, source: 'ai' });
    }
  } catch (err) {
    if (mountedRef.current) {
      setAiLoading(false);
      Alert.alert('Erro', err.message || 'Não foi possível gerar o quiz com IA');
    }
  }
}
```

---

### 3. 📋 `QuizScreen` — `useEffect` com dependências faltando

**Arquivo:** `src/screens/QuizScreen.js:93-101`

**Problema:** `total`, `isAI` e `moduleId` eram usados dentro do effect mas não estavam no array de dependências. Além disso, `percentage()` é uma função — chamar funções dentro de effect sem incluí-las nas deps fere as regras do React.

**Antes:**
```js
useEffect(() => {
  if (finished) {
    saveQuizScore(moduleId, score, total);
    if (!isAI && percentage() >= 70) {
      completeModule(moduleId);
    }
  }
}, [finished, score]);  // faltando: total, isAI, moduleId, percentage
```

**Depois:**
```js
useEffect(() => {
  if (finished) {
    const pct = Math.round((score / total) * 100);
    saveQuizScore(moduleId, score, total);
    if (!isAI && pct >= 70) {
      completeModule(moduleId);
    }
  }
}, [finished, score, total, isAI, moduleId]);
```

---

### 4. ⏱️ `QuizAIService.js` — Sem timeout na chamada à Gemini

**Arquivo:** `backend/src/services/QuizAIService.js:39-40`

**Problema:** Se a API do Google demorasse ou travasse, a requisição ficava pendente indefinidamente, ocupando memória e bloqueando o event loop.

**Antes:**
```js
const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
  method: 'POST',
  // sem timeout
});
```

**Depois:**
```js
const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
  signal: AbortSignal.timeout(30000),
  method: 'POST',
  // aborta automaticamente após 30s
});
```

---

### 5. 💥 `QuizScreen` — Possível crash com array vazio de perguntas

**Arquivo:** `src/screens/QuizScreen.js:51-67`

**Problema:** Se `QUESTIONS` fosse um array vazio (ex: módulo sem perguntas locais ou IA retorna algo inesperado), `current` seria `undefined` → crash em `current.question`.

**Antes:**
```js
const current = QUESTIONS[currentIndex];   // undefined se array vazio
const total = QUESTIONS.length;            // 0
```

**Depois:**
```js
const total = QUESTIONS.length;
const current = total > 0 ? QUESTIONS[currentIndex] : null;
const progress = total > 0 ? ((currentIndex + 1) / total) * 100 : 0;

if (!current && !finished) {
  return (
    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', padding: spacing.xl }]}>
      <Ionicons name="alert-circle-outline" size={64} color={colors.textMuted} />
      <Text style={{ color: colors.textMuted, fontSize: 18, marginTop: spacing.lg, textAlign: 'center' }}>
        Nenhuma pergunta disponível para este módulo.
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}
        style={{ backgroundColor: colors.surface, paddingVertical: spacing.base,
                 paddingHorizontal: spacing.xxl, borderRadius: radius.xl,
                 borderWidth: 1, borderColor: colors.border + '50', marginTop: spacing.xl }}>
        <Text style={{ color: colors.text, fontWeight: 'bold' }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
```

---

---

# Auditoria Final — Validação da Integração Gemini

## Diagnóstico (29/06/2026)

| Verificação | Resultado |
|---|---|
| Backend inicia | ✅ `Servidor rodando em http://localhost:3000` |
| Health check | ✅ `{"status":"ok"}` |
| API key carregada | ✅ Gemini reconheceu a chave (respondeu 429, não 403/401) |
| Requisição chega ao Gemini | ✅ Resposta 429 com `RESOURCE_EXHAUSTED` |
| Erro tratado e propagado | ✅ 502 com corpo descritivo |
| Validação de tópico vazio | ✅ Retorna 400 |

### Causa do erro 429

A tier gratuita do Gemini (`gemini-2.0-flash`) tem ~60 requisições/dia. A chave atual consumiu a cota. O próprio Gemini inclui no erro:

```
retryDelay: 6s
```

### Soluções

| Opção | Ação |
|---|---|
| **Aguardar** | A cota reseta automaticamente (até 24h após o primeiro uso) |
| **Nova chave** | Criar outro projeto no Google AI Studio para chave com cota fresca |
| **Retry automático** | Implementar backoff usando o `retryDelay` que o Gemini retorna |

---

## Coleção Bruno para testes manuais

Criada em `backend/bruno/` com 6 requisições:

```
backend/bruno/
├── bru.json
├── Health Check.bru                          # GET  /api/health
├── Gerar Quiz IA.bru                         # POST /api/ai-quiz/generate (Phishing, easy, 3)
├── Gerar Quiz IA - Tópico Vazio.bru         # POST (testa validação 400)
├── Gerar Quiz IA - Dificuldade Hard.bru     # POST (Criptografia, hard, 5)
├── Auth Register.bru                         # POST /api/auth/register
└── Auth Login.bru                            # POST /api/auth/login
```

### Como usar

1. Abrir o [Bruno](https://www.usebruno.com/)
2. `File → Open Collection` → selecionar `backend/bruno/`
3. Iniciar o backend: `cd backend; npm start`
4. Executar as requisições

---

# Novos Problemas Encontrados na Auditoria Final

### 6. 🔐 API key no header, não na URL

**Arquivo:** `backend/src/services/QuizAIService.js:42-45`

**Problema:** A chave era enviada como `?key=${apiKey}` na URL. Query parameters podem ser registrados em logs de proxies, balanceadores e servidores intermediários.

**Antes:**
```js
const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, { ... });
```

**Depois:**
```js
const response = await fetch(GEMINI_API_URL, {
  headers: {
    'Content-Type': 'application/json',
    'x-goog-api-key': apiKey,
  },
  ...
});
```

---

### 7. ⚠️ Safety block do Gemini não identificado

**Arquivo:** `backend/src/services/QuizAIService.js:64-67`

**Problema:** Quando o Gemini bloqueava o conteúdo por safety filters, retornava 200 OK com `candidates: []` e `promptFeedback.blockReason`. O código antigo caía no genérico "Resposta vazia da API Gemini".

**Depois:**
```js
const blockReason = data?.promptFeedback?.blockReason;
if (blockReason) {
  throw new Error(`Gemini bloqueou a requisição (${blockReason}). Tente um tema diferente ou reduza a dificuldade.`);
}
```

---

### 8. 🧹 Tema com espaços em branco passava na validação

**Arquivo:** `backend/src/routes/aiQuiz.js:10-14`

**Problema:** `"   "` passava no `!topic` (string preenchida), mas virava `topic=""` no prompt da Gemini após `.trim()`.

**Antes:**
```js
if (!topic || typeof topic !== 'string') {
  return res.status(400).json({ error: 'Campo "topic" é obrigatório' });
}
// ...
const questions = await generateQuestions(topic.trim(), diff, qty);
```

**Depois:**
```js
if (!topic || typeof topic !== 'string' || !topic.trim()) {
  return res.status(400).json({ error: 'Campo "topic" é obrigatório' });
}
const trimmedTopic = topic.trim();
// ...
const questions = await generateQuestions(trimmedTopic, diff, qty);
```

---

### 9. 🔢 `correctAnswer` podia vir como string da Gemini

**Arquivo:** `backend/src/services/QuizAIService.js:105-109`

**Problema:** Gemini pode retornar `correctAnswer: "1"` (string) em vez de `correctAnswer: 1` (number). `selectedOption === current.correctAnswer` falharia porque `1 !== "1"`.

**Antes:**
```js
if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
  throw new Error(`correctAnswer inválido`);
}
```

**Depois:**
```js
const normalizedAnswer = Number(q.correctAnswer);
if (!Number.isInteger(normalizedAnswer) || normalizedAnswer < 0 || normalizedAnswer > 3) {
  throw new Error(`correctAnswer inválido`);
}
q.correctAnswer = normalizedAnswer;
```

---

## Resumo geral dos arquivos alterados

| Arquivo | Problemas corrigidos |
|---------|----------------------|
| `.gitignore` | #1 — `.env` agora é ignorado |
| `backend/.env` | #6 — adicionado campo `GEMINI_API_KEY` |
| `backend/src/services/QuizAIService.js` | #4 timeout 30s, #6 API key no header, #7 safety block, #9 normalize correctAnswer |
| `backend/src/routes/aiQuiz.js` | #8 validação de whitespace no topic |
| `src/services/QuizAIService.js` | Cache de sessão com `Map` |
| `src/screens/ModuleDetailScreen.js` | #2 memory leak com `mountedRef` |
| `src/screens/QuizScreen.js` | #3 dependências do useEffect, #5 guard contra array vazio |
