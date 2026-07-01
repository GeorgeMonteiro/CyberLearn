import { Router } from 'express';

const router = Router();

const questoes = [
  // ===== BÁSICO (1-20) =====
  {
    id: 1,
    nivel: 'basico',
    topico: 'Lógica de Programação',
    pergunta: 'O que é lógica de programação?',
    opcoes: [
      'Uma linguagem de programação específica',
      'A técnica de organizar pensamentos para criar instruções claras e sequenciais que o computador execute',
      'Um hardware utilizado para processar dados',
      'Um tipo de compilador',
    ],
    correta: 1,
    explicacao: 'Lógica de programação é a técnica de organizar o raciocínio humano em uma sequência lógica de instruções que o computador possa entender e executar.',
  },
  {
    id: 2,
    nivel: 'basico',
    topico: 'Algoritmos',
    pergunta: 'O que é um algoritmo?',
    opcoes: [
      'Um equipamento eletrônico',
      'Uma sequência finita e bem definida de passos para resolver um problema',
      'Um tipo de dado numérico',
      'Um erro de sintaxe',
    ],
    correta: 1,
    explicacao: 'Algoritmo é uma sequência finita, ordenada e não ambígua de passos que leva à solução de um problema.',
  },
  {
    id: 3,
    nivel: 'basico',
    topico: 'Fluxogramas',
    pergunta: 'Qual símbolo de fluxograma representa uma decisão?',
    opcoes: ['Elipse', 'Retângulo', 'Losango', 'Paralelogramo'],
    correta: 2,
    explicacao: 'O losango representa uma decisão condicional, com duas ou mais saídas possíveis (Sim/Não).',
  },
  {
    id: 4,
    nivel: 'basico',
    topico: 'Variáveis',
    pergunta: 'O que é uma variável em programação?',
    opcoes: [
      'Um valor que nunca muda',
      'Um espaço na memória para armazenar dados que podem ser alterados',
      'Um tipo de operador matemático',
      'Uma estrutura de repetição',
    ],
    correta: 1,
    explicacao: 'Variável é um espaço na memória do computador reservado para armazenar dados que podem variar durante a execução do programa.',
  },
  {
    id: 5,
    nivel: 'basico',
    topico: 'Variáveis',
    pergunta: 'Qual destes é um nome de variável válido na maioria das linguagens?',
    opcoes: ['2nome', 'nome completo', 'nome_completo', 'nome-completo'],
    correta: 2,
    explicacao: 'nome_completo é válido porque começa com letra e usa underscore. Os demais começam com número, têm espaços ou hífen.',
  },
  {
    id: 6,
    nivel: 'basico',
    topico: 'Tipos de Dados',
    pergunta: 'Qual tipo de dado é mais adequado para armazenar "verdadeiro" ou "falso"?',
    opcoes: ['Inteiro', 'String', 'Booleano', 'Real'],
    correta: 2,
    explicacao: 'O tipo booleano representa valores lógicos: true (verdadeiro) ou false (falso).',
  },
  {
    id: 7,
    nivel: 'basico',
    topico: 'Operadores',
    pergunta: 'Qual o resultado da expressão (10 + 5) * 2?',
    opcoes: ['20', '25', '30', '15'],
    correta: 2,
    explicacao: 'Primeiro resolvemos os parênteses: 10 + 5 = 15. Depois multiplicamos: 15 * 2 = 30.',
  },
  {
    id: 8,
    nivel: 'basico',
    topico: 'Operadores',
    pergunta: 'O operador AND (&&) retorna verdadeiro quando:',
    opcoes: [
      'Pelo menos uma condição for verdadeira',
      'Todas as condições forem verdadeiras',
      'Nenhuma condição for verdadeira',
      'Apenas a primeira condição for verdadeira',
    ],
    correta: 1,
    explicacao: 'AND (E lógico) só retorna true se todas as condições envolvidas forem verdadeiras.',
  },
  {
    id: 9,
    nivel: 'basico',
    topico: 'Operadores',
    pergunta: 'Qual operador lógico retorna verdadeiro se pelo menos uma das condições for verdadeira?',
    opcoes: ['AND (&&)', 'OR (||)', 'NOT (!)', 'XOR'],
    correta: 1,
    explicacao: 'OR (OU lógico) retorna true se pelo menos uma das condições for verdadeira.',
  },
  {
    id: 10,
    nivel: 'basico',
    topico: 'Estruturas Condicionais',
    pergunta: 'Qual estrutura é usada para executar um bloco de código apenas se uma condição for verdadeira?',
    opcoes: ['for', 'while', 'if', 'switch'],
    correta: 2,
    explicacao: 'if é a estrutura condicional que executa um bloco de código somente se a condição especificada for verdadeira.',
  },
  {
    id: 11,
    nivel: 'basico',
    topico: 'Estruturas Condicionais',
    pergunta: 'Quando é mais adequado usar switch-case em vez de if-else?',
    opcoes: [
      'Quando temos apenas uma condição simples',
      'Quando comparamos uma única variável com muitos valores fixos',
      'Switch-case substitui totalmente o if-else',
      'Quando precisamos de operadores relacionais como > e <',
    ],
    correta: 1,
    explicacao: 'switch-case é ideal para comparar uma única variável com diversos valores fixos, tornando o código mais legível.',
  },
  {
    id: 12,
    nivel: 'basico',
    topico: 'Estruturas de Repetição',
    pergunta: 'Qual estrutura de repetição garante que o bloco execute pelo menos uma vez?',
    opcoes: ['while', 'for', 'do-while', 'if'],
    correta: 2,
    explicacao: 'do-while executa o bloco primeiro e depois testa a condição, garantindo ao menos uma execução.',
  },
  {
    id: 13,
    nivel: 'basico',
    topico: 'Estruturas de Repetição',
    pergunta: 'O loop for (i = 0; i < 5; i++) executa quantas iterações?',
    opcoes: ['4', '5', '6', 'Infinitas'],
    correta: 1,
    explicacao: 'O loop executa para i = 0, 1, 2, 3, 4 — 5 iterações. Quando i = 5, a condição i < 5 é falsa e o loop para.',
  },
  {
    id: 14,
    nivel: 'basico',
    topico: 'Algoritmos',
    pergunta: 'Qual é a primeira fase na criação de um algoritmo?',
    opcoes: [
      'Codificar em uma linguagem de programação',
      'Compreender e definir claramente o problema',
      'Testar o algoritmo',
      'Documentar a solução',
    ],
    correta: 1,
    explicacao: 'Antes de qualquer coisa, é preciso entender o problema. Sem uma definição clara do problema, não é possível criar uma solução adequada.',
  },
  {
    id: 15,
    nivel: 'basico',
    topico: 'Fluxogramas',
    pergunta: 'Qual símbolo representa o início e o fim em um fluxograma?',
    opcoes: ['Retângulo', 'Losango', 'Elipse', 'Paralelogramo'],
    correta: 2,
    explicacao: 'A elipse (ou círculo) é usada para marcar o início e o fim do fluxo em um fluxograma.',
  },
  {
    id: 16,
    nivel: 'basico',
    topico: 'Variáveis',
    pergunta: 'Após executar: x = 5; y = x; x = 10. Qual o valor de y?',
    opcoes: ['5', '10', '15', '0'],
    correta: 0,
    explicacao: 'y recebeu o valor de x quando x era 5. Depois x mudou para 10, mas y já foi definido como 5.',
  },
  {
    id: 17,
    nivel: 'basico',
    topico: 'Tipos de Dados',
    pergunta: 'Qual tipo de dado representa números com casas decimais?',
    opcoes: ['Inteiro', 'String', 'Float/Real', 'Booleano'],
    correta: 2,
    explicacao: 'Float (ou real, double) é o tipo usado para representar números com parte fracionária.',
  },
  {
    id: 18,
    nivel: 'basico',
    topico: 'Operadores',
    pergunta: 'O que o operador de módulo (%) faz?',
    opcoes: [
      'Multiplica dois números',
      'Divide e retorna o quociente inteiro',
      'Retorna o resto da divisão',
      'Calcula a porcentagem',
    ],
    correta: 2,
    explicacao: 'O operador % retorna o resto da divisão entre dois números. Ex: 10 % 3 = 1.',
  },
  {
    id: 19,
    nivel: 'basico',
    topico: 'Estruturas de Repetição',
    pergunta: 'Qual a diferença entre while e for?',
    opcoes: [
      'for é mais rápido que while',
      'for concentra inicialização, condição e incremento em uma linha; while separa esses elementos',
      'while só funciona com números; for só com strings',
      'Não há diferença prática',
    ],
    correta: 1,
    explicacao: 'for agrupa os três componentes do loop em uma linha, while exige que sejam escritos separadamente.',
  },
  {
    id: 20,
    nivel: 'basico',
    topico: 'Algoritmos',
    pergunta: 'O que é pseudocódigo?',
    opcoes: [
      'Código com erros de sintaxe',
      'Uma forma de representar algoritmos usando linguagem próxima ao humano, sem se prender a sintaxe de uma linguagem específica',
      'Um tipo de dado primitivo',
      'Um depurador de código',
    ],
    correta: 1,
    explicacao: 'Pseudocódigo é uma maneira de escrever algoritmos em linguagem estruturada próxima do português, independente de qualquer linguagem de programação.',
  },

  // ===== AVANÇADO (21-40) =====
  {
    id: 21,
    nivel: 'avancado',
    topico: 'Recursão',
    pergunta: 'O que é uma função recursiva?',
    opcoes: [
      'Uma função que chama outras funções',
      'Uma função que chama a si mesma para resolver um problema dividindo-o em subproblemas menores',
      'Uma função que retorna valores aleatórios',
      'Uma função que não possui parâmetros',
    ],
    correta: 1,
    explicacao: 'Recursão ocorre quando uma função chama a si mesma. É útil para problemas que podem ser decompostos em subproblemas semelhantes, como fatorial e Fibonacci.',
  },
  {
    id: 22,
    nivel: 'avancado',
    topico: 'Recursão',
    pergunta: 'Qual o caso base da função fatorial recursiva?',
    opcoes: [
      'fatorial(n) = n * fatorial(n-1)',
      'fatorial(0) = 1',
      'fatorial(n) = n + fatorial(n-1)',
      'fatorial(1) = 0',
    ],
    correta: 1,
    explicacao: 'O caso base da recursão é fundamental para evitar loop infinito. Para fatorial: fatorial(0) = 1 é o caso base que interrompe as chamadas recursivas.',
  },
  {
    id: 23,
    nivel: 'avancado',
    topico: 'Complexidade de Algoritmos',
    pergunta: 'O que significa a notação O(n²) em complexidade de algoritmos?',
    opcoes: [
      'O algoritmo executa em tempo linear',
      'O tempo de execução cresce proporcionalmente ao quadrado do tamanho da entrada',
      'O algoritmo é executado em tempo constante',
      'O algoritmo executa exatamente n² operações',
    ],
    correta: 1,
    explicacao: 'O(n²) indica complexidade quadrática: se a entrada dobra, o tempo de execução quadruplica. Exemplo típico: algoritmos de ordenação como Bubble Sort.',
  },
  {
    id: 24,
    nivel: 'avancado',
    topico: 'Complexidade de Algoritmos',
    pergunta: 'Qual a complexidade da busca binária no pior caso?',
    opcoes: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
    correta: 1,
    explicacao: 'A busca binária tem complexidade O(log n) porque a cada passo descarta metade dos elementos restantes.',
  },
  {
    id: 25,
    nivel: 'avancado',
    topico: 'Estruturas de Dados',
    pergunta: 'Qual a principal diferença entre pilha (stack) e fila (queue)?',
    opcoes: [
      'Pilha usa LIFO (último a entrar, primeiro a sair); fila usa FIFO (primeiro a entrar, primeiro a sair)',
      'Pilha é para números; fila é para texto',
      'Pilha usa FIFO; fila usa LIFO',
      'Não há diferença entre os conceitos',
    ],
    correta: 0,
    explicacao: 'Pilha segue o princípio LIFO (Last In, First Out) — como uma pilha de pratos. Fila segue FIFO (First In, First Out) — como uma fila de banco.',
  },
  {
    id: 26,
    nivel: 'avancado',
    topico: 'Estruturas de Dados',
    pergunta: 'Em uma lista encadeada simples, cada nó contém:',
    opcoes: [
      'Apenas o dado',
      'O dado e um ponteiro para o nó anterior',
      'O dado e um ponteiro para o próximo nó',
      'Dois ponteiros e o dado',
    ],
    correta: 2,
    explicacao: 'Em uma lista encadeada simples, cada nó armazena seu valor e um ponteiro para o próximo nó da sequência.',
  },
  {
    id: 27,
    nivel: 'avancado',
    topico: 'Algoritmos de Ordenação',
    pergunta: 'Qual algoritmo de ordenação tem a melhor complexidade média?',
    opcoes: ['Bubble Sort — O(n²)', 'Selection Sort — O(n²)', 'Merge Sort — O(n log n)', 'Insertion Sort — O(n²)'],
    correta: 2,
    explicacao: 'Merge Sort tem complexidade O(n log n) no pior caso, sendo mais eficiente que os algoritmos quadráticos para grandes conjuntos de dados.',
  },
  {
    id: 28,
    nivel: 'avancado',
    topico: 'Algoritmos de Ordenação',
    pergunta: 'Como o Quick Sort escolhe sua estratégia de divisão?',
    opcoes: [
      'Divide a lista em duas metades exatas sempre',
      'Escolhe um pivô e particiona os demais elementos em menores ou maiores que o pivô',
      'Troca elementos adjacentes até ordenar',
      'Insere cada elemento na posição correta',
    ],
    correta: 1,
    explicacao: 'Quick Sort escolhe um pivô e rearranja o array de modo que elementos menores fiquem à esquerda e maiores à direita, depois ordena recursivamente cada partição.',
  },
  {
    id: 29,
    nivel: 'avancado',
    topico: 'Lógica Booleana',
    pergunta: 'Simplifique a expressão booleana: A + (A * B)',
    opcoes: ['A * B', 'A', 'B', 'A + B'],
    correta: 1,
    explicacao: 'Pela lei da absorção da álgebra booleana: A + (A * B) = A. Isso porque se A é verdadeiro, a expressão é verdadeira independente de B.',
  },
  {
    id: 30,
    nivel: 'avancado',
    topico: 'Lógica Booleana',
    pergunta: 'Qual expressão representa o teorema de De Morgan: ¬(A ∧ B)?',
    opcoes: ['¬A ∧ ¬B', '¬A ∨ ¬B', 'A ∨ B', '¬A ∨ B'],
    correta: 1,
    explicacao: 'De Morgan afirma: ¬(A ∧ B) = ¬A ∨ ¬B. A negação de uma conjunção é a disjunção das negações.',
  },
  {
    id: 31,
    nivel: 'avancado',
    topico: 'Matrizes',
    pergunta: 'Dada uma matriz M[3][4], quantos elementos ela possui e como acessar o elemento da 2ª linha e 3ª coluna?',
    opcoes: [
      '12 elementos; M[1][2] (considerando índice 0)',
      '7 elementos; M[2][3]',
      '12 elementos; M[2][3]',
      '7 elementos; M[1][2]',
    ],
    correta: 0,
    explicacao: 'M[3][4] tem 3 × 4 = 12 elementos. Em índices base 0, a 2ª linha é índice 1 e a 3ª coluna é índice 2: M[1][2].',
  },
  {
    id: 32,
    nivel: 'avancado',
    topico: 'Algoritmos',
    pergunta: 'Qual a saída do algoritmo para x = 10?\n\nfuncao misterio(x)\n  se x <= 1\n    retornar 1\n  senao\n    retornar x * misterio(x - 1)',
    opcoes: ['100', '3628800', '10', '55'],
    correta: 1,
    explicacao: 'A função calcula o fatorial: 10! = 10 × 9 × 8 × ... × 1 = 3.628.800.',
  },
  {
    id: 33,
    nivel: 'avancado',
    topico: 'Busca',
    pergunta: 'Em uma lista ordenada de 1 milhão de itens, quantas comparações a busca binária faz no pior caso?',
    opcoes: ['1 milhão', '500 mil', 'Cerca de 20', '100'],
    correta: 2,
    explicacao: 'A busca binária faz log₂(1.000.000) ≈ 20 comparações no pior caso, pois a cada passo descarta metade dos elementos.',
  },
  {
    id: 34,
    nivel: 'avancado',
    topico: 'Lógica de Programação',
    pergunta: 'Analise: "Se todo programador sabe lógica E Maria é programadora, ENTÃO Maria sabe lógica." Qual o nome deste padrão de raciocínio?',
    opcoes: [
      'Indução',
      'Abdução',
      'Silogismo (raciocínio dedutivo)',
      'Raciocínio intuitivo',
    ],
    correta: 2,
    explicacao: 'Este é um silogismo clássico: premissa geral (todo programador sabe lógica) + premissa específica (Maria é programadora) → conclusão (Maria sabe lógica).',
  },
  {
    id: 35,
    nivel: 'avancado',
    topico: 'Depuração',
    pergunta: 'O que é "debugging" ou depuração?',
    opcoes: [
      'O processo de escrever código novo',
      'O processo de identificar e corrigir erros no código',
      'Uma técnica de otimização de algoritmos',
      'Um tipo de dado booleano',
    ],
    correta: 1,
    explicacao: 'Debugging é o processo sistemático de encontrar, analisar e corrigir defeitos (bugs) no software.',
  },
  {
    id: 36,
    nivel: 'avancado',
    topico: 'Algoritmos',
    pergunta: 'Qual das seguintes NÃO é uma propriedade fundamental de um algoritmo?',
    opcoes: ['Finitude', 'Eficiência', 'Ambiguidade', 'Determinismo'],
    correta: 2,
    explicacao: 'Um algoritmo deve ser não ambíguo (claro e preciso). Ambiguidade é indesejável — cada passo deve ter uma única interpretação.',
  },
  {
    id: 37,
    nivel: 'avancado',
    topico: 'Paradigmas',
    pergunta: 'Qual a principal diferença entre programação imperativa e declarativa?',
    opcoes: [
      'Imperativa descreve COMO fazer; declarativa descreve O QUE fazer',
      'Imperativa é mais moderna; declarativa é antiga',
      'Imperativa usa funções; declarativa usa variáveis',
      'Não há diferença significativa',
    ],
    correta: 0,
    explicacao: 'Programação imperativa foca no passo a passo (como), enquanto declarativa foca no resultado desejado (o que), deixando a execução para o sistema.',
  },
  {
    id: 38,
    nivel: 'avancado',
    topico: 'Algoritmos',
    pergunta: 'Um algoritmo guloso (greedy) é caracterizado por:',
    opcoes: [
      'Sempre encontrar a solução ótima global',
      'Fazer a melhor escolha local em cada passo, esperando que leve à solução ótima global',
      'Testar todas as combinações possíveis',
      'Dividir o problema em subproblemas independentes',
    ],
    correta: 1,
    explicacao: 'Algoritmos gulosos fazem a escolha ótima local em cada passo. Nem sempre encontram a solução ótima global, mas são eficientes para muitos problemas.',
  },
  {
    id: 39,
    nivel: 'avancado',
    topico: 'Variáveis',
    pergunta: 'O que é uma variável do tipo "array"?',
    opcoes: [
      'Uma variável que armazena um único valor',
      'Uma estrutura que armazena múltiplos valores do mesmo tipo, acessados por índices',
      'Um tipo de loop',
      'Uma função matemática',
    ],
    correta: 1,
    explicacao: 'Array (vetor) é uma estrutura de dados que armazena uma coleção de elementos do mesmo tipo, cada um acessado por um índice numérico.',
  },
  {
    id: 40,
    nivel: 'avancado',
    topico: 'Estruturas de Dados',
    pergunta: 'Qual estrutura de dados é mais adequada para implementar um sistema de "desfazer" (undo) em um editor de texto?',
    opcoes: ['Fila (queue)', 'Pilha (stack)', 'Lista encadeada', 'Árvore binária'],
    correta: 1,
    explicacao: 'Pilha (stack) é ideal para undo porque segue LIFO: o último comando desfeito é o primeiro a ser refeito, exatamente como uma pilha de ações.',
  },
];

router.get('/', (req, res) => {
  try {
    const { nivel } = req.query;

    let filtradas = questoes;

    if (nivel === 'basico') {
      filtradas = questoes.filter(q => q.nivel === 'basico');
    } else if (nivel === 'avancado') {
      filtradas = questoes.filter(q => q.nivel === 'avancado');
    }

    res.json({
      total: filtradas.length,
      nivel: nivel || 'todas',
      questoes: filtradas,
    });
  } catch (err) {
    console.error('Erro ao buscar questões:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.get('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const questao = questoes.find(q => q.id === id);

    if (!questao) {
      return res.status(404).json({ error: 'Questão não encontrada' });
    }

    res.json(questao);
  } catch (err) {
    console.error('Erro ao buscar questão:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router;
