import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadows } from '../theme';
import { useProgress } from '../context/ProgressContext';

const LESSON_DATA = {
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

  const lesson = LESSON_DATA[lessonId] || LESSON_DATA.logica_1;
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
