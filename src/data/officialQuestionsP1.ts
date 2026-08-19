// Banco Oficial de Preguntas ICFES Evaluar para Avanzar (Grados 3° a 11°)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
// Área: LECTURA / COMPRENSIÓN LECTORA
import { Question } from '../types';

export const OFFICIAL_GRADE_3: Record<number, Question[]> = {
  // ================= GRADO 3° =================
  3: [
    {
      id: 301,
      grade: 3,
      questionNumber: 1,
      title: 'El zorro y la cigüeña en el banquete',
      statement: 'Lee atentamente el siguiente texto:\n\n"Un día, el astuto zorro invitó a la cigüeña a almorzar a su casa. Para jugarle una broma pesada, el zorro sirvió una deliciosa sopa en un plato completamente plano y extendido. El zorro se tomó toda su sopa en pocos segundos lamiendo el plato con su lengua, mientras que la pobre cigüeña, con su largo y delgado pico, no pudo probar ni una sola gota de sopa y se quedó con mucha hambre.\n\nDías después, la cigüeña invitó al zorro a su hogar y le sirvió una sabrosa comida dentro de un jarrón alto y de cuello muy angosto. La cigüeña metió su largo pico con facilidad y disfrutó la comida, mientras que el zorro, por tener el hocico ancho, no pudo alcanzar ningún bocado."\n\n¿Por qué la cigüeña no pudo tomar la sopa en la casa del zorro?',
      options: [
        { number: 1, letter: 'A', text: 'Porque la sopa estaba demasiado caliente y quemaba su pico.' },
        { number: 2, letter: 'B', text: 'Porque el plato era muy plano para su pico largo y delgado.' },
        { number: 3, letter: 'C', text: 'Porque la cigüeña no tenía hambre ese día.' },
        { number: 4, letter: 'D', text: 'Porque el zorro no le dio permiso de comer.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      component: 'Texto Continuo - Narrativo (Fábula)',
      affirmation: 'Reconoce información explícita sobre las características físicas de los personajes y las acciones narradas.',
      evidence: 'Ubica en el texto la causa literal por la cual la cigüeña no pudo consumir el alimento.',
      standard: 'Comprendo textos literarios para propiciar el desarrollo de mi capacidad creativa y lúdica.',
      justification: 'El texto dice explícitamente: "...el zorro sirvió una deliciosa sopa en un plato completamente plano... mientras que la pobre cigüeña, con su largo y delgado pico, no pudo probar ni una sola gota".',
      invalidOptionsReasoning: {
        A: 'El texto no menciona que la sopa estuviera caliente, sino que el plato era plano.',
        C: 'El texto aclara que la cigüeña sí tenía hambre y no pudo comer por la forma del plato.',
        D: 'El zorro la había invitado a almorzar, la limitación fue física y causada por la broma.'
      },
      socraticHints: {
        recordar: '¿Cómo era el plato donde el zorro sirvió la sopa y qué forma tiene el pico de la cigüeña?',
        comprender: 'Explica con tus palabras por qué la forma del plato le impedía comer a la cigüeña.',
        aplicar: 'Busca y subraya en el texto la frase exacta donde se describe el pico de la cigüeña.',
        analizar: '¿Por qué la opción B es la única que coincide exactamente con lo narrado?'
      }
    },
    {
      id: 302,
      grade: 3,
      questionNumber: 2,
      title: 'Afiche escolar: Cuidado y ahorro del agua',
      statement: 'Observa el mensaje del afiche escolar ubicado en los pasillos del colegio Simón Bolívar:\n\n"¡CADA GOTA CUENTA, BOLIVARIANO!\n1. Cierra la llave mientras te enjabonas las manos o lavas tus dientes.\n2. Si ves un grifo goteando en los baños de la escuela, avisa de inmediato a tu profesor o al personal de aseo.\n3. Utiliza un vaso con agua para cepillarte.\n¡El agua es vida para Ibagué y para nuestro planeta!"\n\nSegún el afiche, ¿qué debe hacer un estudiante si observa un grifo goteando en el colegio?',
      options: [
        { number: 1, letter: 'A', text: 'Intentar desarmar el grifo con sus útiles escolares.' },
        { number: 2, letter: 'B', text: 'Avisar de inmediato a su profesor o al personal de aseo.' },
        { number: 3, letter: 'C', text: 'Dejarlo goteando porque el agua se limpia sola.' },
        { number: 4, letter: 'D', text: 'Cerrar el colegio para que nadie use los baños.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      component: 'Texto Discontinuo - Afiche Informativo',
      affirmation: 'Identifica las instrucciones directas y el propósito comunicativo en un texto discontinuo.',
      evidence: 'Extrae la acción puntual que el texto indica ante una situación específica de desperdicio de agua.',
      standard: 'Identifico el propósito comunicativo en textos informativos y publicitarios de mi entorno escolar.',
      justification: 'El punto 2 del afiche indica de forma textual y clara: "Si ves un grifo goteando en los baños de la escuela, avisa de inmediato a tu profesor o al personal de aseo".',
      invalidOptionsReasoning: {
        A: 'El afiche no pide a los estudiantes reparar tuberías con útiles.',
        C: 'Va en contra del mensaje ecológico de ahorro.',
        D: 'Es una medida exagerada no contemplada en el texto.'
      },
      socraticHints: {
        recordar: '¿Qué dice el punto número 2 del afiche sobre los grifos que gotean?',
        comprender: '¿Por qué es importante comunicar el daño a los adultos del colegio?',
        aplicar: 'Anota en tu cuaderno de lectura la instrucción número 2 del afiche.',
        analizar: '¿Por qué avisar a tiempo previene el desperdicio del agua en nuestra institución?'
      }
    },
    {
      id: 303,
      grade: 3,
      questionNumber: 3,
      title: 'El pequeño colibrí y el incendio del bosque',
      statement: 'Lee el siguiente relato tradicional:\n\n"Hubo una vez un gran incendio en el bosque. Todos los animales corrían aterrorizados para salvar sus vidas: los osos, los venados y los jaguares huían sin mirar atrás. En medio del pánico, un pequeño colibrí volaba una y otra vez hacia el río, recogía una gota de agua en su diminuto pico y la arrojaba sobre las inmensas llamas.\n\nEl jaguar, al verlo tan cansado, le gritó burlándose: «¡Colibrí insensato! ¿Acaso crees que vas a apagar ese gran incendio con esas pequeñas gotas?». El colibrí, sin detener su vuelo, le respondió con serenidad: «Yo sé que solo no puedo apagarlo, pero estoy haciendo mi parte»."\n\n¿Cuál es la principal enseñanza o mensaje que transmite la actitud del colibrí?',
      options: [
        { number: 1, letter: 'A', text: 'Que los animales pequeños nunca deben hablar con los grandes.' },
        { number: 2, letter: 'B', text: 'Que cada aporte individual es valioso cuando se actúa con responsabilidad y compromiso.' },
        { number: 3, letter: 'C', text: 'Que lo mejor ante un problema difícil es huir y burlarse de los demás.' },
        { number: 4, letter: 'D', text: 'Que el agua del río no sirve para apagar incendios en el bosque.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      component: 'Texto Continuo - Narrativo (Cuento con moraleja)',
      affirmation: 'Infiere la intención global del autor y la moraleja de una narración literaria.',
      evidence: 'Deduce el sentido ético de la respuesta del protagonista frente a la adversidad.',
      standard: 'Reconozco en los textos literarios la posibilidad de desarrollar mi juicio moral y reflexivo.',
      justification: 'La respuesta del colibrí ("estoy haciendo mi parte") demuestra que, aunque el reto sea inmenso, la contribución personal y el compromiso solidario tienen un inmenso valor moral.',
      invalidOptionsReasoning: {
        A: 'Es una conclusión errónea que promueve la separación entre animales.',
        C: 'Describe la actitud negativa del jaguar que el relato critica.',
        D: 'Contradice la realidad física del agua y el sentido simbólico del cuento.'
      },
      socraticHints: {
        recordar: '¿Qué le respondió el colibrí al jaguar cuando este se burló de él?',
        comprender: '¿Qué significa la frase "estoy haciendo mi parte" en la vida diaria?',
        aplicar: 'Escribe en tu cuaderno una situación en el colegio donde todos deban colaborar.',
        analizar: '¿Por qué la perseverancia del colibrí deja una gran lección a los animales grandes?'
      }
    },
    {
      id: 304,
      grade: 3,
      questionNumber: 4,
      title: 'La receta de la limonada refrescante',
      statement: 'Lee las instrucciones de la receta escolar:\n\n"INGREDIENTES:\n- 4 limones jugosos.\n- 1 litro de agua fresca.\n- 3 cucharadas de miel o panela rallada.\n\nPREPARACIÓN:\n1. Lava muy bien los limones con agua limpia.\n2. Con la ayuda de un adulto, corta los limones por la mitad.\n3. Exprime el jugo de los limones en una jarra grande.\n4. Agrega el litro de agua y la miel.\n5. Revuelve con una cuchara larga hasta disolver por completo.\n6. Sirve en vasos con cubos de hielo."\n\n¿Qué paso se debe realizar INMEDIATAMENTE DESPUÉS de exprimir el jugo de los limones?',
      options: [
        { number: 1, letter: 'A', text: 'Lavar los limones con agua limpia.' },
        { number: 2, letter: 'B', text: 'Servir en vasos con cubos de hielo.' },
        { number: 3, letter: 'C', text: 'Agregar el litro de agua y la miel a la jarra.' },
        { number: 4, letter: 'D', text: 'Cortar los limones por la mitad con un adulto.' }
      ],
      correctOption: 3,
      correctLetter: 'C',
      competency: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      component: 'Texto Continuo - Instructivo / Receta',
      affirmation: 'Reconoce la secuencia temporal y el orden de los pasos en un texto instructivo.',
      evidence: 'Identifica la acción que sigue directamente a un paso determinado en una guía procedimental.',
      standard: 'Comprendo el sentido de las instrucciones escritas y sigo secuencias de pasos ordenados.',
      justification: 'En la secuencia de preparación, el paso 3 es "Exprime el jugo..." y el paso 4 (inmediatamente posterior) es "Agrega el litro de agua y la miel".',
      invalidOptionsReasoning: {
        A: 'Lavar los limones es el paso 1 (anterior).',
        B: 'Servir con hielo es el paso 6 (el último).',
        D: 'Cortar los limones es el paso 2 (anterior).'
      },
      socraticHints: {
        recordar: '¿Cuál es el número del paso donde se exprime el jugo de los limones?',
        comprender: 'Lee qué acción viene en el número 4 justo después del paso 3.',
        aplicar: 'Numera en tu cuaderno los pasos de la receta del 1 al 6.',
        analizar: '¿Por qué es fundamental seguir el orden cronológico en un texto instructivo?'
      }
    },
    {
      id: 305,
      grade: 3,
      questionNumber: 5,
      title: 'Historieta: Simón y su perro Chispas',
      statement: 'En una historieta de 3 viñetas se presenta la siguiente escena:\n- Viñeta 1: Simón llega a su casa con el morral escolar puesto y ve que su perrito Chispas no sale a recibirlo moviendo la cola como siempre.\n- Viñeta 2: Simón busca debajo de la cama y encuentra a Chispas temblando porque afuera en la calle hay fuegos artificiales sonando muy fuerte (¡Pum! ¡Pum!).\n- Viñeta 3: Simón abraza a Chispas con una manta suave, cierra la ventana para que no entre el ruido y le acaricia la cabeza sonriendo.\n\n¿Por qué Chispas estaba escondido temblando debajo de la cama?',
      options: [
        { number: 1, letter: 'A', text: 'Porque tenía frío y quería dormir una siesta.' },
        { number: 2, letter: 'B', text: 'Porque tenía miedo por el fuerte ruido de los fuegos artificiales.' },
        { number: 3, letter: 'C', text: 'Porque estaba enojado con Simón por llegar tarde del colegio.' },
        { number: 4, letter: 'D', text: 'Porque quería jugar a las escondidas con Simón.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      component: 'Texto Discontinuo - Historieta / Cómic',
      affirmation: 'Relaciona elementos visuales, onomatopeyas y texto en una narración gráfica para deducir causas.',
      evidence: 'Infiere la emoción y causa del comportamiento del personaje a partir de los indicios visuales y sonoros.',
      standard: 'Interpreto historietas y textos icónicos reconociendo la relación entre imagen y significado.',
      justification: 'La onomatopeya ¡Pum! ¡Pum! y la imagen de fuegos artificiales en la viñeta 2 explican que el perro Chispas siente temor por las detonaciones estruendosas.',
      invalidOptionsReasoning: {
        A: 'El temblor es por el susto del ruido, no por frío común.',
        C: 'Los perros no sienten rencor por el horario escolar.',
        D: 'El temblor y el susto no corresponden a una actitud de juego.'
      },
      socraticHints: {
        recordar: '¿Qué sonido y dibujo aparecen en la viñeta 2 fuera de la casa?',
        comprender: '¿Cómo reaccionan muchas mascotas frente a la pólvora o ruidos estruendosos?',
        aplicar: 'Dibuja en tu cuaderno las 3 viñetas y señala la causa del miedo de Chispas.',
        analizar: '¿Por qué la actitud cariñosa de Simón en la viñeta 3 ayuda a calmar a su mascota?'
      }
    },
    {
      id: 306,
      grade: 3,
      questionNumber: 6,
      title: 'El oso de anteojos de la cordillera',
      statement: 'Lee el siguiente texto informativo:\n\n"El oso de anteojos, también conocido como oso andino, es la única especie de oso que vive en América del Sur. Se le llama así porque tiene unas manchas de color blanco o amarillento alrededor de sus ojos que parecen unos lentes o anteojos. Estas manchas son únicas en cada oso, como si fueran su huella digital.\n\nVive en los páramos y bosques de niebla de la cordillera de los Andes, como los que rodean a Ibagué y al Parque Nacional Natural Los Nevados. Aunque es un animal grande y fuerte, su alimento favorito son las frutas silvestres, las bayas, las ramas tiernas y el corazón de las plantas llamadas bromelias. Es un gran trepador de árboles y ayuda a sembrar nuevos árboles al dispersar las semillas de las frutas que come."\n\n¿Por qué se dice en el texto que las manchas del oso de anteojos son como una "huella digital"?',
      options: [
        { number: 1, letter: 'A', text: 'Porque el oso usa sus patas para pintar árboles en el bosque.' },
        { number: 2, letter: 'B', text: 'Porque las manchas alrededor de sus ojos son únicas y diferentes en cada individuo.' },
        { number: 3, letter: 'C', text: 'Porque el oso tiene los dedos con forma de anteojos.' },
        { number: 4, letter: 'D', text: 'Porque la policía del bosque le toma fotos a los osos.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      component: 'Texto Continuo - Informativo / Expositivo',
      affirmation: 'Comprende el sentido de comparaciones y analogías en textos de ciencias naturales.',
      evidence: 'Explica el significado de una figura comparativa dentro de una descripción biológica.',
      standard: 'Identifico la información central y el sentido de las analogías en textos informativos.',
      justification: 'El texto explica claramente la comparación: "Estas manchas son únicas en cada oso, como si fueran su huella digital", indicando que ningún oso tiene exactamente el mismo patrón de manchas.',
      invalidOptionsReasoning: {
        A: 'El oso no pinta árboles.',
        C: 'Las manchas están en el rostro alrededor de los ojos, no en los dedos.',
        D: 'Es una opción absurda no fundamentada en el texto.'
      },
      socraticHints: {
        recordar: '¿En qué parte del cuerpo tiene las manchas el oso andino?',
        comprender: '¿Para qué sirve la huella dactilar de las personas y por qué se parece a las manchas del oso?',
        aplicar: 'Anota en tu cuaderno la función ecológica del oso al comer frutas.',
        analizar: '¿Por qué la singularidad de las manchas permite a los biólogos identificar a cada oso?'
      }
    },
    {
      id: 307,
      grade: 3,
      questionNumber: 7,
      title: 'El campesino y el árbol de manzanas',
      statement: 'Lee el siguiente texto:\n\n"Un campesino tenía en su huerto un viejo manzano que ya no daba manzanas. Pensando que el árbol no servía para nada, tomó un hacha decidido a talarlo para usar su madera como leña. Al acercarse, vio que en el tronco vivían cientos de gorriones, abejas cantarinas y pequeñas ardillas que llenaban el huerto de alegría y música con sus cantos.\n\nLos animales le suplicaron: «¡Por favor, no cortes nuestro hogar! Si nos dejas vivir aquí, alegraremos tus mañanas con dulces melodías y polinizaremos las flores de tus hortalizas». El campesino bajó el hacha, comprendió que todos los seres vivos cumplen una función importante y cuidó el árbol con amor por el resto de sus días."\n\n¿Qué motivó finalmente al campesino a NO cortar el árbol?',
      options: [
        { number: 1, letter: 'A', text: 'Que el hacha se le dañó cuando intentó cortar el tronco.' },
        { number: 2, letter: 'B', text: 'Que comprendió el valor del árbol como hogar y refugio de otros seres vivos.' },
        { number: 3, letter: 'C', text: 'Que comenzó a llover muy fuerte y tuvo que entrar a su casa.' },
        { number: 4, letter: 'D', text: 'Que un vecino le ofreció comprarle la madera más cara.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      component: 'Texto Continuo - Narrativo',
      affirmation: 'Evalúa el cambio de perspectiva de un personaje a partir de una reflexión ética sobre la naturaleza.',
      evidence: 'Determina las razones morales y ecológicas que modifican la decisión del protagonista.',
      standard: 'Reconozco los valores éticos en narraciones literarias y su relación con el cuidado del medio ambiente.',
      justification: 'El relato concluye cuando el campesino "comprendió que todos los seres vivos cumplen una función importante y cuidó el árbol", reconociendo el valor de la vida y el equilibrio ecológico.',
      invalidOptionsReasoning: {
        A: 'El texto no menciona que el hacha se rompiera.',
        C: 'No hubo lluvia en el relato.',
        D: 'Ningún vecino intervino en la historia.'
      },
      socraticHints: {
        recordar: '¿Quiénes vivían dentro del viejo árbol de manzanas?',
        comprender: '¿Por qué el árbol seguía siendo muy valioso a pesar de no dar frutos?',
        aplicar: 'Escribe en tu cuaderno una reflexión sobre por qué debemos proteger los árboles viejos.',
        analizar: '¿Cómo cambió la forma de pensar del campesino al escuchar a los animales?'
      }
    },
    {
      id: 308,
      grade: 3,
      questionNumber: 8,
      title: 'Aviso del horario de la Biblioteca Escolar',
      statement: 'Lee el aviso informativo pegado en la puerta de la biblioteca:\n\n"BIBLIOTECA ESCOLAR SIMÓN BOLÍVAR\nHorario de atención:\n- Lunes a Jueves: 7:00 a.m. a 3:00 p.m. (Jornada continua)\n- Viernes: 7:00 a.m. a 12:30 p.m. (Tarde de organización y limpieza)\n- Sábados y Domingos: Cerrado.\n\nREQUISITOS PARA PRÉSTAMO DE LIBROS:\n- Portar el carné escolar vigente.\n- Cuidar las páginas y devolver el libro en un plazo máximo de 5 días hábiles."\n\nSi un estudiante va a la biblioteca un viernes a las 2:00 de la tarde, ¿qué ocurrirá?',
      options: [
        { number: 1, letter: 'A', text: 'Encontrará la biblioteca abierta hasta las 5:00 p.m.' },
        { number: 2, letter: 'B', text: 'Encontrará la biblioteca cerrada porque los viernes atienden hasta las 12:30 p.m.' },
        { number: 3, letter: 'C', text: 'Le prestarán diez libros sin necesidad de carné.' },
        { number: 4, letter: 'D', text: 'Tendrá que pagar una multa en dinero.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      component: 'Texto Discontinuo - Aviso Informativo',
      affirmation: 'Cruza información explícita de días y horas para determinar la validez de una situación cotidiana.',
      evidence: 'Identifica el horario específico de atención de los días viernes a partir de la lectura del aviso.',
      standard: 'Comprendo la información de horarios y carteleras escolares.',
      justification: 'El aviso dice claramente: "Viernes: 7:00 a.m. a 12:30 p.m.". A las 2:00 p.m. del viernes ya está cerrada.',
      invalidOptionsReasoning: {
        A: 'Los viernes cierran a las 12:30 p.m., no a las 5:00 p.m.',
        C: 'El carné siempre es obligatorio y el horario ya finalizó.',
        D: 'El aviso no habla de multas monetarias.'
      },
      socraticHints: {
        recordar: '¿Cuál es la hora de cierre de la biblioteca los días viernes?',
        comprender: 'Compara la hora de la visita (2:00 p.m.) con la hora de cierre del viernes (12:30 p.m.).',
        aplicar: 'Copia en tu cuaderno el horario completo de lunes a viernes.',
        analizar: '¿Por qué es importante leer con atención las condiciones y horarios en los avisos públicos?'
      }
    }
  ]
};
