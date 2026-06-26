import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors, spacing, typography, radius, shadows } from '../theme';

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
  const { lessonId } = route.params || {};

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
