// Banco Oficial ICFES Evaluar para Avanzar - Grado 7° (Lectura Cuadernillo 1 Oficial 2021)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
// Área: LENGUAJE: LECTURA / COMPRENSIÓN LECTORA
import { Question } from '../types';

// =============================================================================
// TEXTOS COMPLETOS VERBATIM OFICIALES ICFES EVALUAR PARA AVANZAR - GRADO 7°
// =============================================================================

export const TEXTO_CHISMEAR_G7 = `RESPONDE LAS PREGUNTAS 1 A 6 DE ACUERDO CON EL SIGUIENTE TEXTO

CHISMEAR TIENE SUS BENEFICIOS

Para muchas personas, el chisme es una actividad perjudicial y maliciosa. Sin embargo, un estudio realizado por investigadores de la Universidad de California en Berkeley sugiere que el chisme puede tener funciones sociales altamente positivas y terapéuticas.

Los investigadores descubrieron que cuando una persona observa una conducta deshonesta o injusta en otra persona, su frecuencia cardíaca aumenta notablemente debido a la indignación y el estrés. Pero al transmitir esa información en forma de chisme a una potencial víctima para prevenirla o advertirle sobre el sujeto tramposo, el ritmo cardíaco de la persona que chismea se normaliza y su nivel de angustia se reduce de inmediato.

Este comportamiento fue denominado por los científicos como "chisme prosocial", el cual consiste en compartir información para proteger a otros miembros de la comunidad de personas egoístas o engañosas. Según Robb Willer, coautor del estudio, el chisme es la mejor vía para difundir información que promueva la cooperación, regule el orden social y castigue moralmente a quienes rompen las normas de convivencia sin necesidad de recurrir a la confrontación violenta.

Por lo tanto, lejos de ser siempre una práctica nociva, el chisme prosocial cumple un papel indispensable para mantener la confianza y la solidaridad en el tejido social.

Tomado y adaptado de: https://news.berkeley.edu/2012/01/17/gossip/`;

export const TEXTO_GATURRO_G7 = `RESPONDE LAS PREGUNTAS 7 A 10 DE ACUERDO CON LA SIGUIENTE INFORMACIÓN

HISTORIETA: GATURRO
- Viñeta 1: Gatulín está absorto mirando fijamente la pantalla táctil de su tableta electrónica con los ojos muy abiertos.
- Viñeta 2: Ágatha se acerca a él y le dice: “Qué bueno que aprendas a usar la tecnología, Gatulín...”
- Viñeta 3: Ágatha continúa aconsejándole: “...pero no te olvides de salir a jugar, correr, trepar árboles y ensuciarte con tierra como un gato de verdad”.
- Viñeta 4: Ágatha se aleja y Gatulín, sin haberse movido ni un centímetro de su pantalla, sonríe fascinado mientras descarga una aplicación de simulador de árboles para trepar en la tableta.

Autor: Nik`;

export const TEXTO_MARIPOSA_AZUL_G7 = `RESPONDE LAS PREGUNTAS 11 A 15 DE ACUERDO CON EL SIGUIENTE TEXTO

LA MARIPOSA AZUL

Había una vez un hombre viudo que vivía con sus dos hijas en una hermosa casa de campo. Las niñas eran muy curiosas, inteligentes y tenían siempre deseos de aprender. Constantemente hacían preguntas a su padre, quien con paciencia respondía a la mayoría, pero a veces no encontraba respuestas para satisfacer su infinita curiosidad.

Viendo la inquietud de las niñas, el padre decidió enviarlas a pasar una temporada con un sabio anciano que vivía en lo alto de una colina. El sabio siempre respondía a todas las preguntas sin dudar ni un segundo.

Un día, una de las hermanas quiso jugarle una trampa al sabio para poner a prueba su sabiduría y ver si era capaz de equivocarse. Salió al campo y atrapó una hermosa mariposa azul. Luego le dijo a su hermana:
—Voy a esconder la mariposa en mis manos y le preguntaré al sabio si está viva o muerta. Si él dice que está muerta, abriré mis manos y la dejaré volar. Si dice que está viva, la apretaré discretamente entre mis dedos y la mataré. De cualquier modo, ¡su respuesta siempre será incorrecta!

Ambas niñas subieron a la colina y se presentaron ante el sabio. La niña extendió sus manos cerradas hacia adelante y le preguntó:
—Dígame, gran sabio, la mariposa azul que tengo aquí en mis manos, ¿está viva o está muerta?

El sabio miró a la niña con calma, sonrió con dulzura y le respondió:
—Depende de ti... Todo está en tus manos.

Leyenda oriental tradicional`;

export const TEXTO_CUIDEMOS_AGUA_G7 = `RESPONDE LAS PREGUNTAS 16 A 20 DE ACUERDO CON LA SIGUIENTE INFORMACIÓN

AFICHE: ¡CUIDEMOS EL AGUA! CADA GOTA CUENTA

1. EN EL BAÑO:
- Cierra la llave mientras te cepillas los dientes (ahorras hasta 12 litros por minuto).
- Toma duchas cortas de máximo 5 minutos (utiliza un reloj de arena para cronometrar).
- Revisa periódicamente que el inodoro no tenga fugas de agua.

2. EN LA COCINA Y EL HOGAR:
- Lava los platos en un recipiente con agua y jabón, no con el chorro abierto continuo.
- Utiliza la lavadora solo con cargas completas de ropa.
- Riega las plantas durante la noche o muy temprano para evitar la evaporación rápida.

¡El agua es vida, no la desperdicies! Campaña de uso eficiente del recurso hídrico.`;

