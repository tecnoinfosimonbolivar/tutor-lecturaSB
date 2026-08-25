// Banco de Cápsulas Conceptuales Nativas (100% Offline) y Recursos Académicos
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
// Área: COMPETENCIAS COMUNICATIVAS EN LENGUAJE: LECTURA

export interface ConceptualCapsule {
  conceptTitle: string;
  category: 'Narrativa' | 'Lírica' | 'Informativa' | 'Argumentativa' | 'Discontinua / Infografía' | 'Filosófica / Crítica';
  definitionSummary: string;
  readingTechnique: string;
  commonIcfesTraps: string[];
  notebookTemplate: {
    title: string;
    conceptKey: string;
    keyQuestions: string[];
    evidencePrompt: string;
  };
  academicSearchQuery: string;
  wikipediaSlug: string;
}

export const CONCEPTUAL_CAPSULES: Record<string, ConceptualCapsule> = {
  narrativa: {
    conceptTitle: 'Texto Narrativo y Leyenda Tradicional',
    category: 'Narrativa',
    definitionSummary: 'El texto narrativo relata una secuencia de acontecimientos protagonizados por personajes en un tiempo y espacio determinados. En los mitos y leyendas, los hechos suelen explicar orígenes de elementos naturales, valores culturales o dilemas morales a través de símbolos poéticos.',
    readingTechnique: 'Identifica la estructura canónica (inicio, nudo/conflicto y desenlace), la voz del narrador (omnisciente en 3ª persona o protagonista en 1ª persona) y las motivaciones de los personajes.',
    commonIcfesTraps: [
      'Confundir un detalle secundario con el tema global o el propósito del relato.',
      'Suponer moralejas o enseñanzas éticas en relatos puramente explicativos o trágicos.',
      'Confundir el orden cronológico real de los hechos con el orden en que el narrador los presenta.'
    ],
    notebookTemplate: {
      title: 'ANÁLISIS DE TEXTO NARRATIVO',
      conceptKey: 'Personajes principales, conflicto dramático, desenlace y voz narrativa.',
      keyQuestions: [
        '¿Quién cuenta la historia y qué sabe de los hechos?',
        '¿Cuál es el conflicto central que enfrentan los personajes?',
        '¿Qué desenlace o transformación ocurre al final del relato?'
      ],
      evidencePrompt: 'Copia en tu cuaderno la cita textual que demuestre la motivación del protagonista.'
    },
    academicSearchQuery: 'texto narrativo estructura elementos comprension lectora',
    wikipediaSlug: 'Texto_narrativo'
  },
  lirica: {
    conceptTitle: 'Texto Lírico, Poesía y Sentido Figurado',
    category: 'Lírica',
    definitionSummary: 'El texto poético o lírico expresa las emociones, impresiones y reflexiones subjetivas del hablante o voz lírica mediante el uso de figuras literarias (metáforas, comparaciones, personificaciones), ritmo y musicalidad.',
    readingTechnique: 'No leas el poema de manera puramente literal. Pregúntate qué emoción evoca cada estrofa (nostalgia, admiración, soledad) y cómo se relaciona el ambiente descrito con el estado anímico.',
    commonIcfesTraps: [
      'Interpretar las metáforas en sentido estricto y literal.',
      'Ignorar el tono emocional predominante (nostálgico, irónico, festivo).',
      'Confundir a la voz lírica (el hablante poético) con la persona biográfica del autor.'
    ],
    notebookTemplate: {
      title: 'ANÁLISIS DE TEXTO LÍRICO Y POÉTICO',
      conceptKey: 'Voz poética, tono emocional, metáforas centrales y memoria afectiva.',
      keyQuestions: [
        '¿Qué emoción o sentimiento predomina en las estrofas?',
        '¿Qué significan las imágenes poéticas en su contexto?',
        '¿A quién o a qué se dirige el hablante lírico?'
      ],
      evidencePrompt: 'Escribe en tu cuaderno los dos versos más significativos y explica su sentido figurado.'
    },
    academicSearchQuery: 'genero lirico poesia recursos retoricos figuras literarias',
    wikipediaSlug: 'Poes%C3%ADa'
  },
  informativa: {
    conceptTitle: 'Texto Informativo, Noticia y Divulgación Científica',
    category: 'Informativa',
    definitionSummary: 'Los textos informativos y de divulgación tienen como objetivo principal transmitir hechos, datos comprobables y explicaciones científicas de forma objetiva, clara y estructurada para ampliar el conocimiento del lector.',
    readingTechnique: 'Localiza los datos clave respondiendo a las preguntas periodísticas básicas: ¿Qué ocurrió? ¿Quiénes participaron? ¿Dónde y cuándo? ¿Por qué o cómo funciona el fenómeno?',
    commonIcfesTraps: [
      'Confundir datos explícitos del texto con inferencias no respaldadas.',
      'Tomar opiniones de un entrevistado como verdades científicas universales.',
      'Caer en afirmaciones exageradas que el texto no sostiene con evidencia.'
    ],
    notebookTemplate: {
      title: 'ANÁLISIS DE NOTICIA Y DIVULGACIÓN CIENTÍFICA',
      conceptKey: 'Hecho noticioso, fuentes citadas, datos estadísticos y explicación causal.',
      keyQuestions: [
        '¿Cuál es el hallazgo o hecho principal informado?',
        '¿Qué fuentes científicas o testimonios respaldan la noticia?',
        '¿Qué causa y consecuencia se explican en el texto?'
      ],
      evidencePrompt: 'Registra en tu cuaderno los datos precisos (cifras, lugares, fechas y citas textuales).'
    },
    academicSearchQuery: 'texto periodistico noticia divulgacion cientifica estructura',
    wikipediaSlug: 'Texto_period%C3%ADstico'
  },
  argumentativa: {
    conceptTitle: 'Texto Argumentativo, Ensayo y Columna de Opinión',
    category: 'Argumentativa',
    definitionSummary: 'El texto argumentativo busca convencer o persuadir al lector sobre una postura determinada frente a un tema controvertido, sustentando una tesis central mediante premisas, datos, analogías y contraargumentos.',
    readingTechnique: 'Distingue con precisión entre hechos (datos verificables) y opiniones (juicios de valor del autor). Identifica la tesis en la introducción o conclusión y los argumentos que la defienden.',
    commonIcfesTraps: [
      'Confundir un argumento secundario o contraargumento con la tesis principal del autor.',
      'Elegir una opción porque suena verdadera en la vida real, pero que no está respaldada por el texto.',
      'No detectar el uso de la ironía o la sátira crítica.'
    ],
    notebookTemplate: {
      title: 'ANÁLISIS DE TEXTO ARGUMENTATIVO',
      conceptKey: 'Tesis central, tipos de argumentos, falacias y conclusión crítica.',
      keyQuestions: [
        '¿Cuál es la tesis o postura que defiende el autor?',
        '¿Qué evidencias o premisas utiliza para sustentarla?',
        '¿Qué posición contraria refuta o critica?'
      ],
      evidencePrompt: 'Anota en tu cuaderno la tesis del autor y resume los dos argumentos más fuertes.'
    },
    academicSearchQuery: 'texto argumentativo tesis premisas argumentos ensayo',
    wikipediaSlug: 'Texto_argumentativo'
  },
  discontinua: {
    conceptTitle: 'Texto Discontinuo: Infografías, Tablas y Caricaturas',
    category: 'Discontinua / Infografía',
    definitionSummary: 'Los textos discontinuos no siguen una secuencia lineal de lectura. Combinan elementos icónicos (ilustraciones, mapas, diagramas, gráficas de barras) con textos breves, títulos y porcentajes para comunicar información sintética de alto impacto.',
    readingTechnique: 'Examina la relación entre la imagen visual y el texto escrito. Lee los títulos, las etiquetas numéricas, las convenciones, las viñetas y los pie de página.',
    commonIcfesTraps: [
      'Leer solo el texto ignorando la información que transmiten las gráficas o figuras.',
      'Interpretar erróneamente escalas, porcentajes o ejes de coordenadas.',
      'Perder de vista la intención humorística, crítica o publicitaria del afiche o caricatura.'
    ],
    notebookTemplate: {
      title: 'ANÁLISIS DE TEXTO DISCONTINUO E INFOGRAFÍA',
      conceptKey: 'Lectura no lineal, integración texto-imagen, datos cuantitativos y recursos gráficos.',
      keyQuestions: [
        '¿Qué información aporta la gráfica o imagen que el texto no dice?',
        '¿Cuál es el público objetivo y la intención persuasiva del diseño?',
        '¿Cómo se relacionan las cifras estadísticas con el mensaje central?'
      ],
      evidencePrompt: 'Dibuja en tu cuaderno un esquema simplificado de la gráfica o infografía con sus datos clave.'
    },
    academicSearchQuery: 'texto discontinuo infografia lectura critica interpretacion graficos',
    wikipediaSlug: 'Infograf%C3%ADa'
  },
  filosofica: {
    conceptTitle: 'Texto Filosófico y Pensamiento Crítico',
    category: 'Filosófica / Crítica',
    definitionSummary: 'Los textos filosóficos examinan problemas fundamentales sobre el conocimiento, la ética, la política, la justicia y la naturaleza humana a través de conceptos abstractos, diálogos racionales y deducciones lógicas.',
    readingTechnique: 'Rastrea las definiciones conceptuales que propone el filósofo. Examina la relación entre las premisas iniciales y la conclusión lógica.',
    commonIcfesTraps: [
      'Proyectar prejuicios morales contemporáneos sobre textos filosóficos clásicos.',
      'Confundir las objeciones de los interlocutores con la conclusión final del filósofo.',
      'Perder la cadena lógica entre la causa primera y sus deducciones.'
    ],
    notebookTemplate: {
      title: 'ANÁLISIS DE TEXTO FILOSÓFICO Y CRÍTICO',
      conceptKey: 'Problema filosófico, conceptos fundamentales, premisas y consecuencias ético-políticas.',
      keyQuestions: [
        '¿Cuál es la pregunta fundamental que intenta responder el autor?',
        '¿Qué conceptos clave define (justicia, verdad, poder, ley)?',
        '¿Cuál es la conclusión necesaria del razonamiento?'
      ],
      evidencePrompt: 'Escribe en tu cuaderno la premisa principal y la conclusión del argumento filosófico.'
    },
    academicSearchQuery: 'filosofia lectura critica interpretacion logica epistemologia',
    wikipediaSlug: 'Filosof%C3%ADa'
  }
};

