(function (root) {
  'use strict';
  const messages = {
    es: {
      docTitle: 'Algoritmos genéticos, paso a paso · Herramientas docentes',
      description: 'Laboratorio docente de algoritmos genéticos: selección, cruce, mutación, EvoTraveller y SelectionMechanisms. Herramientas interactivas y publicaciones científicas.',
      skip: 'Ir a las herramientas', homeLabel: 'GA · Inicio', brand: 'Herramientas docentes', aboutNav: 'Sobre el proyecto',
      eyebrow: 'Explora · Practica · Compara', titleLine1: 'Algoritmos genéticos,', titleLine2: 'paso a paso.',
      lead: 'De una población de soluciones a la siguiente. Descubre cómo se eligen los padres, se combina su información y se introduce diversidad.',
      choose: 'Elige una herramienta', parents: 'Padres', oneGeneration: 'Una generación', crossAndMutate: 'Cruce + mutación',
      parentA: 'Padre A', parentB: 'Padre B', changedGene: 'Gen mutado',
      heroVisual: 'Dos cromosomas parentales combinan sus genes; una mutación cambia un gen del descendiente.',
      toolsTitle: 'Tres operadores. Un mismo proceso.', toolsNote: 'Abiertas · Interactivas · ES / EN',
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
      labTitle: 'Experimenta a lo largo de generaciones', labNote: 'Del operador a la evolución de la población',
      travellerEyebrow: 'El algoritmo completo', travellerDesc: 'Observa un algoritmo genético aplicado al problema del viajante. Ajusta población, selección, cruce y mutación, y sigue cómo evolucionan las rutas entre generaciones.',
      travellerTopics: 'Rutas · Aptitud · Población · Parámetros del algoritmo', travellerVisual: 'Una ruta cerrada conecta cinco ciudades: el problema del viajante.', travellerCode: 'Código de EvoTraveller en GitHub',
      shinyEyebrow: 'Dinámica de la selección', shinyDesc: 'Compara mecanismos de selección a lo largo de muchas generaciones y simulaciones. Explora cómo la presión selectiva afecta a la convergencia, la aptitud y la diversidad.',
      shinyTopics: 'Selección · Convergencia · Diversidad · Comparación de modelos', shinyVisual: 'Esquema de evolución por generaciones: la aptitud crece y la diversidad disminuye.', shinyCode: 'Código de SelectionMechanisms en GitHub',
      relatedPaper: 'Publicación relacionada ↓', publicationsNav: 'Publicaciones', publicationsTitle: 'Publicaciones relacionadas', publicationsNote: 'La investigación detrás de las herramientas',
      publishedStatus: 'Publicado · 2025', viewPublished: 'Ver publicación en Springer', acceptedStatus: 'Aceptado · Pendiente de publicación',
      acceptedVenue: 'CIO 2026 · Aceptado para publicación en Springer Lecture Notes.', acceptedNote: 'La referencia editorial y el enlace a la publicación se añadirán cuando estén disponibles.',
      creditsScope: 'Equipo de la serie de operadores y SelectionMechanisms',
      evaluate: 'Evaluación', evaluateHint: 'Mide la aptitud', selectHint: 'Elige los padres', crossHint: 'Combina los genes', mutateHint: 'Introduce variación',
      evaluateOffspringHint: 'Mide la aptitud de los hijos', survive: 'Reemplazo', surviveHint: 'Elige los supervivientes',
      replacementNote: 'La herramienta de selección explica tanto la elección de padres como el reemplazo: quién pasa a la siguiente generación.', replacementLink: 'Ver selección y reemplazo →',
      learningEyebrow: 'En clase o por tu cuenta', learningTitle: 'Aprende haciendo.',
      learningLead: 'Las herramientas de selección, cruce y mutación comparten la misma forma de trabajar. Elige un ejemplo y sigue cada decisión del algoritmo.',
      animateTitle: 'Sigue cada paso', animateDesc: 'Animaciones con explicación, pseudocódigo y código en Python y JavaScript.',
      practiceTitle: 'Predice el resultado', practiceDesc: 'Resuelve el ejemplo y comprueba tu respuesta en el modo de práctica.',
      compareTitle: 'Compara alternativas', compareDesc: 'Aplica distintos mecanismos u operadores a los mismos datos.',
      moodleTitle: 'Llévalo a Moodle', moodleDesc: 'Bancos de preguntas para profesorado, con soluciones enlazadas al ejemplo.',
      aboutEyebrow: 'Herramientas docentes abiertas', aboutTitle: 'Para enseñar y aprender.',
      aboutLead: 'Este portal reúne materiales para cursos de metaheurísticas, computación evolutiva e ingeniería de organización. Consulta la autoría y la licencia de cada herramienta en su repositorio.',
      licenses: 'Portal: código MIT · Contenido docente CC BY 4.0', institutions: 'Instituciones participantes',
      footerText: 'Algoritmos genéticos · Herramientas docentes abiertas', backTop: 'Volver arriba',
    },
    en: {
      docTitle: 'Genetic algorithms, step by step · Teaching tools',
      description: 'Genetic algorithm teaching lab: selection, crossover, mutation, EvoTraveller and SelectionMechanisms. Interactive tools and scientific publications.',
      skip: 'Skip to the tools', homeLabel: 'GA · Home', brand: 'Teaching tools', aboutNav: 'About the project',
      eyebrow: 'Explore · Practise · Compare', titleLine1: 'Genetic algorithms,', titleLine2: 'step by step.',
      lead: 'From one population of solutions to the next. Discover how parents are selected, their information is combined and diversity is introduced.',
      choose: 'Choose a tool', parents: 'Parents', oneGeneration: 'One generation', crossAndMutate: 'Crossover + mutation',
      parentA: 'Parent A', parentB: 'Parent B', changedGene: 'Mutated gene',
      heroVisual: 'Two parent chromosomes combine their genes; a mutation changes one gene in the offspring.',
      toolsTitle: 'Three operators. One shared process.', toolsNote: 'Open · Interactive · ES / EN',
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
      labTitle: 'Experiment across generations', labNote: 'From individual operators to population dynamics',
      travellerEyebrow: 'The complete algorithm', travellerDesc: 'Observe a genetic algorithm applied to the travelling salesman problem. Adjust population, selection, crossover and mutation, and follow how routes evolve across generations.',
      travellerTopics: 'Routes · Fitness · Population · Algorithm parameters', travellerVisual: 'A closed route connects five cities: the travelling salesman problem.', travellerCode: 'EvoTraveller source code on GitHub',
      shinyEyebrow: 'Selection dynamics', shinyDesc: 'Compare selection mechanisms across many generations and simulation runs. Explore how selection pressure affects convergence, fitness and diversity.',
      shinyTopics: 'Selection · Convergence · Diversity · Model comparison', shinyVisual: 'Schematic of evolution across generations: fitness increases and diversity decreases.', shinyCode: 'SelectionMechanisms source code on GitHub',
      relatedPaper: 'Related publication ↓', publicationsNav: 'Publications', publicationsTitle: 'Related publications', publicationsNote: 'The research behind the tools',
      publishedStatus: 'Published · 2025', viewPublished: 'View publication on Springer', acceptedStatus: 'Accepted · Awaiting publication',
      acceptedVenue: 'CIO 2026 · Accepted for publication in Springer Lecture Notes.', acceptedNote: 'The final bibliographic reference and publication link will be added when available.',
      creditsScope: 'Operator series and SelectionMechanisms team',
      evaluate: 'Evaluation', evaluateHint: 'Measure fitness', selectHint: 'Choose the parents', crossHint: 'Combine the genes', mutateHint: 'Introduce variation',
      evaluateOffspringHint: 'Measure offspring fitness', survive: 'Replacement', surviveHint: 'Choose the survivors',
      replacementNote: 'The selection tool covers both parent selection and replacement: who enters the next generation.', replacementLink: 'View selection and replacement →',
      learningEyebrow: 'In class or on your own', learningTitle: 'Learn by doing.',
      learningLead: 'The selection, crossover and mutation tools work in the same way. Choose an example and follow each decision made by the algorithm.',
      animateTitle: 'Follow every step', animateDesc: 'Animations with explanations, pseudocode and Python and JavaScript code.',
      practiceTitle: 'Predict the result', practiceDesc: 'Solve the example and check your answer in practice mode.',
      compareTitle: 'Compare alternatives', compareDesc: 'Apply different mechanisms or operators to the same data.',
      moodleTitle: 'Take it to Moodle', moodleDesc: 'Question banks for teachers, with solutions linked to the example.',
      aboutEyebrow: 'Open teaching tools', aboutTitle: 'For teaching and learning.',
      aboutLead: 'This portal brings together resources for courses on metaheuristics, evolutionary computation and industrial engineering. Find each tool’s authorship and licence in its repository.',
      licenses: 'Portal: code MIT · Teaching content CC BY 4.0', institutions: 'Participating institutions',
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
