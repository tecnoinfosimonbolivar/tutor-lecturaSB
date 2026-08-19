// Banco Oficial de Preguntas ICFES Evaluar para Avanzar (Grado 6°)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
// Área: LECTURA / COMPRENSIÓN LECTORA
import { Question } from '../types';

export const OFFICIAL_GRADE_6: Record<number, Question[]> = {
  // ================= GRADO 6° =================
  6: [
    {
      id: 601,
      grade: 6,
      questionNumber: 1,
      title: 'El lenguaje secreto de las hormigas cortadoras de hojas',
      statement: 'Lee el siguiente texto científico de divulgación:\n\n"En los bosques tropicales del Tolima y de toda Colombia, las hormigas arrieras o cortadoras de hojas (género Atta) forman una de las sociedades más complejas y organizadas del reino animal. A diferencia de lo que muchas personas creen, las hormigas no se comen las hojas que cortan y transportan en largas hileras hacia sus hormigueros subterráneos.\n\nEn realidad, las hojas son utilizadas como abono biológico para cultivar un hongo microscópico específico dentro de cámaras especiales. Este hongo es el verdadero y único alimento de la colonia. Para comunicarse sin emitir sonidos vocales, las hormigas utilizan señales químicas llamadas feromonas. Cuando una exploradora encuentra un árbol de hojas frescas, deposita un rastro de olor en el suelo que guía con precisión milimétrica a miles de compañeras hacia la fuente de alimento."\n\n¿Para qué utilizan verdaderamente las hormigas arrieras las hojas que recolectan?',
      options: [
        { number: 1, letter: 'A', text: 'Para alimentarse directamente de la clorofila de las hojas en el camino.' },
        { number: 2, letter: 'B', text: 'Como abono para cultivar un hongo subterráneo que constituye su verdadero alimento.' },
        { number: 3, letter: 'C', text: 'Para construir techos impermeables contra las tormentas en la superficie.' },
        { number: 4, letter: 'D', text: 'Para camuflarse y esconderse de los pájaros depredadores.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      component: 'Texto Continuo - Expositivo / Científico',
      affirmation: 'Identifica información explícita que desmiente una creencia común en un texto expositivo.',
      evidence: 'Ubica en el segundo párrafo la explicación exacta del destino y uso biológico de las hojas.',
      standard: 'Comprendo textos de divulgación científica identificando conceptos y relaciones causales.',
      justification: 'El texto aclara de forma contundente: "las hojas son utilizadas como abono biológico para cultivar un hongo microscópico específico... Este hongo es el verdadero y único alimento de la colonia".',
      invalidOptionsReasoning: {
        A: 'El texto rechaza explícitamente que coman las hojas de forma directa.',
        C: 'No construyen techos con las hojas, las fermentan bajo tierra.',
        D: 'El transporte es alimenticio y agrobiológico, no de camuflaje defensivo.'
      },
      socraticHints: {
        recordar: '¿Qué aclara el texto sobre la creencia popular de que las hormigas comen hojas?',
        comprender: '¿Por qué se dice que las hormigas arrieras son una especie de "agricultoras"?',
        aplicar: 'Anota en tu cuaderno cómo funcionan las feromonas químicas en la comunicación de la colonia.',
        analizar: '¿Cómo cambia nuestra comprensión de la naturaleza al leer divulgación científica con base en evidencias?'
      }
    },
    {
      id: 602,
      grade: 6,
      questionNumber: 2,
      title: 'El origen del bambuco y la identidad musical de Ibagué',
      statement: 'Lee el siguiente fragmento cultural:\n\n"Ibagué, conocida con orgullo como la Capital Musical de Colombia, debe gran parte de su distinción sonora a géneros tradicionales como el bambuco, el pasillo y la guabina. El bambuco es considerado la máxima expresión del folclor andino colombiano; en su ritmo y cadencia convergen la melancolía del canto indígena precolombino, la armonía de las cuerdas españolas (el tiple, la bandola y la guitarra) y los sutiles acentos rítmicos aportados por la herencia africana.\n\nEn la danza del bambuco, la coreografía representa un cortejo amoroso lleno de respeto, gracia y picardía, donde el pañuelo blanco, el sombrero de pindo y las faldas amplias de flores narran sin palabras las costumbres campesinas de nuestros valles y montañas del Tolima Grande."\n\n¿Qué tres vertientes culturales se fusionan en el bambuco según el texto?',
      options: [
        { number: 1, letter: 'A', text: 'La música electrónica moderna, el jazz estadounidense y el pop latino.' },
        { number: 2, letter: 'B', text: 'El canto indígena precolombino, las cuerdas de origen español y el aporte rítmico afrodescendiente.' },
        { number: 3, letter: 'C', text: 'La ópera italiana, la música clásica alemana y las danzas nórdicas.' },
        { number: 4, letter: 'D', text: 'La percusión asiática, la guitarra eléctrica y los sintetizadores.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      component: 'Texto Continuo - Informativo / Cultural',
      affirmation: 'Identifica los componentes históricos y multiculturales señalados en un texto sobre identidad regional.',
      evidence: 'Reconoce en el primer párrafo las tres raíces étnicas y culturales que originan el bambuco.',
      standard: 'Valoro la diversidad cultural del país a través de la lectura crítica de textos patrimoniales.',
      justification: 'El texto expone con claridad que en el bambuco convergen: "la melancolía del canto indígena precolombino, la armonía de las cuerdas españolas... y los sutiles acentos rítmicos aportados por la herencia africana".',
      invalidOptionsReasoning: {
        A: 'Son géneros contemporáneos ajenos a la raíz folclórica andina.',
        C: 'Son tradiciones europeas clásicas no citadas en el texto.',
        D: 'Contiene instrumentos contemporáneos que no forman parte del mestizaje tradicional.'
      },
      socraticHints: {
        recordar: '¿Cuáles son los tres instrumentos de cuerda tradicionales mencionados en la lectura?',
        comprender: '¿Por qué se afirma que el folclor colombiano es un mestizaje cultural enriquecedor?',
        aplicar: 'Escribe en tu cuaderno los elementos del vestuario tradicional del bambuco.',
        analizar: '¿Cómo fortalece la preservación de estas tradiciones el sentido de pertenencia de los jóvenes ibaguereños?'
      }
    },
    {
      id: 603,
      grade: 6,
      questionNumber: 3,
      title: 'Crónica: El rescate en el Cañón de las Hermosas',
      statement: 'Lee el siguiente fragmento de una crónica periodística:\n\n"La bruma cubría los riscos empinados cuando el equipo de guardabosques divisó al montañista extraviado. Llevaba más de cuarenta y ocho horas soportando temperaturas bajo cero, protegido únicamente por un plástico reflectivo y su impermeable impermeable. Al ser rescatado, sus primeras palabras no fueron de queja o lamento, sino de profunda admiración por la majestuosidad de la cordillera.\n\n«Esta montaña no es nuestra enemiga —declaró con voz trémula al tomar una taza de aguapanela caliente—. El frío me recordó lo pequeños y vulnerables que somos los seres humanos cuando no nos preparamos con rigor para respetar la fuerza de la naturaleza»."\n\n¿Cuál es la reflexión central que hace el montañista tras su experiencia de supervivencia?',
      options: [
        { number: 1, letter: 'A', text: 'Que las montañas deben ser destruidas para que nadie se pierda.' },
        { number: 2, letter: 'B', text: 'Que el ser humano es frágil ante la naturaleza y debe afrontarla con respeto, humildad y debida preparación.' },
        { number: 3, letter: 'C', text: 'Que los guardabosques tardaron demasiado en llevar la aguapanela.' },
        { number: 4, letter: 'D', text: 'Que nunca se debe usar ropa impermeable en las alturas.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      component: 'Texto Continuo - Narrativo / Crónica Periodística',
      affirmation: 'Evalúa el sentido ético y la toma de conciencia del protagonista de un texto testimonial.',
      evidence: 'Interpreta la declaración final del montañista como un llamado a la prudencia y al respeto por el entorno natural.',
      standard: 'Comprendo crónicas y reportajes valorando las posturas y aprendizajes de vida que transmiten.',
      justification: 'Las palabras textuales del montañista destacan que la montaña no es una rival, sino un espacio imponente que exige preparación rigurosa y humildad ante la magnitud de la naturaleza.',
      invalidOptionsReasoning: {
        A: 'Es una propuesta destructiva contraria a la admiración expresada.',
        C: 'El montañista no emitió reclamos, sino palabras de gratitud y reflexión.',
        D: 'El impermeable fue precisamente lo que le ayudó a sobrevivir bajo cero.'
      },
      socraticHints: {
        recordar: '¿Cuántas horas pasó el montañista en la intemperie de la cordillera?',
        comprender: '¿Por qué el montañista afirma que "la montaña no es nuestra enemiga"?',
        aplicar: 'Anota en tu cuaderno tres recomendaciones de seguridad para una caminata ecológica en Ibagué.',
        analizar: '¿Qué diferencia hay entre reaccionar con rencor o con aprendizaje frente a una experiencia extrema?'
      }
    }
  ]
};