export function getCapsuleForQuestion(component: string = '', title: string = '', grade: number = 7): ConceptualCapsule {
  const lowerComp = component.toLowerCase();
  const lowerTitle = title.toLowerCase();

  if (lowerComp.includes('discontinuo') || lowerComp.includes('infografía') || lowerComp.includes('afiche') || lowerComp.includes('caricatura') || lowerTitle.includes('infografía') || lowerTitle.includes('afiche')) {
    return CONCEPTUAL_CAPSULES.discontinua;
  }
  if (lowerComp.includes('lírico') || lowerComp.includes('poétic') || lowerComp.includes('poema') || lowerTitle.includes('crepúsculo') || lowerTitle.includes('poema')) {
    return CONCEPTUAL_CAPSULES.lirica;
  }
  if (lowerComp.includes('filosóf') || lowerComp.includes('crítica') || lowerComp.includes('hobbes') || lowerComp.includes('platón') || grade === 11) {
    return CONCEPTUAL_CAPSULES.filosofica;
  }
  if (lowerComp.includes('argumentat') || lowerComp.includes('opinión') || lowerComp.includes('ensayo') || lowerTitle.includes('barras bravas')) {
    return CONCEPTUAL_CAPSULES.argumentativa;
  }
  if (lowerComp.includes('informativ') || lowerComp.includes('noticia') || lowerComp.includes('divulgación') || lowerComp.includes('científico') || lowerTitle.includes('noticia') || lowerTitle.includes('honduras') || lowerTitle.includes('murciélagos')) {
    return CONCEPTUAL_CAPSULES.informativa;
  }
  return CONCEPTUAL_CAPSULES.narrativa;
}
