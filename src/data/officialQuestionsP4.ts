// Banco Oficial de Preguntas ICFES Evaluar para Avanzar (Grados 7° y 8°)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
// Área: LECTURA / COMPRENSIÓN LECTORA
import { Question } from '../types';

export const OFFICIAL_GRADE_7_8: Record<number, Question[]> = {
  // ================= GRADO 7° =================
  7: [
    {
      id: 701,
      grade: 7,
      questionNumber: 1,
      title: 'La invención de la imprenta y la democratización del saber',
      statement: 'Lee el siguiente ensayo histórico:\n\n"Hacia 1440, Johannes Gutenberg perfeccionó en Maguncia la imprenta de tipos móviles metálicos, un invento que transformó radicalmente la historia de la humanidad. Antes de esta innovación, los libros eran copiados a mano con pluma y tinta por monjes en los monasterios europeos, un proceso extenuante que podía tardar meses o años para un solo ejemplar. En consecuencia, las obras literarias y científicas eran artículos de lujo inaccesibles para el pueblo común y el conocimiento permanecía confinado en manos de una élite reducida.\n\nLa imprenta permitió reproducir cientos de copias idénticas en una fracción de tiempo y a costos notablemente inferiores. Esto impulsó la alfabetización masiva, facilitó la rápida divulgación de descubrimientos científicos durante el Renacimiento y sembró las bases para el pensamiento crítico y la libertad de prensa en las sociedades modernas."\n\n¿Cuál fue el principal impacto sociocultural de la imprenta según el autor del texto?',
      options: [
        { number: 1, letter: 'A', text: 'Hacer que los monjes dejaran de rezar en los monasterios.' },
        { number: 2, letter: 'B', text: 'Democratizar el acceso al conocimiento, reduciendo costos y fomentando la alfabetización y el pensamiento crítico.' },
        { number: 3, letter: 'C', text: 'Prohibir la escritura manual en todos los países de Europa.' },
        { number: 4, letter: 'D', text: 'Impedir que se divulgaran nuevas teorías científicas.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      component: 'Texto Continuo - Expositivo / Ensayo Histórico',
      affirmation: 'Identifica las relaciones causa-efecto de transformaciones técnicas e históricas en un texto explicativo.',
      evidence: 'Sintetiza las consecuencias sociales, educativas y culturales derivadas de la masificación de los libros impresos.',
      standard: 'Comprendo textos históricos reconociendo tesis, argumentos y consecuencias de los hechos narrados.',
      justification: 'El segundo párrafo sintetiza el impacto: la reducción de costos multiplicó los ejemplares, impulsó la alfabetización ciudadana y facilitó el pensamiento crítico en la sociedad.',
      invalidOptionsReasoning: {
        A: 'Es una distorsión irrelevante sobre la vida religiosa.',
        C: 'La caligrafía manual continuó existiendo en la vida cotidiana.',
        D: 'Al contrario, aceleró y potenció la divulgación científica.'
      },
      socraticHints: {
        recordar: '¿Cómo se producían los libros antes del invento de Gutenberg?',
        comprender: '¿Por qué la reducción en el precio de los libros cambió la sociedad europea?',
        aplicar: 'Elabora en tu cuaderno un cuadro comparativo entre el libro manuscrito y el impreso.',
        analizar: '¿Qué paralelismo existe entre la imprenta en el siglo XV e internet en la actualidad?'
      }
    },
    {
      id: 702,
      grade: 7,
      questionNumber: 2,
      title: 'Columna de opinión: Las huertas urbanas y la seguridad alimentaria',
      statement: 'Lee el siguiente fragmento de una columna de opinión:\n\n"En medio del crecimiento acelerado de las ciudades contemporáneas, el cemento ha ido desplazando a los suelos fértiles. Sin embargo, en barrios populares y colegios como la I.E. Simón Bolívar, las huertas urbanas y escolares están demostrando que sembrar hortalizas, tomates y plantas aromáticas en terrazas, balcones y solares no es solo un pasatiempo nostálgico, sino una estrategia urgente de soberanía alimentaria y educación ambiental.\n\nCuando los jóvenes tocan la tierra con sus manos, aprenden de dónde proviene realmente lo que comen, valoran el sudor del campesinado y reducen la dependencia de cadenas industriales contaminantes. Transformar un metro cuadrado de patio en una fuente de alimento fresco es un acto de resistencia ecológica y autonomía ciudadana."\n\n¿Cuál es la tesis o postura central que defiende el autor en el texto?',
      options: [
        { number: 1, letter: 'A', text: 'Que todas las ciudades deben prohibir el consumo de verduras frescas.' },
        { number: 2, letter: 'B', text: 'Que las huertas urbanas y escolares son herramientas valiosas y necesarias para la soberanía alimentaria, la ecología y la valoración del trabajo campesino.' },
        { number: 3, letter: 'C', text: 'Que sembrar en colegios es una pérdida de tiempo frente a los videojuegos.' },
        { number: 4, letter: 'D', text: 'Que los suelos con cemento producen mejores cosechas que la tierra fértil.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      component: 'Texto Continuo - Argumentativo / Columna de Opinión',
      affirmation: 'Identifica la tesis central y los argumentos de apoyo en un texto de opinión ciudadana.',
      evidence: 'Deduce la postura favorable del autor hacia la agricultura urbana como modelo educativo y ecológico.',
      standard: 'Analizo los argumentos en textos de opinión y reconozco la perspectiva del autor frente a problemas sociales.',
      justification: 'El autor argumenta de forma consistente que las huertas escolares y barriales ofrecen soberanía alimentaria, sensibilización sobre el campo y autonomía ecológica frente al consumo desmedido.',
      invalidOptionsReasoning: {
        A: 'El texto promueve el consumo y cultivo de verduras, no su prohibición.',
        C: 'Desestima la postura reflexiva y propositiva del autor.',
        D: 'Es una contradicción absurda con respecto a la fertilidad del suelo.'
      },
      socraticHints: {
        recordar: '¿Qué beneficios formativos menciona el texto para los estudiantes que participan en huertas?',
        comprender: '¿Qué significa la expresión "soberanía alimentaria" en el contexto de la lectura?',
        aplicar: 'Anota en tu cuaderno tres especies vegetales que se podrían cultivar en una huerta escolar en Ibagué.',
        analizar: '¿Por qué el autor califica sembrar en la ciudad como un "acto de resistencia ecológica"?'
      }
    }
  ],

  // ================= GRADO 8° =================
  8: [
    {
      id: 801,
      grade: 8,
      questionNumber: 1,
      title: 'El mito de la caverna de Platón y la búsqueda de la verdad',
      statement: 'Lee el siguiente fragmento adaptado del libro VII de La República de Platón:\n\n"Imagina unos hombres encerrados desde su infancia en una caverna subterránea, atados de piernas y cuello de modo que solo pueden mirar hacia el fondo rocoso. Detrás de ellos, en lo alto, arde una fogata y entre el fuego y los prisioneros hay un tabique por donde transitan hombres que portan estatuas de madera y piedra. Las sombras proyectadas en la pared son lo único que los prisioneros han visto en toda su vida, por lo que asumen con certeza que esas figuras oscuras son la auténtica realidad.\n\nSi uno de ellos fuera liberado y obligado a subir hacia la luz del sol, al principio quedaría cegado por el resplandor y le dolerían los ojos. Mas, una vez acostumbrado a la claridad, contemplaría las flores, los árboles, las estrellas y finalmente el Sol mismo, comprendiendo que antes solo contemplaba ilusiones engañosas. Si regresara a la caverna a contar la verdad a sus antiguos compañeros, estos se burlarían de él y dirían que ha perdido la razón."\n\n¿Qué representan las "sombras en la pared" dentro de la alegoría platónica?',
      options: [
        { number: 1, letter: 'A', text: 'El conocimiento científico exacto y comprobado empíricamente.' },
        { number: 2, letter: 'B', text: 'Las apariencias engañosas, las opiniones infundadas y las falsas percepciones de la realidad que confunden a quien no reflexiona críticamente.' },
        { number: 3, letter: 'C', text: 'La luz solar directa que ilumina a los filósofos.' },
        { number: 4, letter: 'D', text: 'Un sistema eléctrico avanzado dentro de una cueva antigua.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      component: 'Texto Continuo - Filosófico / Alegoría',
      affirmation: 'Interpreta el sentido simbólico y filosófico de los elementos de una alegoría clásica.',
      evidence: 'Relaciona las sombras proyectadas con la doxa (opinión basada en apariencias superficiales).',
      standard: 'Comprendo e interpreto textos filosóficos y alegóricos reconociendo sus implicaciones epistemológicas.',
      justification: 'En la alegoría de Platón, las sombras representan el mundo sensible y las apariencias o prejuicios que los seres humanos toman por verdades absolutas cuando no han ejercido el pensamiento crítico ni la filosofía.',
      invalidOptionsReasoning: {
        A: 'El conocimiento verdadero está representado por el sol exterior, no por las sombras.',
        C: 'El sol es la idea del bien y la verdad, opuesto a la oscuridad de la pared.',
        D: 'Es un anacronismo ajeno al contexto de la filosofía clásica griega.'
      },
      socraticHints: {
        recordar: '¿Qué era lo único que podían ver los prisioneros atados desde su infancia?',
        comprender: '¿Por qué al prisionero liberado le dolían los ojos al salir al exterior?',
        aplicar: 'Escribe en tu cuaderno una comparación entre las "sombras de la caverna" y las "fake news" o rumores actuales.',
        analizar: '¿Por qué muchas personas se molestan cuando alguien cuestiona sus certezas y creencias no fundamentadas?'
      }
    },
    {
      id: 802,
      grade: 8,
      questionNumber: 2,
      title: 'Texto discontinuo: Infografía sobre la huella de carbono y el cambio climático',
      statement: 'En una infografía sobre sostenibilidad se desglosan las principales fuentes de emisión de gases de efecto invernadero en una ciudad intermedia:\n- 42% Transporte vehicular particular (combustibles fósiles).\n- 28% Industria pesada y generación termoeléctrica.\n- 18% Manejo inadecuado de residuos sólidos en vertederos a cielo abierto.\n- 12% Deforestación y quemas en zonas rurales circundantes.\n\nEn la base de la infografía se lee: "Fomentar el transporte público masivo, la bicicleta y la caminata en trayectos cortos reduce más del 35% del impacto de emisiones en centros urbanos".\n\nDe acuerdo con la información porcentual de la infografía, ¿cuál es el sector que genera la mayor proporción de emisiones contaminantes en la ciudad?',
      options: [
        { number: 1, letter: 'A', text: 'El manejo de residuos sólidos en vertederos (18%).' },
        { number: 2, letter: 'B', text: 'El transporte vehicular particular impulsado por combustibles fósiles (42%).' },
        { number: 3, letter: 'C', text: 'La deforestación y quemas rurales (12%).' },
        { number: 4, letter: 'D', text: 'La generación termoeléctrica aislada (28%).' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      component: 'Texto Discontinuo - Infografía Ambiental',
      affirmation: 'Identifica datos numéricos y jerarquías cuantitativas presentadas en diagramas informativos.',
      evidence: 'Ubica la categoría con el porcentaje más elevado dentro del desglose de emisiones.',
      standard: 'Interpreto y contrasto datos presentados en gráficos porcentuales y esquemas analíticos.',
      justification: 'El 42% atribuido al transporte vehicular particular representa el valor mayoritario dentro de la distribución presentada en la infografía.',
      invalidOptionsReasoning: {
        A: 'El 18% es inferior al 42% del transporte.',
        C: 'El 12% es el valor más bajo de la lista.',
        D: 'El 28% de la industria es el segundo rubro, no el mayor.'
      },
      socraticHints: {
        recordar: 'Compara los cuatro porcentajes: 42%, 28%, 18% y 12%. ¿Cuál es el más alto?',
        comprender: '¿Por qué el transporte urbano tiene tanto peso en la contaminación ambiental?',
        aplicar: 'Anota en tu cuaderno tres medidas concretas para disminuir la huella de carbono personal en Ibagué.',
        analizar: '¿Cómo se complementan los datos estadísticos con las recomendaciones ciudadanas al pie del gráfico?'
      }
    }
  ]
};
