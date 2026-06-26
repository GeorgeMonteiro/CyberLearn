import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadows } from '../theme';
import { useProgress } from '../context/ProgressContext';

const ALL_LESSON_DATA = {
  logica_1: {
    title: 'O que é Lógica de Programação',
    icon: 'code-slash-outline',
    steps: [
      {
        type: 'intro',
        icon: 'bulb-outline',
        title: 'O que é Lógica?',
        text: 'Lógica é a ciência que estuda as formas corretas de raciocinar. É a arte de pensar de forma estruturada para chegar a conclusões válidas a partir de premissas conhecidas.\n\nNo dia a dia, usamos lógica o tempo todo sem perceber: quando decidimos o melhor caminho para ir ao trabalho, quando organizamos nossas tarefas ou quando resolvemos um problema qualquer.',
      },
      {
        type: 'diagram',
        title: 'Raciocínio Lógico',
        text: 'O raciocínio lógico segue uma sequência organizada de pensamentos. Veja como funciona na prática:',
        diagram: 'flow',
        items: ['Problema', 'Analisar', 'Raciocinar', 'Solução'],
      },
      {
        type: 'content',
        title: 'Lógica no Cotidiano',
        text: 'Você usa lógica todos os dias! Veja alguns exemplos:\n\n• Se está chovendo, então pego um guarda-chuva.\n• Se estou com fome, então preparo uma refeição.\n• Se o semáforo está vermelho, então paro o carro.\n\nPerceba que essas são estruturas condicionais: "Se (condição), então (ação)". Isso é a base da lógica aplicada!',
        highlight: 'Pensar logicamente é simplesmente conectar ideias de forma organizada.',
      },
      {
        type: 'diagram',
        title: 'Sequência Lógica',
        text: 'Toda tarefa do dia a dia segue uma sequência lógica de passos:',
        diagram: 'sequence',
        items: ['Acordar', 'Escovar dentes', 'Tomar café', 'Sair de casa'],
      },
      {
        type: 'content',
        title: 'O que é Lógica de Programação?',
        text: 'Lógica de Programação é a técnica de organizar o pensamento para criar instruções claras e ordenadas que um computador possa entender e executar.\n\nDiferente dos humanos, os computadores não interpretam ambiguidades. Eles precisam de instruções precisas, passo a passo, na ordem correta.\n\nProgramar nada mais é do que ensinar o computador a resolver problemas através de sequências lógicas de instruções.',
      },
      {
        type: 'diagram',
        title: 'Entrada → Processamento → Saída',
        text: 'Todo programa de computador segue este modelo fundamental:',
        diagram: 'io',
        items: ['Entrada\n(Dados)', 'Processamento\n(Lógica)', 'Saída\n(Resultado)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'O que é Lógica de Programação?',
        options: [
          'Uma linguagem de programação específica',
          'A técnica de organizar pensamentos para criar instruções que o computador entenda',
          'Um tipo de hardware de computador',
          'Um aplicativo usado para programar',
        ],
        correctIndex: 1,
        explanation: 'Lógica de Programação é a técnica de organizar o raciocínio para criar instruções claras e sequenciais que o computador possa executar.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual das alternativas abaixo representa um raciocínio lógico?',
        options: [
          'Se está chovendo, vou à praia',
          'Se estou com sono, então vou dormir',
          'Se é aniversário, amanhã é segunda-feira',
          'Se acordei cedo, o jantar está pronto',
        ],
        correctIndex: 1,
        explanation: '"Se estou com sono, então vou dormir" é uma relação lógica: a condição (sono) leva a uma ação coerente (dormir).',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu o conceito fundamental da lógica de programação!\n\nResumindo:\n• Lógica é a arte de pensar de forma estruturada\n• Usamos lógica no dia a dia sem perceber\n• Lógica de Programação é organizar instruções para o computador\n• Todo programa segue: Entrada → Processamento → Saída\n\nAgora você está pronto para avançar para o próximo módulo: Algoritmos!',
      },
    ],
  },
  logica_2: {
    title: 'Algoritmos',
    icon: 'list-outline',
    steps: [
      {
        type: 'intro',
        icon: 'list-outline',
        title: 'O que são Algoritmos?',
        text: 'Algoritmo é uma sequência de passos finita e bem definida que resolve um problema ou executa uma tarefa.\n\nEm outras palavras, um algoritmo é uma "receita" — um conjunto de instruções organizadas que, seguidas na ordem correta, produzem um resultado esperado.\n\nVocê já segue algoritmos todos os dias sem perceber: uma receita de bolo, as instruções de montagem de um móvel, ou até mesmo a rota que você traça para ir de casa ao trabalho.',
      },
      {
        type: 'diagram',
        title: 'Fluxo de um Algoritmo',
        text: 'Assim como o raciocínio lógico, um algoritmo segue um fluxo estruturado para chegar à solução:',
        diagram: 'flow',
        items: ['Problema', 'Analisar', 'Algoritmo', 'Solução'],
      },
      {
        type: 'content',
        title: 'Características de um Algoritmo',
        text: 'Para ser considerado um algoritmo, uma sequência de passos precisa ter algumas características essenciais:\n\n• Finitude: deve ter um fim, não pode ser infinito\n• Clareza: cada passo deve ser claro e sem ambiguidades\n• Precisão: as instruções devem ser exatas e determinísticas\n• Eficiência: deve resolver o problema com o mínimo de recursos possível\n• Entrada: pode receber dados externos (opcional)\n• Saída: deve produzir um resultado',
        highlight: 'Um algoritmo bem definido produz o mesmo resultado sempre que executado com as mesmas entradas.',
      },
      {
        type: 'diagram',
        title: 'Exemplo do Dia a Dia',
        text: 'Veja como fazer café pode ser representado como um algoritmo:',
        diagram: 'sequence',
        items: ['Ferver água', 'Colocar pó', 'Coador', 'Café pronto'],
      },
      {
        type: 'content',
        title: 'Representação de Algoritmos',
        text: 'Existem várias formas de representar um algoritmo:\n\n• Linguagem Natural: descrever os passos em português (como uma receita)\n• Fluxograma: representação visual com diagramas e setas\n• Pseudocódigo: uma mistura de linguagem natural com elementos de programação — é a forma mais usada para aprender lógica\n• Código: a implementação real em uma linguagem de programação\n\nNo começo dos estudos, usamos muito o pseudocódigo e os fluxogramas para focar no raciocínio, sem nos preocupar com a sintaxe de uma linguagem específica.',
      },
      {
        type: 'diagram',
        title: 'Algoritmo: Entrada → Processamento → Saída',
        text: 'Assim como os programas, os algoritmos também seguem o modelo de entrada, processamento e saída:',
        diagram: 'io',
        items: ['Entrada\n(Dados)', 'Algoritmo\n(Passos)', 'Saída\n(Resultado)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'O que é um algoritmo?',
        options: [
          'Um equipamento utilizado para processar dados',
          'Uma sequência finita e bem definida de passos para resolver um problema',
          'Um tipo de dado armazenado na memória',
          'Uma linguagem de programação específica',
        ],
        correctIndex: 1,
        explanation: 'Algoritmo é uma sequência finita e bem definida de instruções que, quando executadas, resolvem um problema ou realizam uma tarefa.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual das alternativas NÃO é uma característica de um algoritmo?',
        options: [
          'Finitude — deve ter um fim',
          'Clareza — passos sem ambiguidade',
          'Subjetividade — pode variar de interpretação para interpretação',
          'Precisão — instruções exatas e determinísticas',
        ],
        correctIndex: 2,
        explanation: 'Um algoritmo deve ser claro e sem ambiguidades. A subjetividade é justamente o oposto do que se espera de um algoritmo.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu o que são algoritmos e como eles funcionam!\n\nResumindo:\n• Algoritmo é uma sequência de passos para resolver um problema\n• Deve ser finito, claro, preciso e eficiente\n• Pode ser representado de várias formas: fluxograma, pseudocódigo, código\n• Todo algoritmo segue: Entrada → Processamento → Saída\n\nAgora você está pronto para avançar para o próximo módulo: Fluxogramas!',
      },
    ],
  },
  logica_3: {
    title: 'Fluxogramas',
    icon: 'git-branch-outline',
    steps: [
      {
        type: 'intro',
        icon: 'git-branch-outline',
        title: 'O que são Fluxogramas?',
        text: 'Fluxograma é uma representação gráfica de um algoritmo ou processo. Utiliza símbolos padronizados para representar diferentes tipos de ações, conectados por setas que indicam o fluxo de execução.\n\nÉ como um mapa visual do seu programa: cada símbolo representa uma instrução, e as setas mostram a ordem em que as instruções devem ser executadas. Essa representação facilita o entendimento e a comunicação de algoritmos complexos.',
      },
      {
        type: 'diagram',
        title: 'Símbolos Principais',
        text: 'Os fluxogramas utilizam símbolos padronizados internacionalmente. Veja os principais:',
        diagram: 'sequence',
        items: ['Início/Fim\n(Elipse)', 'Processo\n(Retângulo)', 'Decisão\n(Losango)', 'Entrada/Saída\n(Paralelogramo)'],
      },
      {
        type: 'content',
        title: 'Entendendo cada Símbolo',
        text: '• Elipse (Início/Fim): marca o ponto de partida e término do algoritmo\n• Retângulo (Processo): representa um cálculo ou ação a ser executada\n• Losango (Decisão): indica uma escolha, geralmente "sim" ou "não"\n• Paralelogramo (Entrada/Saída): representa leitura de dados ou exibição de resultados\n• Setas: conectam os símbolos e indicam a direção do fluxo\n\nCada símbolo tem um significado específico, o que torna o fluxograma uma linguagem visual universal para programadores.',
        highlight: 'O losango é o único símbolo que sempre terá duas ou mais saídas possíveis (sim/não).',
      },
      {
        type: 'diagram',
        title: 'Fluxo de um Fluxograma',
        text: 'Veja como representar a decisão "Se a idade é maior ou igual a 18" em um fluxograma:',
        diagram: 'flow',
        items: ['Início', 'Ler idade', 'Idade >= 18?', 'Exibir resultado', 'Fim'],
      },
      {
        type: 'content',
        title: 'Exemplo Prático: Calcular Média',
        text: 'Vamos criar um fluxograma para calcular a média de duas notas:\n\n1. Início\n2. Ler nota1, nota2\n3. Calcular media = (nota1 + nota2) / 2\n4. Exibir media\n5. Fim\n\nEste é um algoritmo simples que pode ser facilmente representado visualmente com um fluxograma. Cada passo vira um símbolo conectado por setas, formando um diagrama claro e intuitivo.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual símbolo é usado para representar uma decisão em um fluxograma?',
        options: [
          'Elipse',
          'Retângulo',
          'Losango',
          'Paralelogramo',
        ],
        correctIndex: 2,
        explanation: 'O losango é o símbolo usado para representar decisões condicionais em fluxogramas, sempre com duas ou mais saídas possíveis.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual a principal vantagem de usar fluxogramas?',
        options: [
          'Eles executam o código automaticamente',
          'Eles representam algoritmos visualmente, facilitando o entendimento',
          'Eles substituem a necessidade de programar',
          'Eles são mais rápidos que escrever código',
        ],
        correctIndex: 1,
        explanation: 'Fluxogramas representam algoritmos de forma visual, tornando mais fácil entender, comunicar e identificar problemas na lógica.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu o que são fluxogramas e como utilizá-los!\n\nResumindo:\n• Fluxograma é a representação gráfica de um algoritmo\n• Cada símbolo tem um significado específico\n• As setas indicam o fluxo de execução\n• É uma ferramenta universal para programadores\n\nAgora você está pronto para avançar para a próxima aula: Variáveis!',
      },
    ],
  },
  logica_4: {
    title: 'Variáveis',
    icon: 'cube-outline',
    steps: [
      {
        type: 'intro',
        icon: 'cube-outline',
        title: 'O que são Variáveis?',
        text: 'Variável é um espaço na memória do computador onde armazenamos dados que podem ser alterados durante a execução do programa.\n\nImagine uma caixa com um nome (identificador) onde você pode guardar um valor. Você pode colocar um valor diferente dentro da mesma caixa mais tarde — por isso o nome "variável" (porque o valor pode variar).',
      },
      {
        type: 'content',
        title: 'Memória do Computador',
        text: 'A memória RAM do computador é como um grande armário com milhões de gavetas. Cada gaveta tem um endereço único (posição na memória).\n\nQuando criamos uma variável, o computador:\n1. Reserva uma gaveta (espaço na memória)\n2. Dá um nome para essa gaveta (o identificador da variável)\n3. Permite guardar, consultar e alterar o valor dentro dela\n\nEm vez de decorar o endereço numérico da memória, usamos nomes amigáveis como "idade", "nome" ou "salario".',
        highlight: 'Pense nas variáveis como "caixas nomeadas" onde você guarda valores que podem mudar ao longo do programa.',
      },
      {
        type: 'diagram',
        title: 'Variável na Prática',
        text: 'Veja como funciona o fluxo de dados com variáveis:',
        diagram: 'io',
        items: ['Entrada\n(Teclado)', 'Variável\n(Memória)', 'Saída\n(Tela)'],
      },
      {
        type: 'content',
        title: 'Regras para Nomes de Variáveis',
        text: 'Ao criar variáveis, é preciso seguir algumas regras:\n\n• Deve começar com letra ou underscore (_)\n• Pode conter letras, números e underscore\n• Não pode conter espaços ou caracteres especiais\n• Não pode ser uma palavra reservada (como "if", "for", "while")\n• É case-sensitive: "nome" e "Nome" são diferentes\n\nDica: use nomes significativos! Em vez de "x", use "idadeDoUsuario". Isso torna o código mais legível.',
      },
      {
        type: 'diagram',
        title: 'Exemplo Visual',
        text: 'Veja como declarar variáveis em diferentes representações:',
        diagram: 'sequence',
        items: ['criar idade', 'idade = 25', 'criar nome', 'nome = "Ana"'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'O que é uma variável na programação?',
        options: [
          'Um valor que nunca muda no programa',
          'Um espaço na memória para armazenar dados que podem variar',
          'Um tipo específico de dado',
          'Uma função matemática',
        ],
        correctIndex: 1,
        explanation: 'Variável é um espaço na memória do computador onde armazenamos dados que podem ser alterados durante a execução do programa.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual destes é um nome válido para variável?',
        options: [
          '2nome',
          'nome completo',
          'nome_completo',
          'nome-completo',
        ],
        correctIndex: 2,
        explanation: '"nome_completo" é válido porque começa com letra e usa underscore. Os outros têm números no início, espaços ou hífen, que não são permitidos.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu o conceito de variáveis!\n\nResumindo:\n• Variável é um espaço nomeado na memória\n• O valor pode variar durante a execução\n• Nomes devem seguir regras específicas\n• Use nomes significativos para melhor legibilidade\n\nAgora você está pronto para a próxima aula: Tipos de Dados!',
      },
    ],
  },
  logica_5: {
    title: 'Tipos de Dados',
    icon: 'layers-outline',
    steps: [
      {
        type: 'intro',
        icon: 'layers-outline',
        title: 'O que são Tipos de Dados?',
        text: 'Tipo de dado é a classificação que damos a um valor para definir que tipo de informação ele representa e quais operações podem ser realizadas com ele.\n\nNo dia a dia, também classificamos informações: números, textos, datas... Na programação não é diferente. Cada dado precisa ter um tipo definido para que o computador saiba como armazená-lo e manipulá-lo corretamente.',
      },
      {
        type: 'diagram',
        title: 'Tipos Primitivos',
        text: 'Os tipos de dados primitivos são os blocos fundamentais da programação:',
        diagram: 'flow',
        items: ['Numéricos', 'Caracteres', 'Lógicos'],
      },
      {
        type: 'content',
        title: 'Números Inteiros e Reais',
        text: 'Os tipos numéricos se dividem em:\n\n• Inteiros (int): números sem parte decimal\n  Exemplos: 5, -10, 0, 1000\n\n• Reais (float/double): números com ponto flutuante (decimais)\n  Exemplos: 3.14, -2.5, 0.001\n\nA diferença é importante: operações com inteiros são mais rápidas e ocupam menos memória, mas números reais permitem maior precisão em cálculos científicos.',
      },
      {
        type: 'content',
        title: 'Caracteres e Texto',
        text: '• Caractere (char): um único símbolo\n  Exemplos: \'A\', \'5\', \'?\', \' \'\n\n• Cadeia de caracteres (string): sequência de caracteres\n  Exemplos: "Olá, mundo!", "João", "12345"\n\nStrings são usadas para representar textos, nomes, mensagens, etc. São delimitadas por aspas duplas ou simples.',
      },
      {
        type: 'content',
        title: 'Dados Lógicos',
        text: '• Lógico (booleano): representa valores de verdade\n  Valores possíveis: verdadeiro (true) ou falso (false)\n\nO tipo booleano é essencial para estruturas condicionais e de repetição. Toda condição em um programa resulta em um valor booleano — ou é verdadeira ou é falsa. Não existe meio-termo.',
        highlight: 'Booleanos são a base da lógica computacional. Toda decisão no código depende de um valor true ou false.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual tipo de dado é mais adequado para armazenar o valor "verdadeiro" ou "falso"?',
        options: [
          'Inteiro',
          'String',
          'Booleano',
          'Real',
        ],
        correctIndex: 2,
        explanation: 'O tipo booleano (lógico) é usado para representar valores de verdade: verdadeiro (true) ou falso (false).',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual tipo de dado é mais adequado para armazenar o valor 3.1415?',
        options: [
          'Inteiro',
          'Real',
          'Caractere',
          'Lógico',
        ],
        correctIndex: 1,
        explanation: 'O tipo real (float/double) é usado para representar números com parte decimal, como 3.1415.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu os principais tipos de dados!\n\nResumindo:\n• Inteiros: números sem casas decimais\n• Reais: números com casas decimais\n• String: sequência de caracteres (texto)\n• Booleano: valores lógicos true/false\n• Cada tipo determina como o dado é armazenado e manipulado\n\nAgora você está pronto para a próxima aula: Operadores!',
      },
    ],
  },
  logica_6: {
    title: 'Operadores',
    icon: 'calculator-outline',
    steps: [
      {
        type: 'intro',
        icon: 'calculator-outline',
        title: 'O que são Operadores?',
        text: 'Operadores são símbolos especiais que realizam operações sobre dados (operandos) e produzem um resultado.\n\nNa programação, usamos operadores para fazer cálculos matemáticos, comparar valores e combinar condições lógicas. Eles são fundamentais para construir qualquer algoritmo.',
      },
      {
        type: 'content',
        title: 'Operadores Aritméticos',
        text: 'Usados para realizar operações matemáticas:\n\n• + (Adição): soma dois valores\n• - (Subtração): subtrai dois valores\n• * (Multiplicação): multiplica dois valores\n• / (Divisão): divide dois valores\n• % (Módulo): resto da divisão inteira\n\nExemplos:\n7 + 3 = 10\n7 - 3 = 4\n7 * 3 = 21\n7 / 3 = 2.333...\n7 % 3 = 1 (resto da divisão de 7 por 3)',
      },
      {
        type: 'diagram',
        title: 'Hierarquia dos Operadores',
        text: 'Assim como na matemática, os operadores seguem uma ordem de precedência:',
        diagram: 'sequence',
        items: ['1º ( )\nParênteses', '2º * / %\nMult/Div/Módulo', '3º + -\nAdição/Subtração'],
      },
      {
        type: 'content',
        title: 'Operadores Relacionais',
        text: 'Usados para comparar valores. O resultado é sempre booleano (true ou false):\n\n• >  (maior que)\n• <  (menor que)\n• >= (maior ou igual)\n• <= (menor ou igual)\n• == (igual a)\n• != (diferente de)\n\nExemplos:\n• 5 > 3 → true (verdadeiro)\n• 10 == 5 → false (falso)\n• 7 != 2 → true (verdadeiro)',
        highlight: 'Atenção: na programação, = é atribuição e == é comparação de igualdade. São coisas diferentes!',
      },
      {
        type: 'content',
        title: 'Operadores Lógicos',
        text: 'Usados para combinar expressões booleanas:\n\n• E (AND / &&): retorna true somente se ambas as condições forem true\n• OU (OR / ||): retorna true se pelo menos uma condição for true\n• NÃO (NOT / !): inverte o valor booleano (true vira false e vice-versa)\n\nExemplos:\n• (5 > 3) && (10 > 5) → true (ambas são verdadeiras)\n• (5 > 3) || (10 < 5) → true (pelo menos uma é verdadeira)\n• !(5 > 3) → false (inverte o true para false)',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual o resultado da expressão: (10 + 5) * 2?',
        options: [
          '20',
          '25',
          '30',
          '15',
        ],
        correctIndex: 2,
        explanation: 'Primeiro resolvemos os parênteses: 10 + 5 = 15. Depois multiplicamos: 15 * 2 = 30.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'O que o operador lógico AND (&&) retorna?',
        options: [
          'True se pelo menos uma condição for verdadeira',
          'True somente se ambas as condições forem verdadeiras',
          'Sempre false',
          'Sempre true',
        ],
        correctIndex: 1,
        explanation: 'O operador AND (&&) retorna true somente quando todas as condições envolvidas são verdadeiras.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu os principais operadores da programação!\n\nResumindo:\n• Aritméticos: +, -, *, /, % (cálculos matemáticos)\n• Relacionais: >, <, >=, <=, ==, != (comparações)\n• Lógicos: &&, ||, ! (combinação de condições)\n• Precedência: parênteses > *, /, % > +, -\n\nAgora você está pronto para a próxima aula: Estruturas Condicionais!',
      },
    ],
  },
  logica_7: {
    title: 'Estruturas Condicionais',
    icon: 'git-merge-outline',
    steps: [
      {
        type: 'intro',
        icon: 'git-merge-outline',
        title: 'O que são Estruturas Condicionais?',
        text: 'Estruturas condicionais permitem que o programa tome decisões com base em condições — ou seja, executar diferentes blocos de código dependendo se uma condição é verdadeira ou falsa.\n\nNo dia a dia, fazemos escolhas o tempo todo: "Se estiver chovendo, levo guarda-chuva; senão, saio sem ele". Na programação é a mesma ideia: o computador avalia uma condição e decide qual caminho seguir.',
      },
      {
        type: 'diagram',
        title: 'Fluxo de Decisão',
        text: 'Veja como uma decisão simples é representada em um fluxograma:',
        diagram: 'flow',
        items: ['Condição', 'Sim\n(verdadeiro)', 'Não\n(falso)', 'Ação alternativa'],
      },
      {
        type: 'content',
        title: 'Estrutura if (se)',
        text: 'A estrutura if é a mais básica das condicionais:\n\nif (condição) {\n    // executa se a condição for verdadeira\n}\n\nExemplo:\nse (idade >= 18) {\n    podeVotar = true\n}\n\nSe a condição dentro dos parênteses for verdadeira, o bloco de código é executado. Se for falsa, o bloco é ignorado.',
      },
      {
        type: 'content',
        title: 'Estrutura if-else (se-senão)',
        text: 'O if-else permite definir o que fazer quando a condição é falsa:\n\nif (condição) {\n    // executa se for verdadeira\n} else {\n    // executa se for falsa\n}\n\nExemplo:\nse (saldo >= valorCompra) {\n    compraAprovada = true\n} senao {\n    compraAprovada = false\n}\n\nDessa forma, temos dois caminhos possíveis. O programa sempre executará um deles.',
      },
      {
        type: 'content',
        title: 'if-else Aninhado e switch-case',
        text: 'Podemos encadear várias condições usando else if:\n\nif (nota >= 9) {\n    conceito = "A"\n} else if (nota >= 7) {\n    conceito = "B"\n} else if (nota >= 5) {\n    conceito = "C"\n} else {\n    conceito = "D"\n}\n\nJá o switch-case é usado quando temos múltiplos valores fixos para comparar:\n\nswitch (dia) {\n    case 1: "Domingo"\n    case 2: "Segunda"\n    case 3: "Terça"\n    ...\n}',
        highlight: 'Use if-else para condições complexas e switch-case para múltiplos valores fixos e conhecidos.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'O que faz a estrutura condicional if-else?',
        options: [
          'Repete um bloco de código várias vezes',
          'Executa código baseado em uma condição, com alternativa caso seja falsa',
          'Declara uma variável',
          'Define uma função',
        ],
        correctIndex: 1,
        explanation: 'if-else executa um bloco de código se a condição for verdadeira, e outro bloco (opcional) se for falsa.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Quando é mais adequado usar switch-case em vez de if-else?',
        options: [
          'Quando precisamos comparar uma variável com muitos valores fixos diferentes',
          'Quando temos apenas uma condição simples',
          'Switch-case substitui totalmente o if-else',
          'Quando precisamos de operadores relacionais como > e <',
        ],
        correctIndex: 0,
        explanation: 'switch-case é ideal quando comparamos uma única variável com diversos valores fixos e conhecidos.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu as estruturas condicionais!\n\nResumindo:\n• if: executa código se condição for verdadeira\n• if-else: dois caminhos possíveis (verdadeiro/falso)\n• else if: encadeia múltiplas condições\n• switch-case: compara múltiplos valores fixos\n• Decisões são a base da lógica computacional\n\nAgora você está pronto para a próxima aula: Estruturas de Repetição!',
      },
    ],
  },
  logica_8: {
    title: 'Estruturas de Repetição',
    icon: 'sync-outline',
    steps: [
      {
        type: 'intro',
        icon: 'sync-outline',
        title: 'O que são Estruturas de Repetição?',
        text: 'Estruturas de repetição (loops) permitem executar um bloco de código várias vezes enquanto uma condição for verdadeira.\n\nNo dia a dia, também fazemos tarefas repetitivas: "enquanto houver louça para lavar, lave um prato". Na programação, usamos loops para automatizar essas repetições sem precisar escrever o mesmo código manualmente várias vezes.',
      },
      {
        type: 'content',
        title: 'Loop while (enquanto)',
        text: 'O while repete um bloco enquanto a condição for verdadeira:\n\nwhile (condição) {\n    // executa enquanto condição for true\n}\n\nExemplo:\nenquanto (contador <= 5) {\n    exibir contador\n    contador = contador + 1\n}\n\nResultado na tela: 1, 2, 3, 4, 5\n\nAtenção: se a condição nunca se tornar falsa, o loop nunca termina — isso é um "loop infinito"!',
        highlight: 'Todo loop precisa de um critério de parada. Sem ele, o loop executa infinitamente e trava o programa.',
      },
      {
        type: 'diagram',
        title: 'Fluxo de um Loop',
        text: 'Veja como o fluxo de um while funciona visualmente:',
        diagram: 'flow',
        items: ['Início', 'Condição', 'Verdadeiro\n(Executa bloco)', 'Falso\n(Sai do loop)'],
      },
      {
        type: 'content',
        title: 'Loop for (para)',
        text: 'O for é ideal quando sabemos quantas vezes queremos repetir:\n\nfor (inicialização; condição; incremento) {\n    // executa enquanto condição for true\n}\n\nExemplo:\npara (contador = 1; contador <= 5; contador++) {\n    exibir contador\n}\n\nResultado: 1, 2, 3, 4, 5\n\nO for concentra em uma linha: onde começar, até quando ir e como avançar. É o loop mais usado na programação.',
      },
      {
        type: 'diagram',
        title: 'Passos de um Loop for',
        text: 'Visualize como cada parte do for se conecta:',
        diagram: 'sequence',
        items: ['Inicializar\ncontador = 1', 'Testar\ncont <= 5?', 'Executar\nbloco', 'Incrementar\ncont++'],
      },
      {
        type: 'content',
        title: 'Loop do-while (faça-enquanto)',
        text: 'O do-while é semelhante ao while, mas garante que o bloco execute pelo menos uma vez:\n\ndo {\n    // executa pelo menos uma vez\n} while (condição);\n\nExemplo:\nfaca {\n    exibir "Menu"\n    ler opcao\n} enquanto (opcao != 0)\n\nA diferença principal: no while, a condição é testada antes de executar o bloco. No do-while, o bloco executa primeiro e depois a condição é testada.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual estrutura de repetição garante que o bloco execute pelo menos uma vez?',
        options: [
          'while',
          'for',
          'do-while',
          'if',
        ],
        correctIndex: 2,
        explanation: 'do-while executa o bloco primeiro e depois testa a condição, garantindo pelo menos uma execução.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual loop é mais adequado quando sabemos exatamente quantas vezes repetir?',
        options: [
          'while',
          'for',
          'do-while',
          'Todos são equivalentes',
        ],
        correctIndex: 1,
        explanation: 'O loop for é ideal quando sabemos o número exato de repetições, pois concentra inicialização, condição e incremento em uma linha.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu as estruturas de repetição!\n\nResumindo:\n• while: repete enquanto condição for verdadeira\n• for: repete um número conhecido de vezes\n• do-while: executa pelo menos uma vez\n• Todo loop precisa de um critério de parada\n• Loops automatizam tarefas repetitivas\n\nParabéns por completar todo o módulo de Lógica de Programação! Você está pronto para praticar com exercícios!',
      },
    ],
  },
  redes_1: {
    title: 'Introdução às Redes',
    icon: 'wifi-outline',
    steps: [
      {
        type: 'intro',
        icon: 'wifi-outline',
        title: 'O que são Redes de Computadores?',
        text: 'Uma rede de computadores é formada por dois ou mais dispositivos interconectados que podem compartilhar recursos, dados e informações entre si.\n\nAs redes permitem que computadores, smartphones, impressoras e outros dispositivos se comuniquem, trocando dados e compartilhando recursos como arquivos, impressoras e conexão com a internet.\n\nPraticamente tudo que fazemos online depende de redes de computadores — desde enviar um e-mail até assistir a um vídeo em streaming.',
      },
      {
        type: 'diagram',
        title: 'Tipos de Redes',
        text: 'As redes são classificadas por sua abrangência geográfica:',
        diagram: 'flow',
        items: ['PAN\n(Pessoal)', 'LAN\n(Local)', 'MAN\n(Metropolitana)', 'WAN\n(Ampla)'],
      },
      {
        type: 'content',
        title: 'LAN e WAN',
        text: '• LAN (Local Area Network): rede local que conecta dispositivos em uma área limitada, como uma casa, escritório ou prédio. É a rede mais comum em residências e empresas. Alta velocidade e baixo custo.\n\n• WAN (Wide Area Network): rede de longa distância que conecta redes separadas geograficamente, podendo abranger cidades, países ou continentes. A internet é a maior WAN existente.\n\n• MAN (Metropolitan Area Network): rede metropolitana que cobre uma área do tamanho de uma cidade.\n\n• PAN (Personal Area Network): rede pessoal com alcance de poucos metros, como Bluetooth conectando fones a um celular.',
        highlight: 'A internet é a maior WAN do mundo, conectando bilhões de dispositivos globalmente.',
      },
      {
        type: 'content',
        title: 'Topologias de Rede',
        text: 'A topologia define como os dispositivos estão organizados e conectados fisicamente ou logicamente:\n\n• Estrela: todos os dispositivos conectados a um ponto central (switch/roteador). É a topologia mais comum hoje. Se o ponto central falha, toda a rede para.\n\n• Barramento: todos os dispositivos compartilham um único cabo. Simples, mas uma falha no cabo afeta toda a rede.\n\n• Anel: cada dispositivo conecta-se a dois vizinhos, formando um círculo. Os dados passam de dispositivo em dispositivo.\n\n• Malha: cada dispositivo conecta-se a vários outros, oferecendo redundância. É a topologia mais resiliente, porém mais cara.',
      },
      {
        type: 'diagram',
        title: 'Comunicação em Rede',
        text: 'A comunicação em rede segue o modelo de origem e destino:',
        diagram: 'io',
        items: ['Dispositivo\n(Origem)', 'Rede\n(Meio)', 'Dispositivo\n(Destino)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual tipo de rede é mais adequado para conectar computadores em um mesmo escritório?',
        options: [
          'PAN — Personal Area Network',
          'LAN — Local Area Network',
          'MAN — Metropolitan Area Network',
          'WAN — Wide Area Network',
        ],
        correctIndex: 1,
        explanation: 'Uma LAN (Local Area Network) é ideal para conectar dispositivos em uma área limitada como um escritório, oferecendo alta velocidade e compartilhamento de recursos.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Na topologia em estrela, o que acontece se o dispositivo central falhar?',
        options: [
          'A rede continua funcionando normalmente',
          'Apenas o dispositivo central é afetado',
          'Toda a rede fica inoperante',
          'Os dispositivos se reconectam em uma nova topologia automaticamente',
        ],
        correctIndex: 2,
        explanation: 'Na topologia em estrela, todos os dispositivos dependem do nó central. Se ele falhar, toda a rede fica inoperante, pois não há caminho alternativo para a comunicação.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu os fundamentos das redes de computadores!\n\nResumindo:\n• Rede é um conjunto de dispositivos interconectados\n• Tipos: PAN, LAN, MAN e WAN\n• Topologias: estrela, barramento, anel e malha\n• A comunicação segue: origem → meio → destino\n\nAgora você está pronto para a próxima aula: Modelo OSI!',
      },
    ],
  },
  redes_2: {
    title: 'Modelo OSI',
    icon: 'layers-outline',
    steps: [
      {
        type: 'intro',
        icon: 'layers-outline',
        title: 'O que é o Modelo OSI?',
        text: 'O modelo OSI (Open Systems Interconnection) é um modelo de referência que padroniza a comunicação entre sistemas de computadores. Ele foi criado pela ISO em 1984 e divide a comunicação em 7 camadas.\n\nCada camada do modelo OSI tem uma função específica e se comunica apenas com as camadas adjacentes (superior e inferior). Esse modelo conceitual ajuda a entender como os dados viajam de um aplicativo em um computador até outro aplicativo em outro computador.',
      },
      {
        type: 'diagram',
        title: 'As 7 Camadas do Modelo OSI',
        text: 'Do nível mais alto (próximo ao usuário) ao mais baixo (meio físico):',
        diagram: 'sequence',
        items: ['7 - Aplicação', '6 - Apresentação', '5 - Sessão', '4 - Transporte', '3 - Rede', '2 - Enlace', '1 - Física'],
      },
      {
        type: 'content',
        title: 'Camadas Inferiores (1-3)',
        text: 'Camada Física (Layer 1): responsável pela transmissão dos bits pelo meio físico (cabos, fibra óptica, ondas de rádio). Define características como voltagem, frequência e pinagens.\n\nCamada de Enlace (Layer 2): organiza os bits em quadros (frames) e gerencia a comunicação entre dispositivos diretamente conectados. Utiliza endereços MAC. Exemplos: Ethernet, Wi-Fi.\n\nCamada de Rede (Layer 3): responsável pelo roteamento dos pacotes entre redes diferentes. Determina o melhor caminho para os dados chegarem ao destino. Utiliza endereços IP. Protocolo principal: IP.',
        highlight: 'O roteador é o dispositivo que opera na camada de Rede (Layer 3), decidindo por onde enviar cada pacote.',
      },
      {
        type: 'content',
        title: 'Camada de Transporte (Layer 4)',
        text: 'A camada de Transporte é responsável por garantir a entrega confiável dos dados entre a origem e o destino. Ela segmenta os dados da camada superior em pedaços menores e garante que cheguem corretamente.\n\n• TCP (Transmission Control Protocol): orientado à conexão, confiável, garante entrega e ordenação\n• UDP (User Datagram Protocol): não orientado à conexão, mais rápido, sem garantia de entrega\n\nOs dados nesta camada são chamados de segmentos (TCP) ou datagramas (UDP).',
      },
      {
        type: 'content',
        title: 'Camadas Superiores (5-7)',
        text: 'Camada de Sessão (Layer 5): gerencia o estabelecimento, manutenção e encerramento de sessões de comunicação entre aplicações. Controla quem fala e por quanto tempo.\n\nCamada de Apresentação (Layer 6): atua como tradutora, convertendo formatos de dados (criptografia, compressão, conversão de caracteres). Garante que dados enviados por um sistema sejam compreendidos por outro.\n\nCamada de Aplicação (Layer 7): é a camada mais próxima do usuário. Fornece serviços de rede para as aplicações. Exemplos: HTTP (web), SMTP (e-mail), FTP (arquivos), DNS (nomes de domínio).',
      },
      {
        type: 'diagram',
        title: 'Encapsulamento dos Dados',
        text: 'Ao enviar dados, cada camada adiciona seu cabeçalho (header). Isso é chamado de encapsulamento:',
        diagram: 'io',
        items: ['Dados da\nAplicação', 'Camadas\n5-7', 'Segmento\n(Camada 4)', 'Pacote\n(Camada 3)', 'Quadro\n(Camada 2)', 'Bits\n(Camada 1)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Quantas camadas possui o modelo OSI?',
        options: [
          '4 camadas',
          '5 camadas',
          '7 camadas',
          '10 camadas',
        ],
        correctIndex: 2,
        explanation: 'O modelo OSI possui 7 camadas: Física (1), Enlace (2), Rede (3), Transporte (4), Sessão (5), Apresentação (6) e Aplicação (7).',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual camada do modelo OSI é responsável pelo roteamento dos pacotes?',
        options: [
          'Camada Física',
          'Camada de Enlace',
          'Camada de Rede',
          'Camada de Transporte',
        ],
        correctIndex: 2,
        explanation: 'A camada de Rede (Layer 3) é responsável pelo roteamento e encaminhamento dos pacotes entre redes diferentes, utilizando endereços IP.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu o modelo OSI!\n\nResumindo:\n• Modelo de referência com 7 camadas\n• Cada camada tem uma função específica\n• Os dados são encapsulados com cabeçalhos a cada camada\n• O modelo ajuda a padronizar e entender a comunicação em rede\n\nAgora você está pronto para a próxima aula: Modelo TCP/IP!',
      },
    ],
  },
  redes_3: {
    title: 'Modelo TCP/IP',
    icon: 'aperture-outline',
    steps: [
      {
        type: 'intro',
        icon: 'aperture-outline',
        title: 'O que é o Modelo TCP/IP?',
        text: 'O modelo TCP/IP é o conjunto de protocolos que forma a base da internet. Diferente do modelo OSI (que é um modelo teórico), o TCP/IP é o modelo prático que realmente usamos para a comunicação na internet.\n\nEle foi desenvolvido pelo Departamento de Defesa dos EUA (ARPANET) e possui 4 camadas, combinando algumas das 7 camadas do modelo OSI em camadas mais amplas.',
      },
      {
        type: 'diagram',
        title: 'OSI vs TCP/IP',
        text: 'Comparação entre os dois modelos:',
        diagram: 'flow',
        items: ['OSI: 7 camadas\n(Teórico)', 'TCP/IP: 4 camadas\n(Prático)', 'Internet:\nImplementação real'],
      },
      {
        type: 'content',
        title: 'Camada de Aplicação',
        text: 'A camada de Aplicação do TCP/IP corresponde às camadas de Sessão, Apresentação e Aplicação do modelo OSI. Ela fornece serviços de rede diretamente para as aplicações do usuário.\n\nPrincipais protocolos:\n• HTTP/HTTPS: navegação web\n• SMTP/POP3/IMAP: e-mail\n• FTP: transferência de arquivos\n• DNS: resolução de nomes\n• DHCP: configuração automática de IP\n\nCada protocolo usa uma porta específica para se comunicar.',
      },
      {
        type: 'content',
        title: 'Camada de Transporte',
        text: 'A camada de Transporte é responsável pela comunicação fim-a-fim entre aplicações. Ela oferece dois protocolos principais:\n\nTCP (Transmission Control Protocol):\n• Orientado à conexão (handshake de 3 vias)\n• Confiável: garante entrega e ordenação\n• Controle de fluxo e congestionamento\n• Ideal para web, e-mail, FTP\n\nUDP (User Datagram Protocol):\n• Não orientado à conexão\n• Não garante entrega ou ordenação\n• Mais rápido e com menor latência\n• Ideal para streaming, jogos, VoIP',
        highlight: 'TCP é como uma chamada telefônica (conexão estabelecida, confiável). UDP é como enviar uma carta pelo correio (mais rápido, mas sem confirmação de entrega).',
      },
      {
        type: 'content',
        title: 'Camada de Internet e Interface de Rede',
        text: 'Camada de Internet (equivalente à camada de Rede do OSI):\n• Responsável pelo endereçamento e roteamento\n• Protocolo principal: IP (Internet Protocol)\n• ICMP: mensagens de erro e diagnóstico (ping)\n• ARP: resolução de endereços IP para MAC\n\nCamada de Interface de Rede (equivale às camadas Física e Enlace do OSI):\n• Gerencia a transmissão física dos dados\n• Inclui Ethernet, Wi-Fi, fibra óptica\n• Responsável pelo acesso ao meio físico',
      },
      {
        type: 'diagram',
        title: 'Dados através das Camadas TCP/IP',
        text: 'Veja como os dados são processados em cada camada:',
        diagram: 'io',
        items: ['Aplicação\n(Dados)', 'Transporte\n(Segmento)', 'Internet\n(Pacote)', 'Interface\n(Quadro)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Quantas camadas possui o modelo TCP/IP?',
        options: [
          '3 camadas',
          '4 camadas',
          '5 camadas',
          '7 camadas',
        ],
        correctIndex: 1,
        explanation: 'O modelo TCP/IP possui 4 camadas: Aplicação, Transporte, Internet e Interface de Rede.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual a diferença entre TCP e UDP?',
        options: [
          'TCP é mais rápido que UDP',
          'TCP é orientado à conexão e confiável; UDP é não orientado e mais rápido',
          'TCP é usado apenas em redes locais',
          'TCP e UDP são idênticos, apenas nomes diferentes',
        ],
        correctIndex: 1,
        explanation: 'TCP é orientado à conexão (handshake), confiável e garante a entrega ordenada. UDP é não orientado à conexão, mais rápido mas sem garantias — ideal para streaming e jogos.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu o modelo TCP/IP!\n\nResumindo:\n• Modelo prático com 4 camadas\n• Aplicação: HTTP, SMTP, FTP, DNS\n• Transporte: TCP (confiável) e UDP (rápido)\n• Internet: IP, ICMP, ARP\n• Interface de Rede: Ethernet, Wi-Fi\n\nAgora você está pronto para a próxima aula: Endereçamento IP!',
      },
    ],
  },
  redes_4: {
    title: 'Endereçamento IP',
    icon: 'code-slash-outline',
    steps: [
      {
        type: 'intro',
        icon: 'code-slash-outline',
        title: 'O que é Endereçamento IP?',
        text: 'O endereço IP (Internet Protocol) é um identificador único atribuído a cada dispositivo em uma rede. Assim como sua casa tem um endereço para receber correspondências, cada dispositivo na internet precisa de um IP para receber dados.\n\nExistem duas versões do protocolo IP: IPv4 (32 bits) e IPv6 (128 bits). O IPv4 é o mais usado, mas está sendo gradualmente substituído pelo IPv6 devido ao esgotamento de endereços.',
      },
      {
        type: 'content',
        title: 'IPv4',
        text: 'IPv4 (Internet Protocol version 4):\n• Endereço de 32 bits (4 octetos)\n• Representado como quatro números decimais separados por pontos\n• Exemplo: 192.168.0.1\n• Capacidade máxima: ~4,3 bilhões de endereços\n\nCada octeto pode variar de 0 a 255 (8 bits = 256 valores possíveis).\n\nExemplos:\n• 10.0.0.1\n• 172.16.254.1\n• 8.8.8.8 (DNS do Google)',
      },
      {
        type: 'diagram',
        title: 'Estrutura de um Endereço IPv4',
        text: 'Um endereço IPv4 é dividido em duas partes: rede e host:',
        diagram: 'sequence',
        items: ['192.168.1.10\n(Endereço)', '192.168.1\n(Rede)', '.10\n(Host)', 'Máscara:\n255.255.255.0'],
      },
      {
        type: 'content',
        title: 'Máscara de Sub-rede',
        text: 'A máscara de sub-rede determina qual parte do endereço IP identifica a rede e qual parte identifica o host (dispositivo específico).\n\nExemplo com máscara 255.255.255.0:\n• IP: 192.168.1.10\n• Máscara: 255.255.255.0 (ou /24)\n• Rede: 192.168.1.0\n• Host: 0.0.0.10\n• Endereço de broadcast: 192.168.1.255\n\nQuanto mais bits para a rede (maior o prefixo /), menos hosts podem existir naquela rede.',
        highlight: 'A notação /24 significa que os primeiros 24 bits são da rede, restando 8 bits para hosts (254 endereços válidos).',
      },
      {
        type: 'content',
        title: 'IP Público vs Privado',
        text: 'IP Público: é o endereço único na internet. Cada dispositivo conectado diretamente à internet precisa de um IP público único globalmente. São atribuídos pelos provedores de internet.\n\nIP Privado: usado em redes internas (LAN). Não é roteado na internet. Faixas reservadas:\n• 10.0.0.0 a 10.255.255.255 (Classe A)\n• 172.16.0.0 a 172.31.255.255 (Classe B)\n• 192.168.0.0 a 192.168.255.255 (Classe C)\n\nNAT (Network Address Translation): técnica que permite que vários dispositivos com IPs privados compartilhem um único IP público para acessar a internet.',
      },
      {
        type: 'diagram',
        title: 'NAT na Prática',
        text: 'O NAT no roteador doméstico traduz IPs privados em público:',
        diagram: 'io',
        items: ['192.168.1.10\n(Privado)', 'Roteador\n(NAT)', '200.150.100.50\n(Público)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Quantos bits tem um endereço IPv4?',
        options: [
          '16 bits',
          '32 bits',
          '64 bits',
          '128 bits',
        ],
        correctIndex: 1,
        explanation: 'Um endereço IPv4 possui 32 bits (4 octetos de 8 bits cada), representado como quatro números decimais separados por pontos.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual dos seguintes é um endereço IP privado?',
        options: [
          '8.8.8.8',
          '200.150.100.1',
          '192.168.1.10',
          '0.0.0.1',
        ],
        correctIndex: 2,
        explanation: '192.168.1.10 está na faixa de IPs privados (192.168.0.0/16). 8.8.8.8 é um DNS público do Google.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu sobre endereçamento IP!\n\nResumindo:\n• IPv4: 32 bits, ~4 bilhões de endereços\n• IPv6: 128 bits, praticamente ilimitado\n• Máscara de sub-rede separa rede do host\n• IPs privados: 10.x, 172.16-31.x, 192.168.x\n• NAT permite compartilhar IP público\n\nAgora você está pronto para a próxima aula: DNS!',
      },
    ],
  },
  redes_5: {
    title: 'DNS',
    icon: 'search-outline',
    steps: [
      {
        type: 'intro',
        icon: 'search-outline',
        title: 'O que é DNS?',
        text: 'DNS (Domain Name System) é o sistema que traduz nomes de domínio legíveis por humanos (como www.google.com) em endereços IP numéricos (como 142.250.217.78) que os computadores usam para se comunicar.\n\nPense no DNS como uma agenda telefônica da internet: você não precisa decorar números de telefone, apenas os nomes das pessoas. Da mesma forma, você não precisa decorar endereços IP — o DNS faz essa tradução automaticamente.',
      },
      {
        type: 'content',
        title: 'Por que precisamos do DNS?',
        text: 'Imagine ter que decorar o endereço IP de cada site que você visita. Seria impossível! O DNS resolve esse problema:\n\n• Nomes são mais fáceis de lembrar que números\n• Permite que sites mudem de servidor (IP) sem alterar o nome\n• Distribui a carga entre múltiplos servidores\n• Funciona de forma hierárquica e distribuída\n\nSem o DNS, a internet não seria tão acessível como é hoje.',
        highlight: 'O DNS é frequentemente chamado de "agenda telefônica da internet".',
      },
      {
        type: 'diagram',
        title: 'Como o DNS Funciona',
        text: 'Quando você digita um URL no navegador, várias consultas são feitas:',
        diagram: 'flow',
        items: ['Digitar\nURL', 'Cache\nLocal', 'Servidor\nDNS', 'Servidor\nRaiz', 'Servidor\nTLD', 'IP do\nSite'],
      },
      {
        type: 'content',
        title: 'Hierarquia de Domínios',
        text: 'Os nomes de domínio seguem uma hierarquia, lida da direita para a esquerda:\n\n• TLD (Top-Level Domain): o nível mais alto. Exemplos: .com, .org, .net, .br, .gov\n• Domínio Principal: o nome registrado. Exemplo: google, amazon, github\n• Subdomínio: uma divisão do domínio principal. Exemplo: www, mail, api\n\nExemplo: mail.google.com\n• .com → TLD\n• google → Domínio principal\n• mail → Subdomínio',
      },
      {
        type: 'content',
        title: 'Tipos de Registro DNS',
        text: 'Os servidores DNS armazenam diferentes tipos de registros:\n\n• Registro A: associa um nome a um endereço IPv4 (o mais comum)\n• Registro AAAA: associa um nome a um endereço IPv6\n• Registro CNAME: alias, redireciona um nome para outro nome\n• Registro MX: especifica o servidor de e-mail do domínio\n• Registro NS: indica qual servidor DNS é autoritativo para o domínio\n• Registro TXT: armazena informações textuais (verificação, SPF)',
      },
      {
        type: 'diagram',
        title: 'Passos de uma Consulta DNS',
        text: 'A sequência completa de resolução de nomes:',
        diagram: 'sequence',
        items: ['1. Cache\nlocal', '2. Resolvedor\nDNS', '3. Raiz\n(Root)', '4. TLD\n(.com)', '5. Autoritativo\n(google.com)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'O que significa a sigla DNS?',
        options: [
          'Digital Network Service',
          'Domain Name System',
          'Data Name Server',
          'Domain Network System',
        ],
        correctIndex: 1,
        explanation: 'DNS significa Domain Name System (Sistema de Nomes de Domínio). Ele traduz nomes amigáveis em endereços IP.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual tipo de registro DNS associa um nome de domínio diretamente a um endereço IPv4?',
        options: [
          'Registro MX',
          'Registro CNAME',
          'Registro A',
          'Registro NS',
        ],
        correctIndex: 2,
        explanation: 'O registro A (Address) mapeia um nome de domínio a um endereço IPv4. Para IPv6, usa-se o registro AAAA.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu sobre o DNS!\n\nResumindo:\n• DNS traduz nomes em endereços IP\n• Hierarquia: TLD → Domínio → Subdomínio\n• Tipos de registro: A, AAAA, CNAME, MX, NS\n• A consulta passa por cache, resolvedor, raiz, TLD e autoritativo\n\nAgora você está pronto para a próxima aula: Protocolos de Comunicação!',
      },
    ],
  },
  redes_6: {
    title: 'Protocolos de Comunicação',
    icon: 'globe-outline',
    steps: [
      {
        type: 'intro',
        icon: 'globe-outline',
        title: 'O que são Protocolos de Comunicação?',
        text: 'Protocolos de comunicação são conjuntos de regras que definem como os dados são formatados, transmitidos e recebidos em uma rede. Eles garantem que dispositivos diferentes possam se entender — independentemente do fabricante, sistema operacional ou hardware.\n\nVocê já usa protocolos diariamente: ao acessar um site (HTTP), enviar um e-mail (SMTP), ou baixar um arquivo (FTP). Cada tipo de comunicação na internet tem seu próprio protocolo.',
      },
      {
        type: 'content',
        title: 'HTTP e HTTPS',
        text: 'HTTP (Hypertext Transfer Protocol):\n• Protocolo base da web\n• Utiliza a porta 80\n• Comunicação em texto puro (não criptografado)\n• Sem segurança — dados podem ser interceptados\n\nHTTPS (Hypertext Transfer Protocol Secure):\n• Versão segura do HTTP\n• Utiliza a porta 443\n• Criptografa os dados com SSL/TLS\n• Garante confidencialidade, integridade e autenticação\n\nO HTTPS é identificado pelo cadeado na barra de endereços do navegador e é essencial para sites que lidam com dados sensíveis.',
        highlight: 'Sempre verifique o cadeado HTTPS antes de inserir dados pessoais em um site!',
      },
      {
        type: 'content',
        title: 'FTP e E-mail',
        text: 'FTP (File Transfer Protocol):\n• Usado para transferir arquivos entre computadores\n• Porta 21 (controle) e 20 (dados)\n• Permite upload e download de arquivos\n• SFTP/FTPS: versões seguras com criptografia\n\nProtocolos de E-mail:\n• SMTP (Simple Mail Transfer Protocol): envio de e-mails (porta 25)\n• POP3 (Post Office Protocol): recebimento, baixa e-mails para o dispositivo (porta 110)\n• IMAP (Internet Message Access Protocol): recebimento, mantém e-mails no servidor (porta 143) — permite acesso de múltiplos dispositivos',
      },
      {
        type: 'diagram',
        title: 'Requisição HTTP',
        text: 'O fluxo de uma requisição web:',
        diagram: 'flow',
        items: ['Cliente\n(Navegador)', 'Requisição\nHTTP/HTTPS', 'Servidor\nWeb', 'Resposta\n(HTML/CSS/JS)'],
      },
      {
        type: 'content',
        title: 'DHCP e SSH',
        text: 'DHCP (Dynamic Host Configuration Protocol):\n• Atribui automaticamente endereços IP aos dispositivos\n• Portas 67 (servidor) e 68 (cliente)\n• Configura IP, máscara, gateway e DNS automaticamente\n• Essencial para redes modernas — sem ele, você precisaria configurar cada dispositivo manualmente\n\nSSH (Secure Shell):\n• Acesso remoto seguro a servidores via terminal\n• Porta 22\n• Criptografa toda a comunicação\n• Substitui o Telnet (que não tem criptografia)',
        highlight: 'O DHCP é o motivo pelo qual você simplesmente conecta seu celular ao Wi-Fi e ele funciona — sem configuração manual!',
      },
      {
        type: 'diagram',
        title: 'Cliente e Servidor',
        text: 'A comunicação cliente-servidor é a base dos protocolos de rede:',
        diagram: 'io',
        items: ['Cliente\n(Requisição)', 'Rede\n(Protocolo)', 'Servidor\n(Resposta)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual a diferença entre HTTP e HTTPS?',
        options: [
          'HTTP é mais rápido que HTTPS',
          'HTTPS utiliza criptografia SSL/TLS para proteger os dados',
          'HTTP só funciona em redes locais',
          'HTTPS não utiliza portas',
        ],
        correctIndex: 1,
        explanation: 'HTTPS é a versão segura do HTTP, utilizando criptografia SSL/TLS para proteger os dados transmitidos entre o cliente e o servidor.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual protocolo é usado para enviar e-mails?',
        options: [
          'FTP',
          'HTTP',
          'SMTP',
          'DHCP',
        ],
        correctIndex: 2,
        explanation: 'SMTP (Simple Mail Transfer Protocol) é o protocolo padrão para envio de e-mails. POP3 e IMAP são usados para recebimento.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu os principais protocolos de comunicação!\n\nResumindo:\n• HTTP/HTTPS: navegação web (portas 80/443)\n• FTP: transferência de arquivos (porta 21)\n• SMTP/POP3/IMAP: e-mail\n• DHCP: configuração automática de IP\n• SSH: acesso remoto seguro (porta 22)\n\nAgora você está pronto para a próxima aula: Dispositivos de Rede!',
      },
    ],
  },
  redes_7: {
    title: 'Dispositivos de Rede',
    icon: 'hardware-chip-outline',
    steps: [
      {
        type: 'intro',
        icon: 'hardware-chip-outline',
        title: 'Dispositivos de Rede',
        text: 'Os dispositivos de rede são os equipamentos físicos que permitem a comunicação entre computadores e outros dispositivos em uma rede. Cada dispositivo tem uma função específica e opera em diferentes camadas do modelo OSI.\n\nConhecer esses dispositivos é fundamental para entender como os dados trafegam da sua casa até um servidor em outro país.',
      },
      {
        type: 'content',
        title: 'Hub vs Switch',
        text: 'Hub (Camada 1 - Física):\n• Dispositivo mais simples e antigo\n• Recebe dados em uma porta e retransmite para TODAS as outras\n• Não tem inteligência — não sabe qual dispositivo está em qual porta\n• Gera colisões e congestionamento na rede\n• Praticamente obsoleto\n\nSwitch (Camada 2 - Enlace):\n• Dispositivo inteligente que aprende os endereços MAC\n• Encaminha dados apenas para a porta de destino\n• Cria uma tabela MAC associando portas a dispositivos\n• Muito mais eficiente que o hub\n• Essencial em redes modernas',
        highlight: 'O switch é "inteligente" porque aprende quais dispositivos estão em cada porta e só envia dados para quem precisa.',
      },
      {
        type: 'content',
        title: 'Roteador',
        text: 'O roteador opera na camada 3 (Rede) e é o dispositivo responsável por conectar redes diferentes e encaminhar pacotes entre elas.\n\nFunções do roteador:\n• Roteamento: decide o melhor caminho para os pacotes\n• NAT: traduz IPs privados em público\n• Firewall: filtra tráfego indesejado\n• DHCP: distribui IPs automaticamente\n\nEm uma rede residencial, o roteador geralmente combina as funções de roteador, switch e access point em um único aparelho.',
      },
      {
        type: 'diagram',
        title: 'Caminho dos Dados',
        text: 'Como os dados viajam da sua casa até um servidor:',
        diagram: 'flow',
        items: ['PC\n→ Switch', 'Switch\n→ Roteador', 'Roteador\n→ Modem', 'Modem\n→ Internet', 'Internet\n→ Servidor'],
      },
      {
        type: 'content',
        title: 'Meios de Transmissão',
        text: 'Os dados podem trafegar por diferentes meios físicos:\n\n• Par Trançado (CAT5e, CAT6): cabos Ethernet comuns. Velocidade até 10 Gbps. Alcance de até 100 metros. Mais usado em redes locais.\n\n• Fibra Óptica: transmite dados como pulsos de luz. Velocidade de até centenas de Gbps. Alcance de dezenas de quilômetros. Imune a interferências eletromagnéticas.\n\n• Wi-Fi: transmissão por ondas de rádio. Padrões 802.11 (a/b/g/n/ac/ax/be). Conveniente, mas pode sofrer interferências. Velocidade e alcance variam conforme o padrão.',
      },
      {
        type: 'diagram',
        title: 'Rede Doméstica Típica',
        text: 'Como os dispositivos se conectam em uma casa:',
        diagram: 'io',
        items: ['Internet\n(ISP)', 'Modem +\nRoteador', 'Dispositivos\nWi-Fi', 'Computadores\n(Cabeado)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual a diferença entre hub e switch?',
        options: [
          'Hub é mais rápido que switch',
          'Hub retransmite dados para todas as portas; switch encaminha seletivamente por endereço MAC',
          'Hub e switch são o mesmo dispositivo',
          'Switch é mais antigo que hub',
        ],
        correctIndex: 1,
        explanation: 'O hub retransmite dados para todas as portas indiscriminadamente. O switch aprende endereços MAC e encaminha dados apenas para a porta de destino correta.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual dispositivo conecta redes diferentes e decide o melhor caminho para os pacotes?',
        options: [
          'Hub',
          'Switch',
          'Roteador',
          'Modem',
        ],
        correctIndex: 2,
        explanation: 'O roteador opera na camada 3 (Rede) e é responsável por conectar redes diferentes, decidindo a melhor rota para cada pacote.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu sobre os dispositivos de rede!\n\nResumindo:\n• Hub: retransmite para todas as portas (obsoleto)\n• Switch: encaminha seletivamente por MAC (inteligente)\n• Roteador: conecta redes e faz roteamento\n• Meios: par trançado, fibra óptica, Wi-Fi\n\nAgora você está pronto para a última aula: Segurança em Redes!',
      },
    ],
  },
  redes_8: {
    title: 'Segurança em Redes',
    icon: 'shield-checkmark-outline',
    steps: [
      {
        type: 'intro',
        icon: 'shield-checkmark-outline',
        title: 'Segurança em Redes',
        text: 'A segurança em redes é o conjunto de práticas, tecnologias e políticas adotadas para proteger a integridade, confidencialidade e disponibilidade dos dados transmitidos através de uma rede.\n\nCom o aumento dos ataques cibernéticos, entender os fundamentos de segurança de redes é essencial para qualquer profissional de tecnologia. Uma rede insegura pode expor dados sensíveis, permitir acessos não autorizados e causar prejuízos financeiros.',
      },
      {
        type: 'content',
        title: 'Firewall',
        text: 'O firewall é um sistema de segurança que monitora e controla o tráfego de rede com base em regras predefinidas. Ele atua como uma barreira entre redes confiáveis (interna) e não confiáveis (internet).\n\nTipos de firewall:\n• Filtro de Pacotes: analisa cabeçalhos de pacotes individualmente\n• Stateful: mantém o estado das conexões ativas\n• Proxy: atua como intermediário entre cliente e servidor\n• Next-Generation (NGFW): combina firewall tradicional com IPS, inspeção SSL e outras funcionalidades\n\nFirewalls podem ser hardware dedicado, software instalado em servidores, ou aplicativos no próprio computador.',
        highlight: 'Um firewall não impede todas as ameaças, mas é a primeira linha de defesa da sua rede.',
      },
      {
        type: 'content',
        title: 'VPN (Virtual Private Network)',
        text: 'VPN é uma tecnologia que cria um túnel criptografado entre o dispositivo do usuário e um servidor remoto. Ela protege os dados transmitidos, especialmente em redes públicas como Wi-Fi de aeroportos e cafés.\n\nBenefícios da VPN:\n• Criptografia dos dados — mesmo que interceptados, não podem ser lidos\n• Privacidade: esconde o endereço IP real do usuário\n• Acesso remoto seguro à rede corporativa\n• Contorno de restrições geográficas\n\nProtocolos comuns: IPsec, OpenVPN, WireGuard.',
      },
      {
        type: 'diagram',
        title: 'Ameaças Comuns',
        text: 'Principais ameaças à segurança de redes:',
        diagram: 'flow',
        items: ['DDoS\n(Sobrecarga)', 'Phishing\n(Engenharia\nsocial)', 'MitM\n(Interceptação)', 'Malware\n(Código\nmalicioso)'],
      },
      {
        type: 'content',
        title: 'Criptografia e Boas Práticas',
        text: 'Criptografia:\n• Simétrica: mesma chave para cifrar e decifrar (AES, DES) — rápida\n• Assimétrica: par de chaves pública e privada (RSA, ECC) — mais segura\n• SSL/TLS: usado em HTTPS, VPNs, e-mail seguro\n\nBoas Práticas:\n• Mantenha firmwares e softwares atualizados\n• Use senhas fortes e diferentes para cada serviço\n• Habilite autenticação de dois fatores (2FA)\n• Desabilite WPS e use WPA3 no Wi-Fi\n• Feche portas desnecessárias no roteador\n• Faça backups regularmente\n• Use antivírus e firewall ativos',
      },
      {
        type: 'diagram',
        title: 'Rede Segura vs Insegura',
        text: 'Comparação entre comunicação segura e insegura:',
        diagram: 'io',
        items: ['Sem HTTPS\n(Dados visíveis)', 'Firewall\n(Vigilância)', 'Com HTTPS\n(Dados criptografados)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual a função principal de um firewall?',
        options: [
          'Acelerar a conexão com a internet',
          'Proteger a rede monitorando e controlando o tráfego com base em regras de segurança',
          'Converter endereços IP em nomes de domínio',
          'Ampliar o sinal Wi-Fi',
        ],
        correctIndex: 1,
        explanation: 'Um firewall controla o tráfego de rede com base em regras de segurança, permitindo ou bloqueando tráfego conforme configurado.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Para que serve uma VPN?',
        options: [
          'Aumentar a velocidade da internet',
          'Criar um túnel criptografado para comunicação segura entre dispositivos',
          'Bloquear todos os anúncios em sites',
          'Substituir o firewall do roteador',
        ],
        correctIndex: 1,
        explanation: 'VPN cria um túnel criptografado entre o dispositivo e um servidor remoto, protegendo os dados transmitidos e garantindo privacidade.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você concluiu o módulo de Fundamentos de Redes!\n\nResumindo:\n• Firewall: primeira linha de defesa da rede\n• VPN: túnel criptografado para comunicação segura\n• Criptografia: protege os dados contra interceptação\n• Boas práticas: atualizações, senhas fortes, 2FA, backups\n\nParabéns por completar todas as aulas! Agora pratique com os exercícios e depois faça a avaliação final!',
      },
    ],
  },
  seguranca_1: {
    title: 'Introdução à Cibersegurança',
    icon: 'shield-outline',
    steps: [
      {
        type: 'intro',
        icon: 'shield-outline',
        title: 'O que é Cibersegurança?',
        text: 'Cibersegurança é o conjunto de práticas, tecnologias e processos projetados para proteger sistemas, redes, dispositivos e dados contra ataques, danos ou acessos não autorizados.\n\nEm um mundo cada vez mais digital, a cibersegurança tornou-se essencial para governos, empresas e indivíduos. Cada vez mais dados sensíveis são armazenados e transmitidos digitalmente, e criminosos cibernéticos estão sempre buscando novas formas de explorar vulnerabilidades.',
      },
      {
        type: 'diagram',
        title: 'Pilares da Cibersegurança',
        text: 'A cibersegurança se apoia em três pilares fundamentais conhecidos como Tríade CIA:',
        diagram: 'flow',
        items: ['Confidencialidade\n(Dados secretos)', 'Integridade\n(Dados íntegros)', 'Disponibilidade\n(Dados acessíveis)'],
      },
      {
        type: 'content',
        title: 'Por que a Cibersegurança é Importante?',
        text: 'A cibersegurança é importante porque vivemos em uma sociedade conectada. Alguns dados alarmantes:\n\n• Mais de 4 bilhões de registros foram expostos em violações de dados somente em 2024\n• O custo médio global de uma violação de dados é de milhões de dólares\n• Ataques de ransomware ocorrem a cada 11 segundos\n• 95% das violações de segurança envolvem erro humano\n\nProteger informações não é mais opcional — é uma necessidade para qualquer organização que opera no ambiente digital.',
        highlight: 'A cibersegurança não é apenas sobre tecnologia, mas também sobre pessoas e processos.',
      },
      {
        type: 'content',
        title: 'Principais Áreas da Cibersegurança',
        text: 'A cibersegurança abrange diversas áreas de atuação:\n\n• Segurança de Redes: proteção da infraestrutura de rede contra ataques\n• Segurança de Aplicações: desenvolvimento seguro e proteção de software\n• Segurança da Informação: proteção dos dados em qualquer formato\n• Segurança em Nuvem: proteção de dados armazenados em serviços cloud\n• Resposta a Incidentes: ações para conter e remediar ataques\n• Forense Digital: investigação de crimes cibernéticos\n• GRC (Governança, Risco e Conformidade): políticas e compliance',
      },
      {
        type: 'diagram',
        title: 'Cenário de Ameaças',
        text: 'O cenário atual de ameaças cibernéticas é diversificado e está em constante evolução:',
        diagram: 'flow',
        items: ['Criminosos\ncibernéticos', 'Hacktivistas\n(Ativismo)', 'Insiders\n(Internos)', 'Nação-Estado\n(Espionagem)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'O que é cibersegurança?',
        options: [
          'Apenas a instalação de antivírus em computadores',
          'Conjunto de práticas para proteger sistemas, redes e dados contra ataques cibernéticos',
          'Uma rede de computadores interligados globalmente',
          'Um tipo de firewall avançado',
        ],
        correctIndex: 1,
        explanation: 'Cibersegurança é o conjunto de práticas, tecnologias e processos projetados para proteger sistemas, redes, dispositivos e dados contra ataques, danos ou acessos não autorizados.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual das alternativas NÃO é uma área da cibersegurança?',
        options: [
          'Segurança de Redes',
          'Resposta a Incidentes',
          'Design Gráfico',
          'Forense Digital',
        ],
        correctIndex: 2,
        explanation: 'Design Gráfico não é uma área da cibersegurança. As áreas incluem segurança de redes, segurança de aplicações, resposta a incidentes, forense digital, GRC, entre outras.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu os conceitos fundamentais da cibersegurança!\n\nResumindo:\n• Cibersegurança protege sistemas, redes e dados\n• Tríade CIA: Confidencialidade, Integridade e Disponibilidade\n• O cenário de ameaças inclui criminosos, hacktivistas e nações-estado\n• Envolve pessoas, processos e tecnologia\n\nAgora você está pronto para a próxima aula: Os 3 Pilares da Informação!',
      },
    ],
  },
  seguranca_2: {
    title: 'Os 3 Pilares da Informação',
    icon: 'key-outline',
    steps: [
      {
        type: 'intro',
        icon: 'key-outline',
        title: 'A Tríade CIA',
        text: 'A Tríade CIA (Confidentiality, Integrity, Availability) é o modelo fundamental da segurança da informação. Ela define os três pilares que toda estratégia de segurança deve proteger.\n\nEsses três princípios guiam todas as decisões de segurança, desde a implementação de controles técnicos até a criação de políticas organizacionais. Uma falha em qualquer um dos pilares pode comprometer a segurança como um todo.',
      },
      {
        type: 'diagram',
        title: 'Os 3 Pilares',
        text: 'A segurança da informação se sustenta sobre três pilares interligados:',
        diagram: 'io',
        items: ['Confidencialidade\n(Privacidade)', 'Integridade\n(Confiança)', 'Disponibilidade\n(Acesso)'],
      },
      {
        type: 'content',
        title: 'Confidencialidade',
        text: 'A confidencialidade garante que a informação seja acessível apenas por pessoas autorizadas. Em outras palavras, os dados devem ser protegidos contra acesso não autorizado.\n\nMecanismos para garantir confidencialidade:\n• Criptografia: codifica os dados para que só quem tem a chave possa lê-los\n• Controle de Acesso: define quem pode acessar cada recurso\n• Autenticação: verifica a identidade do usuário (senhas, biometria)\n• Classificação da Informação: categoriza dados por nível de sigilo\n\nExemplo: seu histórico médico só deve ser acessível por médicos autorizados, não por qualquer pessoa.',
        highlight: 'A confidencialidade é frequentemente associada ao sigilo e à privacidade dos dados.',
      },
      {
        type: 'content',
        title: 'Integridade',
        text: 'A integridade garante que a informação não seja alterada ou destruída de forma não autorizada. Os dados devem permanecer precisos, completos e confiáveis durante todo o seu ciclo de vida.\n\nMecanismos para garantir integridade:\n• Hashing (funções hash): verifica se o dado foi alterado (SHA-256, MD5)\n• Checksums e somas de verificação: detectam erros de transmissão\n• Controle de versão: rastreia alterações em documentos\n• Assinaturas digitais: garantem autenticidade e integridade\n• Logs de auditoria: registram quem alterou o quê e quando\n\nExemplo: uma transferência bancária não pode ter o valor alterado após ser autorizada pelo cliente.',
      },
      {
        type: 'diagram',
        title: 'Violação dos Pilares',
        text: 'Exemplos de violações de cada pilar:',
        diagram: 'flow',
        items: ['Confidencialidade\n(Dados vazados)', 'Integridade\n(Dados alterados)', 'Disponibilidade\n(Sistema fora do ar)'],
      },
      {
        type: 'content',
        title: 'Disponibilidade',
        text: 'A disponibilidade garante que a informação e os sistemas estejam acessíveis e utilizáveis sempre que necessário por usuários autorizados.\n\nMecanismos para garantir disponibilidade:\n• Redundância: servidores e links de backup\n• Balanceamento de carga: distribui o tráfego entre múltiplos servidores\n• Backup e recuperação: cópias de segurança para restaurar dados\n• Planos de continuidade de negócios: procedimentos para manter operações\n• Proteção contra DDoS: mitiga ataques de negação de serviço\n\nExemplo: um site de e-commerce precisa ficar online 24/7, especialmente durante a Black Friday.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual pilar da Tríade CIA é violado quando um hacker altera os registros de notas de alunos sem autorização?',
        options: [
          'Confidencialidade',
          'Integridade',
          'Disponibilidade',
          'Autenticidade',
        ],
        correctIndex: 1,
        explanation: 'A integridade é violada quando dados são alterados sem autorização. Neste caso, as notas foram modificadas indevidamente, comprometendo a confiabilidade das informações.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Um ataque DDoS que derruba um servidor web viola qual pilar da segurança da informação?',
        options: [
          'Confidencialidade',
          'Integridade',
          'Disponibilidade',
          'Não repúdio',
        ],
        correctIndex: 2,
        explanation: 'Um ataque DDoS sobrecarrega o servidor, tornando o serviço indisponível para usuários legítimos. Isso viola diretamente o pilar da disponibilidade.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu os 3 Pilares da Informação!\n\nResumindo:\n• Confidencialidade: apenas quem pode ver, vê\n• Integridade: dados não são alterados sem permissão\n• Disponibilidade: sistemas estão acessíveis quando necessário\n• A Tríade CIA é a base de toda estratégia de segurança\n\nAgora você está pronto para a próxima aula: Malware!',
      },
    ],
  },
  seguranca_3: {
    title: 'Malware',
    icon: 'bug-outline',
    steps: [
      {
        type: 'intro',
        icon: 'bug-outline',
        title: 'O que é Malware?',
        text: 'Malware (malicious software) é qualquer software desenvolvido com intenção maliciosa de causar danos, roubar dados, espionar ou comprometer sistemas e redes.\n\nO termo "malware" é um guarda-chuva que abrange diversos tipos de programas maliciosos, como vírus, worms, trojans, ransomware, spyware e adware. Cada tipo tem características e objetivos específicos.',
      },
      {
        type: 'diagram',
        title: 'Principais Tipos de Malware',
        text: 'Os tipos mais comuns de malware e suas características:',
        diagram: 'flow',
        items: ['Vírus\n(Propagação)', 'Worm\n(Autorreplicação)', 'Trojan\n(Disfarce)', 'Ransomware\n(Extorsão)', 'Spyware\n(Espionagem)'],
      },
      {
        type: 'content',
        title: 'Vírus e Worms',
        text: 'Vírus:\n• Programa que se anexa a arquivos legítimos\n• Requer ação humana para se propagar (abrir um arquivo infectado)\n• Pode corromper, deletar ou modificar arquivos\n• Exemplos: vírus de macro, vírus de boot, vírus de script\n\nWorms:\n• Não precisam de um arquivo hospedeiro — são autônomos\n• Autorreplicam-se automaticamente pela rede\n• Exploram vulnerabilidades de sistemas operacionais\n• Exemplo famoso: Worm Morris (1988) — infectou 10% da internet da época\n\nA principal diferença: vírus precisam de um hospedeiro; worms são independentes e se espalham sozinhos.',
        highlight: 'Enquanto vírus precisam de ação humana para se espalhar, worms se replicam automaticamente pela rede.',
      },
      {
        type: 'content',
        title: 'Trojans e Ransomware',
        text: 'Trojan (Cavalo de Troia):\n• Disfarça-se de software legítimo para enganar o usuário\n• Não se autorreplica — depende da engenharia social\n• Pode criar backdoors, roubar senhas, instalar outros malwares\n• Exemplos: trojans bancários que roubam credenciais financeiras\n\nRansomware:\n• Criptografa os dados da vítima e exige resgate (ransom)\n• Uma das ameaças mais lucrativas para criminosos\n• Pode paralisar empresas inteiras\n• Exemplos: WannaCry (2017), LockBit, REvil\n• A recomendação é NÃO pagar o resgate — não há garantia de recuperação',
      },
      {
        type: 'diagram',
        title: 'Ciclo de Infecção',
        text: 'Como um malware geralmente infecta um sistema:',
        diagram: 'sequence',
        items: ['Vetor de\ninfecção', 'Execução\ndo malware', 'Instalação\n(Backdoor)', 'Ação\nmaliciosa'],
      },
      {
        type: 'content',
        title: 'Spyware, Adware e Outros',
        text: 'Spyware:\n• Espiona as atividades do usuário sem consentimento\n• Captura teclas digitadas (keylogger), histórico de navegação, senhas\n• Envia dados coletados para servidores remotos\n\nAdware:\n• Exibe anúncios indesejados e intrusivos\n• Pode redirecionar navegação para sites publicitários\n• Geralmente vem junto com software gratuito\n\nRootkit:\n• Esconde a presença de outros malwares no sistema\n• Opera em nível de kernel, difícil de detectar\n• Usado para manter acesso persistente\n\nBot:\n• Transforma o computador em um "zumbi" controlado remotamente\n• Usado em redes botnet para ataques DDoS, spam, mineração',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual a principal diferença entre um vírus e um worm?',
        options: [
          'Vírus é mais rápido que worm',
          'Vírus requer um arquivo hospedeiro; worm é independente e se autorreplica',
          'Worm só funciona em redes Windows',
          'Não há diferença — são o mesmo tipo de malware',
        ],
        correctIndex: 1,
        explanation: 'Vírus precisa se anexar a um arquivo hospedeiro e depende de ação humana para se espalhar. Worm é independente, não precisa de hospedeiro e se autorreplica automaticamente pela rede.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual tipo de malware criptografa os dados da vítima e exige pagamento para liberá-los?',
        options: [
          'Trojan',
          'Spyware',
          'Ransomware',
          'Adware',
        ],
        correctIndex: 2,
        explanation: 'Ransomware é o malware que criptografa os dados da vítima e exige um resgate (ransom) para fornecer a chave de descriptografia. Exemplos famosos incluem WannaCry e LockBit.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu os principais tipos de malware!\n\nResumindo:\n• Malware: software malicioso em geral\n• Vírus: anexa-se a arquivos, precisa de ação humana\n• Worm: autorreplicante, espalha-se automaticamente\n• Trojan: disfarça-se de software legítimo\n• Ransomware: sequestra dados e exige resgate\n• Spyware: espiona atividades do usuário\n\nAgora você está pronto para a próxima aula: Ameaças e Vulnerabilidades!',
      },
    ],
  },
  seguranca_4: {
    title: 'Ameaças e Vulnerabilidades',
    icon: 'warning-outline',
    steps: [
      {
        type: 'intro',
        icon: 'warning-outline',
        title: 'Ameaças vs Vulnerabilidades',
        text: 'Na segurança da informação, é fundamental entender a diferença entre ameaça, vulnerabilidade e risco:\n\n• Ameaça: qualquer circunstância ou evento com potencial de causar danos a um sistema ou organização\n• Vulnerabilidade: uma fraqueza ou falha em um sistema que pode ser explorada por uma ameaça\n• Risco: a probabilidade de uma ameaça explorar uma vulnerabilidade e causar danos',
      },
      {
        type: 'diagram',
        title: 'Relação Ameaça-Vulnerabilidade-Risco',
        text: 'O risco existe quando uma ameaça encontra uma vulnerabilidade:',
        diagram: 'io',
        items: ['Ameaça\n(Atacante)', 'Vulnerabilidade\n(Fraqueza)', 'Risco\n(Dano potencial)'],
      },
      {
        type: 'content',
        title: 'Exemplos Práticos',
        text: 'Vamos entender com exemplos do dia a dia:\n\nExemplo 1 - Cadeado:\n• Ameaça: um ladrão querendo entrar em sua casa\n• Vulnerabilidade: fechadura quebrada na porta dos fundos\n• Risco: alta probabilidade de invasão\n\nExemplo 2 - Software:\n• Ameaça: um hacker querendo invadir seu sistema\n• Vulnerabilidade: software desatualizado com falha de segurança conhecida\n• Risco: alta probabilidade de invasão bem-sucedida\n\nExemplo 3 - Senha Fraca:\n• Ameaça: invasor tentando acessar sua conta\n• Vulnerabilidade: senha "123456"\n• Risco: altíssimo — essa senha é quebrada em segundos',
        highlight: 'Não é possível eliminar todas as ameaças, mas podemos reduzir vulnerabilidades para diminuir riscos.',
      },
      {
        type: 'content',
        title: 'Classificação de Ameaças',
        text: 'As ameaças podem ser classificadas de várias formas:\n\nPor origem:\n• Internas: funcionários, ex-funcionários, prestadores de serviço\n• Externas: hackers, criminosos cibernéticos, governos estrangeiros\n\nPor intencionalidade:\n• Acidentais: erro humano sem intenção maliciosa\n• Intencionais: ataques deliberados com objetivo definido\n\nPor agente:\n• Ameaças humanas: ataques realizados por pessoas\n• Ameaças tecnológicas: falhas de software, hardware, malware\n• Ameaças naturais: incêndios, enchentes, terremotos (afetam disponibilidade)',
      },
      {
        type: 'diagram',
        title: 'Tipos de Vulnerabilidades',
        text: 'As vulnerabilidades podem existir em diferentes camadas:',
        diagram: 'flow',
        items: ['Física\n(Acesso ao local)', 'Rede\n(Protocolos inseguros)', 'Software\n(Bugs, falhas)', 'Humana\n(Engenharia social)'],
      },
      {
        type: 'content',
        title: 'Ciclo de Vida de uma Vulnerabilidade',
        text: 'O ciclo de vida de uma vulnerabilidade segue etapas:\n\n1. Descoberta: alguém encontra uma falha de segurança\n2. Divulgação: a falha é reportada (responsável ou publicamente)\n3. Patch: o desenvolvedor cria uma correção (atualização)\n4. Exploração: criminosos criam exploits para atacar sistemas não corrigidos\n5. Mitigação: aplicação do patch e medidas de contenção\n\nJanela de Vulnerabilidade: período entre a descoberta (ou divulgação) e a aplicação da correção. Quanto maior essa janela, maior o risco de exploração.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual é a diferença entre ameaça e vulnerabilidade?',
        options: [
          'São sinônimos — não há diferença',
          'Ameaça é o perigo potencial; vulnerabilidade é a fraqueza que pode ser explorada',
          'Ameaça é a correção; vulnerabilidade é o ataque',
          'Ameaça é interna; vulnerabilidade é externa',
        ],
        correctIndex: 1,
        explanation: 'Ameaça é qualquer circunstância com potencial de causar dano (o perigo). Vulnerabilidade é uma fraqueza ou falha que pode ser explorada por uma ameaça.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Um software desatualizado com uma falha de segurança conhecida representa:',
        options: [
          'Uma ameaça',
          'Uma vulnerabilidade',
          'Um risco já materializado',
          'Um ataque em andamento',
        ],
        correctIndex: 1,
        explanation: 'Uma falha de segurança conhecida em um software desatualizado é uma vulnerabilidade — uma fraqueza que pode ser explorada. Se um atacante decidir explorá-la, a ameaça se concretiza.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu sobre ameaças e vulnerabilidades!\n\nResumindo:\n• Ameaça: o perigo potencial\n• Vulnerabilidade: a fraqueza que pode ser explorada\n• Risco: probabilidade de uma ameaça explorar uma vulnerabilidade\n• Vulnerabilidades podem ser: físicas, de rede, de software ou humanas\n• A janela de vulnerabilidade é o período sem proteção\n\nAgora você está pronto para a próxima aula: Tipos de Ataques!',
      },
    ],
  },
  seguranca_5: {
    title: 'Tipos de Ataques',
    icon: 'flash-off-outline',
    steps: [
      {
        type: 'intro',
        icon: 'flash-off-outline',
        title: 'Principais Ataques Cibernéticos',
        text: 'Os ataques cibernéticos são tentativas deliberadas de comprometer a confidencialidade, integridade ou disponibilidade de sistemas e dados.\n\nConhecer os principais tipos de ataque é essencial para se defender. Cada ataque explora diferentes vulnerabilidades e utiliza técnicas específicas. Vamos estudar os mais comuns e perigosos.',
      },
      {
        type: 'diagram',
        title: 'Ataques Comuns',
        text: 'Visão geral dos principais ataques cibernéticos:',
        diagram: 'flow',
        items: ['Phishing\n(Engenharia\nSocial)', 'DDoS\n(Negação\nde Serviço)', 'MitM\n(Interceptação)', 'SQL Injection\n(BD)', 'Brute Force\n(Senhas)'],
      },
      {
        type: 'content',
        title: 'Phishing e Engenharia Social',
        text: 'Phishing:\n• Técnica de engenharia social que usa mensagens falsas para enganar vítimas\n• Objetivo: roubar credenciais, dados bancários ou instalar malware\n• Pode ser via e-mail, SMS (smishing), telefone (vishing) ou redes sociais\n• Geralmente imita empresas legítimas (bancos, redes sociais, governo)\n\nEngenharia Social:\n• Conjunto de técnicas psicológicas para manipular pessoas\n• Explora a confiança, medo, curiosidade ou pressa da vítima\n• Exemplos: pretexting (criar um pretexto), baiting (isca), tailgating (seguir alguém)\n• É considerada a maior ameaça à segurança, pois explora o elo mais fraco: o ser humano',
        highlight: 'Desconfie de mensagens urgentes, ofertas boas demais e remetentes desconhecidos — são sinais clássicos de phishing.',
      },
      {
        type: 'content',
        title: 'DDoS e Brute Force',
        text: 'DDoS (Distributed Denial of Service):\n• Sobrecarrega um servidor com tráfego massivo de múltiplas fontes\n• Utiliza botnets (rede de dispositivos infectados) para gerar o ataque\n• Objetivo: tornar o serviço indisponível\n• Mitigação: firewalls, balanceadores de carga, serviços anti-DDoS (Cloudflare, AWS Shield)\n\nBrute Force (Força Bruta):\n• Tenta todas as combinações possíveis de senha até acertar\n• Pode ser lento, mas é eficaz contra senhas fracas\n• Taxa de ataque: bilhões de tentativas por segundo com hardware moderno\n• Mitigação: senhas fortes, bloqueio após N tentativas, autenticação multifator (MFA)',
      },
      {
        type: 'diagram',
        title: 'Ataque MitM',
        text: 'No ataque Man-in-the-Middle, o invasor intercepta a comunicação entre duas partes:',
        diagram: 'io',
        items: ['Alice\n(Remetente)', 'Invasor\n(Intercepta)', 'Bob\n(Destino)'],
      },
      {
        type: 'content',
        title: 'MitM e SQL Injection',
        text: `Man-in-the-Middle (MitM):\n• Invasor se posiciona entre duas partes que se comunicam\n• Pode interceptar, ler e modificar dados em tempo real\n• Comum em redes Wi-Fi públicas não seguras\n• Mitigação: HTTPS, VPN, certificados digitais\n\nSQL Injection:\n• Explora vulnerabilidades em aplicações web que usam bancos de dados\n• Invasor insere comandos SQL maliciosos em campos de formulário\n• Pode acessar, modificar ou deletar dados do banco\n• Exemplo clássico: digitar ' OR '1'='1 em um campo de login\n• Mitigação: validação de entrada, prepared statements, ORM`,
      },
      {
        type: 'content',
        title: 'Zero-Day e Outros Ataques',
        text: 'Zero-Day (Dia Zero):\n• Ataque que explora uma vulnerabilidade desconhecida pelo fabricante\n• Não existe patch disponível — é "zero dias" desde a descoberta\n• Extremamente perigoso: não há defesa conhecida\n• Altamente valorizado no mercado negro\n\nCross-Site Scripting (XSS):\n• Injeta scripts maliciosos em páginas web visualizadas por outros usuários\n• Rouba cookies, redireciona para sites maliciosos\n\nSession Hijacking:\n• Rouba o token de sessão do usuário para assumir sua identidade\n• Comum em sites sem HTTPS ou com falhas de segurança',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual ataque utiliza mensagens falsas que imitam empresas legítimas para roubar credenciais?',
        options: [
          'DDoS',
          'SQL Injection',
          'Phishing',
          'Brute Force',
        ],
        correctIndex: 2,
        explanation: 'Phishing é uma técnica de engenharia social que utiliza mensagens falsas (e-mail, SMS, telefone) se passando por empresas legítimas para enganar vítimas e roubar informações sensíveis.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Como se chama o ataque em que o invasor se posiciona entre a vítima e o servidor para interceptar a comunicação?',
        options: [
          'Phishing',
          'Man-in-the-Middle (MitM)',
          'DDoS',
          'Zero-Day',
        ],
        correctIndex: 1,
        explanation: 'No ataque Man-in-the-Middle (MitM), o invasor se posiciona secretamente entre as duas partes que se comunicam, podendo interceptar, ler e modificar os dados transmitidos.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu os principais tipos de ataques cibernéticos!\n\nResumindo:\n• Phishing/Engenharia Social: manipulação psicológica\n• DDoS: sobrecarga de servidores\n• MitM: interceptação de comunicação\n• SQL Injection: injeção de comandos SQL\n• Brute Force: tentativa de todas as senhas\n• Zero-Day: explora vulnerabilidade desconhecida\n\nAgora você está pronto para a próxima aula: Criptografia!',
      },
    ],
  },
  seguranca_6: {
    title: 'Criptografia',
    icon: 'lock-closed-outline',
    steps: [
      {
        type: 'intro',
        icon: 'lock-closed-outline',
        title: 'O que é Criptografia?',
        text: 'Criptografia é a ciência de proteger informações transformando-as em um formato ilegível (cifrado) para quem não possui a chave de descriptografia.\n\nO termo vem do grego "kryptos" (oculto) e "graphein" (escrever). A criptografia é usada há milhares de anos — desde o Império Romano com o cifra de César até os modernos algoritmos que protegem a internet hoje.',
      },
      {
        type: 'diagram',
        title: 'Criptografia na Prática',
        text: 'O processo básico de criptografia:',
        diagram: 'io',
        items: ['Texto claro\n(Mensagem\noriginal)', 'Criptografia\n(Algoritmo +\nChave)', 'Texto cifrado\n(Ilegível\nsem chave)'],
      },
      {
        type: 'content',
        title: 'Criptografia Simétrica',
        text: 'Na criptografia simétrica, a mesma chave é usada tanto para cifrar quanto para decifrar os dados.\n\nCaracterísticas:\n• Chave única compartilhada entre remetente e destinatário\n• Muito rápida e eficiente para grandes volumes de dados\n• Desafio: como compartilhar a chave de forma segura?\n\nAlgoritmos comuns:\n• AES (Advanced Encryption Standard): padrão global, usado pelo governo dos EUA\n• DES (Data Encryption Standard): antigo, considerado inseguro hoje\n• ChaCha20: moderno, usado em comunicações móveis\n\nUse casos: criptografia de disco (BitLocker, FileVault), Wi-Fi (WPA2/WPA3), VPNs',
        highlight: 'A criptografia simétrica é como um cofre com uma única chave — rápido, mas o desafio é entregar a chave com segurança.',
      },
      {
        type: 'diagram',
        title: 'Simétrica vs Assimétrica',
        text: 'Comparação entre os dois tipos de criptografia:',
        diagram: 'flow',
        items: ['Simétrica\n(Mesma chave)', 'Assimétrica\n(Par de chaves)', 'Hashing\n(Sem reversão)'],
      },
      {
        type: 'content',
        title: 'Criptografia Assimétrica',
        text: 'Na criptografia assimétrica, usamos um par de chaves matematicamente relacionadas: uma pública (compartilhada) e uma privada (secreta).\n\nCaracterísticas:\n• Chave pública: pode ser distribuída livremente\n• Chave privada: deve ser mantida em segredo absoluto\n• O que uma cifra, só a outra decifra\n• Mais segura, mas significativamente mais lenta que a simétrica\n\nAlgoritmos comuns:\n• RSA (Rivest-Shamir-Adleman): o mais usado, baseado em fatores primos\n• ECC (Elliptic Curve Cryptography): mais eficiente que RSA, usado em certificados modernos\n\nUse casos: HTTPS (certificados SSL/TLS), e-mail seguro (PGP), assinaturas digitais',
      },
      {
        type: 'content',
        title: 'Hashing e Assinaturas Digitais',
        text: 'Funções Hash:\n• Transformam dados de qualquer tamanho em uma string fixa (hash/digest)\n• Unidirecionais: não é possível reverter o hash para o dado original\n• Propriedades: mesmo dado sempre produz o mesmo hash; mudança mínima produz hash completamente diferente\n• Algoritmos: SHA-256, SHA-3, bcrypt (senhas)\n• Usos: verificação de integridade, armazenamento de senhas\n\nAssinaturas Digitais:\n• Combinam hash com criptografia assimétrica\n• Garantem autenticidade (quem assinou) e integridade (não foi alterado)\n• Base para certificados digitais e blockchain',
      },
      {
        type: 'diagram',
        title: 'HTTPS na Prática',
        text: 'O HTTPS usa criptografia assimétrica para trocar chaves e simétrica para comunicação:',
        diagram: 'sequence',
        items: ['Handshake\n(Troca de\nchaves)', 'Certificado\n(Assimétrica)', 'Sessão\n(Simétrica\nAES)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual a diferença entre criptografia simétrica e assimétrica?',
        options: [
          'Simétrica usa duas chaves; assimétrica usa uma chave',
          'Simétrica usa a mesma chave para cifrar e decifrar; assimétrica usa um par público-privado',
          'Não há diferença — são termos para o mesmo conceito',
          'Simétrica é mais segura que assimétrica',
        ],
        correctIndex: 1,
        explanation: 'Na criptografia simétrica, a mesma chave cifra e decifra os dados. Na assimétrica, um par de chaves é usado: a chave pública cifra e a chave privada decifra (ou vice-versa).',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual das seguintes é uma função hash usada para verificar integridade de dados?',
        options: [
          'AES',
          'RSA',
          'SHA-256',
          'ECC',
        ],
        correctIndex: 2,
        explanation: 'SHA-256 é uma função hash que produz um digest de 256 bits. É usado para verificar integridade de arquivos, armazenar senhas com segurança e em blockchain. AES e RSA são algoritmos de criptografia (não hash).',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu os fundamentos da criptografia!\n\nResumindo:\n• Simétrica: mesma chave — rápida, desafio é compartilhar a chave\n• Assimétrica: par público/privado — mais segura, mais lenta\n• Hash: função unidirecional — verifica integridade\n• HTTPS combina assimétrica (handshake) e simétrica (dados)\n\nAgora você está pronto para a próxima aula: Segurança em Redes e Firewall!',
      },
    ],
  },
  seguranca_7: {
    title: 'Segurança em Redes e Firewall',
    icon: 'shield-half-outline',
    steps: [
      {
        type: 'intro',
        icon: 'shield-half-outline',
        title: 'Segurança em Redes',
        text: 'A segurança em redes envolve políticas, práticas e tecnologias para proteger a integridade, confidencialidade e disponibilidade dos dados durante a transmissão entre dispositivos.\n\nCom a crescente conectividade — IoT, nuvem, trabalho remoto — a superfície de ataque das organizações se expandiu enormemente. Proteger o perímetro da rede não é mais suficiente; é preciso adotar uma abordagem de confiança zero (Zero Trust).',
      },
      {
        type: 'content',
        title: 'Firewall: Primeira Linha de Defesa',
        text: 'O firewall é o dispositivo de segurança mais fundamental em qualquer rede. Ele atua como uma barreira controlada entre redes confiáveis (interna) e não confiáveis (internet).\n\nFuncionamento básico:\n1. Cada pacote que entra ou sai da rede é inspecionado\n2. Regras predefinidas determinam se o pacote é permitido ou bloqueado\n3. Baseado em: IP de origem/destino, porta, protocolo, estado da conexão\n\nFirewalls podem ser baseados em:\n• Hardware: appliances dedicados (Cisco ASA, Fortinet, Palo Alto)\n• Software: iptables (Linux), Windows Firewall, pfSense\n• Cloud: AWS Security Groups, Azure Firewall, Cloudflare',
        highlight: 'Firewall não é uma solução completa de segurança — é a primeira camada de defesa, não a única.',
      },
      {
        type: 'diagram',
        title: 'Tipos de Firewall',
        text: 'Evolução dos firewalls e suas capacidades:',
        diagram: 'flow',
        items: ['Filtro de\nPacotes\n(Stateless)', 'Stateful\n(Com estado\nda conexão)', 'Proxy\n(Intermediário)', 'NGFW\n(Próxima\ngeração)'],
      },
      {
        type: 'content',
        title: 'IDS e IPS',
        text: 'IDS (Intrusion Detection System):\n• Monitora o tráfego de rede em busca de atividades suspeitas\n• Gera alertas quando detecta padrões maliciosos\n• Passivo: apenas detecta e alerta — não bloqueia\n• Baseado em assinaturas (ameaças conhecidas) ou anomalias (comportamento)\n\nIPS (Intrusion Prevention System):\n• Similar ao IDS, mas ativo: pode bloquear ataques em tempo real\n• Posicionado em linha (inline) com o tráfego\n• Pode descartar pacotes maliciosos, bloquear IPs, redefinir conexões\n• Mais proativo, mas pode gerar falsos positivos e afetar tráfego legítimo',
      },
      {
        type: 'content',
        title: 'VPNs e Zero Trust',
        text: 'VPN (Virtual Private Network):\n• Cria túneis criptografados sobre redes não confiáveis\n• Essencial para acesso remoto seguro à rede corporativa\n• Protocolos: IPsec, OpenVPN, WireGuard (moderno e rápido)\n• Limitação: uma vez dentro da VPN, o usuário tem amplo acesso à rede\n\nZero Trust (Confiança Zero):\n• Modelo de segurança "nunca confie, sempre verifique"\n• Não existe perímetro confiável — cada acesso é verificado individualmente\n• Princípios: verificação contínua, mínimo privilégio, microssegmentação\n• Substitui o modelo tradicional de castelo (dentro = confiável, fora = não confiável)',
      },
      {
        type: 'diagram',
        title: 'Defesa em Profundidade',
        text: 'Múltiplas camadas de segurança protegem a rede:',
        diagram: 'sequence',
        items: ['Firewall\n(Perímetro)', 'IDS/IPS\n(Detecção)', 'VPN\n(Túnel)', 'Antivírus\n(Endpoint)', 'Backup\n(Recuperação)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual a diferença entre IDS e IPS?',
        options: [
          'IDS é hardware; IPS é software',
          'IDS detecta e alerta; IPS detecta e bloqueia ativamente',
          'IDS e IPS são o mesmo dispositivo',
          'IPS é mais antigo que IDS',
        ],
        correctIndex: 1,
        explanation: 'IDS (Intrusion Detection System) apenas detecta atividades suspeitas e gera alertas. IPS (Intrusion Prevention System) é ativo: pode bloquear ataques em tempo real, descartando pacotes maliciosos.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual modelo de segurança parte do princípio "nunca confie, sempre verifique"?',
        options: [
          'Perímetro de segurança',
          'Defesa em profundidade',
          'Zero Trust (Confiança Zero)',
          'Firewall Stateful',
        ],
        correctIndex: 2,
        explanation: 'Zero Trust é um modelo de segurança que assume que nenhum usuário, dispositivo ou rede é confiável por padrão. Cada acesso deve ser verificado e autorizado individualmente, independentemente de origem.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você aprendeu sobre segurança em redes e firewall!\n\nResumindo:\n• Firewall: controla tráfego com base em regras\n• Tipos: stateless, stateful, proxy, NGFW\n• IDS detecta; IPS bloqueia\n• VPN: túnel criptografado para acesso remoto\n• Zero Trust: nunca confie, sempre verifique\n• Defesa em profundidade: múltiplas camadas\n\nAgora você está pronto para a última aula: Boas Práticas de Segurança!',
      },
    ],
  },
  seguranca_8: {
    title: 'Boas Práticas de Segurança',
    icon: 'checkmark-done-outline',
    steps: [
      {
        type: 'intro',
        icon: 'checkmark-done-outline',
        title: 'Boas Práticas de Segurança',
        text: 'A segurança da informação não depende apenas de tecnologias sofisticadas — grande parte da proteção vem de práticas simples e comportamentos adequados dos usuários.\n\nEstima-se que 95% das violações de segurança envolvam erro humano. Por isso, adotar boas práticas de segurança no dia a dia é essencial para reduzir riscos, tanto no ambiente profissional quanto pessoal.',
      },
      {
        type: 'diagram',
        title: 'Práticas Essenciais',
        text: 'As boas práticas de segurança abrangem várias áreas:',
        diagram: 'flow',
        items: ['Senhas\nFortes', '2FA/MFA\n(Dois fatores)', 'Backups\nRegulares', 'Atualizações\n(Patch)', 'Antivírus\n+ Firewall'],
      },
      {
        type: 'content',
        title: 'Política de Senhas Fortes',
        text: 'Senhas fracas são responsáveis por uma grande parcela das invasões. Siga estas recomendações:\n\nCaracterísticas de uma senha forte:\n• Mínimo 12 caracteres (ideal: 16+)\n• Mistura de letras maiúsculas e minúsculas\n• Números e símbolos especiais (!@#$%)\n• Não usar informações pessoais (nome, data de nascimento)\n• Não usar palavras do dicionário\n\nBoas práticas:\n• Use um gerenciador de senhas (LastPass, Bitwarden, 1Password)\n• Ative a autenticação multifator (2FA/MFA) sempre que possível\n• Nunca reutilize senhas entre serviços diferentes\n• Troque senhas imediatamente se houver suspeita de vazamento',
      },
      {
        type: 'diagram',
        title: 'Autenticação Multifator',
        text: 'A MFA adiciona camadas extras de segurança além da senha:',
        diagram: 'sequence',
        items: ['Algo que\nvocê SABE\n(Senha)', 'Algo que\nvocê TEM\n(Token/App)', 'Algo que\nvocê É\n(Biometria)'],
      },
      {
        type: 'content',
        title: 'Backups e Atualizações',
        text: 'Backups (Cópias de Segurança):\n• Regra 3-2-1: 3 cópias, 2 mídias diferentes, 1 fora do local\n• Tipos: completo, incremental, diferencial\n• Teste a restauração periodicamente — um backup que não pode ser restaurado não serve\n• Armazene backups offline para proteção contra ransomware\n\nAtualizações (Patch Management):\n• Mantenha SO, softwares e firmwares sempre atualizados\n• Ative atualizações automáticas sempre que possível\n• Priorize patches de segurança críticos\n• Não ignore atualizações de navegadores e plugins\n\nDados do mundo real: o ataque WannaCry (2017) explorou uma vulnerabilidade para a qual a Microsoft já havia lançado um patch meses antes. Quem não atualizou foi afetado.',
        highlight: 'A regra 3-2-1 de backups: tenha 3 cópias dos dados, em 2 tipos de mídia diferentes, com 1 cópia armazenada fora do local principal.',
      },
      {
        type: 'content',
        title: 'Conscientização e Cultura de Segurança',
        text: 'A tecnologia mais avançada não adianta se as pessoas não souberem usá-la com segurança.\n\nDicas para o dia a dia:\n• Desconfie de e-mails e links suspeitos — verifique o remetente antes de clicar\n• Não conecte dispositivos desconhecidos (pendrives achados na rua)\n• Use redes Wi-Fi seguras — evite redes públicas sem VPN\n• Bloqueie o computador ao se ausentar (Windows + L / Ctrl + Cmd + Q)\n• Não compartilhe senhas ou códigos de verificação com ninguém\n• Mantenha o mínimo de privilégio — só tenha acesso ao necessário\n• Reporte incidentes de segurança imediatamente ao time responsável\n\nUma cultura de segurança forte é construída com treinamento contínuo e comunicação clara.',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual a regra recomendada para backups de dados?',
        options: [
          '1-1-1: uma cópia, um local, um dispositivo',
          '3-2-1: três cópias, duas mídias, uma fora do local',
          '5-5-5: cinco cópias, cinco locais, cinco mídias',
          'Backup não é necessário se você tem antivírus',
        ],
        correctIndex: 1,
        explanation: 'A regra 3-2-1 recomenda ter 3 cópias dos dados, armazenadas em 2 tipos de mídia diferentes (ex: HD externo + nuvem), com 1 cópia mantida fora do local principal (offsite).',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual das alternativas NÃO é uma boa prática de segurança?',
        options: [
          'Usar um gerenciador de senhas',
          'Ativar autenticação de dois fatores (2FA)',
          'Usar a mesma senha para todos os serviços para não esquecer',
          'Manter o software sempre atualizado',
        ],
        correctIndex: 2,
        explanation: 'Reutilizar a mesma senha em múltiplos serviços é uma péssima prática. Se um serviço for comprometido, todas as suas contas estarão em risco. Use um gerenciador de senhas para criar e armazenar senhas únicas e fortes para cada serviço.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você concluiu o módulo de Fundamentos de Cibersegurança!\n\nResumindo:\n• Senhas fortes e únicas para cada serviço\n• Ative 2FA/MFA sempre que possível\n• Regra 3-2-1 para backups\n• Mantenha tudo atualizado\n• Desconfie de phishing e engenharia social\n• Cultive uma mentalidade de segurança\n\nParabéns por completar todas as aulas! Agora pratique com os exercícios e depois faça a avaliação final!',
      },
    ],
  },
  // === CYBER THREAT INTELLIGENCE ===
  cti_1: {
    title: 'Introdução à CTI',
    icon: 'compass-outline',
    steps: [
      {
        type: 'intro',
        icon: 'compass-outline',
        title: 'O que é Cyber Threat Intelligence?',
        text: 'Cyber Threat Intelligence (CTI) é a coleta e análise de informações sobre ameaças cibernéticas para tomar decisões de segurança informadas.\n\nCTI transforma dados brutos em inteligência acionável, permitindo que organizações se antecipem a ataques em vez de apenas reagir a eles.',
      },
      {
        type: 'content',
        title: 'Por que CTI é importante?',
        text: 'No cenário atual de ameaças, as organizações enfrentam centenas de ataques por dia. Sem inteligência, você está sempre um passo atrás dos adversários.\n\nCTI ajuda a:\n• Priorizar vulnerabilidades com base em exploits reais\n• Identificar quais grupos de ameaças estão mirando seu setor\n• Antecipar TTPs (Táticas, Técnicas e Procedimentos) dos atacantes\n• Reduzir o tempo de detecção e resposta (MTTD/MTTR)\n\nOrganizações com programas maduros de CTI reduzem em até 60% o impacto de incidentes.',
        highlight: 'CTI não é sobre coletar dados, é sobre gerar inteligência que orienta decisões de segurança.',
      },
      {
        type: 'diagram',
        title: 'Dado → Informação → Inteligência',
        text: 'A hierarquia da inteligência mostra como dados brutos se transformam em conhecimento acionável:',
        diagram: 'flow',
        items: ['Dados Brutos', 'Informação', 'Inteligência', 'Decisão'],
      },
      {
        type: 'content',
        title: 'Tipos de Inteligência',
        text: 'A CTI é classificada em três níveis estratégicos:\n\n• Estratégica (Strategic): Visão de alto nível para executivos — tendências, riscos geopolíticos, impacto nos negócios.\n\n• Tática (Tactical): Foco em TTPs, ferramentas e infraestrutura dos adversários — útil para equipes de defesa.\n\n• Operacional (Operational): Inteligência sobre campanhas específicas, IOCs e indicações de ataques iminentes.\n\n• Técnica (Technical): Hashes de malware, IPs maliciosos, assinaturas de detecção — o nível mais granular.',
      },
      {
        type: 'diagram',
        title: 'Fluxo da Inteligência',
        text: 'Como a inteligência flui dentro de uma organização:',
        diagram: 'io',
        items: ['Coleta\n(Dados)', 'Análise\n(Contexto)', 'Disseminação\n(Ação)'],
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual a diferença entre dado, informação e inteligência em CTI?',
        options: [
          'São sinônimos usados indistintamente',
          'Dado é bruto, informação é dado contextualizado, inteligência é informação analisada para ação',
          'Inteligência é o dado bruto coletado de fontes abertas',
          'Informação e inteligência são a mesma coisa, apenas o dado é diferente',
        ],
        correctIndex: 1,
        explanation: 'Dado é o elemento bruto (ex: um IP). Informação é o dado com contexto (ex: IP associado a um C2). Inteligência é a informação analisada que gera ação (ex: bloquear o IP porque faz parte de uma campanha direcionada ao seu setor).',
      },
      {
        type: 'question',
        title: 'Teste seu conhecimento',
        question: 'Qual tipo de CTI é mais útil para um analista de SOC no dia a dia?',
        options: [
          'Estratégica — tendências de longo prazo',
          'Técnica — hashes, IPs e assinaturas de detecção',
          'Geopolítica — relações entre países',
          'Apenas a inteligência operacional é útil para o SOC',
        ],
        correctIndex: 1,
        explanation: 'A inteligência técnica fornece IOCs concretos (hashes, IPs, domínios, regras YARA) que o SOC pode usar imediatamente em firewalls, SIEMs e ferramentas de detecção. É o nível mais operacional e acionável para o dia a dia.',
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Você concluiu a introdução à Cyber Threat Intelligence!\n\nResumindo:\n• CTI transforma dados em inteligência acionável\n• A hierarquia é: Dado → Informação → Inteligência → Decisão\n• Existem 4 níveis: Estratégico, Tático, Operacional e Técnico\n• CTI permite antecipar ataques em vez de apenas reagir\n\nContinue para a próxima aula sobre o Ciclo de Inteligência!',
      },
    ],
  },
cti_2: {
    title: 'Ciclo de Inteligência',
    icon: 'cycle',
    steps: [
      {
        type: 'intro',
        icon: 'cycle',
        title: 'Ciclo de Inteligência',
        text: 'O Ciclo de Inteligência é o modelo fundamental que orienta a produção de inteligência em segurança cibernética. Ele estrutura o processo de transformação de dados brutos em inteligência acionável, permitindo que organizações tomem decisões informadas sobre ameaças e riscos. Cada fase do ciclo alimenta a próxima, criando um fluxo contínuo de aperfeiçoamento.'
      },
      {
        type: 'diagram',
        title: 'As 6 Fases do Ciclo de Inteligência',
        text: 'O ciclo é composto por seis fases interconectadas que formam um processo iterativo e contínuo. Cada fase desempenha um papel crítico na transformação de requisitos de inteligência em conhecimento acionável para a tomada de decisão.',
        diagram: 'flow',
        items: [
          'Direção',
          'Coleta',
          'Processamento',
          'Análise',
          'Disseminação',
          'Feedback'
        ]
      },
      {
        type: 'content',
        title: 'Fase 1 - Direção (Direction)',
        text: 'A fase de Direção estabelece os fundamentos de todo o ciclo. Nela, os tomadores de decisão definem os requisitos de inteligência (Intelligence Requirements) e emitem os Pedidos de Informação (RFIs - Requests for Information). É nesta etapa que se determina o que precisa ser monitorado, quais ativos são críticos, quais ameaças são prioritárias e qual o escopo temporal da coleta. Sem uma direção clara, as fases seguintes carecem de foco e propósito.'
      },
      {
        type: 'content',
        title: 'Fase 2 - Coleta (Collection)',
        text: 'A Coleta é a fase de obtenção dos dados brutos necessários para responder aos requisitos definidos. As fontes incluem: OSINT (Open Source Intelligence) como redes sociais, Shodan e Google Dorks; feeds de inteligência de ameaças como AlienVault OTX e MISP; monitoramento da dark web em fóruns e marketplaces; telemetria de redes e endpoints; e fontes técnicas como honeypots e sandboxes. A qualidade da inteligência final depende diretamente da qualidade e diversidade das fontes utilizadas.'
      },
      {
        type: 'diagram',
        title: 'Fontes de Coleta',
        text: 'As principais fontes de coleta de inteligência cobrem desde dados abertos até informações técnicas especializadas, cada uma oferecendo perspectivas únicas sobre o cenário de ameaças.',
        diagram: 'sequence',
        items: [
          'OSINT',
          'Feeds TTP',
          'Dark Web',
          'Telemetria'
        ]
      },
      {
        type: 'content',
        title: 'Fases 3 e 4 - Processamento e Análise',
        text: 'O Processamento organiza e normaliza os dados brutos coletados, convertendo-os em formato estruturado e padronizado. Isso inclui decodificação, descompressão, tradução e correlação inicial. A Análise, por sua vez, aplica raciocínio crítico, técnicas analíticas e conhecimento contextual para transformar dados processados em inteligência propriamente dita. É onde se identificam padrões, conexões entre eventos, táticas adversárias e cenários de ataque. A análise responde ao "por quê" e "como", não apenas ao "o quê".',
        highlight: true
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'Qual a primeira fase do Ciclo de Inteligência?',
        options: [
          'Coleta',
          'Análise',
          'Direção',
          'Disseminação'
        ],
        correctIndex: 2,
        explanation: 'A Direção é a primeira fase do ciclo, onde os requisitos de inteligência são definidos pelos tomadores de decisão. Sem direção, a coleta e as demais fases não têm foco.'
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'Por que o feedback é uma fase essencial no Ciclo de Inteligência?',
        options: [
          'Porque encerra o ciclo definitivamente',
          'Para ajustar os requisitos de inteligência com base nos resultados',
          'Apenas para documentação histórica',
          'Para validar a coleta de dados'
        ],
        correctIndex: 1,
        explanation: 'O feedback permite que os consumidores de inteligência avaliem a qualidade e relevância dos produtos entregues, ajustando os requisitos para o próximo ciclo. Isso torna o processo iterativo e contínuo.'
      },
      {
        type: 'conclusion',
        title: 'Ciclo de Inteligência',
        text: 'O Ciclo de Inteligência é a espinha dorsal da CTI, organizando o trabalho em 6 fases: Direção (define requisitos), Coleta (obtém dados brutos), Processamento (organiza e normaliza), Análise (transforma em inteligência), Disseminação (distribui aos consumidores) e Feedback (ajusta requisitos). É um processo contínuo e iterativo que garante que a inteligência produzida seja relevante, oportuna e acionável.'
      }
    ]
  },

  cti_3: {
    title: 'Fontes de Inteligência',
    icon: 'search',
    steps: [
      {
        type: 'intro',
        icon: 'search',
        title: 'Fontes de Inteligência',
        text: 'As fontes de inteligência são a matéria-prima da CTI. A diversidade e qualidade das fontes determinam a profundidade e precisão da inteligência produzida. Neste módulo, exploramos as principais categorias de fontes: abertas (OSINT), feeds de ameaças, dark web e fontes técnicas, compreendendo suas vantagens, limitações e melhores práticas de utilização.'
      },
      {
        type: 'content',
        title: 'OSINT - Open Source Intelligence',
        text: 'OSINT refere-se à inteligência coletada de fontes públicas e legalmente acessíveis. Inclui redes sociais (Twitter, LinkedIn, Telegram) para monitoramento de discussões e vazamentos; Shodan para descoberta de dispositivos expostos; Google Dorks para encontrar informações indexadas acidentalmente; WHOIS para consulta de registros de domínio; repositórios públicos como GitHub; e fóruns especializados. A principal vantagem do OSINT é ser legal, de baixo custo e amplamente acessível, mas requer habilidade para filtrar ruído e validar informações.'
      },
      {
        type: 'diagram',
        title: 'Categorias de Fontes de Inteligência',
        text: 'As fontes de inteligência podem ser organizadas em quatro grandes categorias, cada uma oferecendo perspectivas complementares sobre o cenário de ameaças.',
        diagram: 'flow',
        items: [
          'Pessoas',
          'Infraestrutura',
          'Técnico',
          'Geográfico'
        ]
      },
      {
        type: 'content',
        title: 'Feeds de Ameaças (Threat Intelligence Feeds)',
        text: 'Feeds de ameaças fornecem dados estruturados e atualizados sobre indicadores de compromisso, campanhas maliciosas e TTPs de adversários. As plataformas mais relevantes incluem: AlienVault OTX (Open Threat Exchange), que oferece comunidades de compartilhamento e pulsos de ameaças; MISP (Malware Information Sharing Platform), focado em compartilhamento entre organizações de confiança; VirusTotal, que agrega múltiplos engines de detecção; e AbuseIPDB, especializado em endereços IP maliciosos. A correlação entre múltiplos feeds aumenta a confiabilidade dos indicadores.'
      },
      {
        type: 'content',
        title: 'Dark Web e Inteligência Técnica',
        text: 'A dark web é uma fonte valiosa para inteligência sobre ameaças emergentes, vazamentos de dados, exploits zero-day e malware as a service. O monitoramento de fóruns clandestinos e marketplaces requer infraestrutura especializada e cuidados operacionais. Já a inteligência técnica é obtida através de: honeypots (sistemas isca que atraem atacantes), sandboxes (ambientes controlados para análise de malware), telemetria de endpoints e redes, e análise de logs de firewalls e IDS/IPS. Essas fontes fornecem dados objetivos e de alta confiabilidade sobre a atividade adversária.'
      },
      {
        type: 'diagram',
        title: 'Fluxo de Transformação',
        text: 'O processo de transformação de fontes abertas em inteligência acionável segue um fluxo de correlação e análise, onde dados brutos são processados para gerar valor.',
        diagram: 'io',
        items: [
          'Fontes Abertas',
          'Correlação & Análise',
          'Inteligência Acionável'
        ]
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'Qual a principal vantagem do OSINT como fonte de inteligência?',
        options: [
          'É a única fonte com informações em tempo real',
          'É legal, de baixo custo e amplamente acessível',
          'Não requer validação dos dados coletados',
          'Fornece apenas dados técnicos estruturados'
        ],
        correctIndex: 1,
        explanation: 'OSINT utiliza fontes públicas e legalmente acessíveis, com custo geralmente baixo ou nenhum, e está disponível para qualquer organização. No entanto, requer habilidades para filtrar ruído e validar a veracidade das informações.'
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'O que é MISP e qual seu propósito principal?',
        options: [
          'Um firewall de código aberto',
          'Uma plataforma de compartilhamento de inteligência de ameaças',
          'Um motor de busca para a dark web',
          'Um framework de testes de penetração'
        ],
        correctIndex: 1,
        explanation: 'MISP (Malware Information Sharing Platform) é uma plataforma open-source para compartilhamento, armazenamento e correlação de indicadores de compromisso e inteligência de ameaças entre organizações de confiança.'
      },
      {
        type: 'conclusion',
        title: 'Fontes de Inteligência',
        text: 'As fontes de inteligência dividem-se em OSINT (dados públicos e legais), feeds de ameaças (dados estruturados de plataformas especializadas), dark web (inteligência de fóruns e marketplaces clandestinos) e fontes técnicas (honeypots, sandboxes, telemetria). A combinação inteligente dessas fontes, com validação cruzada e correlação, é o que produz inteligência confiável e acionável.'
      }
    ]
  },

  cti_4: {
    title: 'Indicadores de Compromisso (IOCs)',
    icon: 'fingerprint',
    steps: [
      {
        type: 'intro',
        icon: 'fingerprint',
        title: 'Indicadores de Compromisso (IOCs)',
        text: 'Indicadores de Compromisso (IOCs) são vestígios forenses que evidenciam a ocorrência de uma intrusão ou atividade maliciosa em um sistema ou rede. Funcionam como a "assinatura digital" do ataque, permitindo detectar, bloquear e investigar incidentes. Compreender os tipos de IOC, seu ciclo de vida e as diferenças em relação aos IOAs é fundamental para a prática de CTI.'
      },
      {
        type: 'content',
        title: 'Tipos de IOCs',
        text: 'Os IOCs podem assumir diversas formas, cada uma adequada a diferentes cenários de detecção: hashes de arquivos (MD5, SHA1, SHA256) para identificar malware conhecido; endereços IP maliciosos usados em C2 ou scanning; domínios e URLs de phishing ou payload hosting; assinaturas YARA para detectar padrões binários ou textuais em arquivos; regras Sigma para correlação de eventos em logs; expressões regulares para identificar padrões em tráfego de rede; e email headers indicativos de phishing. Quanto mais específico o IOC, maior a precisão, mas menor a vida útil.'
      },
      {
        type: 'diagram',
        title: 'Ciclo de Vida dos IOCs',
        text: 'O ciclo de vida de um IOC segue um processo contínuo desde a descoberta até a eventual expiração, à medida que os adversários modificam sua infraestrutura.',
        diagram: 'flow',
        items: [
          'Descoberta',
          'Análise',
          'Compartilhamento',
          'Bloqueio',
          'Expiração'
        ]
      },
      {
        type: 'content',
        title: 'IOCs vs IOAs (Indicators of Attack)',
        text: 'Enquanto IOCs são evidências de que um compromisso já ocorreu (abordagem reativa), IOAs (Indicators of Attack) focam na detecção de comportamento malicioso em andamento (abordagem proativa). IOCs respondem a perguntas como "o que já aconteceu?" (hash, IP usado), enquanto IOAs focam em "o que está acontecendo agora?" (padrões de execução, movimentação lateral, alterações de registro). IOAs são mais difíceis de definir mas oferecem detecção mais precoce. Na prática, ambos são complementares: IOCs bloqueiam ameaças conhecidas, IOAs identificam comportamentos suspeitos mesmo sem assinatura conhecida.',
        highlight: true
      },
      {
        type: 'content',
        title: 'Compartilhamento de IOCs',
        text: 'O compartilhamento eficiente de IOCs depende de formatos padronizados e plataformas de colaboração. STIX (Structured Threat Information Expression) é a linguagem padrão para representar inteligência de ameaças, incluindo IOCs, TTPs e contexto. TAXII (Trusted Automated eXchange of Indicator Information) define o protocolo de transporte para compartilhamento automatizado. MISP permite compartilhamento em comunidades de confiança com correlação automática. Sigma oferece formato genérico para regras de detecção em SIEM. A padronização garante interoperabilidade entre ferramentas e organizações.'
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'Qual a diferença fundamental entre IOC e IOA?',
        options: [
          'IOC é mais rápido que IOA',
          'IOC indica que o compromisso já ocorreu; IOA indica atividade em andamento',
          'IOC é usado apenas em redes; IOA apenas em endpoints',
          'Não há diferença, são sinônimos'
        ],
        correctIndex: 1,
        explanation: 'IOCs são evidências de que um compromisso já aconteceu (hash, IP malicioso já identificado), enquanto IOAs detectam comportamento malicioso em andamento (movimentação lateral, execução suspeita), permitindo resposta mais proativa.'
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'Qual formato padronizado é utilizado para compartilhar IOCs de forma interoperável?',
        options: [
          'JSON simples',
          'CSV',
          'STIX/TAXII',
          'PDF'
        ],
        correctIndex: 2,
        explanation: 'STIX define uma linguagem padronizada para representar inteligência de ameaças, e TAXII define o protocolo de transporte automatizado. Juntos, permitem compartilhamento interoperável entre diferentes plataformas e organizações.'
      },
      {
        type: 'conclusion',
        title: 'Indicadores de Compromisso',
        text: 'IOCs são vestígios forenses que indicam compromisso (hashes, IPs, domínios, regras YARA). Diferenciam-se de IOAs, que detectam comportamento em andamento. O compartilhamento eficaz usa padrões como STIX/TAXII e plataformas como MISP. IOCs têm ciclo de vida limitado e exigem constante atualização. A combinação de IOCs e IOAs oferece detecção em profundidade.'
      }
    ]
  },

  cti_5: {
    title: 'Análise de Ameaças (TTPs)',
    icon: 'target',
    steps: [
      {
        type: 'intro',
        icon: 'target',
        title: 'Análise de Ameaças - TTPs',
        text: 'TTPs (Tactics, Techniques, and Procedures) descrevem o comportamento dos adversários em diferentes níveis de abstração. Enquanto IOCs mudam rapidamente, TTPs refletem padrões comportamentais mais estáveis e duradouros. Compreender TTPs permite identificar grupos de ameaças, antecipar movimentos e construir defesas resilientes que não dependem de indicadores voláteis.'
      },
      {
        type: 'content',
        title: 'O que são TTPs?',
        text: 'TTPs decompõem o comportamento adversário em três níveis hierárquicos. Tática (Tactic) representa o "o quê" - o objetivo estratégico do adversário em cada etapa (ex.: execução, persistência, exfiltração). Técnica (Technique) descreve "como" a tática é implementada (ex.: execução via PowerShell, persistência via serviço Windows). Procedimento (Procedure) é a implementação específica e detalhada da técnica por um grupo ou campanha (ex.: comandos exatos, scripts, ferramentas). Quanto mais detalhado o nível, mais volátil ele tende a ser, mas mais útil para detecção imediata.',
        highlight: true
      },
      {
        type: 'diagram',
        title: 'Hierarquia das TTPs',
        text: 'A hierarquia TTP organiza o conhecimento sobre adversários em três níveis de abstração, do mais estratégico ao mais operacional.',
        diagram: 'flow',
        items: [
          'Tática (O quê?)',
          'Técnica (Como?)',
          'Procedimento (Detalhes)'
        ]
      },
      {
        type: 'content',
        title: 'Agrupamento por TTPs',
        text: 'O agrupamento de ameaças por TTPs permite categorizar adversários em famílias com base em seu comportamento, não apenas nos indicadores utilizados. APTs (Advanced Persistent Threats) como APT29 (Cozy Bear) e Lazarus Group são caracterizados por operações sofisticadas, patrocinadas por estados-nação, com múltiplas fases e amplo conjunto de TTPs. Cybercrime groups como REvil e LockBit operam com ransomware-as-a-service, focando em monetização rápida. Hacktivists como Anonymous utilizam TTPs mais simples e ruidosas, priorizando visibilidade. A análise de TTPs permite atribuição com grau variável de confiança.'
      },
      {
        type: 'content',
        title: 'Diamond Model',
        text: 'O Diamond Model é uma estrutura analítica que descreve qualquer atividade maliciosa através de quatro dimensões interconectadas: Adversário (quem está por trás do ataque), Capacidade (quais ferramentas e técnicas são utilizadas), Infraestrutura (quais recursos computacionais são empregados - IPs, domínios, servidores) e Vítima (quem é alvo). As arestas do diamante representam as relações entre essas dimensões, formando um grafo de análise. O modelo permite mapear eventos aparentemente isolados a campanhas maiores, identificar padrões de infraestrutura compartilhada e fazer atribuição com base em sobreposição de capacidades.'
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'Por que TTPs são considerados mais valiosos que IOCs para inteligência de ameaças de longo prazo?',
        options: [
          'São mais fáceis de coletar',
          'Mudam com menos frequência que IOCs',
          'Não exigem análise especializada',
          'São sempre específicos de cada grupo'
        ],
        correctIndex: 1,
        explanation: 'Enquanto IOCs (hashes, IPs) podem mudar em minutos com novas campanhas, TTPs refletem padrões comportamentais enraizados na forma de operar dos grupos, mudando com pouca frequência. Isso os torna mais confiáveis para atribuição e defesa de longo prazo.'
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'O Diamond Model analisa atividades maliciosas sob quantas dimensões fundamentais?',
        options: [
          '2',
          '3',
          '4',
          '6'
        ],
        correctIndex: 2,
        explanation: 'O Diamond Model opera com quatro dimensões: Adversário, Capacidade (ferramentas/TTPs), Infraestrutura (IPs, domínios) e Vítima. As relações entre essas dimensiones formam um grafo analítico para correlação de eventos.'
      },
      {
        type: 'conclusion',
        title: 'Análise de Ameaças (TTPs)',
        text: 'TTPs decompõem o comportamento adversário em Táticas (objetivos), Técnicas (métodos) e Procedimentos (implementações específicas). São mais estáveis que IOCs e permitem agrupar ameaças por padrão comportamental. O Diamond Model complementa a análise com quatro dimensões (Adversário, Capacidade, Infraestrutura, Vítima) para correlação e atribuição.'
      }
    ]
  },

  cti_6: {
    title: 'Frameworks de Inteligência',
    icon: 'grid',
    steps: [
      {
        type: 'intro',
        icon: 'grid',
        title: 'Frameworks de Inteligência',
        text: 'Frameworks de inteligência fornecem estruturas padronizadas para classificar, analisar e comunicar informações sobre ameaças cibernéticas. Eles organizam o conhecimento sobre TTPs adversárias em taxonomias compreensíveis, permitindo que equipes de segurança compartilhem linguagem comum, avaliem cobertura defensiva e identifiquem lacunas. Os principais frameworks são MITRE ATT&CK, Cyber Kill Chain e Unified Kill Chain.'
      },
      {
        type: 'content',
        title: 'MITRE ATT&CK',
        text: 'MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) é o framework mais adotado globalmente para classificar TTPs adversárias. Organiza o conhecimento em 14 táticas (as fases do ataque) contendo centenas de técnicas e sub-técnicas específicas. Abrange plataformas como Windows, macOS, Linux, Cloud (AWS, Azure, GCP), Network, Containers e Mobile. Permite mapear controles de segurança contra técnicas específicas, realizar gap analysis, simular adversários (emulação baseada em grupos reais) e priorizar investimentos em detecção com base nas técnicas mais relevantes para cada setor.'
      },
      {
        type: 'diagram',
        title: 'As 14 Táticas do MITRE ATT&CK',
        text: 'O MITRE ATT&CK Enterprise organiza o ciclo de vida do ataque em 14 táticas sequenciais, desde o reconhecimento inicial até o impacto final nos alvos.',
        diagram: 'flow',
        items: [
          'Recon',
          'Resource Dev',
          'Access',
          'Execution',
          'Persistence',
          'Priv Esc',
          'Defense Evasion',
          'Cred Access',
          'Discovery',
          'Lateral Move',
          'Collection',
          'C2',
          'Exfil',
          'Impact'
        ]
      },
      {
        type: 'content',
        title: 'Cyber Kill Chain (Lockheed Martin)',
        text: 'A Cyber Kill Chain, desenvolvida pela Lockheed Martin, descreve as 7 etapas sequenciais de um ataque cibernético: Reconhecimento (mapeamento do alvo), Weaponização (acoplamento de payload ao vetor), Entrega (transmissão do payload ao alvo), Exploração (ativação do código), Instalação (estabelecimento de persistência), Comando e Controle (C2 - canal de comunicação com atacante) e Ações sobre Objetivos (exfiltração, destruição, ransomware). O modelo é linear e focado no ataque externo, sendo menos adequado para ameaças internas ou ataques que não seguem sequência estrita.',
        highlight: true
      },
      {
        type: 'content',
        title: 'Unified Kill Chain (UKC)',
        text: 'A Unified Kill Chain foi desenvolvida para superar as limitações dos modelos anteriores, integrando a Cyber Kill Chain com o MITRE ATT&CK. Organiza 18 fases em 3 ciclos principais: Ciclo 1 (In) - foca na entrada do adversário no ambiente, desde o reconhecimento até o estabelecimento de persistência; Ciclo 2 (Through) - cobre a movimentação lateral, escalonamento de privilégios e consolidação do controle interno; Ciclo 3 (Out) - aborda a coleta de dados, comando e controle e exfiltração. A UKC reconhece que ataques modernos são iterativos e nem sempre lineares.'
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'Para que serve o MITRE ATT&CK na prática de CTI?',
        options: [
          'Substituir firewalls e antivírus',
          'Fornecer linguagem padronizada para classificar TTPs de adversários',
          'Realizar varreduras de vulnerabilidades automaticamente',
          'Gerenciar patches de sistemas operacionais'
        ],
        correctIndex: 1,
        explanation: 'O MITRE ATT&CK é um framework de conhecimento que padroniza a classificação de TTPs adversárias, permitindo que equipes de segurança compartilhem linguagem comum, avaliem cobertura defensiva e mapeiem controles contra técnicas específicas.'
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'Em qual fase da Cyber Kill Chain ocorre o estabelecimento do canal de comunicação entre o atacante e o sistema comprometido?',
        options: [
          'Exploração',
          'Instalação',
          'Comando e Controle (C2)',
          'Ações sobre Objetivos'
        ],
        correctIndex: 2,
        explanation: 'A fase de Comando e Controle (C2) é onde o atacante estabelece um canal de comunicação com o sistema comprometido, permitindo enviar comandos, receber dados exfiltrados e manter acesso remoto.'
      },
      {
        type: 'conclusion',
        title: 'Frameworks de Inteligência',
        text: 'Os principais frameworks são MITRE ATT&CK (14 táticas com centenas de técnicas, padronização global), Cyber Kill Chain (7 etapas lineares do ataque externo) e Unified Kill Chain (18 fases em 3 ciclos, integrando os modelos anteriores). Cada framework tem aplicações específicas, e o uso combinado deles oferece a visão mais completa para análise de ameaças e planejamento defensivo.'
      }
    ]
  },

  cti_7: {
    title: 'Coleta e Análise de Dados',
    icon: 'server',
    steps: [
      {
        type: 'intro',
        icon: 'server',
        title: 'Coleta e Análise de Dados',
        text: 'A coleta e análise de dados constituem o núcleo operacional da CTI. Coletar dados de forma eficiente e analisá-los com rigor metodológico é o que separa inteligência genuína de meros dados agregados. Este módulo aborda as diferenças entre coleta passiva e ativa, técnicas analíticas fundamentais e o processo de enriquecimento de dados para gerar contexto acionável.'
      },
      {
        type: 'content',
        title: 'Coleta Passiva vs Ativa',
        text: 'A coleta passiva observa e captura dados sem interagir diretamente com o alvo ou alertá-lo da presença do analista. Exemplos incluem: monitoramento de tráfego de rede (PCAP), análise de logs, coleta de OSINT sem interação direta, e raspagem de fóruns públicos. Vantagens: baixo risco de detecção e legalmente mais segura. A coleta ativa envolve interação direta com o alvo ou sistema, como: scans de porta, consultas DNS, sondagens Shodan, engenharia social controlada e interação em honeypots. Vantagens: dados mais ricos e específicos. A escolha entre passiva e ativa depende do contexto legal, do risco operacional e do tipo de inteligência necessária.'
      },
      {
        type: 'diagram',
        title: 'Fluxo de Processamento de Dados',
        text: 'O pipeline de inteligência transforma dados brutos de fontes diversas em inteligência processada através de estágios de normalização, filtragem, armazenamento e correlação.',
        diagram: 'io',
        items: [
          'Fontes (Dados Brutos)',
          'Normalização (Filtro)',
          'Armazenamento (Correlação)'
        ]
      },
      {
        type: 'content',
        title: 'Técnicas de Análise',
        text: 'A análise de dados em CTI emprega múltiplas técnicas complementares: Análise de Padrões identifica regularidades em dados aparentemente desconexos (ex.: mesmas horas de operação em ataques de diferentes IPs); Análise de Grafos mapeia relações entre entidades (IPs, domínios, hashes) para revelar infraestruturas compartilhadas e clusters de atividade; Análise Temporal estuda a evolução de campanhas ao longo do tempo, identificando sazonalidades e mudanças de TTPs; Análise de Atribuição correlaciona múltiplos eixos de evidência (lingüística, infraestrutura, TTPs, horários operacionais) para associar atividades a grupos específicos com níveis de confiança graduados.'
      },
      {
        type: 'content',
        title: 'Enriquecimento de Dados',
        text: 'Dados brutos raramente carregam contexto suficiente para tomada de decisão. O enriquecimento agrega camadas de informação a indicadores brutos: geolocalização de IPs (país, cidade, ASN), consultas WHOIS (proprietário de domínio, data de registro, emails associados), Passive DNS (histórico de resoluções DNS identificando mudanças de infraestrutura), reputação de arquivos em múltiplos antivírus, metadados de certificados SSL/TLS e informações de ASN. Por exemplo, um IP bruto ganha contexto quando enriquecido: "IP X.X.X.X hospeda 15 domínios maliciosos, registrados há 3 dias via registrar Y, todos resolvendo para o mesmo servidor em país Z".'
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'Qual a diferença fundamental entre coleta passiva e ativa?',
        options: [
          'Passiva é mais rápida que ativa',
          'Passiva observa sem interagir com o alvo; ativa interage diretamente',
          'Passiva coleta apenas dados de rede; ativa coleta dados de pessoas',
          'Não há diferença prática significativa'
        ],
        correctIndex: 1,
        explanation: 'Coleta passiva observa e captura dados sem interação direta com o alvo (ex.: monitoramento de tráfego), enquanto a coleta ativa envolve interação direta (ex.: scans, consultas) que podem ser detectadas pelo adversário.'
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'Por que o enriquecimento de dados é uma etapa crítica no processo de inteligência?',
        options: [
          'Porque aumenta o volume de dados armazenados',
          'Porque dados brutos sem contexto têm valor limitado para tomada de decisão',
          'Apenas para cumprir requisitos regulatórios',
          'Porque automatiza completamente a análise'
        ],
        correctIndex: 1,
        explanation: 'Dados brutos como um IP ou hash isolado têm valor limitado. O enriquecimento adiciona contexto (geolocalização, WHOIS, reputação, relacionamentos) que transforma um indicador estático em inteligência acionável para resposta a incidentes.'
      },
      {
        type: 'conclusion',
        title: 'Coleta e Análise de Dados',
        text: 'A coleta pode ser passiva (observação sem interação, menor risco) ou ativa (interação direta, dados mais ricos). A análise emprega técnicas de padrões, grafos, temporal e atribuição. O enriquecimento agrega contexto vital (geolocalização, WHOIS, Passive DNS) a indicadores brutos, transformando dados em inteligência acionável para tomada de decisão.'
      }
    ]
  },

  cti_8: {
    title: 'Relatórios e Disseminação',
    icon: 'file-text',
    steps: [
      {
        type: 'intro',
        icon: 'file-text',
        title: 'Relatórios e Disseminação',
        text: 'Inteligência que não é comunicada de forma eficaz não gera valor. A fase de disseminação é onde o trabalho analítico se traduz em produtos que informam decisões e orientam ações defensivas. Este módulo aborda os diferentes tipos de produtos de inteligência, boas práticas de elaboração de relatórios e os canais de disseminação mais eficazes para cada público.'
      },
      {
        type: 'content',
        title: 'Produtos de Inteligência',
        text: 'Os produtos de inteligência devem ser adaptados ao público-alvo em três níveis. Produtos Executivos (Estratégicos) são relatórios concisos de 1 a 2 páginas voltados a C-level (CISO, CIO, board), focados em impacto nos negócios, riscos estratégicos, tendências macro e recomendações de alto nível. Produtos Táticos são direcionados a gerentes e líderes de equipe, contendo análises de campanhas, gaps de cobertura, recomendações de ferramentas e priorização de recursos. Produtos Técnicos/Operacionais são detalhados para analistas e operadores de SOC, incluindo IOCs brutos, regras YARA/Sigma, playbooks de resposta e correlações detalhadas.'
      },
      {
        type: 'diagram',
        title: 'Níveis de Produtos de Inteligência',
        text: 'Os produtos de inteligência são organizados em três níveis hierárquicos, cada um atendendo a um público específico com nível de detalhamento e formato adequados.',
        diagram: 'flow',
        items: [
          'Executivos (Estratégico)',
          'Gerentes (Tático)',
          'Analistas (Técnico)'
        ]
      },
      {
        type: 'content',
        title: 'Boas Práticas na Elaboração',
        text: 'Relatórios de inteligência eficazes seguem princípios fundamentais: Objetivo claro - cada produto deve responder a um requisito de inteligência específico; Acionável - o leitor deve saber o que fazer com a informação (bloquear, investigar, atualizar política); Baseado em Evidências - todas as alegações devem ser suportadas por dados e fontes citadas; Oportuno - inteligência atrasada perde valor, mesmo que precisa; Claro e Conciso - linguagem direta, sem jargão desnecessário para públicos não-técnicos; Auditável - metodologia e fontes documentadas para permitir verificação; Classificado adequadamente - TLP (Traffic Light Protocol) para controle de compartilhamento.',
        highlight: true
      },
      {
        type: 'content',
        title: 'Canais de Disseminação',
        text: 'A escolha do canal de disseminação depende da urgência, volume e público-alvo: APIs automatizadas (REST, STIX/TAXII) para integração direta com SIEMs e firewalls, permitindo bloqueio automatizado de IOCs; Plataformas de compartilhamento como MISP e ThreatConnect para comunidades de confiança; Briefings e reuniões periódicas para discussão de cenários complexos e alinhamento estratégico; Dashboards em tempo real para visualização de indicadores-chave; E-mail e mensageria segura (Signal, Wickr) para alertas urgentes e inteligência de alta sensibilidade; Portais web com controle de acesso para consulta sob demanda.'
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'Qual formato de relatório é mais adequado para comunicar inteligência a executivos C-level?',
        options: [
          'Relatório técnico detalhado com todos os IOCs',
          'Briefing executivo de 1 a 2 páginas com impacto nos negócios',
          'Planilha com dados brutos de telemetria',
          'Código fonte de regras de detecção'
        ],
        correctIndex: 1,
        explanation: 'Executivos C-level precisam de informações concisas, focadas em impacto nos negócios, riscos estratégicos e recomendações de alto nível. Briefings de 1 a 2 páginas são o formato ideal para esse público.'
      },
      {
        type: 'question',
        title: 'Verificação de Aprendizado',
        question: 'Qual a característica mais importante de um produto de inteligência eficaz?',
        options: [
          'Ser visualmente bonito',
          'Ser acionável - o leitor sabe o que fazer com a informação',
          'Conter o máximo de dados possível',
          'Ser o mais longo e detalhado possível'
        ],
        correctIndex: 1,
        explanation: 'A característica mais importante é que o produto seja acionável (actionable): o consumidor deve entender claramente qual ação tomar com base na inteligência recebida, seja bloquear um IOC, ajustar uma regra ou atualizar uma política.'
      },
      {
        type: 'conclusion',
        title: 'Relatórios e Disseminação',
        text: 'A disseminação efetiva de inteligência requer produtos adaptados ao público (executivo, tático, técnico), seguindo boas práticas de clareza, acionabilidade e oportunidade. Os canais variam de APIs automatizadas (STIX/TAXII) a briefings presenciais. O objetivo final é que a inteligência produza ação concreta: bloqueio, investigação, ajuste de política ou decisão estratégica informada.'
      }
    ]
  },
  redteam_1: {
    title: 'Introdução ao Red Team',
    icon: 'flame-outline',
    steps: [
      {
        type: 'intro',
        icon: 'flame-outline',
        title: 'Bem-vindo ao Red Team',
        text: 'O Red Team é uma abordagem ofensiva de segurança cibernética que simula ataques reais contra uma organização. Diferente de um pentest convencional, o Red Team opera de forma contínua e estratégica, testando não apenas sistemas, mas também processos e pessoas. O objetivo é identificar vulnerabilidades antes que agentes maliciosos o façam, fortalecendo a postura de segurança como um todo.'
      },
      {
        type: 'content',
        title: 'Red Team vs Pentest',
        text: 'O pentest é um teste pontual e delimitado, geralmente focado em encontrar falhas técnicas em um escopo definido. O Red Team, por outro lado, é uma operação contínua e orientada a objetivos, simulando um adversário real. Enquanto o pentest busca quantidade de vulnerabilidades, o Red Team busca impacto real — como acessar dados sensíveis ou se mover lateralmente na rede, mesmo que precise usar múltiplas técnicas e vetores.',
        highlight: true
      },
      {
        type: 'diagram',
        title: 'Estrutura de Equipes',
        text: 'As operações de segurança são organizadas em equipes com funções distintas que trabalham em conjunto para proteger a organização.',
        diagram: 'flow',
        items: [
          'Red Team (Ataque)',
          'Purple Team (Integração)',
          'Blue Team (Defesa)'
        ]
      },
      {
        type: 'content',
        title: 'Habilidades Essenciais',
        text: 'Um profissional de Red Team precisa dominar diversas áreas: programação (Python, C, PowerShell), redes e protocolos, sistemas operacionais (Windows e Linux), engenharia reversa, exploração de vulnerabilidades, e engenharia social. Além disso, habilidades de comunicação e escrita são fundamentais para documentar achados e apresentar relatórios executivos. A mentalidade de adversário — pensar como um atacante — é o diferencial mais importante.'
      },
      {
        type: 'question',
        title: 'Teste seus conhecimentos',
        question: 'Qual a principal diferença entre Red Team e um pentest tradicional?',
        options: [
          'Red Team é mais barato que pentest',
          'Red Team é uma operação contínua e orientada a objetivos, enquanto o pentest é um teste pontual e delimitado',
          'Pentest utiliza ferramentas automáticas e Red Team não',
          'Não há diferença significativa'
        ],
        correctIndex: 1,
        explanation: 'O pentest é pontual e focado em escopo técnico, enquanto o Red Team opera de forma contínua simulando adversários reais, buscando impacto estratégico.'
      },
      {
        type: 'question',
        title: 'Reforce o aprendizado',
        question: 'O que é o Purple Team?',
        options: [
          'Uma equipe que atua apenas na defesa',
          'Uma equipe que realiza ataques físicos',
          'Uma equipe que integra Red Team e Blue Team para melhorar processos de segurança',
          'Um time de hackers contratado para invadir sistemas'
        ],
        correctIndex: 2,
        explanation: 'O Purple Team é a ponte entre Red e Blue Teams, promovendo integração e colaboração para que os aprendizados dos ataques sejam convertidos em melhorias defensivas.'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        text: 'O Red Team é uma peça fundamental na estratégia de segurança moderna. Ele vai além de encontrar bugs: busca entender o comportamento do adversário, testar a resiliência organizacional e gerar melhorias contínuas. Nas próximas aulas, exploraremos cada fase de uma operação Red Team, desde o planejamento até a entrega do relatório final.'
      }
    ]
  },

  redteam_2: {
    title: 'Planejamento e Escopo',
    icon: 'clipboard-outline',
    steps: [
      {
        type: 'intro',
        icon: 'clipboard-outline',
        title: 'A Base de uma Operação',
        text: 'Todo ataque simulado começa com um planejamento cuidadoso. Definir escopo, regras de engajamento e limites legais é essencial para que a operação seja eficaz, ética e dentro da lei. Uma operação mal planejada pode causar danos reais à infraestrutura ou expor a organização a riscos legais.'
      },
      {
        type: 'content',
        title: 'Regras de Engajamento (RoE)',
        text: 'As Rules of Engagement (RoE) são o documento que define o que pode e o que não pode ser feito durante a operação. Elas estabelecem: alvos autorizados, técnicas permitidas, janelas de execução (horários), limites de dano aceitável, contatos de emergência e procedimentos de parada (kill switch). As RoE devem ser assinadas por todas as partes envolvidas antes do início dos testes.'
      },
      {
        type: 'diagram',
        title: 'Fluxo de Planejamento',
        text: 'O planejamento de uma operação Red Team segue um fluxo estruturado para garantir que todas as etapas sejam cobertas.',
        diagram: 'flow',
        items: [
          'Definir Objetivos',
          'Estabelecer RoE',
          'Mobilizar Equipe',
          'Executar Operação',
          'Reportar Resultados'
        ]
      },
      {
        type: 'content',
        title: 'Autorização Legal',
        text: 'Sem autorização formal por escrito, qualquer teste de invasão é crime. No Brasil, a Lei Carolina Dieckmann (Lei 12.737/2012) e o Marco Civil da Internet tipificam a invasão de dispositivos. A autorização deve ser específica: descrever exatamente quais sistemas serão testados, por qual período, e qual o escopo. Recomenda-se também um seguro de responsabilidade civil para cobrir danos acidentais.',
        highlight: true
      },
      {
        type: 'content',
        title: 'Definição de Objetivos SMART',
        text: 'Os objetivos da operação devem seguir o princípio SMART: Specific (específicos — ex: acessar o banco de dados de clientes), Measurable (mensuráveis — ex: tempo para obter acesso), Achievable (atingíveis — dentro das capacidades da equipe), Relevant (relevantes — alinhados ao risco do negócio), e Time-bound (com prazo — data de início e fim definidos). Isso evita escopos vagos e resultados ambíguos.'
      },
      {
        type: 'question',
        title: 'Teste seus conhecimentos',
        question: 'Qual documento define os limites e regras de um teste de invasão?',
        options: [
          'Acordo de Confidencialidade (NDA)',
          'Regras de Engajamento (RoE)',
          'Política de Segurança da Informação',
          'Contrato de Trabalho'
        ],
        correctIndex: 1,
        explanation: 'As Regras de Engajamento (RoE) estabelecem os limites operacionais, alvos permitidos, técnicas autorizadas e procedimentos de segurança da operação.'
      },
      {
        type: 'question',
        title: 'Reforce o aprendizado',
        question: 'Por que a autorização formal por escrito é essencial antes de iniciar um teste de invasão?',
        options: [
          'Porque sem ela a equipe não consegue instalar ferramentas',
          'Porque sem autorização o teste é crime, podendo configurar invasão de dispositivo',
          'Apenas por questões burocráticas',
          'Porque a autorização garante que o teste será gratuito'
        ],
        correctIndex: 1,
        explanation: 'Realizar testes de invasão sem autorização formal é crime no Brasil e em grande parte do mundo, configurando invasão de dispositivo prevista na Lei 12.737/2012.'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        text: 'O planejamento é a fase mais crítica de uma operação Red Team. Um escopo bem definido, RoE claras e autorização legal robusta protegem tanto a equipe quanto a organização contratante. Com essa base sólida, podemos avançar para a fase de reconhecimento.'
      }
    ]
  },

  redteam_3: {
    title: 'Reconhecimento (Footprinting)',
    icon: 'compass-outline',
    steps: [
      {
        type: 'intro',
        icon: 'compass-outline',
        title: 'Conhecendo o Alvo',
        text: 'O reconhecimento é a primeira fase técnica de uma operação ofensiva. O objetivo é coletar o máximo de informações sobre o alvo antes de realizar qualquer ataque. Quanto mais informações você tiver, maiores as chances de sucesso na exploração. Essa fase é dividida em reconhecimento passivo, semi-passivo e ativo.'
      },
      {
        type: 'content',
        title: 'Footprinting Passivo',
        text: 'O footprinting passivo coleta informações sem interagir diretamente com os sistemas do alvo. Técnicas incluem: consulta a registros WHOIS, pesquisa em redes sociais (LinkedIn, GitHub), motores de busca (Google Dorks), Shodan (dispositivos expostos), Censys, arquivos públicos (Wayback Machine), e vazamentos de dados anteriores (Have I Been Pwned). Esse tipo de reconhecimento é seguro e não deixa rastros.'
      },
      {
        type: 'diagram',
        title: 'Tipos de Reconhecimento',
        text: 'O reconhecimento varia em nível de interação com o alvo, desde totalmente passivo até ativo.',
        diagram: 'flow',
        items: [
          'Passivo (OSINT)',
          'Semi-Passivo (DNS)',
          'Ativo (Scans)'
        ]
      },
      {
        type: 'content',
        title: 'Footprinting Ativo',
        text: 'O reconhecimento ativo envolve interagir diretamente com a infraestrutura do alvo. Ferramentas como Nmap (varredura de portas e serviços), Gobuster (descoberta de diretórios e arquivos), DNS brute force, e scans de banner podem revelar informações valiosas. Cuidado: esse tipo de reconhecimento pode ser detectado por sistemas de IDS/IPS e gerar alertas na equipe de defesa.'
      },
      {
        type: 'content',
        title: 'Google Dorks',
        text: 'Google Dorks é uma técnica avançada de pesquisa que utiliza operadores especiais do Google para encontrar informações expostas. Exemplos: site:exemplo.com intitle:"index of" (diretórios abertos), filetype:sql (arquivos de banco), inurl:wp-admin (painéis WordPress). Cada dork pode revelar desde documentos confidenciais até credenciais vazadas. É uma das técnicas mais poderosas de OSINT.'
      },
      {
        type: 'question',
        title: 'Teste seus conhecimentos',
        question: 'Qual a principal diferença entre footprinting passivo e ativo?',
        options: [
          'Passivo coleta apenas dados financeiros; ativo coleta dados técnicos',
          'Passivo não interage diretamente com o alvo; ativo interage e pode ser detectado',
          'Passivo usa apenas ferramentas pagas; ativo usa apenas ferramentas gratuitas',
          'Não há diferença, são termos intercambiáveis'
        ],
        correctIndex: 1,
        explanation: 'O footprinting passivo coleta dados sem tocar nos sistemas do alvo (OSINT), enquanto o ativo faz varreduras e requisições diretas que podem ser detectadas.'
      },
      {
        type: 'question',
        title: 'Reforce o aprendizado',
        question: 'Qual ferramenta é mais indicada para descobrir portas e serviços ativos em um alvo?',
        options: [
          'Google Dorks',
          'Nmap',
          'Whois',
          'Shodan'
        ],
        correctIndex: 1,
        explanation: 'O Nmap é a ferramenta padrão para varredura de portas e identificação de serviços ativos, sendo essencial no reconhecimento ativo.'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        text: 'O reconhecimento é a fase que mais agrega valor a uma operação. Um bom trabalho de footprinting reduz surpresas e aumenta a eficiência das fases seguintes. Lembre-se: quanto mais você souber sobre o alvo, mais precisas serão suas tentativas de exploração.'
      }
    ]
  },

  redteam_4: {
    title: 'Análise de Vulnerabilidades',
    icon: 'search-circle-outline',
    steps: [
      {
        type: 'intro',
        icon: 'search-circle-outline',
        title: 'Caçando Fraquezas',
        text: 'Com as informações coletadas no reconhecimento, o próximo passo é identificar vulnerabilidades nos sistemas e serviços encontrados. A análise de vulnerabilidades combina ferramentas automáticas com validação manual para separar falsos positivos de achados reais e priorizar os riscos mais críticos.'
      },
      {
        type: 'content',
        title: 'Scanners de Vulnerabilidades',
        text: 'Scanners automatizados agilizam a descoberta de falhas conhecidas. Ferramentas como Nessus (comercial, ampla base de plugins), OpenVAS (open source, mantido pelo Greenbone) e Nuclei (rápido, baseado em templates YAML) são amplamente utilizados. Cada scanner tem pontos fortes: Nessus é robusto em conformidade, OpenVAS é gratuito e abrangente, Nuclei é extremamente veloz e customizável para ataques direcionados.'
      },
      {
        type: 'diagram',
        title: 'Processo de Análise',
        text: 'A análise de vulnerabilidades segue um fluxo que vai da descoberta automatizada até a priorização para exploração.',
        diagram: 'flow',
        items: [
          'Scan Automático',
          'Triagem (Filtro)',
          'Validação Manual',
          'Priorização',
          'Relatório'
        ]
      },
      {
        type: 'content',
        title: 'Validação Manual',
        text: 'Scanners geram falsos positivos — alertas de vulnerabilidades que não existem. A validação manual é o processo de confirmar cada achado testando a vulnerabilidade de forma controlada. Por exemplo, se o scanner aponta SQL Injection, o analista tenta manualmente a injeção para verificar se realmente funciona. Essa etapa separa analistas juniores de seniores e evita retrabalho na fase de exploração.',
        highlight: true
      },
      {
        type: 'content',
        title: 'Priorização de Vulnerabilidades',
        text: 'Nem toda vulnerabilidade deve ser explorada imediatamente. A priorização leva em conta: pontuação CVSS (Common Vulnerability Scoring System), existência de exploit público, criticidade do ativo afetado, impacto potencial no negócio e facilidade de exploração. Uma falha com CVSS 10 em um servidor interno sem dados sensíveis pode ser menos prioritária que uma falha CVSS 7 em um banco de dados de clientes exposto.'
      },
      {
        type: 'question',
        title: 'Teste seus conhecimentos',
        question: 'Por que a validação manual é importante mesmo após usar scanners automatizados?',
        options: [
          'Scanners nunca detectam vulnerabilidades reais',
          'Para confirmar achados e eliminar falsos positivos antes da exploração',
          'Apenas para gerar mais relatórios',
          'Porque scanners não funcionam em redes modernas'
        ],
        correctIndex: 1,
        explanation: 'Scanners geram falsos positivos. A validação manual confirma se a vulnerabilidade realmente existe, evitando desperdício de tempo na exploração de achados inexistentes.'
      },
      {
        type: 'question',
        title: 'Reforce o aprendizado',
        question: 'Qual fator NÃO é utilizado na priorização de vulnerabilidades?',
        options: [
          'Pontuação CVSS',
          'Número de versões do sistema operacional',
          'Existência de exploit público',
          'Impacto potencial no negócio'
        ],
        correctIndex: 1,
        explanation: 'A priorização considera CVSS, exploitabilidade, criticidade do ativo e impacto nos negócios. O número de versões do SO não é um fator de priorização.'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        text: 'A análise de vulnerabilidades é a ponte entre o reconhecimento e a exploração. Com uma lista validada e priorizada de vulnerabilidades, a equipe Red Team sabe exatamente onde concentrar seus esforços para maximizar o impacto dentro do escopo autorizado.'
      }
    ]
  },

  redteam_5: {
    title: 'Exploração (Exploitation)',
    icon: 'flash-outline',
    steps: [
      {
        type: 'intro',
        icon: 'flash-outline',
        title: 'Hora de Agir',
        text: 'A exploração é o momento em que as vulnerabilidades identificadas são efetivamente utilizadas para obter acesso não autorizado a sistemas. Esta fase exige precisão e conhecimento técnico aprofundado, pois o sucesso depende de escolher o exploit certo, na hora certa, e com o payload adequado.'
      },
      {
        type: 'content',
        title: 'Frameworks de Exploração',
        text: 'Frameworks consolidam ferramentas e exploits em uma plataforma unificada. Metasploit (open source, imensa biblioteca de exploits e payloads) é o mais conhecido. Cobalt Strike (comercial, focado em operações Red Team com recursos avançados de C2 e post-exploitation) é amplamente usado em exercícios corporativos. Empire (PowerShell/python puro) é voltado para post-exploitation sem necessidade de arquivos binários no disco.'
      },
      {
        type: 'diagram',
        title: 'Ciclo de Exploração',
        text: 'A exploração segue uma sequência lógica desde o reconhecimento até o estabelecimento de acesso.',
        diagram: 'sequence',
        items: [
          'Recon',
          'Scan',
          'Exploit',
          'Payload',
          'Access'
        ]
      },
      {
        type: 'content',
        title: 'Payloads',
        text: 'O payload é o código executado após o exploit bem-sucedido. Reverse Shell: o alvo se conecta de volta ao atacante (útil quando o alvo está atrás de NAT/firewall). Bind Shell: o atacante se conecta diretamente a uma porta aberta no alvo. Beacon (Cobalt Strike): agente modular que suporta comunicação assíncrona, permitindo controle persistente e discreto. A escolha do payload depende da configuração de rede e do objetivo.'
      },
      {
        type: 'content',
        title: 'Exploração Web',
        text: 'Aplicações web são vetores frequentes de ataque. SQL Injection (SQLi): injeção de comandos SQL para extrair ou manipular dados. Cross-Site Scripting (XSS): execução de scripts no navegador da vítima para roubo de sessões. Remote Code Execution (RCE): execução de comandos no servidor via falhas como upload de arquivos maliciosos ou desserialização insegura. Ferramentas como Burp Suite e SQLMap automatizam parte do processo.'
      },
      {
        type: 'question',
        title: 'Teste seus conhecimentos',
        question: 'Qual a principal diferença entre Reverse Shell e Bind Shell?',
        options: [
          'Reverse Shell é mais rápida que Bind Shell',
          'No Reverse Shell o alvo se conecta ao atacante; no Bind Shell o atacante se conecta ao alvo',
          'Bind Shell só funciona em Windows',
          'Reverse Shell não precisa de exploit'
        ],
        correctIndex: 1,
        explanation: 'Na Reverse Shell, o alvo inicia a conexão de volta ao atacante (útil para transpor firewalls). Na Bind Shell, o atacante conecta-se diretamente ao alvo.'
      },
      {
        type: 'question',
        title: 'Reforce o aprendizado',
        question: 'Qual ferramenta/framework é mais conhecido para exploração automatizada com vasta biblioteca de exploits?',
        options: [
          'Nmap',
          'Metasploit',
          'Wireshark',
          'Burp Suite'
        ],
        correctIndex: 1,
        explanation: 'O Metasploit é o framework mais popular para exploração, com centenas de exploits, payloads e módulos auxiliares integrados.'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        text: 'A exploração é o ápice do trabalho ofensivo, mas é também a fase que requer mais cuidado. Um exploit mal aplicado pode derrubar um serviço ou alertar a defesa. Com o acesso obtido, o próximo passo é consolidar a presença e explorar o ambiente interno.'
      }
    ]
  },

  redteam_6: {
    title: 'Pós-Exploração e Movimento Lateral',
    icon: 'git-branch-outline',
    steps: [
      {
        type: 'intro',
        icon: 'git-branch-outline',
        title: 'Consolidando o Acesso',
        text: 'Obter o primeiro acesso raramente é suficiente. O verdadeiro objetivo do Red Team é demonstrar o impacto máximo — o que geralmente exige escalar privilégios, mover-se lateralmente pela rede e acessar sistemas de alto valor. Esta fase separa operações superficiais de exercícios realmente eficazes.'
      },
      {
        type: 'content',
        title: 'Escalação de Privilégios',
        text: 'Com um acesso inicial (geralmente como usuário comum), o atacante busca se tornar administrador/root. No Windows: exploits de kernel (PrintNightmare, JuicyPotato), abuso de serviços (AlwaysInstallElevated), tokens de acesso. No Linux: SUID misconfiguration, sudo exploits, kernel exploits (DirtyPipe), cron jobs mal configurados. Ferramentas como WinPEAS e LinPEAS automatizam a enumeração de vetores de escalação.'
      },
      {
        type: 'diagram',
        title: 'Fluxo de Movimento Lateral',
        text: 'Após o acesso inicial, o Red Team expande sua presença na rede até alcançar os alvos definidos.',
        diagram: 'flow',
        items: [
          'Acesso Inicial',
          'Escalação Privilégios',
          'Movimento Lateral',
          'Acesso ao Alvo'
        ]
      },
      {
        type: 'content',
        title: 'Movimento Lateral',
        text: 'Movimento lateral é o deslocamento entre sistemas na rede usando credenciais ou sessões comprometidas. Técnicas comuns: Pass-the-Hash (reutilizar hash NTLM sem conhecer a senha), Pass-the-Ticket (Kerberos), abuso de PSExec e WinRM, e exploração de relações de confiança entre máquinas. O BloodHound mapeia visualmente caminhos de ataque em ambientes Active Directory, identificando rotas de movimento lateral de forma gráfica.',
        highlight: true
      },
      {
        type: 'content',
        title: 'Persistência',
        text: 'Persistência garante que o acesso não seja perdido mesmo após reinicializações ou tentativas de remediação. Técnicas incluem: criação de usuários ocultos, backdoors em serviços (WMI, Scheduled Tasks), implantação de web shells, hooks em DLLs do sistema, e certificados digitais maliciosos. A persistência deve ser sutil para não ser detectada por ferramentas de monitoramento como EDR e SIEM.'
      },
      {
        type: 'question',
        title: 'Teste seus conhecimentos',
        question: 'O que é um ataque Pass-the-Hash?',
        options: [
          'Descriptografar senhas armazenadas no banco de dados',
          'Reutilizar o hash NTLM de uma senha para autenticar em outros sistemas sem conhecer a senha original',
          'Enviar hashes de senha por e-mail',
          'Um tipo de ataque DDoS'
        ],
        correctIndex: 1,
        explanation: 'Pass-the-Hash utiliza o hash NTLM capturado para autenticar em outros sistemas na rede, sem precisar conhecer ou descriptografar a senha original.'
      },
      {
        type: 'question',
        title: 'Reforce o aprendizado',
        question: 'Qual ferramenta mapeia graficamente caminhos de ataque em ambientes Active Directory?',
        options: [
          'Nmap',
          'BloodHound',
          'Metasploit',
          'Wireshark'
        ],
        correctIndex: 1,
        explanation: 'BloodHound utiliza teoria dos grafos para mapear relações e permissões no Active Directory, revelando rotas de movimento lateral e escalação de privilégios.'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        text: 'Pós-exploração e movimento lateral são o que diferenciam um exercício Red Team maduro de um simples scan de vulnerabilidades. A capacidade de navegar pelo ambiente e demonstrar impacto real no negócio é o que entrega valor ao cliente e fortalece a segurança organizacional.'
      }
    ]
  },

  redteam_7: {
    title: 'Engenharia Social',
    icon: 'chatbubbles-outline',
    steps: [
      {
        type: 'intro',
        icon: 'chatbubbles-outline',
        title: 'O Elo Mais Fraco',
        text: 'Por mais robusta que seja a segurança técnica, o fator humano continua sendo o elo mais vulnerável em qualquer organização. A engenharia social explora a psicologia humana para obter acesso a informações ou sistemas. Estima-se que mais de 70% dos ataques cibernéticos envolvam algum elemento de engenharia social.'
      },
      {
        type: 'content',
        title: 'Os 6 Princípios de Persuasão de Cialdini',
        text: 'Robert Cialdini identificou seis princípios que explicam por que pessoas são persuadidas: Reciprocidade (tendência a retornar favores), Escassez (oportunidades parecem mais valiosas quando limitadas), Autoridade (tendência a obedecer figuras de autoridade), Consistência (desejo de ser consistente com compromissos anteriores), Afeição (pessoas dizem sim a quem gostam), e Consenso (seguir o comportamento da maioria). Engenheiros sociais usam esses princípios para manipular vítimas.'
      },
      {
        type: 'diagram',
        title: 'Tipos de Ataques de Engenharia Social',
        text: 'A engenharia social pode ser executada através de diversos vetores, cada um com características específicas.',
        diagram: 'flow',
        items: [
          'Phishing',
          'Vishing',
          'Smishing',
          'Pretexting',
          'Baiting',
          'Tailgating'
        ]
      },
      {
        type: 'content',
        title: 'Phishing: Tipos e Técnicas',
        text: 'Phishing é o envio de mensagens fraudulentas que simulam comunicações legítimas. Variações incluem: Spear Phishing (direcionado a uma pessoa específica, com informações personalizadas), Whaling (visa executivos e alta diretoria), Clone Phishing (cópia de um e-mail legítimo com links maliciosos). Campanhas eficazes usam princípios de urgência e autoridade para reduzir a cautela da vítima.',
        highlight: true
      },
      {
        type: 'content',
        title: 'Outros Vetores',
        text: 'Vishing (voice phishing): chamadas telefônicas fingindo ser suporte técnico ou bancos. Smishing (SMS phishing): mensagens de texto com links maliciosos. Tailgating (ou piggybacking): seguir alguém autorizado para entrar em área restrita. Quishing (QR code phishing): códigos QR falsos direcionando a sites maliciosos, cada vez mais comum com menus digitais e autenticação por QR.'
      },
      {
        type: 'question',
        title: 'Teste seus conhecimentos',
        question: 'Qual princípio de persuasão de Cialdini é explorado quando um atacante se passa por um diretor ou autoridade?',
        options: [
          'Escassez',
          'Autoridade',
          'Reciprocidade',
          'Afeição'
        ],
        correctIndex: 1,
        explanation: 'O princípio da Autoridade explora a tendência natural das pessoas a obedecerem figuras de poder ou autoridade percebida.'
      },
      {
        type: 'question',
        title: 'Reforce o aprendizado',
        question: 'Qual a diferença entre Spear Phishing e Phishing genérico?',
        options: [
          'Spear Phishing é mais fácil de detectar',
          'Spear Phishing é direcionado a uma pessoa específica com mensagens personalizadas',
          'Phishing genérico é sempre em português',
          'Não há diferença, são sinônimos'
        ],
        correctIndex: 1,
        explanation: 'Spear Phishing é uma versão direcionada do phishing, onde o atacante pesquisa a vítima e personaliza a mensagem para aumentar as chances de sucesso.'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        text: 'A engenharia social é uma das armas mais poderosas do Red Team porque explora a confiança e os vieses cognitivos humanos. Testar a conscientização dos funcionários com campanhas controladas de phishing ajuda a organização a fortalecer sua cultura de segurança e reduzir riscos reais.'
      }
    ]
  },

  redteam_8: {
    title: 'Relatórios e Remediação',
    icon: 'document-text-outline',
    steps: [
      {
        type: 'intro',
        icon: 'document-text-outline',
        title: 'Fechando o Ciclo',
        text: 'Um exercício Red Team só se completa quando os resultados são comunicados de forma clara e acionável. O relatório final é a entrega mais importante para o cliente — é ele que justifica o investimento, orienta as correções e documenta as lições aprendidas. Um relatório bem escrito pode transformar uma operação mediana em um enorme sucesso.'
      },
      {
        type: 'content',
        title: 'Estrutura do Relatório',
        text: 'Um relatório Red Team completo possui três camadas: Resumo executivo (para diretoria — linguagem de negócio, impacto financeiro, riscos estratégicos), Análise gerencial (para gerentes — riscos por área, compliance, tendências), e Detalhamento técnico (para equipes de segurança — IPs, portas, comandos, payloads, evidências). Cada seção deve ser auto-suficiente para seu público-alvo.'
      },
      {
        type: 'diagram',
        title: 'Camadas do Relatório',
        text: 'O relatório deve atender diferentes públicos com diferentes níveis de profundidade técnica.',
        diagram: 'flow',
        items: [
          'Executivo (Negócio)',
          'Gerencial (Risco)',
          'Técnico (Detalhes)'
        ]
      },
      {
        type: 'content',
        title: 'Cronologia do Ataque (Timeline)',
        text: 'A timeline documenta cada passo da operação em ordem cronológica: data/hora de cada ação, técnica utilizada, sistemas afetados, e duração entre etapas. Isso permite ao cliente entender exatamente como o ataque progrediu, quanto tempo levou cada fase, e onde a defesa falhou. A timeline também é útil para correlacionar com logs do SIEM e validar a cobertura dos sensores de segurança.'
      },
      {
        type: 'content',
        title: 'Recomendações e Prazos',
        text: 'Cada achado deve vir acompanhado de uma recomendação prática e um prazo sugerido para correção. Exemplo: "Corrigir SQL Injection no endpoint /api/users — prioridade crítica — 48 horas — solução: parametrização de consultas". As recomendações devem ser específicas, testáveis e realistas. Incluir referências a frameworks como NIST, CIS Benchmarks e OWASP agrega credibilidade.',
        highlight: true
      },
      {
        type: 'question',
        title: 'Teste seus conhecimentos',
        question: 'Qual seção do relatório é mais importante para a diretoria executiva?',
        options: [
          'Detalhamento técnico com comandos utilizados',
          'Sumário executivo com impacto no negócio e riscos estratégicos',
          'Lista de ferramentas instaladas',
          'Códigos-fonte dos exploits'
        ],
        correctIndex: 1,
        explanation: 'A diretoria se preocupa com impacto nos negócios, riscos estratégicos e retorno sobre investimento em segurança, não com detalhes técnicos.'
      },
      {
        type: 'question',
        title: 'Reforce o aprendizado',
        question: 'Por que a timeline do ataque é importante no relatório?',
        options: [
          'Apenas para cumprir requisitos de formatação',
          'Porque permite ao cliente entender a progressão do ataque, correlacionar com logs e avaliar a eficácia das defesas',
          'Porque sem timeline o relatório não pode ser publicado',
          'A timeline é opcional e raramente utilizada'
        ],
        correctIndex: 1,
        explanation: 'A timeline mostra a sequência real dos eventos, permitindo à equipe de defesa correlacionar com logs do SIEM e identificar onde os controles falharam.'
      },
      {
        type: 'conclusion',
        title: 'Conclusão',
        text: 'O relatório final é a materialização de todo o trabalho do Red Team. Ele transforma descobertas técnicas em valor de negócio, orienta investimentos em segurança e fortalece a postura defensiva da organização. Um relatório bem estruturado, com linguagem adequada para cada público, é a chave para que as recomendações sejam implementadas e o ciclo de melhoria contínua se complete.'
      }
    ]
  },
  blueteam_1: {
    title: 'Introdução ao Blue Team',
    icon: 'shield-outline',
    steps: [
      {
        type: 'intro',
        icon: 'shield-outline',
        title: 'O que é Blue Team',
        text: 'O Blue Team representa o lado da defesa em segurança cibernética. Enquanto o Red Team ataca para testar vulnerabilidades, o Blue Team protege a organização contra ameaças reais. Sua atuação é contínua, envolvendo monitoramento de sistemas, análise de logs, resposta a incidentes e implementação de controles de segurança. O objetivo principal é manter a confidencialidade, integridade e disponibilidade dos ativos da empresa.'
      },
      {
        type: 'content',
        title: 'Responsabilidades do Blue Team',
        text: 'As principais responsabilidades incluem: monitoramento contínuo de redes e sistemas para identificar atividades suspeitas; detecção precoce de ameaças através de assinaturas e análise comportamental; resposta rápida a incidentes para conter e mitigar danos; hardening de sistemas e aplicações para reduzir a superfície de ataque; e threat hunting para buscar proativamente por comprometimentos ainda não detectados. Cada uma dessas atividades exige ferramentas especializadas e profissionais treinados.'
      },
      {
        type: 'diagram',
        title: 'Ciclo de Defesa',
        text: 'O Blue Team opera em um ciclo contínuo de quatro fases principais que se retroalimentam:',
        diagram: 'flow',
        items: ['Prevenção', 'Detecção', 'Resposta', 'Recuperação']
      },
      {
        type: 'content',
        title: 'Defesa em Profundidade',
        text: 'Defesa em profundidade (defense in depth) é uma estratégia que utiliza múltiplas camadas de segurança para proteger os ativos. Se uma camada falha, a próxima ainda oferece proteção. As cinco camadas principais são: (1) Segurança Física — controle de acesso a datacenters e salas de servidores; (2) Segurança de Rede — firewalls, IDS/IPS, segmentação de rede; (3) Segurança de Endpoint — antivírus, EDR, controle de aplicações; (4) Segurança de Aplicação — WAF, revisão de código, testes de penetração; (5) Segurança de Dados — criptografia, DLP, backup.'
      },
      {
        type: 'content',
        title: 'Ferramentas Essenciais',
        text: 'O Blue Team utiliza um conjunto de ferramentas integradas: SIEM (Security Information and Event Management) como Splunk e ELK para centralização e correlação de logs; EDR (Endpoint Detection and Response) como CrowdStrike e SentinelOne para monitoramento de endpoints; IDS/IPS como Snort e Suricata para detecção e prevenção de intrusões na rede; SOAR (Security Orchestration Automation and Response) como Palo Alto XSOAR para automatizar respostas a incidentes. A integração dessas ferramentas forma a espinha dorsal de um SOC (Security Operations Center).'
      },
      {
        type: 'question',
        title: 'Blue Team vs Red Team',
        question: 'Qual é a principal diferença entre Blue Team e Red Team?',
        options: [
          'Blue Team ataca sistemas e Red Team defende',
          'Blue Team defende sistemas e Red Team ataca simulando invasores',
          'Ambos realizam as mesmas funções de monitoramento',
          'Blue Team gerencia senhas e Red Team gerencia firewalls'
        ],
        correctIndex: 1,
        explanation: 'O Blue Team é responsável pela defesa dos sistemas, monitoramento, detecção e resposta a incidentes. O Red Team atua ofensivamente, simulando ataques reais para testar a postura de segurança da organização. Essa dinâmica permite melhorar continuamente as defesas.'
      },
      {
        type: 'question',
        title: 'Defesa em Profundidade',
        question: 'O que significa o conceito de "defesa em profundidade"?',
        options: [
          'Utilizar um único firewall de alta performance',
          'Apenas criptografar todos os dados da empresa',
          'Empregar múltiplas camadas de segurança sobrepostas',
          'Contratar uma equipe de segurança terceirizada'
        ],
        correctIndex: 2,
        explanation: 'Defesa em profundidade é a estratégia de implementar múltiplas camadas de segurança (física, rede, endpoint, aplicação, dados) de forma que, se uma camada for comprometida, as demais continuem protegendo o ambiente. Nenhuma camada isolada é suficiente.'
      },
      {
        type: 'conclusion',
        title: 'Base da Segurança Defensiva',
        text: 'O Blue Team é a espinha dorsal da segurança cibernética de qualquer organização. Compreender suas responsabilidades, a estratégia de defesa em profundidade e as ferramentas disponíveis é o primeiro passo para construir uma postura de segurança sólida. Nos próximos módulos, aprofundaremos cada uma dessas áreas.'
      }
    ]
  },

  blueteam_2: {
    title: 'Monitoramento e SIEM',
    icon: 'pulse-outline',
    steps: [
      {
        type: 'intro',
        icon: 'pulse-outline',
        title: 'O que é SIEM',
        text: 'SIEM (Security Information and Event Management) é uma solução que centraliza, normaliza e correlaciona logs de múltiplas fontes em tempo real. Ele combina duas funções: SIM (Security Information Management) — armazenamento e análise de logs históricos; e SEM (Security Event Management) — processamento e correlação de eventos em tempo real. Ferramentas como Splunk, IBM QRadar, Elastic Security e ArcSight são exemplos populares no mercado.'
      },
      {
        type: 'content',
        title: 'Arquitetura de um SIEM',
        text: 'A arquitetura típica de um SIEM é composta por três camadas principais: (1) Coletores/Forwarders — agentes leves instalados nos servidores e dispositivos que capturam logs e os enviam ao SIEM; (2) Agregadores/Indexadores — servidores que recebem, normalizam e indexam os logs, transformando dados brutos em formato padronizado; (3) Motor de Correlação — o cérebro do SIEM, que aplica regras, assinaturas e algoritmos de machine learning para identificar padrões suspeitos e gerar alertas. A escalabilidade é fundamental, pois um SIEM empresarial pode processar terabytes de logs por dia.'
      },
      {
        type: 'diagram',
        title: 'Fluxo de Dados no SIEM',
        text: 'O fluxo de dados em um SIEM segue três estágios: entrada, processamento e saída.',
        diagram: 'io',
        items: ['Fontes (Logs)', 'SIEM (Correlação)', 'Alertas (Ação)']
      },
      {
        type: 'content',
        title: 'Correlação de Eventos',
        text: 'A correlação de eventos é o processo de analisar múltiplos logs de diferentes fontes para identificar padrões que indicam atividades maliciosas. Existem três abordagens principais: (1) Correlação baseada em regras — utiliza condições pré-definidas como "5 falhas de login em 1 minuto de IPs diferentes"; (2) Correlação estatística — estabelece uma baseline do comportamento normal e alerta quando há desvios significativos; (3) Correlação com Machine Learning — algoritmos que aprendem padrões complexos e detectam anomalias sutis que regras fixas não capturariam.'
      },
      {
        type: 'content',
        title: 'Criação de Alertas Efetivos',
        text: 'Criar alertas efetivos é um dos maiores desafios em operações de SIEM. Um bom alerta deve ser específico (alta precisão), acionável (contém informação suficiente para resposta) e com alta relação sinal-ruído. É melhor ter 10 alertas bem calibrados que geram resposta imediata do que 1000 alertas que a equipe ignora. Ajustes contínuos de thresholds, whitelisting de falsos positivos e revisão periódica das regras são práticas essenciais. O SNR (Signal-to-Noise Ratio) mede exatamente isso: quantos alertas relevantes versus falsos positivos o sistema produz.',
        highlight: 'Um SIEM sem regras bem calibradas rapidamente se torna um "gerador de ruído", levando à fadiga de alertas na equipe de segurança.'
      },
      {
        type: 'question',
        title: 'Função do SIEM',
        question: 'Qual é a função principal de um SIEM?',
        options: [
          'Escaneamento de vulnerabilidades em redes internas',
          'Centralizar, correlacionar e analisar logs de segurança',
          'Gerenciar senhas e autenticação de usuários',
          'Realizar backup de dados corporativos'
        ],
        correctIndex: 1,
        explanation: 'O SIEM centraliza logs de múltiplas fontes, normaliza os dados em formato padronizado, correlaciona eventos para identificar ameaças e gera alertas para a equipe de segurança. Ele não realiza scan de vulnerabilidades, gerenciamento de senhas ou backup.'
      },
      {
        type: 'question',
        title: 'Signal-to-Noise Ratio',
        question: 'O que significa Signal-to-Noise Ratio (SNR) no contexto de SIEM?',
        options: [
          'A relação entre alertas críticos e informativos',
          'A proporção entre alertas reais e falsos positivos',
          'A velocidade de processamento de logs por segundo',
          'A quantidade de fontes de log integradas ao sistema'
        ],
        correctIndex: 1,
        explanation: 'SNR no contexto de SIEM refere-se à proporção entre alertas verdadeiros (signal) e falsos positivos (noise). Um SNR alto significa que a maioria dos alertas gerados são relevantes e acionáveis. Um SNR baixo indica excesso de ruído, o que leva à fadiga da equipe e pode fazer com que incidentes reais passem despercebidos.'
      },
      {
        type: 'conclusion',
        title: 'Centro Nervoso do SOC',
        text: 'O SIEM é o centro nervoso de qualquer SOC moderno. Sua capacidade de coletar, normalizar e correlacionar grandes volumes de dados transforma logs brutos em inteligência acionável. Dominar a arquitetura, correlação de eventos e criação de alertas efetivos é fundamental para qualquer profissional de Blue Team.'
      }
    ]
  },

  blueteam_3: {
    title: 'Detecção de Intrusões (IDS/IPS)',
    icon: 'warning-outline',
    steps: [
      {
        type: 'intro',
        icon: 'warning-outline',
        title: 'IDS e IPS',
        text: 'Sistemas de Detecção e Prevenção de Intrusões são componentes críticos da segurança de rede. O IDS (Intrusion Detection System) monitora passivamente o tráfego e alerta quando identifica atividades suspeitas. O IPS (Intrusion Prevention System) vai além: opera inline no fluxo de rede e pode bloquear ativamente o tráfego malicioso em tempo real. Enquanto o IDS é um sistema de alerta, o IPS é um sistema de controle ativo.'
      },
      {
        type: 'content',
        title: 'IDS vs IPS',
        text: 'A diferença fundamental está na posição na rede e na ação: IDS recebe uma cópia do tráfego (modo passivo via span port ou tap), analisa e gera alertas, mas não interfere no tráfego original. IPS fica inline entre a origem e o destino, inspecionando cada pacote antes de encaminhá-lo, podendo descartar, rejeitar ou modificar pacotes maliciosos. Isso torna o IPS mais eficaz na prevenção, mas também mais crítico — um IPS mal configurado pode causar indisponibilidade. Ambos são complementares e frequentemente implantados juntos.'
      },
      {
        type: 'diagram',
        title: 'Posicionamento na Rede',
        text: 'O diagrama mostra como IDS e IPS se posicionam em uma arquitetura de rede típica:',
        diagram: 'flow',
        items: ['Internet', 'Firewall', 'IPS (Inline)', 'Switch', 'IDS (Monitor)']
      },
      {
        type: 'content',
        title: 'Métodos de Detecção',
        text: 'Existem três métodos principais de detecção: (1) Detecção por Assinatura — compara o tráfego com padrões conhecidos de ataques. É rápida e precisa para ameaças conhecidas, mas não detecta ataques novos (zero-day). Snort e Suricata usam esse método extensivamente; (2) Detecção por Anomalia — estabelece uma baseline do tráfego normal e alerta quando há desvios. Pode detectar ataques desconhecidos, mas gera mais falsos positivos; (3) Detecção por Estado — analisa o estado das conexões e protocolos, identificando violações como pacotes fora de ordem ou flags inválidas.'
      },
      {
        type: 'content',
        title: 'Ferramentas Principais',
        text: 'As ferramentas mais utilizadas incluem: Snort — IDS/IPS open source mais conhecido, usa regras para detecção por assinatura com grande comunidade e atualizações frequentes; Suricata — alternativa moderna ao Snort, suporta multithreading, GPU, e inspeção profunda de pacotes em alta performance; Zeek (antigo Bro) — framework de análise de rede focado em metadata e segurança, excelente para correlação e integração com SIEM; Security Onion — distribuição Linux completa que integra Suricata, Zeek, Elastic Stack e outras ferramentas em uma plataforma unificada de monitoramento.'
      },
      {
        type: 'question',
        title: 'IDS vs IPS',
        question: 'Qual a principal diferença entre IDS e IPS?',
        options: [
          'IDS protege servidores e IPS protege redes',
          'IDS apenas detecta e alerta, IPS bloqueia ativamente o tráfego',
          'IDS é hardware e IPS é software',
          'IPS é mais barato que IDS'
        ],
        correctIndex: 1,
        explanation: 'O IDS opera em modo passivo, recebendo uma cópia do tráfego para análise e alerta. O IPS opera inline, inspecionando cada pacote em tempo real e podendo bloquear, descartar ou rejeitar tráfego malicioso antes que atinja o destino.'
      },
      {
        type: 'question',
        title: 'Zero-Day Detection',
        question: 'Qual método de detecção é capaz de identificar ataques zero-day?',
        options: [
          'Detecção por assinatura',
          'Detecção por anomalia',
          'Detecção por lista negra de IPs',
          'Detecção por hash de arquivos'
        ],
        correctIndex: 1,
        explanation: 'A detecção por anomalia estabelece uma baseline do comportamento normal e detecta desvios, o que permite identificar ataques desconhecidos (zero-day) que não possuem assinatura cadastrada. A detecção por assinatura só reconhece padrões já conhecidos.'
      },
      {
        type: 'conclusion',
        title: 'Primeira Linha de Defesa',
        text: 'IDS e IPS formam a primeira linha de defesa de rede contra ataques cibernéticos. Conhecer as diferenças, os métodos de detecção e as ferramentas disponíveis é essencial para projetar uma arquitetura de segurança eficaz. A combinação de múltiplos métodos de detecção aumenta significativamente a cobertura contra ameaças conhecidas e desconhecidas.'
      }
    ]
  },

  blueteam_4: {
    title: 'Análise de Logs e Forense',
    icon: 'search-outline',
    steps: [
      {
        type: 'intro',
        icon: 'search-outline',
        title: 'Logs como Fonte da Verdade',
        text: 'Em segurança cibernética, logs são a fonte da verdade. Todo dispositivo — servidores, firewalls, roteadores, estações de trabalho, aplicações — gera registros de eventos que documentam cada ação ocorrida no sistema. Uma análise forense bem-sucedida depende diretamente da qualidade, integridade e disponibilidade desses logs. Sem logs adequados, investigar um incidente é como tentar resolver um crime sem testemunhas ou evidências.'
      },
      {
        type: 'content',
        title: 'Fontes de Logs Críticas',
        text: 'As fontes de logs mais importantes para investigação forense incluem: logs de autenticação (Windows Event ID 4624/4625, /var/log/auth.log no Linux) que registram logins bem-sucedidos e falhos; logs de firewall que mostram conexões permitidas e bloqueadas; logs de DNS que revelam consultas a domínios maliciosos; logs de proxy web que registram URLs acessadas; logs de servidores web (Apache, Nginx, IIS) com detalhes de requisições HTTP; e logs de EDR que capturam execução de processos, conexões de rede e alterações no registro.'
      },
      {
        type: 'diagram',
        title: 'Processo Forense',
        text: 'A investigação forense segue um processo estruturado de quatro fases:',
        diagram: 'flow',
        items: ['Preservação', 'Aquisição', 'Análise', 'Conclusão']
      },
      {
        type: 'content',
        title: 'Cadeia de Custódia',
        text: 'A cadeia de custódia é o documento que registra todo o histórico de manuseio de uma evidência digital, desde sua coleta até a apresentação em juízo. Cada transferência de posse deve ser documentada com: identificação de quem coletou, data e hora, local, método de coleta, hash de integridade (SHA-256), e assinatura de cada pessoa que teve acesso. Uma cadeia de custódia quebrada pode tornar a evidência inadmissível em processos legais. A integridade é mantida através de hashes criptográficos calculados antes e após cada manuseio.',
        highlight: 'A cadeia de custódia deve ser mantida rigorosamente: "documente quem, quando, onde, como e por que acessou a evidência". Sem isso, a prova digital perde valor legal.'
      },
      {
        type: 'content',
        title: 'Ferramentas Forenses',
        text: 'As principais ferramentas utilizadas em análise forense: Volatility — framework de análise de memória RAM, considerado padrão ouro para extrair processos, conexões de rede, drivers e artefatos da memória volátil; Autopsy — plataforma forense para análise de discos, recuperação de arquivos deletados, análise de timeline e carving de dados; Wireshark — analisador de tráfego de rede para captura e inspeção de pacotes; FTK Imager — ferramenta para criar imagens forenses bit-a-bit de discos e mídias; Redline — coleta e análise de artefatos de memória e sistema.'
      },
      {
        type: 'question',
        title: 'Cadeia de Custódia',
        question: 'Por que a cadeia de custódia é importante na perícia forense?',
        options: [
          'Para acelerar o processo de análise dos dados',
          'Para garantir a autenticidade e integridade das evidências',
          'Para reduzir o custo do armazenamento de logs',
          'Para automatizar a coleta de evidências'
        ],
        correctIndex: 1,
        explanation: 'A cadeia de custódia documenta todo o histórico de manuseio da evidência digital, garantindo que ela não foi adulterada. Se a cadeia for quebrada ou mal documentada, a evidência perde valor legal e pode ser descartada em um processo judicial.'
      },
      {
        type: 'question',
        title: 'Padrão Ouro',
        question: 'Qual ferramenta é considerada o padrão ouro para análise de memória volátil?',
        options: [
          'Wireshark',
          'Autopsy',
          'Volatility',
          'FTK Imager'
        ],
        correctIndex: 2,
        explanation: 'Volatility é o framework mais utilizado e respeitado para análise forense de memória RAM. Ele permite extrair processos, conexões de rede, drivers carregados, credenciais e outros artefatos da memória volátil, mesmo de sistemas comprometidos.'
      },
      {
        type: 'conclusion',
        title: 'Investigação Baseada em Evidências',
        text: 'A análise de logs e a forense digital são habilidades essenciais para o Blue Team. Saber quais logs coletar, como preservar evidências seguindo a cadeia de custódia e quais ferramentas utilizar em cada etapa da investigação faz a diferença entre um incidente contido e um desastre corporativo.'
      }
    ]
  },

  blueteam_5: {
    title: 'Resposta a Incidentes',
    icon: 'flash-outline',
    steps: [
      {
        type: 'intro',
        icon: 'flash-outline',
        title: 'Ciclo de Resposta a Incidentes',
        text: 'Resposta a Incidentes (IR — Incident Response) é o processo estruturado de lidar com violações de segurança. Um plano de IR bem definido reduz o tempo de contenção, minimiza danos, preserva evidências e acelera a recuperação. O NIST (National Institute of Standards and Technology) define um ciclo de quatro fases que serve como referência global para equipes de segurança.'
      },
      {
        type: 'content',
        title: 'As 4 Fases do NIST',
        text: 'O NIST SP 800-61 define quatro fases para IR: (1) Preparação — a fase mais crítica, envolve criar políticas, adquirir ferramentas, treinar equipes e estabelecer canais de comunicação antes que um incidente ocorra; (2) Detecção e Análise — identificar sinais de incidente através de alertas SIEM, relatos de usuários, ou scans externos; validar e classificar a severidade; (3) Contenção, Erradicação e Recuperação — conter o incidente para evitar propagação, remover a causa raiz, restaurar sistemas a partir de backups confiáveis; (4) Pós-Incidente — realizar análise post-mortem, documentar lições aprendidas, atualizar políticas e runbooks.'
      },
      {
        type: 'diagram',
        title: 'Fases do Incident Response',
        text: 'A sequência das fases de IR segundo o NIST:',
        diagram: 'sequence',
        items: ['Preparação', 'Detecção', 'Contenção', 'Pós-Incidente']
      },
      {
        type: 'content',
        title: 'Classificação de Incidentes',
        text: 'Incidentes são classificados por severidade em 4 níveis: Severidade 1 (Crítico) — comprometimento de sistemas críticos, exfiltração de dados sensíveis, ransomware em produção. Resposta imediata 24/7; Severidade 2 (Alto) — acesso não autorizado a sistemas internos sem evidência de exfiltração; Severidade 3 (Médio) — scanners de vulnerabilidade, phishing isolado sem comprometimento; Severidade 4 (Baixo) — tentativas de acesso bloqueadas por firewall, falso positivo confirmado. A classificação determina o tempo de resposta, os recursos alocados e o nível de escalonamento.'
      },
      {
        type: 'content',
        title: 'Runbooks de Resposta',
        text: 'Runbooks são manuais passo-a-passo que padronizam a resposta para cada tipo de incidente. Um runbook de ransomware, por exemplo, inclui: (1) Isolar imediatamente o host infectado da rede; (2) Desligar compartilhamentos de arquivos; (3) Coletar imagem de memória e disco do sistema comprometido; (4) Identificar variante do ransomware; (5) Verificar se há chave de descriptografia disponível; (6) Notificar jurídico e compliance se dados sensíveis forem afetados; (7) Restaurar a partir de backup limpo; (8) Documentar IOCs e atualizar regras de detecção. Runbooks reduzem o tempo de resposta e garantem consistência.'
      },
      {
        type: 'question',
        title: 'NIST IR Phases',
        question: 'Qual é a primeira fase do ciclo de Resposta a Incidentes segundo o NIST?',
        options: [
          'Detecção e Análise',
          'Contenção',
          'Preparação',
          'Pós-Incidente'
        ],
        correctIndex: 2,
        explanation: 'A Preparação é a primeira e mais importante fase do ciclo NIST de IR. É nela que se estabelecem políticas, ferramentas, treinamentos e runbooks antes que um incidente ocorra. Uma organização sem preparação adequada terá uma resposta reativa e desorganizada.'
      },
      {
        type: 'question',
        title: 'Pós-Incidente',
        question: 'Qual é o principal objetivo da fase de Pós-Incidente no NIST?',
        options: [
          'Reinstalar todos os sistemas afetados',
          'Documentar lições aprendidas e melhorar processos',
          'Notificar a polícia federal',
          'Restaurar backups dos servidores'
        ],
        correctIndex: 1,
        explanation: 'A fase de Pós-Incidente foca em analisar o que ocorreu, documentar lições aprendidas, identificar lacunas nos controles de segurança e atualizar políticas e runbooks para prevenir incidentes similares no futuro. É o ciclo de melhoria contínua da segurança.'
      },
      {
        type: 'conclusion',
        title: 'Preparação é a Chave',
        text: 'Resposta a Incidentes não começa quando o alerta dispara — começa muito antes, na fase de preparação. Com runbooks bem definidos, classificação clara de severidade e uma equipe treinada, é possível conter incidentes em minutos e não em horas ou dias. O ciclo NIST fornece a estrutura necessária para uma resposta eficiente e profissional.'
      }
    ]
  },

  blueteam_6: {
    title: 'Threat Hunting',
    icon: 'git-network-outline',
    steps: [
      {
        type: 'intro',
        icon: 'git-network-outline',
        title: 'O que é Threat Hunting',
        text: 'Threat Hunting é a busca proativa por ameaças que já podem estar presentes na rede, mas que não foram detectadas pelos sistemas automatizados de segurança. Diferente do SOC tradicional que reage a alertas, o hunter assume que o ambiente já está comprometido e busca ativamente por sinais de atividade maliciosa. É uma mudança de mentalidade: de reativa para proativa.'
      },
      {
        type: 'content',
        title: 'Por que Hunting é Necessário',
        text: 'Segundo o relatório IBM Cost of a Data Breach, o tempo médio para identificar um vazamento de dados é de aproximadamente 207 dias, e mais 73 dias para contê-lo. Sistemas automatizados como SIEM e EDR dependem de regras e assinaturas conhecidas, deixando lacunas para ataques avançados que usam técnicas living-off-the-land, malware customizado ou movimentação lateral lenta. O Threat Hunting preenche essas lacunas ao procurar ativamente por IoCs (Indicators of Compromise) e IoAs (Indicators of Attack) que os sistemas automatizados podem perder.'
      },
      {
        type: 'diagram',
        title: 'Abordagens de Hunting',
        text: 'As três principais abordagens de Threat Hunting:',
        diagram: 'flow',
        items: ['Hipótese (Intel)', 'Baseline (Anomalia)', 'Indicadores (IOC/IOA)']
      },
      {
        type: 'content',
        title: 'Metodologias de Hunting',
        text: 'As três principais metodologias são: (1) Baseada em Hipóteses — utiliza inteligência de ameaças (threat intelligence) para criar hipóteses sobre TTPs (Tactics, Techniques and Procedures) específicos de atores conhecidos. Exemplo: "O grupo APT29 usa PowerShell para movimento lateral — vamos procurar por execuções anômalas de PowerShell"; (2) Baseada em Indicadores — busca por IOCs conhecidos como hashes de malware, IPs maliciosos, domínios suspeitos; (3) Baseada em Anomalias — análise estatística do comportamento baselines para identificar desvios, como um funcionário acessando sistemas às 3h da manhã ou transferências de dados acima do normal.'
      },
      {
        type: 'content',
        title: 'Processo de 6 Passos',
        text: 'O processo de Threat Hunting segue 6 passos: (1) Formular Hipótese — baseada em inteligência, relatórios ou mudanças no ambiente; (2) Coletar Dados — logs, netflow, eventos de endpoint, DNS; (3) Executar Análise — ferramentas como SIEM, EDR e notebooks; (4) Investigar Descobertas — aprofundar em achados suspeitos; (5) Detectar e Responder — se confirmado, acionar IR e criar nova detecção; (6) Documentar e Melhorar — registrar TTPs, atualizar runbooks e regras de detecção. Cada caça, mesmo sem encontrar ameaças, gera conhecimento sobre o ambiente.',
        highlight: 'Threat Hunting não é uma ferramenta — é uma mentalidade. O caçador de ameaças não espera o alarme tocar; ele sai deliberadamente em busca do invasor.'
      },
      {
        type: 'question',
        title: 'Threat Hunting vs SOC',
        question: 'Qual a principal diferença entre Threat Hunting e operações tradicionais de SOC?',
        options: [
          'Threat Hunting é reativo, SOC é proativo',
          'Threat Hunting é proativo, SOC tradicional é reativo a alertas',
          'Ambos têm a mesma abordagem de monitoramento',
          'SOC usa machine learning e Threat Hunting não'
        ],
        correctIndex: 1,
        explanation: 'O SOC tradicional opera de forma reativa: aguarda alertas do SIEM e EDR para responder. O Threat Hunting é proativo: o hunter assume que o ambiente pode estar comprometido e busca ativamente por ameaças que os sistemas automatizados podem não ter detectado.'
      },
      {
        type: 'question',
        title: 'Abordagem Intel',
        question: 'Qual abordagem de Threat Hunting utiliza inteligência sobre grupos de ameaças para direcionar as buscas?',
        options: [
          'Baseada em anomalias',
          'Baseada em indicadores',
          'Baseada em hipóteses',
          'Baseada em machine learning'
        ],
        correctIndex: 2,
        explanation: 'A abordagem baseada em hipóteses utiliza threat intelligence sobre TTPs de atores específicos para criar hipóteses de busca. Por exemplo, se um relatório indica que o grupo APT29 usa certas técnicas, o hunter cria uma hipótese e procura por essas técnicas no ambiente.'
      },
      {
        type: 'conclusion',
        title: 'Caça Proativa',
        text: 'Threat Hunting representa a evolução natural das operações de segurança. Em um cenário onde ataques avançados evitam detecção automatizada, a busca proativa por ameaças não é opcional — é necessária. Combinar inteligência de ameaças, análise de anomalias e investigação aprofundada permite descobrir comprometimentos que passariam despercebidos por meses.'
      }
    ]
  },

  blueteam_7: {
    title: 'Hardening e Configuração Segura',
    icon: 'lock-closed-outline',
    steps: [
      {
        type: 'intro',
        icon: 'lock-closed-outline',
        title: 'O que é Hardening',
        text: 'Hardening é o processo de eliminar vulnerabilidades desnecessárias em sistemas, reduzindo a superfície de ataque. Isso envolve desabilitar serviços não utilizados, remover softwares desnecessários, aplicar patches de segurança, configurar permissões restritivas e seguir boas práticas de segurança. Um sistema recém-instalado frequentemente vem com configurações inseguras por padrão — o hardening ajusta cada parâmetro para minimizar riscos.'
      },
      {
        type: 'content',
        title: 'Princípios de Hardening',
        text: 'Três princípios fundamentais guiam o hardening: (1) Menor Privilégio — cada usuário, processo ou serviço deve ter apenas as permissões mínimas necessárias para executar sua função. Um usuário comum não precisa de acesso root; (2) Defesa em Profundidade — múltiplas camadas de proteção, como firewalls, controle de acesso, criptografia e monitoramento; (3) Secure by Default — sistemas devem vir configurados de forma segura desde a instalação. Qualquer exceção deve ser intencional e documentada.'
      },
      {
        type: 'diagram',
        title: 'Áreas de Hardening',
        text: 'O hardening deve ser aplicado em todas as camadas da infraestrutura:',
        diagram: 'io',
        items: ['Sistema Operacional', 'Rede (Segmentação)', 'Aplicação (Config)', 'Dados (Criptografia)']
      },
      {
        type: 'content',
        title: 'Hardening Windows e Linux',
        text: 'No Windows, práticas incluem: desabilitar serviços como SMBv1, Remote Desktop desnecessário, aplicar GPOs restritivas, habilitar Windows Defender e Credential Guard, configurar AppLocker para controle de aplicações, desabilitar PowerShell scripting para usuários comuns. No Linux: remover pacotes não necessários, configurar sudo com privilégios granulares, desabilitar login root via SSH, usar chaves SSH em vez de senhas, configurar auditd para auditoria, aplicar hardening de kernel via sysctl (desabilitar IP forwarding, ICMP redirect, etc.), e configurar fail2ban para proteção contra força bruta.'
      },
      {
        type: 'content',
        title: 'Automação de Hardening',
        text: 'Automação é essencial para manter a consistência em ambientes com centenas ou milhares de servidores. As principais ferramentas: Ansible — ferramenta de automação sem agente que pode aplicar playbooks de hardening em servidores Windows e Linux simultaneamente; CIS Benchmarks — guias de configuração segura publicados pelo Center for Internet Security, cobrindo mais de 100 plataformas, com recomendações categorizadas por nível de segurança; Lynis — scanner de hardening open source para Linux, macOS e Unix, que analisa mais de 300 parâmetros de segurança; OpenSCAP — framework para avaliação de conformidade com padrões como STIG, CIS e PCI-DSS.'
      },
      {
        type: 'question',
        title: 'Menor Privilégio',
        question: 'O que significa o princípio do menor privilégio no contexto de hardening?',
        options: [
          'Conceder todas as permissões e depois remover as desnecessárias',
          'Cada usuário e processo deve ter apenas as permissões mínimas necessárias',
          'Apenas administradores podem usar o sistema',
          'Senhas devem ser trocadas a cada 24 horas'
        ],
        correctIndex: 1,
        explanation: 'O princípio do menor privilégio determina que cada entidade (usuário, processo, serviço) deve receber apenas as permissões estritamente necessárias para executar suas funções legítimas. Reduzir permissões ao mínimo necessário diminui o impacto potencial de um comprometimento.'
      },
      {
        type: 'question',
        title: 'CIS Benchmarks',
        question: 'O que são CIS Benchmarks?',
        options: [
          'Testes de penetração automatizados para redes corporativas',
          'Guias de configuração segura para sistemas e aplicações',
          'Ferramentas de monitoramento de tráfego em tempo real',
          'Certificações profissionais para analistas de segurança'
        ],
        correctIndex: 1,
        explanation: 'CIS Benchmarks são guias de boas práticas de configuração segura publicados pelo Center for Internet Security. Eles contêm recomendações específicas e testadas para hardening de sistemas operacionais, servidores, aplicações e dispositivos de rede.'
      },
      {
        type: 'conclusion',
        title: 'Segurança desde a Base',
        text: 'Hardening é a base de qualquer estratégia de segurança. Um sistema bem configurado é muito mais difícil de comprometer do que um sistema com configurações padrão. Combinar princípios como menor privilégio com automação via Ansible e CIS Benchmarks permite manter ambientes seguros e consistentes mesmo em larga escala.'
      }
    ]
  },

  blueteam_8: {
    title: 'Continuidade e DRP',
    icon: 'sync-outline',
    steps: [
      {
        type: 'intro',
        icon: 'sync-outline',
        title: 'BCP vs DRP',
        text: 'BCP (Business Continuity Plan) e DRP (Disaster Recovery Plan) são planos complementares mas distintos. O BCP foca em manter as operações do negócio funcionando durante uma crise — mesmo que de forma reduzida. O DRP é um subconjunto do BCP que trata especificamente da recuperação dos sistemas de TI após um desastre. Enquanto o BCP responde "como o negócio continua?", o DRP responde "como os sistemas voltam a operar?"'
      },
      {
        type: 'content',
        title: 'BCP — Continuidade do Negócio',
        text: 'O BCP abrange: identificação de processos críticos do negócio e seu impacto na operação; definição de equipes de crise e árvore de comunicação; locais alternativos de operação (sites quentes, mornos ou frios); acordos com fornecedores e parceiros; planos de comunicação com clientes e stakeholders. O BCP não é apenas TI — envolve todas as áreas da empresa. Um exemplo: se um incêndio atinge o prédio, o BCP define como os funcionários trabalham remotamente, quais sistemas são prioridade, e como atender clientes durante a recuperação.'
      },
      {
        type: 'diagram',
        title: 'Métricas de Recuperação',
        text: 'Três métricas fundamentais definem os objetivos de continuidade e recuperação:',
        diagram: 'flow',
        items: ['RTO (Tempo Máximo)', 'RPO (Perda Máxima)', 'RTA (Recuperação)']
      },
      {
        type: 'content',
        title: 'RTO e RPO',
        text: 'RTO (Recovery Time Objective) é o tempo máximo aceitável para restaurar um sistema após um desastre. Exemplo: o sistema de vendas online tem RTO de 2 horas — se cair às 14h, deve estar operacional até às 16h. RPO (Recovery Point Objective) é a quantidade máxima de dados que a empresa pode perder. Exemplo: o banco de dados tem RPO de 15 minutos — em caso de desastre, no máximo 15 minutos de transações podem ser perdidos. RTO e RPO são definidos pelo negócio, não pela TI, e impactam diretamente as estratégias de backup e infraestrutura.'
      },
      {
        type: 'content',
        title: 'Estratégias de Backup e Regra 3-2-1',
        text: 'A regra 3-2-1 é o padrão ouro para backup: (1) Mantenha 3 cópias dos dados (um original e duas réplicas); (2) Utilize 2 mídias ou formatos diferentes (disco local, nuvem, fita); (3) Tenha 1 cópia offsite (fora do local físico principal). Estratégias comuns incluem: backup completo semanal com incrementais diários; replicação síncrona para sites próximos (baixa latência, RPO quase zero) ou assíncrona para longas distâncias. Testar a restauração regularmente é tão importante quanto fazer o backup — um backup que não pode ser restaurado não é um backup.',
        highlight: 'A regra 3-2-1 é o padrão ouro de backup: 3 cópias, 2 mídias diferentes, 1 offsite. Lembre-se: backup sem teste é apenas um arquivo ocupando espaço.'
      },
      {
        type: 'question',
        title: 'RTO vs RPO',
        question: 'Qual a diferença entre RTO e RPO?',
        options: [
          'RTO é perda de dados máxima, RPO é tempo de recuperação máximo',
          'RTO é tempo de recuperação máximo, RPO é perda de dados máxima',
          'RTO é para hardware, RPO é para software',
          'Ambos medem a mesma coisa com nomes diferentes'
        ],
        correctIndex: 1,
        explanation: 'RTO (Recovery Time Objective) define o tempo máximo para restaurar um sistema. RPO (Recovery Point Objective) define a quantidade máxima de dados que pode ser perdida. Enquanto RTO mede tempo de inatividade, RPO mede perda de dados.'
      },
      {
        type: 'question',
        title: 'Regra 3-2-1',
        question: 'O que determina a regra 3-2-1 de backup?',
        options: [
          '3 backups completos por ano, 2 incrementais, 1 diferencial',
          '3 cópias dos dados, 2 mídias diferentes, 1 cópia offsite',
          '3 servidores, 2 redes, 1 firewall',
          '3 senhas, 2 fatores de autenticação, 1 administrador'
        ],
        correctIndex: 1,
        explanation: 'A regra 3-2-1 estabelece: mantenha 3 cópias dos dados (1 produção + 2 backups), em 2 tipos de mídia diferentes (ex: disco local + nuvem), com 1 cópia armazenada fora do site principal (offsite). Essa estratégia protege contra falhas de hardware, desastres locais e ransomware.'
      },
      {
        type: 'conclusion',
        title: 'Resiliência Organizacional',
        text: 'Continuidade de negócios e recuperação de desastres são sobre resiliência. Não se trata de "se" um desastre vai acontecer, mas "quando". Definir RTO e RPO adequados, implementar a regra 3-2-1 de backup e testar os planos regularmente são práticas essenciais para garantir que a organização sobreviva e se recupere de qualquer incidente.'
      }
    ]
  },
  gestao_1: {
    title: 'Introdução à Gestão de Vulnerabilidades',
    icon: 'analytics-outline',
    steps: [
      {
        type: 'intro',
        icon: 'analytics-outline',
        title: 'Bem-vindo à Gestão de Vulnerabilidades',
        text: 'A Gestão de Vulnerabilidades é um processo contínuo e sistemático para identificar, classificar, priorizar e corrigir falhas de segurança em ativos de TI. Diferente de ações pontuais, ela estabelece um ciclo permanente de melhoria da postura de segurança organizacional.'
      },
      {
        type: 'content',
        title: 'Ciclo de Gestão de Vulnerabilidades',
        text: 'O ciclo completo é composto por 6 fases: Descoberta (inventariar ativos), Identificação (scanners e testes), Classificação (severidade técnica), Priorização (contexto de negócio), Remediação (aplicação de correções) e Verificação (re-scan para confirmar). Cada fase alimenta a seguinte em um loop contínuo.'
      },
      {
        type: 'diagram',
        title: 'Fluxo do Ciclo',
        text: 'As fases se repetem continuamente para manter a segurança atualizada.',
        diagram: 'flow',
        items: ['Descobrir', 'Identificar', 'Priorizar', 'Remediar', 'Verificar']
      },
      {
        type: 'content',
        title: 'Por que a Gestão de Vulnerabilidades é Crucial?',
        text: 'Mais de 20.000 CVEs são publicadas anualmente. Estudos mostram que 60% das violações de dados exploram vulnerabilidades conhecidas para as quais uma correção já existia. Manter um programa de VM eficiente reduz drasticamente a superfície de ataque.',
        highlight: '60% das breaches exploram vulnerabilidades conhecidas não corrigidas'
      },
      {
        type: 'content',
        title: 'Desafios Comuns',
        text: 'Volume excessivo de alertas, alta taxa de falsos positivos, shadow IT (ativos não inventariados), falta de contexto de negócio nas priorizações, e dificuldade de coordenar patches sem impactar operações são os principais obstáculos.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual é a primeira fase do ciclo de Gestão de Vulnerabilidades?',
        options: ['Remediação', 'Identificação', 'Descoberta (Inventário)', 'Priorização'],
        correctIndex: 2,
        explanation: 'A descoberta/inventário é a fase inicial pois não é possível proteger o que não se conhece. Sem um inventário completo de ativos, as demais fases não têm alicerce.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Por que a Gestão de Vulnerabilidades deve ser um processo contínuo?',
        options: [
          'Porque os scanners precisam ser executados semanalmente',
          'Novas vulnerabilidades (CVEs) surgem diariamente',
          'Para cumprir requisitos de auditoria',
          'Porque patches são lançados uma vez por mês'
        ],
        correctIndex: 1,
        explanation: 'Milhares de novas CVEs são publicadas todos os anos. Um processo contínuo garante que a organização responda rapidamente a novas ameaças.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'A Gestão de Vulnerabilidades é um ciclo contínuo de descoberta, identificação, classificação, priorização, remediação e verificação. Sem um inventário preciso e um processo bem definido, a organização fica exposta a riscos evitáveis.'
      }
    ]
  },
  gestao_2: {
    title: 'Identificação e Descoberta',
    icon: 'search-circle-outline',
    steps: [
      {
        type: 'intro',
        icon: 'search-circle-outline',
        title: 'A Base da Segurança: Conhecer seus Ativos',
        text: 'Antes de corrigir vulnerabilidades, é preciso saber quais ativos existem na organização. A identificação e descoberta de ativos é o alicerce de todo programa de Gestão de Vulnerabilidades. Sem um inventário completo, scanners cegos deixam lacunas críticas.'
      },
      {
        type: 'content',
        title: 'Inventário de Ativos',
        text: 'O inventário deve cobrir hardware (servidores, estações, notebooks), software (SOs, aplicações, bibliotecas), ambientes cloud (instâncias, containers, serverless) e dispositivos IoT. Ferramentas de CMDB e agentes EDR ajudam a manter esse inventário atualizado automaticamente.'
      },
      {
        type: 'diagram',
        title: 'Fontes de Descoberta',
        text: 'Diferentes fontes alimentam o inventário de ativos da organização.',
        diagram: 'flow',
        items: ['Scans de Rede', 'Agentes (EDR/CMDB)', 'APIs (Cloud)', 'Integração (SIEM)']
      },
      {
        type: 'content',
        title: 'Tipos de Scanners',
        text: 'Scanners de rede (Nessus, OpenVAS) varrem IPs e portas. Scanners web (Burp, ZAP) focam em aplicações web. Scanners de container (Trivy, Grype) analisam imagens. Ferramentas SAST/DAST analisam código fonte e aplicações em execução. Cada tipo cobre uma superfície diferente.'
      },
      {
        type: 'content',
        title: 'Scan Autenticado vs Não-Autenticado',
        text: 'Scans autenticados usam credenciais para acessar profundamente o sistema operacional, identificando patches faltantes, configurações incorretas e softwares instalados. Scans não-autenticados apenas observam o sistema externamente, gerando mais falsos positivos e menos detalhes.',
        highlight: 'Scans autenticados reduzem falsos positivos e fornecem visibilidade muito maior do que scans não-autenticados.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual a principal diferença entre um scan autenticado e um não-autenticado?',
        options: [
          'O scan autenticado é mais rápido',
          'O scan autenticado acessa o sistema com credenciais para análise profunda',
          'O scan não-autenticado é mais preciso',
          'Não há diferença significativa'
        ],
        correctIndex: 1,
        explanation: 'Scans autenticados utilizam credenciais válidas para acessar o sistema internamente, permitindo identificar configurações incorretas e patches ausentes com muito mais precisão.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual ferramenta é especializada em scan de vulnerabilidades em containers?',
        options: ['Nessus', 'OpenVAS', 'Trivy', 'Burp Suite'],
        correctIndex: 2,
        explanation: 'Trivy é uma ferramenta open-source especializada em scan de vulnerabilidades em imagens de container, sistemas de arquivos e repositórios Git.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'A descoberta depende de múltiplas fontes: scans de rede, agentes, APIs cloud e integrações. Scanners autenticados oferecem resultados superiores. Conhecer o inventário completo é pré-requisito para qualquer programa de VM.'
      }
    ]
  },
  gestao_3: {
    title: 'Classificação e Priorização',
    icon: 'funnel-outline',
    steps: [
      {
        type: 'intro',
        icon: 'funnel-outline',
        title: 'Corrigir na Ordem Certa',
        text: 'Organizações lidam com centenas ou milhares de vulnerabilidades simultaneamente. Classificar e priorizar corretamente é essencial para focar esforços nas falhas que realmente representam maior risco ao negócio.'
      },
      {
        type: 'content',
        title: 'Fatores de Priorização',
        text: 'A priorização considera múltiplos fatores: pontuação CVSS (gravidade técnica), exploitabilidade (existe PoC ou exploit ativo?), exposição (o ativo está na internet?), e impacto ao negócio (o sistema é crítico?). Isolar apenas o CVSS leva a decisões equivocadas.'
      },
      {
        type: 'diagram',
        title: 'Fluxo de Priorização',
        text: 'A priorização combina dados técnicos com contexto de negócio.',
        diagram: 'flow',
        items: ['Gravidade Técnica', 'Exploitabilidade', 'Contexto Negócio', 'Prioridade Final']
      },
      {
        type: 'content',
        title: 'Matriz de Risco',
        text: 'A matriz de risco combina probabilidade (chance de exploração) com impacto (dano potencial). Vulnerabilidades com alta probabilidade e alto impacto recebem prioridade máxima. A matriz ajuda a visualizar e comunicar riscos para tomadores de decisão.'
      },
      {
        type: 'content',
        title: 'Priorização Baseada em Risco',
        text: 'Priorização baseada em risco vai além do CVSS ao incorporar contexto de negócio. Uma vulnerabilidade CVSS 7 em um sistema interno de baixa criticidade pode ter prioridade menor que uma CVSS 5 em um sistema exposto na internet que processa dados sensíveis.',
        highlight: 'O contexto de negócio é o fator mais importante na priorização — uma vulnerabilidade crítica em um ativo não crítico pode esperar.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual fator é considerado o mais importante na priorização de vulnerabilidades?',
        options: ['A pontuação CVSS apenas', 'O contexto de negócio', 'A idade da vulnerabilidade', 'O tipo de scanner utilizado'],
        correctIndex: 1,
        explanation: 'O contexto de negócio é fundamental: uma vulnerabilidade em um sistema crítico para operação merece atenção maior que uma em sistema interno de baixo impacto, independentemente da pontuação CVSS.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'A matriz de risco combina quais dois eixos principais?',
        options: [
          'Custo e tempo',
          'Probabilidade e Impacto',
          'Severidade e Urgência',
          'Técnico e Gerencial'
        ],
        correctIndex: 1,
        explanation: 'A matriz de risco cruza probabilidade (chance do evento ocorrer) com impacto (consequência do evento), permitindo classificar riscos em níveis como baixo, médio, alto e crítico.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'Priorizar apenas por CVSS é insuficiente. A priorização baseada em risco incorpora exploitabilidade, exposição e contexto de negócio. A matriz de risco probabilidade x impacto é uma ferramenta visual essencial para comunicação.'
      }
    ]
  },
  gestao_4: {
    title: 'CVSS e Pontuação de Riscos',
    icon: 'bar-chart-outline',
    steps: [
      {
        type: 'intro',
        icon: 'bar-chart-outline',
        title: 'Padronizando a Medição de Riscos',
        text: 'O Common Vulnerability Scoring System (CVSS) é o padrão da indústria para medir a severidade de vulnerabilidades. Mantido pelo FIRST, ele fornece uma pontuação de 0 a 10 que permite comparar vulnerabilidades de forma objetiva.'
      },
      {
        type: 'content',
        title: 'Métricas Base do CVSS',
        text: 'As métricas base incluem: Vetor de Acesso (AV), Complexidade de Acesso (AC), Privilégios (PR), Interação do Usuário (UI), Escopo (S), Confidencialidade (C), Integridade (I) e Disponibilidade (A). Cada métrica tem valores possíveis que afetam a pontuação final.'
      },
      {
        type: 'diagram',
        title: 'Grupos de Métricas CVSS',
        text: 'O CVSS é composto por três grupos de métricas que se complementam.',
        diagram: 'flow',
        items: ['Base (0-10)', 'Temporal (Exploit)', 'Ambiental (Contexto)']
      },
      {
        type: 'content',
        title: 'Vetor CVSS',
        text: 'O vetor CVSS é uma string que codifica todas as métricas. Exemplo: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H representa uma vulnerabilidade explorável remotamente, sem complexidade, sem privilégios, sem interação do usuário, com impacto total em Confidencialidade, Integridade e Disponibilidade — pontuação 9.8 (Crítico).'
      },
      {
        type: 'content',
        title: 'Limitações do CVSS',
        text: 'O CVSS não considera contexto de negócio, exposição real do ativo, existência de mitigação compensatória, ou criticidade do sistema para a organização. Por isso, deve ser usado como insumo, não como única fonte de decisão. A priorização baseada em risco complementa o CVSS.',
        highlight: 'CVSS mede severidade técnica, não risco de negócio. Uma vulnerabilidade CVSS 10 em um sistema isolado pode ser menos urgente que uma CVSS 6 em um sistema crítico exposto.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual é a escala de pontuação do CVSS?',
        options: ['0 a 5', '0 a 100', '0 a 10', '1 a 10'],
        correctIndex: 2,
        explanation: 'O CVSS utiliza uma escala de 0 a 10, onde 0 significa nenhuma severidade e 10 é a pontuação máxima (crítico).'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual das seguintes NÃO é uma métrica do grupo Base do CVSS?',
        options: [
          'Vetor de Acesso (AV)',
          'Complexidade de Acesso (AC)',
          'Custo do Exploit (EC)',
          'Impacto na Confidencialidade (C)'
        ],
        correctIndex: 2,
        explanation: 'Custo do Exploit (EC) faz parte do grupo Temporal, não do grupo Base. As métricas base são: AV, AC, PR, UI, S, C, I e A.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'O CVSS padroniza a severidade técnica em escala 0-10. É composto por métricas Base, Temporal e Ambiental. Apesar de essencial, o CVSS deve ser complementado com contexto de negócio para priorização eficaz.'
      }
    ]
  },
  gestao_5: {
    title: 'Remediação e Mitigação',
    icon: 'hammer-outline',
    steps: [
      {
        type: 'intro',
        icon: 'hammer-outline',
        title: 'Da Descoberta à Correção',
        text: 'Identificar vulnerabilidades é apenas metade do trabalho. A fase de remediação é onde o risco é efetivamente reduzido. Diferentes estratégias podem ser aplicadas dependendo do contexto, urgência e disponibilidade de correções.'
      },
      {
        type: 'content',
        title: 'Tipos de Remediação',
        text: 'Remediação total: aplicação do patch oficial que elimina a vulnerabilidade. Remediação parcial: alteração de configuração que reduz o risco sem eliminar a causa raiz. Controle compensatório: medidas alternativas que mitigam o risco quando o patch não está disponível. Aceitação: decisão formal de conviver com o risco.'
      },
      {
        type: 'diagram',
        title: 'Estratégias de Remediação',
        text: 'As estratégias variam do tratamento definitivo à aceitação formal do risco.',
        diagram: 'flow',
        items: ['Patch', 'Configuração', 'Controle', 'Aceitação']
      },
      {
        type: 'content',
        title: 'Gerenciamento de Patches',
        text: 'Um processo maduro de patches inclui: testar em ambiente de staging, rollout gradual por grupos, monitoramento de impacto pós-aplicação, e plano de rollback. Patches críticos podem seguir fluxo acelerado com janela de manutenção emergencial.'
      },
      {
        type: 'content',
        title: 'Controles Compensatórios',
        text: 'Quando o patch não pode ser aplicado imediatamente, controles compensatórios reduzem o risco: WAF (Web Application Firewall) para bloquear exploração, segmentação de rede para isolar o ativo, monitoramento intensificado para detectar tentativas de ataque, e regras de IPS específicas.',
        highlight: 'Controles compensatórios não eliminam a vulnerabilidade, mas reduzem a probabilidade ou o impacto da exploração até que o patch definitivo seja aplicado.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual a diferença entre remediação e mitigação?',
        options: [
          'São sinônimos',
          'Remediação elimina a vulnerabilidade; mitigação reduz o risco sem eliminar a causa',
          'Mitigação é mais cara que remediação',
          'Remediação é temporária e mitigação é definitiva'
        ],
        correctIndex: 1,
        explanation: 'Remediação elimina a causa raiz da vulnerabilidade (ex.: aplicando um patch). Mitigação reduz o risco através de controles compensatórios sem eliminar a vulnerabilidade em si.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Em que situação é aceitável aceitar formalmente um risco?',
        options: [
          'Sempre que o patch for muito caro',
          'Quando o custo da correção supera o dano potencial e a decisão é aprovada pela gestão',
          'Apenas quando não existe patch disponível',
          'Risco nunca deve ser aceito'
        ],
        correctIndex: 1,
        explanation: 'A aceitação de risco é válida quando o custo da remediação supera o impacto potencial, desde que formalmente documentada e aprovada pelo CISO ou comitê de risco.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'A remediação pode ser total (patch), parcial (configuração), compensatória (controle) ou aceitação do risco. Patches devem ser testados antes do rollout. Controles compensatórios são alternativas válidas quando a correção definitiva não é possível imediatamente.'
      }
    ]
  },
  gestao_6: {
    title: 'Ferramentas de Scan',
    icon: 'hardware-chip-outline',
    steps: [
      {
        type: 'intro',
        icon: 'hardware-chip-outline',
        title: 'Automatizando a Descoberta',
        text: 'Ferramentas de scan automatizam o processo de descoberta e identificação de vulnerabilidades. Cada ferramenta tem características, modelos de licenciamento e nichos de aplicação específicos. Conhecer as principais opções é essencial para montar um programa de VM eficaz.'
      },
      {
        type: 'content',
        title: 'Nessus',
        text: 'Nessus (Tenable) é uma das ferramentas mais populares do mercado. Possui vasta base de dados de CVEs, plugins atualizados diariamente, suporte a scans autenticados e não-autenticados, e interface web robusta. Versão comercial com custo por ativo ou scanner.'
      },
      {
        type: 'content',
        title: 'OpenVAS',
        text: 'OpenVAS (Greenbone) é a principal alternativa open-source. Oferece mais de 50.000 testes de vulnerabilidade, scans autenticados, agendamento e relatórios. A interface Greenbone Security Assistant facilita a operação. Ideal para organizações com orçamento limitado.'
      },
      {
        type: 'diagram',
        title: 'Fluxo de Operação de Scanners',
        text: 'O ciclo típico de operação de um scanner de vulnerabilidades.',
        diagram: 'sequence',
        items: ['Agendamento', 'Scan', 'Processamento', 'Relatório', 'Re-scan']
      },
      {
        type: 'content',
        title: 'Qualys',
        text: 'Qualys é uma plataforma cloud-native de segurança. Oferece scanners na nuvem sem necessidade de infraestrutura local, atualizações constantes automáticas, e módulos complementares como Policy Compliance e Web Application Scanning. Modelo SaaS com escalabilidade sob demanda.'
      },
      {
        type: 'content',
        title: 'Integração com SIEM/SOAR',
        text: 'Ferramentas de scan se integram a SIEMs (Splunk, QRadar) e SOARs para automatizar o fluxo de resposta. Quando uma vulnerabilidade crítica é detectada, o SOAR pode criar automaticamente um ticket, notificar o time responsável e até disparar ações de contenção.',
        highlight: 'A integração com SIEM/SOAR transforma dados brutos de scan em ações automatizadas de resposta, reduzindo o MTTR significativamente.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual das seguintes ferramentas é open-source?',
        options: ['Nessus', 'Qualys', 'OpenVAS', 'Rapid7'],
        correctIndex: 2,
        explanation: 'OpenVAS (Greenbone) é a principal ferramenta open-source de scan de vulnerabilidades, com mais de 50.000 testes disponíveis gratuitamente.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual o principal benefício de um scanner baseado em nuvem como o Qualys?',
        options: [
          'Não requer hardware local e tem atualizações automáticas',
          'É sempre mais rápido que scanners locais',
          'Funciona sem conexão com a internet',
          'É gratuito para empresas'
        ],
        correctIndex: 0,
        explanation: 'Scanners cloud eliminam a necessidade de infraestrutura local, oferecem escalabilidade sob demanda e recebem atualizações automáticas constantes sem intervenção do time.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'Nessus, OpenVAS e Qualys são as principais ferramentas de scan. OpenVAS é a referência open-source. A integração com SIEM/SOAR automatiza o fluxo de resposta. A escolha da ferramenta depende do orçamento, escala e requisitos da organização.'
      }
    ]
  },
  gestao_7: {
    title: 'Políticas e SLAs',
    icon: 'document-text-outline',
    steps: [
      {
        type: 'intro',
        icon: 'document-text-outline',
        title: 'Estruturando o Programa',
        text: 'Tecnologia sozinha não sustenta um programa de VM. Políticas bem definidas e SLAs claros estabelecem as regras do jogo: quem faz o quê, em quanto tempo, e quais as consequências do descumprimento.'
      },
      {
        type: 'content',
        title: 'Política de Gestão de Vulnerabilidades',
        text: 'A política define escopo (quais ativos estão cobertos), responsabilidades (time de segurança, TI, desenvolvedores), frequência de scans, critérios de aceitação de risco, e procedimentos para tratamento de exceções. Deve ser aprovada pela diretoria e revisada anualmente.'
      },
      {
        type: 'diagram',
        title: 'Estrutura do Programa',
        text: 'Políticas, processos e métricas formam a espinha dorsal do programa de VM.',
        diagram: 'io',
        items: ['Políticas (Diretrizes)', 'Processos (SLAs)', 'Métricas (Resultados)']
      },
      {
        type: 'content',
        title: 'SLAs por Severidade',
        text: 'SLAs típicos: Crítico (CVSS 9-10): detectar em 24h e remediar em 7 dias. Alto (CVSS 7-8.9): remediar em 30 dias. Médio (CVSS 4-6.9): remediar em 90 dias. Baixo (CVSS 0-3.9): remediar na próxima janela de manutenção. Os prazos contam a partir da data de identificação.'
      },
      {
        type: 'content',
        title: 'Exceções e Aceitação de Risco',
        text: 'Quando um prazo de SLA não pode ser cumprido, uma exceção formal deve ser solicitada. O processo inclui: justificativa técnica, análise de risco, controles compensatórios adotados, prazo alternativo, e aprovação do CISO. Exceções expiram e devem ser reavaliadas periodicamente.',
        highlight: 'Toda exceção de SLA deve ser documentada, aprovada pelo CISO, revisada periodicamente e vinculada a controles compensatórios.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual é o SLA típico para remediação de vulnerabilidades críticas?',
        options: ['24 horas', '7 dias', '30 dias', '90 dias'],
        correctIndex: 1,
        explanation: 'O SLA padrão para vulnerabilidades críticas (CVSS 9-10) é de 7 dias corridos para remediação, embora a detecção deva ocorrer em até 24h.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Quem é responsável por aprovar a aceitação formal de risco em uma organização?',
        options: ['O analista de segurança', 'O gerente de TI', 'O CISO', 'O fornecedor do scanner'],
        correctIndex: 2,
        explanation: 'O CISO (Chief Information Security Officer) ou equivalente é a autoridade responsável por aprovar formalmente a aceitação de riscos de segurança.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'Políticas definem o escopo e responsabilidades do programa. SLAs estabelecem prazos de remediação por severidade (crítico: 7d, alto: 30d, médio: 90d). Exceções devem ser documentadas e aprovadas pelo CISO com controles compensatórios.'
      }
    ]
  },
  gestao_8: {
    title: 'Relatórios e Métricas',
    icon: 'trending-up-outline',
    steps: [
      {
        type: 'intro',
        icon: 'trending-up-outline',
        title: 'Medindo o Sucesso do Programa',
        text: 'Se não pode medir, não pode gerenciar. Métricas e relatórios são essenciais para demonstrar o valor do programa de VM para a diretoria, justificar investimentos e identificar oportunidades de melhoria.'
      },
      {
        type: 'content',
        title: 'KPIs de Gestão de Vulnerabilidades',
        text: 'Principais KPIs: MTTR (Mean Time to Remediate) — tempo médio para corrigir vulnerabilidades; Percentual de vulnerabilidades corrigidas dentro do SLA; Número de vulnerabilidades abertas por severidade; Tendência mensal de redução; Idade média das vulnerabilidades abertas.'
      },
      {
        type: 'diagram',
        title: 'Relatórios por Audiência',
        text: 'Cada público-alvo necessita de um nível diferente de detalhamento.',
        diagram: 'flow',
        items: ['Diretoria (Risco)', 'Gerência (Tendências)', 'Técnico (Detalhes)']
      },
      {
        type: 'content',
        title: 'Relatórios Executivos',
        text: 'Relatórios para a diretoria devem ser visuais e focados em risco: gráfico de tendência de redução de vulnerabilidades críticas ao longo do tempo, comparação com benchmarks do setor, MTTR aggregated, e score geral de postura de segurança.',
        highlight: 'Relatórios executivos devem comunicar risco em linguagem de negócio, não em detalhes técnicos. Gráficos de tendência são mais efetivos que listas.'
      },
      {
        type: 'content',
        title: 'Métricas de Maturidade',
        text: 'Para avaliar a maturidade: percentual de ativos sendo escaneados regularmente, percentual de vulnerabilidades corrigidas dentro do SLA, idade média das vulnerabilidades (quanto mais jovem, melhor), e taxa de reincidência (vuln que voltam após correção).'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual é o KPI mais relevante para comunicar à diretoria o progresso do programa de VM?',
        options: [
          'Lista detalhada de CVEs abertas',
          'Tendência de redução de vulnerabilidades ao longo do tempo',
          'Número de scanners em operação',
          'Versão do Nessus utilizada'
        ],
        correctIndex: 1,
        explanation: 'A diretoria precisa de visão de alto nível. Gráficos de tendência mostram se o programa está evoluindo, estagnado ou regredindo, permitindo decisões estratégicas.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'O que significa a sigla MTTR no contexto de Gestão de Vulnerabilidades?',
        options: [
          'Mean Time to Recovery',
          'Mean Time to Remediate',
          'Maximum Time to Respond',
          'Minimum Time to Report'
        ],
        correctIndex: 1,
        explanation: 'MTTR (Mean Time to Remediate) é o tempo médio que a organização leva para corrigir vulnerabilidades, desde a identificação até a remediação confirmada.'
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Parabéns! Você completou o módulo de Gestão de Vulnerabilidades. Continue aplicando esses conceitos para fortalecer a postura de segurança da sua organização.'
      },
    ]
  },

  // === GOVERNANÇA, RISCO E CONFORMIDADE (GRC) ===

  grc_1: {
    title: 'Introdução à GRC',
    icon: 'briefcase-outline',
    steps: [
      {
        type: 'intro',
        icon: 'briefcase-outline',
        title: 'Bem-vindo ao Módulo GRC',
        text: 'GRC (Governance, Risk & Compliance) é um conjunto integrado de capacidades que permite a uma organização atingir seus objetivos, gerenciar riscos e operar em conformidade com leis e regulamentos. É a espinha dorsal de uma estratégia de segurança bem estruturada.'
      },
      {
        type: 'content',
        title: 'O que é GRC?',
        text: 'GRC representa a integração de três disciplinas:\n\n• Governança: Estrutura de tomada de decisão, definição de papéis, responsabilidades e alinhamento estratégico entre TI e negócios.\n\n• Gestão de Riscos: Identificação, análise e tratamento de riscos que podem impactar os objetivos organizacionais.\n\n• Conformidade: Garantia de que a organização opera dentro dos limites legais, regulatórios e normativos aplicáveis.\n\nO GRC moderno integra essas três áreas em um modelo coerente, evitando silos organizacionais.',
        highlight: 'GRC não é apenas sobre segurança — é sobre governar a organização de forma ética, eficiente e sustentável.'
      },
      {
        type: 'diagram',
        title: 'Os 3 Pilares do GRC',
        text: 'Governança, Risco e Conformidade trabalham juntos para proteger e impulsionar o negócio.',
        diagram: 'flow',
        items: ['Governança', 'Gestão de Riscos', 'Conformidade']
      },
      {
        type: 'content',
        title: 'Por que GRC é Importante?',
        text: 'Organizações sem um programa de GRC estruturado enfrentam: multas regulatórias, danos à reputação, perda de negócios, decisões descentralizadas e exposição excessiva a riscos. Um programa de GRC eficaz reduz custos operacionais, melhora a tomada de decisão e aumenta a confiança de stakeholders.\n\nEmpresas com GRC maduro têm 30% menos incidentes de compliance e respondem 50% mais rápido a mudanças regulatórias.'
      },
      {
        type: 'content',
        title: 'Evolução do GRC',
        text: 'O GRC evoluiu de atividades isoladas (departamentos de compliance separados, gestão de risco descentralizada) para um modelo integrado. O GRC moderno utiliza tecnologia para automatizar controles, monitorar riscos em tempo real e fornecer visibilidade unificada para a alta direção e o conselho.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Quais são os três pilares do GRC?',
        options: ['Governança, Relatórios e Controles', 'Governança, Risco e Conformidade', 'Gestão, Recursos e Compliance', 'Garantia, Risco e Continuidade'],
        correctIndex: 1,
        explanation: 'GRC é a sigla para Governance, Risk & Compliance — Governança, Risco e Conformidade. Esses três pilares atuam de forma integrada para direcionar a organização.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual benefício uma organização com GRC maduro pode esperar?',
        options: [
          'Eliminação total de riscos',
          'Menos incidentes de compliance e resposta mais rápida a mudanças regulatórias',
          'Remoção da necessidade de auditorias',
          'Garantia de lucro máximo'
        ],
        correctIndex: 1,
        explanation: 'Empresas com GRC maduro experimentam significativamente menos incidentes de compliance e respondem mais rapidamente a mudanças regulatórias, reduzindo exposição a multas e danos reputacionais.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'GRC integra Governança, Risco e Conformidade em um modelo coeso. Organizações com GRC maduro tomam decisões melhores, gerenciam riscos proativamente e mantêm conformidade regulatória de forma eficiente.'
      }
    ]
  },

  grc_2: {
    title: 'Governança Corporativa e de TI',
    icon: 'business-outline',
    steps: [
      {
        type: 'intro',
        icon: 'business-outline',
        title: 'Fundamentos da Governança',
        text: 'Governança Corporativa é o sistema pelo qual as organizações são dirigidas, monitoradas e incentivadas. A Governança de TI estende esses princípios para a área de tecnologia, garantindo que os investimentos em TI estejam alinhados aos objetivos estratégicos do negócio.'
      },
      {
        type: 'content',
        title: 'Princípios de Governança Corporativa',
        text: 'Os 4 princípios fundamentais da governança corporativa segundo o IBGC e a OCDE são:\n\n• Transparência: Disponibilizar informações relevantes a todas as partes interessadas.\n• Equidade: Tratar todos os stakeholders de forma justa.\n• Prestação de Contas (Accountability): Os agentes de governança devem responder por seus atos.\n• Responsabilidade Corporativa: Zelar pela sustentabilidade e longevidade da organização.',
        highlight: 'A governança não é um fim em si mesma — é o meio para criar valor sustentável para a organização.'
      },
      {
        type: 'diagram',
        title: 'Estrutura de Governança',
        text: 'A governança estabelece a hierarquia de direção e controle na organização.',
        diagram: 'flow',
        items: ['Conselho', 'Alta Direção', 'Gestão Executiva', 'Operação']
      },
      {
        type: 'content',
        title: 'Governança de TI com COBIT',
        text: 'COBIT (Control Objectives for Information and Related Technologies) é o principal framework de governança de TI, publicado pela ISACA. Ele ajuda organizações a:\n\n• Alinhar TI aos objetivos de negócio\n• Garantir valor dos investimentos em TI\n• Gerenciar riscos de TI adequadamente\n• Otimizar recursos de tecnologia\n\nO COBIT 2019 organiza-se em 5 domínios principais: EDM (Avaliar, Dirigir e Monitorar), APO (Alinhar, Planejar e Organizar), BAI (Construir, Adquirir e Implementar), DSS (Entregar, Servir e Suportar) e MEA (Monitorar, Avaliar e Analisar).'
      },
      {
        type: 'content',
        title: 'ISO 38500 - Governança Corporativa de TI',
        text: 'A ISO 38500 é a norma internacional para governança de TI. Seus 6 princípios são: Responsabilidade, Estratégia, Aquisição, Desempenho, Conformidade e Comportamento Humano. Ela fornece um modelo de avaliação, direção e monitoramento para o uso da tecnologia nas organizações.',
        highlight: 'ISO 38500 define que a governança de TI deve responder a três perguntas: Onde estamos? Onde queremos chegar? Como vamos chegar lá?'
      },
      {
        type: 'content',
        title: 'Accountability e Estrutura Organizacional',
        text: 'Na governança, definir claramente papéis e responsabilidades é essencial. A matriz RACI (Responsible, Accountable, Consulted, Informed) é a ferramenta mais utilizada para documentar quem executa, quem aprova, quem consulta e quem é informado em cada processo. Isso evita conflitos de autoridade e lacunas de responsabilidade.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual framework é o principal referencial para governança de TI?',
        options: ['ISO 27001', 'COBIT', 'ITIL', 'NIST CSF'],
        correctIndex: 1,
        explanation: 'COBIT (Control Objectives for Information and Related Technologies) é o principal framework de governança de TI, publicado pela ISACA e amplamente adotado globalmente.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'O que significa Accountability na governança corporativa?',
        options: ['Manter dados em sigilo', 'Prestação de contas e responsabilização pelos atos', 'Acumular múltiplas funções', 'Automatizar processos de TI'],
        correctIndex: 1,
        explanation: 'Accountability é o princípio de que os agentes de governança devem prestar contas de seus atos, assumindo responsabilidade por suas decisões e resultados.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'A Governança Corporativa e de TI estabelece a estrutura de direção, controle e prestação de contas. Frameworks como COBIT e ISO 38500 fornecem diretrizes práticas para alinhar TI aos objetivos de negócio, gerenciar riscos e otimizar recursos de tecnologia.'
      }
    ]
  },

  grc_3: {
    title: 'Gestão de Riscos',
    icon: 'warning-outline',
    steps: [
      {
        type: 'intro',
        icon: 'warning-outline',
        title: 'Introdução à Gestão de Riscos',
        text: 'Risco é o efeito da incerteza sobre os objetivos. A Gestão de Riscos é o processo sistemático de identificar, analisar, avaliar e tratar riscos que podem afetar o alcance dos objetivos organizacionais. No contexto de GRC, a gestão de riscos é o elo entre governança e conformidade.'
      },
      {
        type: 'content',
        title: 'ISO 31000 - Framework de Gestão de Riscos',
        text: 'A ISO 31000 é a norma internacional que fornece princípios e diretrizes para a gestão de riscos. Seu processo é composto por:\n\n1. Comunicação e Consulta (contínuo)\n2. Estabelecimento do Contexto\n3. Identificação de Riscos\n4. Análise de Riscos\n5. Avaliação de Riscos\n6. Tratamento de Riscos\n7. Monitoramento e Análise Crítica (contínuo)\n\nEste ciclo integra risco à estratégia e aos processos da organização.'
      },
      {
        type: 'diagram',
        title: 'Processo de Gestão de Riscos (ISO 31000)',
        text: 'O fluxo contínuo de identificação, análise, avaliação e tratamento de riscos.',
        diagram: 'flow',
        items: ['Identificar', 'Analisar', 'Avaliar', 'Tratar', 'Monitorar']
      },
      {
        type: 'content',
        title: 'Análise Qualitativa vs Quantitativa',
        text: 'A análise qualitativa usa escalas descritivas (ex: Muito Baixo, Baixo, Médio, Alto, Muito Alto) para probabilidade e impacto. É rápida e útil para priorização inicial.\n\nA análise quantitativa usa valores numéricos e técnicas como ALE (Annualized Loss Expectancy), Value at Risk (VaR) e simulações de Monte Carlo. Exige mais dados mas fornece resultados mais precisos para tomada de decisão.',
        highlight: 'A análise quantitativa responde: "Quanto dinheiro podemos perder?" Enquanto a qualitativa responde: "Qual é a nossa prioridade?"'
      },
      {
        type: 'content',
        title: 'Matriz de Risco',
        text: 'A matriz de risco (ou mapa de calor) é uma ferramenta visual que combina probabilidade e impacto para classificar riscos em diferentes níveis de severidade. Riscos no quadrante "crítico" exigem ação imediata, enquanto riscos "baixos" podem ser aceitos ou monitorados. A organização define seu apetite a risco — o nível de risco que está disposta a aceitar para perseguir seus objetivos.'
      },
      {
        type: 'content',
        title: 'Estratégias de Tratamento de Riscos',
        text: 'As principais estratégias de tratamento são:\n\n• Evitar: Eliminar a atividade que gera o risco.\n• Reduzir (Mitigar): Implementar controles para diminuir probabilidade ou impacto.\n• Transferir: Compartilhar o risco com terceiros (seguros, contratos).\n• Aceitar: Reconhecer o risco e decidir conviver com ele, com monitoramento.\n• Explorar: Assumir um risco calculado para obter uma oportunidade de negócio.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual das seguintes é uma estratégia de tratamento de riscos?',
        options: ['Ignorar', 'Transferir', 'Documentar', 'Relatar'],
        correctIndex: 1,
        explanation: 'As estratégias de tratamento são: Evitar, Reduzir, Transferir, Aceitar e Explorar. Transferir envolve compartilhar o risco com terceiros, como através de seguros.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual a diferença entre análise qualitativa e quantitativa de riscos?',
        options: [
          'Qualitativa usa números; quantitativa usa descrições',
          'Qualitativa usa escalas descritivas; quantitativa usa valores numéricos como ALE',
          'Não há diferença prática entre elas',
          'Quantitativa é sempre mais rápida que qualitativa'
        ],
        correctIndex: 1,
        explanation: 'Análise qualitativa usa escalas descritivas para priorizar riscos rapidamente. Análise quantitativa usa dados numéricos (ALE, VaR) para calcular exposição financeira.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'A Gestão de Riscos baseada na ISO 31000 segue o ciclo: Identificar, Analisar, Avaliar, Tratar e Monitorar. A combinação de análise qualitativa e quantitativa, aliada a estratégias claras de tratamento, permite à organização gerenciar incertezas de forma estruturada.'
      }
    ]
  },

  grc_4: {
    title: 'Conformidade e Auditoria',
    icon: 'checkmark-done-outline',
    steps: [
      {
        type: 'intro',
        icon: 'checkmark-done-outline',
        title: 'O que é Conformidade?',
        text: 'Conformidade (Compliance) é o estado de estar em acordo com leis, regulamentos, normas técnicas e políticas internas. No contexto GRC, o programa de compliance assegura que a organização opera dentro dos limites legais e normativos aplicáveis ao seu setor e região.'
      },
      {
        type: 'content',
        title: 'Principais Regulamentações',
        text: 'As organizações precisam cumprir diversas regulamentações dependendo do setor e localização:\n\n• LGPD (Lei Geral de Proteção de Dados - Brasil): Proteção de dados pessoais, aplicável a qualquer organização que processe dados no Brasil. Prevê multas de até 2% do faturamento.\n\n• PCI DSS: Padrão de segurança para organizações que processam cartões de crédito. Exige controles rigorosos de segurança.\n\n• SOX (Sarbanes-Oxley - EUA): Aplicável a empresas listadas na bolsa americana. Exige controles internos sobre relatórios financeiros.\n\n• HIPAA (EUA): Proteção de dados de saúde.\n\n• GDPR (Europa): Regulamentação europeia de proteção de dados, serviu de inspiração para a LGPD.'
      },
      {
        type: 'diagram',
        title: 'Hierarquia Normativa',
        text: 'A conformidade opera em diferentes níveis de exigência normativa.',
        diagram: 'flow',
        items: ['Leis (LGPD, SOX)', 'Regulamentações (Setoriais)', 'Normas (ISO 27001)', 'Políticas Internas']
      },
      {
        type: 'content',
        title: 'Programa de Compliance',
        text: 'Um programa de compliance efetivo inclui:\n\n• Compromisso da Alta Direção: Tom corporativo, recursos e apoio explícito.\n• Avaliação de Riscos de Compliance: Identificar áreas de maior exposição.\n• Código de Conduta e Políticas: Documentos normativos claros e acessíveis.\n• Treinamento e Comunicação: Conscientização contínua dos colaboradores.\n• Canais de Denúncia: Ouvidoria e canais anônimos para reportar violações.\n• Monitoramento e Auditoria: Verificação contínua da efetividade dos controles.\n• Investigação e Disciplina: Ação corretiva quando violações são identificadas.',
        highlight: 'Um programa de compliance não protege apenas contra multas — protege a reputação e a continuidade do negócio.'
      },
      {
        type: 'content',
        title: 'Auditoria Interna e Externa',
        text: 'Auditorias são avaliações sistemáticas e documentadas para verificar se os controles, processos e práticas estão em conformidade com os requisitos estabelecidos.\n\n• Auditoria Interna: Realizada pela própria organização (equipe interna ou terceirizada). Foco em melhoria contínua e preparação para auditorias externas.\n\n• Auditoria Externa: Realizada por organizações independentes e certificadoras. Resulta em certificações formais (ISO 27001, SOC 2).\n\nO ciclo de auditoria segue: Planejamento, Execução (testes de controles), Relatório e Acompanhamento de Ações Corretivas.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual regulamentação brasileira trata da proteção de dados pessoais?',
        options: ['SOX', 'PCI DSS', 'LGPD', 'HIPAA'],
        correctIndex: 2,
        explanation: 'A LGPD (Lei Geral de Proteção de Dados Pessoais - Lei 13.709/2018) é a regulamentação brasileira que estabelece regras para coleta, armazenamento, tratamento e compartilhamento de dados pessoais.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual a principal diferença entre auditoria interna e externa?',
        options: [
          'Auditoria interna é realizada pela própria organização; externa por entidade independente',
          'Auditoria externa é mais barata que a interna',
          'Auditoria interna só avalia TI; externa avalia toda a organização',
          'Não há diferença prática entre os dois tipos'
        ],
        correctIndex: 0,
        explanation: 'Auditoria interna é conduzida pela própria organização (ou terceiros contratados por ela) com foco em melhoria contínua. Auditoria externa é realizada por organizações independentes para certificação formal.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'Conformidade envolve cumprir leis, regulamentos e normas aplicáveis. Programas de compliance robustos incluem políticas, treinamentos, monitoramento e canais de denúncia. Auditorias internas e externas verificam a efetividade dos controles e garantem certificações.'
      }
    ]
  },

  grc_5: {
    title: 'Frameworks e Normas de Segurança',
    icon: 'document-text-outline',
    steps: [
      {
        type: 'intro',
        icon: 'document-text-outline',
        title: 'Frameworks de Segurança',
        text: 'Frameworks de segurança fornecem estruturas padronizadas para desenvolver, implementar e avaliar programas de segurança da informação. Eles organizam controles, processos e melhores práticas em modelos coerentes que facilitam a gestão e a comunicação com stakeholders.'
      },
      {
        type: 'content',
        title: 'ISO 27001 - Sistema de Gestão de Segurança da Informação',
        text: 'A ISO 27001 é a norma internacional mais reconhecida para SGSI (Sistema de Gestão de Segurança da Informação). Ela adota o ciclo PDCA (Plan-Do-Check-Act) e define um conjunto de controles no Anexo A, organizados em 14 domínios.\n\nA certificação ISO 27001 demonstra que a organização implementou um SGSI robusto e é frequentemente exigida em contratos com fornecedores e parceiros.',
        highlight: 'A ISO 27001 não é apenas sobre tecnologia — é sobre processos, pessoas e melhoria contínua da segurança.'
      },
      {
        type: 'diagram',
        title: 'Estrutura ISO 27001',
        text: 'O SGSI segue o ciclo PDCA com controles organizados em domínios.',
        diagram: 'flow',
        items: ['Planejar (SGSI)', 'Implementar (Controles)', 'Monitorar (Auditoria)', 'Melhorar (Ação Corretiva)']
      },
      {
        type: 'content',
        title: 'NIST Cybersecurity Framework (CSF)',
        text: 'O NIST CSF é um framework desenvolvido pelo Instituto Nacional de Padrões e Tecnologia dos EUA. Ele organiza-se em 5 funções principais:\n\n• Identificar: Desenvolver entendimento organizacional para gerenciar riscos.\n• Proteger: Implementar salvaguardas para garantir entrega de serviços críticos.\n• Detectar: Implementar atividades para identificar incidentes de segurança.\n• Responder: Desenvolver e implementar ações de resposta a incidentes.\n• Recuperar: Restaurar capacidades e serviços afetados por incidentes.\n\nO NIST CSF é amplamente adotado por sua flexibilidade e abordagem baseada em riscos.'
      },
      {
        type: 'content',
        title: 'Outros Frameworks Importantes',
        text: '• COBIT: Focado em governança de TI e alinhamento estratégico.\n\n• ITIL: Focado em gerenciamento de serviços de TI (service desk, incidentes, mudanças).\n\n• CIS Controls: Lista priorizada de 18 controles de segurança essenciais.\n\n• SOC 2: Relatório de controles internos para prestadores de serviços (trust services criteria).\n\n• ISO 27701: Extensão da ISO 27001 para gestão de privacidade de dados.',
        highlight: 'Nenhum framework cobre tudo. A escolha depende do setor, porte, maturidade e requisitos regulatórios da organização.'
      },
      {
        type: 'content',
        title: 'Como Escolher o Framework Adequado',
        text: 'A seleção do framework depende de fatores como: requisitos regulatórios do setor (ex: PCI DSS para financeiro), expectativas de clientes (SOC 2), maturidade da organização (CIS Controls para iniciantes, ISO 27001 para avançados), e objetivos estratégicos. Muitas organizações combinam múltiplos frameworks em um modelo híbrido.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual framework de segurança é organizado nas 5 funções: Identificar, Proteger, Detectar, Responder e Recuperar?',
        options: ['ISO 27001', 'COBIT', 'NIST Cybersecurity Framework', 'ITIL'],
        correctIndex: 2,
        explanation: 'O NIST CSF é estruturado nas 5 funções: Identify, Protect, Detect, Respond, Recover. Este modelo é amplamente adotado por organizações de todos os setores.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'O que significa a sigla SGSI no contexto da ISO 27001?',
        options: ['Sistema Gerencial de Serviços de Internet', 'Sistema de Gestão de Segurança da Informação', 'Sistema Global de Segurança Integrada', 'Serviço de Governança em Segurança Informacional'],
        correctIndex: 1,
        explanation: 'SGSI significa Sistema de Gestão de Segurança da Informação. É o conjunto de políticas, processos e controles que a organização implementa para proteger suas informações.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'Frameworks como ISO 27001, NIST CSF, COBIT e CIS Controls fornecem estruturas padronizadas para gerenciar segurança. A escolha do framework adequado depende do contexto organizacional, e muitas organizações combinam múltiplos frameworks para atender suas necessidades específicas.'
      }
    ]
  },

  grc_6: {
    title: 'Políticas e Procedimentos',
    icon: 'shield-checkmark-outline',
    steps: [
      {
        type: 'intro',
        icon: 'shield-checkmark-outline',
        title: 'A Importância das Políticas',
        text: 'Políticas de segurança são documentos que formalizam as regras, diretrizes e responsabilidades para proteger os ativos de informação. Elas traduzem a estratégia de segurança em requisitos operacionais claros e são o alicerce de qualquer programa de conformidade.'
      },
      {
        type: 'content',
        title: 'Hierarquia Documental',
        text: 'A documentação de segurança segue uma hierarquia:\n\n• Política (nível estratégico): Declarações de alto nível que expressam o compromisso da direção. Ex: "Política de Segurança da Informação".\n\n• Normas (nível tático): Regras específicas e obrigatórias. Ex: "Norma de Classificação da Informação".\n\n• Procedimentos (nível operacional): Passo a passo para executar tarefas. Ex: "Procedimento de Criação de Usuários".\n\n• Diretrizes (recomendações): Guias de boas práticas. Ex: "Guia de Configuração Segura de Servidores".',
        highlight: 'Política diz "o quê" e "por quê". Procedimento diz "como", "quem" e "quando".'
      },
      {
        type: 'diagram',
        title: 'Hierarquia Documental',
        text: 'Documentos estratégicos, táticos e operacionais formam a pirâmide documental.',
        diagram: 'flow',
        items: ['Políticas (Estratégico)', 'Normas (Tático)', 'Procedimentos (Operacional)']
      },
      {
        type: 'content',
        title: 'Políticas Essenciais de Segurança',
        text: 'Toda organização deve implementar políticas fundamentais:\n\n1. Política de Segurança da Informação (PSI): Documento mestre que estabelece compromisso, escopo, princípios e responsabilidades.\n\n2. Política de Controle de Acesso: Define quem acessa o quê, com base no princípio do menor privilégio.\n\n3. Política de Classificação da Informação: Define níveis de sigilo e tratamento dos dados.\n\n4. Política de Uso Aceitável (AUP): Regras para uso de recursos corporativos (internet, e-mail, dispositivos).\n\n5. Política de Senhas: Requisitos de complexidade, troca e armazenamento de senhas.\n\n6. Política de Backup e Retenção: Frequência, tipo e período de guarda dos backups.'
      },
      {
        type: 'content',
        title: 'Ciclo de Vida das Políticas',
        text: 'Políticas não são documentos estáticos. Elas seguem um ciclo de vida:\n\n1. Criação: Identificação da necessidade, redação por especialistas.\n2. Revisão: Aprovação por comitê de segurança e jurídico.\n3. Aprovação: Assinatura da alta direção (CEO, CISO).\n4. Publicação: Disponibilização a todos os colaboradores.\n5. Treinamento: Comunicação e conscientização sobre o conteúdo.\n6. Monitoramento: Verificação de cumprimento.\n7. Revisão Periódica: Atualização conforme mudanças no negócio, legislação e tecnologia.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual documento define as regras específicas e obrigatórias no nível tático?',
        options: ['Política', 'Norma', 'Procedimento', 'Diretriz'],
        correctIndex: 1,
        explanation: 'Normas são documentos de nível tático que estabelecem regras específicas e obrigatórias que todos devem seguir. Políticas são estratégicas, procedimentos são operacionais e diretrizes são recomendações.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual política estabelece o compromisso da direção e os princípios gerais de segurança?',
        options: [
          'Política de Senhas',
          'Política de Segurança da Informação (PSI)',
          'Política de Backup',
          'Política de Uso Aceitável'
        ],
        correctIndex: 1,
        explanation: 'A Política de Segurança da Informação (PSI) é o documento mestre que estabelece o compromisso da direção, escopo, princípios e responsabilidades. As demais políticas derivam dela.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'Políticas, normas e procedimentos formam a hierarquia documental de segurança. Políticas expressam diretrizes estratégicas, normas definem regras táticas e procedimentos detalham a execução operacional. O ciclo de vida das políticas inclui criação, aprovação, publicação, treinamento e revisão periódica.'
      }
    ]
  },

  grc_7: {
    title: 'Gestão de Incidentes e Continuidade',
    icon: 'sync-outline',
    steps: [
      {
        type: 'intro',
        icon: 'sync-outline',
        title: 'Preparação para Incidentes',
        text: 'Incidentes de segurança são inevitáveis. A diferença entre uma organização que se recupera rapidamente e uma que sofre danos irreparáveis está no planejamento. A Gestão de Incidentes e a Continuidade de Negócios são disciplinas essenciais para a resiliência organizacional.'
      },
      {
        type: 'content',
        title: 'Ciclo de Resposta a Incidentes (NIST SP 800-61)',
        text: 'O NIST SP 800-61 define 4 fases principais:\n\n1. Preparação: Criar equipe CSIRT, definir ferramentas, treinar equipe, estabelecer canais de comunicação.\n\n2. Detecção e Análise: Identificar sinais de incidente, coletar evidências, determinar escopo e impacto.\n\n3. Contenção, Erradicação e Recuperação: Isolar sistemas afetados, remover a causa raiz, restaurar operações normais.\n\n4. Pós-Incidente (Lições Aprendidas): Documentar o incidente, identificar melhorias, atualizar planos e controles.',
        highlight: 'Não é uma questão de "se" um incidente vai acontecer, mas "quando". A preparação é a chave.'
      },
      {
        type: 'diagram',
        title: 'Ciclo de Resposta a Incidentes',
        text: 'As 4 fases do ciclo de resposta a incidentes segundo o NIST.',
        diagram: 'flow',
        items: ['Preparação', 'Detecção', 'Contenção', 'Pós-Incidente']
      },
      {
        type: 'content',
        title: 'CSIRT e Estrutura de Resposta',
        text: 'CSIRT (Computer Security Incident Response Team) é a equipe responsável por coordenar a resposta a incidentes. Pode ser interna (dedicada), virtual (formada sob demanda) ou terceirizada (MSSP).\n\nToda equipe CSIRT precisa de:\n• Procedimentos claros de escalonamento\n• Canais de comunicação seguros\n• Ferramentas forenses (Volatility, FTK, Wireshark)\n• Playbooks para cenários comuns (ransomware, DDoS, vazamento de dados)\n• Acesso a aconselhamento jurídico'
      },
      {
        type: 'content',
        title: 'Continuidade de Negócios (BCM)',
        text: 'Business Continuity Management (BCM) é o processo holístico de gestão que identifica ameaças potenciais e seus impactos nas operações. Ele fornece uma estrutura para construir resiliência organizacional.\n\nElementos-chave:\n• BIA (Business Impact Analysis): Identifica processos críticos, MTD (Maximum Tolerable Downtime) e RTO/RPO.\n• BCP (Business Continuity Plan): Documenta procedimentos para manter operações durante uma crise.\n• DRP (Disaster Recovery Plan): Foco na recuperação de infraestrutura de TI após um desastre.',
        highlight: 'RTO (Recovery Time Objective) = quanto tempo até voltar. RPO (Recovery Point Objective) = quantos dados posso perder.'
      },
      {
        type: 'content',
        title: 'Testes e Exercícios',
        text: 'Planos que não são testados são apenas boas intenções. Os principais tipos de teste:\n\n• Tabletop Exercise: Simulação verbal com a equipe, discutindo cenários e decisões.\n• Walkthrough: Passo a passo guiado do plano.\n• Simulação: Teste controlado com cenário realista (ex: simular ataque ransomware).\n• Teste Técnico: Restauração real de backups, failover de servidores.\n• Exercício Completo: Mobilização total da organização, envolvendo todas as equipes.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Quantas fases possui o ciclo de resposta a incidentes segundo o NIST SP 800-61?',
        options: ['3 fases', '4 fases', '5 fases', '6 fases'],
        correctIndex: 1,
        explanation: 'O NIST SP 800-61 define 4 fases: Preparação, Detecção e Análise, Contenção/Erradicação/Recuperação, e Pós-Incidente (Lições Aprendidas).'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual a diferença entre RTO e RPO?',
        options: [
          'RTO é o tempo para recuperar; RPO é a quantidade de dados que pode ser perdida',
          'RTO e RPO são a mesma coisa',
          'RTO é sobre dados; RPO é sobre tempo',
          'RTO é financeiro; RPO é técnico'
        ],
        correctIndex: 0,
        explanation: 'RTO (Recovery Time Objective) define o tempo máximo aceitável para recuperar um serviço. RPO (Recovery Point Objective) define a quantidade máxima aceitável de perda de dados, medida em tempo.'
      },
      {
        type: 'conclusion',
        title: 'Resumo da Aula',
        text: 'A Gestão de Incidentes segue 4 fases: Preparação, Detecção, Contenção e Pós-Incidente. A Continuidade de Negócios (BCM) garante resiliência através de BIA, BCP e DRP. Testes regulares validam a efetividade dos planos e preparam a equipe para cenários reais.'
      }
    ]
  },

  grc_8: {
    title: 'Métricas e Reportes de GRC',
    icon: 'trending-up-outline',
    steps: [
      {
        type: 'intro',
        icon: 'trending-up-outline',
        title: 'Governança Baseada em Dados',
        text: 'O que não é medido não é gerenciado. No GRC, métricas e indicadores são essenciais para demonstrar a efetividade dos programas de segurança, comunicar riscos à alta direção e justificar investimentos. Um bom programa de métricas transforma dados brutos em inteligência acionável.'
      },
      {
        type: 'content',
        title: 'KPIs vs KRIs',
        text: '• KPI (Key Performance Indicator): Mede o desempenho de processos e controles. Ex: "Percentual de patches aplicados dentro do prazo", "Tempo médio para responder a incidentes (MTTR)", "Percentual de colaboradores treinados em segurança".\n\n• KRI (Key Risk Indicator): Mede o nível de exposição a riscos. Ex: "Número de vulnerabilidades críticas não corrigidas", "Percentual de sistemas sem backup validado", "Tempo desde a última auditoria interna".\n\nKPIs medem eficiência; KRIs medem exposição.',
        highlight: 'KPIs dizem "como estamos indo?" KRIs dizem "quanto risco estamos assumindo?"'
      },
      {
        type: 'diagram',
        title: 'KPIs vs KRIs',
        text: 'KPIs monitoram desempenho, KRIs monitoram exposição a riscos.',
        diagram: 'flow',
        items: ['KPIs (Desempenho)', 'KRIs (Exposição)', 'Decisão (Estratégia)']
      },
      {
        type: 'content',
        title: 'Reportes para Diferentes Audiências',
        text: 'Cada público-alvo precisa de informações em nível diferente de detalhe:\n\n• Conselho/Board: Visão estratégica — tendências de risco, compliance com regulamentações, investimentos necessários. 1-2 páginas, linguagem de negócios.\n\n• Alta Direção (CEO, CISO): Métricas operacionais consolidadas — MTTR, SLA compliance, principais riscos, status de projetos de segurança.\n\n• Gerentes e Equipes Técnicas: Dados detalhados — lista de vulnerabilidades, taxas de falso positivo, progresso de remediação, heat maps.',
        highlight: 'O pior erro é apresentar dados técnicos para o board. Use linguagem de negócio: dólares, probabilidades e impacto.'
      },
      {
        type: 'content',
        title: 'Ferramentas de GRC',
        text: 'Ferramentas de GRC automatizam a coleta, correlação e apresentação de dados:\n\n• Archer (RSA): Plataforma empresarial de GRC, amplamente adotada.\n• ServiceNow GRC: Módulo de GRC integrado à plataforma ITSM.\n• MetricStream: Líder em soluções de GRC para grandes empresas.\n• Riskonnect: Foco em gestão de riscos corporativos (ERM).\n• OneTrust: Especializada em privacidade e compliance (LGPD/GDPR).\n\nPara organizações menores, planilhas e dashboards de BI podem ser suficientes inicialmente.',
        highlight: 'A melhor ferramenta é aquela que sua equipe realmente vai usar. Comece simples e evolua.'
      },
      {
        type: 'content',
        title: 'Construindo um Dashboard de GRC',
        text: 'Um dashboard de GRC efetivo deve:\n\n1. Refletir o apetite a risco da organização (tolerâncias definidas pelo board).\n2. Combinar KPIs e KRIs em uma visão balanceada.\n3. Usar semáforo (verde/amarelo/vermelho) para indicar status em relação aos thresholds.\n4. Mostrar tendências (últimos 3-6 meses) para indicar direção.\n5. Ter diferentes visões por audiência (executiva, gerencial, operacional).\n6. Ser atualizado automaticamente sempre que possível.\n\nExemplo de indicador: "94% dos patches críticos aplicados em até 48h (target: 98%) → Amarelo (próximo do limite)"'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Qual a principal diferença entre KPI e KRI?',
        options: [
          'KPI mede desempenho; KRI mede exposição a riscos',
          'KPI e KRI são termos intercambiáveis',
          'KPI é financeiro; KRI é técnico',
          'KPI é usado apenas pelo board; KRI por equipes técnicas'
        ],
        correctIndex: 0,
        explanation: 'KPIs (Key Performance Indicators) medem o desempenho de processos e controles. KRIs (Key Risk Indicators) medem o nível de exposição a riscos. Ambos são complementares em um programa de GRC.'
      },
      {
        type: 'question',
        title: 'Verificando Aprendizado',
        question: 'Ao reportar para o board/Conselho, qual abordagem é mais adequada?',
        options: [
          'Apresentar lista detalhada de todas as vulnerabilidades técnicas',
          'Fornecer resumo executivo com linguagem de negócio: riscos, tendências e investimentos',
          'Mostrar apenas os KPIs técnicos detalhados',
          'Não reportar para o board, pois segurança é assunto técnico'
        ],
        correctIndex: 1,
        explanation: 'Para o board, a comunicação deve ser estratégica, usando linguagem de negócio (impacto financeiro, probabilidade, tendências, recomendações de investimento). Detalhes técnicos devem ficar em apêndices.'
      },
      {
        type: 'conclusion',
        title: 'Parabéns! 🎉',
        text: 'Parabéns! Você completou o módulo de Governança, Risco e Conformidade (GRC). Agora você entende como integrar governança, gestão de riscos e conformidade para criar uma estrutura organizacional sólida. Continue praticando com os exercícios e a avaliação final!'
      }
    ]
  },
};

function FlowDiagram({ items }) {
  return (
    <View style={diagramStyles.container}>
      {items.map((item, index) => (
        <View key={index} style={diagramStyles.flowRow}>
          <View style={diagramStyles.flowBox}>
            <Text style={diagramStyles.flowText}>{item}</Text>
          </View>
          {index < items.length - 1 && (
            <View style={diagramStyles.arrowContainer}>
              <Ionicons name="arrow-down" size={20} color={colors.primary} />
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

function SequenceDiagram({ items }) {
  return (
    <View style={diagramStyles.container}>
      <View style={diagramStyles.sequenceRow}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <View style={diagramStyles.sequenceBox}>
              <View style={diagramStyles.sequenceNumber}>
                <Text style={diagramStyles.sequenceNumberText}>{index + 1}</Text>
              </View>
              <Text style={diagramStyles.sequenceText}>{item}</Text>
            </View>
            {index < items.length - 1 && (
              <View style={diagramStyles.sequenceArrow}>
                <Ionicons name="arrow-forward" size={18} color={colors.primary} />
              </View>
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

function IODiagram({ items }) {
  return (
    <View style={diagramStyles.container}>
      <View style={diagramStyles.ioRow}>
        <View style={[diagramStyles.ioBox, diagramStyles.ioInput]}>
          <Ionicons name="download-outline" size={24} color={colors.white} />
          <Text style={diagramStyles.ioText}>{items[0]}</Text>
        </View>
        <View style={diagramStyles.ioArrow}>
          <Ionicons name="arrow-forward" size={20} color={colors.primary} />
        </View>
        <View style={[diagramStyles.ioBox, diagramStyles.ioProcess]}>
          <Ionicons name="settings-outline" size={24} color={colors.white} />
          <Text style={diagramStyles.ioText}>{items[1]}</Text>
        </View>
        <View style={diagramStyles.ioArrow}>
          <Ionicons name="arrow-forward" size={20} color={colors.primary} />
        </View>
        <View style={[diagramStyles.ioBox, diagramStyles.ioOutput]}>
          <Ionicons name="checkmark-circle-outline" size={24} color={colors.white} />
          <Text style={diagramStyles.ioText}>{items[2]}</Text>
        </View>
      </View>
    </View>
  );
}

function StepIndicator({ current, total }) {
  return (
    <View style={indicatorStyles.container}>
      {Array.from({ length: total }, (_, i) => (
        <View
          key={i}
          style={[
            indicatorStyles.dot,
            i === current && indicatorStyles.dotActive,
            i < current && indicatorStyles.dotCompleted,
          ]}
        />
      ))}
    </View>
  );
}

function QuestionCard({ question, options, selectedIndex, correctIndex, onSelect, answered }) {
  return (
    <View style={questionStyles.container}>
      <Text style={questionStyles.question}>{question}</Text>
      <View style={questionStyles.options}>
        {options.map((option, index) => {
          let optionStyle = questionStyles.option;
          let textStyle = questionStyles.optionText;
          let iconName = null;

          if (answered) {
            if (index === correctIndex) {
              optionStyle = [optionStyle, questionStyles.optionCorrect];
              textStyle = [textStyle, questionStyles.optionTextCorrect];
              iconName = 'checkmark-circle';
            } else if (index === selectedIndex) {
              optionStyle = [optionStyle, questionStyles.optionWrong];
              textStyle = [textStyle, questionStyles.optionTextWrong];
              iconName = 'close-circle';
            } else {
              optionStyle = [optionStyle, questionStyles.optionDisabled];
              textStyle = [textStyle, questionStyles.optionTextDisabled];
            }
          } else if (index === selectedIndex) {
            optionStyle = [optionStyle, questionStyles.optionSelected];
            textStyle = [textStyle, questionStyles.optionTextSelected];
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={() => !answered && onSelect(index)}
              activeOpacity={0.7}
              style={optionStyle}
              disabled={answered}
            >
              <Text style={textStyle}>{option}</Text>
              {iconName && (
                <Ionicons
                  name={iconName}
                  size={20}
                  color={index === correctIndex ? colors.success : colors.error}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function LessonScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { lessonId, moduleId } = route.params || {};

  const { completeLesson, isLessonUnlocked, isLessonCompleted } = useProgress();

  const lessonNumber = parseInt(lessonId?.split('_')[1] || '1', 10);
  const unlocked = moduleId ? isLessonUnlocked(moduleId, lessonNumber) : true;
  const alreadyCompleted = moduleId ? isLessonCompleted(moduleId, lessonId) : false;

  if (!unlocked && !alreadyCompleted) {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[colors.gradientStart, colors.gradientEnd]} style={styles.header}>
          <SafeAreaView>
            <View style={styles.headerTop}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="chevron-back" size={24} color={colors.white} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Aula bloqueada</Text>
              <View style={styles.headerRight} />
            </View>
          </SafeAreaView>
        </LinearGradient>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: spacing.xl }}>
          <Ionicons name="lock-closed-outline" size={64} color={colors.textMuted} />
          <Text style={{ color: colors.textMuted, fontSize: typography.fontSize.lg, marginTop: spacing.lg, textAlign: 'center' }}>
            Complete a aula anterior para desbloquear esta.
          </Text>
        </View>
      </View>
    );
  }

  const lesson = ALL_LESSON_DATA[lessonId] || ALL_LESSON_DATA.logica_1;
  const steps = lesson.steps;
  const totalSteps = steps.length;

  const [currentStep, setCurrentStep] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  const [completed, setCompleted] = useState(false);

  const step = steps[currentStep];
  const isLastStep = currentStep === totalSteps - 1;
  const isFirstStep = currentStep === 0;

  function handleNext() {
    if (isLastStep) {
      if (moduleId) {
        completeLesson(moduleId, lessonId);
      }
      setCompleted(true);
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  }

  function handleBack() {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }

  function handleQuestionSelect(optionIndex) {
    const stepKey = currentStep;
    setQuestionAnswers((prev) => ({ ...prev, [stepKey]: optionIndex }));
  }

  function handleCheckAnswer() {
    const stepKey = currentStep;
    setShowExplanation((prev) => ({ ...prev, [stepKey]: true }));
  }

  function renderStepContent() {
    switch (step.type) {
      case 'intro':
        return (
          <View style={contentStyles.stepContainer}>
            <View style={contentStyles.introIconWrap}>
              <LinearGradient
                colors={[colors.gradientStart, colors.gradientEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={contentStyles.introIcon}
              >
                <Ionicons name={step.icon} size={36} color={colors.white} />
              </LinearGradient>
            </View>
            <Text style={contentStyles.stepTitle}>{step.title}</Text>
            <Text style={contentStyles.stepText}>{step.text}</Text>
          </View>
        );

      case 'content':
        return (
          <View style={contentStyles.stepContainer}>
            <Text style={contentStyles.stepTitle}>{step.title}</Text>
            <Text style={contentStyles.stepText}>{step.text}</Text>
            {step.highlight && (
              <View style={contentStyles.highlightBox}>
                <Ionicons name="bulb-outline" size={18} color={colors.warning} />
                <Text style={contentStyles.highlightText}>{step.highlight}</Text>
              </View>
            )}
          </View>
        );

      case 'diagram':
        return (
          <View style={contentStyles.stepContainer}>
            <Text style={contentStyles.stepTitle}>{step.title}</Text>
            <Text style={contentStyles.stepText}>{step.text}</Text>
            <View style={contentStyles.diagramWrap}>
              {step.diagram === 'flow' && <FlowDiagram items={step.items} />}
              {step.diagram === 'sequence' && <SequenceDiagram items={step.items} />}
              {step.diagram === 'io' && <IODiagram items={step.items} />}
            </View>
          </View>
        );

      case 'question': {
        const selectedIndex = questionAnswers[currentStep];
        const answered = showExplanation[currentStep];
        return (
          <View style={contentStyles.stepContainer}>
            <Text style={contentStyles.stepTitle}>{step.title}</Text>
            <QuestionCard
              question={step.question}
              options={step.options}
              selectedIndex={selectedIndex}
              correctIndex={step.correctIndex}
              onSelect={handleQuestionSelect}
              answered={answered}
            />
            {selectedIndex !== undefined && !answered && (
              <TouchableOpacity
                onPress={handleCheckAnswer}
                activeOpacity={0.8}
                style={contentStyles.checkButton}
              >
                <LinearGradient
                  colors={[colors.gradientStart, colors.gradientEnd]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={contentStyles.checkButtonGradient}
                >
                  <Text style={contentStyles.checkButtonText}>Verificar resposta</Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
            {answered && (
              <View style={contentStyles.explanationBox}>
                <View style={[
                  contentStyles.explanationIcon,
                  selectedIndex === step.correctIndex
                    ? contentStyles.explanationCorrect
                    : contentStyles.explanationWrong,
                ]}>
                  <Ionicons
                    name={selectedIndex === step.correctIndex ? 'checkmark-circle' : 'alert-circle'}
                    size={22}
                    color={colors.white}
                  />
                  <Text style={contentStyles.explanationTitle}>
                    {selectedIndex === step.correctIndex ? 'Correto!' : 'Ops!'}
                  </Text>
                </View>
                <Text style={contentStyles.explanationText}>{step.explanation}</Text>
              </View>
            )}
          </View>
        );
      }

      case 'conclusion':
        return (
          <View style={contentStyles.stepContainer}>
            <View style={contentStyles.conclusionIconWrap}>
              <LinearGradient
                colors={['#22C55E', '#16A34A']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={contentStyles.conclusionIcon}
              >
                <Ionicons name="trophy" size={40} color={colors.white} />
              </LinearGradient>
            </View>
            <Text style={contentStyles.conclusionTitle}>{step.title}</Text>
            <Text style={contentStyles.stepText}>{step.text}</Text>
          </View>
        );

      default:
        return null;
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <SafeAreaView>
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="chevron-back" size={24} color={colors.white} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{lesson.title}</Text>
            <View style={styles.headerRight} />
          </View>
          <StepIndicator current={currentStep} total={totalSteps} />
        </SafeAreaView>
      </LinearGradient>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderStepContent()}
      </ScrollView>

      <View style={styles.footer}>
        {!completed ? (
          <View style={styles.footerRow}>
            <TouchableOpacity
              onPress={handleBack}
              disabled={isFirstStep}
              activeOpacity={0.7}
              style={[styles.footerBtn, styles.footerBtnBack, isFirstStep && styles.footerBtnDisabled]}
            >
              <Ionicons
                name="chevron-back"
                size={20}
                color={isFirstStep ? colors.textMuted : colors.text}
              />
              <Text style={[styles.footerBtnBackText, isFirstStep && styles.footerBtnTextDisabled]}>
                Voltar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNext}
              activeOpacity={0.8}
              style={styles.footerBtnNext}
            >
              <LinearGradient
                colors={[colors.gradientStart, colors.gradientEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.footerBtnNextGradient}
              >
                <Text style={styles.footerBtnNextText}>
                  {isLastStep ? 'Concluir' : 'Continuar'}
                </Text>
                <Ionicons name="arrow-forward" size={18} color={colors.white} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={styles.completedButton}
          >
            <LinearGradient
              colors={['#22C55E', '#16A34A']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.completedButtonGradient}
            >
              <Ionicons name="checkmark-circle" size={22} color={colors.white} />
              <Text style={styles.completedButtonText}>Aula Concluída! Voltar</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingBottom: spacing.lg,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.base,
    paddingTop: spacing.sm,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
    letterSpacing: typography.letterSpacing.wide,
    marginHorizontal: spacing.sm,
  },
  headerRight: {
    width: 40,
  },
  scrollContent: {
    padding: spacing.xl,
    paddingBottom: spacing.xxl,
  },
  footer: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.base,
    borderTopWidth: 1,
    borderTopColor: colors.border + '20',
    backgroundColor: colors.background,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  footerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border + '40',
  },
  footerBtnBack: {
    flex: 1,
  },
  footerBtnBackText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginLeft: spacing.xs,
  },
  footerBtnDisabled: {
    opacity: 0.4,
  },
  footerBtnTextDisabled: {
    color: colors.textMuted,
  },
  footerBtnNext: {
    flex: 2,
    ...shadows.md,
  },
  footerBtnNextGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
    borderRadius: radius.xl,
  },
  footerBtnNextText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
  completedButton: {
    ...shadows.md,
  },
  completedButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md + 2,
    borderRadius: radius.xl,
  },
  completedButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
});

const contentStyles = StyleSheet.create({
  stepContainer: {
    gap: spacing.lg,
  },
  introIconWrap: {
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  introIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.glow,
  },
  stepTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    letterSpacing: typography.letterSpacing.wide,
  },
  stepText: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.md * typography.lineHeight.relaxed,
  },
  highlightBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderLeftWidth: 3,
    borderLeftColor: colors.warning,
    padding: spacing.base,
    borderRadius: radius.md,
  },
  highlightText: {
    flex: 1,
    fontSize: typography.fontSize.sm,
    color: colors.warning,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  diagramWrap: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border + '30',
    ...shadows.md,
    alignItems: 'center',
  },
  checkButton: {
    ...shadows.md,
  },
  checkButtonGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: radius.xl,
  },
  checkButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
  explanationBox: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.base,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
    ...shadows.sm,
  },
  explanationIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  explanationCorrect: {
    borderLeftColor: colors.success,
  },
  explanationWrong: {
    borderLeftColor: colors.error,
  },
  explanationTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  explanationText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  conclusionIconWrap: {
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  conclusionIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.glow,
  },
  conclusionTitle: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    textAlign: 'center',
    letterSpacing: typography.letterSpacing.wide,
  },
});

const indicatorStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  dotActive: {
    width: 28,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  dotCompleted: {
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
});

const diagramStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  flowRow: {
    alignItems: 'center',
  },
  flowBox: {
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.lg,
    paddingVertical: spacing.md + 2,
    paddingHorizontal: spacing.xl,
    borderWidth: 1,
    borderColor: colors.primary + '40',
    minWidth: 160,
    alignItems: 'center',
  },
  flowText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
  },
  arrowContainer: {
    paddingVertical: spacing.xs,
    alignItems: 'center',
  },
  sequenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  sequenceBox: {
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.primary + '30',
    alignItems: 'center',
    minWidth: 100,
  },
  sequenceNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  sequenceNumberText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
  sequenceText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.text,
    textAlign: 'center',
  },
  sequenceArrow: {
    paddingHorizontal: spacing.xs,
  },
  ioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ioBox: {
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
    alignItems: 'center',
    minWidth: 100,
    gap: spacing.xs,
  },
  ioInput: {
    backgroundColor: 'rgba(0, 212, 255, 0.15)',
    borderWidth: 1,
    borderColor: colors.cyberBlue + '40',
  },
  ioProcess: {
    backgroundColor: 'rgba(139, 61, 255, 0.15)',
    borderWidth: 1,
    borderColor: colors.primaryPurple + '40',
  },
  ioOutput: {
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
    borderWidth: 1,
    borderColor: colors.success + '40',
  },
  ioText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    textAlign: 'center',
  },
  ioArrow: {
    paddingHorizontal: spacing.xs,
  },
});

const questionStyles = StyleSheet.create({
  container: {
    gap: spacing.base,
  },
  question: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.text,
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
  },
  options: {
    gap: spacing.sm,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.base,
    borderWidth: 1,
    borderColor: colors.border + '30',
    ...shadows.sm,
  },
  optionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.surface,
  },
  optionText: {
    flex: 1,
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.md * typography.lineHeight.relaxed,
  },
  optionTextSelected: {
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
  optionCorrect: {
    borderColor: colors.success,
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
  },
  optionTextCorrect: {
    color: colors.success,
    fontWeight: typography.fontWeight.semibold,
  },
  optionWrong: {
    borderColor: colors.error,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  optionTextWrong: {
    color: colors.error,
    fontWeight: typography.fontWeight.semibold,
  },
  optionDisabled: {
    opacity: 0.5,
  },
  optionTextDisabled: {
    color: colors.textMuted,
  },
});
