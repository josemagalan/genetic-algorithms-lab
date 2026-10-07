(function (root) {
  'use strict';
  const messages = {
    es: {
      docTitle: 'Algoritmos genéticos, paso a paso · Herramientas docentes',
      description: 'Herramientas docentes de algoritmos genéticos: explora selección, cruce y mutación paso a paso. Animaciones, práctica y recursos para Moodle en español e inglés.',
      skip: 'Ir a las herramientas', homeLabel: 'GA · Inicio', brand: 'Herramientas docentes', aboutNav: 'Sobre la serie',
      eyebrow: 'Explora · Practica · Compara', titleLine1: 'Algoritmos genéticos,', titleLine2: 'paso a paso.',
      lead: 'De una población de soluciones a la siguiente. Descubre cómo se eligen los padres, se combina su información y se introduce diversidad.',
      choose: 'Elige una herramienta', parents: 'Padres', oneGeneration: 'Una generación', crossAndMutate: 'Cruce + mutación',
      parentA: 'Padre A', parentB: 'Padre B', changedGene: 'Gen mutado',
      heroVisual: 'Dos cromosomas parentales combinan sus genes; una mutación cambia un gen del descendiente.',
      toolsTitle: 'Tres herramientas. Un mismo proceso.', toolsNote: 'Abiertas · Interactivas · ES / EN',
      selectionQuestion: '¿Quién se reproduce?', selectionTitle: 'Selección',
      selectionDesc: 'Elige los padres de la siguiente generación. Explora el equilibrio entre aptitud, presión selectiva y diversidad.',
      selectionTopics: 'Ruleta · SUS · Ranking · Torneo · Reemplazo',
      selectionVisual: 'Los individuos con distinta aptitud pueden seleccionarse como padres.', selectionCode: 'Código de selección en GitHub',
      crossoverQuestion: '¿Cómo se combina la información?', crossoverTitle: 'Cruce',
      crossoverDesc: 'Combina la información de dos padres. Observa qué heredan los hijos y qué conserva cada operador.',
      crossoverTopics: 'Binaria · Real · Permutaciones',
      crossoverVisual: 'Un hijo toma los primeros genes del padre A y los últimos del padre B.', crossoverCode: 'Código de cruce en GitHub',
      mutationQuestion: '¿Cómo aparece la diversidad?', mutationTitle: 'Mutación',
      mutationDesc: 'Introduce cambios aleatorios en una solución. Explora cómo la representación y el tamaño del cambio afectan a la búsqueda.',
      mutationTopics: 'Binaria · Entera · Real · Permutaciones',
      mutationVisual: 'La mutación transforma el tercer bit de 1 a 0 y mantiene el resto.', mutationCode: 'Código de mutación en GitHub',
      openTool: 'Abrir herramienta', cycleTitle: 'Así encajan en el algoritmo', cycleNote: 'El ciclo se repite en cada generación',
      evaluate: 'Evaluación', evaluateHint: 'Mide la aptitud', selectHint: 'Elige los padres', crossHint: 'Combina los genes', mutateHint: 'Introduce variación',
      survive: 'Evaluación y reemplazo', surviveHint: 'Evalúa hijos y elige supervivientes',
      replacementNote: 'El reemplazo también es selección: decide qué individuos pasan a la siguiente generación.', replacementLink: 'Explorarlo →',
      learningEyebrow: 'En clase o por tu cuenta', learningTitle: 'Aprende haciendo.',
      learningLead: 'Las tres herramientas comparten la misma forma de trabajar. Elige un ejemplo y sigue cada decisión del algoritmo.',
      animateTitle: 'Sigue cada paso', animateDesc: 'Animaciones con explicación, pseudocódigo y código en Python y JavaScript.',
      practiceTitle: 'Predice el resultado', practiceDesc: 'Resuelve el ejemplo y comprueba tu respuesta en el modo de práctica.',
      compareTitle: 'Compara alternativas', compareDesc: 'Aplica distintos mecanismos u operadores a los mismos datos.',
      moodleTitle: 'Llévalo a Moodle', moodleDesc: 'Bancos de preguntas para profesorado, con soluciones enlazadas al ejemplo.',
      aboutEyebrow: 'Una serie de herramientas abiertas', aboutTitle: 'Para enseñar y aprender.',
      aboutLead: 'Materiales para cursos de metaheurísticas, computación evolutiva e ingeniería de organización. Desarrollados por miembros del grupo de investigación Los Goonies.',
      licenses: 'Código: MIT · Contenido docente: CC BY 4.0', institutions: 'Instituciones participantes',
      footerText: 'Algoritmos genéticos · Herramientas docentes abiertas', backTop: 'Volver arriba',
    },
    en: {
      docTitle: 'Genetic algorithms, step by step · Teaching tools',
      description: 'Genetic algorithm teaching tools: explore selection, crossover and mutation step by step. Animations, practice and Moodle resources in Spanish and English.',
      skip: 'Skip to the tools', homeLabel: 'GA · Home', brand: 'Teaching tools', aboutNav: 'About the series',
      eyebrow: 'Explore · Practise · Compare', titleLine1: 'Genetic algorithms,', titleLine2: 'step by step.',
      lead: 'From one population of solutions to the next. Discover how parents are selected, their information is combined and diversity is introduced.',
      choose: 'Choose a tool', parents: 'Parents', oneGeneration: 'One generation', crossAndMutate: 'Crossover + mutation',
      parentA: 'Parent A', parentB: 'Parent B', changedGene: 'Mutated gene',
      heroVisual: 'Two parent chromosomes combine their genes; a mutation changes one gene in the offspring.',
      toolsTitle: 'Three tools. One shared process.', toolsNote: 'Open · Interactive · ES / EN',
      selectionQuestion: 'Who reproduces?', selectionTitle: 'Selection',
      selectionDesc: 'Choose the parents of the next generation. Explore the balance between fitness, selection pressure and diversity.',
      selectionTopics: 'Roulette · SUS · Ranking · Tournament · Replacement',
      selectionVisual: 'Individuals with different fitness values can be selected as parents.', selectionCode: 'Selection source code on GitHub',
      crossoverQuestion: 'How is information combined?', crossoverTitle: 'Crossover',
      crossoverDesc: 'Combine information from two parents. See what the offspring inherit and what each operator preserves.',
      crossoverTopics: 'Binary · Real-valued · Permutations',
      crossoverVisual: 'An offspring takes its first genes from parent A and its last genes from parent B.', crossoverCode: 'Crossover source code on GitHub',
      mutationQuestion: 'How does diversity emerge?', mutationTitle: 'Mutation',
      mutationDesc: 'Introduce random changes into a solution. Explore how the representation and the size of the change affect the search.',
      mutationTopics: 'Binary · Integer · Real-valued · Permutations',
      mutationVisual: 'Mutation changes the third bit from 1 to 0 and preserves the others.', mutationCode: 'Mutation source code on GitHub',
      openTool: 'Open tool', cycleTitle: 'How they fit into the algorithm', cycleNote: 'The cycle repeats in each generation',
      evaluate: 'Evaluation', evaluateHint: 'Measure fitness', selectHint: 'Choose the parents', crossHint: 'Combine the genes', mutateHint: 'Introduce variation',
      survive: 'Evaluation & replacement', surviveHint: 'Evaluate offspring and choose survivors',
      replacementNote: 'Replacement is also selection: it decides which individuals enter the next generation.', replacementLink: 'Explore it →',
      learningEyebrow: 'In class or on your own', learningTitle: 'Learn by doing.',
      learningLead: 'All three tools work in the same way. Choose an example and follow each decision made by the algorithm.',
      animateTitle: 'Follow every step', animateDesc: 'Animations with explanations, pseudocode and Python and JavaScript code.',
      practiceTitle: 'Predict the result', practiceDesc: 'Solve the example and check your answer in practice mode.',
      compareTitle: 'Compare alternatives', compareDesc: 'Apply different mechanisms or operators to the same data.',
      moodleTitle: 'Take it to Moodle', moodleDesc: 'Question banks for teachers, with solutions linked to the example.',
      aboutEyebrow: 'A series of open teaching tools', aboutTitle: 'For teaching and learning.',
      aboutLead: 'Resources for courses on metaheuristics, evolutionary computation and industrial engineering. Developed by members of the Los Goonies research group.',
      licenses: 'Code: MIT · Teaching content: CC BY 4.0', institutions: 'Participating institutions',
      footerText: 'Genetic algorithms · Open teaching tools', backTop: 'Back to top',
    },
  };
  const tools = ['selection-ga', 'crossover-ga', 'mutation-ga'];
  function resolveLanguage(search, storedLanguage, browserLanguage) {
    const requested = new URLSearchParams(search).get('lang');
    if (requested === 'es' || requested === 'en') return requested;
    if (storedLanguage === 'es' || storedLanguage === 'en') return storedLanguage;
    return String(browserLanguage || '').toLowerCase().startsWith('en') ? 'en' : 'es';
  }
  function toolHref(tool, language, page) {
    if (!tools.includes(tool)) throw new Error('Unknown teaching tool');
    if (language !== 'es' && language !== 'en') throw new Error('Unsupported language');
    if (page && page !== 'moodle') throw new Error('Unknown tool page');
    const hash = new URLSearchParams();
    if (page) hash.set('page', page);
    hash.set('lang', language);
    return 'https://josemagalan.github.io/' + tool + '/#' + hash;
  }
  const portal = { messages, tools, resolveLanguage, toolHref };
  if (typeof module !== 'undefined' && module.exports) module.exports = portal;
  else root.GAPortal = portal;
})(typeof globalThis !== 'undefined' ? globalThis : this);
