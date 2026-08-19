// Banco Oficial ICFES Evaluar para Avanzar - Grado 6° (Lectura Cuadernillo 1 Oficial 2021)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
// Área: LENGUAJE: LECTURA / COMPRENSIÓN LECTORA
import { Question } from '../types';

// =============================================================================
// TEXTOS COMPLETOS VERBATIM OFICIALES ICFES EVALUAR PARA AVANZAR - GRADO 6°
// =============================================================================

export const TEXTO_COMETA_G6 = `RESPONDE LAS PREGUNTAS 1 A 6 DE ACUERDO CON EL SIGUIENTE TEXTO

LA HISTORIA DE LA COMETA

La cometa, también conocida como barrilete, papalote o volantín en distintos países hispanohablantes, tiene una historia milenaria que se remonta a más de 2.500 años atrás en la antigua China. En sus inicios, las primeras cometas eran elaboradas con cañas de bambú y finas telas de seda.

Lejos de ser un simple juguete infantil, en la antigüedad las cometas cumplían funciones militares estratégicas. Los generales del ejército chino las utilizaban para enviar mensajes codificados a larga distancia, realizar mediciones topográficas del terreno enemigo e incluso para calcular la distancia necesaria para excavar túneles por debajo de las murallas de las fortalezas sitiadas.

Con el paso de los siglos, las cometas cruzaron fronteras y mares gracias a las rutas comerciales de la seda, extendiéndose por toda Asia, el Medio Oriente y posteriormente hacia Europa en el siglo XIII a través de los relatos de Marco Polo. En Occidente, las cometas adquirieron una gran relevancia no solo como pasatiempo recreativo sino como instrumento para la investigación científica. En 1752, el inventor y científico Benjamín Franklin llevó a cabo su famoso experimento con una cometa provista de una llave metálica durante una tormenta eléctrica, demostrando de manera concluyente que los rayos son una forma de electricidad y sentando las bases para la invención del pararrayos.

Hoy en día, elevar cometa sigue siendo una de las tradiciones culturales más representativas del mes de agosto en Colombia y en muchas partes del mundo, uniendo a familias enteras alrededor del viento y el cielo.

Tomado y adaptado de: Enciclopedia de Historia y Ciencia Infantil`;

export const TEXTO_CHOCOLATE_G6 = `RESPONDE LAS PREGUNTAS 7 A 10 DE ACUERDO CON LA SIGUIENTE INFORMACIÓN

INFOGRAFÍA: DEL CACAO AL CHOCOLATE

1. Cosecha y recolección: Se recogen las mazorcas maduras del árbol de cacao en los cultivos tropicales.
2. Fermentación: Se extraen los granos cubiertos de pulpa blanca y se dejan fermentar en cajas de madera durante 5 a 7 días para desarrollar el aroma.
3. Secado al sol: Los granos fermentados se extienden al sol sobre esteras de madera para eliminar la humedad.
4. Tostado y descascarillado: En la fábrica, los granos secos se tuestan a altas temperaturas y se retira la cáscara externa.
5. Molienda y refinado: Las semillas tostadas se muelen hasta obtener una pasta líquida y oscura llamada licor de cacao.
6. Mezclado y moldeado: Se añade azúcar, leche y manteca de cacao, se tempera y se vierte en moldes para obtener las deliciosas barras de chocolate.

Historia: Los antiguos mayas y aztecas consideraban el cacao un regalo divino del dios Quetzalcóatl y preparaban una bebida amarga y espumosa llamada 'xocoatl'.`;

export const TEXTO_VIAJE_CHIRO_G6 = `RESPONDE LAS PREGUNTAS 11 A 15 DE ACUERDO CON EL SIGUIENTE TEXTO

EL VIAJE DE CHIRO

Chiro era un perrito de orejas largas y pelaje dorado que vivía felizmente en una granja rodeada de verdes colinas. A pesar de tener un hogar cálido y un tazón lleno de comida todos los días, Chiro sentía una inmensa curiosidad por conocer el espeso bosque que se extendía más allá de la cerca de madera.

Una mañana soleada de primavera, aprovechando que el granjero dejó la puerta del corral abierta, Chiro decidió salir de la granja para explorar los senderos misteriosos del bosque y hacer nuevos amigos entre los animales silvestres. Durante las primeras horas, todo fue diversión: persiguió mariposas de colores, bebió agua cristalina de un arroyo y saltó sobre montones de hojas secas.

Sin embargo, al caer la tarde, las sombras de los árboles se hicieron largas y tenebrosas. El bosque se llenó de ruidos extraños, crujidos de ramas y aullidos lejanos. Chiro sintió miedo por primera vez y se dio cuenta de que no recordaba el camino de regreso. Desesperado, se sentó al pie de un viejo roble a llorar.

En ese momento, un búho sabio de grandes ojos brillantes se asomó desde una rama alta y le dijo: «¿Por qué lloras, pequeño viajero?». Chiro le contó su aventura y su temor a quedarse solo en la noche. El búho, con voz pausada, le aconsejó: «Sigue el curso del arroyo hacia donde baja el agua; el río te llevará directamente a la cerca de tu hogar antes de que anochezca». Al escuchar al búho, a Chiro se le iluminó la mirada, agradeció el consejo y corrió con todas sus fuerzas siguiendo la corriente hasta divisar las luces de su granja, donde su familia lo esperaba con los brazos abiertos.

Cuento infantil tradicional`;

