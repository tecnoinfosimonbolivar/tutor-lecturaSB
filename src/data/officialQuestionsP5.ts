// Banco Oficial de Preguntas ICFES Evaluar para Avanzar / Saber 11 (Grados 9°, 10° y 11°)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
// Área: LECTURA / COMPRENSIÓN LECTORA Y LECTURA CRÍTICA
import { Question } from '../types';

export const OFFICIAL_GRADE_9_10_11: Record<number, Question[]> = {
  // ================= GRADO 9° =================
  9: [
    {
      id: 901,
      grade: 9,
      questionNumber: 1,
      title: 'Ensayo sobre la dignidad humana y los derechos fundamentales',
      statement: 'Lee el siguiente fragmento del filósofo Immanuel Kant:\n\n"En el reino de los fines todo tiene o un precio o una dignidad. Aquello que tiene precio puede ser sustituido por algo equivalente; en cambio, lo que se halla por encima de todo precio y, por tanto, no admite ningún equivalente, posee una dignidad. La habilidad y el esmero en el trabajo tienen un precio de mercado; la gracia y el ingenio tienen un precio de afecto; pero aquello que constituye la condición para que algo sea fin en sí mismo no tiene meramente un valor relativo o precio, sino un valor intrínseco: la dignidad moral.\n\nPor tanto, el ser humano nunca debe ser tratado como un simple medio o instrumento para los fines egoístas de otros, sino siempre y al mismo tiempo como un fin en sí mismo."\n\n¿Cuál es la diferencia esencial que establece Kant entre aquello que tiene "precio" y lo que posee "dignidad"?',
      options: [
        { number: 1, letter: 'A', text: 'El precio se paga en monedas de oro y la dignidad se paga en billetes de banco.' },
        { number: 2, letter: 'B', text: 'Lo que tiene precio es sustituible por un equivalente material, mientras que lo que tiene dignidad es insustituible y posee un valor moral intrínseco incondicional.' },
        { number: 3, letter: 'C', text: 'La dignidad solo pertenece a las máquinas y el precio a los seres vivos.' },
        { number: 4, letter: 'D', text: 'No existe ninguna diferencia, ambos términos son sinónimos comerciales.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      component: 'Texto Continuo - Filosófico / Argumentativo',
      affirmation: 'Identifica distinciones conceptuales y premisas ontológicas en textos éticos y filosóficos.',
      evidence: 'Deduce la distinción categórica kantiana entre el valor de cambio instrumental y el valor intrínseco de la persona.',
      standard: 'Comprendo e interpreto textos con alto nivel de abstracción conceptual y temática filosófica.',
      justification: 'Kant define que lo que tiene precio admite un equivalente o sustituto en el mercado, mientras que la persona humana, al ser un fin en sí misma, posee dignidad moral y no puede ser reducida a un objeto comercializable.',
      invalidOptionsReasoning: {
        A: 'Confunde una categoría ontológica y ética con medios de pago materiales.',
        C: 'Inversion absurda de conceptos: las cosas tienen precio de mercado, las personas dignidad.',
        D: 'Ignora la antítesis fundamental sobre la que descansa toda la argumentación kantiana.'
      },
      socraticHints: {
        recordar: '¿Qué ocurre con las cosas que tienen precio cuando se dañan o se pierden?',
        comprender: '¿Por qué una persona nunca puede tener un "precio de mercado" ni ser usada como herramienta?',
        aplicar: 'Anota en tu cuaderno la fórmula del imperativo categórico que prohíbe instrumentalizar a los demás.',
        analizar: '¿Cómo fundamenta este principio filosófico los Derechos Humanos modernos?'
      }
    },
    {
      id: 902,
      grade: 9,
      questionNumber: 2,
      title: 'Columna: El dilema ético de los algoritmos y la Inteligencia Artificial',
      statement: 'Lee el siguiente artículo de opinión contemporánea:\n\n"Los sistemas de inteligencia artificial generativa y los algoritmos de recomendación en redes sociales procesan millones de datos en milisegundos. Sin embargo, no debemos confundir la velocidad de procesamiento computacional con la sabiduría ética ni la capacidad de juicio moral. Los algoritmos reproducen y amplifican con frecuencia los sesgos, prejuicios y asimetrías de las sociedades que los programan y de los datos con que son entrenados.\n\nDelegar decisiones críticas sobre la educación, la justicia penal o el empleo a sistemas automatizados sin una supervisión humana reflexiva equivale a renunciar a nuestra responsabilidad cívica. La técnica debe estar siempre subordinada a los valores del humanismo y la equidad social, jamás al revés."\n\n¿Con cuál de los siguientes enunciados se sintetiza más fielmente la advertencia del autor?',
      options: [
        { number: 1, letter: 'A', text: 'La inteligencia artificial resolverá automáticamente todos los problemas morales de la humanidad sin necesidad de intervención humana.' },
        { number: 2, letter: 'B', text: 'El avance tecnológico no debe desplazar el juicio ético humano ni la supervisión crítica de los sesgos algorítmicos.' },
        { number: 3, letter: 'C', text: 'Debemos desconectar todas las computadoras del planeta y prohibir la ciencia.' },
        { number: 4, letter: 'D', text: 'Los algoritmos nunca cometen errores porque son matemáticamente perfectos.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      component: 'Texto Continuo - Argumentativo / Ensayo de Opinión',
      affirmation: 'Evalúa la validez de los argumentos y la postura crítica frente al impacto de la tecnología en la sociedad.',
      evidence: 'Reconoce la tesis del texto que aboga por el control ético y humano sobre la automatización algorítmica.',
      standard: 'Evalúo el rigor de los argumentos y las implicaciones éticas de los debates contemporáneos.',
      justification: 'El autor insiste en que la potencia computacional no equivale a juicio moral y que los algoritmos requieren supervisión humana constante para evitar la perpetuación de sesgos y la pérdida de responsabilidad cívica.',
      invalidOptionsReasoning: {
        A: 'Es la postura ingenua y tecnocrática que el autor critica abiertamente.',
        C: 'Es una posición extremista no planteada por el autor, quien pide subordinación ética, no destrucción técnica.',
        D: 'Contradice la advertencia explícita sobre los sesgos y prejuicios reproducidos por los modelos.'
      },
      socraticHints: {
        recordar: '¿Por qué los algoritmos pueden reproducir sesgos y prejuicios según el texto?',
        comprender: '¿Cuál es la diferencia entre "velocidad de procesamiento" y "juicio moral"?',
        aplicar: 'Escribe en tu cuaderno un ejemplo de cómo un algoritmo podría cometer una injusticia si nadie lo supervisa.',
        analizar: '¿Por qué la ética es una dimensión exclusivamente humana que no se puede delegar a un código?'
      }
    }
  ],

  // ================= GRADO 10° =================
  10: [
    {
      id: 1001,
      grade: 10,
      questionNumber: 1,
      title: 'Elogio de la dificultad y el pensamiento crítico (Estanislao Zuleta)',
      statement: 'Lee el siguiente fragmento del ensayo "Elogio de la dificultad" del pensador colombiano Estanislao Zuleta:\n\n"La pobreza y la impotencia de la imaginación nunca se manifiestan de una manera tan clara como cuando se trata de imaginar la felicidad. Entonces soñamos con un reino de la abundancia sin trabajo, de la armonía sin tensiones, de la verdad sin dudas ni búsquedas laboriosas. En lugar de desear una sociedad en la que sea realizable y necesario trabajar arduamente para hacer efectivas nuestras posibilidades, deseamos un mundo de facilidades donde todos los problemas estén resueltos de antemano.\n\nBuscamos eludir el esfuerzo, la angustia de la creación y la incertidumbre del pensamiento crítico, anhelando recetas dogmáticas que nos ahorren la maravillosa pero difícil tarea de pensar por nosotros mismos."\n\nSegún Estanislao Zuleta, ¿en qué consiste la verdadera trampa del anhelo humano por un mundo sin dificultades?',
      options: [
        { number: 1, letter: 'A', text: 'En que el ser humano prefiere la holgazanería y el dogma antes que asumir la responsabilidad intelectual y creativa de pensar críticamente.' },
        { number: 2, letter: 'B', text: 'En que la felicidad solo se consigue ganando mucho dinero sin estudiar.' },
        { number: 3, letter: 'C', text: 'En que la tecnología del siglo XXI no ha inventado suficientes máquinas de entretenimiento.' },
        { number: 4, letter: 'D', text: 'En que las personas que dudan nunca consiguen respuestas ciertas.' }
      ],
      correctOption: 1,
      correctLetter: 'A',
      competency: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      component: 'Texto Continuo - Ensayístico / Filosófico',
      affirmation: 'Comprende la crítica a las visiones idealistas y facilistas de la existencia humana en un ensayo filosófico.',
      evidence: 'Identifica la tesis que confronta el deseo de soluciones mágicas con la necesidad ética del esfuerzo y la deliberación crítica.',
      standard: 'Comprendo ensayos filosóficos y literarios reconociendo su valor crítico en el pensamiento latinoamericano.',
      justification: 'Zuleta denuncia que soñar con una vida sin tensiones ni esfuerzo conduce a la sumisión ante doctrinas dogmáticas y a la renuncia del pensamiento autónomo.',
      invalidOptionsReasoning: {
        A: 'Es la formulación exacta de la tesis de Zuleta.',
        B: 'Zuleta no analiza el enriquecimiento material, sino la madurez psicológica e intelectual.',
        C: 'El texto no se enfoca en artefactos tecnológicos sino en la psicología del deseo humano.',
        D: 'Zuleta valora la duda como motor indispensable de la búsqueda honesta de la verdad.'
      },
      socraticHints: {
        recordar: '¿Cómo imagina comúnmente la gente la felicidad según el primer párrafo?',
        comprender: '¿Por qué Zuleta sostiene que la duda y la dificultad son necesarias para el crecimiento personal?',
        aplicar: 'Anota en tu cuaderno una reflexión sobre por qué aprender temas complejos en el colegio requiere paciencia y esfuerzo.',
        analizar: '¿Cómo se relaciona el "Elogio de la dificultad" con la formación ciudadana y democrática?'
      }
    },
    {
      id: 1002,
      grade: 10,
      questionNumber: 2,
      title: 'Discurso de Estocolmo: La soledad de América Latina (Gabriel García Márquez)',
      statement: 'Lee el siguiente fragmento del discurso de aceptación del Premio Nobel de Literatura (1982) por Gabriel García Márquez:\n\n"Me atrevo a pensar que es esta realidad descomunal, y no sólo su expresión literaria, la que este año ha merecido la atención de la Academia Sueca de las Letras. Una realidad que no es la del papel, sino que vive con nosotros y determina cada instante de nuestras incontables muertes cotidianas, y que sustenta un manantial de creación insaciable, pleno de desdicha y de belleza, del cual este colombiano errante y desprovisto no es más que una cifra más señalada por la suerte.\n\nPoetas y mendigos, músicos y profetas, guerreros y malandrines, todas las criaturas de aquella soledad desenfrenada hemos tenido que pedirle muy poco a la imaginación, porque el desafío mayor para nosotros ha sido la insuficiencia de los recursos convencionales para hacer creíble nuestra vida. Este es, amigos, el nudo de nuestra soledad."\n\n¿Por qué afirma García Márquez que los escritores latinoamericanos han tenido que "pedirle muy poco a la imaginación"?',
      options: [
        { number: 1, letter: 'A', text: 'Porque los escritores no tenían talento para inventar historias de ficción.' },
        { number: 2, letter: 'B', text: 'Porque la realidad histórica, social y humana de América Latina es tan desmesurada, trágica y mágica que supera cualquier ficción concebida.' },
        { number: 3, letter: 'C', text: 'Porque los libros en Europa estaban prohibidos para los autores colombianos.' },
        { number: 4, letter: 'D', text: 'Porque preferían copiar las noticias de los periódicos sin hacer ningún cambio artístico.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      component: 'Texto Continuo - Literario / Discurso Argumentativo',
      affirmation: 'Evalúa los recursos retóricos y el sentido estético-político en discursos de autores universales.',
      evidence: 'Interpreta la paradoja garc働くiana sobre el realismo mágico como un testimonio de la desmesura de la historia continental.',
      standard: 'Analizo críticamente los discursos y ensayos de la literatura hispanoamericana contemporánea.',
      justification: 'García Márquez sostiene que la realidad cotidiana de América Latina —llena de contrastes desmedidos, milagros cotidianos, violencia y belleza indómita— es tan extraordinaria que el escritor sólo necesita dar testimonio de ella sin recurrir a artificios ficticios.',
      invalidOptionsReasoning: {
        A: 'Es un juicio peyorativo que desconoce el genio del autor galardonado.',
        C: 'El discurso se pronunció precisamente al recibir el máximo galardón europeo en Suecia.',
        D: 'Desconoce la elaboración poética y el compromiso testimonial del autor.'
      },
      socraticHints: {
        recordar: '¿A qué llama el autor "el nudo de nuestra soledad"?',
        comprender: '¿Cómo explica García Márquez la relación entre el realismo mágico y la historia de nuestros pueblos?',
        aplicar: 'Escribe en tu cuaderno una metáfora inspirada en los paisajes o costumbres del Tolima.',
        analizar: '¿Por qué la literatura es una vía fundamental para comprender la identidad de un país?'
      }
    }
  ],

  // ================= GRADO 11° (SABER 11 LECTURA CRÍTICA) =================
  11: [
    {
      id: 1101,
      grade: 11,
      questionNumber: 1,
      title: 'El contrato social y la libertad civil (Jean-Jacques Rousseau)',
      statement: 'Lee el siguiente fragmento de "El contrato social" de Jean-Jacques Rousseau:\n\n"«El hombre ha nacido libre y, sin embargo, por todas partes se encuentra encadenado». ¿Cómo se ha producido este cambio? Lo ignoro. ¿Qué puede legitimarlo? Creo poder resolver esta cuestión.\n\nSi no considerase más que la fuerza y el efecto que de ella deriva, diría: en tanto que un pueblo está obligado a obedecer y obedece, hace bien; tan pronto como puede sacudir el yugo y lo sacude, obra mucho mejor aún, pues recobrando su libertad por el mismo derecho con que se la han arrebatado, o tiene justificación para recuperarla, o no la tenían para quitársela.\n\nPero el orden social es un derecho sagrado que sirve de base a todos los demás. Sin embargo, este derecho no proviene de la naturaleza; está, por tanto, fundado en convenciones. La cuestión consiste en saber cuáles son estas convenciones."\n\n¿Cuál es el argumento central de Rousseau sobre el origen de la legitimidad del orden social?',
      options: [
        { number: 1, letter: 'A', text: 'El orden social es un orden biológico natural impuesto por la ley del más fuerte físicamente.' },
        { number: 2, letter: 'B', text: 'El orden social legítimo no surge de la fuerza física ni de la naturaleza, sino de convenciones y acuerdos mutuos entre ciudadanos libres.' },
        { number: 3, letter: 'C', text: 'Los reyes y monarcas tienen el derecho divino eterno de someter a sus súbditos por la fuerza militar.' },
        { number: 4, letter: 'D', text: 'La libertad individual debe ser abolida para siempre para evitar las discusiones cívicas.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      component: 'Texto Continuo - Filosófico / Teoría Política',
      affirmation: 'Identifica los supuestos lógicos y las tesis centrales en textos fundacionales del pensamiento político moderno.',
      evidence: 'Deduce que para Rousseau la convención o pacto social es la única fuente válida de autoridad política legítima.',
      standard: 'Comprendo e interpreto textos filosóficos y políticos analizando las relaciones entre libertad, derecho y sociedad.',
      justification: 'Rousseau afirma explícitamente: "este derecho no proviene de la naturaleza; está, por tanto, fundado en convenciones", descartando la fuerza bruta o el derecho divino como bases legítimas del poder.',
      invalidOptionsReasoning: {
        A: 'Rousseau rechaza categóricamente que la fuerza física cree derecho u obligación moral.',
        C: 'La obra de Rousseau refuta precisamente el absolutismo monárquico y el derecho divino.',
        D: 'El propósito del contrato social es preservar la libertad civil, no destruirla.'
      },
      socraticHints: {
        recordar: '¿Qué frase célebre abre el fragmento de Rousseau?',
        comprender: '¿Por qué la obediencia fundada en la simple fuerza física no constituye un deber moral legítimo?',
        aplicar: 'Anota en tu cuaderno cómo se relaciona el concepto de "pacto social" con la Constitución Política de Colombia de 1991.',
        analizar: '¿Por qué la soberanía popular es el pilar de un Estado Social de Derecho democrático?'
      }
    },
    {
      id: 1102,
      grade: 11,
      questionNumber: 2,
      title: 'Caricatura de Quino: Libertad y los discursos de los medios',
      statement: 'En una tira cómica de Mafalda (Quino), la pequeña niña Libertad observa un televisor encendido:\n- Cuadro 1: El locutor del noticiero, con corbata y rostro solemne, dice: «Y para finalizar, un mensaje de optimismo: ¡El futuro está en manos de quienes no se quejan y aceptan la realidad tal como viene!». \n- Cuadro 2: Libertad apaga el televisor con un chasquido rotundo del interruptor.\n- Cuadro 3: Libertad mira al lector con los brazos cruzados y comenta con ironía: «¡Qué curioso! A los que les va de maravilla con la realidad actual siempre les parece una pésima idea que alguien intente cambiarla».\n\n¿Cuál es la función del comentario final de Libertad en el tercer cuadro?',
      options: [
        { number: 1, letter: 'A', text: 'Elogiar la sabiduría y objetividad del presentador de noticias.' },
        { number: 2, letter: 'B', text: 'Desvelar los intereses ocultos detrás de los discursos conformistas que buscan mantener el status quo de los sectores privilegiados.' },
        { number: 3, letter: 'C', text: 'Pedir que le compren un televisor de pantalla más grande.' },
        { number: 4, letter: 'D', text: 'Demostrar que a los niños no les interesan los temas sociales.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      component: 'Texto Discontinuo - Historieta de Crítica Social (Caricatura)',
      affirmation: 'Evalúa la intencionalidad pragmática, la ironía y el trasfondo ideológico en textos gráficos de opinión.',
      evidence: 'Analiza la crítica al discurso hegemónico de resignación social emitido por los medios de comunicación.',
      standard: 'Evalúo el uso de la ironía, el humor crítico y las estrategias argumentativas en textos gráficos.',
      justification: 'Libertad desenmascara la ideología del mensaje televisivo: quienes se benefician del estado actual de las cosas catalogan la crítica social y la protesta ciudadana como rebeldía innecesaria para evitar perder sus privilegios.',
      invalidOptionsReasoning: {
        A: 'El gesto y el comentario son abiertamente críticos e irónicos, no laudatorios.',
        C: 'No hay alusión a compras o tecnología doméstica.',
        D: 'Toda la tira demuestra un agudo compromiso cívico y pensamiento crítico infantil.'
      },
      socraticHints: {
        recordar: '¿Qué recomendaba el locutor del noticiero en el primer cuadro?',
        comprender: '¿Por qué a quienes tienen privilegios no les agrada que la gente critique o intente transformar la realidad?',
        aplicar: 'Escribe en tu cuaderno una reflexión sobre cómo identificar noticias sesgadas en medios de comunicación.',
        analizar: '¿Cómo utiliza Quino el recurso del humor para invitar al pensamiento crítico profundo?'
      }
    }
  ]
};
