const mockQuestions = [
  {
    id: 1,
    question: 'O que é Lógica de Programação?',
    options: [
      'Uma linguagem de programação específica',
      'A técnica de organizar pensamentos para criar instruções que o computador entenda',
      'Um tipo de hardware de computador',
      'Um aplicativo usado para programar',
    ],
    correctAnswer: 1,
    explanation: 'Lógica de Programação é a técnica de organizar o raciocínio para criar instruções claras e sequenciais que o computador possa executar.',
  },
  {
    id: 2,
    question: 'O que é um algoritmo?',
    options: [
      'Um equipamento utilizado para processar dados',
      'Uma sequência finita e bem definida de passos para resolver um problema',
      'Um tipo de dado armazenado na memória',
      'Uma linguagem de programação específica',
    ],
    correctAnswer: 1,
    explanation: 'Algoritmo é uma sequência finita e bem definida de instruções que, quando executadas, resolvem um problema ou realizam uma tarefa.',
  },
  {
    id: 3,
    question: 'Qual símbolo de fluxograma é usado para representar uma decisão?',
    options: [
      'Elipse',
      'Retângulo',
      'Losango',
      'Paralelogramo',
    ],
    correctAnswer: 2,
    explanation: 'O losango é o símbolo usado para representar decisões condicionais em fluxogramas, sempre com duas ou mais saídas possíveis.',
  },
  {
    id: 4,
    question: 'O que é uma variável na programação?',
    options: [
      'Um valor que nunca muda no programa',
      'Um espaço na memória para armazenar dados que podem variar',
      'Um tipo específico de dado',
      'Uma função matemática',
    ],
    correctAnswer: 1,
    explanation: 'Variável é um espaço na memória do computador onde armazenamos dados que podem ser alterados durante a execução do programa.',
  },
  {
    id: 5,
    question: 'Qual destes é um nome válido para variável?',
    options: [
      '2nome',
      'nome completo',
      'nome_completo',
      'nome-completo',
    ],
    correctAnswer: 2,
    explanation: '"nome_completo" é válido porque começa com letra e usa underscore. Os outros têm números no início, espaços ou hífen, que não são permitidos.',
  },
  {
    id: 6,
    question: 'Qual tipo de dado é mais adequado para armazenar um valor verdadeiro ou falso?',
    options: [
      'Inteiro',
      'String',
      'Booleano',
      'Real',
    ],
    correctAnswer: 2,
    explanation: 'O tipo booleano (lógico) é usado para representar valores de verdade: verdadeiro (true) ou falso (false).',
  },
  {
    id: 7,
    question: 'Qual o resultado da expressão: (10 + 5) * 2?',
    options: [
      '20',
      '25',
      '30',
      '15',
    ],
    correctAnswer: 2,
    explanation: 'Primeiro resolvemos os parênteses: 10 + 5 = 15. Depois multiplicamos: 15 * 2 = 30.',
  },
  {
    id: 8,
    question: 'O que o operador lógico AND (&&) retorna?',
    options: [
      'True se pelo menos uma condição for verdadeira',
      'True somente se ambas as condições forem verdadeiras',
      'Sempre false',
      'Sempre true',
    ],
    correctAnswer: 1,
    explanation: 'O operador AND (&&) retorna true somente quando todas as condições envolvidas são verdadeiras.',
  },
  {
    id: 9,
    question: 'Qual estrutura de repetição garante que o bloco execute pelo menos uma vez?',
    options: [
      'while',
      'for',
      'do-while',
      'if',
    ],
    correctAnswer: 2,
    explanation: 'do-while executa o bloco primeiro e depois testa a condição, garantindo pelo menos uma execução.',
  },
  {
    id: 10,
    question: 'Quando é mais adequado usar switch-case em vez de if-else?',
    options: [
      'Quando precisamos comparar uma variável com muitos valores fixos diferentes',
      'Quando temos apenas uma condição simples',
      'Switch-case substitui totalmente o if-else',
      'Quando precisamos de operadores relacionais como > e <',
    ],
    correctAnswer: 0,
    explanation: 'switch-case é ideal quando comparamos uma única variável com diversos valores fixos e conhecidos.',
  },
];

export default mockQuestions;