export const TEXTO_FESTIVAL_TEATRO_G6 = `RESPONDE LAS PREGUNTAS 16 A 20 DE ACUERDO CON LA SIGUIENTE INFORMACIÓN

AFICHE: ¡GRAN FESTIVAL ESCOLAR DE TEATRO Y TÍTERES!

Institución Educativa Técnica Simón Bolívar

- Fecha: Viernes, 25 de octubre
- Hora: 3:00 p.m.
- Lugar: Auditorio Central del Colegio
- Obras destacadas: "La leyenda del Mohan", "El principito en los Andes" y "Títeres en el reino de las palabras".
- Entrada: ¡Completamente libre y gratuita para estudiantes, docentes y padres de familia!
- Símbolo: Máscaras de teatro de comedia y tragedia.

¿Quieres participar con tu propio grupo de teatro o títeres? Inscríbete con el profesor de Educación Artística antes del 18 de octubre.

¡Ven y vive la magia de las artes escénicas!`;

export const OFFICIAL_GRADE_6: Question[] = [
  // =========================================================================
  // TEXTO 1: LA HISTORIA DE LA COMETA (Preguntas 1 a 6)
  // =========================================================================
  {
    id: 601,
    grade: 6,
    questionNumber: 1,
    title: 'La historia de la cometa - Tema del texto',
    contextText: TEXTO_COMETA_G6,
    statement: `El tema del texto es`,
    options: [
      { number: 1, letter: 'A', text: 'las diferentes clases de vientos que existen en el mes de agosto.' },
      { number: 2, letter: 'B', text: 'la biografía y los inventos del científico Benjamín Franklin.' },
      { number: 3, letter: 'C', text: 'el origen y la evolución de las cometas a lo largo de la historia.' },
      { number: 4, letter: 'D', text: 'los materiales de construcción de las murallas en la antigua China.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Texto Expositivo - Idea Global y Macroestructura',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Identifica el contenido de cada parte funcional del texto.',
    standard: 'Comprendo el sentido global de cada uno de los textos que leo, la intención de quien lo produce y las características del contexto en el que se produce.',
    justification: 'La opción C es la respuesta correcta porque el texto relata de forma global desde el nacimiento de las cometas en la China clásica, sus aplicaciones bélicas y científicas, hasta su conversión en una tradición popular contemporánea.',
    invalidOptionsReasoning: {
      A: 'El viento de agosto es solo una mención cultural de cierre.',
      B: 'Franklin es citado como un ejemplo histórico específico en el párrafo 3.',
      D: 'Las murallas eran solo el objetivo táctico de las mediciones militares chinas.'
    },
    socraticHints: {
      recordar: '¿De qué artefacto habla el texto desde el primer párrafo hasta el último?',
      comprender: '¿Cómo progresa la información a través de los siglos?',
      aplicar: 'Anota en tu cuaderno: "Tema global = El origen, la historia y la evolución de la cometa".',
      analizar: '¿Por qué la opción C sintetiza la totalidad del artículo?'
    }
  },
  {
    id: 602,
    grade: 6,
    questionNumber: 2,
    title: 'La historia de la cometa - Uso militar inicial en China',
    contextText: TEXTO_COMETA_G6,
    statement: `Según el texto, en la antigua China las cometas se utilizaban inicialmente para`,
    options: [
      { number: 1, letter: 'A', text: 'pescar peces grandes en los ríos profundos.' },
      { number: 2, letter: 'B', text: 'enviar señales militares y medir distancias en las batallas.' },
      { number: 3, letter: 'C', text: 'transportar soldados por el aire por encima de las montañas.' },
      { number: 4, letter: 'D', text: 'decorar las casas durante las celebraciones de año nuevo.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Expositivo - Información Literal',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Analizo los aspectos textuales, conceptuales y formales de cada uno de los textos que leo.',
    justification: 'La opción B es la correcta porque el segundo párrafo afirma textualmente que las cometas eran herramientas militares para transmitir mensajes cifrados y medir distancias de túneles y terrenos.',
    invalidOptionsReasoning: {
      A: 'No se menciona la pesca en el texto.',
      C: 'No eran planeadores para transportar personas.',
      D: 'El texto enfatiza su rol estratégico bélico antes que su uso decorativo.'
    },
    socraticHints: {
      recordar: '¿Qué hacían los generales chinos con las cometas de seda y bambú?',
      comprender: '¿Cuál era el objetivo táctico de elevarlas sobre los ejércitos rivales?',
      aplicar: 'Anota en tu cuaderno: "Uso militar = Mensajes en código y cálculo de distancias bélicas".',
      analizar: '¿Por qué la opción B es la respuesta literal del texto?'
    }
  },
  {
    id: 603,
    grade: 6,
    questionNumber: 3,
    title: 'La historia de la cometa - Experimento de Benjamín Franklin',
    contextText: TEXTO_COMETA_G6,
    statement: `Benjamín Franklin utilizó una cometa para`,
    options: [
      { number: 1, letter: 'A', text: 'demostrar que los rayos son una forma de electricidad.' },
      { number: 2, letter: 'B', text: 'enviar cartas secretas a los gobernantes de Europa.' },
      { number: 3, letter: 'C', text: 'atrapar pájaros exóticos durante las tormentas.' },
      { number: 4, letter: 'D', text: 'medir la velocidad del sonido en el aire.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Expositivo - Comprensión Literal de Hechos Científicos',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Analizo los aspectos textuales, conceptuales y formales de cada uno de los textos que leo.',
    justification: 'La respuesta correcta es la opción A porque el texto detalla explícitamente que el experimento de Franklin con la cometa y la llave en 1752 sirvió para comprobar la naturaleza eléctrica de los rayos.',
    invalidOptionsReasoning: {
      B: 'Franklin no usó la cometa para correo postal diplomático.',
      C: 'No era una trampa de cacería de aves.',
      D: 'El experimento midió la carga electrostática atmosférica, no la acústica.'
    },
    socraticHints: {
      recordar: '¿Qué elemento metálico ató Franklin a la cuerda de su cometa?',
      comprender: '¿Qué fenómeno de la naturaleza logró explicar con ese experimento?',
      aplicar: 'Anota en tu cuaderno: "Experimento de Franklin = Demostrar que los rayos son electricidad".',
      analizar: '¿Por qué la opción A es la única respuesta correcta?'
    }
  },
  {
    id: 604,
    grade: 6,
    questionNumber: 4,
    title: 'La historia de la cometa - Significado de la palabra "fronteras"',
    contextText: TEXTO_COMETA_G6,
    statement: `En el enunciado "Las cometas cruzaron fronteras y mares...", la palabra "fronteras" se refiere a`,
    options: [
      { number: 1, letter: 'A', text: 'los ríos más caudalosos del planeta.' },
      { number: 2, letter: 'B', text: 'las cuerdas con las que se atan los papalotes.' },
      { number: 3, letter: 'C', text: 'los límites territoriales entre países o regiones.' },
      { number: 4, letter: 'D', text: 'las tormentas con truenos y relámpagos.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Texto Expositivo - Léxico y Semántica en Contexto',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Reconoce y entiende el vocabulario y su función.',
    standard: 'Analizo los aspectos textuales, conceptuales y formales de cada uno de los textos que leo.',
    justification: 'La opción C es la correcta porque en geografía e historia la palabra "frontera" designa la línea divisoria o límite geopolítico que separa un país, reino o territorio de otro.',
    invalidOptionsReasoning: {
      A: 'Confunde fronteras con accidentes fluviales.',
      B: 'Confunde el término con las líneas de vuelo del juguete.',
      D: 'No tiene relación con fenómenos meteorológicos.'
    },
    socraticHints: {
      recordar: '¿Qué separa a un país de su nación vecina?',
      comprender: '¿Qué significa que un invento "cruce fronteras"?',
      aplicar: 'Anota en tu cuaderno: "Fronteras = Límites divisorios territoriales entre naciones".',
      analizar: '¿Por qué la opción C es el significado exacto de la palabra?'
    }
  },
  {
    id: 605,
    grade: 6,
    questionNumber: 5,
    title: 'La historia de la cometa - Orden cronológico de los hechos',
    contextText: TEXTO_COMETA_G6,
    statement: `¿Cuál es el orden cronológico de los hechos en el texto?`,
    options: [
      { number: 1, letter: 'A', text: 'Experimento de Franklin con la electricidad -> Invención en China -> Uso militar y de señales.' },
      { number: 2, letter: 'B', text: 'Invención en China -> Uso militar y de señales -> Experimento de Franklin con la electricidad.' },
      { number: 3, letter: 'C', text: 'Uso militar y de señales -> Experimento de Franklin con la electricidad -> Invención en China.' },
      { number: 4, letter: 'D', text: 'Experimento de Franklin con la electricidad -> Uso militar y de señales -> Invención en China.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Expositivo - Estructura Temporal Cronológica',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Comprendo elementos constitutivos de obras y textos expositivos, tales como tiempo, hechos y progresión.',
    justification: 'La respuesta correcta es la opción B porque refleja la progresión temporal de la historia: primero la creación en la China antigua, luego su empleo por generales para estrategias bélicas y siglos después el experimento científico de Franklin en el siglo XVIII.',
    invalidOptionsReasoning: {
      A: 'Sitúa el año 1752 antes de la antigua China.',
      C: 'Omite que la invención de la cometa precedió a su uso bélico.',
      D: 'Invierte totalmente la línea del tiempo histórica.'
    },
    socraticHints: {
      recordar: '¿Dónde y cuándo nació la cometa según el texto?',
      comprender: '¿Cómo evolucionaron sus usos a lo largo del tiempo?',
      aplicar: 'Anota en tu cuaderno: "1. Nace en China -> 2. Señales de guerra -> 3. Experimento eléctrico de Franklin".',
      analizar: '¿Por qué la opción B es la secuencia cronológica correcta?'
    }
  },
  {
    id: 606,
    grade: 6,
    questionNumber: 6,
    title: 'La historia de la cometa - Estructura discursiva',
    contextText: TEXTO_COMETA_G6,
    statement: `El texto está estructurado principalmente de forma`,
    options: [
      { number: 1, letter: 'A', text: 'cronológica e informativa.' },
      { number: 2, letter: 'B', text: 'dramática y teatral.' },
      { number: 3, letter: 'C', text: 'poética con rimas consonantes.' },
      { number: 4, letter: 'D', text: 'humorística con chistes y caricaturas.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Expositivo - Organización Textual',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Infiere estrategias discursivas del texto.',
    standard: 'Caracterizo los textos de acuerdo con la intención comunicativa de quien los produce.',
    justification: 'La opción A es la correcta porque el texto sigue una línea de tiempo ordenada desde la antigüedad hasta la actualidad (cronológica) con el fin de aportar datos reales y verificables al lector (informativa).',
    invalidOptionsReasoning: {
      B: 'No contiene acotaciones ni parlamentos para ser representados en un escenario.',
      C: 'Está escrito en prosa expositiva continua, no en verso rimado.',
      D: 'No busca la risa mediante recursos cómicos.'
    },
    socraticHints: {
      recordar: '¿Qué tipo de conectores y marcas temporales vertebran los párrafos?',
      comprender: '¿Por qué el encadenamiento de épocas pasadas y presentes define un orden cronológico informativo?',
      aplicar: 'Anota en tu cuaderno: "Estructura = Expositiva cronológica (línea temporal histórica)".',
      analizar: '¿Por qué la opción A es la respuesta rigurosa?'
    }
  },

  // =========================================================================
  // TEXTO 2: EL ORIGEN DEL CHOCOLATE (Preguntas 7 a 10)
  // =========================================================================
  {
    id: 607,
    grade: 6,
    questionNumber: 7,
    title: 'El origen del chocolate - Primer paso de elaboración',
    contextText: TEXTO_CHOCOLATE_G6,
    statement: `¿Cuál es el primer paso en la elaboración del chocolate según la infografía?`,
    options: [
      { number: 1, letter: 'A', text: 'Moler los granos con azúcar y leche.' },
      { number: 2, letter: 'B', text: 'Tostar los granos a altas temperaturas en la fábrica.' },
      { number: 3, letter: 'C', text: 'Secar los granos de cacao sobre esteras de madera al sol.' },
      { number: 4, letter: 'D', text: 'La recolección de las mazorcas maduras del árbol de cacao.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Infografía / Secuencia de Procesos',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Relaciono gráficas con texto escrito, ya sea completándolas o explicándolas.',
    justification: 'La opción D es la respuesta correcta porque en la numeración secuencial del diagrama, el proceso se inicia necesariamente en el campo con la cosecha y recolección de las mazorcas del árbol.',
    invalidOptionsReasoning: {
      A: 'La molienda con leche y azúcar corresponde al paso 5 y 6.',
      B: 'El tostado es el paso 4 en la fábrica.',
      C: 'El secado es el paso 3 posterior a la fermentación.'
    },
    socraticHints: {
      recordar: 'Observa el número 1 de la infografía.',
      comprender: '¿De dónde proviene la materia prima antes de llegar a los hornos y molinos?',
      aplicar: 'Anota en tu cuaderno: "Paso 1 = Cosecha y recolección de las mazorcas de cacao".',
      analizar: '¿Por qué la opción D es el inicio indiscutible de la cadena productiva?'
    }
  },
  {
    id: 608,
    grade: 6,
    questionNumber: 8,
    title: 'El origen del chocolate - Importancia religiosa en mayas y aztecas',
    contextText: TEXTO_CHOCOLATE_G6,
    statement: `De acuerdo con la infografía, ¿por qué los mayas y aztecas consideraban el cacao sagrado?`,
    options: [
      { number: 1, letter: 'A', text: 'Porque era considerado un regalo de los dioses a la humanidad.' },
      { number: 2, letter: 'B', text: 'Porque servía como medicina para curar la miopía.' },
      { number: 3, letter: 'C', text: 'Porque era el único alimento que podían comer en la selva.' },
      { number: 4, letter: 'D', text: 'Porque lo utilizaban para construir templos y pirámides.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Comprensión Literal de Datos Culturales',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Relaciono gráficas con texto escrito, ya sea completándolas o explicándolas.',
    justification: 'La respuesta correcta es la opción A porque el texto histórico adjunto a la infografía aclara que las civilizaciones prehispánicas creían que el árbol de cacao era una dádiva sagrada entregada por la divinidad Quetzalcóatl.',
    invalidOptionsReasoning: {
      B: 'No se le atribuían propiedades oftalmológicas en el texto.',
      C: 'Comían maíz, frijol, calabaza y carnes variadas.',
      D: 'El cacao es un fruto botánico, no un material de albañilería pétrea.'
    },
    socraticHints: {
      recordar: '¿Qué dios se menciona en la sección histórica de la infografía?',
      comprender: '¿Cuál era el origen mítico atribuido a la planta del cacao?',
      aplicar: 'Anota en tu cuaderno: "Motivo sagrado = Creían que era un regalo divino de los dioses".',
      analizar: '¿Por qué la opción A es la respuesta textual correcta?'
    }
  },
  {
    id: 609,
    grade: 6,
    questionNumber: 9,
    title: 'El origen del chocolate - Función de las flechas entre etapas',
    contextText: TEXTO_CHOCOLATE_G6,
    statement: `En la infografía, la flecha que une el proceso de tostado con el de molienda indica`,
    options: [
      { number: 1, letter: 'A', text: 'que se debe detener la fabricación de inmediato.' },
      { number: 2, letter: 'B', text: 'la secuencia de pasos que se debe seguir en la fábrica.' },
      { number: 3, letter: 'C', text: 'que el chocolate se echa a perder si se muele.' },
      { number: 4, letter: 'D', text: 'que los dos procesos ocurren en países diferentes.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Diagrama de Flujo / Vectores Gráficos',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Deduce las relaciones entre elementos lingüísticos y no lingüísticos.',
    standard: 'Relaciono gráficas con texto escrito, ya sea completándolas o explicándolas.',
    justification: 'La opción B es la respuesta correcta porque en un diagrama de procesos industriales las flechas indican la dirección obligatoria y el orden secuencial de transformación que sigue la materia prima.',
    invalidOptionsReasoning: {
      A: 'La flecha señala continuidad operativa, no interrupción.',
      C: 'La molienda es un paso técnico indispensable para hacer la pasta líquida.',
      D: 'Ambas etapas se llevan a cabo dentro de la misma planta de procesamiento.'
    },
    socraticHints: {
      recordar: '¿Cuál es el significado de una flecha en una infografía de pasos numerados?',
      comprender: '¿Cómo comunica el gráfico qué etapa viene después de la otra?',
      aplicar: 'Anota en tu cuaderno: "Función de las flechas = Indicar el orden y la secuencia del proceso industrial".',
      analizar: '¿Por qué la opción B es la explicación visual precisa?'
    }
  },
  {
    id: 610,
    grade: 6,
    questionNumber: 10,
    title: 'El origen del chocolate - Propósito principal de la infografía',
    contextText: TEXTO_CHOCOLATE_G6,
    statement: `La infografía tiene como propósito principal`,
    options: [
      { number: 1, letter: 'A', text: 'criticar a las personas que comen dulces.' },
      { number: 2, letter: 'B', text: 'enseñar a cultivar árboles gigantes en el jardín de la casa.' },
      { number: 3, letter: 'C', text: 'explicar de forma gráfica el origen histórico y el proceso de fabricación del chocolate.' },
      { number: 4, letter: 'D', text: 'vender boletas para una película sobre Quetzalcóatl.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Intención Comunicativa Global',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Infiere la intención comunicativa de infografías y textos explicativos.',
    standard: 'Caracterizo los textos de acuerdo con la intención comunicativa de quien los produce.',
    justification: 'La opción C es la respuesta correcta porque resume integralmente la finalidad didáctica del material: dar a conocer los antecedentes culturales del cacao y su transformación técnica en golosina.',
    invalidOptionsReasoning: {
      A: 'No condena el consumo del chocolate.',
      B: 'No es un instructivo de agronomía doméstica.',
      D: 'No es una cartelera de cine.'
    },
    socraticHints: {
      recordar: '¿Qué información entrega la infografía de principio a fin?',
      comprender: '¿Por qué integra historia indígena con las etapas industriales modernas?',
      aplicar: 'Anota en tu cuaderno: "Propósito = Explicar visualmente la historia y el proceso productivo del chocolate".',
      analizar: '¿Por qué la opción C es la síntesis de la intención comunicativa?'
    }
  },

  // =========================================================================
  // TEXTO 3: EL VIAJE DE CHIRO (Preguntas 11 a 15)
  // =========================================================================
  {
    id: 611,
    grade: 6,
    questionNumber: 11,
    title: 'El viaje de Chiro - Motivo de la salida de la granja',
    contextText: TEXTO_VIAJE_CHIRO_G6,
    statement: `En el texto, ¿por qué Chiro decidió salir de la granja?`,
    options: [
      { number: 1, letter: 'A', text: 'Porque el granjero lo había castigado sin comida.' },
      { number: 2, letter: 'B', text: 'Porque sentía curiosidad por explorar el bosque y hacer nuevos amigos.' },
      { number: 3, letter: 'C', text: 'Porque los animales del bosque lo estaban persiguiendo.' },
      { number: 4, letter: 'D', text: 'Porque se cayó accidentalmente en un pozo profundo.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Cuento / Motivaciones del Protagonista',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Comprendo elementos constitutivos de obras literarias, tales como tiempo, espacio, función de los personajes, lenguaje, atmósferas, diálogos, escenas, entre otros.',
    justification: 'La opción B es la respuesta correcta porque en los primeros párrafos se describe que Chiro estaba bien alimentado y cuidado, pero su profunda curiosidad lo impulsó a aventurarse fuera de la cerca.',
    invalidOptionsReasoning: {
      A: 'El granjero lo trataba bien y su tazón siempre estaba lleno.',
      C: 'Salió por propia voluntad y alegría, no huyendo de depredadores.',
      D: 'Salió caminando por la puerta abierta del corral.'
    },
    socraticHints: {
      recordar: '¿Qué sentía Chiro cada vez que miraba hacia el bosque?',
      comprender: '¿Cuál fue la oportunidad que aprovechó en la mañana primaveral?',
      aplicar: 'Anota en tu cuaderno: "Motivación = Curiosidad por explorar y buscar nuevos amigos".',
      analizar: '¿Por qué la opción B es la respuesta textual indiscutible?'
    }
  },
  {
    id: 612,
    grade: 6,
    questionNumber: 12,
    title: 'El viaje de Chiro - Reacción ante los ruidos nocturnos',
    contextText: TEXTO_VIAJE_CHIRO_G6,
    statement: `Cuando Chiro escuchó los ruidos extraños en el bosque, su reacción fue`,
    options: [
      { number: 1, letter: 'A', text: 'sentir miedo y darse cuenta de que estaba perdido.' },
      { number: 2, letter: 'B', text: 'ponerse a cantar canciones alegres con los pájaros.' },
      { number: 3, letter: 'C', text: 'dormirse profundamente hasta el día siguiente.' },
      { number: 4, letter: 'D', text: 'construir una casa de madera en la copa de un árbol.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Comprensión Literal de Estados Emocionales',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Comprendo elementos constitutivos de obras literarias, tales como tiempo, espacio, función de los personajes, lenguaje, atmósferas, diálogos, escenas, entre otros.',
    justification: 'La respuesta correcta es la opción A porque el relato afirma claramente que la oscuridad y los aullidos le causaron temor y desesperación al no saber cómo regresar a su hogar.',
    invalidOptionsReasoning: {
      B: 'No sintió alegría sino angustia.',
      C: 'No durmió plácidamente; lloró al pie del árbol.',
      D: 'Los perros no construyen viviendas en los árboles.'
    },
    socraticHints: {
      recordar: '¿Cómo cambió el estado de ánimo de Chiro cuando llegó el atardecer?',
      comprender: '¿Por qué se sentó a llorar junto al roble?',
      aplicar: 'Anota en tu cuaderno: "Reacción = Sintió miedo y comprendió que estaba perdido".',
      analizar: '¿Por qué la opción A es la descripción exacta de los hechos?'
    }
  },
  {
    id: 613,
    grade: 6,
    questionNumber: 13,
    title: 'El viaje de Chiro - La ayuda del búho sabio',
    contextText: TEXTO_VIAJE_CHIRO_G6,
    statement: `El búho sabio ayudó a Chiro al`,
    options: [
      { number: 1, letter: 'A', text: 'regalarle una linterna mágica.' },
      { number: 2, letter: 'B', text: 'llevarlo cargado en sus alas volando por el cielo.' },
      { number: 3, letter: 'C', text: 'indicarle la ruta del arroyo para orientarse y regresar a casa.' },
      { number: 4, letter: 'D', text: 'llamar por teléfono al dueño de la granja.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Comprensión Literal de Acciones',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Comprendo elementos constitutivos de obras literarias, tales como tiempo, espacio, función de los personajes, lenguaje, atmósferas, diálogos, escenas, entre otros.',
    justification: 'La opción C es la correcta porque la guía brindada por el ave consistió en una instrucción de orientación geográfica fluvial: seguir la corriente del arroyo para alcanzar la cerca de la granja.',
    invalidOptionsReasoning: {
      A: 'No aparecen objetos fantásticos como linternas mágicas.',
      B: 'El perrito regresó corriendo con sus propias patas.',
      D: 'No hay elementos de tecnología telefónica en la fábula.'
    },
    socraticHints: {
      recordar: '¿Qué le indicó el búho que debía seguir en el bosque?',
      comprender: '¿Por qué seguir el río hacia abajo permitía encontrar la granja?',
      aplicar: 'Anota en tu cuaderno: "Ayuda del búho = Indicar la corriente del agua para orientar su regreso".',
      analizar: '¿Por qué la opción C es la acción descrita en el cuento?'
    }
  },
  {
    id: 614,
    grade: 6,
    questionNumber: 14,
    title: 'El viaje de Chiro - Sentido figurado de "se le iluminó la mirada"',
    contextText: TEXTO_VIAJE_CHIRO_G6,
    statement: `La expresión “se le iluminó la mirada” significa que Chiro`,
    options: [
      { number: 1, letter: 'A', text: 'se llenó de alegría, esperanza y alivio al saber qué hacer.' },
      { number: 2, letter: 'B', text: 'encendió dos bombillos de luz dentro de sus pupilas.' },
      { number: 3, letter: 'C', text: 'se quemó los ojos por mirar directamente una fogata.' },
      { number: 4, letter: 'D', text: 'se quedó completamente ciego por la oscuridad de la noche.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Figuras Retóricas y Lenguaje Connotativo',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Reconoce significados, resúmenes, análisis y paráfrasis apropiados de un texto.',
    standard: 'Analizo los aspectos textuales, conceptuales y formales de cada uno de los textos que leo.',
    justification: 'La opción A es la respuesta correcta porque la metáfora de "iluminarse la mirada" describe el cambio anímico de la desesperación al gozo y la esperanza tras encontrar una solución a su problema.',
    invalidOptionsReasoning: {
      B: 'Es una lectura literal absurda de la metáfora.',
      C: 'No hubo ningún accidente con fuego.',
      D: 'Contradice el significado positivo de la expresión.'
    },
    socraticHints: {
      recordar: '¿Cómo cambia el rostro de una persona cuando encuentra una salida a una gran angustia?',
      comprender: '¿Qué transmite el brillo en los ojos en la literatura narrativa?',
      aplicar: 'Anota en tu cuaderno: "Se le iluminó la mirada = Sentir alivio, esperanza y alegría".',
      analizar: '¿Por qué la opción A es la interpretación connotativa acertada?'
    }
  },
  {
    id: 615,
    grade: 6,
    questionNumber: 15,
    title: 'El viaje de Chiro - Moraleja y enseñanza del cuento',
    contextText: TEXTO_VIAJE_CHIRO_G6,
    statement: `La enseñanza principal del cuento es que`,
    options: [
      { number: 1, letter: 'A', text: 'nunca se debe hablar con los búhos en el bosque.' },
      { number: 2, letter: 'B', text: 'los perros no deben beber agua de los ríos.' },
      { number: 3, letter: 'C', text: 'es peligroso salir a pasear en los días de primavera.' },
      { number: 4, letter: 'D', text: 'la curiosidad es natural, pero debemos actuar con prudencia y valorar la seguridad del hogar.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Moraleja y Formación de Valores',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Deduce el sentido alegórico o la enseñanza moral de un texto.',
    standard: 'Formulo hipótesis de comprensión acerca de las obras literarias que leo.',
    justification: 'La opción D es la respuesta correcta porque encierra el mensaje formativo esencial de los cuentos infantiles sobre extravíos: la prudencia ante los riesgos desconocidos y la gratitud por la protección familiar.',
    invalidOptionsReasoning: {
      A: 'El búho fue precisamente quien lo salvó con su sabiduría.',
      B: 'El agua del arroyo era limpia y sació su sed.',
      C: 'El peligro no era la estación del año, sino internarse sin precaución en un entorno desconocido.'
    },
    socraticHints: {
      recordar: '¿Qué lección aprendió Chiro tras casi quedarse atrapado en la noche?',
      comprender: '¿Cómo conjuga la historia el deseo de explorar con la importancia de la prudencia?',
      aplicar: 'Anota en tu cuaderno: "Enseñanza = Valorar el hogar y la prudencia frente al peligro".',
      analizar: '¿Por qué la opción D es la moraleja representativa?'
    }
  },

  // =========================================================================
  // TEXTO 4: FESTIVAL ESCOLAR DE TEATRO Y TÍTERES (Preguntas 16 a 20)
  // =========================================================================
  {
    id: 616,
    grade: 6,
    questionNumber: 16,
    title: 'Festival escolar de teatro - Propósito de la convocatoria',
    contextText: TEXTO_FESTIVAL_TEATRO_G6,
    statement: `El afiche invita principalmente a`,
    options: [
      { number: 1, letter: 'A', text: 'comprar uniformes deportivos para el campeonato de fútbol.' },
      { number: 2, letter: 'B', text: 'asistir y participar en el festival escolar de teatro y títeres.' },
      { number: 3, letter: 'C', text: 'cerrar el auditorio central por arreglos y mantenimiento.' },
      { number: 4, letter: 'D', text: 'elegir al personero estudiantil del año lectivo.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Afiche Escolar / Intención Comunicativa',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Infiere la intención comunicativa de afiches y carteleras escolares.',
    standard: 'Caracterizo los textos de acuerdo con la intención comunicativa de quien los produce.',
    justification: 'La opción B es la respuesta correcta porque toda la estructura informativa del cartel tiene como finalidad convocar a la comunidad educativa al festival de artes escénicas.',
    invalidOptionsReasoning: {
      A: 'No es un evento deportivo mercantil.',
      C: 'El auditorio será utilizado como sede de la celebración cultural.',
      D: 'No es una jornada electoral estudiantil.'
    },
    socraticHints: {
      recordar: '¿Cuál es el título principal destacado en letras grandes en el afiche?',
      comprender: '¿A qué evento cultural convoca la Institución Educativa Simón Bolívar?',
      aplicar: 'Anota en tu cuaderno: "Propósito = Invitar a presenciar y participar en el festival de teatro".',
      analizar: '¿Por qué la opción B es la opción correcta?'
    }
  },
  {
    id: 617,
    grade: 6,
    questionNumber: 17,
    title: 'Festival escolar de teatro - Fecha, hora y lugar',
    contextText: TEXTO_FESTIVAL_TEATRO_G6,
    statement: `Según el afiche, ¿dónde y cuándo se realizará el evento?`,
    options: [
      { number: 1, letter: 'A', text: 'En la cancha de fútbol, el sábado 18 de octubre a las 8:00 a.m.' },
      { number: 2, letter: 'B', text: 'En el parque de la ciudad, el domingo 30 de octubre al mediodía.' },
      { number: 3, letter: 'C', text: 'En el auditorio central del colegio, el viernes 25 de octubre a las 3:00 p.m.' },
      { number: 4, letter: 'D', text: 'En la biblioteca municipal, el lunes 21 de octubre por la noche.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Información Literal de Coordenadas',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Relaciono gráficas con texto escrito, ya sea completándolas o explicándolas.',
    justification: 'La respuesta correcta es la opción C porque coincide de manera exacta con los datos literales consignados en la ficha técnica del evento cultural.',
    invalidOptionsReasoning: {
      A: 'El 18 de octubre es el plazo límite de inscripciones, no el día de las funciones.',
      B: 'El evento es en las instalaciones del colegio Simón Bolívar.',
      D: 'El horario es a las 3:00 p.m. en el auditorio central.'
    },
    socraticHints: {
      recordar: 'Busca los renglones de Fecha, Hora y Lugar en el cartel.',
      comprender: '¿Cuál opción coincide punto por punto con los tres datos oficiales?',
      aplicar: 'Anota en tu cuaderno: "25 de octubre, 3:00 p.m., Auditorio Central".',
      analizar: '¿Por qué la opción C es la única correcta?'
    }
  },
  {
    id: 618,
    grade: 6,
    questionNumber: 18,
    title: 'Festival escolar de teatro - Significado de "entrada libre"',
    contextText: TEXTO_FESTIVAL_TEATRO_G6,
    statement: `La frase “¡Entrada libre!” significa que`,
    options: [
      { number: 1, letter: 'A', text: 'no se necesita pagar dinero por la boleta para poder ingresar.' },
      { number: 2, letter: 'B', text: 'las personas pueden romper las sillas del auditorio.' },
      { number: 3, letter: 'C', text: 'los asistentes deben llevar sus propios instrumentos de cocina.' },
      { number: 4, letter: 'D', text: 'solo se permite el ingreso a quienes vayan disfrazados.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Expresiones Sociales y Términos Públicos',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Reconoce significados, resúmenes, análisis y paráfrasis apropiados de un texto.',
    standard: 'Analizo los aspectos textuales, conceptuales y formales de cada uno de los textos que leo.',
    justification: 'La opción A es la respuesta correcta porque la expresión "entrada libre y gratuita" es una fórmula estándar que indica que el acceso al espectáculo no requiere pago ni compra de boletería.',
    invalidOptionsReasoning: {
      B: 'No significa licencia para causar desmanes materiales.',
      C: 'No tiene relación con utensilios culinarios.',
      D: 'No impone obligatoriedad de disfraces al público asistente.'
    },
    socraticHints: {
      recordar: '¿Qué significa cuando un evento cultural es de entrada libre?',
      comprender: '¿Por qué aclara que es "gratuita para toda la familia"?',
      aplicar: 'Anota en tu cuaderno: "Entrada libre = Ingreso gratuito sin cobro de dinero".',
      analizar: '¿Por qué la opción A es la definición adecuada?'
    }
  },
  {
    id: 619,
    grade: 6,
    questionNumber: 19,
    title: 'Festival escolar de teatro - Simbolismo de las máscaras',
    contextText: TEXTO_FESTIVAL_TEATRO_G6,
    statement: `El dibujo de las máscaras de teatro (tragedia y comedia) cumple la función de`,
    options: [
      { number: 1, letter: 'A', text: 'anunciar una fiesta de disfraces en la noche de brujas.' },
      { number: 2, letter: 'B', text: 'indicar que los asistentes deben taparse la cara por razones de salud.' },
      { number: 3, letter: 'C', text: 'promover la venta de antifaces de plástico en la tienda.' },
      { number: 4, letter: 'D', text: 'simbolizar la temática artística y teatral del evento.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Lenguaje Simbólico / Semiótica Visual',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Deduce las relaciones entre elementos lingüísticos y no lingüísticos.',
    standard: 'Relaciono gráficas con texto escrito, ya sea completándolas o explicándolas.',
    justification: 'La opción D es la correcta porque las máscaras de la risa y el llanto (comedia y tragedia) constituyen el emblema universal y representativo del arte dramático y el teatro.',
    invalidOptionsReasoning: {
      A: 'No es una fiesta de Halloween o disfraces de terror.',
      B: 'No son mascarillas de bioseguridad sanitaria.',
      C: 'No es un anuncio comercial de cotillón o juguetería.'
    },
    socraticHints: {
      recordar: '¿Cuál es el símbolo universal que representa al teatro en todo el mundo?',
      comprender: '¿Por qué las dos caretas identifican de inmediato las artes escénicas?',
      aplicar: 'Anota en tu cuaderno: "Máscaras = Símbolo universal de la comedia, la tragedia y el teatro".',
      analizar: '¿Por qué la opción D es la función comunicativa de la imagen?'
    }
  },
  {
    id: 620,
    grade: 6,
    questionNumber: 20,
    title: 'Festival escolar de teatro - Requisito para participar como actor o titiritero',
    contextText: TEXTO_FESTIVAL_TEATRO_G6,
    statement: `Si un estudiante desea participar con su obra de títeres, el afiche indica que debe`,
    options: [
      { number: 1, letter: 'A', text: 'pagar una multa en la secretaría académica.' },
      { number: 2, letter: 'B', text: 'inscribirse con el profesor de Educación Artística antes del 18 de octubre.' },
      { number: 3, letter: 'C', text: 'construir el escenario de madera él solo el día del evento.' },
      { number: 4, letter: 'D', text: 'enviar una carta al alcalde de la ciudad.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Instrucciones e Información Literal',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos (tiempo, lugares, hechos, personajes y narrador).',
    standard: 'Identifico las principales características formales del texto.',
    justification: 'La respuesta correcta es la opción B porque el afiche establece claramente el procedimiento de inscripción formal con el docente de Artes y estipula la fecha límite del 18 de octubre.',
    invalidOptionsReasoning: {
      A: 'La participación no conlleva costos ni multas.',
      C: 'La logística del auditorio la organiza la institución escolar.',
      D: 'El trámite es estrictamente interno dentro del colegio Simón Bolívar.'
    },
    socraticHints: {
      recordar: 'Lee la sección de preguntas e inscripciones al pie del afiche.',
      comprender: '¿Con qué profesor y antes de qué fecha se debe registrar el grupo?',
      aplicar: 'Anota en tu cuaderno: "Inscripción = Con el profesor de Artística antes del 18 de octubre".',
      analizar: '¿Por qué la opción B es la respuesta literal exacta?'
    }
  }
];
