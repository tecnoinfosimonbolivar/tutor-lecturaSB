// Banco Oficial de Preguntas ICFES Evaluar para Avanzar (Grados 4° y 5°)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
// Área: LECTURA / COMPRENSIÓN LECTORA
import { Question } from '../types';

export const OFFICIAL_GRADE_4_5: Record<number, Question[]> = {
  // ================= GRADO 4° =================
  4: [
    {
      id: 401,
      grade: 4,
      questionNumber: 1,
      title: 'La leyenda de la flor del frailejón en los páramos',
      statement: 'Lee el siguiente texto:\n\n"En las altas cumbres de la cordillera Central colombiana, donde el frío cala los huesos y la neblina abraza las montañas, habitan los frailejones. Cuentan los abuelos indígenas que estas plantas esponjosas son los guardianes sagrados del agua. Con sus hojas cubiertas de vellocino blanco y suave, atrapan diminutas gotas de agua suspendidas en las nubes y las conducen suavemente hacia el suelo musgoso.\n\nAllí, el suelo esponjoso del páramo retiene el agua como una gigantesca cisterna natural y la va soltando gota a gota a través de riachuelos cristalinos que luego forman los ríos Combeima, Chipalo y Coello, que abastecen a la ciudad de Ibagué. Sin los frailejones, los ríos de nuestra región se secarían en las épocas de verano y la vida en los valles desaparecería."\n\nSegún el texto, ¿cuál es la función principal que cumplen las hojas vellosas de los frailejones?',
      options: [
        { number: 1, letter: 'A', text: 'Servir de alimento exclusivo para los jaguares de la selva.' },
        { number: 2, letter: 'B', text: 'Atrapar las gotas de agua de la neblina y conducirlas hacia el suelo del páramo.' },
        { number: 3, letter: 'C', text: 'Producir madera para construir casas en la cordillera.' },
        { number: 4, letter: 'D', text: 'Evitar que la niebla llegue a las ciudades del valle.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      component: 'Texto Continuo - Informativo / Leyenda Ecológica',
      affirmation: 'Reconoce información puntual sobre los procesos naturales descritos en un texto descriptivo.',
      evidence: 'Ubica en el párrafo inicial el mecanismo biológico por el cual el frailejón captura el agua de las nubes.',
      standard: 'Comprendo diversos tipos de texto utilizando algunas estrategias de búsqueda y almacenamiento de información.',
      justification: 'El texto expresa literalmente: "Con sus hojas cubiertas de vellocino blanco y suave, atrapan diminutas gotas de agua suspendidas en las nubes y las conducen suavemente hacia el suelo musgoso".',
      invalidOptionsReasoning: {
        A: 'Los jaguares no viven en el páramo ni comen hojas de frailejón.',
        C: 'El frailejón no se usa para madera y es una especie protegida.',
        D: 'La niebla no se detiene, sino que sus gotas son absorbidas.'
      },
      socraticHints: {
        recordar: '¿Cómo son las hojas del frailejón y qué atrapan en el aire del páramo?',
        comprender: '¿Por qué se considera al páramo una "gigantesca cisterna natural"?',
        aplicar: 'Anota en tu cuaderno la relación entre el frailejón y los ríos de Ibagué.',
        analizar: '¿Por qué proteger los páramos garantiza el agua para nuestra ciudad?'
      }
    },
    {
      id: 402,
      grade: 4,
      questionNumber: 2,
      title: 'Infografía: El ciclo de vida de la mariposa monarca',
      statement: 'Observa la descripción de la infografía sobre la metamorfosis:\n\n1. HUEVO: La mariposa hembra deposita pequeños huevecillos en el envés de hojas nutritivas.\n2. ORUGA (Larva): Nace una pequeña oruga que come hojas continuamente y crece mudando de piel varias veces.\n3. CRISÁLIDA (Pupa): La oruga teje un capullo protector y permanece inmóvil mientras su cuerpo se transforma por completo.\n4. MARIPOSA ADULTA: Emerge con alas coloridas, lista para volar, alimentarse del néctar de las flores y polinizar los campos.\n\n¿En cuál etapa del ciclo de vida la mariposa permanece inmóvil dentro de una estructura protectora mientras ocurre su transformación interna?',
      options: [
        { number: 1, letter: 'A', text: 'En la etapa de Huevo.' },
        { number: 2, letter: 'B', text: 'En la etapa de Oruga.' },
        { number: 3, letter: 'C', text: 'En la etapa de Crisálida o Pupa.' },
        { number: 4, letter: 'D', text: 'En la etapa de Mariposa Adulta.' }
      ],
      correctOption: 3,
      correctLetter: 'C',
      competency: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      component: 'Texto Discontinuo - Infografía Científica',
      affirmation: 'Identifica las características de fases o categorías específicas en una infografía secuencial.',
      evidence: 'Relaciona la descripción de inmovilidad y envoltura protectora con la fase de crisálida.',
      standard: 'Interpreto información presentada en diagramas, esquemas y textos con apoyo gráfico.',
      justification: 'En el paso 3 se especifica: "CRISÁLIDA (Pupa): La oruga teje un capullo protector y permanece inmóvil mientras su cuerpo se transforma por completo".',
      invalidOptionsReasoning: {
        A: 'El huevo es la fase inicial antes del nacimiento de la oruga.',
        B: 'La oruga es activa y come hojas constantemente.',
        D: 'La mariposa adulta vuela y se alimenta de néctar.'
      },
      socraticHints: {
        recordar: '¿Cómo se llama la etapa número 3 donde se forma el capullo?',
        comprender: '¿Qué cambios ocurren adentro de la crisálida antes de salir con alas?',
        aplicar: 'Dibuja en tu cuaderno de lectura las cuatro fases en orden circular.',
        analizar: '¿Por qué la metamorfosis es un ejemplo de cambio estructural completo?'
      }
    },
    {
      id: 403,
      grade: 4,
      questionNumber: 3,
      title: 'El puente colgante y la lección de solidaridad',
      statement: 'Lee el siguiente texto:\n\n"Para llegar a la escuela rural de El Salado, los niños debían cruzar un viejo puente colgante de madera sobre la quebrada. Una tarde de lluvia intensa, dos tablones centrales del puente se rompieron. Al día siguiente, Mateo y Sofía se encontraron frente al abismo. Mateo propuso regresar a casa y no asistir a clases, pero Sofía vio unas ramas gruesas de bambú caídas en la orilla.\n\nJuntos, llamaron a don Guillermo, el vecino más cercano. Con sogas firmes y el apoyo del adulto, aseguraron los nuevos tablones y probaron el paso con cuidado. Gracias a su iniciativa y trabajo en equipo, todos los niños de la vereda pudieron llegar a tiempo a sus evaluaciones escolares."\n\n¿Qué actitud de Sofía fue determinante para resolver el problema del puente?',
      options: [
        { number: 1, letter: 'A', text: 'El conformismo de querer devolverse de inmediato para su casa.' },
        { number: 2, letter: 'B', text: 'La iniciativa proactiva de buscar soluciones con los materiales del entorno y pedir ayuda a un adulto.' },
        { number: 3, letter: 'C', text: 'El enojo y los reclamos hacia el vecino por no haber arreglado el puente antes.' },
        { number: 4, letter: 'D', text: 'El miedo a las lluvias que caían en la quebrada.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      component: 'Texto Continuo - Narrativo',
      affirmation: 'Evalúa las actitudes y valores de los personajes frente a un obstáculo comunitario.',
      evidence: 'Juzga positivamente el liderazgo constructivo de la protagonista frente al desánimo.',
      standard: 'Reconozco los principales elementos constitutivos de un proceso de comunicación y resolución de conflictos.',
      justification: 'Sofía no se rindió como Mateo; observó los recursos disponibles (ramas de bambú) y buscó la orientación de don Guillermo para reparar el paso de forma segura.',
      invalidOptionsReasoning: {
        A: 'El conformismo fue la primera reacción de Mateo, no de Sofía.',
        C: 'Sofía nunca expresó enojo ni reproches.',
        D: 'El miedo no la paralizó, sino que actuó con prudencia y valentía.'
      },
      socraticHints: {
        recordar: '¿Qué propuso Mateo inicialmente al ver los tablones rotos y qué hizo Sofía?',
        comprender: '¿Por qué fue prudente llamar a un adulto antes de intentar cruzar o reparar?',
        aplicar: 'Escribe en tu cuaderno una propuesta de solución para un problema común en tu salón.',
        analizar: '¿Cómo influye una actitud positiva frente a las dificultades escolares?'
      }
    }
  ],

  // ================= GRADO 5° =================
  5: [
    {
      id: 501,
      grade: 5,
      questionNumber: 1,
      title: 'El Cañón del Combeima: Santuario de biodiversidad',
      statement: 'Lee el siguiente texto informativo:\n\n"El Cañón del Combeima, ubicado a pocos minutos del centro urbano de Ibagué, es una de las cuencas hidrográficas y ambientales más ricas y estratégicas del departamento del Tolima. Este corredor ecológico sirve de puerta de entrada al Parque Nacional Natural Los Nevados y alberga una impresionante variedad de pisos térmicos, desde los valles templados hasta las cumbres nevadas del volcán Tolima.\n\nEn este territorio habitan especies emblemáticas en peligro de conservación, como el loro orejiamarillo, la danta de páramo y el cóndor de los Andes. Además de su riqueza biológica, el río Combeima suministra más del 80% del agua potable que consume la población de Ibagué. Sin embargo, la deforestación de las laderas y el turismo irresponsable sin manejo de basuras amenazan la estabilidad de sus laderas y la pureza de sus fuentes hídricas."\n\n¿Cuál es la idea central del segundo párrafo del texto?',
      options: [
        { number: 1, letter: 'A', text: 'Que Ibagué no tiene montañas ni fuentes de agua potable.' },
        { number: 2, letter: 'B', text: 'Que el Cañón del Combeima tiene una gran importancia hídrica y ecológica, pero enfrenta serias amenazas ambientales.' },
        { number: 3, letter: 'C', text: 'Que todos los turistas deben dejar basuras en las quebradas del Tolima.' },
        { number: 4, letter: 'D', text: 'Que el cóndor de los Andes solo se alimenta de loros orejiamarillos.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      component: 'Texto Continuo - Informativo / Expositivo',
      affirmation: 'Sintetiza la idea principal de un párrafo identificando la relación entre importancia y problemática.',
      evidence: 'Extrae la tesis central que vincula el valor hídrico/biológico del Cañón con los riesgos de deterioro.',
      standard: 'Comprendo la estructura de textos expositivos y determino sus ideas principales y secundarias.',
      justification: 'El segundo párrafo expone tanto la función vital del río para Ibagué y su fauna, como las amenazas directas por deforestación y contaminación que ponen en riesgo el ecosistema.',
      invalidOptionsReasoning: {
        A: 'Contradice todo el texto, que habla de las cumbres y el 80% del agua de Ibagué.',
        C: 'Es una conducta destructiva censurada en la lectura.',
        D: 'Es una afirmación falsa no contenida en el texto sobre las aves.'
      },
      socraticHints: {
        recordar: '¿Qué porcentaje del agua de Ibagué proviene del río Combeima según el texto?',
        comprender: '¿Cuáles son los dos problemas ambientales que amenazan las laderas del cañón?',
        aplicar: 'Escribe en tu cuaderno de lectura un resumen de dos renglones sobre el Cañón del Combeima.',
        analizar: '¿Por qué la conservación del cañón es un deber ciudadano para todos los ibaguereños?'
      }
    },
    {
      id: 502,
      grade: 5,
      questionNumber: 2,
      title: 'El mito tolimese de la Madremonte',
      statement: 'Lee el siguiente fragmento de tradición oral tolimense:\n\n"Cuentan los campesinos ribereños del Tolima que la Madremonte es una mujer de ojos centellantes vestida con musgos, hojas verdes y lianas de la selva. Dicen que vive en las cavernas profundas donde nacen las quebradas vírgenes. Nunca ataca a los labradores honestos ni a los niños que caminan por los senderos respetando los árboles.\n\nPero cuando escucha el ruido de las motosierras de los taladores furtivos, el olor a pólvora de los cazadores ilegales o ve que alguien arroja venenos a las aguas, la Madremonte se enfurece. Entonces brama como una tempestad, hace crecer los ríos con crecientes súbitas de lodo y pierde a los destructores en la espesura del monte para que aprendan a respetar a la madre naturaleza."\n\n¿A qué personajes castiga la Madremonte según la leyenda tradicional?',
      options: [
        { number: 1, letter: 'A', text: 'A los campesinos humildes que cultivan la tierra con amor.' },
        { number: 2, letter: 'B', text: 'A las personas que talan árboles ilegalmente, cazan animales y contaminan los ríos.' },
        { number: 3, letter: 'C', text: 'A los niños que asisten puntualmente a sus escuelas rurales.' },
        { number: 4, letter: 'D', text: 'A los pájaros que cantan en las copas de los árboles.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      component: 'Texto Continuo - Narrativo (Mito folclórico)',
      affirmation: 'Identifica a los destinatarios de las acciones descritas en un relato tradicional.',
      evidence: 'Ubica en el segundo párrafo los motivos explícitos por los cuales la criatura mítica castiga a ciertos individuos.',
      standard: 'Caracterizo los textos de tradición oral (mitos, leyendas) y su función en la cultura regional.',
      justification: 'El texto señala puntualmente que castiga a "los taladores furtivos, los cazadores ilegales o quienes arrojan venenos a las aguas".',
      invalidOptionsReasoning: {
        A: 'El texto dice expresamente que "nunca ataca a los labradores honestos".',
        C: 'No ataca a niños respetuosos.',
        D: 'La Madremonte protege la fauna y la flora silvestre.'
      },
      socraticHints: {
        recordar: '¿Quiénes reciben el enojo de la Madremonte según el segundo párrafo?',
        comprender: '¿Cuál es el valor ecológico que los mitos tradicionales transmitían a las comunidades?',
        aplicar: 'Anota en tu cuaderno las características físicas de la Madremonte.',
        analizar: '¿Por qué las leyendas orales servían como leyes de protección ambiental comunitaria?'
      }
    },
    {
      id: 503,
      grade: 5,
      questionNumber: 3,
      title: 'Caricatura: El uso excesivo de pantallas',
      statement: 'En una caricatura social se observa a una familia de cuatro personas sentadas en la misma sala de su casa:\n- Cada uno de ellos (el padre, la madre y los dos hijos) está mirando fijamente la pantalla brillante de su propio teléfono celular, con audífonos puestos.\n- En la mesa de centro hay un juego de mesa de mesa tradicional cubierto de una gruesa capa de polvo y telarañas.\n- En la pared de la sala hay un cuadro que dice: "Familia unida en el diálogo".\n\n¿Cuál es la ironía o crítica central que plantea la caricatura?',
      options: [
        { number: 1, letter: 'A', text: 'Que las casas modernas no tienen suficiente luz eléctrica.' },
        { number: 2, letter: 'B', text: 'El contraste entre el cuadro que proclama la unión familiar y la realidad donde la tecnología los aísla estando en el mismo espacio físico.' },
        { number: 3, letter: 'C', text: 'Que los juegos de mesa son mejores aparatos para navegar en internet.' },
        { number: 4, letter: 'D', text: 'Que la familia necesita comprar celulares más grandes y modernos.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      component: 'Texto Discontinuo - Caricatura de Opinión',
      affirmation: 'Interpreta el sentido irónico y la crítica social en imágenes y textos discontinuos.',
      evidence: 'Analiza la contradicción visual entre el lema de unión y la desconexión afectiva provocada por los dispositivos.',
      standard: 'Comprendo el sentido global de textos visuales y caricaturas identificando posturas críticas.',
      justification: 'La caricatura utiliza la ironía visual: mientras el cuadro habla de "diálogo y unión", los miembros de la familia están incomunicados y absortos en sus pantallas individuales.',
      invalidOptionsReasoning: {
        A: 'El tema no es la iluminación de la casa, sino la comunicación humana.',
        C: 'Un juego de mesa es un objeto análogo, no un navegador de internet.',
        D: 'Promover más consumo tecnológico contradice el sentido crítico de la imagen.'
      },
      socraticHints: {
        recordar: '¿Qué dice el cuadro colgado en la pared de la sala familiar?',
        comprender: '¿Qué están haciendo en realidad los integrantes de la familia y qué tiene el juego de mesa?',
        aplicar: 'Escribe en tu cuaderno una reflexión sobre cómo equilibrar el uso de pantallas con la familia.',
        analizar: '¿Por qué la ironía es un recurso poderoso para hacernos pensar sobre nuestras costumbres?'
      }
    }
  ]
};
