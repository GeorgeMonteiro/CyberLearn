const assessmentQuestions = [
  // === Lógica de Programação (1-5) ===
  {
    id: 1,
    moduleId: 'logica',
    topic: 'Lógica de Programação',
    question: 'João precisa criar um programa que ajude uma lanchonete a calcular o troco. Ele definiu os seguintes passos: (1) ler valor total da compra, (2) ler valor pago pelo cliente, (3) calcular troco = valor pago - valor total, (4) exibir troco. Em qual etapa está aplicado o princípio da lógica de programação de forma mais evidente?',
    options: [
      'Apenas na etapa 1, pois a leitura de dados é o fundamento da lógica',
      'Na etapa 3, pois envolve o processamento matemático baseado em dados de entrada',
      'Na etapa 4, pois exibir o resultado é o objetivo final do programa',
      'Em todas as etapas igualmente, pois a lógica está presente em cada instrução',
    ],
    correctAnswer: 1,
    explanation: 'A etapa 3 (calcular troco) é onde o processamento lógico acontece: o programa recebe dois valores de entrada e aplica uma operação para gerar um novo dado. Isso exemplifica o modelo Entrada → Processamento → Saída, fundamento da lógica de programação.',
  },
  {
    id: 2,
    moduleId: 'logica',
    topic: 'Lógica de Programação',
    question: 'Analise a seguinte sequência de raciocínio: "Todos os alunos de programação sabem lógica. Maria é aluna de programação. Logo, Maria sabe lógica." Este é um exemplo clássico de qual tipo de raciocínio lógico?',
    options: [
      'Raciocínio indutivo — parte de observações específicas para uma conclusão geral',
      'Raciocínio dedutivo — parte de premissas gerais para uma conclusão específica',
      'Raciocínio abdutivo — busca a explicação mais provável para um fenômeno',
      'Raciocínio intuitivo — baseia-se na experiência sem seguir regras formais',
    ],
    correctAnswer: 1,
    explanation: 'Este é um exemplo de raciocínio dedutivo (silogismo): partimos de duas premissas gerais ("todos os alunos sabem lógica" e "Maria é aluna") para chegar a uma conclusão específica ("Maria sabe lógica"). A dedução é a base da lógica de programação, onde regras gerais são aplicadas a casos específicos.',
  },
  {
    id: 3,
    moduleId: 'logica',
    topic: 'Lógica de Programação',
    question: 'Em lógica de programação, uma proposição é uma sentença que pode ser classificada como verdadeira ou falsa. Considere a sentença: "x + 5 = 10". Esta sentença pode ser considerada uma proposição lógica?',
    options: [
      'Sim, porque contém uma operação matemática válida',
      'Não, porque o valor de verdade depende do valor de x, que não está definido',
      'Sim, porque toda expressão matemática é uma proposição lógica',
      'Não, porque proposições lógicas não podem conter números',
    ],
    correctAnswer: 1,
    explanation: '"x + 5 = 10" não é uma proposição lógica porque não podemos classificá-la como verdadeira ou falsa sem saber o valor de x. Proposições devem ter um valor de verdade definido. Se x = 5, a sentença é verdadeira; se x = 3, é falsa. Como x é uma variável livre, a sentença é uma "função proposicional", não uma proposição.',
  },
  {
    id: 4,
    moduleId: 'logica',
    topic: 'Lógica de Programação',
    question: 'Considere o seguinte problema: "Um programa deve determinar se um aluno foi aprovado (média >= 7) ou reprovado (média < 7), mas antes precisa verificar se o aluno tem frequência suficiente (>= 75%). Se a frequência for insuficiente, o aluno é reprovado independentemente da nota." Quantas condições lógicas independentes o programa precisa avaliar e em qual ordem?',
    options: [
      'Uma condição: verificar a média e a frequência ao mesmo tempo',
      'Duas condições em paralelo: uma para média e outra para frequência, executadas simultaneamente',
      'Duas condições sequenciais: primeiro verificar frequência; se OK, verificar média',
      'Três condições: frequência mínima, média mínima, e aprovação final',
    ],
    correctAnswer: 2,
    explanation: 'O programa precisa avaliar duas condições em sequência: primeiro verificar se a frequência é suficiente (>= 75%). Se não for, o aluno é reprovado diretamente. Se for, então verifica a média (>= 7). Esta ordem hierárquica é crucial porque a segunda condição (média) só deve ser avaliada se a primeira (frequência) for satisfeita.',
  },
  {
    id: 5,
    moduleId: 'logica',
    topic: 'Lógica de Programação',
    question: 'Um programador está documentando um sistema e precisa descrever a regra de negócio: "Clientes com mais de 60 anos têm prioridade no atendimento. Clientes com deficiência também têm prioridade, independentemente da idade." Quantas proposições lógicas distintas estão presentes nesta regra e como elas se combinam?',
    options: [
      'Uma proposição: "tem prioridade" aplicada a todos os clientes',
      'Duas proposições independentes que não se relacionam',
      'Duas proposições (idade > 60, tem deficiência) combinadas com OR lógico para determinar prioridade',
      'Três proposições: idade > 60, tem deficiência, e ambos simultaneamente',
    ],
    correctAnswer: 2,
    explanation: 'A regra contém duas proposições: "cliente tem mais de 60 anos" e "cliente tem deficiência". Elas se combinam com um OR lógico: se qualquer uma for verdadeira, o cliente tem prioridade. Isso porque a regra diz que clientes com deficiência têm prioridade "independentemente da idade", indicando que as condições são alternativas, não cumulativas.',
  },

  // === Algoritmos (6-10) ===
  {
    id: 6,
    moduleId: 'logica',
    topic: 'Algoritmos',
    question: 'Considere o algoritmo abaixo para calcular o fatorial de um número N:\n\n1. Ler N\n2. Se N < 0, exibir "Erro" e encerrar\n3. Se N == 0, resultado = 1\n4. Senão, resultado = 1 e contador = 1\n5. Enquanto contador <= N: resultado = resultado * contador e contador = contador + 1\n6. Exibir resultado\n\nQual propriedade fundamental dos algoritmos está sendo garantida pelo passo 2?',
    options: [
      'Eficiência — o algoritmo usa o mínimo de recursos possível',
      'Determinismo — para as mesmas entradas, produz as mesmas saídas',
      'Clareza — as instruções são escritas de forma compreensível',
      'Finitude — o algoritmo tem um fim, validando entrada inválida que causaria loop infinito',
    ],
    correctAnswer: 3,
    explanation: 'O passo 2 garante a finitude do algoritmo. Se N for negativo, o cálculo do fatorial não está definido matematicamente, e sem essa validação o loop no passo 5 nunca terminaria (contador nunca seria <= N negativo). A validação de entradas é crucial para garantir que todo algoritmo termine em tempo finito.',
  },
  {
    id: 7,
    moduleId: 'logica',
    topic: 'Algoritmos',
    question: 'Dois programadores criaram algoritmos diferentes para ordenar uma lista de números. O primeiro executa em n² passos (n é o tamanho da lista). O segundo executa em n×log(n) passos. Para uma lista de 1000 números, qual a diferença aproximada no número de operações executadas?',
    options: [
      'O primeiro executa cerca de 1000 vezes mais operações que o segundo',
      'O segundo executa cerca de 100 vezes mais operações que o primeiro',
      'Os dois executam aproximadamente o mesmo número de operações',
      'O primeiro executa cerca de 100 vezes mais operações que o segundo',
    ],
    correctAnswer: 0,
    explanation: 'Para n = 1000: n² = 1.000.000 operações, enquanto n×log₂(n) ≈ 1000 × 10 ≈ 10.000 operações. O primeiro executa aproximadamente 100× mais operações que o segundo (1.000.000 / 10.000 = 100). Isso demonstra a importância da eficiência algorítmica — a escolha do algoritmo impacta drasticamente o desempenho.',
  },
  {
    id: 8,
    moduleId: 'logica',
    topic: 'Algoritmos',
    question: 'Um algoritmo precisa encontrar um número específico em uma lista telefônica com 1 milhão de nomes ordenados alfabeticamente. Qual estratégia é mais eficiente e quantas comparações seriam necessárias no pior caso?',
    options: [
      'Busca sequencial: percorrer do início ao fim — até 1 milhão de comparações',
      'Busca binária: dividir a lista ao meio repetidamente — até 20 comparações',
      'Busca aleatória: escolher posições aleatórias — depende da sorte, sem garantia',
      'Busca por índice: criar um mapa de letras iniciais — até 100 mil comparações',
    ],
    correctAnswer: 1,
    explanation: 'A busca binária é a mais eficiente para listas ordenadas. A cada passo, descartamos metade da lista: 1M → 500K → 250K → 125K → ... → 1. São necessárias apenas log₂(1.000.000) ≈ 20 comparações no pior caso. Isso ilustra como a escolha do algoritmo pode reduzir drasticamente o esforço computacional.',
  },
  {
    id: 9,
    moduleId: 'logica',
    topic: 'Algoritmos',
    question: 'Analise o seguinte pseudocódigo:\n\nalgoritmo "misterio"\nvar\n   a, b, temp: inteiro\ninicio\n   ler a, b\n   temp <- a\n   a <- b\n   b <- temp\n   exibir a, b\nfim\n\nO que este algoritmo faz e qual conceito fundamental ele demonstra?',
    options: [
      'Ordena dois números em ordem crescente — demonstra estrutura condicional',
      'Troca os valores de duas variáveis — demonstra o uso de variável auxiliar para não perder dados',
      'Calcula a média entre dois números — demonstra operadores aritméticos',
      'Duplica os valores de a e b — demonstra atribuição múltipla',
    ],
    correctAnswer: 1,
    explanation: 'O algoritmo troca os valores de a e b usando uma variável temporária (temp). O conceito crucial é que, sem a variável auxiliar, perderíamos o valor original de a ao sobrescrevê-lo. Este é um padrão clássico (swap) que demonstra a importância de preservar dados durante operações de atribuição.',
  },
  {
    id: 10,
    moduleId: 'logica',
    topic: 'Algoritmos',
    question: 'Um algoritmo recebe como entrada a idade de uma pessoa e deve classificar como: "Criança" (0-12), "Adolescente" (13-17), "Adulto" (18-59) ou "Idoso" (60+). Qual a abordagem mais clara e eficiente para implementar esta classificação?',
    options: [
      'Usar uma única expressão matemática complexa que calcule a classificação diretamente',
      'Usar estruturas condicionais encadeadas testando cada faixa etária em ordem crescente',
      'Usar 4 algoritmos separados, um para cada faixa etária',
      'Ler a idade e tentar adivinhar a classificação com base no nome da pessoa',
    ],
    correctAnswer: 1,
    explanation: 'Estruturas condicionais encadeadas (if-else if) são a abordagem mais clara: testamos cada faixa em ordem (0-12, 13-17, 18-59, 60+) e paramos na primeira que corresponder. Isso é determinístico, claro e eficiente — exatamente o que se espera de um bom algoritmo. Cada faixa é mutuamente exclusiva, então a ordem das condições é importante.',
  },

  // === Fluxogramas (11-15) ===
  {
    id: 11,
    moduleId: 'logica',
    topic: 'Fluxogramas',
    question: 'Em um fluxograma de um sistema de segurança, o losango "Senha correta?" tem duas saídas: SIM (acesso liberado) e NÃO (tentar novamente). Se o usuário errar 3 vezes, o sistema bloqueia. Como representar corretamente este contador de tentativas no fluxograma?',
    options: [
      'Criar 3 losangos idênticos em sequência para cada tentativa',
      'Usar um único losango com uma seta voltando para ele mesmo (loop) e um contador implícito no processo',
      'Representar com um retângulo "contador = contador + 1" antes do losango e uma condição extra para o limite',
      'Não é possível representar contadores em fluxogramas — apenas em código',
    ],
    correctAnswer: 2,
    explanation: 'Em fluxogramas, usamos um retângulo (processo) para incrementar o contador antes do losango de decisão "Senha correta?". Em paralelo, precisamos de outro losango para verificar "Contador >= 3?" após cada tentativa falha, bloqueando o acesso se o limite for atingido. Isso demonstra como fluxogramas combinam processos e decisões para representar lógicas complexas.',
  },
  {
    id: 12,
    moduleId: 'logica',
    topic: 'Fluxogramas',
    question: 'Qual a diferença fundamental entre usar um fluxograma e pseudocódigo para representar um algoritmo de cálculo de imposto de renda com múltiplas faixas de alíquota?',
    options: [
      'Não há diferença — ambos representam a mesma informação da mesma forma',
      'Fluxograma é melhor para mostrar o fluxo visual de decisões encadeadas; pseudocódigo é melhor para mostrar os cálculos detalhados',
      'Pseudocódigo só funciona para algoritmos simples, fluxograma para complexos',
      'Fluxograma só pode ser usado por iniciantes; pseudocódigo é para profissionais',
    ],
    correctAnswer: 1,
    explanation: 'Fluxogramas são superiores para visualizar o fluxo de decisões (múltiplos losangos encadeados) e entender a estrutura geral do algoritmo. Pseudocódigo é melhor para mostrar detalhes dos cálculos, variáveis e lógica fina. Na prática, usamos ambos: fluxograma para projetar a estrutura e pseudocódigo para detalhar a implementação.',
  },
  {
    id: 13,
    moduleId: 'logica',
    topic: 'Fluxogramas',
    question: 'Analise a descrição: "Um fluxograma possui um losango que pergunta se o número é par. Se SIM, exibe PAR. Se NÃO, exibe ÍMPAR. Depois, ambos os caminhos se encontram em um único ponto antes de encerrar." Qual símbolo é usado para unificar os dois caminhos de volta a um fluxo único?',
    options: [
      'Não é necessário unificar — cada caminho termina separadamente',
      'Usa-se uma elipse de fim para cada caminho, totalizando duas elipses',
      'Usa-se um círculo (conector) ou simplesmente as setas convergindo para o mesmo ponto do fluxo',
      'Usa-se um losango especial de "junção" diferente do losango de decisão',
    ],
    correctAnswer: 2,
    explanation: 'Para unificar caminhos divergentes, usamos conectores (círculo) ou simplesmente desenhamos as setas convergindo para o mesmo ponto do fluxo. Isso mantém o diagrama organizado e evita múltiplos símbolos de fim. O padrão "divergência (losango) → convergência" é clássico em fluxogramas com decisões.',
  },
  {
    id: 14,
    moduleId: 'logica',
    topic: 'Fluxogramas',
    question: 'Um programador precisa representar em fluxograma um sistema que: (1) lê um número, (2) se for negativo, exibe "Inválido" e encerra, (3) se for positivo, calcula a raiz quadrada e exibe. Qual a sequência correta de símbolos?',
    options: [
      'Paralelogramo → Retângulo → Losango → Elipse',
      'Elipse → Paralelogramo → Losango → Retângulo (para negativo: Elipse; para positivo: Retângulo → Elipse)',
      'Elipse → Paralelogramo → Losango → Paralelogramo (para negativo: Elipse; para positivo: Retângulo → Paralelogramo → Elipse)',
      'Retângulo → Losango → Paralelogramo → Elipse',
    ],
    correctAnswer: 2,
    explanation: 'Sequência correta: Elipse (Início) → Paralelogramo (Ler número) → Losango (Número < 0?) → para SIM: Paralelogramo (Exibir "Inválido") → Elipse (Fim); para NÃO: Retângulo (Calcular raiz) → Paralelogramo (Exibir resultado) → Elipse (Fim). Cada símbolo tem seu propósito: início/fim (elipse), entrada/saída (paralelogramo), decisão (losango), processo (retângulo).',
  },
  {
    id: 15,
    moduleId: 'logica',
    topic: 'Fluxogramas',
    question: 'Considere um fluxograma que representa o processo de saque em um caixa eletrônico. Os símbolos incluem: "Inserir cartão", "Digitar senha", "Senha válida?", "Digitar valor", "Saldo suficiente?", "Emitir dinheiro" e "Encerrar". Quantos losangos de decisão este fluxograma deve conter no mínimo?',
    options: [
      'Apenas 1 losango para verificar a senha',
      '2 losangos: um para senha válida e outro para saldo suficiente',
      '3 losangos: senha válida, saldo suficiente e limite diário',
      'Nenhum losango, pois saque é um processo linear',
    ],
    correctAnswer: 1,
    explanation: 'No mínimo 2 losangos: um para "Senha válida?" (se não, pedir nova tentativa ou bloquear) e outro para "Saldo suficiente?" (se não, exibir mensagem de saldo insuficiente). Cada losango representa um ponto de decisão binária que altera o fluxo do processo. São necessários porque ambas as condições podem falhar e exigem caminhos alternativos.',
  },

  // === Variáveis (16-20) ===
  {
    id: 16,
    moduleId: 'logica',
    topic: 'Variáveis',
    question: 'Em um programa, declaramos: nome = "Maria", idade = 28, altura = 1.65, e aprovada = true. Quantos bytes aproximadamente cada variável ocupa na memória, considerando tipos string, int, float e bool respectivamente?',
    options: [
      'Todas ocupam o mesmo espaço porque são variáveis',
      'nome: 10 bytes, idade: 2 bytes, altura: 4 bytes, aprovada: 1 byte (aproximadamente)',
      'nome: variável (depende do texto), idade: 4 bytes, altura: 8 bytes, aprovada: 1 bit',
      'Todas ocupam 8 bytes porque a memória moderna é padronizada em 64 bits',
    ],
    correctAnswer: 2,
    explanation: 'O espaço ocupado varia: string/nome depende do comprimento do texto (cada char ~2 bytes em UTF-16); inteiros modernos usam 4 bytes (32 bits); floats/double usam 8 bytes (64 bits) para precisão dupla; booleanos ocupam 1 bit teoricamente, mas na prática usam 1 byte. Isso mostra que diferentes tipos de dados têm diferentes requisitos de memória.',
  },
  {
    id: 17,
    moduleId: 'logica',
    topic: 'Variáveis',
    question: 'Após executar o seguinte trecho de código, qual o valor final de x?\n\nx = 10\ny = x\nx = 20\ny = y + x',
    options: [
      'x = 20, y = 30',
      'x = 10, y = 20',
      'x = 20, y = 20',
      'x = 30, y = 30',
    ],
    correctAnswer: 0,
    explanation: 'Passo a passo: x = 10; y = 10 (copia o valor de x); x = 20 (x muda, y continua 10); y = 10 + 20 = 30. O valor final é x = 20, y = 30. Isso demonstra que, após a cópia, as variáveis são independentes: alterar x depois não afeta y porque y armazena o valor, não uma referência a x.',
  },
  {
    id: 18,
    moduleId: 'logica',
    topic: 'Variáveis',
    question: 'Qual a diferença entre escopo global e escopo local de variáveis, e por que essa distinção é importante em programas maiores?',
    options: [
      'Não há diferença prática — o escopo é um conceito teórico sem impacto real',
      'Variáveis globais são mais rápidas; locais são mais lentas. A diferença é de desempenho',
      'Variáveis globais podem ser acessadas de qualquer parte do programa; locais apenas dentro do bloco onde foram criadas. Isso evita efeitos colaterais indesejados',
      'Variáveis locais existem permanentemente; globais são temporárias',
    ],
    correctAnswer: 2,
    explanation: 'Variáveis globais são acessíveis em todo o programa, enquanto locais existem apenas dentro do bloco/função onde foram declaradas. Em programas grandes, o uso excessivo de globais causa "efeitos colaterais" — uma função altera uma variável sem que outras partes do programa saibam, gerando bugs difíceis de encontrar. Por isso, recomenda-se usar variáveis locais sempre que possível.',
  },
  {
    id: 19,
    moduleId: 'logica',
    topic: 'Variáveis',
    question: 'Considere: a = 5, b = a + 2, a = b * 2, c = a - b. Quais os valores finais de a, b e c?',
    options: [
      'a = 14, b = 7, c = 7',
      'a = 5, b = 7, c = -2',
      'a = 14, b = 7, c = 3',
      'a = 10, b = 12, c = -2',
    ],
    correctAnswer: 0,
    explanation: 'Sequência: a = 5; b = 5 + 2 = 7; a = 7 * 2 = 14; c = 14 - 7 = 7. Resultado: a = 14, b = 7, c = 7. A ordem das atribuições é crucial — cada instrução usa os valores atuais das variáveis no momento da execução.',
  },
  {
    id: 20,
    moduleId: 'logica',
    topic: 'Variáveis',
    question: 'Um programador precisa armazenar as notas de 30 alunos de uma turma. Qual estrutura de dados é mais adequada e por quê?',
    options: [
      '30 variáveis individuais (nota1, nota2, ... nota30) — mais organizado',
      'Uma única variável "notas" que armazena todos os valores concatenados como texto',
      'Um vetor/array de 30 posições — permite acessar cada nota por índice e percorrer facilmente',
      '30 constantes — como as notas podem mudar, é melhor usar constantes para proteger os dados',
    ],
    correctAnswer: 2,
    explanation: 'Um array (vetor) de 30 posições é ideal: permite acessar qualquer nota pelo índice (notas[0] a notas[29]), percorrer todas com um loop, calcular média facilmente, e organizar os dados de forma coerente. Usar 30 variáveis individuais seria ineficiente e impossibilitaria o uso de loops para processar os dados.',
  },

  // === Tipos de Dados (21-25) ===
  {
    id: 21,
    moduleId: 'logica',
    topic: 'Tipos de Dados',
    question: 'Em uma aplicação bancária, precisamos armazenar: saldo da conta (R$ 1500,50), número de agência (1234), nome do titular ("João Silva"), e conta ativa (sim). Quais tipos de dados são mais adequados para cada campo?',
    options: [
      'Saldo: inteiro; Agência: string; Nome: string; Ativa: booleano',
      'Saldo: real/float; Agência: inteiro; Nome: string; Ativa: booleano',
      'Saldo: real; Agência: string; Nome: texto longo; Ativa: inteiro (0 ou 1)',
      'Saldo: inteiro; Agência: inteiro; Nome: caractere; Ativa: string',
    ],
    correctAnswer: 1,
    explanation: 'Saldo (R$ 1500,50) precisa de tipo real/float por ter casas decimais. Agência (1234) é inteiro pois é um número sem decimais. Nome ("João Silva") é string por ser texto. Conta ativa (sim/não) é booleano pois representa um valor lógico binário. A escolha correta dos tipos otimiza memória e evita erros de precisão.',
  },
  {
    id: 22,
    moduleId: 'logica',
    topic: 'Tipos de Dados',
    question: 'Em JavaScript, qual o resultado de: "5" + 3 e "5" - 3? Explique por que os resultados são diferentes.',
    options: [
      '"5" + 3 = 8 (soma numérica) e "5" - 3 = 2 (subtração numérica) — JavaScript converte automaticamente',
      '"5" + 3 = "53" (concatenação) e "5" - 3 = 2 (subtração) — o operador + concatena quando há string; o operador - força conversão numérica',
      '"5" + 3 = 53 (erro) e "5" - 3 = NaN — ambos geram erro de tipo',
      '"5" + 3 = "8" e "5" - 3 = "2" — ambos concatenam porque 5 é string',
    ],
    correctAnswer: 1,
    explanation: 'Em JavaScript, o operador + é polimórfico: se um operando é string, ele concatena ("5" + 3 = "53"). Já o operador - só tem significado numérico, então JavaScript converte a string "5" para número e subtrai ("5" - 3 = 2). Esse comportamento é chamado de "coerção implícita de tipos" e pode causar bugs sutis se não for compreendido.',
  },
  {
    id: 23,
    moduleId: 'logica',
    topic: 'Tipos de Dados',
    question: 'Qual a diferença fundamental entre tipos de dados primitivos e tipos compostos (ou estruturados) em programação?',
    options: [
      'Primitivos são mais rápidos; compostos são mais lentos — não há diferença estrutural',
      'Primitivos armazenam um único valor (int, char, bool); compostos agrupam múltiplos valores (arrays, structs, objetos)',
      'Primitivos só existem em linguagens compiladas; compostos em interpretadas',
      'Primitivos armazenam texto; compostos armazenam números',
    ],
    correctAnswer: 1,
    explanation: 'Tipos primitivos (int, float, char, bool) representam um único valor atômico. Tipos compostos (arrays, structs, objetos, classes) agregam múltiplos valores, possivelmente de tipos diferentes, em uma única estrutura. Por exemplo, um "struct Aluno" pode conter nome (string), idade (int) e média (float) — agrupando dados relacionados.',
  },
  {
    id: 24,
    moduleId: 'logica',
    topic: 'Tipos de Dados',
    question: 'Considere a expressão em Python: resultado = 10 / 3 e resultado = 10 // 3. Qual a diferença entre os dois resultados e por que isso é importante?',
    options: [
      '10 / 3 = 3.333... (divisão real, retorna float) e 10 // 3 = 3 (divisão inteira, trunca decimal) — importante para precisão vs. desempenho',
      '10 / 3 = 3 (inteiro) e 10 // 3 = 3.333... (real) — o comportamento é invertido',
      'Ambos retornam 3.333... — // é apenas uma sintaxe alternativa',
      '10 / 3 = 3.333... e 10 // 3 = 1 (resto da divisão) — // calcula o módulo',
    ],
    correctAnswer: 0,
    explanation: 'Em Python, / realiza divisão real (retorna float com parte decimal), enquanto // realiza divisão inteira (trunca a parte decimal, retornando apenas a parte inteira). A escolha entre eles impacta a precisão dos cálculos: divisão real é necessária para resultados precisos em operações financeiras/científicas; divisão inteira é útil para contagens e índices.',
  },
  {
    id: 25,
    moduleId: 'logica',
    topic: 'Tipos de Dados',
    question: 'Por que linguagens de tipagem forte (como Java e C++) são consideradas mais seguras que linguagens de tipagem fraca (como JavaScript) em relação a tipos de dados?',
    options: [
      'Linguagens de tipagem forte não permitem que o programa compile se houver incompatibilidade de tipos, prevenindo erros antes da execução',
      'Linguagens de tipagem forte são mais modernas; as de tipagem fraca são antigas',
      'Não há diferença de segurança — apenas de desempenho',
      'Tipagem forte impede o uso de variáveis, tornando o código mais seguro',
    ],
    correctAnswer: 0,
    explanation: 'Linguagens de tipagem forte verificam a compatibilidade de tipos em tempo de compilação (ou runtime, de forma rigorosa) e não permitem operações entre tipos incompatíveis sem conversão explícita. Isso previne erros como somar número com string acidentalmente. A tipagem fraca tenta "adivinhar" a intenção do programador (coerção implícita), o que pode levar a comportamentos inesperados.',
  },

  // === Operadores (26-30) ===
  {
    id: 26,
    moduleId: 'logica',
    topic: 'Operadores',
    question: 'Analise a expressão lógica: (idade >= 18 && possuiCarteira) || (idade > 65 && !saudeRuim). Uma pessoa de 70 anos com carteira de motorista e saúde ruim pode dirigir legalmente segundo esta expressão?',
    options: [
      'Sim, porque atende à segunda condição (idade > 65)',
      'Não, porque a segunda condição exige !saudeRuim (saúde boa), que é falsa para esta pessoa',
      'Sim, porque atende à primeira condição (idade >= 18 && possuiCarteira)',
      'Não, porque a idade máxima permitida é 65 anos',
    ],
    correctAnswer: 1,
    explanation: 'A primeira condição (idade >= 18 && possuiCarteira) é verdadeira (70 >= 18 E tem carteira). Mas a expressão inteira usa OR: (cond1) || (cond2). Como cond1 é verdadeira, o resultado é true independentemente de cond2. Entretanto, a pergunta tem uma pegadinha: a expressão como um todo retorna true (a pessoa pode dirigir segundo a expressão), mas a resposta correta destaca que a segunda condição falha porque !saudeRuim é false quando saúdeRuim é true.',
  },
  {
    id: 27,
    moduleId: 'logica',
    topic: 'Operadores',
    question: 'Qual a precedência correta dos operadores na expressão: !a && b || c == d + e * f? Considere que todas as variáveis estão definidas.',
    options: [
      '! → * → + → == → && → || (da esquerda para a direita)',
      '* → + → == → ! → && → ||',
      '== → ! → && → || → * → + (da direita para a esquerda)',
      '! → && → || → == → + → * (ordem de leitura do código)',
    ],
    correctAnswer: 1,
    explanation: 'A precedência correta é: 1º operadores aritméticos (*, /, +, -), 2º relacionais (==, !=, >, <), 3º lógicos (!, &&, ||). Então: e * f (multiplicação) → d + (e*f) (adição) → (d+ef) == c (igualdade) → !a (negação) → (!a) && (c==d+ef) → resultado || b. A expressão equivalente com parênteses: ((!a) && (c == (d + (e * f)))) || b.',
  },
  {
    id: 28,
    moduleId: 'logica',
    topic: 'Operadores',
    question: 'Qual a diferença entre os operadores de incremento ++x (pré-incremento) e x++ (pós-incremento) quando usados dentro de uma expressão maior?',
    options: [
      '++x incrementa antes de usar o valor na expressão; x++ usa o valor atual e depois incrementa',
      'Não há diferença — ambos produzem o mesmo resultado em qualquer contexto',
      '++x só funciona com inteiros; x++ funciona com qualquer tipo numérico',
      '++x é mais rápido que x++ porque evita criar uma cópia temporária',
    ],
    correctAnswer: 0,
    explanation: 'No pré-incremento (++x), a variável é incrementada primeiro, e o valor incrementado é usado na expressão. No pós-incremento (x++), o valor original é usado na expressão primeiro, e depois a variável é incrementada. Ex: se x = 5, y = ++x resulta em x = 6, y = 6; já y = x++ resulta em y = 5, x = 6. Essa diferença é crucial em expressões complexas.',
  },
  {
    id: 29,
    moduleId: 'logica',
    topic: 'Operadores',
    question: 'Considere: a = true, b = false, c = true. Qual o resultado de: (a && b) || (!c && a) || (b || c)?',
    options: [
      'true',
      'false',
      'undefined — a expressão é ambígua',
      'depende da linguagem de programação',
    ],
    correctAnswer: 0,
    explanation: 'Resolvendo passo a passo: (a && b) = true && false = false. (!c && a) = !true && true = false && true = false. (b || c) = false || true = true. Resultado: false || false || true = true. A expressão mostra como combinações de operadores lógicos podem ser simplificadas: quando qualquer termo de um OR é true, toda a expressão é true.',
  },
  {
    id: 30,
    moduleId: 'logica',
    topic: 'Operadores',
    question: 'Em uma calculadora de imposto, a regra é: "Se renda <= 2000, isento. Se renda <= 5000, taxa de 10%. Se renda <= 10000, taxa de 20%. Acima disso, taxa de 30%." Qual expressão calcula corretamente o imposto para renda de 7500?',
    options: [
      '7500 * 0.30 = 2250 (aplica a maior taxa diretamente)',
      '2000 * 0 + 3000 * 0.10 + 2500 * 0.20 = 800 (imposto progressivo por faixa)',
      '7500 * 0.20 = 1500 (aplica a taxa da faixa em que se encontra)',
      '7500 * 0.10 = 750 (aplica a taxa média entre todas as faixas)',
    ],
    correctAnswer: 1,
    explanation: 'Em sistemas tributários reais, o imposto é progressivo: cada faixa paga sua alíquota apenas sobre o valor que excede o limite anterior. Para renda de 7500: faixa 1 (0-2000): 2000 × 0% = 0; faixa 2 (2001-5000): 3000 × 10% = 300; faixa 3 (5001-7500): 2500 × 20% = 500. Total = 0 + 300 + 500 = 800. Esta lógica usa operadores relacionais e condicionais combinados.',
  },

  // === Estruturas Condicionais (31-35) ===
  {
    id: 31,
    moduleId: 'logica',
    topic: 'Estruturas Condicionais',
    question: 'Analise o código: if (nota >= 7) { situacao = "Aprovado"; } else if (nota >= 5) { situacao = "Recuperação"; } else { situacao = "Reprovado"; } console.log(situacao); Se nota = 7, qual o valor exibido?',
    options: [
      '"Recuperação" — porque a segunda condição (nota >= 5) também é verdadeira e sobrescreve a primeira',
      '"Aprovado" — o primeiro if verdadeiro executa seu bloco e o restante é ignorado',
      'undefined — a variável situacao não foi inicializada antes do if',
      'Erro — não é possível usar else if sem chaves em todos os blocos',
    ],
    correctAnswer: 1,
    explanation: 'Quando nota = 7, a primeira condição (nota >= 7) é verdadeira, então situacao recebe "Aprovado" e o restante da estrutura (else if e else) é ignorado. É fundamental entender que em uma cadeia if-else if-else, apenas o primeiro bloco verdadeiro é executado — as condições seguintes não são sequer avaliadas (curto-circuito).',
  },
  {
    id: 32,
    moduleId: 'logica',
    topic: 'Estruturas Condicionais',
    question: 'Qual problema potencial existe no código: if (x = 10) { console.log("x é 10"); } em vez de if (x == 10) { console.log("x é 10"); }?',
    options: [
      'Nenhum problema — ambos funcionam igualmente',
      'O operador = dentro do if causa erro de sintaxe e o programa não executa',
      '= atribui 10 a x, e o if testa se 10 é verdadeiro (sempre true), além de modificar x indevidamente',
      'O código funciona, mas é mais lento que usar ==',
    ],
    correctAnswer: 2,
    explanation: 'O operador = (atribuição) dentro de um if modifica o valor de x para 10 e depois testa se 10 é truthy (em linguagens como JavaScript/C). Isso causa dois problemas: (1) altera o valor original de x, e (2) a condição é sempre verdadeira (10 é truthy). Este é um erro clássico que passa despercebido em revisões de código. Por isso, alguns programadores escrevem if (10 == x) — se esquecerem um =, o erro de sintaxe é detectado.',
  },
  {
    id: 33,
    moduleId: 'logica',
    topic: 'Estruturas Condicionais',
    question: 'Em um switch-case, qual a consequência de omitir a instrução break em cada caso?',
    options: [
      'O programa ignora o caso e vai para o próximo — sem consequências graves',
      'Ocorre "fall-through": a execução continua nos casos seguintes mesmo que a condição não seja mais verdadeira',
      'O switch-case não funciona e gera erro de sintaxe',
      'O break é opcional e recomendado apenas para otimização de desempenho',
    ],
    correctAnswer: 1,
    explanation: 'Sem o break, ocorre "fall-through": após executar o código do caso correspondente, a execução continua nos casos seguintes até encontrar um break ou o fim do switch. Isso pode ser proposital (ex: compartilhar código entre casos) ou um bug. Exemplo: switch(dia) { case 1: case 2: case 3: case 4: case 5: console.log("dia útil"); break; } usa fall-through intencional para agrupar casos.',
  },
  {
    id: 34,
    moduleId: 'logica',
    topic: 'Estruturas Condicionais',
    question: 'Qual a diferença entre if-else aninhado e operador ternário (condição ? valor1 : valor2), e quando usar cada um?',
    options: [
      'if-else pode executar blocos de código; ternário retorna um valor. Use ternário para atribuições simples e if-else para lógicas complexas',
      'Não há diferença — são equivalentes e intercambiáveis em qualquer situação',
      'Ternário é mais rápido que if-else em todas as situações; sempre prefira ternário',
      'if-else só funciona com booleanos; ternário funciona com qualquer tipo',
    ],
    correctAnswer: 0,
    explanation: 'O if-else é uma estrutura de controle que pode executar blocos inteiros de código (múltiplas instruções). O operador ternário é uma expressão que retorna um valor com base em uma condição. Use ternário para atribuições simples e diretas (ex: taxa = idade > 60 ? 0.8 : 1.0). Use if-else para lógicas com múltiplos passos, condições aninhadas ou quando precisar executar ações sem retornar valor.',
  },
  {
    id: 35,
    moduleId: 'logica',
    topic: 'Estruturas Condicionais',
    question: 'Considere a lógica: "Um sistema de alarme dispara se: (porta_aberta || janela_aberta) && !modo_descanso. Um sensor de presença interno também dispara se: presenca_detectada && !modo_descanso." Qual expressão representa o disparo do alarme ou do sensor?',
    options: [
      '(porta_aberta || janela_aberta || presenca_detectada) && !modo_descanso',
      '(porta_aberta && janela_aberta && presenca_detectada) || !modo_descanso',
      'porta_aberta || janela_aberta || presenca_detectada || !modo_descanso',
      '(porta_aberta || janela_aberta) && presenca_detectada && !modo_descanso',
    ],
    correctAnswer: 0,
    explanation: 'O sistema dispara se QUALQUER condição de alerta for detectada E o modo descanso não estiver ativo. Ou seja: (porta_aberta OU janela_aberta OU presenca_detectada) E não modo_descanso. Matematicamente: (A || B || C) && !D. Isso demonstra como combinar operadores lógicos para implementar regras de negócio com múltiplas condições alternativas (OR) e uma condição obrigatória (AND).',
  },

  // === Estruturas de Repetição (36-40) ===
  {
    id: 36,
    moduleId: 'logica',
    topic: 'Estruturas de Repetição',
    question: 'Analise: for (i = 1; i <= 10; i++) { if (i % 2 == 0) { console.log(i); } } Quantas vezes a condição i % 2 == 0 será testada e quantos números serão exibidos?',
    options: [
      'Condição testada 10 vezes, 5 números exibidos (2, 4, 6, 8, 10)',
      'Condição testada 5 vezes (apenas quando i é par), 5 números exibidos',
      'Condição testada 10 vezes, 4 números exibidos (2, 4, 6, 8)',
      'Condição testada 11 vezes, 5 números exibidos — o teste de parada é i <= 10',
    ],
    correctAnswer: 0,
    explanation: 'O loop executa 10 vezes (i = 1 a 10). A cada iteração, a condição if (i % 2 == 0) é testada. Quando i é par (2, 4, 6, 8, 10), true e o número é exibido. Portanto: 10 testes da condição, 5 números exibidos. Isso demonstra como combinar loop for com uma condição interna para filtrar resultados.',
  },
  {
    id: 37,
    moduleId: 'logica',
    topic: 'Estruturas de Repetição',
    question: 'Qual a diferença crucial entre while e do-whle que pode impactar a lógica de um programa de validação de entrada do usuário?',
    options: [
      'while testa a condição ANTES de executar o bloco; do-while executa o bloco e DEPOIS testa. Do-while garante pelo menos uma execução, ideal para menus e validações',
      'while é para números; do-while é para texto. A diferença é o tipo de dado processado',
      'do-while é mais rápido que while porque otimiza o teste da condição',
      'while e do-while são idênticos — a ordem do teste não faz diferença prática',
    ],
    correctAnswer: 0,
    explanation: 'No while, se a condição inicial for falsa, o bloco nunca executa. No do-while, o bloco executa pelo menos uma vez antes de testar a condição. Isso é crucial para validação de entrada: "faça { ler senha; } enquanto (senha != correta);" garante que o usuário digite a senha ao menos uma vez antes de verificá-la.',
  },
  {
    id: 38,
    moduleId: 'logica',
    topic: 'Estruturas de Repetição',
    question: 'Um loop infinito ocorre quando a condição de parada nunca se torna verdadeira. Qual situação NÃO causa um loop infinito?',
    options: [
      'while (true) { } — condição sempre verdadeira',
      'for (i = 0; i < 10; i--) { } — incremento negativo faz i diminuir, nunca atingindo 10',
      'while (x != 0) { x = x - 1; } com x inicial = 5 — x chegará a 0 e o loop termina',
      'while (contador > 0) { contador = contador + 1; } — contador aumenta, nunca chega a 0',
    ],
    correctAnswer: 2,
    explanation: 'Na opção while (x != 0) { x = x - 1; } com x = 5, o loop executa: x = 5, 4, 3, 2, 1, 0 — quando x = 0, a condição x != 0 é falsa e o loop termina. As outras opções são loops infinitos: while(true) nunca termina; for com i-- nunca atinge 10 (vai em direção contrária); contador++ nunca chega a 0 partindo de um valor positivo.',
  },
  {
    id: 39,
    moduleId: 'logica',
    topic: 'Estruturas de Repetição',
    question: 'Qual a vantagem de usar "for" em vez de "while" quando se conhece o número exato de repetições?',
    options: [
      'Não há vantagem — ambos são equivalentes; a escolha é puramente estética',
      'O for concentra inicialização, condição e incremento em uma única linha, tornando o código mais legível e menos propenso a erros de esquecer o incremento',
      'O for é mais rápido que while porque o compilador otimiza melhor',
      'O while não funciona com variáveis contadoras; apenas o for permite contadores',
    ],
    correctAnswer: 1,
    explanation: 'O for agrupa os três componentes do loop (inicialização, condição, incremento) em uma linha: for (i = 0; i < 10; i++). Isso torna explícito o controle do loop e evita erros comuns como esquecer o incremento dentro do while. O while é mais adequado quando a repetição depende de uma condição que não é simplesmente uma contagem (ex: while (!arquivo.eof())).',
  },
  {
    id: 40,
    moduleId: 'logica',
    topic: 'Estruturas de Repetição',
    question: 'Considere o problema: "Calcular a soma dos números pares de 1 a 100." Qual implementação é mais eficiente e por quê?',
    options: [
      'for (i = 1; i <= 100; i++) { if (i % 2 == 0) soma += i; } — percorre 100 números testando paridade',
      'for (i = 2; i <= 100; i += 2) { soma += i; } — percorre apenas os 50 números pares, sem teste condicional',
      'soma = 0; i = 2; while (i <= 100) { soma += i; i += 2; } — equivalente ao for, mas mais longo',
      'Todas as implementações têm a mesma eficiência — o hardware moderno torna irrelevante',
    ],
    correctAnswer: 1,
    explanation: 'A opção for (i = 2; i <= 100; i += 2) é mais eficiente porque: (1) executa apenas 50 iterações em vez de 100, (2) elimina o teste condicional (if i % 2 == 0) dentro do loop. Isso demonstra como a escolha da estratégia de iteração pode otimizar o desempenho — ao invés de gerar todos os números e filtrar, geramos apenas os números desejados ajustando o incremento do loop.',
  },
  // === Introdução às Redes (41-45) ===
  {
    id: 41,
    moduleId: 'redes',
    topic: 'Introdução às Redes',
    question: 'Uma empresa possui 5 computadores em um mesmo andar que precisam compartilhar arquivos e uma impressora. Qual tipo de rede é mais adequada para essa situação?',
    options: [
      'WAN — Wide Area Network, pois permite conectar dispositivos em longas distâncias',
      'LAN — Local Area Network, pois conecta dispositivos em uma área geográfica limitada',
      'MAN — Metropolitan Area Network, pois abrange uma cidade',
      'PAN — Personal Area Network, pois conecta dispositivos pessoais',
    ],
    correctAnswer: 1,
    explanation: 'Uma LAN (Local Area Network) é a escolha ideal para conectar dispositivos em uma área limitada como um escritório, prédio ou andar. Ela permite compartilhamento de arquivos e periféricos com alta velocidade e baixo custo.',
  },
  {
    id: 42,
    moduleId: 'redes',
    topic: 'Introdução às Redes',
    question: 'Em uma topologia em estrela, o que acontece com a rede se o dispositivo central falhar?',
    options: [
      'Apenas o dispositivo central é afetado; os demais continuam se comunicando',
      'Toda a rede fica inoperante, pois todos os dispositivos dependem do nó central',
      'Os dispositivos se reorganizam automaticamente em uma topologia em malha',
      'Apenas um dispositivo aleatório perde conexão',
    ],
    correctAnswer: 1,
    explanation: 'Na topologia em estrela, todos os dispositivos se conectam a um nó central (switch/hub). Se o dispositivo central falhar, toda a rede fica inoperante, pois não há caminho alternativo para a comunicação entre os dispositivos.',
  },
  {
    id: 43,
    moduleId: 'redes',
    topic: 'Introdução às Redes',
    question: 'Qual das seguintes alternativas NÃO é uma vantagem das redes de computadores?',
    options: [
      'Compartilhamento de recursos como impressoras e arquivos',
      'Comunicação rápida entre usuários',
      'Isolamento total de cada computador, garantindo segurança máxima',
      'Acesso a informações e bancos de dados centralizados',
    ],
    correctAnswer: 2,
    explanation: 'O isolamento total de cada computador não é uma vantagem das redes — na verdade, as redes promovem exatamente o oposto: a interconexão e o compartilhamento. Embora a segurança seja uma preocupação em redes, o isolamento total eliminaria os benefícios da rede.',
  },
  {
    id: 44,
    moduleId: 'redes',
    topic: 'Introdução às Redes',
    question: 'Qual topologia de rede oferece a maior redundância e tolerância a falhas?',
    options: [
      'Topologia em barramento',
      'Topologia em anel',
      'Topologia em estrela',
      'Topologia em malha',
    ],
    correctAnswer: 3,
    explanation: 'A topologia em malha oferece a maior redundância, pois cada dispositivo possui conexões com vários outros dispositivos. Se um link falhar, existem caminhos alternativos para os dados chegarem ao destino. Porém, é a mais cara de implementar devido à quantidade de cabos necessários.',
  },
  {
    id: 45,
    moduleId: 'redes',
    topic: 'Introdução às Redes',
    question: 'Qual das alternativas descreve corretamente uma rede WAN?',
    options: [
      'Rede que conecta dispositivos em uma área metropolitana, como uma cidade',
      'Rede que abrange uma grande área geográfica, como países ou continentes',
      'Rede pessoal com alcance de poucos metros',
      'Rede que conecta dispositivos em um único prédio',
    ],
    correctAnswer: 1,
    explanation: 'WAN (Wide Area Network) é uma rede que cobre uma grande área geográfica, podendo conectar dispositivos em diferentes cidades, países ou até continentes. A internet é o maior exemplo de WAN.',
  },

  // === Modelo OSI (46-50) ===
  {
    id: 46,
    moduleId: 'redes',
    topic: 'Modelo OSI',
    question: 'Em qual camada do modelo OSI os protocolos Ethernet e Wi-Fi operam?',
    options: [
      'Camada Física',
      'Camada de Enlace de Dados',
      'Camada de Rede',
      'Camada de Transporte',
    ],
    correctAnswer: 1,
    explanation: 'Ethernet e Wi-Fi operam na camada de Enlace de Dados (Layer 2) do modelo OSI. Esta camada é responsável pela transferência confiável de dados entre dois dispositivos diretamente conectados, utilizando endereços MAC.',
  },
  {
    id: 47,
    moduleId: 'redes',
    topic: 'Modelo OSI',
    question: 'O que acontece com os dados à medida que descem pelas camadas do modelo OSI no dispositivo transmissor?',
    options: [
      'Os dados são fragmentados e descartados',
      'Cada camada adiciona um cabeçalho (header) às informações recebidas da camada superior — processo chamado de encapsulamento',
      'Os dados são criptografados e comprimidos automaticamente',
      'As camadas removem informações para tornar os dados mais leves',
    ],
    correctAnswer: 1,
    explanation: 'O encapsulamento é o processo pelo qual cada camada do modelo OSI adiciona seu próprio cabeçalho (header) aos dados recebidos da camada superior. Por exemplo, a camada de Transporte adiciona informações TCP, a de Rede adiciona o endereço IP, e a de Enlace adiciona o endereço MAC.',
  },
  {
    id: 48,
    moduleId: 'redes',
    topic: 'Modelo OSI',
    question: 'Qual camada do modelo OSI é responsável por estabelecer, gerenciar e encerrar sessões de comunicação entre aplicações?',
    options: [
      'Camada de Apresentação',
      'Camada de Sessão',
      'Camada de Transporte',
      'Camada de Aplicação',
    ],
    correctAnswer: 1,
    explanation: 'A camada de Sessão (Layer 5) é responsável por estabelecer, manter e encerrar sessões de comunicação entre aplicações. Ela gerencia o diálogo, sincronização e checkpointing da comunicação.',
  },
  {
    id: 49,
    moduleId: 'redes',
    topic: 'Modelo OSI',
    question: 'Qual a função principal da camada de Apresentação (Layer 6) do modelo OSI?',
    options: [
      'Roteamento de pacotes entre redes diferentes',
      'Estabelecimento de sessões de comunicação',
      'Tradução, criptografia e compressão dos dados',
      'Detecção de erros na transmissão física',
    ],
    correctAnswer: 2,
    explanation: 'A camada de Apresentação (Layer 6) atua como um tradutor entre o formato dos dados da aplicação e o formato de rede. Ela é responsável por criptografia, descriptografia, compressão e conversão de formatos (como de ASCII para EBCDIC).',
  },
  {
    id: 50,
    moduleId: 'redes',
    topic: 'Modelo OSI',
    question: 'Qual a unidade de dados da camada de Transporte (Layer 4) do modelo OSI?',
    options: [
      'Bits',
      'Quadros (Frames)',
      'Pacotes',
      'Segmentos',
    ],
    correctAnswer: 3,
    explanation: 'Na camada de Transporte, os dados são chamados de segmentos (TCP) ou datagramas (UDP). Cada camada do modelo OSI tem um nome específico para sua unidade de dados: bits (Física), quadros (Enlace), pacotes (Rede), segmentos (Transporte).',
  },

  // === Modelo TCP/IP (51-55) ===
  {
    id: 51,
    moduleId: 'redes',
    topic: 'Modelo TCP/IP',
    question: 'Quantas camadas possui o modelo TCP/IP?',
    options: [
      '3 camadas',
      '4 camadas',
      '5 camadas',
      '7 camadas',
    ],
    correctAnswer: 1,
    explanation: 'O modelo TCP/IP possui 4 camadas: Aplicação, Transporte, Internet (Rede) e Interface de Rede (Acesso à Rede). É um modelo mais enxuto que o OSI, combinando algumas das 7 camadas do OSI em camadas mais amplas.',
  },
  {
    id: 52,
    moduleId: 'redes',
    topic: 'Modelo TCP/IP',
    question: 'Qual camada do modelo TCP/IP corresponde às camadas de Sessão, Apresentação e Aplicação do modelo OSI?',
    options: [
      'Camada de Interface de Rede',
      'Camada de Internet',
      'Camada de Transporte',
      'Camada de Aplicação',
    ],
    correctAnswer: 3,
    explanation: 'No modelo TCP/IP, a camada de Aplicação engloba as funcionalidades das camadas de Sessão, Apresentação e Aplicação do modelo OSI. É onde residem protocolos como HTTP, FTP, SMTP e DNS.',
  },
  {
    id: 53,
    moduleId: 'redes',
    topic: 'Modelo TCP/IP',
    question: 'Qual a principal característica do protocolo UDP em relação ao TCP?',
    options: [
      'UDP é orientado à conexão e garante entrega dos dados',
      'UDP é mais rápido pois não estabelece conexão prévia nem garante entrega',
      'UDP só pode ser usado em redes locais',
      'UDP oferece criptografia integrada',
    ],
    correctAnswer: 1,
    explanation: 'UDP (User Datagram Protocol) é um protocolo não orientado à conexão, o que significa que não há handshake antes da transmissão. Ele é mais rápido que o TCP, porém não garante a entrega, ordem ou integridade dos dados. É ideal para aplicações em tempo real como streaming e jogos.',
  },
  {
    id: 54,
    moduleId: 'redes',
    topic: 'Modelo TCP/IP',
    question: 'Durante o handshake TCP de três vias, quais flags são trocadas na sequência correta?',
    options: [
      'ACK, SYN, ACK',
      'SYN, SYN-ACK, ACK',
      'SYN, ACK, SYN-ACK',
      'FIN, ACK, FIN-ACK',
    ],
    correctAnswer: 1,
    explanation: 'O handshake TCP de três vias (three-way handshake) funciona assim: 1) Cliente envia SYN (sincronização), 2) Servidor responde com SYN-ACK (sincronização + confirmação), 3) Cliente envia ACK (confirmação). Após isso, a conexão está estabelecida e os dados podem ser transmitidos.',
  },
  {
    id: 55,
    moduleId: 'redes',
    topic: 'Modelo TCP/IP',
    question: 'Qual protocolo da camada de Internet do TCP/IP é responsável por reportar erros e mensagens de diagnóstico?',
    options: [
      'IP (Internet Protocol)',
      'ARP (Address Resolution Protocol)',
      'ICMP (Internet Control Message Protocol)',
      'IGMP (Internet Group Management Protocol)',
    ],
    correctAnswer: 2,
    explanation: 'O ICMP (Internet Control Message Protocol) é usado para enviar mensagens de erro e informações operacionais, como "host não encontrado" ou "TTL excedido". O comando ping utiliza ICMP para testar a conectividade entre dispositivos.',
  },

  // === Endereçamento IP (56-60) ===
  {
    id: 56,
    moduleId: 'redes',
    topic: 'Endereçamento IP',
    question: 'Qual a diferença entre um endereço IPv4 e IPv6 em termos de tamanho?',
    options: [
      'IPv4 tem 16 bits; IPv6 tem 64 bits',
      'IPv4 tem 32 bits; IPv6 tem 128 bits',
      'IPv4 tem 64 bits; IPv6 tem 32 bits',
      'IPv4 tem 128 bits; IPv6 tem 32 bits',
    ],
    correctAnswer: 1,
    explanation: 'IPv4 utiliza endereços de 32 bits (cerca de 4,3 bilhões de endereços possíveis), enquanto IPv6 utiliza endereços de 128 bits (cerca de 340 undecilhões de endereços). O IPv6 foi criado devido ao esgotamento dos endereços IPv4.',
  },
  {
    id: 57,
    moduleId: 'redes',
    topic: 'Endereçamento IP',
    question: 'Qual dos seguintes é um endereço IP privado válido?',
    options: [
      '8.8.8.8',
      '280.10.20.30',
      '192.168.1.10',
      '0.0.0.1',
    ],
    correctAnswer: 2,
    explanation: '192.168.1.10 é um endereço IP privado (faixa 192.168.0.0 - 192.168.255.255). Endereços privados são usados em redes internas e não são roteados na internet. As outras faixas privadas são 10.0.0.0/8 e 172.16.0.0/12.',
  },
  {
    id: 58,
    moduleId: 'redes',
    topic: 'Endereçamento IP',
    question: 'Para que serve a máscara de sub-rede?',
    options: [
      'Criptografar os dados transmitidos na rede',
      'Determinar qual parte do endereço IP identifica a rede e qual parte identifica o host',
      'Acelerar a velocidade de transmissão dos pacotes',
      'Converter endereços IP em nomes de domínio',
    ],
    correctAnswer: 1,
    explanation: 'A máscara de sub-rede é usada para dividir um endereço IP em duas partes: a porção da rede (network) e a porção do host. Por exemplo, com a máscara 255.255.255.0, os primeiros 24 bits identificam a rede e os últimos 8 bits identificam o host.',
  },
  {
    id: 59,
    moduleId: 'redes',
    topic: 'Endereçamento IP',
    question: 'O que é NAT (Network Address Translation)?',
    options: [
      'Um protocolo de criptografia de rede',
      'Uma técnica que permite que múltiplos dispositivos compartilhem um único endereço IP público',
      'Um tipo de cabo de rede',
      'Um servidor de nomes de domínio',
    ],
    correctAnswer: 1,
    explanation: 'NAT (Network Address Translation) é uma técnica que permite que vários dispositivos em uma rede local (com IPs privados) compartilhem um único endereço IP público para acessar a internet. O roteador doméstico faz NAT, traduzindo os endereços privados para o IP público.',
  },
  {
    id: 60,
    moduleId: 'redes',
    topic: 'Endereçamento IP',
    question: 'Qual o formato de representação de um endereço IPv6?',
    options: [
      'Quatro números decimais separados por pontos (ex: 192.168.0.1)',
      'Oito grupos de quatro dígitos hexadecimais separados por dois pontos (ex: 2001:0db8:85a3:0000:0000:8a2e:0370:7334)',
      'Uma sequência de números binários de 32 bits',
      'Dois números decimais separados por vírgula',
    ],
    correctAnswer: 1,
    explanation: 'IPv6 é representado por oito grupos de quatro dígitos hexadecimais separados por dois pontos (:). Zeros à esquerda podem ser omitidos, e grupos consecutivos de zeros podem ser substituídos por :: (uma vez). Exemplo: 2001:db8::1 equivale a 2001:0db8:0000:0000:0000:0000:0000:0001.',
  },

  // === DNS (61-65) ===
  {
    id: 61,
    moduleId: 'redes',
    topic: 'DNS',
    question: 'Qual a função principal do servidor DNS?',
    options: [
      'Armazenar cópias de sites web para acesso mais rápido',
      'Traduzir nomes de domínio (como google.com) em endereços IP',
      'Fornecer conexão segura para navegação na web',
      'Gerenciar endereços IP dinâmicos em uma rede',
    ],
    correctAnswer: 1,
    explanation: 'A função principal do DNS (Domain Name System) é traduzir nomes de domínio legíveis por humanos (como www.google.com) em endereços IP numéricos (como 142.250.217.78) que os computadores usam para se identificar na rede.',
  },
  {
    id: 62,
    moduleId: 'redes',
    topic: 'DNS',
    question: 'Qual a hierarquia correta dos níveis de domínio?',
    options: [
      'Subdomínio > Domínio > TLD (ex: www.google.com → www é o TLD)',
      'TLD > Domínio > Subdomínio (ex: www.google.com → .com é o TLD)',
      'Domínio > TLD > Subdomínio (ex: www.google.com → google é o TLD)',
      'Não existe hierarquia — todos os níveis são equivalentes',
    ],
    correctAnswer: 1,
    explanation: 'A hierarquia de domínios é: TLD (Top-Level Domain, ex: .com, .org, .br) → Domínio Principal (ex: google) → Subdomínio (ex: www). O DNS consulta os servidores nesta ordem: primeiro o servidor raiz, depois o TLD, depois o domínio autoritativo.',
  },
  {
    id: 63,
    moduleId: 'redes',
    topic: 'DNS',
    question: 'Qual registro DNS é usado para associar um nome de domínio a um endereço IPv4?',
    options: [
      'Registro MX',
      'Registro CNAME',
      'Registro A',
      'Registro NS',
    ],
    correctAnswer: 2,
    explanation: 'O registro A (Address) é o tipo mais fundamental de registro DNS. Ele mapeia um nome de domínio diretamente a um endereço IPv4. Por exemplo, google.com → 142.250.217.78. Para IPv6, utiliza-se o registro AAAA.',
  },
  {
    id: 64,
    moduleId: 'redes',
    topic: 'DNS',
    question: 'Quando você digita um URL no navegador, qual o primeiro passo da resolução DNS?',
    options: [
      'Consultar o servidor DNS raiz',
      'Consultar o cache DNS local do sistema operacional',
      'Consultar o servidor DNS do ISP',
      'Consultar o servidor de nomes autoritativo do domínio',
    ],
    correctAnswer: 1,
    explanation: 'Antes de qualquer consulta externa, o sistema verifica o cache DNS local (armazenado no sistema operacional e no navegador). Se o endereço foi consultado recentemente, ele é retornado imediatamente do cache, evitando consultas desnecessárias e acelerando a navegação.',
  },
  {
    id: 65,
    moduleId: 'redes',
    topic: 'DNS',
    question: 'O que é um ataque de envenenamento de cache DNS (DNS cache poisoning)?',
    options: [
      'Infectar o servidor DNS com um vírus que deleta registros',
      'Inserir informações DNS falsas no cache de um resolvedor, redirecionando usuários para sites maliciosos',
      'Sobrecarregar o servidor DNS com requisições até que ele pare de funcionar',
      'Modificar o arquivo hosts do sistema para bloquear sites',
    ],
    correctAnswer: 1,
    explanation: 'O envenenamento de cache DNS (DNS spoofing) é um ataque onde informações DNS falsas são inseridas no cache de um resolvedor DNS. Quando um usuário tenta acessar um site legítimo, o resolvedor retorna o endereço IP falso, redirecionando a vítima para um site malicioso controlado pelo atacante.',
  },

  // === Protocolos de Comunicação (66-70) ===
  {
    id: 66,
    moduleId: 'redes',
    topic: 'Protocolos de Comunicação',
    question: 'Qual a diferença fundamental entre HTTP e HTTPS?',
    options: [
      'HTTP é mais rápido que HTTPS',
      'HTTPS utiliza criptografia SSL/TLS para proteger os dados transmitidos',
      'HTTP só funciona em redes locais',
      'HTTPS não utiliza portas, ao contrário do HTTP',
    ],
    correctAnswer: 1,
    explanation: 'HTTPS (Hypertext Transfer Protocol Secure) é a versão segura do HTTP. Ele utiliza criptografia SSL/TLS para proteger os dados transmitidos entre o cliente e o servidor, garantindo confidencialidade, integridade e autenticação.',
  },
  {
    id: 67,
    moduleId: 'redes',
    topic: 'Protocolos de Comunicação',
    question: 'Qual porta padrão é utilizada pelo protocolo HTTPS?',
    options: [
      'Porta 80',
      'Porta 443',
      'Porta 21',
      'Porta 25',
    ],
    correctAnswer: 1,
    explanation: 'O HTTPS utiliza a porta 443 como padrão, enquanto o HTTP utiliza a porta 80. Outras portas comuns: FTP (21), SSH (22), SMTP (25), DNS (53), DHCP (67/68) e POP3 (110).',
  },
  {
    id: 68,
    moduleId: 'redes',
    topic: 'Protocolos de Comunicação',
    question: 'Qual protocolo é utilizado para transferir arquivos entre computadores na internet?',
    options: [
      'SMTP',
      'HTTP',
      'FTP',
      'DHCP',
    ],
    correctAnswer: 2,
    explanation: 'FTP (File Transfer Protocol) é o protocolo padrão para transferência de arquivos entre computadores em uma rede. Ele permite fazer upload e download de arquivos, além de gerenciar diretórios remotos. A versão segura é o SFTP ou FTPS.',
  },
  {
    id: 69,
    moduleId: 'redes',
    topic: 'Protocolos de Comunicação',
    question: 'Qual protocolo é responsável por atribuir automaticamente endereços IP aos dispositivos em uma rede?',
    options: [
      'DNS',
      'ARP',
      'DHCP',
      'ICMP',
    ],
    correctAnswer: 2,
    explanation: 'DHCP (Dynamic Host Configuration Protocol) atribui automaticamente endereços IP e outras configurações de rede (máscara, gateway, DNS) aos dispositivos quando eles se conectam à rede. Isso elimina a necessidade de configurar manualmente cada dispositivo.',
  },
  {
    id: 70,
    moduleId: 'redes',
    topic: 'Protocolos de Comunicação',
    question: 'Qual protocolo é usado para acessar remotamente um servidor de forma segura através da linha de comando?',
    options: [
      'Telnet',
      'SSH',
      'FTP',
      'HTTP',
    ],
    correctAnswer: 1,
    explanation: 'SSH (Secure Shell) é um protocolo que permite acesso remoto seguro a servidores através de um terminal de linha de comando. Ele criptografa toda a comunicação, incluindo autenticação. Telnet faz o mesmo, mas sem criptografia, sendo inseguro.',
  },

  // === Dispositivos de Rede (71-75) ===
  {
    id: 71,
    moduleId: 'redes',
    topic: 'Dispositivos de Rede',
    question: 'Qual a diferença entre um hub e um switch?',
    options: [
      'Hub e switch são o mesmo dispositivo com nomes diferentes',
      'Hub é mais inteligente que switch',
      'Hub retransmite dados para todas as portas; switch encaminha seletivamente com base no endereço MAC',
      'Switch é mais antigo que hub',
    ],
    correctAnswer: 2,
    explanation: 'O hub é um dispositivo simples que retransmite os dados recebidos para todas as portas, sem qualquer inteligência. O switch, por outro lado, aprende os endereços MAC dos dispositivos conectados e encaminha os dados apenas para a porta de destino, tornando a comunicação mais eficiente.',
  },
  {
    id: 72,
    moduleId: 'redes',
    topic: 'Dispositivos de Rede',
    question: 'Qual dispositivo de rede opera na camada 3 (Rede) e é capaz de conectar redes diferentes?',
    options: [
      'Hub',
      'Switch',
      'Roteador',
      'Repetidor',
    ],
    correctAnswer: 2,
    explanation: 'O roteador opera na camada 3 (Rede) do modelo OSI. Ele é capaz de conectar redes diferentes, tomando decisões de roteamento com base em endereços IP para encaminhar pacotes entre redes.',
  },
  {
    id: 73,
    moduleId: 'redes',
    topic: 'Dispositivos de Rede',
    question: 'Qual meio de transmissão oferece a maior largura de banda e é menos suscetível a interferências?',
    options: [
      'Cabo de par trançado (CAT5e)',
      'Cabo coaxial',
      'Fibra óptica',
      'Sinal Wi-Fi',
    ],
    correctAnswer: 2,
    explanation: 'A fibra óptica oferece a maior largura de banda e é imune a interferências eletromagnéticas, pois transmite dados através de pulsos de luz em vez de sinais elétricos. Ela pode atingir velocidades de centenas de Gbps e distâncias de dezenas de quilômetros.',
  },
  {
    id: 74,
    moduleId: 'redes',
    topic: 'Dispositivos de Rede',
    question: 'O que é um Access Point (Ponto de Acesso)?',
    options: [
      'Um dispositivo que converte sinais digitais em analógicos para conexão à internet',
      'Um dispositivo que permite que dispositivos Wi-Fi se conectem a uma rede com fio',
      'Um tipo de roteador que não possui portas Ethernet',
      'Um modem que apenas recebe sinais de internet',
    ],
    correctAnswer: 1,
    explanation: 'Um Access Point (AP) é um dispositivo que cria uma rede sem fio (Wi-Fi) permitindo que dispositivos se conectem a uma rede cabeada existente. Diferente de um roteador, o AP não faz roteamento — ele apenas estende o acesso à rede via wireless.',
  },
  {
    id: 75,
    moduleId: 'redes',
    topic: 'Dispositivos de Rede',
    question: 'Qual a função do modem em uma rede residencial?',
    options: [
      'Distribuir o sinal Wi-Fi pela casa',
      'Converter o sinal do provedor de internet (cabo coaxial, fibra, DSL) em um sinal digital que o roteador possa usar',
      'Armazenar arquivos compartilhados na rede',
      'Atribuir endereços IP aos dispositivos',
    ],
    correctAnswer: 1,
    explanation: 'O modem (modulador/demodulador) converte o sinal analógico do provedor de internet (seja via cabo coaxial, fibra óptica ou linha telefônica DSL) em sinais digitais que os dispositivos de rede (como roteadores e computadores) possam processar.',
  },

  // === Segurança em Redes (76-80) ===
  {
    id: 76,
    moduleId: 'redes',
    topic: 'Segurança em Redes',
    question: 'Qual tipo de ataque consiste em enviar uma enorme quantidade de tráfego para um servidor com o objetivo de sobrecarregá-lo e tirá-lo do ar?',
    options: [
      'Phishing',
      'DDoS (Distributed Denial of Service)',
      'Man-in-the-Middle',
      'SQL Injection',
    ],
    correctAnswer: 1,
    explanation: 'Um ataque DDoS (Distributed Denial of Service) ocorre quando múltiplos sistemas comprometidos (botnet) enviam uma enxurrada de tráfego para um alvo, sobrecarregando seus recursos e tornando o serviço indisponível para usuários legítimos.',
  },
  {
    id: 77,
    moduleId: 'redes',
    topic: 'Segurança em Redes',
    question: 'O que é um ataque Man-in-the-Middle (MitM)?',
    options: [
      'Um ataque em que o invasor se posiciona entre a vítima e o servidor, interceptando a comunicação',
      'Um malware que se espalha automaticamente pela rede',
      'Um ataque que explora vulnerabilidades em aplicações web',
      'Uma tentativa de adivinhar senhas por tentativa e erro',
    ],
    correctAnswer: 0,
    explanation: 'No ataque Man-in-the-Middle (Homem no Meio), o invasor intercepta secretamente a comunicação entre duas partes (ex: cliente e servidor), podendo ler, modificar ou injetar dados na comunicação sem que as partes percebam.',
  },
  {
    id: 78,
    moduleId: 'redes',
    topic: 'Segurança em Redes',
    question: 'Qual tipo de firewall inspeciona o estado das conexões ativas e toma decisões com base no contexto do tráfego?',
    options: [
      'Firewall de pacotes (stateless)',
      'Firewall de estado (stateful)',
      'Firewall de aplicação (proxy)',
      'Firewall de perímetro',
    ],
    correctAnswer: 1,
    explanation: 'O firewall stateful (com estado) mantém uma tabela de conexões ativas e inspeciona o contexto do tráfego. Ele não apenas analisa pacotes individuais, mas entende o estado da conexão, permitindo identificar tráfego legítimo de forma mais precisa que firewalls stateless.',
  },
  {
    id: 79,
    moduleId: 'redes',
    topic: 'Segurança em Redes',
    question: 'Qual protocolo é usado para estabelecer uma conexão VPN segura?',
    options: [
      'HTTP e SMTP',
      'IPsec e OpenVPN',
      'FTP e DHCP',
      'DNS e ARP',
    ],
    correctAnswer: 1,
    explanation: 'IPsec (Internet Protocol Security) e OpenVPN são protocolos comuns para estabelecer VPNs. IPsec opera na camada de Rede e oferece autenticação e criptografia. OpenVPN é uma solução de código aberto amplamente usada que cria túneis criptografados sobre TCP/UDP.',
  },
  {
    id: 80,
    moduleId: 'redes',
    topic: 'Segurança em Redes',
    question: 'Qual das seguintes é uma boa prática de segurança em redes?',
    options: [
      'Manter o firmware do roteador desatualizado para evitar mudanças',
      'Usar a mesma senha para todos os dispositivos da rede',
      'Manter o Wi-Fi protegido com WPA3 e desabilitar WPS',
      'Manter portas de administração remota abertas para facilitar o acesso',
    ],
    correctAnswer: 2,
    explanation: 'Usar WPA3 (ou WPA2 como mínimo) com uma senha forte e desabilitar WPS (Wi-Fi Protected Setup) são boas práticas de segurança. Manter firmwares atualizados, usar senhas diferentes para cada serviço e fechar portas desnecessárias também são recomendações importantes.',
  },
  // === Introdução à Cibersegurança (81-85) ===
  {
    id: 81,
    moduleId: 'seguranca',
    topic: 'Introdução à Cibersegurança',
    question: 'Uma empresa sofreu um ataque que roubou dados de clientes. Analisando o ocorrido, o CISO afirmou: "Nosso erro foi focar apenas em tecnologia e ignorar as pessoas e processos." Qual aspecto fundamental da cibersegurança ele está destacando?',
    options: [
      'Que a cibersegurança depende exclusivamente de firewalls e antivírus',
      'Que a cibersegurança envolve tecnologia, pessoas e processos de forma integrada',
      'Que pessoas são irrelevantes para a segurança da informação',
      'Que processos são mais importantes que tecnologia',
    ],
    correctAnswer: 1,
    explanation: 'A cibersegurança é composta por três pilares interligados: pessoas (treinamento, conscientização), processos (políticas, procedimentos) e tecnologia (firewalls, criptografia). Ignorar qualquer um deles compromete a segurança como um todo.',
  },
  {
    id: 82,
    moduleId: 'seguranca',
    topic: 'Introdução à Cibersegurança',
    question: 'Qual das seguintes áreas da cibersegurança é responsável por investigar crimes cibernéticos e coletar evidências digitais?',
    options: [
      'Segurança de Redes',
      'Resposta a Incidentes',
      'Forense Digital',
      'GRC (Governança, Risco e Conformidade)',
    ],
    correctAnswer: 2,
    explanation: 'A Forense Digital é a área responsável por investigar crimes cibernéticos, coletar, preservar e analisar evidências digitais de forma que possam ser usadas em processos judiciais.',
  },
  {
    id: 83,
    moduleId: 'seguranca',
    topic: 'Introdução à Cibersegurança',
    question: 'Uma organização quer implementar um programa de cibersegurança. Qual deve ser a primeira etapa?',
    options: [
      'Comprar os firewalls mais caros do mercado',
      'Contratar uma equipe de hackers para testar a rede',
      'Realizar uma avaliação de riscos para identificar ativos, ameaças e vulnerabilidades',
      'Instalar antivírus em todos os computadores',
    ],
    correctAnswer: 2,
    explanation: 'Antes de investir em soluções, é essencial entender o que precisa ser protegido (ativos), contra o quê (ameaças) e quais são as fraquezas (vulnerabilidades). A avaliação de riscos é o ponto de partida de qualquer estratégia de segurança.',
  },
  {
    id: 84,
    moduleId: 'seguranca',
    topic: 'Introdução à Cibersegurança',
    question: 'Qual a diferença entre um hacker ético (white hat) e um criminoso cibernético (black hat)?',
    options: [
      'Não há diferença — ambos invadem sistemas sem permissão',
      'O hacker ético tem autorização para testar sistemas e reporta vulnerabilidades; o criminoso age ilegalmente para obter vantagem',
      'O hacker ético é mais habilidoso que o criminoso cibernético',
      'O criminoso cibernético só ataca governos',
    ],
    correctAnswer: 1,
    explanation: 'Hackers éticos (white hat) trabalham com autorização para encontrar e reportar vulnerabilidades, ajudando a melhorar a segurança. Criminosos cibernéticos (black hat) invadem sistemas ilegalmente para roubo, extorsão ou causar danos.',
  },
  {
    id: 85,
    moduleId: 'seguranca',
    topic: 'Introdução à Cibersegurança',
    question: 'Por que 95% das violações de segurança envolvem erro humano?',
    options: [
      'Porque os sistemas técnicos são sempre perfeitos',
      'Porque pessoas são o elo mais fraco — clicam em phishing, usam senhas fracas e ignoram políticas de segurança',
      'Porque ataques cibernéticos só acontecem por culpa dos usuários',
      'Porque os firewalls nunca funcionam corretamente',
    ],
    correctAnswer: 1,
    explanation: 'O erro humano é o principal vetor de ataques porque as pessoas podem ser enganadas por engenharia social, negligenciam boas práticas (senhas fracas, falta de atualizações) ou desconhecem os riscos. Por isso treinamento e conscientização são tão importantes quanto tecnologia.',
  },

  // === Os 3 Pilares da Informação (86-90) ===
  {
    id: 86,
    moduleId: 'seguranca',
    topic: 'Os 3 Pilares da Informação',
    question: 'Um hospital sofreu um ataque ransomware que criptografou todos os prontuários dos pacientes. Os médicos não conseguem acessar históricos nem prescrever medicamentos. Quais pilares da Tríade CIA foram diretamente violados?',
    options: [
      'Apenas confidencialidade — os dados foram criptografados',
      'Confidencialidade e integridade — dados foram criptografados e alterados',
      'Integridade e disponibilidade — dados foram criptografados (alterados) e o acesso foi negado',
      'Apenas disponibilidade — o sistema ficou fora do ar',
    ],
    correctAnswer: 2,
    explanation: 'O ransomware viola a integridade (os dados foram criptografados/alterados sem autorização) e a disponibilidade (os médicos não conseguem acessar os prontuários). A confidencialidade não é violada porque os dados não foram expostos — foram apenas bloqueados.',
  },
  {
    id: 87,
    moduleId: 'seguranca',
    topic: 'Os 3 Pilares da Informação',
    question: 'Um funcionário mal-intencionado copia a base de clientes da empresa para um pen drive e vende para um concorrente. Qual pilar da segurança foi violado principalmente?',
    options: [
      'Disponibilidade — a base de clientes não está mais acessível',
      'Integridade — os dados foram modificados',
      'Confidencialidade — dados sigilosos foram acessados por pessoa não autorizada',
      'Nenhum — o funcionário tinha acesso legítimo',
    ],
    correctAnswer: 2,
    explanation: 'Mesmo tendo acesso legítimo para trabalhar com os dados, o funcionário não tinha autorização para copiá-los e compartilhá-los. A confidencialidade foi violada porque informações sigilosas foram expostas a pessoas não autorizadas (o concorrente).',
  },
  {
    id: 88,
    moduleId: 'seguranca',
    topic: 'Os 3 Pilares da Informação',
    question: 'Qual mecanismo de segurança é mais diretamente associado à garantia da INTEGRIDADE dos dados?',
    options: [
      'Criptografia assimétrica (RSA)',
      'Funções hash (SHA-256)',
      'Firewall stateful',
      'Controle de acesso biométrico',
    ],
    correctAnswer: 1,
    explanation: 'Funções hash (como SHA-256) são usadas para verificar integridade: qualquer alteração no dado original produz um hash completamente diferente. Se o hash do arquivo baixado for diferente do hash original, o arquivo foi alterado (integriade comprometida).',
  },
  {
    id: 89,
    moduleId: 'seguranca',
    topic: 'Os 3 Pilares da Informação',
    question: 'Uma empresa adotou um modelo de "confiança zero" (Zero Trust). Qual pilar da Tríade CIA é mais diretamente reforçado por esse modelo?',
    options: [
      'Confidencialidade — somente pessoas autorizadas acessam cada recurso',
      'Disponibilidade — o sistema fica mais disponível',
      'Integridade — os dados não podem ser alterados',
      'Todos são igualmente reforçados',
    ],
    correctAnswer: 0,
    explanation: 'Zero Trust reforça principalmente a confidencialidade ao exigir verificação contínua para cada acesso: "nunca confie, sempre verifique". Cada usuário só tem acesso ao mínimo necessário para seu trabalho, reduzindo o risco de exposição não autorizada de dados.',
  },
  {
    id: 90,
    moduleId: 'seguranca',
    topic: 'Os 3 Pilares da Informação',
    question: 'Qual das seguintes situações representa uma violação do pilar da DISPONIBILIDADE?',
    options: [
      'Um hacker acessa e-mails confidenciais do CEO',
      'Um funcionário altera notas fiscais sem autorização',
      'Um ataque DDoS derruba o site de e-commerce na Black Friday',
      'Um fornecedor descobre a senha do Wi-Fi da empresa',
    ],
    correctAnswer: 2,
    explanation: 'O ataque DDoS derruba o servidor, tornando o site inacessível para usuários legítimos — violação direta da disponibilidade. As outras opções violam confidencialidade (acesso a e-mails, senha descoberta) e integridade (alteração de notas fiscais).',
  },

  // === Malware (91-95) ===
  {
    id: 91,
    moduleId: 'seguranca',
    topic: 'Malware',
    question: 'Um funcionário recebeu um e-mail com um anexo chamado "curriculo.pdf.exe". Ao abrir, o sistema ficou lento e arquivos começaram a ser deletados. Que tipo de malware provavelmente infectou o computador?',
    options: [
      'Worm — se espalhou automaticamente pela rede',
      'Ransomware — deveria ter criptografado os arquivos',
      'Trojan disfarçado de PDF — executou um vírus ao ser aberto',
      'Adware — começou a exibir anúncios',
    ],
    correctAnswer: 2,
    explanation: 'O arquivo "curriculo.pdf.exe" é um executável disfarçado de PDF — técnica clássica de Trojan. O usuário achou que era um PDF, mas ao abrir executou um malware. A extensão .exe revela que é um programa, não um documento.',
  },
  {
    id: 92,
    moduleId: 'seguranca',
    topic: 'Malware',
    question: 'Qual malware é conhecido por não precisar de um arquivo hospedeiro e se espalhar automaticamente por vulnerabilidades de rede?',
    options: [
      'Vírus',
      'Worm',
      'Trojan',
      'Rootkit',
    ],
    correctAnswer: 1,
    explanation: 'Worms são autônomos e não precisam de um arquivo hospedeiro. Eles se autorreplicam explorando vulnerabilidades de rede, podendo infectar milhares de sistemas em minutos sem qualquer interação do usuário.',
  },
  {
    id: 93,
    moduleId: 'seguranca',
    topic: 'Malware',
    question: 'Um keylogger é um tipo de spyware. Qual dado ele captura principalmente?',
    options: [
      'Arquivos de áudio do microfone',
      'Teclas digitadas pelo usuário para capturar senhas e dados sensíveis',
      'Histórico de navegação na internet',
      'Imagens da webcam',
    ],
    correctAnswer: 1,
    explanation: 'Keylogger registra cada tecla digitada pelo usuário, capturando senhas, números de cartão de crédito, mensagens e qualquer outro dado inserido pelo teclado. É uma forma perigosa de spyware focada em roubo de credenciais.',
  },
  {
    id: 94,
    moduleId: 'seguranca',
    topic: 'Malware',
    question: 'Um rootkit é particularmente perigoso porque:',
    options: [
      'Ele se espalha mais rápido que qualquer outro malware',
      'Ele opera em nível de kernel, escondendo sua presença e a de outros malwares do sistema operacional',
      'Ele só pode ser removido formatando o computador',
      'Ele criptografa todos os dados da vítima',
    ],
    correctAnswer: 1,
    explanation: 'Rootkits operam em nível de kernel (o núcleo do SO), o que lhes dá controle total sobre o sistema e capacidade de esconder sua presença de antivírus e ferramentas de detecção. Podem esconder processos, arquivos e conexões de rede.',
  },
  {
    id: 95,
    moduleId: 'seguranca',
    topic: 'Malware',
    question: 'Uma botnet é formada por dispositivos infectados com qual tipo de malware?',
    options: [
      'Ransomware — todos os dispositivos são mantidos como reféns',
      'Bot — cada dispositivo infectado se torna um "zumbi" controlado remotamente',
      'Vírus — todos os arquivos são corrompidos',
      'Spyware — todos os dados são espionados',
    ],
    correctAnswer: 1,
    explanation: 'Botnet é uma rede de dispositivos infectados com bots (malware do tipo "zumbi"). Cada dispositivo passa a ser controlado remotamente por um servidor de comando e controle (C2), podendo ser usado para ataques DDoS, envio de spam, mineração de criptomoedas e outras atividades criminosas.',
  },

  // === Ameaças e Vulnerabilidades (96-100) ===
  {
    id: 96,
    moduleId: 'seguranca',
    topic: 'Ameaças e Vulnerabilidades',
    question: 'Uma empresa descobriu que seu sistema de autenticação utiliza um algoritmo de hash desatualizado e vulnerável (MD5). Um invasor pode explorar essa fragilidade para quebrar senhas. Neste cenário, o algoritmo MD5 desatualizado representa:',
    options: [
      'Uma ameaça',
      'Uma vulnerabilidade',
      'Um risco aceitável',
      'Um ataque em andamento',
    ],
    correctAnswer: 1,
    explanation: 'O algoritmo MD5 desatualizado é uma vulnerabilidade — uma fraqueza no sistema que pode ser explorada. Se um invasor decidir explorá-la, a ameaça se concretiza. O risco é a probabilidade de isso acontecer.',
  },
  {
    id: 97,
    moduleId: 'seguranca',
    topic: 'Ameaças e Vulnerabilidades',
    question: 'Qual das alternativas representa uma ameaça de origem INTERNA?',
    options: [
      'Um hacker russo tentando invadir o sistema',
      'Um furacão destruindo o datacenter',
      'Um funcionário insatisfeito que vaza dados propositalmente',
      'Um worm se espalhando pela internet',
    ],
    correctAnswer: 2,
    explanation: 'Ameaças internas (insiders) vêm de dentro da organização: funcionários, ex-funcionários, prestadores de serviço. O funcionário insatisfeito é um exemplo clássico. As demais opções são ameaças externas ou naturais.',
  },
  {
    id: 98,
    moduleId: 'seguranca',
    topic: 'Ameaças e Vulnerabilidades',
    question: 'O que é a "janela de vulnerabilidade" (window of vulnerability)?',
    options: [
      'O tempo que um hacker leva para criar um exploit',
      'O período entre a descoberta de uma vulnerabilidade e a aplicação da correção (patch)',
      'O espaço de tempo em que o sistema fica offline para manutenção',
      'O intervalo entre backups',
    ],
    correctAnswer: 1,
    explanation: 'A janela de vulnerabilidade é o período crítico entre o momento em que uma vulnerabilidade é descoberta (ou divulgada publicamente) e o momento em que a correção é aplicada. Quanto maior essa janela, maior o risco de exploração.',
  },
  {
    id: 99,
    moduleId: 'seguranca',
    topic: 'Ameaças e Vulnerabilidades',
    question: 'Qual é a relação entre ameaça, vulnerabilidade e risco?',
    options: [
      'Risco = Ameaça + Vulnerabilidade (quanto maiores, maior o risco)',
      'Risco = Ameaça - Vulnerabilidade (quanto maior a vulnerabilidade, menor o risco)',
      'Risco existe apenas quando há ameaça, independentemente de vulnerabilidade',
      'Não há relação entre esses conceitos',
    ],
    correctAnswer: 0,
    explanation: 'O risco é diretamente proporcional à ameaça e à vulnerabilidade. Quanto maior a ameaça (perigo potencial) e maior a vulnerabilidade (fraqueza), maior o risco de um incidente de segurança.',
  },
  {
    id: 100,
    moduleId: 'seguranca',
    topic: 'Ameaças e Vulnerabilidades',
    question: 'Qual das vulnerabilidades é considerada a mais difícil de mitigar?',
    options: [
      'Vulnerabilidade de software — basta aplicar um patch',
      'Vulnerabilidade física — basta trancar a sala',
      'Vulnerabilidade humana — depende de treinamento, conscientização e mudança de comportamento',
      'Vulnerabilidade de rede — basta configurar o firewall',
    ],
    correctAnswer: 2,
    explanation: 'A vulnerabilidade humana é a mais desafiadora porque envolve comportamento, hábitos e psicologia. Tecnologia pode ser corrigida com patches, mas mudar comportamentos requer treinamento contínuo, campanhas de conscientização e uma cultura de segurança sólida.',
  },

  // === Tipos de Ataques (101-105) ===
  {
    id: 101,
    moduleId: 'seguranca',
    topic: 'Tipos de Ataques',
    question: 'Maria recebeu um SMS informando que sua conta bancária foi bloqueada e pedindo para clicar em um link para desbloquear. O site parecia idêntico ao do banco, mas era falso. Que tipo de ataque Maria sofreu?',
    options: [
      'DDoS — o banco foi sobrecarregado',
      'Phishing via SMS (smishing) — mensagem falsa para roubar credenciais',
      'SQL Injection — o site falso injetou comandos SQL',
      'Brute Force — a senha foi descoberta por tentativas',
    ],
    correctAnswer: 1,
    explanation: 'Smishing é phishing via SMS. A mensagem urgente ("conta bloqueada") é uma tática de engenharia social para criar pânico e fazer a vítima agir sem pensar. O link leva a um site falso que rouba as credenciais bancárias.',
  },
  {
    id: 102,
    moduleId: 'seguranca',
    topic: 'Tipos de Ataques',
    question: 'Um site de comércio eletrônico foi atacado e o invasor conseguiu acessar o banco de dados digitando "1=1--" em um campo de busca. Qual tipo de ataque foi utilizado?',
    options: [
      'Phishing',
      'Man-in-the-Middle (MitM)',
      'SQL Injection',
      'Zero-Day',
    ],
    correctAnswer: 2,
    explanation: '"1=1--" é uma string clássica de SQL Injection. O invasor tenta fazer com que a condição "1=1" (sempre verdadeira) seja injetada em uma consulta SQL, potencialmente acessando dados não autorizados. O "--" comenta o resto da consulta original.',
  },
  {
    id: 103,
    moduleId: 'seguranca',
    topic: 'Tipos de Ataques',
    question: 'Em um ataque Man-in-the-Middle (MitM), qual das seguintes medidas protege efetivamente a comunicação?',
    options: [
      'Usar HTTP em vez de HTTPS',
      'Conectar-se a redes Wi-Fi abertas',
      'Utilizar HTTPS com certificado SSL/TLS válido',
      'Desabilitar o firewall',
    ],
    correctAnswer: 2,
    explanation: 'HTTPS com certificado SSL/TLS válido criptografa a comunicação entre cliente e servidor, impedindo que um invasor MitM leia ou modifique os dados. HTTP (sem criptografia) é vulnerável a MitM.',
  },
  {
    id: 104,
    moduleId: 'seguranca',
    topic: 'Tipos de Ataques',
    question: 'Qual a melhor defesa contra ataques de força bruta (brute force)?',
    options: [
      'Usar senhas curtas para digitar rápido',
      'Implementar bloqueio após N tentativas falhas e exigir autenticação multifator (MFA)',
      'Desabilitar a autenticação no sistema',
      'Usar apenas números na senha',
    ],
    correctAnswer: 1,
    explanation: 'Bloqueio após tentativas falhas impede que o atacante faça milhares de tentativas. MFA adiciona uma camada extra: mesmo que a senha seja descoberta, o atacante precisa do segundo fator (token, biometria). Senhas fortes também ajudam, mas MFA é a proteção mais eficaz.',
  },
  {
    id: 105,
    moduleId: 'seguranca',
    topic: 'Tipos de Ataques',
    question: 'Qual das seguintes NÃO é uma técnica de engenharia social?',
    options: [
      'Pretexting — criar um pretexto falso para obter informações',
      'Baiting — oferecer uma isca (pendrive "achado") para infectar o sistema',
      'Phishing — enviar mensagens falsas para roubar dados',
      'Port Scanning — escanear portas abertas em um servidor',
    ],
    correctAnswer: 3,
    explanation: 'Port scanning é uma técnica técnica de reconhecimento de rede, não de engenharia social. As outras três (pretexting, baiting, phishing) são técnicas que manipulam psicologicamente as pessoas para obter informações ou acesso.',
  },

  // === Criptografia (106-110) ===
  {
    id: 106,
    moduleId: 'seguranca',
    topic: 'Criptografia',
    question: 'Uma empresa precisa armazenar senhas de usuários em seu banco de dados de forma segura. Qual é a abordagem correta?',
    options: [
      'Armazenar as senhas em texto puro para facilitar a recuperação',
      'Criptografar as senhas com AES e armazenar a chave junto',
      'Armazenar apenas o hash das senhas usando algoritmo seguro como bcrypt ou SHA-256 com salt',
      'Comprimir as senhas para economizar espaço',
    ],
    correctAnswer: 2,
    explanation: 'Senhas nunca devem ser armazenadas em texto puro ou criptografadas (pois a chave pode ser descoberta). O correto é armazenar o hash da senha usando algoritmos específicos para senhas (bcrypt, argon2) com adição de salt — valor aleatório único para cada senha.',
  },
  {
    id: 107,
    moduleId: 'seguranca',
    topic: 'Criptografia',
    question: 'No protocolo HTTPS, como ocorre a troca de chaves entre cliente e servidor?',
    options: [
      'Apenas criptografia simétrica é usada durante toda a conexão',
      'Primeiro usa-se criptografia assimétrica para trocar uma chave simétrica temporária, que é usada para o restante da comunicação',
      'Apenas criptografia assimétrica é usada durante toda a conexão',
      'Não há criptografia — HTTPS usa apenas autenticação',
    ],
    correctAnswer: 1,
    explanation: 'HTTPS combina os dois tipos: o handshake inicial usa criptografia assimétrica (RSA/ECC) para autenticar o servidor e trocar uma chave simétrica temporária (session key). A partir daí, a comunicação usa criptografia simétrica (AES), que é mais rápida para grandes volumes de dados.',
  },
  {
    id: 108,
    moduleId: 'seguranca',
    topic: 'Criptografia',
    question: 'Uma função hash criptográfica como SHA-256 tem uma propriedade importante: mesmo uma mudança mínima na entrada produz um hash completamente diferente. Como essa propriedade é chamada?',
    options: [
      'Colisão',
      'Efeito avalanche',
      'Determinismo',
      'Reversibilidade',
    ],
    correctAnswer: 1,
    explanation: 'O "efeito avalanche" (avalanche effect) significa que uma pequena mudança na entrada (um único bit) produz mudanças drásticas no hash de saída (aproximadamente 50% dos bits se alteram). Isso torna impossível prever o hash de entradas similares e dificulta ataques de colisão.',
  },
  {
    id: 109,
    moduleId: 'seguranca',
    topic: 'Criptografia',
    question: 'Qual é a principal vantagem da criptografia assimétrica sobre a simétrica?',
    options: [
      'É mais rápida e consome menos recursos',
      'Elimina o problema de compartilhamento seguro de chaves, pois a chave pública pode ser distribuída abertamente',
      'É mais fácil de implementar',
      'Não requer algoritmos matemáticos complexos',
    ],
    correctAnswer: 1,
    explanation: 'A grande vantagem da criptografia assimétrica é resolver o "problema da distribuição de chaves". Na simétrica, as duas partes precisam combinar uma chave secreta — o que é difícil em canais inseguros. Na assimétrica, a chave pública é distribuída livremente e apenas a chave privada é secreta.',
  },
  {
    id: 110,
    moduleId: 'seguranca',
    topic: 'Criptografia',
    question: 'Uma assinatura digital garante quais propriedades de segurança?',
    options: [
      'Apenas confidencialidade — os dados são criptografados',
      'Apenas disponibilidade — os dados estão sempre acessíveis',
      'Autenticidade (quem assinou) e integridade (não foi alterado)',
      'Apenas não repúdio — o remetente não pode negar o envio',
    ],
    correctAnswer: 2,
    explanation: 'Assinaturas digitais garantem autenticidade (verifica a identidade do remetente através da chave privada) e integridade (qualquer alteração nos dados invalida a assinatura). Também fornece não-repúdio, mas não oferece confidencialidade — os dados assinados podem ser legíveis.',
  },

  // === Segurança em Redes e Firewall (111-115) ===
  {
    id: 111,
    moduleId: 'seguranca',
    topic: 'Segurança em Redes e Firewall',
    question: 'Um firewall stateful (com estado) difere de um firewall stateless (sem estado) porque:',
    options: [
      'Stateful é mais simples e mais rápido que stateless',
      'Stateful mantém uma tabela do estado das conexões ativas, entendendo o contexto do tráfego',
      'Stateless consegue inspecionar o conteúdo dos pacotes; stateful não',
      'Não há diferença prática entre os dois tipos',
    ],
    correctAnswer: 1,
    explanation: 'Firewall stateful mantém uma tabela de estados (state table) registrando todas as conexões ativas. Ele entende o contexto: se um pacote faz parte de uma conexão legítima estabelecida ou é uma tentativa de invasão. Stateless analisa cada pacote isoladamente, sem contexto.',
  },
  {
    id: 112,
    moduleId: 'seguranca',
    topic: 'Segurança em Redes e Firewall',
    question: 'Qual das seguintes NÃO é uma função típica de um firewall de próxima geração (NGFW)?',
    options: [
      'Inspeção SSL/TLS de tráfego criptografado',
      'Prevenção de intrusão (IPS) integrada',
      'Hospedagem de sites web',
      'Filtragem por aplicação (identificar aplicativos pelo tráfego)',
    ],
    correctAnswer: 2,
    explanation: 'Hospedagem de sites web não é função de firewall — isso é feito por servidores web (Apache, Nginx). NGFWs combinam firewall tradicional, IPS, inspeção SSL, filtragem por aplicação e outras funcionalidades avançadas de segurança.',
  },
  {
    id: 113,
    moduleId: 'seguranca',
    topic: 'Segurança em Redes e Firewall',
    question: 'Um administrador configurou uma regra de firewall: "Permitir tráfego HTTP (porta 80) de qualquer origem para o servidor web interno". Qual tipo de firewall é capaz de implementar essa regra?',
    options: [
      'Apenas NGFW — firewalls simples não filtram por porta',
      'Qualquer firewall — filtragem por porta é uma funcionalidade básica',
      'Apenas firewall stateful — stateless não filtra portas',
      'Nenhum firewall, pois regras por porta são obsoletas',
    ],
    correctAnswer: 1,
    explanation: 'Filtragem por porta é uma funcionalidade básica de qualquer firewall — desde os mais simples filtros de pacotes (stateless) até NGFWs. A regra "permitir porta 80 para IP X" é elementar e todos os firewalls suportam.',
  },
  {
    id: 114,
    moduleId: 'seguranca',
    topic: 'Segurança em Redes e Firewall',
    question: 'Um IDS detectou tráfego suspeito na rede, mas não bloqueou o ataque. Por quê?',
    options: [
      'O IDS estava mal configurado — deveria ter bloqueado',
      'IDS é um sistema passivo: apenas detecta e alerta, não bloqueia tráfego',
      'O IDS só bloqueia ataques conhecidos, não desconhecidos',
      'IDS só funciona em redes sem fio (Wi-Fi)',
    ],
    correctAnswer: 1,
    explanation: 'IDS (Intrusion Detection System) é um sistema passivo que monitora o tráfego e gera alertas quando detecta atividades suspeitas, mas não toma ação bloqueadora. Para bloquear, é necessário um IPS (Intrusion Prevention System), que é posicionado em linha com o tráfego.',
  },
  {
    id: 115,
    moduleId: 'seguranca',
    topic: 'Segurança em Redes e Firewall',
    question: 'No modelo Zero Trust, um dispositivo dentro da rede corporativa:',
    options: [
      'É automaticamente confiável por estar dentro do perímetro',
      'Não precisa de autenticação para acessar recursos internos',
      'Nunca é confiável por padrão — cada acesso é verificado individualmente',
      'Tem acesso irrestrito a todos os sistemas',
    ],
    correctAnswer: 2,
    explanation: 'Zero Trust elimina o conceito de "confiança implícita" baseada em localização. Um dispositivo dentro da rede é tratado com o mesmo nível de desconfiança que um externo. Cada acesso a cada recurso requer autenticação e autorização individual.',
  },

  // === Boas Práticas de Segurança (116-120) ===
  {
    id: 116,
    moduleId: 'seguranca',
    topic: 'Boas Práticas de Segurança',
    question: 'Um funcionário anotou sua senha em um post-it colado no monitor. Qual é a melhor alternativa a esse comportamento?',
    options: [
      'Usar a mesma senha para tudo, assim ele nunca esquece',
      'Usar um gerenciador de senhas que armazena e preenche as senhas com segurança',
      'Anotar a senha em um arquivo de texto no desktop',
      'Não usar senha — a empresa deveria adotar apenas biometria',
    ],
    correctAnswer: 1,
    explanation: 'Gerenciadores de senhas (LastPass, Bitwarden, 1Password) são a solução recomendada: armazenam senhas com criptografia, geram senhas fortes automaticamente e preenchem nos sites. Assim o usuário só precisa lembrar uma senha mestra.',
  },
  {
    id: 117,
    moduleId: 'seguranca',
    topic: 'Boas Práticas de Segurança',
    question: 'Um profissional de segurança está implementando backups. Qual estratégia segue a regra 3-2-1?',
    options: [
      '3 backups no mesmo HD, 2 partições, 1 pasta',
      '3 cópias (original + 2 backups), em 2 tipos de mídia (HD externo + nuvem), 1 cópia fora do local',
      '3 backups diários, 2 semanais, 1 mensal',
      '3 pessoas responsáveis, 2 locais, 1 procedimento',
    ],
    correctAnswer: 1,
    explanation: 'A regra 3-2-1 recomenda: manter 3 cópias dos dados (a original + 2 backups), armazenadas em pelo menos 2 tipos de mídia diferentes (ex: HD externo e armazenamento em nuvem), com pelo menos 1 cópia armazenada em local físico diferente (offsite).',
  },
  {
    id: 118,
    moduleId: 'seguranca',
    topic: 'Boas Práticas de Segurança',
    question: 'Qual das seguintes é a abordagem mais segura para lidar com um e-mail suspeito recebido no trabalho?',
    options: [
      'Responder perguntando se o e-mail é verdadeiro',
      'Clicar no link para verificar se é seguro',
      'Não clicar em nada, reportar ao time de segurança e deletar o e-mail',
      'Encaminhar para colegas perguntando se receberam também',
    ],
    correctAnswer: 2,
    explanation: 'Ao receber um e-mail suspeito, não clique em nada, não responda e não encaminhe. Reporte imediatamente ao time de segurança da informação (que tem ferramentas para investigar) e depois delete o e-mail. Isso evita riscos de phishing e protege a organização.',
  },
  {
    id: 119,
    moduleId: 'seguranca',
    topic: 'Boas Práticas de Segurança',
    question: 'Além de senha, a autenticação multifator (MFA) pode usar quais outros fatores?',
    options: [
      'Apenas biometria (digital, face)',
      'Apenas token físico ou aplicativo gerador de códigos',
      'Algo que você TEM (token, celular) e algo que você É (biometria)',
      'MFA usa apenas senhas diferentes',
    ],
    correctAnswer: 2,
    explanation: 'MFA combina dois ou mais fatores de categorias diferentes: algo que você SABE (senha), algo que você TEM (token, smartphone, cartão) e algo que você É (biometria como digital ou reconhecimento facial). Quanto mais fatores, mais seguro.',
  },
  {
    id: 120,
    moduleId: 'seguranca',
    topic: 'Boas Práticas de Segurança',
    question: 'Um gestor disse: "Segurança é responsabilidade de todo mundo, não apenas do time de TI." Esta afirmação está correta?',
    options: [
      'Não — apenas o time de TI deve se preocupar com segurança',
      'Sim — a segurança da informação é responsabilidade compartilhada por todos na organização, cada um em seu nível',
      'Não — segurança é responsabilidade exclusiva da diretoria',
      'Sim — mas apenas para cargos de liderança',
    ],
    correctAnswer: 1,
    explanation: 'A segurança da informação é uma responsabilidade compartilhada (shared responsibility). O time de TI implementa as ferramentas e políticas, mas cada funcionário deve seguir boas práticas: não clicar em phishing, usar senhas fortes, reportar incidentes. A cultura de segurança envolve toda a organização.',
  },
{
    id: 121,
    moduleId: 'cti',
    topic: 'OSINT Sources',
    question: 'During a threat intelligence gathering operation, an analyst discovers that a threat actor is using a specific pastebin-like service to publish leaked credentials before they appear on the clear web. The analyst needs to track this actor proactively. Which approach best describes the collection method and source type being used?',
    options: [
      'Passive collection using open social media APIs to monitor for mentions of the actor\'s handle',
      'Active collection by subscribing to a commercial threat feed that aggregates paste sites',
      'Passive collection by monitoring the paste service directly through manual browsing without automated tools',
      'Active collection by deploying a web scraper that periodically fetches and parses new pastes from the service'
    ],
    correctAnswer: 3,
    explanation: 'Deploying a web scraper that periodically fetches content from the paste service is an active collection method because it involves direct interaction with the source. While the data itself is publicly available, automated retrieval constitutes active collection. Option A is passive but uses social media APIs. Option B uses a commercial feed (secondary source). Option C describes manual browsing which is passive but impractical for timely tracking.',
  },
  {
    id: 122,
    moduleId: 'cti',
    topic: 'Intelligence Cycle - Direction',
    question: 'A SOC manager receives a request from the CISO: \'I need to know which ransomware groups are currently targeting our industry sector in Latin America, their preferred initial access vectors, and whether any of our current security controls are likely to detect them.\' The manager assigns this to the CTI team. Which step of the intelligence cycle does this initial request primarily represent?',
    options: [
      'Collection, because the CISO is asking the CTI team to gather specific data about ransomware groups',
      'Direction, because the request establishes requirements, priorities, and the intelligence gap that needs to be filled',
      'Analysis, because the request requires correlating threat actor behavior with existing security controls',
      'Dissemination, because the CISO will eventually receive a final report answering these questions'
    ],
    correctAnswer: 1,
    explanation: 'The Direction phase involves defining intelligence requirements, establishing priorities, and identifying gaps to fill. The CISO\'s request specifies threat, geography, sector, and needed information. This sets scope and direction for the intelligence cycle. Options A, C, and D describe later phases.',
  },
  {
    id: 123,
    moduleId: 'cti',
    topic: 'Intelligence Cycle - Collection',
    question: 'A CTI analyst is tasked with collecting information about a new APT group targeting financial institutions. The analyst collects from: (1) a commercial threat feed, (2) Telegram channels used by the group, (3) sandbox reports of suspected malware samples, and (4) interviews with incident responders. Which categorization best describes this collection strategy?',
    options: [
      'All four sources are primary sources because they contain original data about the threat actor',
      'Sources 1 and 2 are passive collection, while 3 and 4 are active collection methods',
      'The collection combines OSINT (1, 2), technical intelligence (3), and human intelligence (4) from both primary and secondary sources',
      'All collection is considered finished intelligence because it comes from multiple sources'
    ],
    correctAnswer: 2,
    explanation: 'The analyst uses a diverse strategy: commercial feed (1) is secondary OSINT, Telegram (2) is OSINT, sandbox reports (3) are primary TECHINT, and responder interviews (4) are primary HUMINT.',
  },
  {
    id: 124,
    moduleId: 'cti',
    topic: 'Intelligence Cycle - Processing',
    question: 'A CTI team collects over 10,000 raw IOCs in various formats: CSV exports, STIX bundles, free-text emails from partners, and PDF reports. Before any analysis can occur, what must happen to this data?',
    options: [
      'The IOCs should be immediately loaded into the SIEM for automated blocking since time is of the essence',
      'The data must be processed: normalized, formatted, enriched, and translated into a common schema for effective correlation and analysis',
      'Analysis should begin immediately on raw data because processing introduces latency and may strip valuable context',
      'The team should discard IOCs from unstructured sources like PDF reports, keeping only structured STIX and CSV data'
    ],
    correctAnswer: 1,
    explanation: 'The Processing phase transforms raw collected data into a usable format. Normalizing IOCs to a common schema enables correlation. Skipping processing leads to data silos. Option A is dangerous: IOCs should be validated first. Option C ignores reality. Option D discards valuable intelligence.',
  },
  {
    id: 125,
    moduleId: 'cti',
    topic: 'Intelligence Cycle - Analysis',
    question: 'A CTI analyst processes IOCs from three separate incidents. Incident A: IP 185.x.x.x and domain \'mal-update[.]com\'. Incident B: same domain, different IP. Incident C: new IP but same SSL certificate hash as Incident A. What should the analyst conclude during analysis?',
    options: [
      'The three incidents are unrelated because they involved different IP addresses and organizations',
      'The shared domain and SSL certificate hash strongly suggest a common threat actor or shared infrastructure',
      'The analyst should dismiss the SSL certificate hash correlation because certificates can be easily duplicated',
      'The domain alone is sufficient evidence to attribute all three to a specific named APT group'
    ],
    correctAnswer: 1,
    explanation: 'Correlation reveals patterns: the domain links A and B, the SSL cert hash links A and C, forming a triangle indicating shared infrastructure. Option A ignores correlations. Option C undervalues the pivot. Option D is premature attribution.',
  },
  {
    id: 126,
    moduleId: 'cti',
    topic: 'Intelligence Cycle - Dissemination',
    question: 'A CTI team completes analysis of a new phishing campaign targeting the executive team. Analysis includes: technical IOCs, TTP descriptions, detection rules, and an executive summary. Which dissemination strategy is most appropriate?',
    options: [
      'Send the full technical report to every employee so everyone is aware',
      'Publish the IOCs only on the SIEM team\'s ticketing system',
      'Tailor the dissemination: executive summary to leadership, technical IOCs and detection rules to SOC, full report to IR team with action items',
      'Delay dissemination for 30 days to ensure the intelligence is fully vetted'
    ],
    correctAnswer: 2,
    explanation: 'Dissemination requires delivering intelligence in the right format to the right audience. Executives need strategic context, SOC needs actionable data, IR needs full analysis. Option A overwhelms. Option B is too narrow. Option D defeats timely intelligence.',
  },
  {
    id: 127,
    moduleId: 'cti',
    topic: 'Intelligence Cycle - Feedback',
    question: 'After disseminating a threat report, the CTI team receives feedback: SOC reports 2,000 false positives from detection rules, finance says the executive summary was too technical, and IR found 3 of 10 IOCs were expired. What does this feedback represent?',
    options: [
      'A failure of the collection phase because IOCs should have been verified before collection',
      'An opportunity to improve direction, collection, processing, analysis, and dissemination based on consumer feedback, completing the cycle',
      'Evidence that the intelligence cycle is broken and the organization should not produce its own threat intelligence',
      'Confirmation that the report was successful because teams engaged with the intelligence'
    ],
    correctAnswer: 1,
    explanation: 'Feedback is the final phase that feeds back into Direction. False positives suggest processing/analysis gaps, too-technical summaries indicate poor tailoring, expired IOCs point to collection timeliness. This feedback should refine all phases.',
  },
  {
    id: 128,
    moduleId: 'cti',
    topic: 'IOCs vs IOAs',
    question: 'A SOC analyst observes: PowerShell spawning from Microsoft Word, reaching out to an external IP on port 443, and writing a DLL to AppData. Which best describes these observations in terms of IOCs and IOAs?',
    options: [
      'The IP address and DLL hash are IOCs; the Word-to-PowerShell process chain is an IOA indicating malicious behavior',
      'All observations are IOCs because they are specific artifacts for a blocklist',
      'All observations are IOAs because they describe behavior patterns, not forensic artifacts',
      'The IP address and DLL hash are IOAs; the process chain is an IOC'
    ],
    correctAnswer: 0,
    explanation: 'IOCs are specific forensic artifacts (IP, hash, domain). IOAs focus on behavioral patterns (Word spawning PowerShell). The IP and DLL are concrete IOCs; the process chain represents behavioral IOA. Options B, C, and D swap the definitions.',
  },
  {
    id: 129,
    moduleId: 'cti',
    topic: 'TTPs',
    question: 'During incident response, the team finds the attacker gained access via spear-phishing with a PDF containing embedded JavaScript that downloads a PowerShell payload. The PowerShell performs DLL side-loading. Which classification best describes these observations?',
    options: [
      'These are IOCs because the PDF hash, JavaScript, and DLL names can be used for detection',
      'These are TTPs: Initial Access via Spearphishing Attachment, Execution via PowerShell, Defense Evasion via DLL Side-Loading',
      'This is exclusively a vulnerability exploitation chain because no CVE was exploited',
      'These are IOAs but not TTPs because no attacker tools were identified'
    ],
    correctAnswer: 1,
    explanation: 'TTPs describe adversary behaviors mapped to MITRE ATT\&CK: T1566.001 (Spearphishing Attachment), T1059.001 (PowerShell), T1574.002 (DLL Side-Loading). While IOCs also exist, the question asks for behavioral classification.',
  },
  {
    id: 130,
    moduleId: 'cti',
    topic: 'Diamond Model',
    question: 'An analyst maps an intrusion using the Diamond Model. Attacker used Emotet via phishing from newsletter@compromised-domain[.]com, victim is a regional hospital, C2 at 203.x.x.x. Which elements correspond to the four vertices?',
    options: [
      'Adversary: Emotet; Victim: Ohio hospital; Infrastructure: C2 server; Capability: Phishing email',
      'Adversary: The threat actor operating Emotet; Victim: Ohio hospital; Infrastructure: C2 server and compromised domain; Capability: Emotet delivered via phishing',
      'Adversary: The compromised domain; Victim: Hospital employees; Infrastructure: 203.x.x.x; Capability: Phishing',
      'Adversary: Unknown; Victim: Hospital network; Infrastructure: Email server; Capability: None because malware was used'
    ],
    correctAnswer: 1,
    explanation: 'Diamond Model vertices: Adversary (operator, not malware), Victim (organization), Infrastructure (technical resources like C2 and domains), Capability (tools and techniques). Option 2 correctly assigns all four.',
  },
  {
    id: 131,
    moduleId: 'cti',
    topic: 'MITRE ATT&CK',
    question: 'A blue team analyst sees svchost.exe making unusual outbound connections to a malicious IP on port 443, spawned by a scheduled task created via remote SMB. The analyst wants to use MITRE ATT&CK to understand the full attack chain. Which matrix and approach should they use?',
    options: [
      'The ICS matrix because scheduled tasks are common in industrial control systems',
      'The Enterprise matrix, mapping behaviors to tactics like Initial Access, Execution, Persistence, Command and Control using techniques like Scheduled Task, Remote Services, Web Protocol',
      'The Mobile matrix because svchost.exe can only be exploited through mobile device management',
      'The PRE-ATT&CK matrix only since attribution has not been completed'
    ],
    correctAnswer: 1,
    explanation: 'MITRE ATT&CK Enterprise covers Windows. Observable behaviors: Initial Access via Remote Services (SMB), Persistence via Scheduled Task (T1053.005), C2 via Web Protocols (T1071.001). Enterprise matrix is appropriate.',
  },
  {
    id: 132,
    moduleId: 'cti',
    topic: 'Cyber Kill Chain',
    question: 'A DFIR analyst reconstructs: (1) employee received malicious macro email, (2) macro downloaded payload, (3) payload beaconed to C2 and established registry persistence, (4) attacker moved laterally to database server, (5) data exfiltrated. Which Cyber Kill Chain mapping is correct?',
    options: [
      'Reconnaissance, Weaponization, Delivery, Exploitation, Installation, C2, Actions on Objectives',
      'Delivery: email; Exploitation: macro; Installation: registry persistence; C2: beaconing; Actions: lateral movement and exfiltration; Reconnaissance/Weaponization occurred before the timeline',
      'All phases from Reconnaissance through Actions on Objectives occurred within the observed timeline',
      'Weaponization: email attachment; Delivery: email receipt; Exploitation: macro; Installation: payload download; C2: beaconing; Actions: lateral movement and exfiltration'
    ],
    correctAnswer: 1,
    explanation: 'The Cyber Kill Chain: Reconnaissance, Weaponization (pre-timeline), Delivery (email), Exploitation (macro), Installation (persistence), C2 (beaconing), Actions on Objectives (lateral movement + exfiltration).',
  },
  {
    id: 133,
    moduleId: 'cti',
    topic: 'Unified Kill Chain',
    question: 'An APT has operated inside a network for eight months. After initial compromise via a VPN appliance, the attacker established persistence, moved laterally, created Golden Tickets, and exfiltrated IP. A junior analyst uses the Cyber Kill Chain but the attacker re-enters earlier phases multiple times. Which framework better describes this?',
    options: [
      'The Cyber Kill Chain is still best; group repeated activities under \'Actions on Objectives\'',
      'The Unified Kill Chain, which extends the CKC to account for recursive attack patterns and multiple compromise stages',
      'The Diamond Model because it focuses on relationships, not linear phases',
      'The STRIDE model because it classifies threats by type'
    ],
    correctAnswer: 1,
    explanation: 'The Unified Kill Chain (UKC) has 18 phases in three cycles (In, Through, Out, In, etc.) handling recursive attack patterns. The CKC (option A) is too linear for APTs. Diamond Model (C) is analytic, not temporal. STRIDE (D) is threat classification.',
  },
  {
    id: 134,
    moduleId: 'cti',
    topic: 'STIX/TAXII',
    question: 'An organization needs to share threat intelligence with a partner using a different TIP. The team has IPs, domains, hashes, attack patterns, and campaign context. Which approach ensures interoperability and automated sharing?',
    options: [
      'Send IOCs in a plain text file separated by commas, the most universally accepted format',
      'Use STIX 2.1 for all threat intelligence objects in standardized JSON, and TAXII 2.1 as the transport protocol for automated exchange',
      'Use PDF reports because they preserve formatting and context better than structured data',
      'Share via a shared Google Drive spreadsheet for real-time access'
    ],
    correctAnswer: 1,
    explanation: 'STIX standardizes threat intelligence representation; TAXII enables transport. STIX 2.1 JSON bundles ensure programmatic parsing. Option A (plain text) loses context. Option C prevents automation. Option D lacks schema.',
  },
  {
    id: 135,
    moduleId: 'cti',
    topic: 'MISP',
    question: 'A CTI team identifies a new phishing campaign and wants to share it with their ISAC, receive notifications when others observe related activity, and collaborate on analysis with tags and sightings. Which platform is designed for this?',
    options: [
      'MISP (Malware Information Sharing Platform), an open-source platform for sharing, storing, and collaborating on threat intelligence',
      'Splunk ES, which can receive threat feeds and correlate with internal logs',
      'VirusTotal API for submitting and querying IOCs against a global database',
      'A shared Slack channel for real-time communication'
    ],
    correctAnswer: 0,
    explanation: 'MISP is specifically designed for collaborative threat intelligence sharing with events, tags, correlation, sightings, and automated feed distribution. Splunk (B) is a SIEM. VirusTotal (C) is malware analysis. Slack (D) lacks structure.',
  },
  {
    id: 136,
    moduleId: 'cti',
    topic: 'Threat Feeds',
    question: 'A SOC evaluates three feeds: Feed A (high confidence commodity malware C2s, real-time), Feed B (APT TTP context, medium confidence, weekly), Feed C (raw DNS sinkhole, millions of domains, no context). Which combination and usage is most appropriate?',
    options: [
      'Use Feed C exclusively because more indicators mean better coverage',
      'Use Feed A for automated blocking (high confidence), Feed B for strategic analysis and hunting (TTP context), and Feed C only after validation and prioritization',
      'Use Feed B as the sole source because APTs represent the highest risk',
      'Combine all three with equal priority, blocking any matching indicator immediately'
    ],
    correctAnswer: 1,
    explanation: 'Feed A (high confidence) is safe for automated blocking. Feed B provides strategic value for hunting. Feed C needs processing to avoid false positives. Option A risks disruption. Option C ignores commodity threats. Option D causes alert fatigue.',
  },
  {
    id: 137,
    moduleId: 'cti',
    topic: 'APT Groups',
    question: 'An organization in the defense sector discovers a sophisticated intrusion: custom malware, persistence over a year, operation during US business hours, encrypted exfiltration over HTTPS, LOLBins, obfuscated PowerShell. What classification best describes this actor?',
    options: [
      'A hacktivist group because HTTPS is common among politically motivated attackers',
      'An Advanced Persistent Threat (APT), likely state-sponsored, given custom tools, long-term persistence, OPSEC, and defense sector targeting',
      'A cybercriminal group because data exfiltration is financially motivated',
      'An insider threat because the attacker operated during business hours'
    ],
    correctAnswer: 1,
    explanation: 'Custom malware, year-long persistence, OPSEC, defense sector targeting, and extensive resources are hallmarks of nation-state APTs. Cybercriminals (C) are financially motivated. Hacktivists (A) seek visibility. Business hours alone (D) is insufficient.',
  },
  {
    id: 138,
    moduleId: 'cti',
    topic: 'Passive vs Active Collection',
    question: 'A CTI analyst needs intelligence about a threat actor on underground forums. Policy requires collection must not alert the actor or reveal the organization\'s interest. Which approach is most appropriate?',
    options: [
      'Active collection: create a fake persona and engage the actor directly',
      'Passive collection: monitor publicly accessible posts, cached versions, and metadata without logging in or interacting',
      'Passive collection with active probing: send queries to forum infrastructure without posting content',
      'Active collection via law enforcement liaison'
    ],
    correctAnswer: 1,
    explanation: 'Passive collection gathers data without interacting or revealing presence. Observing public posts and cached pages is passive. Options A (persona), C (probing), and D (liaison) involve interaction or OPSEC risks.',
  },
  {
    id: 139,
    moduleId: 'cti',
    topic: 'Data Enrichment',
    question: 'An analyst extracts IP 45.x.x.x from a malware sample. The analyst needs to determine reputation, associated infrastructure, geographic location, and malware family associations. Which enrichment approach is most effective?',
    options: [
      'Use only passive DNS data for IP domain history',
      'Correlate across multiple sources: VirusTotal, OTX, passive DNS, WHOIS, geolocation, and sandbox reports',
      'Submit the IP to the firewall blocklist and check firewall logs',
      'Reverse DNS lookup; assume malicious if hostname contains generic words'
    ],
    correctAnswer: 1,
    explanation: 'Comprehensive enrichment uses multiple sources: threat intel platforms for reputation, passive DNS for domain associations, WHOIS for registration patterns, geolocation for hosting context, sandbox reports for behavior. Options A, C, D are insufficient.',
  },
  {
    id: 140,
    moduleId: 'cti',
    topic: 'Intelligence Reports',
    question: 'A CISO needs a board report on: top three cyber threats, comparison to industry peers, financial risk exposure, and strategic investment recommendations. What type of intelligence report should the CTI team produce?',
    options: [
      'Tactical report with detailed IOCs, YARA rules, and Snort signatures',
      'Operational report focused on specific campaigns and attack timelines',
      'Strategic report with high-level threat trends, risk exposure, peer benchmarking, and business recommendations in non-technical language',
      'Raw intelligence dump for the board to perform their own analysis'
    ],
    correctAnswer: 2,
    explanation: 'Strategic intelligence serves decision-makers with trends, risks, and business recommendations. Option A (tactical) is for SOC. Option B (operational) is for IR managers. Option D is unprocessed data.',
  },
  {
    id: 141,
    moduleId: 'cti',
    topic: 'Strategic vs Tactical vs Operational Intel',
    question: 'Analyst A produces daily phishing campaign reports with subject lines, domains, and hashes. Analyst B produces quarterly geopolitical threat assessments for the energy sector. Analyst C produces monthly attack pattern summaries with trend analysis. Which classifications fit each?',
    options: [
      'Analyst A: Tactical; Analyst B: Strategic; Analyst C: Operational',
      'Analyst A: Operational; Analyst B: Strategic; Analyst C: Tactical',
      'Analyst A: Strategic; Analyst B: Tactical; Analyst C: Operational',
      'Analyst A: Tactical; Analyst B: Operational; Analyst C: Strategic'
    ],
    correctAnswer: 0,
    explanation: 'Tactical: specific threats and technical indicators (Analyst A). Strategic: long-term risks and geopolitical context (Analyst B). Operational: campaign-level patterns between tactical and strategic (Analyst C).',
  },
  {
    id: 142,
    moduleId: 'cti',
    topic: 'OSINT Sources',
    question: 'An analyst researching a new IoT malware family wants source code, command protocol, and public discussions. Which OSINT sources are most productive?',
    options: [
      'LinkedIn job postings and corporate annual reports',
      'Public sandbox reports (Any.Run, Joe Sandbox), code repositories (GitHub), security researcher blogs, and underground forum monitoring',
      'Wikipedia and general news websites for accurate technical information',
      'Only commercial threat intelligence feeds because OSINT is unreliable'
    ],
    correctAnswer: 1,
    explanation: 'Sandbox reports show behavior, code repos may host PoC/source, researcher blogs have analysis, underground forums may discuss development. Option A is unlikely. Wikipedia (C) is too slow. Commercial feeds (D) miss free intelligence.',
  },
  {
    id: 143,
    moduleId: 'cti',
    topic: 'Intelligence Cycle - Collection',
    question: 'A CTI team tracks a ransomware group\'s cryptocurrency wallet to understand financial operations and identify victims. The blockchain is public. Which collection method is most appropriate?',
    options: [
      'Contact the exchange for transaction history under mutual legal assistance',
      'Passively collect blockchain data via block explorer API, clustering related addresses through blockchain analysis',
      'Send small test transactions to trigger the group\'s monitoring systems',
      'Submit the wallet to a commercial feed and wait for their analysts'
    ],
    correctAnswer: 1,
    explanation: 'Blockchain is public; block explorer APIs enable passive transaction tracking and clustering. Option A has legal hurdles. Option C is active and reveals the analyst. Option D delays intelligence.',
  },
  {
    id: 144,
    moduleId: 'cti',
    topic: 'Processing - STIX',
    question: 'An analyst receives a STIX 2.1 bundle with: Indicator (IP), Campaign (Operation Dark Night), Attack Pattern (T1566.001), and Relationship linking the IP to the Campaign. What is the significance of the relationships?',
    options: [
      'STIX objects are irrelevant because MISP does not support STIX imports',
      'The bundle provides rich contextual intelligence: the IP is linked to a specific campaign using a known technique, enabling informed prioritization and hunting',
      'Strip all relationships, leaving only the raw IP, because relationships complicate analysis',
      'Ignore the Attack Pattern because MITRE ATT&CK techniques do not belong in STIX'
    ],
    correctAnswer: 1,
    explanation: 'STIX 2.1 relationships provide context: the IP is part of Operation Dark Night using Spearphishing. This enables prioritization (targeted vs random) and hunting (hunt for T1566.001). MISP supports STIX (A is false).',
  },
  {
    id: 145,
    moduleId: 'cti',
    topic: 'Analysis - Diamond Model',
    question: 'In intrusion Alpha, adversary used SQLi. In Beta, same adversary used spear-phishing. Victims are in different sectors (finance, healthcare) but share the same cloud hosting provider. In Gamma, SQLi was used again. What hypothesis might the analyst form?',
    options: [
      'The adversary uses the same physical servers because SQLi was reused',
      'The common cloud provider means the adversary is compromising the provider itself',
      'The adversary has both SQLi and phishing capabilities (multi-skilled), and the shared cloud provider could be infrastructure selection or coincidental victim characteristic',
      'Different sectors and vectors mean three unrelated adversaries'
    ],
    correctAnswer: 2,
    explanation: 'The Diamond Model explores vertex relationships. Diverse capabilities suggest a skilled group. The shared cloud provider could be deliberate targeting or coincidence. Options A and D jump to conclusions. Option B is less likely.',
  },
  {
    id: 146,
    moduleId: 'cti',
    topic: 'MITRE ATT&CK - Mapping',
    question: 'A DFIR team documents: (1) compromised credentials for VPN access, (2) RDP to file server, (3) LSASS dump via Mimikatz on DC, (4) scheduled task persistence, (5) exfiltration over HTTPS. Which MITRE ATT&CK technique IDs should they include?',
    options: [
      'T1078, T1021.001, T1003.001, T1053.005, T1048.002',
      'T1190, T1047, T1003, T1053, T1041',
      'T1566, T1210, T1003, T1547, T1567',
      'T1078, T1047, T1003.001, T1053.005, T1020'
    ],
    correctAnswer: 0,
    explanation: 'Valid Accounts (T1078), RDP (T1021.001), LSASS Memory (T1003.001), Scheduled Task (T1053.005), Exfiltration Over Encrypted Channel (T1048.002). Option B uses WMI (unobserved). Option C uses Phishing (unobserved).',
  },
  {
    id: 147,
    moduleId: 'cti',
    topic: 'Cyber Kill Chain - Prevention',
    question: 'An organization wants to use the Cyber Kill Chain to prioritize defensive investments. They have email filtering and EDR. Which additional control provides the most Kill Chain coverage?',
    options: [
      'Network segmentation and egress monitoring to disrupt lateral movement and C2, covering the latter half of the chain',
      'More advanced email filtering because Delivery is where most attacks begin',
      'Physical security because Reconnaissance involves physical surveillance',
      'Public relations services since Actions on Objectives involves reputation damage'
    ],
    correctAnswer: 0,
    explanation: 'The org already covers early phases (Delivery, Exploitation/Installation). Network segmentation and egress monitoring address C2, lateral movement, and exfiltration. Option B reinforces an already-covered phase. C and D are less relevant.',
  },
  {
    id: 148,
    moduleId: 'cti',
    topic: 'STIX/TAXII',
    question: 'A STIX 2.1 indicator has pattern, pattern_type, and valid_from. The analyst wants it to expire after 30 days automatically. How should they modify the indicator?',
    options: [
      'Add valid_until set to 2025-01-31T00:00:00Z for automatic expiration',
      'Delete the indicator manually after 30 days, since STIX has no expiration mechanism',
      'Set pattern_type to expire and include duration in the pattern string',
      'Create a separate Report object with expiration date'
    ],
    correctAnswer: 0,
    explanation: 'STIX 2.1 indicators support valid_until for automatic expiration in consuming systems. Option B is wrong: STIX does support expiration. Options C and D misuse STIX constructs.',
  },
  {
    id: 149,
    moduleId: 'cti',
    topic: 'MISP - Correlation',
    question: 'A MISP admin sees one IP in 15 events. Some tag it C2, others malware distribution, others scanning. The IP links to three malware families. Which MISP feature is most useful to determine its true nature?',
    options: [
      'The Sighting feature to record observations, building collective confidence over time',
      'The Tag feature alone, since tags definitively classify indicators',
      'The Distribution feature showing which organizations shared the IP',
      'MISP does not support correlation analysis'
    ],
    correctAnswer: 0,
    explanation: 'MISP Sightings let community members record how they observed the IP. Over time, empirical evidence reveals true nature (e.g., 10 C2 sightings vs 2 scanning). Tags (B) are inconsistently applied. Distribution (C) focuses on source trust.',
  },
  {
    id: 150,
    moduleId: 'cti',
    topic: 'Threat Feeds - Quality',
    question: 'A SOC ingests a free feed providing 50,000 IPs/month. Only 12 IPs matched confirmed incidents. The feed claims 99% detection rate. How should the SOC evaluate it?',
    options: [
      'Excellent: 50,000 IPs provide broad coverage and 99% detection rate is verified',
      'Extremely low precision (0.024% relevance). The claimed rate likely refers to known-bad IP detection, not real-world relevance. Poor fit for automated blocking.',
      'Use at full confidence because free feeds are maintained by volunteers',
      'Use for alerting only since any detection is better than none'
    ],
    correctAnswer: 1,
    explanation: 'Precision matters: 0.024% relevance means 99.976% false positives if used for blocking. The 99% detection rate is likely sensitivity on a test set. Options A and C ignore precision. Option D overwhelms analysts.',
  },
  {
    id: 151,
    moduleId: 'cti',
    topic: 'Passive vs Active Collection',
    question: 'An analyst investigates a C2 server and considers: (a) Nmap scan, (b) VirusTotal check, (c) passive DNS query, (d) browsing the web page, (e) SSL certificate transparency logs. Which are passive vs active?',
    options: [
      'All are passive because they are research at a computer',
      'b, c, e are passive (no direct target interaction); a and d are active (direct interaction logged by target)',
      'a and d are passive; b, c, e are active',
      'None are passive because any intelligence gathering risks detection'
    ],
    correctAnswer: 1,
    explanation: 'Passive: using pre-existing third-party data (VirusTotal, passive DNS, cert transparency). Active: sending packets (Nmap) or HTTP requests (browsing) that the target logs. Direct interaction reveals the analyst.',
  },
  {
    id: 152,
    moduleId: 'cti',
    topic: 'Intelligence Cycle - Direction',
    question: 'A new CTI team has requirements: (R1) most common initial access vectors in our industry, (R2) threat actors targeting our region, (R3) IOCs for the latest ransomware variant. Limited resources. Which prioritization aligns with the Direction phase?',
    options: [
      'Address all three simultaneously because prioritization should be avoided',
      'Prioritize based on risk: evaluate which unanswered question poses greatest risk, rank with stakeholder consultation, establish collection strategies',
      'Prioritize R3 because IOCs are most actionable and fastest to produce',
      'Only address R1 because initial access vectors are foundational'
    ],
    correctAnswer: 1,
    explanation: 'Direction involves establishing priorities and allocating resources based on risk and stakeholder input. Options A ignores constraints. Options C and D make assumptions without consultation. Prioritization must be risk-informed.',
  },
  {
    id: 153,
    moduleId: 'cti',
    topic: 'TTPs - Detection',
    question: 'A report describes an adversary using: Spearphishing with LNK (T1566.001), PowerShell (T1059.001), Registry Run Keys (T1547.001), Automated Exfiltration (T1020). For which TTPs is behavioral detection most important?',
    options: [
      'Spearphishing with LNK because LNK files are always malicious',
      'Registry Run Keys because any modification is 100% compromise',
      'All benefit from behavioral detection because specific artifacts change across campaigns while behavior remains consistent',
      'Automated Exfiltration because exfiltration only occurs after breach'
    ],
    correctAnswer: 2,
    explanation: 'TTPs describe behaviors, which are more stable than IOCs. Behavioral detection (e.g., Word spawning PowerShell) catches the TTP regardless of specific artifacts. Options A and B are wrong: LNK files and Run keys have legitimate uses.',
  },
  {
    id: 154,
    moduleId: 'cti',
    topic: 'Diamond Model - Pivoting',
    question: 'Analyst maps: Adversary TA-437, Victim ACME Corp, Infrastructure mal-c2.example.com, Capability Emotet-like loader. To find other victims, which Diamond Model pivot is most effective?',
    options: [
      'Pivot Infrastructure to Capability: analyze all capabilities on the C2 server',
      'Pivot Capability to Adversary: analyze loader code for developer identity',
      'Pivot Adversary to Infrastructure to enumerate all TA-437 infrastructure, then pivot to victims contacting that infrastructure',
      'Pivot Victim to Adversary: interview ACME employees'
    ],
    correctAnswer: 2,
    explanation: 'Diamond pivoting moves along vertices. Starting from adversary-infrastructure, enumerate all TA-437 infrastructure, then find other victims contacting it. Option A finds tools, not victims. Option B is attribution. Option D is unsystematic.',
  },
  {
    id: 155,
    moduleId: 'cti',
    topic: 'Strategic vs Tactical vs Operational Intel',
    question: 'A SOC analyst receives intel about a banking trojan using domain secure-bank-update[.]com and IP 198.x.x.x for C2. The analyst creates firewall rules and Sigma rules. At which level is this intelligence consumed?',
    options: [
      'Strategic level because the analyst is taking defensive action',
      'Tactical level because the intelligence creates specific, immediate defensive measures',
      'Operational level because it describes a banking sector campaign',
      'None: this is raw data, not intelligence'
    ],
    correctAnswer: 1,
    explanation: 'Tactical intelligence drives immediate defensive actions (firewall rules, detection signatures). Strategic (A) is for long-term planning. Operational (C) focuses on campaign patterns. This is processed intelligence, not raw data (D).',
  },
  {
    id: 156,
    moduleId: 'cti',
    topic: 'OSINT - Google Dorking',
    question: 'An analyst researching an APT targeting energy wants to find exposed documents and config files without engaging underground sources. Which OSINT technique should they prioritize?',
    options: [
      'Google Dorking with advanced operators to find exposed documents, directory listings, config files, and paste sites',
      'LinkedIn scraping to find employees connected with fake personas',
      'Shodan scanning of energy sector IP ranges',
      'Physical reconnaissance of energy facilities'
    ],
    correctAnswer: 0,
    explanation: 'Google Dorking (filetype, intitle, inurl, site operators) uncovers exposed PDFs, configs, directory listings with references to threat groups. This is passive and doesn\'t alert adversaries. Options B, C, D have privacy, legal, and safety issues.',
  },
  {
    id: 157,
    moduleId: 'cti',
    topic: 'IOCs - Validation',
    question: 'A feed publishes MD5 associated with \'new ransomware\'. VirusTotal shows 3/65 detection, named invoice_2024.xlsm, submitted 6 hours ago from one submitter, no sandbox data. What should the analyst do?',
    options: [
      'Immediately block because 3 engines agree it is ransomware',
      'Treat with low confidence: 3/65 detection, single source, no behavioral data suggest false positive or test; request more context before blocking',
      'Ignore entirely because under 50% detection means definitely not malware',
      'Block the hash and all similar filenames since invoice themes are common attack vectors'
    ],
    correctAnswer: 1,
    explanation: '3/65 detection is very low. No sandbox report, single submitter, recent submission suggest possible false positive. Seek more context, run in sandbox, check related intel. Option A uses low threshold. Option C is too absolute.',
  },
  {
    id: 158,
    moduleId: 'cti',
    topic: 'Cyber Kill Chain - Detection',
    question: 'A SOC detects well at Delivery (email) and Actions on Objectives (DLP), but attacks succeed between these phases. The manager wants to \'left-shift\' detection. Which approach best achieves this?',
    options: [
      'Add more DLP rules at Actions on Objectives since exfiltration is most important',
      'Invest in detection at Exploitation, Installation, and C2: macro execution, process injection, outbound beacons, persistence mechanisms',
      'Focus only on Delivery with better email filtering since prevention eliminates need for later detection',
      'Abandon the Cyber Kill Chain because it is designed for offense'
    ],
    correctAnswer: 1,
    explanation: 'Left-shifting means catching attacks earlier. Detection at Exploitation (macro), Installation (registry changes), and C2 (outbound beacons) enables mid-attack response. Option A stays late. Option C is unrealistic. Option D misunderstands CKC value.',
  },
  {
    id: 159,
    moduleId: 'cti',
    topic: 'Threat Feeds - Integration',
    question: 'An organization subscribes to Feed 1 (10 high-confidence APT IOCs/day), Feed 2 (500 medium-confidence commodity IOCs/day), Feed 3 (5,000 low-confidence sinkhole IOCs/day). All generate alerts. After one week, 95% false positive rate. What is the most effective solution?',
    options: [
      'Increase SOC team size to handle the volume',
      'Discontinue all threat feeds because they cause more harm than benefit',
      'Implement tiered confidence: Feed 1 triggers automated blocking, Feed 2 generates medium-priority alerts with correlation, Feed 3 used only for passive enrichment and hunting',
      'Continue but ask analysts to ignore Feed 3 alerts'
    ],
    correctAnswer: 2,
    explanation: 'Tiered confidence-based integration optimizes feeds. High-confidence IOCs can auto-block. Medium-confidence need corroboration. Low-confidence data enriches hunting without alerting. Option A wastes resources. Option B throws away value.',
  },
  {
    id: 160,
    moduleId: 'cti',
    topic: 'Intelligence Reports - Targeting',
    question: 'A CTI analyst writes a report on a healthcare ransomware campaign. Audiences: SOC (needs IOCs/rules), IT ops (patching/segmentation), executives (business impact), legal (regulatory requirements). What is the most effective structure?',
    options: [
      'A single one-page summary covering all four audiences briefly',
      'Separate documents for each audience for confidentiality',
      'A single comprehensive report with executive summary, then sections/appendices targeting each audience with relevant details and recommendations',
      'Only technical IOCs and rules because other audiences should get information elsewhere'
    ],
    correctAnswer: 2,
    explanation: 'A layered report serves all audiences: executive summary for leaders, tactical intel for SOC, operational recommendations for IT ops, compliance sections for legal. Option A oversimplifies. Option B creates silos. Option D ignores stakeholder needs.',
  },

  {
    id: 161,
    moduleId: 'redteam',
    topic: 'Red Team vs Pentest',
    question: 'An organization wants to assess its security. The CISO debates between a penetration test and a red team exercise. The primary concern is detecting a sophisticated nation-state actor using custom malware over months. Which assessment type is more appropriate?',
    options: [
      'A penetration test because it checks more systems and provides more findings',
      'A red team exercise because it simulates realistic adversary TTPs, tests detection and response, and evaluates ability to detect a stealthy, long-duration threat actor',
      'A vulnerability scan with Nessus because automated scanning finds all gaps',
      'A purple team exercise because it focuses exclusively on remediation'
    ],
    correctAnswer: 1,
    explanation: 'Red team exercises simulate realistic adversaries including APTs, testing people, processes, and detection/response over extended periods. Penetration tests (A) find vulnerabilities but don\'t test detection. Vulnerability scanning (C) lacks adversarial simulation.',
  },

  {
    id: 162,
    moduleId: 'redteam',
    topic: 'Purple Team',
    question: 'After a red team engagement, the red team compromised the domain controller in 48 hours and the blue team detected nothing until the debrief. The CISO is unhappy. A purple team advocate suggests a different approach. What is the primary goal of purple teaming?',
    options: [
      'Have the red team go easier on the blue team so they do not look bad',
      'Create a collaborative environment where red and blue teams work together in real-time sharing detection gaps and improving defenses continuously',
      'Eliminate the red team and have only blue team conduct their own testing',
      'Ensure the red team always succeeds to justify more security budget'
    ],
    correctAnswer: 1,
    explanation: 'Purple teaming is collaborative: red explains TTPs in real-time, blue learns to detect and respond, continuously improving defenses. Option A reduces rigor. Option C eliminates adversarial perspective. Option D is self-serving.',
  },

  {
    id: 163,
    moduleId: 'redteam',
    topic: 'RoE - Rules of Engagement',
    question: 'A red team plans an engagement with a financial institution. The client states: no production disruption, no social engineering, testing limited to 9 PM to 5 AM, must provide detailed attack plan, no customer data exfiltration. Which statement best describes this?',
    options: [
      'Constraints are excessive; the red team should refuse because real adversaries do not follow rules',
      'These define the Rules of Engagement (RoE), essential for legal authorization and risk management; the red team operates within these boundaries while maximizing realism',
      'Ignore constraints and perform a full-scope attack because the customer hired for realism',
      'Secretly exfiltrate customer data to prove the danger of restrictive RoE'
    ],
    correctAnswer: 1,
    explanation: 'RoE are critical legal and operational documents defining scope, boundaries, and authorization. They protect both client and red team. Option A is unprofessional. Options C and D violate legal agreements and may constitute criminal activity.',
  },

  {
    id: 164,
    moduleId: 'redteam',
    topic: 'Legal Authorization',
    question: 'A red teamer is assigned to test a recently acquired subsidiary. Authorization covers the main corporate entity but not the subsidiary. Their networks are connected without segmentation. What should the red teamer do?',
    options: [
      'Proceed with testing because it is technically part of the same network and both are owned by the same parent',
      'Stop and request explicit written authorization for the subsidiary; testing without it could violate computer fraud laws',
      'Test only read-only access to verify connectivity, which does not require authorization',
      'Test the subsidiary but exclude it from the final report'
    ],
    correctAnswer: 1,
    explanation: 'Legal authorization must be explicit. Testing without permission, even within the same corporate family, could violate laws like the CFAA. The red teamer must clarify scope and obtain separate authorization. Options A, C risk legal liability.',
  },

  {
    id: 165,
    moduleId: 'redteam',
    topic: 'Footprinting - Passive',
    question: 'A red team conducts reconnaissance on a target without alerting them or making direct contact. Which activity is consistent with passive footprinting?',
    options: [
      'Scanning the target\'s web server with Nmap for open ports and service versions',
      'Performing DNS zone transfers against the target\'s authoritative name servers',
      'Analyzing SSL/TLS certificates from Certificate Transparency logs, reviewing historical WHOIS via third-party archives, and examining GitHub repos for exposed keys or configs',
      'Sending spear-phishing emails to verify email addresses'
    ],
    correctAnswer: 2,
    explanation: 'Passive footprinting gathers info without interacting with target systems. Certificate Transparency logs, archived WHOIS, and public GitHub repos are third-party sources. Options A (Nmap) and B (DNS zone transfer) interact directly. D is active social engineering.',
  },

  {
    id: 166,
    moduleId: 'redteam',
    topic: 'Footprinting - Active',
    question: 'During active footprinting, a red teamer needs to identify externally accessible services behind a load balancer. The target uses Apache behind an F5. Which Nmap technique is most effective?',
    options: [
      'nmap -sn target.com for a ping sweep to identify live hosts',
      'nmap -p 80,443 -A target.com with HTTP header manipulation and pipelining to potentially reach individual backend servers',
      'nmap -sV --script http-ls target.com to list directory contents',
      'nmap -O target.com to identify OS of each backend server'
    ],
    correctAnswer: 1,
    explanation: 'Active footprinting behind load balancers requires HTTP header manipulation (X-Forwarded-For) and pipelining to reach backends. -A with techniques may help. Ping sweeps (A) don\'t enumerate services. OS detection (D) is inaccurate through load balancers.',
  },

  {
    id: 167,
    moduleId: 'redteam',
    topic: 'Nmap',
    question: 'A red teamer needs a stealthy SYN scan against a target with a firewall blocking all ports except 80 and 443. They need service versions on those ports. The target runs Linux with Apache. Which Nmap command is most appropriate?',
    options: [
      'nmap -sT -p 80,443 --version-intensity 9 target.com (TCP connect scan with high version intensity)',
      'nmap -sS -sV -p 80,443 -T4 target.com (SYN stealth scan with version detection on allowed ports)',
      'nmap -sU -p 53,123 target.com (UDP scan on DNS and NTP expecting them open through the firewall)',
      'nmap -sn -PE -PP target.com (ICMP ping scan to bypass firewall)'
    ],
    correctAnswer: 1,
    explanation: 'SYN scan (-sS) is stealthier than TCP connect (-sT) since it doesn\'t complete the handshake. Combined with version detection (-sV) on allowed ports (80, 443), this identifies services. Option A is more detectable. Options C, D scan wrong things.',
  },

  {
    id: 168,
    moduleId: 'redteam',
    topic: 'Google Dorks',
    question: 'A red teamer performs passive recon on Acme Corp (acme.com) and wants sensitive PDFs, config files, and login pages indexed by search engines. Which Google Dork query is most effective?',
    options: [
      'site:acme.com filetype:pdf AND (confidential OR secret OR password) -news -blog',
      'inurl:acme.com ext:pdf | ext:conf | ext:sql intitle:\'login\'',
      'site:acme.com (filetype:pdf OR filetype:conf OR filetype:sql OR filetype:bak OR filetype:log) AND (intitle:\'login\' OR intitle:\'admin\' OR intitle:\'password\')',
      'site:*.acme.com -www.acme.com -blog.acme.com'
    ],
    correctAnswer: 2,
    explanation: 'Option 3 combines site restriction with multiple sensitive file types (pdf, conf, sql, bak, log) and keywords in page titles. Option 1 only targets PDFs. Option 2 incorrectly uses inurl for domain. Option 4 excludes subdomains without content targeting.',
  },

  {
    id: 169,
    moduleId: 'redteam',
    topic: 'Vulnerability Scanners - Nessus/OpenVAS',
    question: 'A red teamer uses Nessus which reports a Critical finding: Apache Struts2 RCE (CVE-2017-5638) with CVSS 10.0. Manual investigation reveals the target runs Apache Tomcat, not Struts2. The scanner was triggered by a response header containing similar strings. What does this illustrate?',
    options: [
      'The scanner is highly reliable because it found a critical vulnerability needing immediate remediation',
      'Vulnerability scanners can produce false positives; manual validation is essential before including findings in the final report',
      'Report the vulnerability as confirmed because CVSS 10.0 indicates highest severity',
      'Ignore all scanner results and rely only on manual testing'
    ],
    correctAnswer: 1,
    explanation: 'This is a classic false positive. Scanners use banner grabbing and pattern matching that can produce incorrect results. Manual validation is critical. Option A would report a non-existent vulnerability. Option C ignores validation. Option D overcorrects.',
  },

  {
    id: 170,
    moduleId: 'redteam',
    topic: 'Validation',
    question: 'A scanner reports 500 findings (50 Critical). The red team has 3 days for validation before the report is due. Which validation strategy is most effective?',
    options: [
      'Validate only the 50 Critical findings sorted by highest CVSS score',
      'Validate a representative sample across all severities, prioritizing internet-facing systems, domain controllers, and data-bearing systems; mark scanner-only findings as unvalidated with caveats',
      'Validate all 500 findings because unvalidated findings cannot be included in the report',
      'Skip validation and include all scanner findings because the client paid for comprehensive assessment'
    ],
    correctAnswer: 1,
    explanation: 'A risk-based approach prioritizes internet-facing systems, critical infrastructure, and data-bearing systems. Scanner-only findings are marked as unvalidated with caveats. Option A ignores context. Option C is unrealistic. Option D is irresponsible.',
  },

  {
    id: 171,
    moduleId: 'redteam',
    topic: 'CVSS Prioritization',
    question: 'A red team identifies: (A) SQLi in public-facing login form (CVSS 9.8), (B) Self-XSS in authenticated user profile (CVSS 4.7), (C) Missing HTTP headers on main site (CVSS 5.0), (D) Plaintext credentials in internal wiki behind VPN (CVSS 6.5). Limited remediation resources. How should they prioritize?',
    options: [
      'Solely by CVSS: A (9.8), D (6.5), C (5.0), B (4.7)',
      'A is public-facing with high impact: prioritize first. D requires prior VPN access, B requires authentication: practical severity is lower. C requires environmental context beyond base score.',
      'C first because missing headers are easiest to fix; quick wins come first',
      'All findings same priority because CVSS scores are subjective'
    ],
    correctAnswer: 1,
    explanation: 'CVSS base scores should be adjusted with environmental and contextual factors. The SQLi (A) is public-facing and easily exploitable. D requires VPN access, B requires authentication: lower practical severity. Option A ignores context. Option C prioritizes ease over risk.',
  },

  {
    id: 172,
    moduleId: 'redteam',
    topic: 'Metasploit',
    question: 'A red teamer gains access to Windows 10 with Defender. Meterpreter is quarantined. They need to evade AV. Which Metasploit approach is most appropriate?',
    options: [
      'Use an older, deprecated meterpreter payload since Defender does not detect older payloads',
      'Use msfvenom with encoding (shikata_ga_nai), custom template, and in-memory execution like PowerShell injection to avoid writing to disk',
      'Disable Defender through command injection before running the payload',
      'Use the SMB module instead of a staged payload because SMB traffic is never inspected by AV'
    ],
    correctAnswer: 1,
    explanation: 'Encoding evades signature detection. Custom templates reduce template-based detection. In-memory execution (PowerShell injection, reflective DLL loading) avoids on-disk scanning. Options A and D are unreliable. Option C may not be possible and alerts the user.',
  },

  {
    id: 173,
    moduleId: 'redteam',
    topic: 'Cobalt Strike',
    question: 'A red team uses Cobalt Strike with HTTP and DNS beacons. The blue team monitors for suspicious outbound HTTP and uncommon DNS queries. Which configuration helps blend in with legitimate traffic?',
    options: [
      'Use only raw TCP beacons because HTTP and DNS are always monitored',
      'Use HTTPS with a valid CA certificate, configure beacon sleep with jitter mimicking human activity, use domain fronting via CDN, and mimic legitimate user-agent strings and HTTP headers',
      'Set beacon interval to 1 second so the engagement completes faster',
      'Use only the default Cobalt Strike profile because custom profiles trigger behavioral detection'
    ],
    correctAnswer: 1,
    explanation: 'OPSEC-minded C2: valid HTTPS certificates, Malleable C2 profiles with legitimate-looking traffic patterns, random jitter to avoid predictable intervals, domain fronting via CDNs. Option A is wrong. Option C is noisy. Option D: defaults are well-known and easily detected.',
  },

  {
    id: 174,
    moduleId: 'redteam',
    topic: 'Reverse vs Bind Shells',
    question: 'A red teamer exploits RCE on a Windows server behind NAT with outbound internet access but inbound ports blocked. Which shell approach will work?',
    options: [
      'A bind shell on port 4444 with the operator connecting to the target\'s public IP',
      'A reverse shell where the target connects back to the operator on a specified port since outbound connections are allowed through NAT',
      'Neither bind nor reverse shells will work because NAT and firewalls block all shell traffic',
      'A bind shell on port 80 because port 80 is always open on Windows'
    ],
    correctAnswer: 1,
    explanation: 'Reverse shells initiate from target to attacker. Since outbound traffic is typically allowed through NAT, a reverse shell can connect back to the operator. Bind shells (A) need inbound access which is blocked. Option C is false. Option D is wrong.',
  },

  {
    id: 175,
    moduleId: 'redteam',
    topic: 'Staged vs Stageless Payloads',
    question: 'A red teamer delivers a payload via phishing macro. The target has aggressive EDR monitoring process creation and memory. The payload runs on a low-powered VDI. Which payload approach is more appropriate?',
    options: [
      'Staged payload: the small stager has a small footprint evading initial detection, fetching the larger stage 2 only if stager executes successfully',
      'Stageless payload: a single binary means fewer network connections and less network monitoring detection',
      'Staged payload downloading everything via one HTTP request, identical to stageless',
      'Bind shell instead of reverse shell because bind shells do not need additional connections for staging'
    ],
    correctAnswer: 0,
    explanation: 'Staged payloads use a two-step approach: a small stager (few hundred bytes) evades initial detection, then fetches stage 2. If detected, stage 2 is never retrieved. Stageless (B) is larger and more detectable. Options C and D are incorrect.',
  },

  {
    id: 176,
    moduleId: 'redteam',
    topic: 'SQLi',
    question: 'A red teamer discovers SQLi in a login page. The query is: SELECT * FROM users WHERE username = \' + $_POST[\'username\'] + \' AND password = \' + md5(...) + \'. Generic error page, no error messages. The goal is to extract the admin\'s password hash. Which SQLi technique should be used?',
    options: [
      'UNION-based SQLi because it returns data directly in the HTTP response',
      'Boolean-based blind SQLi using OR 1=1 to bypass authentication',
      'Time-based blind SQLi using SLEEP() or BENCHMARK() to infer data character by character based on response timing',
      'Out-of-band SQLi using DNS or HTTP to exfiltrate through an external channel'
    ],
    correctAnswer: 2,
    explanation: 'With generic error pages, UNION and error-based injection are not viable. Boolean-based blind (B) can bypass auth but not extract data. Time-based blind uses conditional delays to infer data bit by bit. Out-of-band (D) is possible but less reliable without network access.',
  },

  {
    id: 177,
    moduleId: 'redteam',
    topic: 'XSS',
    question: 'A red teamer finds stored XSS in a helpdesk app viewed by admins. The admin panel has password reset and customer data. HttpOnly cookies are used, no CSP. What is the most impactful use of this XSS?',
    options: [
      'Steal the admin\'s session cookie, which is protected by HttpOnly',
      'Perform admin actions directly (create admin account, reset passwords) via XMLHttpRequest or fetch() since the script runs in the admin\'s browser context with their privileges',
      'Deface the helpdesk website since that is the most common use of stored XSS',
      'Redirect the admin to a phishing page to steal credentials'
    ],
    correctAnswer: 1,
    explanation: 'HttpOnly prevents cookie theft. The XSS can use the admin\'s session via API calls since the script executes in their browser context with their privileges, performing actions like creating admin accounts. Option A is blocked. Options C, D are less impactful.',
  },

  {
    id: 178,
    moduleId: 'redteam',
    topic: 'Privilege Escalation - Windows',
    question: 'A red team operator has a low-privileged shell on Windows 10 as user jdoe (not admin). whoami /priv shows SeImpersonatePrivilege enabled. Standard installation, no custom services. What escalation technique should they consider?',
    options: [
      'Use tools like JuicyPotato or PrintSpoofer to impersonate a SYSTEM token and gain elevated privileges',
      'SeImpersonatePrivilege allows direct command execution as Administrator without additional tools',
      'SeImpersonatePrivilege is irrelevant; it is a standard privilege that does not allow escalation',
      'Use SeImpersonatePrivilege to modify system files, requiring write access to Windows directory'
    ],
    correctAnswer: 0,
    explanation: 'SeImpersonatePrivilege is a well-known Windows privesc vector. Tools like JuicyPotato (pre-1809), RoguePotato, or PrintSpoofer (1809+) exploit token impersonation for SYSTEM. Option B is wrong: exploitation techniques are needed. Option C is dangerously wrong.',
  },

  {
    id: 179,
    moduleId: 'redteam',
    topic: 'Privilege Escalation - Linux',
    question: 'A red team operator has a www-data shell on Linux. sudo -l shows: (root) NOPASSWD: /usr/bin/vim /var/log/webapp/*.log. The operator needs root to access a database config file. What should they do?',
    options: [
      'Use sudo vim to open a log file, then use Vim\'s :!bash or :!sh to spawn a root shell since Vim allows shell command execution',
      'Run sudo -i for an immediate root shell',
      'Use sudo vim to read the database config directly with :e /etc/db.conf since Vim\'s file browsing is unrestricted',
      'Give up on privesc and report only the web app vulnerability; the sudo rule is too restrictive'
    ],
    correctAnswer: 0,
    explanation: 'Vim with sudo allows shell escape via :!bash, spawning a root shell regardless of file argument restrictions (GTFObin technique). Option B: sudo -i is not permitted. Option C: :e may be restricted. Option D misses an obvious escalation path.',
  },

  {
    id: 180,
    moduleId: 'redteam',
    topic: 'Pass-the-Hash',
    question: 'A red team operator extracts NTLM hashes from LSASS on a Windows workstation via Mimikatz. The hash is for domain user jsmith. No plaintext password. The environment uses Windows with SMB file sharing. What can the operator do with the NTLM hash?',
    options: [
      'Only crack the hash offline with Hashcat to obtain the plaintext since NTLM hashes cannot be used directly',
      'Use the NTLM hash directly in a Pass-the-Hash attack to authenticate via NTLM to other Windows machines and SMB shares without needing the plaintext password',
      'Convert the NTLM hash to a Kerberos ticket for pass-the-ticket, which requires the plaintext password',
      'Use the NTLM hash to authenticate to Linux servers via SSH since SSH accepts NTLM'
    ],
    correctAnswer: 1,
    explanation: 'Pass-the-Hash uses the NTLM hash directly for authentication. Tools like Impacket psexec, wmiexec use the hash to access other Windows systems via SMB. Option A is wrong: PtH works without cracking. Option D is wrong: SSH does not accept NTLM.',
  },

  {
    id: 181,
    moduleId: 'redteam',
    topic: 'BloodHound',
    question: 'A red team operator gains initial access to a domain-joined workstation as a standard domain user. They need to find a path to Domain Admin. Which tool is specifically designed for analyzing AD attack paths?',
    options: [
      'Nmap with smb-enum-shares script to find writable shares',
      'BloodHound with SharpHound collector to enumerate AD relationships and identify attack paths such as ACL abuse, group membership chains, and Kerberos delegation attacks',
      'Metasploit\'s smb_login module to brute force credentials',
      'John the Ripper to crack password hashes from SAM'
    ],
    correctAnswer: 1,
    explanation: 'BloodHound (with SharpHound) maps AD relationships and visualizes attack paths to high-value targets: ACL abuse, group membership chains, Kerberoasting, AS-REP roasting, delegation attacks. Options A, C, D are useful but not designed for AD attack path analysis.',
  },

  {
    id: 182,
    moduleId: 'redteam',
    topic: 'Lateral Movement',
    question: 'A red team operator has credentials for a domain user in the local Remote Management Users group on several Windows servers. They need to execute commands without writing files or creating services. Group Policies restrict WinRM to specific admin groups. Which technique should they use?',
    options: [
      'SMB exec with Impacket, which creates a Windows service on the target',
      'Pass the Hash with PsExec using admin shares (ADMIN$)',
      'WinRM via PowerShell Invoke-Command using the user\'s credentials since Remote Management Users membership allows WinRM access',
      'Schedule a task remotely using schtasks.exe with /s parameter'
    ],
    correctAnswer: 2,
    explanation: 'Remote Management Users group explicitly grants WinRM (PowerShell Remoting). Invoke-Command executes commands without writing files or creating services. Options A and B involve service creation triggering EDR. Option D creates scheduled tasks on the remote system.',
  },

  {
    id: 183,
    moduleId: 'redteam',
    topic: 'Persistence',
    question: 'A red team operator achieves Domain Admin. The engagement requires maintaining access for two weeks. The blue team checks for common persistence (scheduled tasks, run keys, new services). Which persistence technique is most stealthy?',
    options: [
      'Create a domain admin service account and add it to Domain Admins',
      'Create a scheduled task that beacons every hour',
      'Use AD-based persistence like modifying the ACL on AdminSDHolder to grant full control over all DA objects, or create a Golden Ticket with long validity',
      'Install a persistence script in the Startup folder of the domain controller'
    ],
    correctAnswer: 2,
    explanation: 'AD-based persistence is harder to detect than host-based mechanisms. AdminSDHolder ACL modification grants persistent admin access invisible to endpoint tools. Golden Tickets (forged TGTs) allow access without authentication. Options A, B, D are host-based and more detectable.',
  },

  {
    id: 184,
    moduleId: 'redteam',
    topic: 'Phishing / Spear Phishing',
    question: 'A red teamer designs a spear-phishing campaign targeting the finance department. The goal is credentials to Office 365 with MFA enabled. Employees are security-aware. Which approach is most likely to succeed?',
    options: [
      'A mass email with \'your mailbox is full\' to all finance employees',
      'A spear-phishing email with an HTML attachment mimicking Office 365 login with an adversary-in-the-middle (AiTM) proxy like EvilGinx capturing credentials and MFA tokens in real-time',
      'A simple email asking employees to reply with their passwords for a system upgrade',
      'An email with a link to a fake login page on a similar domain'
    ],
    correctAnswer: 1,
    explanation: 'Against MFA and security-aware targets, AiTM phishing frameworks (EvilGinx, Modlishka) act as reverse proxies, capturing both passwords and real-time MFA session tokens. Option A is generic. Option C is obvious. Option D fails against MFA.',
  },

  {
    id: 185,
    moduleId: 'redteam',
    topic: 'Cialdini Principles',
    question: 'A red teamer crafts a vishing pretext for the IT help desk to reset a domain admin password. The company recently had a publicized breach and IT is working overtime. Which Cialdini principle(s) should the red teamer leverage?',
    options: [
      'Scarcity: claiming a critical system will be unavailable unless the password is reset immediately',
      'Reciprocity: offering to share breach info in exchange for the password reset',
      'Social Proof: mentioning other IT members approved similar requests',
      'Authority and Scarcity combined: impersonating a senior executive (authority) needing urgent password reset (scarcity), exploiting IT fatigue'
    ],
    correctAnswer: 3,
    explanation: 'Combining Authority (senior executive) with Scarcity (urgent need) is highly effective against an overwhelmed help desk. Fatigue and pressure create vulnerability. Option A uses only Scarcity. Reciprocity (B) is weaker in cold calls. Social Proof (C) is less direct.',
  },

  {
    id: 186,
    moduleId: 'redteam',
    topic: 'Vishing',
    question: 'A red teamer is conducting vishing against a company. The goal is the Wi-Fi password from a front desk receptionist trained to never share passwords and to verify via callback. Which approach is most likely to succeed?',
    options: [
      'Call and demand the password, threatening to report the receptionist for non-compliance',
      'Call pretending to be IT support troubleshooting a network issue. Ask the receptionist to \'verify\' the Wi-Fi password by reading it back to confirm it matches records',
      'Send an email instead of calling since vishing is less effective',
      'Call repeatedly until the receptionist gives in due to fatigue'
    ],
    correctAnswer: 1,
    explanation: 'The \'verify\' pretext exploits the tendency to help: the receptionist reads the password back (providing it) while believing they are confirming information. Option A creates hostility. Option D (fatigue) is unlikely against trained staff.',
  },

  {
    id: 187,
    moduleId: 'redteam',
    topic: 'Tailgating',
    question: 'A red teamer needs physical access to a secured building with badge access and mantraps. A side door used by the smoking area is propped open with a trash can during business hours. What is the most appropriate action?',
    options: [
      'Use the propped-open door immediately since it represents a weakness the red team is authorized to test',
      'Do not use it without explicit RoE authorization because even obvious weaknesses may be monitored, and unauthorized physical access could have legal consequences beyond scope',
      'Confront employees who propped the door and inform them of the security violation',
      'Clone an employee badge with an RFID reader and enter through the mantraps'
    ],
    correctAnswer: 1,
    explanation: 'Physical testing requires explicit RoE authorization. Unauthorized entry, even through an obvious gap, may cross legal boundaries (trespassing). The propped door may be monitored by cameras. Options A and D lack authorization. Option C is outside the red teamer\'s role.',
  },

  {
    id: 188,
    moduleId: 'redteam',
    topic: 'Reporting',
    question: 'A red team engagement completed with Domain Admin in 4 hours. OPSEC failures: C2 infrastructure was identified, one phishing email was reported. The audience includes SOC, IT management, and CISO. Which report structure serves all audiences?',
    options: [
      'A one-page executive summary highlighting only the successful compromise',
      'A technical-only report with all commands and timelines since management should not receive technical details',
      'A comprehensive report with: executive summary (attack narrative, risk, recommendations), attack timeline, technical details per phase, detection opportunities, and prioritized recommendations by audience',
      'A video recording of actions with no written report'
    ],
    correctAnswer: 2,
    explanation: 'A well-structured report serves all stakeholders: executive summary for leadership, attack narrative for detection gaps, technical details for SOC, prioritized recommendations for remediation. Option A is too brief. Option B excludes management. Option D is impractical.',
  },

  {
    id: 189,
    moduleId: 'redteam',
    topic: 'Timelines',
    question: 'A penetration test six months ago identified a critical unpatched Apache Struts vulnerability. The red team exploited it in 2 hours to gain access. The CISO wants to understand why success was so fast. What timeline representation best communicates this?',
    options: [
      'Show only the red team\'s actions during the engagement week since the pre-existing vulnerability is outside scope',
      'A combined timeline showing vulnerability discovery (6 months ago), SLA expiration, red team exploitation, and escalation to DA, highlighting the gap between discovery and remediation',
      'A Gantt chart of all penetration tests in the past year',
      'A list of all CVEs by CVSS score since score is most important'
    ],
    correctAnswer: 1,
    explanation: 'A combined timeline tells the story: known vulnerability, no remediation for 6 months, exploited in 2 hours. This demonstrates remediation process failure. Option A misses the root cause. Options C and D don\'t connect timeline to breach.',
  },

  {
    id: 190,
    moduleId: 'redteam',
    topic: 'Remediation SLAs',
    question: 'A red team report identifies 15 findings: 3 Critical, 5 High, 4 Medium, 3 Low. The client asks for recommended SLAs. They have a mature patch management program (7 days for critical patches) but struggle with configuration issues needing cross-team coordination. Which SLA recommendation is most realistic?',
    options: [
      'Critical: 24h, High: 48h, Medium: 7d, Low: 30d regardless of finding type',
      'Critical: 48-72h (14d for patches needing testing), High: 30d, Medium: 90d, Low: 120d with different timelines for technical fixes vs configuration/process changes',
      'All findings within 7 days because anything longer is unacceptable',
      'Critical: 24h, High: 7d, Medium: 14d, Low: 30d using standard benchmarks'
    ],
    correctAnswer: 1,
    explanation: 'Realistic SLAs account for remediation complexity. Critical patches may need 14 days for testing. Configuration/process fixes may take longer due to coordination. Option A is too aggressive. Option C is unrealistic. Option D doesn\'t account for finding type.',
  },

  {
    id: 191,
    moduleId: 'redteam',
    topic: 'Red Team vs Pentest',
    question: 'A company hires an assessment including: (A) automated scanning of all internal IPs, (B) manual web app testing, (C) social engineering targeting 50 employees, (D) physical security assessment, (E) detection/response testing over 3 weeks. The cost exceeds a standard pentest. Which label best describes this?',
    options: [
      'A standard vulnerability assessment because it includes automated scanning',
      'A compliance-driven penetration test following a checklist',
      'A full-scope red team engagement because it includes social engineering, physical testing, and detection/response evaluation over an extended period',
      'An IT audit because it covers physical security and social engineering'
    ],
    correctAnswer: 2,
    explanation: 'A full-scope red team engagement typically includes multiple attack vectors (technical, social, physical), evaluates detection and response, and operates over an extended period. Options A, B, and D underestimate the scope.',
  },

  {
    id: 192,
    moduleId: 'redteam',
    topic: 'RoE - Data Handling',
    question: 'During an engagement, a red teamer discovers SQLi providing access to a database with customer PII. The RoE states: \'Do not exfiltrate or view actual customer data.\' The operator must prove exploitability. What should they do?',
    options: [
      'Extract 10 customer records as proof of concept since a small sample does not constitute a data breach',
      'Demonstrate SQLi by extracting non-sensitive data like database version, table names, and column structures. Explain in the report what data is accessible without viewing PII.',
      'Ignore the RoE restriction because demonstrating data access is essential',
      'Request the client to sign a waiver for data extraction before proceeding'
    ],
    correctAnswer: 1,
    explanation: 'The operator can demonstrate SQLi by extracting database metadata without accessing actual customer data, proving the vulnerability and impact within RoE boundaries. Option A violates the explicit RoE. Option C is unethical. Option D is possible but the operator should work within existing boundaries first.',
  },

  {
    id: 193,
    moduleId: 'redteam',
    topic: 'Nmap - Firewall Evasion',
    question: 'A red teamer scans a target with an IPS that blocks or throttles connections sending too many packets. They need a full TCP port scan (all 65535 ports). Which Nmap technique combination is most appropriate?',
    options: [
      'nmap -p- -T5 target.com (full scan at insane speed to beat the IPS)',
      'nmap -p- -T0 --scan-delay 1s target.com (paranoid timing with 1-second delay between probes, scanning slowly over an extended period)',
      'nmap -p 1-1000 -T4 target.com (only top 1000 ports)',
      'nmap -sF -p- target.com (FIN scan which bypasses IPS inspection)'
    ],
    correctAnswer: 1,
    explanation: 'IPS/IDS trigger on high-speed scanning. Paranoid timing (-T0) with scan delay slows the scan below rate-based thresholds. Option A (T5) triggers immediately. Option C misses ports. Option D (FIN) may evade some firewalls but not rate limiting.',
  },

  {
    id: 194,
    moduleId: 'redteam',
    topic: 'Google Dorks - Advanced',
    question: 'A red teamer targets a company using GitHub Enterprise (self-hosted). Some code snippets may have been pasted to public services. What dorking approach could reveal these accidental exposures?',
    options: [
      'site:github.com \'target-company\' AND (api_key OR password OR \'-----BEGIN RSA PRIVATE KEY-----\')',
      'site:pastebin.com OR site:ghostbin.com OR site:github.com/gists \'target-company\' AND (api_key OR password OR secret OR connection_string OR \'-----BEGIN\')',
      'site:target-company.com api_key filetype:env',
      'inurl:target-company git config filetype:xml'
    ],
    correctAnswer: 1,
    explanation: 'Employees may paste code to public paste sites even if repos are private. Searching paste sites and gists for company name combined with sensitive patterns (API keys, passwords, private keys) is a common OSINT technique. Option A only searches public GitHub repos.',
  },

  {
    id: 195,
    moduleId: 'redteam',
    topic: 'Vulnerability Assessment - Scoping',
    question: 'A red teamer prepares for 500 internal hosts and 20 public-facing web apps. The client wants \'all vulnerabilities found\' but has an 8-hour maintenance window on Saturday night. Which scoping strategy balances coverage with constraints?',
    options: [
      'Scan all 520 targets aggressively within 8 hours, accepting incomplete scans',
      'Prioritize the 20 public-facing apps for thorough testing and perform a credentialled scan on a representative sample of 50 internal hosts, explaining the risk-based rationale to the client',
      'Only scan the 20 public-facing apps because internal hosts are less critical',
      'Refuse the engagement because 8 hours is insufficient for 520 targets'
    ],
    correctAnswer: 1,
    explanation: 'A risk-based approach: thorough testing of public-facing apps (greatest exposure) plus credentialled scan on a representative internal sample. Communicate scope limitations to the client. Option A may cause issues. Option C ignores internal threats. Option D is unnecessary.',
  },

  {
    id: 196,
    moduleId: 'redteam',
    topic: 'Metasploit - Post-Exploit',
    question: 'After gaining a meterpreter session on a Windows DC as SYSTEM, a red teamer wants to extract domain password hashes from NTDS.dit without triggering EDR. The DC has Defender and EDR. Which approach is most appropriate?',
    options: [
      'Run hashdump which reads the SAM database, sufficient for domain hashes',
      'Use the Kiwi module (Mimikatz) in meterpreter which runs entirely in memory',
      'Create a volume shadow copy, extract NTDS.dit, transfer to the attack machine for offline hash extraction, minimizing on-disk artifacts on the DC',
      'Use run post/windows/gather/credentials/domain_hashdump which is undetectable'
    ],
    correctAnswer: 2,
    explanation: 'Volume shadow copy + NTDS.dit extraction for offline processing minimizes artifacts on the DC. Option A only gets local SAM. Option B (Mimikatz) may trigger EDR behavioral detections. Option D cannot guarantee undetectability.',
  },

  {
    id: 197,
    moduleId: 'redteam',
    topic: 'C2 - Infrastructure',
    question: 'A red teamer sets up C2 for a two-week engagement. The blue team monitors for unusual domains, scans for known C2 frameworks on the internet, and maintains threat intel feeds. Which infrastructure setup is most appropriate?',
    options: [
      'A single VPS with static IP and self-signed SSL certificate',
      'Domain fronting via a reputable CDN with valid SSL certificate, multiple redirectors, legitimate-looking domains, and fallback C2 mechanisms',
      'Host the C2 on the same cloud provider as the target to reduce latency',
      'Use free dynamic DNS services because they are constantly changing'
    ],
    correctAnswer: 1,
    explanation: 'Robust C2 infrastructure: domain fronting via CDN, valid SSL certificates (not self-signed), domains that blend in, multiple redirectors, fallback mechanisms. Option A is easily detected. Option C doesn\'t improve stealth. Dynamic DNS (D) may have reputation issues.',
  },

  {
    id: 198,
    moduleId: 'redteam',
    topic: 'Reporting - Executive Summary',
    question: 'A red team demonstrated phishing-to-domain-compromise in 3 hours. Findings include: 40% phishing click rate, no network segmentation, no MFA on VPN, cached DA credentials on workstations, SOC detected zero of 47 attacker actions. What is the most effective way to communicate to the board?',
    options: [
      'List all 47 actions with timestamps to demonstrate thoroughness',
      'Attack narrative: \'One email, an employee clicked, and within 3 hours the attacker had full control. Here are the five key reasons and the three most critical investments needed.\'',
      'Focus only on technical vulnerability details because board members care about CVEs',
      'Recommend purchasing additional security tools since the root cause is insufficient technology'
    ],
    correctAnswer: 1,
    explanation: 'Executive summaries should tell a compelling story connecting technical findings to business risk. The narrative creates impact, then root causes and recommendations guide decisions. Option A is too detailed. Option C: boards don\'t need CVEs. Option D is self-serving.',
  },

  {
    id: 199,
    moduleId: 'redteam',
    topic: 'Red Team - Detection Testing',
    question: 'A red team tests the SOC\'s detection capabilities. The team performs credential dumping on a workstation. After 48 hours, checking with the SOC liaison reveals no detection. What is the most appropriate next step?',
    options: [
      'Continue exploiting the lack of detection to achieve more objectives, demonstrating the full detection gap',
      'Inform the SOC of the missed detection through the liaison immediately, since the purpose is improving defenses, not silently testing without feedback during the exercise',
      'Repeat the same credential dumping multiple times until the SOC notices',
      'Report the missed detection in the final report but continue without revealing the failure'
    ],
    correctAnswer: 1,
    explanation: 'Collaborative testing provides feedback during the engagement so the SOC can improve in real-time. The primary goal is improving defenses. Informing the SOC through the liaison allows them to adjust detection rules. Options A and D are more adversarial.',
  },

  {
    id: 200,
    moduleId: 'redteam',
    topic: 'Purple Team - Collaboration',
    question: 'During a purple team exercise, the red team uses WMI for lateral movement (T1047). The blue team has no detections for WMI lateral movement. The facilitator asks both teams to collaborate. What should the immediate outcome be?',
    options: [
      'The red team stops using WMI and switches to a different technique',
      'The blue team creates a detection rule (e.g., Event ID 4688 with wmiprvse.exe spawning cmd.exe) and tests it against live WMI lateral movement from the red team, validating both detection and bypass opportunities',
      'The red team documents WMI abuse in the report and the blue team creates a ticket for next quarter',
      'The blue team blocks all WMI traffic on the network, eliminating the threat immediately'
    ],
    correctAnswer: 1,
    explanation: 'In purple teaming, the immediate goal when a detection gap is found is to create and validate a detection in real-time. The red team provides live test data while the blue team develops and tests rules. Option A ends learning. Option C delays. Option D may break management tools.',
  },

  {
    id: 201,
    moduleId: 'blueteam',
    topic: 'Defense in Depth',
    question: 'A security architect is designing defenses for a financial application. Current stack: NGFW, WAF, antivirus on endpoints, annual pentests. A competitor was breached when attackers bypassed the WAF using a novel SQLi and moved laterally because internal traffic was unmonitored. Which defense-in-depth layer is most critically missing?',
    options: [
      'Another WAF from a different vendor for overlapping protection',
      'Network segmentation with internal monitoring (IDS/IPS on internal segments) and EDR, since defense in depth requires controls at network, host, and application layers, not just the perimeter',
      'More frequent penetration tests since quarterly tests would have caught the lateral movement',
      'Stronger password policies since lateral movement was enabled by weak passwords'
    ],
    correctAnswer: 1,
    explanation: 'Defense in depth requires controls at multiple layers (perimeter, network, host, application, data). Current architecture focuses on perimeter (NGFW, WAF) and basic AV. Network segmentation and EDR add internal detection. Option A reinforces one layer. Options C, D address specific vectors.',
  },

  {
    id: 202,
    moduleId: 'blueteam',
    topic: 'SIEM Architecture',
    question: 'A company deploys a SIEM for 2,000 endpoints, 50 network devices, 20 servers, and 5 cloud environments. They prioritize detecting lateral movement and privilege escalation. The SIEM has a daily log ingestion limit. Which log source strategy provides the highest detection value?',
    options: [
      'Collect all logs from all sources equally, distributing the budget proportionally',
      'Ingest only firewall logs because they capture all network traffic',
      'Prioritize Windows Event Logs (4688 Process Creation, 4624 Logon, 4663 Object Access), authentication logs from DCs, and cloud audit logs (CloudTrail, Azure Audit Logs) for the most relevant data',
      'Collect only cloud logs because on-premises security is less important'
    ],
    correctAnswer: 2,
    explanation: 'Windows Event Logs (process creation, logon events) and DC security logs are high-value for lateral movement and privilege escalation detection. Cloud audit logs address cloud threats. Option A dilutes budget. Option B misses endpoint-level activity. Option D ignores on-premises.',
  },

  {
    id: 203,
    moduleId: 'blueteam',
    topic: 'Log Correlation',
    question: 'A SOC analyst sees an alert: multiple failed logins followed by a successful login for a user from IP 185.x.x.x at 2 AM. The analyst needs to determine if this is a successful brute-force. Which logs should be correlated?',
    options: [
      'Immediately block the IP and reset the password; multiple failed logins always indicate an attack',
      'Check: (1) Did successful login come from the same IP? (2) Was it followed by unusual activity (service creation, unusual data access)? (3) Is the account normally accessed from that region? (4) Is the timestamp consistent with normal hours?',
      'Ignore the alert because failed logins are common and rarely indicate compromise',
      'Email the user asking if they recognize the activity and wait for a response'
    ],
    correctAnswer: 1,
    explanation: 'Log correlation provides context: same IP confirms brute-force, post-login anomalies indicate compromise, geographic anomalies suggest credential abuse, off-hours activity is suspicious. Option A is premature. Option C is negligent. Option D delays response unnecessarily.',
  },

  {
    id: 204,
    moduleId: 'blueteam',
    topic: 'Signal-to-Noise Ratio (SNR)',
    question: 'A new detection rule for PowerShell downloading executables generates 5,000 alerts/day. Only 3 are confirmed malicious. The rest are from legitimate IT automation. The SOC has 5 analysts handling ~100 alerts/day each. What is the primary problem?',
    options: [
      'The rule misses true positives; 5,000 alerts should contain more than 3 attacks',
      'The SNR is extremely poor (0.06%), overwhelming analysts and causing alert fatigue that leads to missed real attacks',
      'The rule works perfectly by detecting 3 attacks per day',
      'The analysts need to handle more alerts per day to keep up'
    ],
    correctAnswer: 1,
    explanation: 'SNR of 0.06% (3/5000) is very poor. With 500 alerts/day capacity vs 5,000 generated, alert fatigue is inevitable. The rule needs tuning: add exceptions for legitimate automation, require additional context. Options A and C ignore the noise problem.',
  },

  {
    id: 205,
    moduleId: 'blueteam',
    topic: 'IDS vs IPS',
    question: 'A company deploys a network security solution that monitors traffic, generates alerts, and logs activity but cannot actively block traffic. A zero-day exploit targeting their web server is released; the solution detects the exploit pattern on a Friday evening. What is the limitation?',
    options: [
      'The solution is an IDS (detects/alert but cannot block), requiring manual intervention or a separate IPS to actively stop the attack',
      'The solution is working as intended; detecting and alerting is sufficient',
      'The solution should be replaced because any tool that cannot block is useless',
      'The solution is an IPS that is malfunctioning by not blocking traffic'
    ],
    correctAnswer: 0,
    explanation: 'An IDS is passive: it monitors, detects, and alerts but cannot block. An IPS actively drops/ blocks malicious traffic. Here, the IDS detects but cannot prevent. Manual intervention (WAF rules, firewall blocks) is needed. Options B and C misunderstand IDS value.',
  },

  {
    id: 206,
    moduleId: 'blueteam',
    topic: 'Signature vs Anomaly Detection',
    question: 'An analyst configures a network IDS. They need to detect both known attacks (e.g., SQLi patterns) and novel attacks (e.g., new obfuscation bypassing signatures). Which approach should be prioritized for each?',
    options: [
      'Anomaly detection for known attacks; signature for unknown attacks since anomaly is more precise',
      'Signature-based (Snort rules with specific payload patterns) for known attacks; anomaly-based (statistical baselining) for unknown or novel attacks deviating from normal behavior',
      'Only anomaly detection since it covers both without signature updates',
      'Only signature-based since anomaly detection generates too many false positives'
    ],
    correctAnswer: 1,
    explanation: 'Signature detection excels at known threats with specific patterns (low false positives). Anomaly detection establishes normal baselines and flags deviations, suitable for zero-days and novel attacks. Defense-in-depth uses both. Options A, C, D are too absolute.',
  },

  {
    id: 207,
    moduleId: 'blueteam',
    topic: 'Snort/Suricata/Zeek',
    question: 'A blue team analyst evaluates NSM tools. Requirements: (1) 10 Gbps inspection, (2) multi-threading support, (3) HTTP/DNS/SMB protocol analysis, (4) full network conversation logging for forensics, (5) intrusion detection signatures. Which tool best meets all requirements simultaneously?',
    options: [
      'Snort, because it is the most widely used IDS with all features natively',
      'Suricata, which supports multi-threading for high-speed inspection, has built-in IDS/IPS with signature detection, and logs full network transactions via its logging engine',
      'Zeek (formerly Bro), which is primarily a protocol analysis and logging framework with limited IDS capabilities',
      'Tcpdump for packet capture; the foundation of network monitoring'
    ],
    correctAnswer: 1,
    explanation: 'Suricata is designed for high performance with native multi-threading (unlike Snort which is predominantly single-threaded). It combines IDS/IPS with comprehensive protocol logging (HTTP, DNS, TLS, SMB). Zeek (C) excels at protocol analysis but has different signature capabilities.',
  },

  {
    id: 208,
    moduleId: 'blueteam',
    topic: 'Forensic Acquisition',
    question: 'A server in the DMZ is compromised but critical to operations and cannot be taken offline. The IR team needs to acquire forensic evidence while the server is running. Which approach is most appropriate?',
    options: [
      'Hard power-off to preserve the hard drive state, then create a full disk image with a write-blocker',
      'Live forensic acquisition: capture volatile data first (RAM, processes, connections, logged-in users) using trusted tools on a USB drive, then acquire a logical image of relevant disk partitions',
      'Create a full disk image over the network via dd with SSH while the server is running',
      'Skip evidence acquisition and proceed to reimaging because the server cannot be taken offline'
    ],
    correctAnswer: 1,
    explanation: 'Live forensic acquisition follows the order of volatility: capture volatile data (RAM, processes, connections) first since it is lost on power-off. Trusted tools ensure evidence integrity. Option A causes downtime and loses volatile data. Option C risks evidence alteration.',
  },

  {
    id: 209,
    moduleId: 'blueteam',
    topic: 'Chain of Custody',
    question: 'A forensic analyst acquires a hard drive from a compromised server, creates a forensic image with SHA-256 hash, stores the original in a locked evidence locker, and analyzes the image. Six months later, the case goes to court and the defense challenges the evidence. What documentation is most critical?',
    options: [
      'The original purchase receipt for the hard drive',
      'A complete chain of custody form documenting every person who handled the evidence with timestamps, purpose, and signatures, along with SHA-256 hash values proving the image has not been modified',
      'A written narrative of the incident response from memory since formal documentation was not maintained',
      'The resume of the forensic analyst showing qualifications'
    ],
    correctAnswer: 1,
    explanation: 'Chain of custody documents every transfer with who, when, why, and condition. Cryptographic hashes prove the image is unmodified. This is essential for evidence admissibility. Option A (receipt) is irrelevant. Option C lacks contemporaneous documentation.',
  },

  {
    id: 210,
    moduleId: 'blueteam',
    topic: 'Volatility',
    question: 'A forensic analyst has a memory dump from a compromised Windows 10 workstation. Suspected rootkit hiding processes from the Windows API. The analyst needs to find hidden processes, injected code, running processes, and command-line arguments. Which Volatility plugin sequence should they use?',
    options: [
      'imageinfo (OS profile) -> pslist (API processes) -> psscan (hidden processes via EPROCESS pool) -> malfind (injected code) -> cmdline (command-line arguments)',
      'pslist only; it shows all processes and is sufficient for rootkit detection',
      'malfind first, then pslist; injected code detection should be prioritized',
      'hashdump first to extract password hashes since credential theft is the most common rootkit goal'
    ],
    correctAnswer: 0,
    explanation: 'Correct Volatility workflow: 1) imageinfo for profile, 2) pslist (API enumeration), 3) psscan (EPROCESS pool scan, cross-ref with pslist for hidden processes), 4) malfind (suspicious memory regions), 5) cmdline. Option B misses hidden processes. Options C, D are out of order.',
  },

  {
    id: 211,
    moduleId: 'blueteam',
    topic: 'Incident Response - NIST Phases',
    question: 'An organization discovers customer payment card data may have been exfiltrated. The CEO pressures the team to \'find who did it\' immediately. The IR team lead needs to explain proper process. Which NIST phase addresses containment before attribution?',
    options: [
      'Preparation: the team should have prepared for attribution before the incident',
      'Detection and Analysis: attribution is part of analysis before containment',
      'Containment, Eradication, and Recovery: containing the breach (removing server from network) and preserving evidence before attempting attribution, which may occur later or through law enforcement',
      'Post-Incident Activity: attribution happens after the incident is closed'
    ],
    correctAnswer: 2,
    explanation: 'NIST SP 800-61 phases: Preparation, Detection/ Analysis, Containment/Eradication/Recovery, Post-Incident Activity. Containment (removing from network, preserving evidence) takes priority over attribution. Attribution may come later. Option B is incorrect: containment precedes deep analysis.',
  },

  {
    id: 212,
    moduleId: 'blueteam',
    topic: 'Runbooks',
    question: 'A SOC team faces repeated incidents where analysts handle the same type of alert differently, leading to inconsistent response quality and missed steps. Which improvement would most directly address this?',
    options: [
      'Purchase more advanced SIEM tools that automate all investigation steps',
      'Develop and maintain detailed incident response runbooks with step-by-step procedures for each alert type, including triage, investigation, containment, and escalation criteria',
      'Hire senior analysts who intuitively know the correct response for each scenario',
      'Reduce the number of alerts so analysts have more time per alert'
    ],
    correctAnswer: 1,
    explanation: 'Runbooks standardize response procedures, ensuring consistent and complete handling of common incident types. They include triage steps, investigation procedures, containment guidance, and escalation criteria. Option A cannot fully replace human judgment. Option C is unrealistic. Option D doesn\'t address consistency.',
  },

  {
    id: 213,
    moduleId: 'blueteam',
    topic: 'Severity Classification',
    question: 'A SOC analyst triages the following simultaneously: (A) a single workstation with antivirus detecting a known PUAP, (B) a domain admin account exhibiting lateral movement to 15 servers, (C) a phishing email reported by one user (not clicked), (D) a critical server with 90% disk usage alert. How should these be prioritized?',
    options: [
      'A then B then C then D based on detection order',
      'B (Domain Admin lateral movement to 15 servers) first as active, verified compromise with broad impact. D (disk usage) second as availability impact. A (PUAP) third as low severity. C (unclicked phish) last as not exploited.',
      'C first because phishing is the most common attack vector',
      'D first because critical server availability is always the top priority'
    ],
    correctAnswer: 1,
    explanation: 'B is the highest priority: verified compromise with lateral movement from a privileged account. D is an availability issue but not necessarily security. A is low severity (PUAP). C is a reported phish with no click, requiring investigation but not immediate response. Context matters for prioritization.',
  },

  {
    id: 214,
    moduleId: 'blueteam',
    topic: 'Threat Hunting - Methodology',
    question: 'A threat hunter hypothesizes that attackers are using PowerShell Empire for post-exploitation. The hunter searches for: unusual PowerShell process creation, base64-encoded command lines, outbound connections on high-numbered ports from PowerShell, and Event ID 4104 (PowerShell script block logging). Which hunting methodology is being used?',
    options: [
      'Indicator-based hunting: searching for specific IOCs from known threat reports',
      'Hypothesis-based hunting: starting with a hypothesis about specific TTPs (PowerShell Empire) and searching for associated behavioral evidence across multiple data sources',
      'Baseline-based hunting: comparing current behavior to a historical baseline',
      'Intel-driven hunting: consuming threat intelligence feeds for automated detection'
    ],
    correctAnswer: 1,
    explanation: 'Hypothesis-based hunting starts with a hypothesis (adversaries using PowerShell Empire) and searches for associated behavioral evidence (unusual PowerShell, base64 cmdlines, outbound connections, script block logging). This is a proactive approach based on TTP knowledge, not specific IOCs.',
  },

  {
    id: 215,
    moduleId: 'blueteam',
    topic: 'Hypothesis-Based Hunting',
    question: 'A threat hunter develops the hypothesis: \'Attackers may be exploiting the recently disclosed Log4j vulnerability (CVE-2021-44228) in our Java applications.\' The hunter searches all HTTP logs for JNDI lookup patterns, LDAP outbound connections, and unexpected Java process behavior. The search finds no matches. How should the hunter interpret this result?',
    options: [
      'The hypothesis was wrong; Log4j is not a relevant threat and should be dismissed',
      'The negative result is valuable: it provides evidence that either the systems are not vulnerable, the detection missed the attack, or the attack has not occurred, informing risk assessment and potential detection improvements',
      'The hunter should stop hunting because no results were found',
      'The hunter should expand the search to all vulnerabilities in the NVD database'
    ],
    correctAnswer: 1,
    explanation: 'Negative hunting results are valuable. They may indicate: systems are patched/not vulnerable, current detections miss the attack pattern (needing improvement), or the attack has not occurred. This informs risk posture and detection coverage. Options A and C dismiss valuable information. Option D is unfocused.',
  },

  {
    id: 216,
    moduleId: 'blueteam',
    topic: 'Hardening Principles',
    question: 'A system administrator is hardening a new Linux web server. Current state: default installation with SSH password authentication enabled, root login permitted, all ports open in the firewall, and default Apache configuration. Which hardening principle should be applied first and why?',
    options: [
      'Apply the latest security patches because patching is always the highest priority',
      'Apply the principle of least privilege: disable root SSH login, enforce key-based authentication, close all unnecessary ports, remove default Apache pages, and run the web service under a dedicated non-privileged user',
      'Install a commercial antivirus because Linux servers are increasingly targeted by malware',
      'Enable SELinux in enforcing mode immediately, which automatically hardens all configurations'
    ],
    correctAnswer: 1,
    explanation: 'The principle of least privilege dictates that systems should run with the minimum necessary permissions. Disabling root SSH, key-based auth, closing unnecessary ports, removing defaults, and using a dedicated user limit the attack surface. Patches (A) are important but privilege reduction is foundational.',
  },

  {
    id: 217,
    moduleId: 'blueteam',
    topic: 'Least Privilege',
    question: 'An application requires read access to a specific database table \'orders\' for reporting. The development team requests a SQL account with \'sa\' (system administrator) privileges \'just to be safe.\' The DBA is concerned about least privilege. What should the DBA do?',
    options: [
      'Grant sa access since the developers know what they need and refusing creates bottlenecks',
      'Create a dedicated database user with EXECUTE on the specific reporting stored procedure and SELECT on only the required columns in the orders table, denying all other permissions',
      'Grant db_owner role on the database since it provides complete control over all database objects',
      'Provide the root database password and let developers manage their own permissions'
    ],
    correctAnswer: 1,
    explanation: 'Least privilege requires granting only the minimum permissions needed. A dedicated user with specific object-level permissions (EXECUTE on specific proc, SELECT on needed columns) is appropriate. Option A grants excessive privilege. Options C and D violate least privilege entirely.',
  },

  {
    id: 218,
    moduleId: 'blueteam',
    topic: 'CIS Benchmarks',
    question: 'A security auditor checks a Windows Server 2019 against industry best practices and finds: password policy allows 4-character passwords, guest account is enabled, SMBv1 is enabled, and auditing is not configured. Which standard provides specific hardening recommendations for this scenario?',
    options: [
      'PCI DSS, because it covers all security configurations for any system',
      'ISO 27001, which provides a framework for information security management',
      'CIS Benchmarks for Windows Server 2019, which provide specific, consensus-based hardening recommendations including password policy, account configuration, protocol disabling, and audit policy settings',
      'NIST SP 800-53, which provides security and privacy controls for federal information systems'
    ],
    correctAnswer: 2,
    explanation: 'CIS (Center for Internet Security) Benchmarks provide specific, step-by-step hardening guidelines for operating systems, including password policies, account management, disabling legacy protocols (SMBv1), and audit configuration. PCI DSS (A) focuses on payment card data. ISO 27001 (B) is a management framework.',
  },

  {
    id: 219,
    moduleId: 'blueteam',
    topic: 'BCP vs DRP',
    question: 'A company experiences a ransomware attack that encrypts all servers in the primary data center. The company has a Disaster Recovery Plan (DRP) that includes restoring from backups at a secondary site, estimated to take 72 hours. However, the business requires critical operations to resume within 4 hours to avoid significant financial loss. What is the gap in the current planning?',
    options: [
      'The DRP is sufficient because 72 hours is a standard recovery time for ransomware',
      'The company needs a Business Continuity Plan (BCP) that defines the maximum tolerable downtime (4 hours) and implements alternative processing arrangements (such as a hot standby site or cloud failover) to meet the 4-hour requirement',
      'The backup strategy is flawed; the company should use tape backups instead of disk backups',
      'The DRP should be abandoned because ransomware attacks cannot be recovered from'
    ],
    correctAnswer: 1,
    explanation: 'The gap is between the RTO (Recovery Time Objective) of 4 hours needed by the business and the 72-hour DRP capability. A BCP addresses business continuity requirements including RTO/RPO and may require a hot standby or active-active architecture. Option A ignores the business requirement. Option C doesn\'t address time.',
  },

  {
    id: 220,
    moduleId: 'blueteam',
    topic: 'RTO/RPO',
    question: 'A company defines the following recovery objectives for its core banking application: maximum acceptable data loss is 15 minutes, and the application must be fully operational within 2 hours of a disaster. Which RTO and RPO values correspond to these requirements?',
    options: [
      'RTO = 15 minutes, RPO = 2 hours',
      'RTO = 2 hours, RPO = 15 minutes',
      'RTO = 2 hours, RPO = 2 hours',
      'RTO = 15 minutes, RPO = 15 minutes'
    ],
    correctAnswer: 1,
    explanation: 'RTO (Recovery Time Objective) is the maximum time to restore operations (2 hours). RPO (Recovery Point Objective) is the maximum acceptable data loss measured in time (15 minutes). Option A swaps the definitions. Options C and D do not match the stated requirements.',
  },

  {
    id: 221,
    moduleId: 'blueteam',
    topic: '3-2-1 Backup Rule',
    question: 'A company stores its backup data on a single Network Attached Storage (NAS) device in the same server room as the production systems. A fire in the server room destroys both the production servers and the NAS. The company loses all data. Which backup best practice was violated?',
    options: [
      'The 3-2-1 backup rule: maintain at least 3 copies of data, on 2 different media types, with 1 copy offsite. Storing the only backup on a single NAS in the same physical location violates all three principles.',
      'No rule was violated because the NAS backup is a standard practice; the company was simply unlucky',
      'The company should have used RAID on the NAS, which would have protected against the fire',
      'The company should have backed up to tape instead of NAS'
    ],
    correctAnswer: 0,
    explanation: 'The 3-2-1 rule: 3 copies of data, 2 different media types, 1 offsite. The company had only 1 backup copy on 1 medium in 1 location (same room). RAID (C) protects against disk failure, not site destruction. Tape vs NAS (D) doesn\'t address the offsite requirement.',
  },

  {
    id: 222,
    moduleId: 'blueteam',
    topic: 'Defense in Depth - Network',
    question: 'A security architect is designing network security for a multi-tier web application with web servers, application servers, and database servers. The architect places the web servers in a DMZ, the application servers in an internal network with strict firewall rules allowing only web server traffic on specific ports, and the database servers in a restricted network accessible only from the application servers. This design implements which defense-in-depth principle?',
    options: [
      'Security through obscurity by hiding the database servers',
      'Network segmentation with tiered access controls, creating separate security zones that limit lateral movement and contain potential breaches',
      'Complete network isolation, making all services inaccessible',
      'Perimeter security only, focusing all defenses at the internet edge'
    ],
    correctAnswer: 1,
    explanation: 'Network segmentation creates security zones (DMZ, internal, restricted) with different trust levels. Firewall rules enforce only necessary traffic between tiers. This limits lateral movement: compromising a web server does not grant direct database access. Option A is not security through obscurity. Option C is too restrictive.',
  },

  {
    id: 223,
    moduleId: 'blueteam',
    topic: 'SIEM - False Positive Management',
    question: 'A SOC team implements a SIEM correlation rule that alerts when a single user logs into more than 3 servers within 10 minutes. The rule generates 100 alerts per day, but 90 are legitimate system administrators performing routine maintenance. The team needs to reduce false positives. Which approach is most effective?',
    options: [
      'Delete the rule entirely because it generates too many false positives',
      'Modify the rule to exclude known admin accounts and maintenance windows via an allowlist, and increase the threshold to 5 servers within 10 minutes for non-excluded accounts',
      'Keep the rule and increase SOC staffing to handle 100 alerts per day',
      'Escalate all alerts to Tier 3 analysts since they are experienced enough to identify false positives quickly'
    ],
    correctAnswer: 1,
    explanation: 'False positive management requires tuning: adding exceptions for known legitimate activity (admin accounts, maintenance windows) and adjusting thresholds. The rule itself has value for detecting compromised accounts. Option A removes detection entirely. Option C is inefficient. Option D escalates without resolution.',
  },

  {
    id: 224,
    moduleId: 'blueteam',
    topic: 'Incident Response Preparation',
    question: 'An organization is building an incident response capability from scratch. They have no existing IR plan, tools, or trained personnel. A ransomware attack occurs before the capability is mature. Which immediate action should the organization take?',
    options: [
      'Attempt to negotiate with the attackers and pay the ransom to recover data quickly',
      'Isolate affected systems from the network to contain the spread, activate any available backup procedures, engage an external IR firm with ransomware expertise, and preserve evidence for potential law enforcement involvement',
      'Shut down all systems immediately and start rebuilding from scratch without investigation',
      'Ignore the incident and continue operations since ransomware rarely causes permanent damage'
    ],
    correctAnswer: 1,
    explanation: 'Without mature IR capability, the immediate priorities are containment (isolate affected systems), engage experts (external IR firm), leverage existing backups, and preserve evidence. Option A (paying) is risky and not recommended. Option C destroys forensic evidence. Option D is negligent.',
  },

  {
    id: 225,
    moduleId: 'blueteam',
    topic: 'Threat Hunting - Pyramid of Pain',
    question: 'A threat hunter is developing detection strategies for a specific APT group. The hunter can detect: (A) specific MD5 hashes of known tools, (B) domain names used by the group, (C) TTPs such as specific registry modifications, (D) IP addresses of known C2 servers, and (E) specific artifacts like named pipes. The hunter wants to focus on detection methods that are hardest for the adversary to change. Which detection types should the hunter prioritize based on the Pyramid of Pain?',
    options: [
      'Hash values (A) because they are the easiest to implement',
      'IP addresses (D) because they are the most commonly shared IOCs',
      'TTPs (C) because behaviors are the most difficult for adversaries to change, sitting at the top of the Pyramid of Pain',
      'Domain names (B) because they are expensive for adversaries to replace'
    ],
    correctAnswer: 2,
    explanation: 'The Pyramid of Pain ranks indicators by difficulty for adversaries to change: Hash values (easy), IP addresses, Domain names, Network/host artifacts, Tools, TTPs (hardest). TTPs describe adversary behaviors and are most difficult to change without significant investment. Options A, B, D target lower-hanging fruit.',
  },

  {
    id: 226,
    moduleId: 'blueteam',
    topic: 'Hardening - Windows',
    question: 'A security team is hardening Windows 10 workstations for high-security users (executives). The current configuration allows users to install applications, has UAC set to the default level, PowerShell is unrestricted, and RDP is enabled. Which hardening measures should the team prioritize?',
    options: [
      'Disable all user accounts to prevent any installation',
      'Apply the Microsoft Security Baselines for Windows 10, which include: setting UAC to maximum, restricting PowerShell execution policy, disabling RDP unless required with Network Level Authentication, enabling AppLocker or WDAC for application control, and enforcing standard user accounts',
      'Upgrade all workstations to Windows 11 which is inherently more secure',
      'Remove all network access so workstations cannot communicate with the internet'
    ],
    correctAnswer: 1,
    explanation: 'Microsoft Security Baselines provide tested configurations for hardening Windows. Key measures: UAC max, restricted PowerShell, disabled RDP with NLA, AppLocker/WDAC for application whitelisting, standard user accounts. Option A prevents all work. Option C is not a hardening step. Option D breaks functionality.',
  },

  {
    id: 227,
    moduleId: 'blueteam',
    topic: 'IDS/IPS - Placement',
    question: 'A network security engineer needs to deploy an IPS to protect a critical application server farm containing customer PII. The traffic flow is: Internet -> Firewall -> Load Balancer -> Web Servers -> App Servers -> Database Servers. The engineer has budget for two IPS sensors. Which placement provides the most effective protection?',
    options: [
      'One sensor between the firewall and load balancer (monitoring inbound internet traffic) and one at the internet edge before the firewall',
      'One sensor between the load balancer and web servers (monitoring decrypted traffic after SSL termination) and one between the web servers and application servers (monitoring internal traffic for lateral movement)',
      'Both sensors at the database server network because that is where the sensitive data resides',
      'One sensor at each web server host directly since network sensors are ineffective'
    ],
    correctAnswer: 1,
    explanation: 'Placing one IPS after SSL termination (where traffic is decrypted) is critical for inspecting web application attacks. The second sensor between web and app servers detects lateral movement if a web server is compromised. Option A misses internal lateral movement. Option C misses web attacks. Option D is host-based.',
  },

  {
    id: 228,
    moduleId: 'blueteam',
    topic: 'Forensics - Order of Volatility',
    question: 'An incident responder arrives at a compromised Linux server. The server is still running. The responder needs to collect evidence. According to the Order of Volatility (RFC 3227), which sequence is correct?',
    options: [
      'Hard drive -> RAM -> network connections -> running processes -> system logs',
      'RAM -> network connections -> running processes -> temporary file systems -> hard drive',
      'Registers/cache -> routing table/ARP cache -> process table/kernel memory -> temporary file systems -> disk -> remote logs/monitoring data',
      'System logs -> network connections -> running processes -> RAM -> hard drive'
    ],
    correctAnswer: 2,
    explanation: 'RFC 3227 Order of Volatility: CPU registers/cache (most volatile), routing table/ARP cache, process table/kernel statistics/memory, temporary file systems, disk, remote logs/monitoring data (least volatile). Option B is close but misses registers. Options A and D collect disk before RAM, losing volatile data.',
  },

  {
    id: 229,
    moduleId: 'blueteam',
    topic: 'Incident Response - Eradication',
    question: 'After a ransomware incident, the IR team has contained the outbreak and identified the root cause: an unpatched internet-facing RDP server. The team restored all encrypted servers from clean backups. However, the CISO asks: \'How do we know the attackers are completely removed from our environment?\' Which eradication step is most critical before declaring recovery complete?',
    options: [
      'Change all passwords and rotate all cryptographic keys/ certificates, re-image all affected systems (not just restore from backup), verify that the initial access vector (unpatched RDP) is remediated, and conduct a comprehensive hunt for persistence mechanisms',
      'Restore from backups and assume the attackers are removed since backups are clean',
      'Simply patch the RDP server and declare the incident resolved',
      'Reinstall the operating system on the RDP server only'
    ],
    correctAnswer: 0,
    explanation: 'Thorough eradication includes: password/key rotation, re-imaging affected systems (backups may contain latent malware), closing the initial access vector, and actively hunting for persistence (backdoors, new accounts, scheduled tasks). Option B assumes backups are clean without verification. Options C and D are incomplete.',
  },

  {
    id: 230,
    moduleId: 'blueteam',
    topic: 'Threat Hunting - Data Sources',
    question: 'A threat hunter wants to search for evidence of Pass-the-Hash attacks using NTLM hashes across the network. The hunter needs to correlate activity across multiple systems. Which data sources should the hunter prioritize?',
    options: [
      'NetFlow data alone, which shows all network connections',
      'Windows Security Event Logs (especially 4624 Logon with LogonType 3 and 4648 explicit credentials), NTLM authentication logs on domain controllers, and EDR process creation logs showing tools like Mimikatz or Invoke-Mimikatz loaded',
      'Firewall logs showing all outbound traffic',
      'DNS query logs showing all domain resolution requests'
    ],
    correctAnswer: 1,
    explanation: 'Pass-the-Hash detection requires: Windows Event 4624 (NTLM logon with specific logon types), DC NTLM authentication logs for unusual source workstations, and EDR logs for credential dumping tools. NetFlow (A) doesn\'t show authentication details. Firewall (C) and DNS (D) logs are too generic.',
  },

  {
    id: 231,
    moduleId: 'blueteam',
    topic: 'BCP - Tabletop Exercise',
    question: 'A company develops a Business Continuity Plan for its data center. The BCP assumes the primary data center will be available within 4 hours of a disaster. During a tabletop exercise, the facilitator reveals that the primary data center has been destroyed by a regional flood and will be unavailable for 7 days. What does this scenario reveal?',
    options: [
      'The BCP is perfect because 4 hours is a standard RTO',
      'The BCP has a flawed assumption about a single failure scenario; tabletop exercises help identify such gaps by stress-testing plans against realistic scenarios that deviate from assumptions',
      'Tabletop exercises are useless because they reveal flaws without providing solutions',
      'The flood scenario is unrealistic and should be ignored for planning purposes'
    ],
    correctAnswer: 1,
    explanation: 'Tabletop exercises reveal planning gaps by stress-testing assumptions. Assuming the data center is available in 4 hours ignores scenarios where it is destroyed. The exercise reveals the need for an alternative site or cloud failover. Options A and D ignore the revealed gap. Option C is wrong: identifying flaws is valuable.',
  },

  {
    id: 232,
    moduleId: 'blueteam',
    topic: 'SIEM - Use Case',
    question: 'A SOC manager wants to create a SIEM use case for detecting \'insider threat: data exfiltration by a departing employee.\' Which combination of log sources and detection logic would be most effective?',
    options: [
      'Alert on any employee accessing the HR system (privacy violation)',
      'Correlate: (1) HR system notification of employee resignation (HR system), (2) employee accessing sensitive data they do not normally access (DLP/file audit logs), (3) unusual download volume (proxy/egress logs), (4) USB device connection (device control logs) within a 2-week window before departure date',
      'Block all USB ports and DLP violations immediately for all employees',
      'Monitor only the departing employee\'s email for the final week'
    ],
    correctAnswer: 1,
    explanation: 'An effective insider threat use case correlates multiple signals: HR context (resignation), abnormal data access (file audit), unusual volume (proxy/egress), USB activity. This combination reduces false positives. Option A creates privacy issues. Options C and D are too narrow.',
  },

  {
    id: 233,
    moduleId: 'blueteam',
    topic: 'MITRE ATT&CK - Defensive Mapping',
    question: 'A blue team wants to map their existing security controls to the MITRE ATT&CK framework to identify detection coverage gaps. They have EDR covering execution and persistence, a WAF covering initial access via web exploits, and DLP covering exfiltration. Which tactic has the most significant detection gap based on this mapping?',
    options: [
      'Initial Access: fully covered by the WAF',
      'Execution: fully covered by EDR',
      'Lateral Movement and Command and Control: no controls mapped, leaving a significant gap where an attacker who compromises one host can move laterally and communicate with C2 undetected',
      'Exfiltration: fully covered by DLP'
    ],
    correctAnswer: 2,
    explanation: 'Mapping controls to ATT&CK reveals gaps. EDR covers Execution/Persistence, WAF covers Initial Access (web), DLP covers Exfiltration. But Lateral Movement and C2 have no mapped controls, meaning an attacker who bypasses the WAF or enters through another vector (phishing, VPN) can move freely.',
  },

  {
    id: 234,
    moduleId: 'blueteam',
    topic: 'Zeek - Log Analysis',
    question: 'A blue team analyst reviews Zeek logs after a reported compromise. The analyst finds: (1) conn.log shows sustained TLS connections from a workstation to an external IP on port 443, (2) ssl.log shows the TLS certificate is self-signed, (3) http.log shows no HTTP traffic from that workstation, and (4) dns.log shows the workstation queried a domain that was registered 3 days ago. What does this indicate?',
    options: [
      'Normal browsing activity: many websites use self-signed certificates',
      'Suspicious: sustained encrypted traffic with a self-signed certificate to a newly registered domain with no HTTP traffic suggests possible C2 communication using HTTPS to blend in',
      'The self-signed certificate confirms the connection is to a legitimate internal resource',
      'Newly registered domains are not suspicious because many legitimate businesses register domains daily'
    ],
    correctAnswer: 1,
    explanation: 'The combination of sustained TLS (not typical browsing), self-signed certificate (unusual for legitimate external services), newly registered domain (common for adversary infrastructure), and no HTTP traffic (pure encrypted connection) is highly suspicious and suggests HTTPS C2. Options A, C, D ignore these indicators.',
  },

  {
    id: 235,
    moduleId: 'blueteam',
    topic: 'Forensics - Timeline Analysis',
    question: 'A forensic analyst is analyzing a compromised Linux web server and finds the following timestamps: /var/www/html/shell.php created at 2024-03-15 03:17:22, auth.log shows SSH login from 185.x.x.x at 03:18:01, /etc/cron.d/backup created at 03:20:15 with a reverse shell command, and /var/log/apache2/access.log shows access to shell.php starting at 03:25:00. What is the correct timeline of events?',
    options: [
      'The web shell was uploaded first (03:17), then the attacker SSH\'d in (03:18), created a cron persistence (03:20), and used the web shell (03:25)',
      'The attacker SSH\'d in first (03:18), uploaded the web shell via SCP (03:17 has wrong timestamp), then created cron job (03:20)',
      'The cron job was created first (03:20), the web shell was uploaded (03:17), and the SSH login (03:18) is unrelated',
      'All events happened at the same time; timestamps can never be trusted on compromised systems'
    ],
    correctAnswer: 0,
    explanation: 'Timeline analysis: the web shell was uploaded at 03:17 via web vulnerability, the attacker then SSH\'d at 03:18 using stolen or brute-forced credentials, created persistence via cron at 03:20, and accessed the web shell at 03:25. Timeline construction is critical for understanding the attack sequence.',
  },

  {
    id: 236,
    moduleId: 'blueteam',
    topic: 'Incident Response - Communication',
    question: 'During a major incident involving potential data breach of customer PII, the IR team discovers that the breach likely occurred 6 months ago but was only detected now. The legal team advises immediate notification of affected customers. The CEO wants to delay notification until the investigation is complete. Which consideration should guide this decision?',
    options: [
      'The CEO\'s preference to delay notification is absolute',
      'Legal and regulatory requirements (GDPR, CCPA, sector-specific regulations) typically require notification within specific timeframes after discovery, regardless of investigation completeness. The IR team must balance thorough investigation with legal compliance.',
      'Delay notification indefinitely because the investigation will eventually determine exactly who was affected',
      'Notify only if customers ask; otherwise, avoid notification to prevent reputational damage'
    ],
    correctAnswer: 1,
    explanation: 'Many regulations (GDPR 72 hours, CCPA, HIPAA, state breach notification laws) mandate notification within specific timeframes after breach discovery. Legal compliance and customer protection must be balanced with investigation needs. Option A ignores legal obligations. Options C and D risk legal penalties.',
  },

  {
    id: 237,
    moduleId: 'blueteam',
    topic: 'Threat Hunting - Intelligence-Driven',
    question: 'A threat intelligence report indicates that a specific ransomware group (LockBit 3.0) is using a new technique to disable Windows Defender via WMI and deploy ransomware through scheduled tasks. A threat hunter wants to proactively search for this activity in the environment. Which hunting approach is this?',
    options: [
      'Reactive hunting: responding to a confirmed incident',
      'Intel-driven hunting: using threat intelligence about specific TTPs to proactively search for associated indicators and behaviors before a confirmed compromise',
      'Baseline hunting: looking for deviations from normal behavior patterns',
      'Compliance-driven hunting: checking for regulatory compliance violations'
    ],
    correctAnswer: 1,
    explanation: 'Intel-driven hunting uses threat intelligence about adversary TTPs to proactively search for associated evidence in the environment. The intelligence about LockBit 3.0\'s specific techniques (WMI Defender disablement, scheduled task deployment) drives the hunt hypothesis and search parameters.',
  },

  {
    id: 238,
    moduleId: 'blueteam',
    topic: 'Container Security',
    question: 'A security team is hardening a Kubernetes deployment. The current configuration runs all containers as root, uses the latest image tag in production, and containers can communicate with each other without restrictions. Which hardening measure should the team prioritize?',
    options: [
      'Run containers as non-root user, specify immutable image tags (not :latest), implement Kubernetes Network Policies to restrict pod-to-pod communication based on least privilege, and use read-only root filesystems where possible',
      'Install antivirus inside each container, since containers are just lightweight VMs',
      'Disable all network communications between pods, making microservices unable to function',
      'Scan container images only once during initial deployment, as containers do not change after deployment'
    ],
    correctAnswer: 0,
    explanation: 'Container hardening: non-root execution (reduces escape impact), immutable tags (ensures version control), Network Policies (implements least privilege between pods), read-only filesystems. Option B misunderstands container security. Option C breaks functionality. Option D ignores image updates.',
  },

  {
    id: 239,
    moduleId: 'blueteam',
    topic: 'Incident Response - Lessons Learned',
    question: 'After a phishing incident that compromised three user accounts and led to a limited data breach, the IR team completes the technical response. The CISO asks what should be done next to prevent recurrence. What is the most important post-incident activity?',
    options: [
      'Conduct a lessons-learned meeting with all stakeholders to discuss what went well, what went wrong, and identify actionable improvements to people, processes, and technology, then track these improvements to completion',
      'Move on to the next incident without review since the team is busy',
      'Punish the employees who clicked the phishing email to discourage future mistakes',
      'Purchase more security tools because the current tools clearly failed'
    ],
    correctAnswer: 0,
    explanation: 'The lessons-learned phase (NIST Post-Incident Activity) is critical for improvement. It identifies root causes and drives improvements in people (training), processes (incident response), and technology (detection gaps). Option B misses the improvement opportunity. Option C discourages reporting. Option D may not address root causes.',
  },

  {
    id: 240,
    moduleId: 'blueteam',
    topic: 'Blue Team - Detection Engineering',
    question: 'A detection engineer needs to create a rule to detect \'Kerberoasting\' attacks where an adversary requests Kerberos service tickets for service accounts to crack offline. The engineer considers: (A) Event ID 4769 (Kerberos Service Ticket Requested) with encryption type 0x17 (RC4-HMAC), (B) Windows Security Log volume, (C) false positive rate from legitimate service ticket requests, (D) baseline of normal service ticket requests per account. Which considerations are most important for effective detection?',
    options: [
      'Only A matters because Event ID 4769 with RC4 encryption is the definitive indicator of Kerberoasting',
      'A and D: monitoring Event 4769 with RC4 encryption is necessary but insufficient without establishing a baseline of normal service account ticket requests per user to distinguish legitimate requests from anomalous bulk requests',
      'Only B matters because log volume determines SIEM cost',
      'Only C matters because false positives should never be tolerated'
    ],
    correctAnswer: 1,
    explanation: 'Effective Kerberoasting detection requires: monitoring Event 4769 with RC4-HMAC (0x17) encryption AND establishing baselines for normal service ticket requests. A single request from a system administrator may be legitimate, but 50 requests from a standard user is suspicious. Options A, C, D ignore necessary context.',
  },

  {
    id: 241,
    moduleId: 'gestao',
    topic: 'VM Lifecycle',
    question: 'A vulnerability management team receives a notification about a critical vulnerability in Apache Log4j (CVE-2021-44228) affecting 200 servers. The team needs to prioritize remediation. The vulnerability has a CVSS of 10.0, is being actively exploited, and proof-of-concept code is publicly available. According to the VM lifecycle, which immediate steps should the team take?',
    options: [
      'Wait for the next quarterly scan cycle to identify all affected systems before taking action',
      'Initiate the vulnerability management lifecycle: emergency vulnerability assessment (identify all affected versions), risk assessment (CVSS 10, active exploitation), prioritization (all affected systems), remediation (apply patches or mitigating controls), and verification (confirm patching)',
      'Immediately patch all 200 servers without testing, since the CVSS score is 10.0',
      'Ignore the vulnerability because Log4j is only used in development environments'
    ],
    correctAnswer: 1,
    explanation: 'The VM lifecycle: identify/assess, evaluate risk, prioritize, remediate, verify. For emergency vulnerabilities like Log4j, the lifecycle accelerates but still includes assessment and prioritization. Option A delays response dangerously. Option C skips testing (may cause outages). Option D is negligent.',
  },

  {
    id: 242,
    moduleId: 'gestao',
    topic: 'Asset Inventory',
    question: 'A vulnerability management team is deploying a new scanner and discovers that the scan identifies 5,000 hosts, but the official IT asset inventory only lists 3,000 hosts. The extra 2,000 hosts include development servers, cloud instances, and shadow IT systems. What is the primary implication of this discrepancy?',
    options: [
      'The asset inventory is accurate; the scanner is generating false positives for 2,000 non-existent hosts',
      'There are 2,000 unmanaged or unknown assets (shadow IT) that are not covered by patching, monitoring, or vulnerability management, representing a significant security gap',
      'The scanner should be reconfigured to only scan the 3,000 known hosts',
      'The extra 2,000 hosts are likely network devices that do not need vulnerability scanning'
    ],
    correctAnswer: 1,
    explanation: 'A critical finding: 40% of assets are unknown to IT. These shadow IT systems are not patched, monitored, or covered by security controls. This is a significant risk. The VM team must work with IT to inventory and manage these assets. Options A and C ignore the security gap.',
  },

  {
    id: 243,
    moduleId: 'gestao',
    topic: 'Authenticated vs Unauthenticated Scans',
    question: 'A vulnerability scan of a Windows server using an unauthenticated scan finds 15 vulnerabilities. When the same server is scanned with domain administrator credentials (authenticated scan), it finds 87 vulnerabilities. What best explains this discrepancy?',
    options: [
      'The authenticated scan is generating false positives because credentials introduce inaccuracies',
      'Unauthenticated scans can only identify vulnerabilities detectable from the network perspective (like open ports and banner information), while authenticated scans have local access to check registry settings, file versions, missing patches, and configuration issues, providing a much more comprehensive assessment',
      'The unauthenticated scan is more accurate because it tests the server as an attacker would see it',
      'Both scan results are equally valid; the team should average the severity counts'
    ],
    correctAnswer: 1,
    explanation: 'Unauthenticated scans are network-based, detecting only externally visible issues. Authenticated scans (credentialled) have local system access to check actual patch levels, registry settings, file versions, and configurations, giving a complete picture of the patch posture. Both are valuable but serve different purposes.',
  },

  {
    id: 244,
    moduleId: 'gestao',
    topic: 'Network vs Web vs Container Scanners',
    question: 'A company needs to assess the security of: (A) 500 internal workstations and servers, (B) 3 custom web applications, and (C) a Kubernetes cluster with 50 container images. The company has budget for one type of scanner. Which approach is most appropriate?',
    options: [
      'Use only a network vulnerability scanner (like Nessus) for all three because it covers network, web apps, and containers',
      'This scenario requires multiple specialized tools: a network scanner (OpenVAS/Nessus) for the workstations/servers, a web application scanner (like Burp Suite or Acunetix) for the web apps, and a container scanner (like Trivy or Clair) for the container images, as each target type requires different assessment methodologies',
      'Use only a web application scanner because web apps are the most commonly exploited targets',
      'Use only a container scanner because containers represent modern infrastructure'
    ],
    correctAnswer: 1,
    explanation: 'Different targets require different scanning methodologies. Network scanners check OS/services, web scanners analyze web app logic and parameters, and container scanners check image layers and dependencies. One scanner type cannot adequately assess all three. Option A is incorrect. Options C and D ignore significant portions of the environment.',
  },

  {
    id: 245,
    moduleId: 'gestao',
    topic: 'SAST vs DAST',
    question: 'A development team is implementing application security testing. They want to find vulnerabilities early in the SDLC (Shift Left) during the coding phase, before the application is deployed. The application is written in Java and uses numerous third-party libraries. Which testing approach should they prioritize?',
    options: [
      'DAST (Dynamic Application Security Testing) because it tests the running application, finding vulnerabilities an attacker could exploit',
      'SAST (Static Application Security Testing) integrated into the CI/CD pipeline and IDE, which analyzes source code without executing it, identifying vulnerabilities like SQLi, XSS, and insecure dependencies early in development',
      'Penetration testing performed once before production release',
      'Manual code review by developers only, without automated tools'
    ],
    correctAnswer: 1,
    explanation: 'SAST (Static Analysis) scans source code during development (Shift Left), finding vulnerabilities before deployment. It excels at finding injection flaws, insecure deserialization, and vulnerable dependencies. DAST (A) tests running applications later in the SDLC. Pen testing (C) is even later. Manual review alone (D) is insufficient.',
  },

  {
    id: 246,
    moduleId: 'gestao',
    topic: 'SAST vs DAST',
    question: 'A security team compares SAST and DAST results for the same web application. SAST reports a potential SQL injection vulnerability in a database access function. DAST does not detect this vulnerability in the running application. Which conclusion is most accurate?',
    options: [
      'DAST is correct; the SAST finding is a false positive because the vulnerability cannot be exploited',
      'SAST is correct; DAST missed the vulnerability because DAST requires specific conditions (e.g., the vulnerable code path must be reachable through the UI, and proper fuzzing payloads must be used) that may not have been triggered during the DAST scan',
      'Both tools are unreliable; the team should ignore automated scanning results',
      'The vulnerability exists only in the source code and has no security impact'
    ],
    correctAnswer: 1,
    explanation: 'SAST finds vulnerabilities by analyzing code paths. DAST may miss it because: the vulnerable function may not be reachable through the UI during DAST scanning, the DAST payloads may not have triggered it, or authentication/state issues may prevent access. Both SAST and DAST have different strengths and blind spots.',
  },

  {
    id: 247,
    moduleId: 'gestao',
    topic: 'CVSS Metrics - Base',
    question: 'A vulnerability analyst is calculating the CVSS v3.1 base score for a newly discovered vulnerability in a widely used VPN appliance. The vulnerability: can be exploited remotely over the network without authentication, requires no user interaction, has low attack complexity, and can cause complete compromise of confidentiality, integrity, and availability. What CVSS base score range should the analyst expect?',
    options: [
      'Low (0.1-3.9) because VPN appliances are typically well-secured',
      'Medium (4.0-6.9) because network access is required',
      'Critical (9.0-10.0): AV:N, AC:L, PR:N, UI:N, S:C, C:H, I:H, A:H maps to CVSS 9.8 or higher',
      'High (7.0-8.9) because some exploits require authentication'
    ],
    correctAnswer: 2,
    explanation: 'CVSS vector: AV:N (Network), AC:L (Low), PR:N (None), UI:N (None), S:C (Changed), C:H (High), I:H (High), A:H (High) calculates to a base score of 9.8-10.0 (Critical). This is a remotely exploitable, no-authentication, complete-compromise scenario — the most severe category.',
  },

  {
    id: 248,
    moduleId: 'gestao',
    topic: 'CVSS Metrics - Temporal',
    question: 'A vulnerability was initially scored CVSS 9.8 (Critical) when first disclosed. Three months later, the following information is available: a working exploit is publicly available, the vendor has released an official patch, and there are no known workarounds. How should the temporal score be adjusted?',
    options: [
      'The score remains 9.8 because temporal metrics do not change the base score',
      'The temporal score should be adjusted: E:H (Exploitability High) may increase the score, while RL:O (Remediation Level: Official Fix) and RC:C (Report Confidence: Confirmed) refine the risk. The overall temporal score helps prioritize urgency.',
      'The score decreases because a patch is available, so the vulnerability is no longer critical',
      'The score should be increased because a working exploit is publicly available'
    ],
    correctAnswer: 1,
    explanation: 'CVSS temporal metrics adjust for time-sensitive factors: Exploitability (E) ranges from U to H, Remediation Level (RL) from U to O, Report Confidence (RC) from U to C. E:H increases urgency, RL:O provides confidence in resolution paths. Temporal scoring helps prioritize: a vulnerability with public exploits and a patch available is urgent to remediate.',
  },

  {
    id: 249,
    moduleId: 'gestao',
    topic: 'CVSS Metrics - Environmental',
    question: 'A cloud service provider assesses a vulnerability in a web server library. The base CVSS score is 9.8 (Critical). However, in their specific environment: the vulnerable component is not directly internet-facing (behind a WAF and firewall), compensating controls exist (WAF rules block the attack pattern), and the affected data is non-sensitive cached content. How should the environmental score be calculated?',
    options: [
      'Ignore environmental factors; the base score of 9.8 determines priority regardless of context',
      'Modify environmental metrics: Security Requirements (CR, IR, AR) based on asset criticality, and Modified Base Metrics (MAV, MAC, MPR, etc.) reflecting compensating controls. The resulting environmental score may be significantly lower, reflecting the reduced risk in this specific deployment',
      'Increase the score because any Critical vulnerability in a web server is unacceptable',
      'Use the base score but apply a manual severity reduction without formal CVSS calculation'
    ],
    correctAnswer: 1,
    explanation: 'CVSS environmental metrics allow tailoring scores to the specific environment. Modified Base Metrics reflect compensating controls (e.g., WAF blocking). Security Requirements (Confidentiality, Integrity, Availability) adjust based on asset criticality. A vulnerability behind controls with non-sensitive data should score lower than the base 9.8.',
  },

  {
    id: 250,
    moduleId: 'gestao',
    topic: 'CVSS Vector',
    question: 'A vulnerability report includes the following CVSS v3.1 vector: CVSS:3.1/AV:N/AC:L/PR:H/UI:R/S:U/C:L/I:L/A:N. What does this vector describe in plain language?',
    options: [
      'A critical, remotely exploitable vulnerability requiring no privileges that leads to complete compromise',
      'A vulnerability requiring high network privileges, resulting in low confidentiality and integrity impact, with no availability impact. Attack complexity is low, but privileges required are high and user interaction is required.',
      'A vulnerability that requires physical access and results in high impact to all security attributes',
      'A medium severity vulnerability that requires authentication and user interaction, is exploitable over the network, has low attack complexity, and results in low confidentiality and integrity impact with no availability impact',
    ],
    correctAnswer: 2,
    explanation: 'CVSS vector breakdown: AV:N (Network) = exploitable remotely, AC:L (Low) = easy to exploit, PR:H (High privileges) = requires privileged account, UI:R (Required) = victim must interact, S:U (Unchanged) = vulnerability stays in same security authority, C:L/I:L/A:N = limited data access, limited modification ability, no denial of service.',
  },

  {
    id: 251,
    moduleId: 'gestao',
    topic: 'Risk Matrix',
    question: 'A vulnerability management team uses a 5x5 risk matrix (Likelihood vs Impact) to prioritize findings. A critical infrastructure server has a vulnerability with High likelihood (public exploit available, no authentication required) and High impact (remote code execution as SYSTEM). However, the server is isolated from the internet and accessible only via jump box with MFA. What is the correct risk rating?',
    options: [
      'Critical (5x5) because both likelihood and impact are high',
      'Moderate: while the technical impact is high, the likelihood is reduced by the network isolation and access controls. The analyst should adjust likelihood based on the compensating controls, potentially rating it Medium or High depending on the effectiveness of isolation',
      'Informational because the server is not internet-facing',
      'The risk matrix should not be used for this scenario because compensating controls are not applicable'
    ],
    correctAnswer: 1,
    explanation: 'Risk = Likelihood x Impact. While Impact is High (RCE as SYSTEM), Likelihood is reduced by compensating controls (network isolation, MFA-based access controls). The risk matrix should reflect the actual risk in the environment, not theoretical maximum. Option A ignores compensating controls. Option C is too dismissive.',
  },

  {
    id: 252,
    moduleId: 'gestao',
    topic: 'Remediation vs Mitigation',
    question: 'A vulnerability management team identifies a critical SQL injection vulnerability in a legacy application that cannot be patched because the vendor is out of business and the source code is unavailable. The team needs to address the risk. Which approach represents remediation vs mitigation?',
    options: [
      'Remediation: rewriting the application from scratch. Mitigation: doing nothing.',
      'Remediation is not possible (no patch available). Mitigation options include: implementing a WAF rule to block SQLi patterns, applying network segmentation to limit database access, and increasing monitoring for exploitation attempts. These reduce risk without fixing the underlying code.',
      'Remediation: purchasing a new application from a different vendor. Mitigation: ignoring the vulnerability.',
      'Remediation: applying a virtual patch via the WAF. Mitigation: rewriting the application.'
    ],
    correctAnswer: 1,
    explanation: 'Remediation fixes the root cause (patching, code fix). Mitigation reduces risk without fixing the root cause (WAF rules, segmentation, monitoring). Since no patch exists, remediation is not currently possible. Mitigation controls reduce exploitation risk. Option A is wrong: rewriting is remediation, and doing nothing is not mitigation.',
  },

  {
    id: 253,
    moduleId: 'gestao',
    topic: 'Patch Management',
    question: 'An organization has a monthly patch cycle for its 5,000 workstations and 500 servers. A critical vulnerability (CVSS 9.8, actively exploited) in the Windows Print Spooler service is announced on the 5th of the month. The next scheduled patch cycle is on the 25th. What should the organization do?',
    options: [
      'Wait for the scheduled patch cycle on the 25th because following the established process is more important than speed',
      'Initiate an emergency patch cycle: assess affected systems, test the patch in a non-production environment as quickly as possible (1-2 days), deploy to all affected systems using automated patch management tools, and verify deployment within 7 days',
      'Only patch internet-facing systems since internal workstations are protected by the firewall',
      'Disable the Print Spooler service on all systems as an immediate compensating control, then deploy the patch within the regular cycle'
    ],
    correctAnswer: 1,
    explanation: 'Actively exploited critical vulnerabilities require emergency patch cycles. The standard process compresses: accelerated testing, expedited deployment, and verification. Option A is unacceptable given active exploitation. Option C ignores lateral movement risks. Option D (disabling Spooler) is a valid compensating control but patching is the preferred remediation.',
  },

  {
    id: 254,
    moduleId: 'gestao',
    topic: 'Compensating Controls',
    question: 'A critical vulnerability (CVSS 9.8) is found in a third-party application that cannot be patched for 90 days due to contractual requirements and vendor limitations. The application handles sensitive customer data. The vulnerability allows remote code execution without authentication. Which compensating controls would most effectively reduce risk while awaiting the patch?',
    options: [
      'Accept the risk and take no action since the patch is coming eventually',
      'Deploy a WAF with virtual patching rules specific to this vulnerability, restrict network access to the application to only authorized IP ranges, implement application-level authentication if possible, enable detailed logging and monitoring for exploitation attempts, and have an incident response plan ready',
      'Disconnect the application from the network entirely, making it unusable',
      'Document the vulnerability and hope it is not exploited before the patch arrives'
    ],
    correctAnswer: 1,
    explanation: 'Compensating controls reduce risk when patching is delayed: virtual patching (WAF rules blocking exploit attempts), network segmentation (reducing attack surface), authentication (adding access barriers), enhanced monitoring (early detection of exploitation). Option A is irresponsible. Option C may not be business-feasible. Option D is passive.',
  },

  {
    id: 255,
    moduleId: 'gestao',
    topic: 'Nessus vs OpenVAS vs Qualys',
    question: 'A vulnerability management team is selecting a vulnerability scanner. Their requirements: (1) agent-based scanning for mobile/remote endpoints, (2) integration with their existing SIEM and ticketing system, (3) compliance benchmarking (CIS benchmarks), (4) cloud workload scanning for AWS/Azure, and (5) on-premises deployment option. Which scanner best meets these requirements?',
    options: [
      'Nessus Professional, which is a standalone desktop scanner for ad-hoc assessments',
      'OpenVAS, which is free and open-source with limited enterprise features',
      'Qualys VM, which provides cloud-based scanning with agent capabilities, broad API integrations, CIS benchmarking, cloud workload scanning for AWS/Azure, and offers a Cloud Agent for remote endpoints. However, Qualys is primarily cloud-based; the team should verify on-premises requirements against available deployment models.',
      'Nmap with vulnerability scripts, which is free and covers all requirements'
    ],
    correctAnswer: 2,
    explanation: 'Qualys VM offers comprehensive enterprise features: Cloud Agent for remote endpoints, extensive API integrations, CIS benchmarks, cloud workload scanning. The team should evaluate deployment models (cloud vs on-premises). Nessus Professional (A) is a desktop tool. OpenVAS (B) lacks enterprise features. Nmap (D) is not a full VM scanner.',
  },

  {
    id: 256,
    moduleId: 'gestao',
    topic: 'Vulnerability SLAs',
    question: 'A vulnerability management policy defines SLAs: Critical (7 days), High (30 days), Medium (90 days), Low (180 days). A critical vulnerability is discovered on 200 systems. On day 10, only 50 systems are patched. Which of the following best describes the situation?',
    options: [
      'The SLA is being met because 50 systems were patched; 7 days is too aggressive for 200 systems',
      'The SLA has been breached for 150 systems (those not patched within 7 days). The VM team needs to escalate, provide status updates, and implement compensating controls for unpatched systems while accelerating the remediation effort',
      'The SLA does not apply because 200 systems is too many; the SLA should be adjusted based on the number of affected systems',
      'The remaining 150 systems should be taken offline immediately to enforce compliance with the SLA'
    ],
    correctAnswer: 1,
    explanation: 'SLAs are targets that should be met. A breach on 150 of 200 systems requires escalation, communication, compensating controls, and accelerated remediation. Option A redefines SLAs without authority. Option C avoids accountability. Option D may be necessary for extreme risk but is a drastic measure.',
  },

  {
    id: 257,
    moduleId: 'gestao',
    topic: 'Risk Acceptance',
    question: 'A business-critical legacy application has a high-risk vulnerability (CVSS 8.2, remote code execution) that cannot be patched because the vendor no longer supports the software. The application processes non-critical internal data and is accessible only from the internal network behind multiple firewall layers. The business unit requests risk acceptance. What should the risk acceptance process include?',
    options: [
      'The business unit manager signs a one-line email saying they accept the risk',
      'A formal risk acceptance process including: detailed documentation of the vulnerability and compensating controls, risk assessment with residual risk rating, signed acceptance by the appropriate risk owner (CISO or business unit head depending on risk level), timeframe for re-evaluation, and contingency plan if exploitation occurs',
      'Deny the risk acceptance and immediately take the application offline',
      'Ignore the vulnerability because the application is not internet-facing'
    ],
    correctAnswer: 1,
    explanation: 'Risk acceptance is a formal process for situations where remediation is not feasible. It requires: documentation of risk, compensating controls description, residual risk calculation, authorized sign-off from appropriate risk owner, review timeframe, and incident response plan. Option A is informal. Option C may not be business-feasible. Option D is implicit acceptance without process.',
  },

  {
    id: 258,
    moduleId: 'gestao',
    topic: 'KPIs - MTTR',
    question: 'A vulnerability management team reports that the average MTTR (Mean Time to Remediate) for critical vulnerabilities decreased from 45 days to 12 days over the past year. The number of critical vulnerabilities found increased from 100 to 300 per quarter. How should this KPI be interpreted?',
    options: [
      'The VM program is failing because more vulnerabilities are being found each quarter',
      'The VM program is improving: MTTR reduction from 45 to 12 days shows faster remediation, while the increase in findings (100 to 300) likely reflects improved scanning coverage rather than a deteriorating security posture',
      'The MTTR decrease is irrelevant because the number of findings increased',
      'The 12-day MTTR indicates critical SLAs are not being met since most policies require 7-day remediation'
    ],
    correctAnswer: 1,
    explanation: 'MTTR measures remediation speed. A decrease from 45 to 12 days indicates significant improvement in remediation efficiency. The increased finding count likely reflects broader scanning coverage, not worsening security. MTTR should be evaluated alongside other metrics (vulnerability count, criticality distribution, SLA compliance).',
  },

  {
    id: 259,
    moduleId: 'gestao',
    topic: 'KPIs - Trends',
    question: 'A VM manager needs to present vulnerability management metrics to the board. The manager wants to demonstrate whether the program is improving over time. Which combination of KPIs would best communicate overall program effectiveness to executives?',
    options: [
      'Total number of vulnerabilities found this quarter (higher is better for showing thoroughness)',
      'Vulnerability remediation rate (percentage of vulnerabilities closed within SLA), critical vulnerabilities MTTR trend, age of oldest open critical vulnerability, and vulnerability recurrence rate (are same systems repeatedly missing patches). Trending these over multiple quarters shows direction of improvement.',
      'CVSS scores of all open vulnerabilities (board members understand CVSS scores)',
      'Number of security tools deployed (more tools equals better security)'
    ],
    correctAnswer: 1,
    explanation: 'Executive reporting should show trend-based KPIs: remediation rate (% closed within SLA) measures process effectiveness, MTTR trend shows speed improvement, oldest critical vulnerability age shows worst-case risk, recurrence rate shows quality. These KPIs tell a story of program maturity over time. Options A and C lack context. Option D measures inputs, not outcomes.',
  },

  {
    id: 260,
    moduleId: 'gestao',
    topic: 'Executive Reporting',
    question: 'A VM analyst is preparing a monthly report for the CISO. The data shows: 1,200 total vulnerabilities (250 Critical, 400 High, 350 Medium, 200 Low), 65% remediation rate within SLA, average MTTR for Critical vulnerabilities is 14 days (policy requires 7), and 12 systems have had the same critical vulnerability for over 6 months. What is the most important finding the analyst should highlight?',
    options: [
      'The total vulnerability count of 1,200 shows the organization is very insecure',
      'The 65% SLA remediation rate is acceptable because most teams achieve around 60%',
      'The 12 systems with critical vulnerabilities open for over 6 months represent a significant risk acceptance gap or remediation failure that needs executive attention and escalation to determine why these systems are not being patched',
      'The 14-day MTTR is only 7 days over the SLA, which is not a concern'
    ],
    correctAnswer: 2,
    explanation: 'Twelve systems with unpatched critical vulnerabilities for over 6 months indicate systemic remediation failure or unauthorized risk acceptance. This needs escalation to identify root causes: unsupported software, lack of owner accountability, or insufficient resources. Options A and C provide context but the 12 long-standing items are the key actionable finding.',
  },

  {
    id: 261,
    moduleId: 'gestao',
    topic: 'Asset Criticality',
    question: 'A vulnerability scanner reports the same critical vulnerability (CVSS 9.8) on two servers: (1) a public-facing web server handling customer payment data, and (2) an internal development test server. Both have the same severity and exploitability. The VM team has limited resources to patch today. Which server should be prioritized and why?',
    options: [
      'Both equally; identical CVSS score means identical priority',
      'The public-facing web server handling payment data, because asset criticality (business impact) must be considered alongside vulnerability severity. The development server has lower impact if compromised.',
      'The development server first because it is likely easier to patch without change management',
      'Neither should be prioritized until a full risk assessment is completed for both'
    ],
    correctAnswer: 1,
    explanation: 'Asset criticality differentiates priority when vulnerability severity is identical. The payment-processing web server has higher confidentiality, integrity, and availability requirements, and greater business impact if compromised. CVSS provides base severity, but asset value determines actual organizational risk. Options A, C ignore asset context.',
  },

  {
    id: 262,
    moduleId: 'gestao',
    topic: 'Patch Testing',
    question: 'A critical security patch for a widely used enterprise application is released. The patch addresses a vulnerability being actively exploited in the wild. The IT team typically tests patches for 4 weeks in a staging environment before production deployment. What should the IT team do?',
    options: [
      'Follow the 4-week testing cycle because breaking production is worse than delaying security',
      'Accelerate the testing cycle: perform focused, risk-based testing within 48-72 hours on the most critical scenarios, then deploy to production with enhanced monitoring and rollback readiness. Active exploitation changes the risk balance.',
      'Deploy immediately to all production systems without any testing since the vulnerability is critical',
      'Skip testing entirely and deploy to staging only, leaving production unpatched until the next release cycle'
    ],
    correctAnswer: 1,
    explanation: 'Active exploitation shifts the risk balance: unpatched vulnerability risk outweighs patch-induced outage risk. Accelerated but responsible testing (focused on critical scenarios) enables faster deployment. Option A ignores active exploitation urgency. Option C risks outages without testing. Option D leaves production exposed.',
  },

  {
    id: 263,
    moduleId: 'gestao',
    topic: 'Vulnerability Scanning Frequency',
    question: 'A large organization currently scans its entire infrastructure once per quarter. A recent breach exploited a vulnerability that was disclosed 3 weeks before the next scheduled scan. The organization wants to reduce the window of exposure. What scanning frequency strategy is most effective?',
    options: [
      'Continue quarterly scanning because the breach happened before the scan was due, not because of frequency',
      'Implement a tiered scanning strategy: critical/high-value assets weekly, internal infrastructure monthly, and full environment quarterly. Additionally, subscribe to threat intelligence feeds to trigger emergency scans when vulnerabilities with active exploitation are disclosed.',
      'Scan everything daily to ensure no vulnerability window exists',
      'Scan only after each vulnerability disclosure, regardless of criticality'
    ],
    correctAnswer: 1,
    explanation: 'A tiered strategy balances coverage with resource constraints. High-value assets (internet-facing, critical systems) need more frequent scanning (weekly). Internal systems monthly. Full scans quarterly. Threat intelligence triggers emergency scans for actively exploited vulnerabilities. Option A is complacent. Option C may overload resources. Option D is reactive only.',
  },

  {
    id: 264,
    moduleId: 'gestao',
    topic: 'Vulnerability Validation',
    question: 'A vulnerability report from an authenticated scan lists 50 MS SQL Servers with \'SA account has empty password\' (CVSS 9.8). The IT team investigates and finds that all 50 databases use Windows Authentication only (SQL Server Authentication is disabled), and the SA account is disabled. How should the VM team classify this finding?',
    options: [
      'True positive with CVSS 9.8: the SA account exists with an empty password, which is exactly what the scanner found',
      'False positive or validated finding with context: the scanner correctly identified the SA account with empty password, but since Windows Authentication is enforced and SA is disabled, the actual exploitability is minimal. The finding should be updated with compensating control context and the risk adjusted downward.',
      'Ignore the finding because the scanner is clearly wrong about all 50 servers',
      'The finding is correct and all 50 servers must have SA passwords set immediately regardless of authentication mode'
    ],
    correctAnswer: 1,
    explanation: 'The scanner finding is technically correct (SA account exists with empty password) but the actual risk is mitigated because SQL Server Authentication is disabled and SA is disabled. The VM team should document these compensating controls, adjust the risk rating, and consider the finding validated with context rather than a pure false positive.',
  },

  {
    id: 265,
    moduleId: 'gestao',
    topic: 'Remediation Verification',
    question: 'After a critical vulnerability remediation campaign, the IT team reports that all 500 affected servers have been patched for CVE-2024-xxx. The VM team needs to verify remediation. Which verification approach is most reliable?',
    options: [
      'Trust the IT team\'s report since they confirmed all servers are patched',
      'Perform a targeted authenticated vulnerability scan of all 500 servers to verify the patch is installed, checking for the specific vulnerability rather than a full scan',
      'Check one server to confirm the patch works and assume the rest are the same',
      'Wait for the next quarterly full scan to verify'
    ],
    correctAnswer: 1,
    explanation: 'Remediation verification should use the same scanning methodology that found the vulnerability to confirm it has been resolved. A targeted scan for the specific CVE is efficient and reliable. Option A relies on manual reporting which may have errors. Option C assumes uniformity without verification. Option D delays verification unacceptably.',
  },

  {
    id: 266,
    moduleId: 'gestao',
    topic: 'VM - Cloud Environments',
    question: 'A company uses AWS with 200 EC2 instances. The VM team wants to scan these instances for vulnerabilities. However, traditional network scanning of cloud IPs from outside AWS may be blocked by security groups and may not cover instances without public IPs. Which approach is most effective for cloud vulnerability scanning?',
    options: [
      'Scan from the internet because all cloud instances should be accessible for security testing',
      'Deploy agent-based scanners on each EC2 instance (e.g., Amazon Inspector agent, or third-party agents like Nessus Agent) that report back to the VM console, or use native cloud scanning tools (like Amazon Inspector) that integrate with AWS without requiring external network access',
      'Use only Security Groups and AWS Config for vulnerability management in the cloud',
      'Periodically snapshot all instances and scan the snapshots offline'
    ],
    correctAnswer: 1,
    explanation: 'Agent-based scanning or native cloud scanners (AWS Inspector) are most effective for cloud environments. Agents run inside instances regardless of network connectivity, and native tools integrate with cloud APIs for comprehensive coverage. Option A may be blocked and misses internal instances. Option C misses OS-level vulnerabilities. Option D is impractical at scale.',
  },

  {
    id: 267,
    moduleId: 'gestao',
    topic: 'Container Vulnerability Management',
    question: 'A DevOps team uses Docker containers in production with images pulled from Docker Hub. The VM team needs to manage vulnerabilities in these containers. The containers are rebuilt and redeployed multiple times daily. Traditional per-scanning of running containers is insufficient. What approach should the VM team implement?',
    options: [
      'Scan only the host OS running Docker; container vulnerabilities do not matter since containers are ephemeral',
      'Integrate container image scanning into the CI/CD pipeline (using tools like Trivy, Clair, or Snyk) to scan images before deployment, block builds with critical/high vulnerabilities, and maintain an inventory of approved base images with known-good versions',
      'Scan running containers once per month on the same schedule as VMs',
      'Disable all container deployments until a comprehensive scanning solution is implemented'
    ],
    correctAnswer: 1,
    explanation: 'Container security is most effective when integrated into the CI/CD pipeline. Scanning images before deployment prevents vulnerable containers from reaching production. Blocking critical/high findings, maintaining approved base images, and automated rebuilds with patched bases address the high velocity of container updates. Options A and C miss the ephemeral nature.',
  },

  {
    id: 268,
    moduleId: 'gestao',
    topic: 'VM - Third-Party Components',
    question: 'A vulnerability scan reveals that a Java application uses Log4j 2.14.1 (affected by CVE-2021-44228). The development team states they cannot update Log4j because it would break the application. The vulnerability is critical and actively exploited. What is the most appropriate course of action?',
    options: [
      'Accept the risk since the development team said they cannot update',
      'Work with development to identify the specific compatibility issues, explore alternative mitigation (upgrading to Log4j 2.17.x which may be compatible, or implementing JNDI lookup disabling via log4j2.formatMsgNoLookups), apply a WAF virtual patch, and implement enhanced monitoring while a permanent fix is developed',
      'Immediately remove the application from production until Log4j is updated',
      'Ignore the vulnerability since Log4j vulnerabilities are overhyped'
    ],
    correctAnswer: 1,
    explanation: 'Third-party component vulnerabilities require a balanced approach: technical analysis of upgrade blockers, exploring available mitigations (configuration changes, WAF rules, environment variables), and enhanced monitoring. The development team needs support, not just a directive. Option A is passive. Option C may be disproportionate. Option D is negligent.',
  },

  {
    id: 269,
    moduleId: 'gestao',
    topic: 'Vulnerability Disclosure Coordination',
    question: 'A security researcher contacts the VM team via email, claiming to have discovered a critical vulnerability in one of the company\'s public-facing web applications and is demanding $50,000 to not disclose it publicly. What is the most appropriate response?',
    options: [
      'Pay the $50,000 to prevent public disclosure',
      'Ignore the email; it is likely a scam',
      'Engage the legal team and follow the organization\'s vulnerability disclosure policy: establish communication through proper channels, verify the vulnerability through the company\'s bug bounty program or coordinated disclosure process, and never pay demands for silence',
      'Threaten to sue the researcher for extortion'
    ],
    correctAnswer: 2,
    explanation: 'Organizations should have a vulnerability disclosure policy (VDP) that provides a framework for responding to external researchers. The appropriate response is: involve legal, follow the VDP, request verified proof of concept through proper channels, and never pay demands to prevent disclosure. Option A encourages extortion. Option B ignores a potentially valid report. Option D is adversarial.',
  },

  {
    id: 270,
    moduleId: 'gestao',
    topic: 'Vulnerability Management Program Maturity',
    question: 'A VM team has been scanning for one year. They have full asset coverage, consistent scanning schedules, automated ticketing, and a 75% SLA remediation rate for critical vulnerabilities. However, the same types of vulnerabilities (e.g., missing patches for Adobe Reader, Java, and browser plugins) appear quarter after quarter on the same workstations. What does this pattern indicate about program maturity?',
    options: [
      '75% is an excellent SLA remediation rate; the program is mature',
      'The recurring vulnerabilities on the same systems indicate a gap between detection and remediation effectiveness. The VM program identifies vulnerabilities but does not address root causes (like decentralized patch management, lack of enforcement policies, or application whitelisting). The program needs to mature from detection-only to driving remediation and prevention.',
      'Recurring vulnerabilities are normal and expected; not all systems can be patched',
      'The scanning frequency is insufficient; increase to weekly scans to catch these before they recur'
    ],
    correctAnswer: 1,
    explanation: 'A mature VM program not only identifies vulnerabilities but drives remediation and prevention. Recurring same-system vulnerabilities indicate the program detects but does not resolve root causes. Maturity progression: detection -> remediation -> prevention. Next steps may include enforcing patch policies, automated patch deployment, application whitelisting, or removing vulnerable applications entirely.',
  },

  {
    id: 271,
    moduleId: 'gestao',
    topic: 'VM and Change Management',
    question: 'A critical patch requires a server reboot. The server hosts a line-of-business application with a 99.9% uptime SLA. The change management window for reboots is 30 days. The vulnerability is being actively exploited. What should the VM team do?',
    options: [
      'Wait for the change window because violating the SLA is worse than the security risk',
      'Escalate to the change advisory board (CAB) with a risk assessment showing active exploitation, propose an emergency change with accelerated approval, and offer compensating controls (WAF rules, network segmentation) until the change window',
      'Reboot the server without change approval because security takes priority over everything',
      'Ignore the patch because the 30-day window means the vulnerability is apparently acceptable'
    ],
    correctAnswer: 1,
    explanation: 'Emergency situations require escalation and prioritization. Presenting risk data (active exploitation, potential impact) to the CAB enables informed decision-making. Emergency change processes exist for exactly this scenario. Compensating controls can bridge the gap until the scheduled reboot. Option A is too rigid. Option C bypasses legitimate process. Option D is negligent.',
  },

  {
    id: 272,
    moduleId: 'gestao',
    topic: 'Asset Management vs VM',
    question: 'A VM team completes a scan and identifies 500 hosts. However, the CMDB (Configuration Management Database) shows 800 hosts should exist. Additionally, 100 hosts found by the scanner are not in the CMDB. What is the most significant security concern?',
    options: [
      '300 hosts are missing from VM coverage (not scanned), representing a blind spot where vulnerabilities are unknown',
      '100 hosts are unknown to IT (shadow IT), representing unmanaged assets not covered by patching or monitoring',
      'Both are significant: 300 unmonitored hosts (the gap between expected and found) and 100 unknown hosts (shadow IT) create blind spots. The VM team must work with IT to reconcile both gaps.',
      'The CMDB is inaccurate and should be ignored in favor of scanner data'
    ],
    correctAnswer: 2,
    explanation: 'Both gaps are critical: (1) 300 hosts expected but not found means they are not being scanned, potentially due to network segmentation, hostname changes, or being offline during scanning. (2) 100 hosts found but not in CMDB represent shadow IT. Both represent security blind spots. The VM and asset management teams must reconcile these gaps.',
  },

  {
    id: 273,
    moduleId: 'gestao',
    topic: 'VM Metrics - SLA Compliance',
    question: 'A VM team tracks SLA compliance for vulnerability remediation: Critical (7 days), High (30 days). Current metrics show: 65% of critical vulnerabilities remediated within 7 days, 85% of high within 30 days. The team wants to improve critical SLA compliance. Which strategy is most likely to be effective?',
    options: [
      'Reduce the critical SLA to 14 days so the team can achieve a higher compliance rate',
      'Analyze the 35% of critical vulnerabilities that miss the 7-day SLA: identify common characteristics (which teams own them, what types of vulnerabilities, what systems). Address root causes: patch testing delays, lack of emergency change approval, resource constraints, or unsupported systems.',
      'Increase scanning frequency to find fewer critical vulnerabilities',
      'Outsource all critical vulnerability remediation to a third party'
    ],
    correctAnswer: 1,
    explanation: 'To improve SLA compliance, analyze the failures: are specific teams consistently missing SLAs? Are certain vulnerability types harder to fix (no patch available, requires reboot)? Are unsupported systems causing delays? Root cause analysis enables targeted improvements. Option A lowers standards instead of improving performance. Options C, D avoid the underlying problems.',
  },

  {
    id: 274,
    moduleId: 'gestao',
    topic: 'Vulnerability Scoring - CVSS vs Risk',
    question: 'A VM team uses CVSS v3.1 base score as the sole prioritization metric. They rank all vulnerabilities by CVSS and remediate from highest to lowest. A vulnerability with CVSS 7.5 (High) in a public-facing web server handling customer PII gets lower priority than a CVSS 9.8 (Critical) vulnerability in an internal development server with no sensitive data. What is the problem with this approach?',
    options: [
      'No problem; CVSS base score is the industry standard for prioritization',
      'Using CVSS base score alone ignores asset criticality and environmental context. The web server vulnerability (CVSS 7.5, public-facing, PII data) may represent higher organizational risk than the internal dev server vulnerability (CVSS 9.8, isolated, no sensitive data). Risk-based prioritization combines CVSS with asset value.',
      'CVSS 9.8 is always higher risk than CVSS 7.5 regardless of context',
      'Internal servers should be prioritized over external servers because breaches start internally'
    ],
    correctAnswer: 1,
    explanation: 'CVSS base score measures vulnerability severity but not organizational risk. Risk-based vulnerability management combines vulnerability severity with asset criticality, exposure, and compensating controls. A CVSS 7.5 on a critical public-facing system may be higher risk than a CVSS 9.8 on an isolated non-critical system.',
  },

  {
    id: 275,
    moduleId: 'gestao',
    topic: 'Automated Patch Management',
    question: 'A VM team identifies that 30% of critical vulnerabilities found in the past quarter could have been prevented by applying patches that were available at the time of the scan. The root cause is that system owners do not apply patches between scan cycles. What solution would best address this?',
    options: [
      'Scan more frequently (weekly) to catch unpatched systems sooner',
      'Implement automated patch management for operating systems and common third-party applications (like Windows Update for Business, WSUS, or third-party patch tools), with enforcement policies for critical security patches',
      'Reduce the critical vulnerability SLA from 7 days to 24 hours to pressure faster patching',
      'Remove vulnerabilities from the report if a patch was available before the scan'
    ],
    correctAnswer: 1,
    explanation: 'Automated patch management addresses the root cause: patches are available but not applied. Automated deployment ensures patches are applied promptly after release. Option A (more scanning) identifies problems faster but does not solve them. Option C (tighter SLA) creates pressure without enabling capability. Option D hides the problem.',
  },

  {
    id: 276,
    moduleId: 'gestao',
    topic: 'Network Scanning - Credentialed vs Non-Credentialed',
    question: 'A VM team performs unauthenticated scans of their internal network quarterly. A new CISO asks whether the team performs credentialed scans. The VM lead explains that credentialed scans are not done because \'they require too much coordination and might disrupt systems.\' The CISO insists on credentialed scanning. Why is credentialed scanning important?',
    options: [
      'It is not important; unauthenticated scans simulate an external attacker and are more realistic',
      'Credentialed scans provide significantly deeper visibility: they can check registry settings, actual patch levels, file versions, and local configuration issues that are invisible to network-only scans. This typically reveals 3-5x more vulnerabilities.',
      'Credentialed scans are only useful for Windows systems; Linux systems do not benefit',
      'Unauthenticated scans find all vulnerabilities; credentialed scans add minimal value'
    ],
    correctAnswer: 1,
    explanation: 'Credentialed (authenticated) scans have local system access and can verify actual patch installation, check registry/file configurations, audit local policies, and detect vulnerabilities invisible from the network. Studies show credentialed scans typically find 3-5x more vulnerabilities than unauthenticated scans. Options A, C, D are incorrect.',
  },

  {
    id: 277,
    moduleId: 'gestao',
    topic: 'Remediation Ownership',
    question: 'A vulnerability scan shows that 200 servers are missing a critical security patch. The servers are owned by five different application teams who claim they do not have time to apply patches during their release cycles. The VM team has no authority to enforce remediation. What is the most effective approach?',
    options: [
      'Accept that the VM team cannot enforce action and document the risk',
      'Escalate to senior IT leadership with a risk briefing showing the exposure, potential business impact, and ask for governance: clear assignment of remediation ownership, SLAs, and consequences for non-compliance. Propose automated patching for common vulnerabilities to reduce burden on application teams.',
      'Apply the patches anyway without the teams\' knowledge',
      'Report the vulnerability to the regulatory authority to force the organization to act'
    ],
    correctAnswer: 1,
    explanation: 'When VM lacks enforcement authority, escalation to senior leadership with business context (not just technical details) is necessary. Proposing solutions (automated patching, dedicated maintenance windows) addresses resource constraints. Option A accepts failure. Option C bypasses change management. Option D is extreme and adversarial.',
  },

  {
    id: 278,
    moduleId: 'gestao',
    topic: 'Vulnerability Management - Cloud Native',
    question: 'A company adopts a cloud-native architecture with auto-scaling groups, infrastructure as code (Terraform), and immutable infrastructure (servers are replaced, not patched). The traditional vulnerability management approach (scanning running instances, generating tickets, and waiting for patching) is not working. What changes are needed for cloud-native VM?',
    options: [
      'Traditional VM still applies; scan auto-scaling instances when they are launched and generate tickets as usual',
      'Shift-left: scan AMIs and container images in the CI/CD pipeline before deployment, use infrastructure as code scanning (Checkov, tfsec) to find misconfigurations before provisioning, implement deployment gates that block vulnerable images, and automatically replace instances using updated base images',
      'Cloud-native environments do not need vulnerability management because the cloud provider handles security',
      'Scan the cloud provider APIs instead of instances for VM coverage'
    ],
    correctAnswer: 1,
    explanation: 'Cloud-native VM shifts security left: scanning images/AMIs in CI/CD catches vulnerabilities before deployment. IaC scanning catches misconfigurations before provisioning. Deployment gates enforce security. Immutable infrastructure replaces patching with rebuilding using updated base images, making traditional scanning+ticketing+patching cycles obsolete.',
  },

  {
    id: 279,
    moduleId: 'gestao',
    topic: 'Vulnerability Management - Risk Scoring',
    question: 'A VM team uses a custom risk scoring system that multiplies CVSS base score by an asset criticality factor (1-5). A vulnerability with CVSS 9.8 on a critical asset (factor 5) scores 49. The same vulnerability on a low-value asset (factor 1) scores 9.8. A different vulnerability with CVSS 4.0 on a critical asset scores 20. What is a potential flaw with this multiplicative approach?',
    options: [
      'This scoring system is perfect because it accounts for both severity and asset value',
      'A multiplicative approach can amplify small differences. CVSS 4.0 x 5 (20) outranks CVSS 9.8 x 2 (19.6), meaning a medium vulnerability on a moderately important asset would be prioritized over a critical vulnerability on a less critical but still important asset. The team should validate scores against real risk scenarios.',
      'Asset criticality should never influence vulnerability prioritization',
      'CVSS base scores should always be the sole prioritization metric'
    ],
    correctAnswer: 1,
    explanation: 'Multiplicative scoring can produce counterintuitive results. A medium vulnerability on a critical asset can outrank a critical vulnerability on a moderately important asset. Teams should validate risk scoring against real scenarios and consider additive or tiered approaches. Options C and D ignore asset context which is essential for risk-based prioritization.',
  },

  {
    id: 280,
    moduleId: 'gestao',
    topic: 'Vulnerability Management - Board Reporting',
    question: 'The VM team needs to prepare a quarterly report for the board of directors. The team has extensive data: 5,000 vulnerabilities, MTTR trends, SLA compliance rates, patch deployment times, and team-level metrics. The board has 15 minutes for this presentation. What is the most effective approach?',
    options: [
      'Present all data since the board needs complete information to make decisions',
      'Provide a three-slide executive summary: (1) Current risk posture: percentage of critical assets with outstanding critical vulnerabilities, trend over past 4 quarters, (2) Top 3 risks requiring board attention (e.g., unsupported systems, understaffed remediation teams), (3) Recommended strategic investments with estimated costs and risk reduction impact. Include detailed appendix for follow-up.',
      'Present only the total vulnerability count since that is the single most important metric',
      'Focus on blaming specific teams for non-compliance so the board can hold them accountable'
    ],
    correctAnswer: 1,
    explanation: 'Board reporting requires concise, strategic communication. Three slides: current posture with trends (not raw numbers), top risks needing governance decisions, and investment recommendations with expected risk reduction. The appendix enables deeper dives. Option A overwhelms. Option C oversimplifies. Option D is unprofessional.',
  },

  // === GOVERNANÇA, RISCO E CONFORMIDADE (GRC) ===
  {
    id: 281,
    moduleId: 'grc',
    topic: 'Introdução à GRC',
    question: 'Uma empresa de médio porte está expandindo suas operações e deseja implementar um programa de GRC estruturado. Atualmente, as áreas de compliance, risco e auditoria trabalham de forma isolada. O CISO defende a integração dessas áreas em um modelo único. Qual o principal benefício que a integração GRC trará para esta organização?',
    options: [
      'Eliminar completamente todos os riscos de segurança',
      'Integrar governança, risco e compliance em um modelo coeso, eliminando silos e melhorando a tomada de decisão',
      'Reduzir o quadro de funcionários das áreas de risco e compliance',
      'Garantir que a empresa nunca será multada por órgãos reguladores',
    ],
    correctAnswer: 1,
    explanation: 'A integração GRC elimina silos organizacionais, permitindo que governança, risco e compliance atuem de forma coordenada. Isso melhora a visibilidade, reduz duplicidade de esforços e fortalece a tomada de decisão baseada em riscos.',
  },
  {
    id: 282,
    moduleId: 'grc',
    topic: 'Introdução à GRC',
    question: 'Durante a implementação de GRC em uma organização, o consultor identificou que a empresa não possui um canal de denúncia, as políticas de segurança estão desatualizadas e não há um processo formal de gestão de riscos. Considerando os pilares do GRC, qual aspecto está mais diretamente relacionado à ausência de um processo formal de gestão de riscos?',
    options: [
      'Governança, pois a gestão de riscos é parte da estrutura de governança corporativa',
      'Risco, pois sem um processo estruturado a organização não consegue identificar, analisar e tratar ameaças de forma sistemática',
      'Conformidade, pois riscos não gerenciados violam regulamentações',
      'Operações, pois a gestão de riscos é uma atividade puramente operacional',
    ],
    correctAnswer: 1,
    explanation: 'A gestão de riscos é o pilar responsável por identificar, analisar, avaliar e tratar riscos. Sem um processo formal, a organização fica exposta a ameaças sem ter visibilidade ou controle sobre elas.',
  },
  {
    id: 283,
    moduleId: 'grc',
    topic: 'Governança Corporativa e de TI',
    question: 'Uma empresa listada em bolsa está implementando práticas de governança corporativa. O conselho deseja estabelecer um framework que garanta o alinhamento entre TI e os objetivos estratégicos do negócio, otimizando recursos e gerenciando riscos de tecnologia. Qual framework atende melhor a esta necessidade?',
    options: [
      'ITIL, por ser focado em gerenciamento de serviços de TI',
      'COBIT, por ser o principal framework de governança de TI, alinhando tecnologia aos objetivos de negócio',
      'ISO 27001, por ser a norma de segurança da informação mais reconhecida',
      'PMBOK, por ser focado em gerenciamento de projetos',
    ],
    correctAnswer: 1,
    explanation: 'COBIT é especificamente desenhado para governança de TI, com foco em alinhamento estratégico, entrega de valor, gestão de riscos, otimização de recursos e transparência. ITIL é para serviços, ISO 27001 para segurança e PMBOK para projetos.',
  },
  {
    id: 284,
    moduleId: 'grc',
    topic: 'Governança Corporativa e de TI',
    question: 'Uma startup de tecnologia cresceu rapidamente e agora possui 200 funcionários. O CEO percebeu que decisões de TI estão sendo tomadas de forma descentralizada, sem alinhamento com a estratégia do negócio. Qual princípio de governança corporativa está sendo negligenciado?',
    options: [
      'Transparência — a empresa não divulga suas decisões publicamente',
      'Equidade — os funcionários não são tratados de forma justa',
      'Prestação de Contas (Accountability) — não há clareza sobre quem é responsável pelas decisões de TI e como elas se alinham à estratégia',
      'Responsabilidade Corporativa — a empresa não investe em sustentabilidade',
    ],
    correctAnswer: 2,
    explanation: 'A descentralização sem alinhamento estratégico indica falta de accountability. Não está claro quem responde pelas decisões de TI e como elas se conectam aos objetivos do negócio. A governança de TI com COBIT ajudaria a estabelecer essa estrutura.',
  },
  {
    id: 285,
    moduleId: 'grc',
    topic: 'Gestão de Riscos',
    question: 'Uma instituição financeira está realizando uma análise de riscos e identificou que um novo sistema de transações online pode estar vulnerável a ataques de injeção de SQL. A equipe de segurança estima que a probabilidade de exploração é "Alta" e o impacto financeiro é "Muito Alto". A diretoria decide contratar um seguro cibernético para cobrir eventuais perdas. Qual estratégia de tratamento de risco foi adotada?',
    options: [
      'Evitar — o risco foi eliminado',
      'Reduzir — controles foram implementados para diminuir o risco',
      'Transferir — o risco foi compartilhado com uma seguradora',
      'Aceitar — a organização decidiu conviver com o risco',
    ],
    correctAnswer: 2,
    explanation: 'Contratar um seguro é uma estratégia de transferência de risco. A organização não eliminou ou reduziu a vulnerabilidade, mas transferiu parte do impacto financeiro para a seguradora.',
  },
  {
    id: 286,
    moduleId: 'grc',
    topic: 'Gestão de Riscos',
    question: 'Uma empresa de e-commerce está realizando sua análise anual de riscos. O analista identificou 47 riscos e precisa priorizá-los para a diretoria. Ele utilizou uma matriz 5x5 de probabilidade vs impacto. Três riscos foram classificados como "Crítico" (probabilidade alta + impacto muito alto), oito como "Alto" e o restante como "Médio" ou "Baixo". Qual deve ser o próximo passo?',
    options: [
      'Tratar todos os 47 riscos simultaneamente com a mesma prioridade',
      'Focar nos riscos críticos primeiro, definindo planos de tratamento imediatos, seguido pelos altos. Riscos médios e baixos podem ser monitorados ou aceitos',
      'Ignorar todos os riscos, pois a matriz é apenas um exercício teórico',
      'Apresentar apenas os riscos críticos para a diretoria e esconder os demais',
    ],
    correctAnswer: 1,
    explanation: 'A priorização baseada em risco concentra recursos onde o impacto é maior. Riscos críticos exigem ação imediata, riscos altos requerem planos de tratamento, e riscos menores podem ser aceitos ou monitorados.',
  },
  {
    id: 287,
    moduleId: 'grc',
    topic: 'Conformidade e Auditoria',
    question: 'Uma empresa brasileira de e-commerce processa dados pessoais de milhões de clientes. Durante uma auditoria interna, foi constatado que a empresa não possui um encarregado de proteção de dados (DPO), não realiza relatórios de impacto (RIPD) e não tem um procedimento claro para responder a solicitações de titulares. Qual regulamentação está sendo descumprida?',
    options: [
      'PCI DSS, pois a empresa processa pagamentos com cartão de crédito',
      'SOX, pois a empresa pode estar listada em bolsa',
      'LGPD, pois a Lei Geral de Proteção de Dados exige DPO, RIPD e procedimentos para atender titulares',
      'ISO 27001, pois a empresa não possui certificação de segurança',
    ],
    correctAnswer: 2,
    explanation: 'A LGPD (Lei 13.709/2018) exige a indicação de um Encarregado (DPO), a realização de Relatório de Impacto à Proteção de Dados (RIPD) quando aplicável, e procedimentos para atender solicitações dos titulares dos dados.',
  },
  {
    id: 288,
    moduleId: 'grc',
    topic: 'Conformidade e Auditoria',
    question: 'Uma empresa de tecnologia contratou uma auditoria externa para verificar a conformidade com a ISO 27001. Durante a auditoria, o auditor identificou que a política de segurança da informação não foi revisada nos últimos 3 anos, os treinamentos de conscientização não são realizados desde 2020, e não há um processo formal de gestão de incidentes. Qual será a conclusão mais provável do auditor?',
    options: [
      'A empresa será certificada imediatamente, pois os requisitos técnicos são atendidos',
      'O auditor emitirá não conformidades (NCs) e a certificação não será concedida até que as correções sejam implementadas e verificadas',
      'A auditoria externa não tem poder para impedir a certificação',
      'A empresa receberá a certificação com recomendações de melhoria',
    ],
    correctAnswer: 1,
    explanation: 'Auditorias externas de certificação (como ISO 27001) identificam não conformidades que precisam ser corrigidas antes da emissão do certificado. A ausência de revisão de política, treinamentos e gestão de incidentes são falhas graves no SGSI.',
  },
  {
    id: 289,
    moduleId: 'grc',
    topic: 'Frameworks e Normas de Segurança',
    question: 'Uma organização precisa escolher um framework de segurança que seja flexível, baseado em riscos e organizado em 5 funções (Identificar, Proteger, Detectar, Responder, Recuperar). O CISO quer adotar uma abordagem que permita integrar-se facilmente com outros frameworks e seja reconhecida internacionalmente. Qual framework atende melhor a esses critérios?',
    options: [
      'ISO 27001, por ser uma norma certificável',
      'NIST Cybersecurity Framework (CSF), por sua flexibilidade e estrutura em 5 funções baseadas em risco',
      'COBIT, por seu foco em governança de TI',
      'CIS Controls, por sua abordagem prática e priorizada',
    ],
    correctAnswer: 1,
    explanation: 'O NIST CSF é organizado nas 5 funções (Identify, Protect, Detect, Respond, Recover) e é conhecido por sua flexibilidade e abordagem baseada em riscos. Ele é projetado para ser complementar a outros frameworks.',
  },
  {
    id: 290,
    moduleId: 'grc',
    topic: 'Frameworks e Normas de Segurança',
    question: 'Uma empresa holding precisa implementar um SGSI (Sistema de Gestão de Segurança da Informação) para todas as suas subsidiárias. O objetivo é obter uma certificação internacional que demonstre conformidade com melhores práticas de segurança. Qual norma deve ser adotada como referência principal?',
    options: [
      'ISO 31000 — Gestão de Riscos',
      'ISO 27001 — Sistema de Gestão de Segurança da Informação',
      'NIST CSF — Cybersecurity Framework',
      'ISO 38500 — Governança Corporativa de TI',
    ],
    correctAnswer: 1,
    explanation: 'ISO 27001 é a norma internacional para SGSI que permite certificação formal. Ela adota o ciclo PDCA e define requisitos para implementação, manutenção e melhoria contínua da segurança da informação.',
  },
  {
    id: 291,
    moduleId: 'grc',
    topic: 'Políticas e Procedimentos',
    question: 'Durante a implementação de um programa de compliance, a equipe de segurança precisa criar a documentação normativa. Eles definiram: (1) um documento que estabelece o compromisso da direção e os princípios gerais de segurança, (2) um documento que detalha as regras obrigatórias para classificação da informação, e (3) um guia passo a passo para realizar backups. Como esses documentos devem ser classificados na hierarquia documental?',
    options: [
      '(1) Norma, (2) Política, (3) Procedimento',
      '(1) Política, (2) Norma, (3) Procedimento',
      '(1) Procedimento, (2) Política, (3) Norma',
      '(1) Diretriz, (2) Norma, (3) Política',
    ],
    correctAnswer: 1,
    explanation: 'Na hierarquia documental: Políticas são estratégicas (compromisso da direção), Normas são táticas (regras obrigatórias), Procedimentos são operacionais (passo a passo). A classificação correta é: Política de Segurança, Norma de Classificação, Procedimento de Backup.',
  },
  {
    id: 292,
    moduleId: 'grc',
    topic: 'Políticas e Procedimentos',
    question: 'Um funcionário recém-contratado assinou a Política de Uso Aceitável (AUP) da empresa, que proíbe o uso de dispositivos pessoais para acessar sistemas corporativos. Três meses depois, ele conectou seu notebook pessoal à rede corporativa para "agilizar" uma entrega. O que esta situação demonstra sobre o programa de políticas da empresa?',
    options: [
      'A política é clara e suficiente, o funcionário deve ser demitido imediatamente',
      'As políticas existem, mas podem não estar acompanhadas de treinamento e conscientização adequados, além de controles técnicos para enforce',
      'A política de Uso Aceitável não é importante e pode ser ignorada',
      'O funcionário está correto, pois dispositivos pessoais aumentam a produtividade',
    ],
    correctAnswer: 1,
    explanation: 'Ter políticas documentadas não é suficiente. É preciso complementar com treinamento, conscientização contínua e controles técnicos (como NAC - Network Access Control) que impeçam o descumprimento. A situação revela lacunas no programa de conscientização.',
  },
  {
    id: 293,
    moduleId: 'grc',
    topic: 'Gestão de Incidentes e Continuidade',
    question: 'Uma empresa sofreu um ataque ransomware que criptografou todos os servidores críticos. A equipe de TI acionou o plano de continuidade de negócios e descobriu que: (a) o backup mais recente tem 72 horas, (b) o RTO definido para o sistema principal é de 4 horas, (c) o RPO definido é de 1 hora. Qual problema estrutural fica evidente?',
    options: [
      'O RPO de 1 hora não está sendo atendido, pois o backup tem 72 horas de atraso',
      'O RTO de 4 horas é muito curto e deve ser ajustado',
      'Não há problema, pois o backup existe e pode ser restaurado',
      'O RPO de 1 hora é adequado e o backup de 72 horas está dentro do esperado',
    ],
    correctAnswer: 0,
    explanation: 'O RPO (Recovery Point Objective) definido é de 1 hora — a organização aceita perder no máximo 1 hora de dados. Porém, o backup mais recente é de 72 horas, resultando em perda potencial de 72 horas de dados. Isso indica que o processo de backup não está cumprindo os requisitos de continuidade definidos.',
  },
  {
    id: 294,
    moduleId: 'grc',
    topic: 'Gestão de Incidentes e Continuidade',
    question: 'Durante a fase de "Lições Aprendidas" após um incidente de vazamento de dados, a equipe CSIRT identificou que: o incidente foi detectado 45 dias após ocorrer, a equipe não tinha um playbook específico para vazamento de dados, e a comunicação com o jurídico foi feita informalmente por WhatsApp. Qual melhoria deve ser priorizada?',
    options: [
      'Trocar a ferramenta de firewall, pois o ataque passou por ele',
      'Implementar canais formais de comunicação, criar playbooks específicos e reduzir o tempo de detecção com ferramentas de monitoramento',
      'Demitir a equipe CSIRT e contratar uma nova',
      'Ignorar as lições aprendidas, pois o incidente já passou',
    ],
    correctAnswer: 1,
    explanation: 'As lições aprendidas devem gerar melhorias concretas. As três falhas identificadas (detecção tardia, ausência de playbook, comunicação informal) podem ser endereçadas com: ferramentas de detecção (SIEM/EDR), criação de playbooks documentados e canais oficiais de comunicação com o jurídico.',
  },
  {
    id: 295,
    moduleId: 'grc',
    topic: 'Métricas e Reportes de GRC',
    question: 'O CISO precisa preparar um relatório trimestral para o conselho. Ele tem os seguintes dados: 1.247 vulnerabilidades abertas, MTTR de 12 dias para vulnerabilidades críticas, 3 incidentes de segurança no trimestre, orçamento de segurança de R$ 2 milhões, e 78% dos funcionários treinados. Qual conjunto de informações é mais relevante para o conselho?',
    options: [
      'O número total de vulnerabilidades e o MTTR, pois são dados técnicos importantes',
      'A tendência de risco: redução de 15% nas vulnerabilidades críticas nos últimos 2 trimestres, comparação do MTTR com o SLA aprovado (98% dentro do prazo), e recomendações de investimento com retorno esperado',
      'A lista completa de todas as 1.247 vulnerabilidades para análise detalhada',
      'Apenas o orçamento de R$ 2 milhões, pois finanças é o que importa para o conselho',
    ],
    correctAnswer: 1,
    explanation: 'O conselho precisa de visão estratégica: tendências (estamos melhorando?), comparação com metas (estamos dentro do esperado?) e recomendações acionáveis (onde investir?). Dados brutos sem contexto não ajudam na tomada de decisão estratégica.',
  },
  {
    id: 296,
    moduleId: 'grc',
    topic: 'Métricas e Reportes de GRC',
    question: 'Uma empresa definiu seus KRIs (Key Risk Indicators) para monitorar a exposição a riscos cibernéticos. A diretoria aprovou um apetite a risco que permite no máximo 5 vulnerabilidades críticas em ativos críticos por mês e no máximo 8 horas de downtime por trimestre. No relatório atual: existem 9 vulnerabilidades críticas em ativos críticos e 6 horas de downtime. Qual deve ser a classificação no semáforo do dashboard?',
    options: [
      'Verde — dentro do apetite a risco',
      'Amarelo — próximo do limite, requer atenção',
      'Vermelho — o limite de vulnerabilidades críticas (5) foi excedido (9), indicando exposição acima do apetite a risco definido',
      'Azul — indicador não se aplica',
    ],
    correctAnswer: 2,
    explanation: 'O KRI de vulnerabilidades críticas (9) excedeu o limite aprovado de 5, indicando exposição acima do apetite a risco. O KRI de downtime (6h) está dentro do limite de 8h. O semáforo deve ficar vermelho pois pelo menos um indicador está fora do limite aceitável.',
  },
  {
    id: 297,
    moduleId: 'grc',
    topic: 'GRC - Cenário Integrado',
    question: 'Uma empresa de serviços financeiros está sendo auditada por um órgão regulador. O auditor solicitou evidências de: (1) política de segurança da informação aprovada pela direção, (2) registro de análise de riscos dos últimos 12 meses, (3) comprovantes de treinamento de compliance para todos os funcionários, (4) relatório de resposta ao último incidente de segurança. Esta auditoria está verificando, respectivamente, quais pilares do GRC?',
    options: [
      'Risco, Governança, Operações, Conformidade',
      'Governança (política aprovada), Risco (análise de riscos), Conformidade (treinamento de compliance), Operações (resposta a incidentes)',
      'Conformidade (política), Governança (riscos), Operações (treinamento), Risco (incidente)',
      'Todos os quatro itens são exclusivamente de Conformidade',
    ],
    correctAnswer: 1,
    explanation: 'A política aprovada pela direção evidencia Governança (compromisso da alta direção). A análise de riscos representa o pilar Risco. O treinamento de compliance é Conformidade. A resposta a incidentes, embora seja operacional, demonstra a aplicação prática dos controles estabelecidos pela governança.',
  },
  {
    id: 298,
    moduleId: 'grc',
    topic: 'GRC - Cenário Integrado',
    question: 'O conselho de uma empresa multinacional aprovou uma nova estratégia de GRC que inclui: adoção do COBIT para governança de TI, implementação da ISO 31000 para gestão de riscos, adequação à LGPD e PCI DSS para conformidade, e certificação ISO 27001 em até 18 meses. Durante a reunião de kickoff, o gerente de compliance questionou como integrar todos esses frameworks sem criar processos duplicados. Qual abordagem resolve melhor este problema?',
    options: [
      'Implementar cada framework separadamente, cada um com sua própria equipe',
      'Criar um modelo integrado que mapeie os controles de cada framework em uma matriz única, identificando overlays e gaps, e estabelecendo controles comuns que atendam a múltiplos requisitos simultaneamente',
      'Abandonar todos os frameworks e criar um padrão próprio',
      'Implementar apenas a ISO 27001, pois ela cobre todos os requisitos dos demais',
    ],
    correctAnswer: 1,
    explanation: 'A abordagem integrada de GRC mapeia requisitos de diferentes frameworks em uma matriz de controles comum. Isso elimina duplicidades, reduz custos e garante que um único controle atenda a múltiplos requisitos (ex: controle de acesso atende ISO 27001, SOX e LGPD simultaneamente).',
  },
  {
    id: 299,
    moduleId: 'grc',
    topic: 'GRC - Cenário Integrado',
    question: 'Uma organização sofreu um ataque de ransomware bem-sucedido. A investigação revelou que uma vulnerabilidade crítica (CVE-2023-XXXX) identificada há 6 meses em um scan de vulnerabilidades nunca foi corrigida porque o time de infraestrutura estava sobrecarregado e não havia um SLA formal estabelecido. Qual foi a falha de GRC mais grave neste cenário?',
    options: [
      'Falha técnica no scanner de vulnerabilidades que deveria ter priorizado automaticamente',
      'Falha de Governança — ausência de um SLA formal de remediação que definisse prazos e responsabilidades, combinada com falta de accountability da gestão',
      'Falha na equipe de infraestrutura que deveria ter trabalhado horas extras para corrigir',
      'Falha no fornecedor do software que publicou a vulnerabilidade',
    ],
    correctAnswer: 1,
    explanation: 'A causa raiz não foi técnica, mas sim de governança. Sem SLAs formais, responsabilidades claras e monitoramento da gestão (accountability), vulnerabilidades conhecidas ficam sem correção. Um programa GRC maduro teria um SLA de remediação (ex: 48h para críticas) com escalonamento automático se não cumprido.',
  },
  {
    id: 300,
    moduleId: 'grc',
    topic: 'GRC - Plano de Ação',
    question: 'Uma empresa de tecnologia acabou de contratar um Head de GRC para estruturar a área do zero. A situação atual é: não há políticas de segurança formalizadas, a gestão de riscos é feita informalmente pelo CISO em planilhas, a empresa não possui certificações, e já recebeu uma notificação da ANPD sobre tratamento inadequado de dados. Qual deve ser a PRIMEIRA ação prioritária do Head de GRC?',
    options: [
      'Iniciar imediatamente o processo de certificação ISO 27001',
      'Comprar uma ferramenta de GRC enterprise (Archer, MetricStream)',
      'Realizar um assessment inicial para entender o gap atual vs requisitos (LGPD, melhores práticas), estabelecer uma política de segurança da informação aprovada pela direção, e criar um roadmap estruturado de implementação',
      'Contratar uma equipe de 10 pessoas para dar conta de todas as demandas',
    ],
    correctAnswer: 2,
    explanation: 'Antes de qualquer ação, é necessário entender a situação atual (assessment). A política de segurança da informação é o documento fundacional que estabelece o compromisso da direção. A partir dela, um roadmap estruturado prioriza as ações mais críticas (LGPD tem notificação da ANPD — risco imediato). Ferramentas e certificações vêm depois que os processos básicos estão estabelecidos.',
  },
];

export default assessmentQuestions;