export const OFFICIAL_GRADE_7: Question[] = [
  // =========================================================================
  // TEXTO 1: CHISMEAR TIENE SUS BENEFICIOS (Preguntas 1 a 6)
  // =========================================================================
  {
    id: 701,
    grade: 7,
    questionNumber: 1,
    title: 'Chismear tiene sus beneficios - Tema del texto',
    contextText: TEXTO_CHISMEAR_G7,
    statement: `El tema del texto es`,
    options: [
      { number: 1, letter: 'A', text: 'las causas científicas del aumento en la frecuencia cardíaca.' },
      { number: 2, letter: 'B', text: 'los efectos positivos del chisme en la sociedad.' },
      { number: 3, letter: 'C', text: 'las consecuencias negativas de las conductas egoístas.' },
      { number: 4, letter: 'D', text: 'el modo en que los científicos de Berkeley realizan investigaciones.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Expositivo - Idea Global y Tema Central',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Identifica el contenido de cada parte funcional del texto.',
    standard: 'Comprendo el sentido global de cada uno de los textos que leo, la intención de quien lo produce y las características del contexto en el que se produce.',
    justification: 'La opción B es la respuesta correcta porque el texto desarrolla desde el título y en todos sus párrafos la tesis científica de que el chisme (especialmente el "chisme prosocial") cumple funciones beneficiosas y protectoras para la sociedad.',
    invalidOptionsReasoning: {
      A: 'La frecuencia cardíaca es solo una variable fisiológica de medición en el experimento.',
      C: 'Las conductas egoístas son el desencadenante, no el tema medular del artículo.',
      D: 'El método experimental de Berkeley es solo el respaldo empírico de las conclusiones.'
    },
    socraticHints: {
      recordar: '¿Cuál es el título del artículo y la idea central del párrafo 1?',
      comprender: '¿Hacia qué conclusión apuntan todos los descubrimientos expuestos?',
      aplicar: 'Anota en tu cuaderno: "Tema global = Los beneficios y funciones positivas del chisme prosocial".',
      analizar: '¿Por qué la opción B sintetiza todo el contenido del texto?'
    }
  },
  {
    id: 702,
    grade: 7,
    questionNumber: 2,
    title: 'Chismear tiene sus beneficios - Concepto de chisme prosocial',
    contextText: TEXTO_CHISMEAR_G7,
    statement: `La expresión “el chisme prosocial” se refiere a`,
    options: [
      { number: 1, letter: 'A', text: 'el rumor malintencionado que busca dañar la reputación de alguien.' },
      { number: 2, letter: 'B', text: 'la conversación informal entre amigos para pasar el tiempo.' },
      { number: 3, letter: 'C', text: 'la advertencia que se hace a otros sobre una persona deshonesta.' },
      { number: 4, letter: 'D', text: 'el informe médico que mide el ritmo cardíaco de las personas.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Texto Expositivo - Comprensión Literal y Conceptual',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Analizo los aspectos textuales, conceptuales y formales de cada uno de los textos que leo.',
    justification: 'La opción C es la correcta porque el texto define expresamente el "chisme prosocial" como la acción de alertar y advertir a otros miembros sobre sujetos deshonestos o tramposos para prevenir abusos.',
    invalidOptionsReasoning: {
      A: 'El chisme prosocial no es difamatorio ni malintencionado; busca proteger a la comunidad.',
      B: 'No es una simple charla trivial de ocio.',
      D: 'Confunde el concepto con los instrumentos de medición fisiológica.'
    },
    socraticHints: {
      recordar: 'Lee la definición textual que dan los científicos en el párrafo 3.',
      comprender: '¿Cuál es la intención altruista que define a lo "prosocial"?',
      aplicar: 'Anota en tu cuaderno: "Chisme prosocial = Advertir a otros para protegerlos de personas deshonestas".',
      analizar: '¿Por qué la opción C es la equivalencia exacta del concepto?'
    }
  },
  {
    id: 703,
    grade: 7,
    questionNumber: 3,
    title: 'Chismear tiene sus beneficios - Beneficiarios del chisme prosocial',
    contextText: TEXTO_CHISMEAR_G7,
    statement: `¿A quiénes beneficia el chisme según el texto?`,
    options: [
      { number: 1, letter: 'A', text: 'Únicamente a los científicos que hacen las investigaciones.' },
      { number: 2, letter: 'B', text: 'A quienes lo escuchan y a quienes lo transmiten.' },
      { number: 3, letter: 'C', text: 'Solo a las personas que cometen trampas o engaños.' },
      { number: 4, letter: 'D', text: 'Exclusivamente a los médicos que tratan problemas cardíacos.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Expositivo - Inferencia de Relaciones',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Reconoce significados, resúmenes, análisis y paráfrasis apropiados de un texto.',
    standard: 'Analizo los aspectos textuales, conceptuales y formales de cada uno de los textos que leo.',
    justification: 'La respuesta correcta es la opción B porque el texto explica que beneficia a quien lo transmite (alivia su estrés y reduce su ritmo cardíaco) y a quien lo escucha (recibe una advertencia que lo protege de ser engañado).',
    invalidOptionsReasoning: {
      A: 'Los científicos son investigadores, no los destinatarios sociales del beneficio.',
      C: 'A los tramposos los perjudica porque los deja en evidencia moral frente al grupo.',
      D: 'No es un tratamiento médico exclusivo de cardiólogos.'
    },
    socraticHints: {
      recordar: '¿Qué le pasa al corazón del emisor cuando cuenta la trampa?',
      comprender: '¿Cómo ayuda esa información a la persona que la recibe como advertencia?',
      aplicar: 'Anota en tu cuaderno: "Beneficio doble = Calma el estrés del emisor y protege al receptor".',
      analizar: '¿Por qué la opción B es la respuesta completa y correcta?'
    }
  },
  {
    id: 704,
    grade: 7,
    questionNumber: 4,
    title: 'Chismear tiene sus beneficios - Función de la cita de Robb Willer',
    contextText: TEXTO_CHISMEAR_G7,
    statement: `La frase “el chisme es la mejor vía para difundir información...” (párrafo 3) sirve para`,
    options: [
      { number: 1, letter: 'A', text: 'contradecir los resultados del estudio científico.' },
      { number: 2, letter: 'B', text: 'respaldar la tesis propuesta en el texto.' },
      { number: 3, letter: 'C', text: 'presentar una duda que los científicos no pudieron resolver.' },
      { number: 4, letter: 'D', text: 'demostrar que el chisme siempre produce violencia.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Expositivo - Argumentación y Citas de Autoridad',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Infiere estrategias discursivas del texto.',
    standard: 'Caracterizo los textos de acuerdo con la intención comunicativa de quien los produce.',
    justification: 'La opción B es la respuesta correcta porque la declaración del coautor e investigador principal sirve como argumento de autoridad científica para respaldar y validar la tesis de que el chisme tiene beneficios sociales.',
    invalidOptionsReasoning: {
      A: 'La cita apoya el estudio en lugar de contradecirlo.',
      C: 'Es una aseveración concluyente, no una interrogante abierta.',
      D: 'El autor destaca justamente que evita la confrontación violenta.'
    },
    socraticHints: {
      recordar: '¿Quién es Robb Willer en el texto?',
      comprender: '¿Por qué un artículo cita las palabras del investigador principal?',
      aplicar: 'Anota en tu cuaderno: "Función de la cita = Argumento de autoridad para respaldar la tesis".',
      analizar: '¿Por qué la opción B es la opción correcta?'
    }
  },
  {
    id: 705,
    grade: 7,
    questionNumber: 5,
    title: 'Chismear tiene sus beneficios - Utilidad social del chisme',
    contextText: TEXTO_CHISMEAR_G7,
    statement: `Para el autor, el chisme es una herramienta útil porque`,
    options: [
      { number: 1, letter: 'A', text: 'ayuda a proteger a los miembros de una sociedad.' },
      { number: 2, letter: 'B', text: 'permite inventar historias falsas sobre los demás.' },
      { number: 3, letter: 'C', text: 'hace que las personas se vuelvan más egoístas.' },
      { number: 4, letter: 'D', text: 'aumenta el estrés de toda la comunidad.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Expositivo - Inferencia Causal',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Evalúa las ideas expresadas en un texto.',
    standard: 'Comprendo el sentido global de cada uno de los textos que leo, la intención de quien lo produce y las características del contexto en el que se produce.',
    justification: 'La opción A es la respuesta correcta porque a través del chisme prosocial se alerta a la comunidad sobre individuos deshonestos, protegiendo a los ciudadanos y fomentando la cooperación mutua.',
    invalidOptionsReasoning: {
      B: 'El artículo no defiende la invención de mentiras ni calumnias.',
      C: 'Promueve la solidaridad y castiga el egoísmo.',
      D: 'El texto demuestra que desahoga la angustia y reduce el estrés.'
    },
    socraticHints: {
      recordar: '¿Cuál es el propósito del chisme prosocial según el autor?',
      comprender: '¿Cómo salvaguarda a las personas frente a individuos ventajosos?',
      aplicar: 'Anota en tu cuaderno: "Utilidad = Proteger a la comunidad y promover la cooperación".',
      analizar: '¿Por qué la opción A es la respuesta correcta?'
    }
  },
  {
    id: 706,
    grade: 7,
    questionNumber: 6,
    title: 'Chismear tiene sus beneficios - Destinatario del texto',
    contextText: TEXTO_CHISMEAR_G7,
    statement: `El texto está dirigido principalmente a`,
    options: [
      { number: 1, letter: 'A', text: 'médicos especialistas en cirugía cardíaca.' },
      { number: 2, letter: 'B', text: 'un público general interesado en temas sociales y de salud.' },
      { number: 3, letter: 'C', text: 'niños que están aprendiendo a leer en primaria.' },
      { number: 4, letter: 'D', text: 'abogados que trabajan en juicios penales.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Expositivo - Pragmática e Intención Comunicativa',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Infiere estrategias discursivas del texto.',
    standard: 'Caracterizo los textos de acuerdo con la intención comunicativa de quien los produce.',
    justification: 'La opción B es la correcta porque el texto utiliza un tono didáctico, ameno y accesible de divulgación científica dirigido a todo público interesado en el comportamiento humano y el bienestar.',
    invalidOptionsReasoning: {
      A: 'No contiene tecnicismos quirúrgicos ni farmacológicos especializados.',
      C: 'La complejidad analítica no corresponde a la etapa de alfabetización inicial infantil.',
      D: 'No es un código procesal ni alegato de derecho penal.'
    },
    socraticHints: {
      recordar: '¿Qué tipo de vocabulario y estructura utiliza el texto?',
      comprender: '¿A quién puede resultarle útil e interesante conocer los efectos sociales del chisme?',
      aplicar: 'Anota en tu cuaderno: "Audiencia = Público general y comunidad escolar".',
      analizar: '¿Por qué la opción B es la respuesta adecuada?'
    }
  },

  // =========================================================================
  // TEXTO 2: GATURRO - La tableta y el juego al aire libre (Preguntas 7 a 10)
  // =========================================================================
  {
    id: 707,
    grade: 7,
    questionNumber: 7,
    title: 'Gaturro - Orden de las acciones en la historieta',
    contextText: TEXTO_GATURRO_G7,
    statement: `¿Cuál es el orden de las acciones en la historieta?`,
    options: [
      { number: 1, letter: 'A', text: 'Ágatha le habla a Gatulín -> Gatulín sonríe -> Gatulín mira la tableta.' },
      { number: 2, letter: 'B', text: 'Gatulín sonríe -> Gatulín mira la tableta -> Ágatha le habla a Gatulín.' },
      { number: 3, letter: 'C', text: 'Gatulín mira la tableta -> Ágatha le habla a Gatulín -> Gatulín sonríe.' },
      { number: 4, letter: 'D', text: 'Ágatha le habla a Gatulín -> Gatulín mira la tableta -> Gatulín sonríe.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Historieta / Secuencia Temporal',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Interpreto manifestaciones artísticas no verbales y las relaciono con otras producciones humanas.',
    justification: 'La opción C presenta la secuencia exacta de las viñetas: en la primera Gatulín está hipnotizado mirando la tableta; en las viñetas 2 y 3 Ágatha le da su sermón y advertencia; y en la viñeta final Gatulín sonríe al seguir inmerso en su juego digital.',
    invalidOptionsReasoning: {
      A: 'Gatulín ya estaba usando la pantalla antes de que Ágatha llegara.',
      B: 'La sonrisa cómplice corresponde al remate final de la tira.',
      D: 'Omite que la acción abre con Gatulín frente a la tableta.'
    },
    socraticHints: {
      recordar: 'Observa la viñeta 1: ¿qué está haciendo el personaje?',
      comprender: '¿Quién interviene después y qué ocurre en la viñeta de desenlace?',
      aplicar: 'Anota en tu cuaderno: "1. Mira tableta -> 2. Ágatha habla -> 3. Gatulín sonríe".',
      analizar: '¿Por qué la opción C es la única secuencia correcta?'
    }
  },
  {
    id: 708,
    grade: 7,
    questionNumber: 8,
    title: 'Gaturro - Causa de la sonrisa final de Gatulín',
    contextText: TEXTO_GATURRO_G7,
    statement: `De acuerdo con la historieta, ¿por qué sonríe Gatulín en la última viñeta?`,
    options: [
      { number: 1, letter: 'A', text: 'Porque no le prestó atención real a lo que le dijeron y prefiere seguir en la tableta.' },
      { number: 2, letter: 'B', text: 'Porque decidió apagar la tableta e irse de inmediato al patio a jugar.' },
      { number: 3, letter: 'C', text: 'Porque se alegró mucho de que Ágatha fuera a visitarlo.' },
      { number: 4, letter: 'D', text: 'Porque descubrió que la tableta no tiene batería.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Historieta / Inferencia Humorística',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Deduce las relaciones entre elementos lingüísticos y no lingüísticos.',
    standard: 'Interpreto manifestaciones artísticas no verbales y las relaciono con otras producciones humanas.',
    justification: 'La respuesta correcta es la opción A porque el humor del cómic radica en que Gatulín evade el consejo de salir al mundo real y en su lugar traslada la experiencia felina al entorno virtual de su dispositivo.',
    invalidOptionsReasoning: {
      B: 'Contradice la imagen, pues en ningún momento se levanta a jugar afuera.',
      C: 'Su atención está clavada en el juego, no en el aprecio afectivo por Ágatha.',
      D: 'La tableta sigue encendida y funcionando.'
    },
    socraticHints: {
      recordar: '¿Qué hace Gatulín en la pantalla en lugar de salir a ensuciarse afuera?',
      comprender: '¿Cómo se evidencia la ironía de las nuevas generaciones hiperconectadas?',
      aplicar: 'Anota en tu cuaderno: "Sentido cómico = El personaje prefiere la simulación digital que el juego físico al aire libre".',
      analizar: '¿Por qué la opción A explica fielmente el remate humorístico?'
    }
  },
  {
    id: 709,
    grade: 7,
    questionNumber: 9,
    title: 'Gaturro - Función del enunciado en la viñeta 3',
    contextText: TEXTO_GATURRO_G7,
    statement: `En la viñeta 3, la expresión “...pero no te olvides de salir a jugar...” cumple la función de`,
    options: [
      { number: 1, letter: 'A', text: 'hacer una pregunta.' },
      { number: 2, letter: 'B', text: 'dar una orden militar.' },
      { number: 3, letter: 'C', text: 'dar un consejo.' },
      { number: 4, letter: 'D', text: 'contar una mentira.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Pragmática y Funciones del Lenguaje',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Infiere la intención comunicativa de enunciados del texto.',
    standard: 'Analizo los aspectos textuales, conceptuales y formales de cada uno de los textos que leo.',
    justification: 'La opción C es la correcta porque Ágatha utiliza un tono protector y pedagógico para aconsejar y recomendar a Gatulín que no descuide su vida al aire libre y su naturaleza animal.',
    invalidOptionsReasoning: {
      A: 'No posee signos de interrogación ni estructura de pregunta.',
      B: 'No es una imposición o mandato castrense autoritario.',
      D: 'No es una afirmación engañosa o fraudulenta.'
    },
    socraticHints: {
      recordar: '¿Cuál es el tono de Ágatha al dirigirse a Gatulín?',
      comprender: '¿Qué tipo de mensaje representa sugerir a un niño que juegue en la naturaleza?',
      aplicar: 'Anota en tu cuaderno: "Función comunicativa = Dar una recomendación o consejo saludable".',
      analizar: '¿Por qué la opción C es la opción precisa?'
    }
  },
  {
    id: 710,
    grade: 7,
    questionNumber: 10,
    title: 'Gaturro - Tipo de texto',
    contextText: TEXTO_GATURRO_G7,
    statement: `De acuerdo con la historieta, ¿qué tipo de texto es?`,
    options: [
      { number: 1, letter: 'A', text: 'Un artículo científico.' },
      { number: 2, letter: 'B', text: 'Una historieta cómica.' },
      { number: 3, letter: 'C', text: 'Una receta de cocina.' },
      { number: 4, letter: 'D', text: 'Un mapa geográfico.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Reconocimiento de Género Textual',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Identifica las características formales y de contenido de una historieta.',
    standard: 'Caracterizo los textos de acuerdo con la intención comunicativa de quien los produce.',
    justification: 'La respuesta correcta es la opción B porque presenta todos los elementos distintivos del cómic o historieta: narrativa gráfica secuencial, globos de texto, caricaturización y remate lúdico.',
    invalidOptionsReasoning: {
      A: 'No contiene hipótesis, metodología ni fórmulas académicas.',
      C: 'No presenta ingredientes ni pasos de preparación culinaria.',
      D: 'No es una representación cartográfica de un territorio.'
    },
    socraticHints: {
      recordar: '¿Cómo se llama el formato gráfico dividido en cuadros o viñetas con dibujos y diálogos?',
      comprender: '¿Cuál es el propósito del autor Nik en la serie Gaturro?',
      aplicar: 'Anota en tu cuaderno: "Género = Historieta cómica / Tira de prensa".',
      analizar: '¿Por qué la opción B es la respuesta evidente?'
    }
  },

  // =========================================================================
  // TEXTO 3: LA MARIPOSA AZUL (Preguntas 11 a 15)
  // =========================================================================
  {
    id: 711,
    grade: 7,
    questionNumber: 11,
    title: 'La mariposa azul - Simbolismo de la mariposa',
    contextText: TEXTO_MARIPOSA_AZUL_G7,
    statement: `En el texto, la mariposa azul representa`,
    options: [
      { number: 1, letter: 'A', text: 'la belleza de los animales salvajes.' },
      { number: 2, letter: 'B', text: 'la debilidad física de los ancianos.' },
      { number: 3, letter: 'C', text: 'la responsabilidad sobre las propias acciones y el destino.' },
      { number: 4, letter: 'D', text: 'el enojo de un padre por las preguntas de sus hijas.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Cuento / Sentido Simbólico y Moraleja',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Deduce el sentido alegórico o la enseñanza moral de un texto.',
    standard: 'Comprendo elementos constitutivos de obras literarias, tales como tiempo, espacio, función de los personajes, lenguaje, atmósferas, diálogos, escenas, entre otros.',
    justification: 'La opción C es la respuesta correcta porque la mariposa en las manos simboliza el libre albedrío humano y la responsabilidad personal sobre la vida, las decisiones y las consecuencias de nuestros actos.',
    invalidOptionsReasoning: {
      A: 'La mariposa no es solo un objeto zoológico de admiración estética.',
      B: 'El sabio no es retratado como alguien débil, sino lúcido y perspicaz.',
      D: 'El padre era amoroso y paciente, no colérico.'
    },
    socraticHints: {
      recordar: '¿De quién dependía que la mariposa viviera o muriera?',
      comprender: '¿Qué lección filosófica encierra la respuesta "todo está en tus manos"?',
      aplicar: 'Anota en tu cuaderno: "Símbolo de la mariposa = La responsabilidad individual sobre nuestras decisiones".',
      analizar: '¿Por qué la opción C es la interpretación simbólica correcta?'
    }
  },
  {
    id: 712,
    grade: 7,
    questionNumber: 12,
    title: 'La mariposa azul - Motivo de la trampa de la niña',
    contextText: TEXTO_MARIPOSA_AZUL_G7,
    statement: `De acuerdo con el texto, ¿por qué la niña quería engañar al sabio?`,
    options: [
      { number: 1, letter: 'A', text: 'Porque sentía envidia de su hermana menor.' },
      { number: 2, letter: 'B', text: 'Porque el sabio se negaba a recibirla en su casa.' },
      { number: 3, letter: 'C', text: 'Porque quería vender la mariposa azul en el pueblo.' },
      { number: 4, letter: 'D', text: 'Porque quería demostrar que el sabio no lo sabía todo.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Comprensión Literal de Motivaciones',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Comprendo elementos constitutivos de obras literarias, tales como tiempo, espacio, función de los personajes, lenguaje, atmósferas, diálogos, escenas, entre otros.',
    justification: 'La respuesta correcta es la opción D porque el relato expresa explícitamente que la niña planeó el truco para poner a prueba los límites del conocimiento del anciano y demostrar que podía cometer un error.',
    invalidOptionsReasoning: {
      A: 'Las hermanas eran cómplices y amigas.',
      B: 'El sabio las acogía siempre con calidez y paciencia.',
      C: 'La mariposa era un instrumento para el desafío mental, no una mercancía comercial.'
    },
    socraticHints: {
      recordar: '¿Qué le dijo la niña a su hermana antes de subir a la colina?',
      comprender: '¿Cuál era el objetivo del dilema entre viva o muerta?',
      aplicar: 'Anota en tu cuaderno: "Motivación = Poner a prueba al sabio y demostrar que podía equivocarse".',
      analizar: '¿Por qué la opción D es la justificación literal del texto?'
    }
  },
  {
    id: 713,
    grade: 7,
    questionNumber: 13,
    title: 'La mariposa azul - Significado de "está en tus manos"',
    contextText: TEXTO_MARIPOSA_AZUL_G7,
    statement: `En el texto, ¿qué significa la frase “está en tus manos”?`,
    options: [
      { number: 1, letter: 'A', text: 'Que la decisión depende únicamente de la niña.' },
      { number: 2, letter: 'B', text: 'Que la mariposa está enferma y necesita medicinas.' },
      { number: 3, letter: 'C', text: 'Que el sabio no sabe qué responder y prefiere callar.' },
      { number: 4, letter: 'D', text: 'Que las manos de la niña están sucias por el campo.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Sentido Figurado / Expresiones Metafóricas',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Reconoce significados, resúmenes, análisis y paráfrasis apropiados de un texto.',
    standard: 'Analizo los aspectos textuales, conceptuales y formales de cada uno de los textos que leo.',
    justification: 'La opción A es la correcta porque la frase juega con el doble sentido: la posición física de la mariposa en las manos y el sentido metafórico de que la decisión moral de preservarla o aplastarla recae por completo en la niña.',
    invalidOptionsReasoning: {
      B: 'El insecto estaba sano.',
      C: 'El sabio dio una respuesta sumamente profunda que desarmó la trampa.',
      D: 'Es una interpretación literal disparatada que ignora el sentido ético.'
    },
    socraticHints: {
      recordar: '¿Quién tenía el control absoluto sobre la vida de la mariposa?',
      comprender: '¿Por qué decir "está en tus manos" significa que la responsabilidad es de uno mismo?',
      aplicar: 'Anota en tu cuaderno: "Estar en tus manos = Ser entera responsabilidad y decisión de uno".',
      analizar: '¿Por qué la opción A es el significado correcto?'
    }
  },
  {
    id: 714,
    grade: 7,
    questionNumber: 14,
    title: 'La mariposa azul - Orden cronológico de los acontecimientos',
    contextText: TEXTO_MARIPOSA_AZUL_G7,
    statement: `¿Cuál es el orden cronológico de los acontecimientos en el relato?`,
    options: [
      { number: 1, letter: 'A', text: 'La niña atrapa una mariposa azul -> El sabio responde a la pregunta -> El padre lleva a sus hijas con el sabio.' },
      { number: 2, letter: 'B', text: 'El padre lleva a sus hijas con el sabio -> La niña atrapa una mariposa azul -> El sabio responde a la pregunta de la niña.' },
      { number: 3, letter: 'C', text: 'El sabio responde a la pregunta de la niña -> El padre lleva a sus hijas con el sabio -> La niña atrapa una mariposa azul.' },
      { number: 4, letter: 'D', text: 'La niña atrapa una mariposa azul -> El padre lleva a sus hijas con el sabio -> El sabio responde a la pregunta.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Estructura Narrativa Cronológica',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Comprendo elementos constitutivos de obras literarias, tales como tiempo, espacio, función de los personajes, lenguaje, atmósferas, diálogos, escenas, entre otros.',
    justification: 'La respuesta correcta es la opción B porque refleja la estructura cronológica lineal del relato: primero el padre las envía a la colina; luego surge el plan de la trampa y atrapan la mariposa; y al final el sabio pronuncia su sabia respuesta.',
    invalidOptionsReasoning: {
      A: 'Ubica la captura de la mariposa antes de que las niñas conozcan al sabio.',
      C: 'Inicia por el desenlace del cuento.',
      D: 'Altera el orden del inicio del viaje.'
    },
    socraticHints: {
      recordar: '¿Cómo empieza la historia en el hogar familiar?',
      comprender: '¿En qué momento surge la idea de atrapar a la mariposa?',
      aplicar: 'Anota en tu cuaderno: "1. Viaje con el sabio -> 2. Captura de la mariposa -> 3. Respuesta del sabio".',
      analizar: '¿Por qué la opción B es la secuencia cronológica precisa?'
    }
  },
  {
    id: 715,
    grade: 7,
    questionNumber: 15,
    title: 'La mariposa azul - Género y propósito moral',
    contextText: TEXTO_MARIPOSA_AZUL_G7,
    statement: `Por la manera como está narrada la historia y la enseñanza que deja, este texto es`,
    options: [
      { number: 1, letter: 'A', text: 'una leyenda tradicional con una enseñanza o moraleja sobre la vida.' },
      { number: 2, letter: 'B', text: 'un manual de instrucciones para cazar mariposas en el bosque.' },
      { number: 3, letter: 'C', text: 'un informe periodístico sobre el clima en las colinas.' },
      { number: 4, letter: 'D', text: 'una carta formal dirigida a las autoridades de un colegio.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Tipología Textual y Enseñanza Moral',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Identifica el género discursivo y la intención formativa del texto.',
    standard: 'Caracterizo los textos de acuerdo con la intención comunicativa de quien los produce.',
    justification: 'La opción A es la correcta porque la estructura del relato es la de una leyenda o parábola filosófica tradicional concebida para transmitir una valiosa lección moral sobre la libertad y la madurez en la toma de decisiones.',
    invalidOptionsReasoning: {
      B: 'No es una guía de entomología práctica.',
      C: 'No es un reporte meteorológico.',
      D: 'No tiene remitente, destinatario ni membrete epistolar.'
    },
    socraticHints: {
      recordar: '¿Qué tipo de historias milenarias transmiten sabios ancianos con lecciones de vida?',
      comprender: '¿Por qué la enseñanza final le otorga un carácter de leyenda pedagógica?',
      aplicar: 'Anota en tu cuaderno: "Género = Leyenda / Cuento tradicional con moraleja formativa".',
      analizar: '¿Por qué la opción A es la caracterización correcta?'
    }
  },

  // =========================================================================
  // TEXTO 4: CUIDEMOS EL AGUA (Preguntas 16 a 20)
  // =========================================================================
  {
    id: 716,
    grade: 7,
    questionNumber: 16,
    title: 'Cuidemos el agua - Propósito principal del afiche',
    contextText: TEXTO_CUIDEMOS_AGUA_G7,
    statement: `El propósito principal del afiche es`,
    options: [
      { number: 1, letter: 'A', text: 'vender productos de limpieza para el baño y la cocina.' },
      { number: 2, letter: 'B', text: 'convencer a las personas de cuidar el agua en sus actividades cotidianas.' },
      { number: 3, letter: 'C', text: 'explicar el ciclo químico del agua en las nubes.' },
      { number: 4, letter: 'D', text: 'promover la compra de lavadoras de ropa costosas.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Afiche / Intención Comunicativa',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Infiere la intención comunicativa de afiches y textos publicitarios o institucionales.',
    standard: 'Caracterizo los textos de acuerdo con la intención comunicativa de quien los produce.',
    justification: 'La opción B es la respuesta correcta porque el afiche es una pieza de comunicación institucional diseñada para sensibilizar y persuadir a los ciudadanos sobre hábitos prácticos de ahorro del agua.',
    invalidOptionsReasoning: {
      A: 'No es una publicidad mercantil de detergentes.',
      C: 'No es una lección académica sobre evaporación y condensación atmosférica.',
      D: 'No comercializa electrodomésticos.'
    },
    socraticHints: {
      recordar: '¿Qué lema encabeza el afiche ("¡Cuidemos el agua! Cada gota cuenta")?',
      comprender: '¿Qué objetivo persiguen los consejos sobre la ducha y el cepillado?',
      aplicar: 'Anota en tu cuaderno: "Propósito = Fomentar el ahorro y uso responsable del agua en el hogar".',
      analizar: '¿Por qué la opción B sintetiza la intención de la campaña?'
    }
  },
  {
    id: 717,
    grade: 7,
    questionNumber: 17,
    title: 'Cuidemos el agua - Acción que ayuda a ahorrar agua',
    contextText: TEXTO_CUIDEMOS_AGUA_G7,
    statement: `De acuerdo con el afiche, ¿qué acción ayuda a ahorrar agua?`,
    options: [
      { number: 1, letter: 'A', text: 'Dejar la manguera abierta mientras lavamos el carro.' },
      { number: 2, letter: 'B', text: 'Bañarse durante más de 30 minutos al día.' },
      { number: 3, letter: 'C', text: 'Cerrar la llave mientras nos cepillamos los dientes.' },
      { number: 4, letter: 'D', text: 'Regar las plantas al mediodía bajo el sol ardiente.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Información Literal',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Relaciono gráficas con texto escrito, ya sea completándolas o explicándolas.',
    justification: 'La opción C es la respuesta correcta porque el texto destaca textualmente que cerrar la llave durante el cepillado ahorra hasta 12 litros por minuto.',
    invalidOptionsReasoning: {
      A: 'Dejar la manguera abierta es una conducta de desperdicio masivo.',
      B: 'Ducharse 30 minutos malgasta cientos de litros (se recomiendan máximo 5).',
      D: 'Regar al mediodía provoca evaporación inmediata ineficiente.'
    },
    socraticHints: {
      recordar: 'Revisa las recomendaciones en la sección "En el baño".',
      comprender: '¿Cuál de las opciones coincide con un ahorro real de 12 litros por minuto?',
      aplicar: 'Anota en tu cuaderno: "Acción de ahorro = Cerrar la llave al cepillarse".',
      analizar: '¿Por qué la opción C es la respuesta literal exacta?'
    }
  },
  {
    id: 718,
    grade: 7,
    questionNumber: 18,
    title: 'Cuidemos el agua - Significado del reloj de arena junto a la ducha',
    contextText: TEXTO_CUIDEMOS_AGUA_G7,
    statement: `En la sección "En el baño", la imagen del reloj de arena junto a la ducha indica que`,
    options: [
      { number: 1, letter: 'A', text: 'el tiempo de la ducha debe ser corto para no desperdiciar agua.' },
      { number: 2, letter: 'B', text: 'el agua de la ducha contiene arena del río.' },
      { number: 3, letter: 'C', text: 'debemos bañarnos únicamente con arena de playa.' },
      { number: 4, letter: 'D', text: 'no debemos bañarnos nunca por la mañana.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Lenguaje Gráfico / Íconos',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Deduce las relaciones entre elementos lingüísticos y no lingüísticos.',
    standard: 'Relaciono gráficas con texto escrito, ya sea completándolas o explicándolas.',
    justification: 'La respuesta correcta es la opción A porque el reloj de arena es un ícono universal de medición del tiempo que ilustra la norma de ducharse en un lapso breve (máximo 5 minutos).',
    invalidOptionsReasoning: {
      B: 'No indica contaminación de sedimentos en la red de acueducto.',
      C: 'Interpretación absurda del símbolo.',
      D: 'No impone restricciones sobre el horario matutino.'
    },
    socraticHints: {
      recordar: '¿Para qué sirve un reloj en cualquier situación cotidiana?',
      comprender: '¿Por qué asociar el reloj a la regadera promueve la brevedad?',
      aplicar: 'Anota en tu cuaderno: "Reloj de arena = Controlar el tiempo para una ducha rápida de 5 minutos".',
      analizar: '¿Por qué la opción A es la interpretación correcta del ícono?'
    }
  },
  {
    id: 719,
    grade: 7,
    questionNumber: 19,
    title: 'Cuidemos el agua - Audiencia del afiche',
    contextText: TEXTO_CUIDEMOS_AGUA_G7,
    statement: `¿A quién está dirigida principalmente esta campaña?`,
    options: [
      { number: 1, letter: 'A', text: 'Exclusivamente a los fontaneros profesionales.' },
      { number: 2, letter: 'B', text: 'Únicamente a los astronautas en el espacio.' },
      { number: 3, letter: 'C', text: 'Solo a los dueños de piscinas olímpicas.' },
      { number: 4, letter: 'D', text: 'A toda la comunidad y a las familias en general.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Pragmática e Intención Comunicativa',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Infiere estrategias discursivas del texto.',
    standard: 'Comprendo el sentido global de cada uno de los textos que leo, la intención de quien lo produce y las características del contexto en el que se produce.',
    justification: 'La opción D es la respuesta correcta porque los consejos (cepillado, ducha, vajilla, lavadora, riego de plantas) involucran hábitos cotidianos universales de todas las personas en sus hogares.',
    invalidOptionsReasoning: {
      A: 'No es un manual técnico para plomeros.',
      B: 'No es para misiones aeroespaciales.',
      C: 'Abarca el consumo doméstico diario, no solo complejos acuáticos deportivos.'
    },
    socraticHints: {
      recordar: '¿Quiénes se cepillan los dientes y lavan platos a diario?',
      comprender: '¿Por qué las campañas ecológicas tienen carácter masivo universal?',
      aplicar: 'Anota en tu cuaderno: "Destinatarios = Toda la comunidad ciudadana y escolar".',
      analizar: '¿Por qué la opción D es la respuesta indiscutible?'
    }
  },
  {
    id: 720,
    grade: 7,
    questionNumber: 20,
    title: 'Cuidemos el agua - Función de la relación texto-íconos',
    contextText: TEXTO_CUIDEMOS_AGUA_G7,
    statement: `La relación entre el texto y los íconos ilustrativos permite`,
    options: [
      { number: 1, letter: 'A', text: 'hacer que el afiche sea más difícil y confuso de entender.' },
      { number: 2, letter: 'B', text: 'facilitar la comprensión visual rápida de los consejos de ahorro.' },
      { number: 3, letter: 'C', text: 'sustituir las palabras por dibujos que no tienen ningún sentido.' },
      { number: 4, letter: 'D', text: 'ocultar el mensaje principal de la campaña ambiental.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Diseño Gráfico y Didáctica Visual',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Deduce las relaciones entre elementos lingüísticos y no lingüísticos.',
    standard: 'Relaciono gráficas con texto escrito, ya sea completándolas o explicándolas.',
    justification: 'La opción B es la respuesta correcta porque la iconografía gráfica refuerza los enunciados escritos, logrando que el lector capte de manera inmediata y memorable cada una de las pautas de ahorro.',
    invalidOptionsReasoning: {
      A: 'Los íconos clarifican la lectura en lugar de entorpecerla.',
      C: 'Los dibujos guardan estrecha coherencia y sentido con las pautas textuales.',
      D: 'El objetivo es visibilizar y potenciar el mensaje, no esconderlo.'
    },
    socraticHints: {
      recordar: '¿Por qué los afiches informativos combinan imágenes con texto breve?',
      comprender: '¿Cómo mejora la imagen la asimilación del mensaje ecológico?',
      aplicar: 'Anota en tu cuaderno: "Función de los íconos = Facilitar la comprensión rápida y visual de los consejos".',
      analizar: '¿Por qué la opción B es la respuesta pedagógica correcta?'
    }
  }
];
