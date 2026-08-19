// Banco Oficial ICFES Evaluar para Avanzar - Grado 3° (Lectura Cuadernillo 1 Oficial 2021)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
// Área: COMPETENCIAS COMUNICATIVAS EN LENGUAJE: LECTURA
import { Question } from '../types';

// =============================================================================
// TEXTOS COMPLETOS VERBATIM OFICIALES ICFES EVALUAR PARA AVANZAR - GRADO 3°
// =============================================================================

export const TEXTO_IPI_YOI_G3 = `RESPONDE LAS PREGUNTAS 1, 2, 3, 4 Y 5 A PARTIR DE LA LECTURA DEL SIGUIENTE TEXTO:

IPI Y YOI

Hace muchísimos años había poca agua en la selva, no existían ríos, arroyos o lagunas. Allí, vivían dos hermanos, Ipi y Yoi, con sus abuelos. Solo el abuelo sabía de dónde sacar agua. Un día, Ipi y Yoi decidieron averiguar de dónde sacaba agua su abuelo. Ipi lo siguió y vio que se acercó a un gran chorro de agua que salía de un árbol llamado Lupuna. ¡Habían descubierto el secreto!

El abuelo era guardián de Lupuna y estaba conectado con la vida del árbol. Entonces, los hermanos cortaron el árbol para tener agua siempre. A la mañana siguiente, sorprendidos, los dos encontraron el árbol sano y entero. Entonces Ipi se convirtió en alacrán y picó al abuelo. En ese momento, el árbol y el abuelo cayeron al mismo tiempo y la selva retumbó. El agua empezó a brotar en grandes cantidades y así nació el gran río Amazonas.

Tomado y adaptado de: Educa (s.f.). Origen del río Amazonas. Recuperado de http://www.educa.com.bo/content-origen-del-rio-amazonas`;

export const TEXTO_COMO_PLANTAR_ARBOL_G3 = `RESPONDE LAS PREGUNTAS 6, 7, 8, 9 Y 10 A PARTIR DE LA LECTURA DEL SIGUIENTE TEXTO:

CÓMO PLANTAR UN ÁRBOL

Pasos:
1. Haz un hueco en el suelo de 40 cm de ancho por 40 cm de profundidad.
2. Deposita un poco de la tierra fértil en el fondo del hoyo.
3. Toma el árbol de la parte más baja del tallo y retira la bolsa.
4. Deposita el árbol en el hueco, déjalo al nivel del suelo. Rellena con la tierra restante.
5. Con tus manos, aplasta la tierra alrededor del árbol.
6. ¡Listo!

Recomendaciones útiles:
(A) Antes de plantar un árbol, debes retirar la bolsa de plástico que lo protege.
(B) Si el tallo del árbol queda muy hundido, se asfixiará.
(C) Si el árbol queda inclinado, crecerá deforme o se asfixiará.
(D) Si se cubre el tallo con mucha tierra, el árbol no tendrá suficiente acceso al agua.
(E) Debes colocar un solo árbol por cada hoyo.

Sabías que...
Un árbol absorbe los gases tóxicos que emiten cien automóviles en un día, lo que ayuda a limpiar el aire.

Tomado y adaptado de: http://fundaciontlaloc.org/escudosocial/reforestaciones.php`;

export const TEXTO_RATON_GRANERO_G3 = `RESPONDE LAS PREGUNTAS 11, 12, 13, 14 Y 15 A PARTIR DE LA LECTURA DEL SIGUIENTE TEXTO:

EL RATÓN DEL GRANERO

Érase una vez un ratón que vivía debajo de un granero. Las tablas del suelo del granero tenían un agujerito por el que los granos de trigo caían poco a poco a la madriguera. De ese modo, estaba siempre bien alimentado.

Al cabo de algún tiempo, comenzó a molestarlo la idea de que ninguno de sus amigos supiese lo bien que le iba. Entonces, se puso a morder la madera del granero para agrandar el agujero y que cayeran más granos.

Hecho esto, corrió en busca de los demás ratones de los alrededores y los invitó a una fiesta en su granero. Vengan a mi casa —les decía—. Pero cuando llegaron los invitados y quiso el ratón llevarlos hasta el agujero del granero, ya no había agujero. El granjero, al verlo, lo había tapado.

Adaptado de: http://www.adaptacionescurriculares.com`;

export const TEXTO_LAVATE_LAS_MANOS_G3 = `RESPONDE LAS PREGUNTAS 16, 17, 18, 19 Y 20 A PARTIR DE LA LECTURA DEL SIGUIENTE TEXTO:

¡LÁVATE LAS MANOS!

Instrucciones del afiche:
• Antes de comer
• Después de jugar con tu mascota
• Después de usar el baño
• Cuando sacas la basura

Estar limpios y sanos está en nuestras manos.

Día Mundial del Lavado de Manos - 15 de octubre
Organización Panamericana de la Salud`;

// =============================================================================
// BANCO DE 20 PREGUNTAS OFICIALES ICFES EVALUAR PARA AVANZAR - GRADO 3°
// =============================================================================

export const OFFICIAL_GRADE_3: Question[] = [
  // ---------------------------------------------------------------------------
  // TEXTO 1: IPI Y YOI (Preguntas 1 a 5)
  // ---------------------------------------------------------------------------
  {
    id: 301,
    grade: 3,
    questionNumber: 1,
    title: 'Ipi y Yoi - Paráfrasis del fragmento',
    contextText: TEXTO_IPI_YOI_G3,
    statement: `Lee el siguiente fragmento del texto:

“Entonces, los hermanos cortaron el árbol para tener agua siempre. A la mañana siguiente, sorprendidos, los dos encontraron el árbol sano y entero”.

¿Cuál de las siguientes opciones dice lo mismo en otras palabras?`,
    options: [
      { number: 1, letter: 'A', text: 'Los hermanos tumbaron a Lupuna, pero, extrañamente, el árbol sobrevivió.' },
      { number: 2, letter: 'B', text: 'Al día siguiente, los hermanos cortaron a Lupuna para poder tener agua siempre.' },
      { number: 3, letter: 'C', text: 'Los hermanos tumbaron a Lupuna y así nació el Amazonas.' },
      { number: 4, letter: 'D', text: 'Al día siguiente, el árbol Lupuna estaba en perfecto estado.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Mito / Paráfrasis',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Reconoce significados, resúmenes, análisis y paráfrasis apropiados de un texto.',
    standard: 'Elaboro resúmenes y esquemas que dan cuenta del sentido de un texto o de alguna de sus partes.',
    justification: 'La única opción que parafrasea de manera acertada el fragmento es la A: "Los hermanos tumbaron a Lupuna, pero, extrañamente, el árbol sobrevivió".',
    invalidOptionsReasoning: {
      B: 'Invierte el orden temporal, pues el corte del árbol ocurrió el día anterior.',
      C: 'El nacimiento del río ocurrió después con la picadura del alacrán, no inmediatamente.',
      D: 'Omite la acción inicial de los hermanos cortando el árbol.'
    },
    socraticHints: {
      recordar: 'Lee con atención la cita textual entre comillas.',
      comprender: '¿Qué significa decir "lo mismo en otras palabras"?',
      aplicar: 'Escribe en tu cuaderno la versión resumida con tus propias palabras.',
      analizar: 'Verifica qué opción contiene tanto el corte como la mágica recuperación del árbol.'
    },
    icfesCode: 'I_1656555'
  },
  {
    id: 302,
    grade: 3,
    questionNumber: 2,
    title: 'Acción del abuelo guardián',
    contextText: TEXTO_IPI_YOI_G3,
    statement: 'Según el texto, ¿qué era lo que hacía el abuelo?',
    options: [
      { number: 1, letter: 'A', text: 'Cortar a Lupuna.' },
      { number: 2, letter: 'B', text: 'Sacar el agua.' },
      { number: 3, letter: 'C', text: 'Regañar a los hermanos.' },
      { number: 4, letter: 'D', text: 'Luchar contra Ipi.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Localización de Información Literal',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos.',
    standard: 'Identifico maneras de cómo se formula el inicio y el final de algunas narraciones.',
    justification: 'En el primer párrafo se afirma textualmente: "Solo el abuelo sabía de dónde sacar agua" e "Ipi y Yoi decidieron averiguar de dónde sacaba agua su abuelo".',
    invalidOptionsReasoning: {
      A: 'Cortar a Lupuna fue la acción de los hermanos Ipi y Yoi.',
      C: 'El abuelo nunca regaña a los hermanos en la historia.',
      D: 'El abuelo no lucha contra Ipi; cae sorprendido por la picadura.'
    },
    socraticHints: {
      recordar: 'Revisa las primeras tres líneas del texto.',
      comprender: '¿Cuál era el secreto vital que guardaba el abuelo en la selva?',
      aplicar: 'Anota en tu cuaderno: "Rol del abuelo: Guardián de Lupuna y quien sacaba el agua".',
      analizar: 'Distingue las acciones del abuelo de las acciones de sus nietos.'
    },
    icfesCode: 'I_1755000'
  },
  {
    id: 303,
    grade: 3,
    questionNumber: 3,
    title: 'Causa del origen del río Amazonas',
    contextText: TEXTO_IPI_YOI_G3,
    statement: 'De acuerdo con el texto, ¿por qué nació el río Amazonas?',
    options: [
      { number: 1, letter: 'A', text: 'Porque Ipi se volvió un río.' },
      { number: 2, letter: 'B', text: 'Porque un alacrán picó al abuelo.' },
      { number: 3, letter: 'C', text: 'Porque el abuelo cortó un árbol.' },
      { number: 4, letter: 'D', text: 'Porque el abuelo atacó a los hermanos.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Relaciones de Causa-Efecto en el Mito',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos.',
    standard: 'Describo eventos de manera secuencial.',
    justification: 'El texto explica literalmente que Ipi se convirtió en alacrán y picó al abuelo; al caer juntos el abuelo y el árbol, el agua brotó en grandes cantidades y nació el río Amazonas.',
    invalidOptionsReasoning: {
      A: 'Ipi se transformó en alacrán, no en río.',
      C: 'Fueron los hermanos quienes intentaron derribar el árbol.',
      D: 'El abuelo nunca atacó a sus nietos.'
    },
    socraticHints: {
      recordar: 'Lee el final del segundo párrafo sobre la picadura y el brote de agua.',
      comprender: '¿Qué desencadenó la caída simultánea del árbol Lupuna y el abuelo?',
      aplicar: 'Registra en tu cuaderno el momento exacto en que brota el agua caudalosa.',
      analizar: 'Sigue el encadenamiento causal: transformación -> picadura -> caída -> nacimiento del río.'
    },
    icfesCode: 'I_1656547'
  },
  {
    id: 304,
    grade: 3,
    questionNumber: 4,
    title: 'Referencia de la expresión "los dos"',
    contextText: TEXTO_IPI_YOI_G3,
    statement: 'En el fragmento “los dos encontraron al árbol sano y entero”, ¿a quiénes se refiere la expresión “los dos”?',
    options: [
      { number: 1, letter: 'A', text: 'A Ipi y a Yoi.' },
      { number: 2, letter: 'B', text: 'Al abuelo y a Ipi.' },
      { number: 3, letter: 'C', text: 'A Lupuna y a Yoi.' },
      { number: 4, letter: 'D', text: 'Al abuelo y a la abuela.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Cohesión Textual y Anáfora',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Reconoce significados, resúmenes, análisis y paráfrasis apropiados.',
    standard: 'Leo relatos mitológicos y reconozco sus personajes.',
    justification: 'El sujeto del párrafo anterior son "los hermanos" (Ipi y Yoi), quienes cortaron el árbol y a la mañana siguiente "los dos" lo encontraron entero.',
    invalidOptionsReasoning: {
      B: 'El abuelo no fue a revisar el árbol cortado con Ipi.',
      C: 'Lupuna es el árbol sagrado, no un hermano.',
      D: 'Los abuelos no son los que intentaron talar el árbol.'
    },
    socraticHints: {
      recordar: '¿Quiénes fueron los dos hermanos mencionados al inicio del relato?',
      comprender: '¿Quiénes habían cortado el árbol el día anterior y regresaron a la mañana siguiente?',
      aplicar: 'Escribe en tu cuaderno: "Los dos = Ipi y Yoi (los hermanos)".',
      analizar: 'Rastrea el antecedente gramatical de "los dos" en las oraciones previas.'
    },
    icfesCode: 'I_1656564'
  },
  {
    id: 305,
    grade: 3,
    questionNumber: 5,
    title: 'Secuencia cronológica de las acciones de Ipi',
    contextText: TEXTO_IPI_YOI_G3,
    statement: 'De acuerdo con el texto, Ipi realiza, en orden, las siguientes acciones:',
    options: [
      { number: 1, letter: 'A', text: 'Primero: Se convierte en alacrán. Luego: Corta el árbol. Después: Se convierte en Lupuna. Finalmente: Aprende de dónde sacar agua.' },
      { number: 2, letter: 'B', text: 'Primero: Aprende de dónde sacar agua. Luego: Corta el árbol. Después: Persigue a su abuelo y descubre su secreto. Finalmente: Se convierte en picaflor.' },
      { number: 3, letter: 'C', text: 'Primero: Corta el árbol. Luego: Se convierte en Lupuna. Después: Se convierte en alacrán. Finalmente: Reúne a los animales para cortar el árbol.' },
      { number: 4, letter: 'D', text: 'Primero: Sigue al abuelo. Luego: Descubre el secreto del abuelo. Después: Corta el árbol. Finalmente: Se convierte en alacrán y pica al abuelo.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comprensión lectora.',
    component: 'Secuencia Cronológica Narrativa',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos.',
    standard: 'Describo eventos de manera secuencial.',
    justification: 'El orden de las acciones de Ipi es: primero sigue al abuelo, luego descubre el secreto del árbol Lupuna, después corta el árbol junto a su hermano y finalmente se convierte en alacrán y pica al abuelo.',
    invalidOptionsReasoning: {
      A: 'La transformación en alacrán es la última acción, no la primera.',
      B: 'Ipi nunca se convierte en picaflor.',
      C: 'Ipi nunca se convierte en Lupuna; Lupuna es el árbol.'
    },
    socraticHints: {
      recordar: 'Revisa qué hace Ipi en el primer párrafo y qué hace al final del segundo.',
      comprender: '¿Cuál fue el primer paso de Ipi para descubrir de dónde venía el agua?',
      aplicar: 'Elabora en tu cuaderno una línea temporal con los 4 momentos clave de Ipi.',
      analizar: 'Verifica el orden estricto de inicio a fin del cuento.'
    },
    icfesCode: 'I_1656536'
  },

  // ---------------------------------------------------------------------------
  // TEXTO 2: CÓMO PLANTAR UN ÁRBOL (Preguntas 6 a 10)
  // ---------------------------------------------------------------------------
  {
    id: 306,
    grade: 3,
    questionNumber: 6,
    title: 'Propósito de la ilustración del árbol',
    contextText: TEXTO_COMO_PLANTAR_ARBOL_G3,
    statement: '¿Cuál es el propósito de la siguiente imagen del texto?',
    options: [
      { number: 1, letter: 'A', text: 'Ampliar información sobre cómo regar un árbol.' },
      { number: 2, letter: 'B', text: 'Representar paso a paso cómo sembrar un árbol.' },
      { number: 3, letter: 'C', text: 'Dar mayor información sobre cómo cuidar un árbol.' },
      { number: 4, letter: 'D', text: 'Explicar al detalle el crecimiento de un árbol.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Infografía / Lenguaje No Verbal',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Deduce las relaciones entre elementos lingüísticos y no lingüísticos.',
    standard: 'Relaciono gráficas con texto escrito, ya sea completándolas o explicándolas.',
    justification: 'La ilustración circular numerada del 1 al 6 representa gráficamente el paso a paso del proceso de siembra de un árbol.',
    invalidOptionsReasoning: {
      A: 'Regar el árbol es solo una parte final, no el propósito total.',
      C: 'La imagen se enfoca en el procedimiento de plantado, no en el cuidado a largo plazo.',
      D: 'No muestra las fases biológicas de crecimiento sino la técnica manual de siembra.'
    },
    socraticHints: {
      recordar: 'Observa la rueda de dibujos con los números 1, 2, 3, 4, 5 y 6.',
      comprender: '¿Para qué sirve un diagrama circular secuencial?',
      aplicar: 'Dibuja en tu cuaderno los 6 pasos con sus números correspondientes.',
      analizar: 'Identifica la función global de apoyo visual al texto instructivo.'
    },
    icfesCode: 'I_1653819',
    hasDiagram: true
  },
  {
    id: 307,
    grade: 3,
    questionNumber: 7,
    title: 'Función del conector temporal "Antes"',
    contextText: TEXTO_COMO_PLANTAR_ARBOL_G3,
    statement: `Lee el siguiente enunciado del texto:

“Antes de plantar un árbol, debes retirar la bolsa de plástico que lo protege”.

¿Cuál es la función de la palabra “Antes”?`,
    options: [
      { number: 1, letter: 'A', text: 'Indicar cuándo se debe realizar una acción.' },
      { number: 2, letter: 'B', text: 'Señalar que el árbol se plantó en el pasado.' },
      { number: 3, letter: 'C', text: 'Mostrar cómo se debe proteger el árbol.' },
      { number: 4, letter: 'D', text: 'Describir la bolsa de plástico.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Marcadores Temporales e Instrucciones',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Reconoce y entiende el vocabulario y su función.',
    standard: 'Elaboro instrucciones que evidencian secuencias lógicas.',
    justification: 'La palabra "Antes" es un adverbio temporal que establece el momento previo en que debe ejecutarse la acción de retirar la bolsa plástica.',
    invalidOptionsReasoning: {
      B: 'No es un verbo en tiempo pasado sino una instrucción futura para el lector.',
      C: 'No explica cómo proteger sino cuándo quitar la bolsa.',
      D: 'No describe las características físicas de la bolsa.'
    },
    socraticHints: {
      recordar: '¿Qué palabra te indica el momento en que debes hacer una tarea?',
      comprender: '¿Por qué en las recetas o manuales se usan palabras como Antes, Primero, Luego?',
      aplicar: 'Anota en tu cuaderno: "Antes = indica el momento o tiempo de una acción".',
      analizar: 'Relaciona la palabra "Antes" con el orden de los pasos del instructivo.'
    },
    icfesCode: 'I_1755016'
  },
  {
    id: 308,
    grade: 3,
    questionNumber: 8,
    title: 'Recomendación para evitar que el árbol se asfixie',
    contextText: TEXTO_COMO_PLANTAR_ARBOL_G3,
    statement: 'Según el texto, ¿qué se puede hacer para que el árbol no se asfixie?',
    options: [
      { number: 1, letter: 'A', text: 'El árbol se debe colocar en la maceta y se debe cubrir con tierra.' },
      { number: 2, letter: 'B', text: 'Se debe colocar tierra fértil en el hueco antes de poner el árbol.' },
      { number: 3, letter: 'C', text: 'Al sembrar el árbol, el tallo no debe quedar muy hundido.' },
      { number: 4, letter: 'D', text: 'Se debe aplastar la tierra que está alrededor del árbol.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Localización de Información Explícita',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos.',
    standard: 'Utilizo estrategias de búsqueda, selección y almacenamiento de información.',
    justification: 'En la recomendación (B) se afirma explícitamente: "Si el tallo del árbol queda muy hundido, se asfixiará". Por ende, no debe quedar muy hundido.',
    invalidOptionsReasoning: {
      A: 'El texto no menciona macetas sino plantar en el suelo.',
      B: 'Colocar tierra fértil nutre la planta, pero no evita la asfixia del tallo.',
      D: 'Aplastar la tierra sirve para crear un pequeño valle para el agua (paso 5).'
    },
    socraticHints: {
      recordar: 'Busca la palabra "asfixiará" en la lista de recomendaciones de la derecha.',
      comprender: '¿Qué condición provoca que el tallo del árbol se asfixie?',
      aplicar: 'Copia en tu cuaderno la recomendación (B) exacta del afiche.',
      analizar: 'Conecta la posición del tallo con la respiración adecuada de la planta.'
    },
    icfesCode: 'I_1653787'
  },
  {
    id: 309,
    grade: 3,
    questionNumber: 9,
    title: 'Garantizar el acceso al agua del árbol',
    contextText: TEXTO_COMO_PLANTAR_ARBOL_G3,
    statement: 'Según el texto, ¿qué se debe hacer para que el árbol tenga acceso al agua?',
    options: [
      { number: 1, letter: 'A', text: 'Asegurarse de que el tallo no esté completamente cubierto de tierra.' },
      { number: 2, letter: 'B', text: 'Permitir que el tallo permanezca en la bolsa que lo protege.' },
      { number: 3, letter: 'C', text: 'Mantener el tallo inclinado dentro de la tierra.' },
      { number: 4, letter: 'D', text: 'Colocar un solo árbol en cada hoyo.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Recuperación de Información',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos.',
    standard: 'Identifico la intención de quien produce un texto.',
    justification: 'En la recomendación (D) se lee textualmente: "Si se cubre el tallo con mucha tierra, el árbol no tendrá suficiente acceso al agua". Por tanto, se debe evitar cubrir completamente el tallo de tierra.',
    invalidOptionsReasoning: {
      B: 'La bolsa plástica debe ser retirada obligatoriamente en el paso 3.',
      C: 'Si queda inclinado crecerá deforme (recomendación C).',
      D: 'Poner un árbol por hoyo es para evitar competencia, no la regla directa del agua.'
    },
    socraticHints: {
      recordar: 'Revisa la recomendación (D) de la columna derecha.',
      comprender: '¿Por qué el exceso de tierra sobre el tallo impide la llegada del agua?',
      aplicar: 'Registra en tu cuaderno el consejo (D) sobre la cantidad de tierra en el tallo.',
      analizar: 'Evalúa qué opción previene el bloqueo del agua hacia las raíces.'
    },
    icfesCode: 'I_1653803'
  },
  {
    id: 310,
    grade: 3,
    questionNumber: 10,
    title: 'Conclusión a partir del dato de absorción de gases',
    contextText: TEXTO_COMO_PLANTAR_ARBOL_G3,
    statement: 'En el texto se plantea que “Un árbol absorbe los gases tóxicos que emiten cien automóviles en un día, lo que ayuda a limpiar el aire”. ¿Qué se concluye de esta afirmación?',
    options: [
      { number: 1, letter: 'A', text: 'Se debe plantar un árbol por cada cien personas.' },
      { number: 2, letter: 'B', text: 'Plantar árboles ayuda a mejorar la calidad del aire.' },
      { number: 3, letter: 'C', text: 'Los automóviles atentan contra los árboles.' },
      { number: 4, letter: 'D', text: 'Los árboles generan gases tóxicos.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Inferencia Global y Sentido del Texto',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Evalúa las ideas expresadas en un texto.',
    standard: 'Identifico el propósito comunicativo y la idea global de un texto.',
    justification: 'La absorción de gases contaminantes por parte de los árboles purifica la atmósfera; por lo tanto, plantar más árboles mejora directamente la calidad del aire que respiramos.',
    invalidOptionsReasoning: {
      A: 'El texto menciona 100 automóviles, no 100 personas.',
      C: 'Los automóviles emiten gases por su combustión, no atacan árboles directamente.',
      D: 'Los árboles producen oxígeno y absorben gases tóxicos, no los generan.'
    },
    socraticHints: {
      recordar: 'Lee el recuadro "Sabías que..." en la parte inferior del afiche.',
      comprender: '¿Qué beneficio recibe la ciudad cuando se plantan muchos árboles?',
      aplicar: 'Escribe en tu cuaderno una frase ecológica sobre la importancia de los árboles en Ibagué.',
      analizar: 'Sintetiza la relación entre absorción de humo y purificación del aire.'
    },
    icfesCode: 'I_1653792'
  },

  // ---------------------------------------------------------------------------
  // TEXTO 3: EL RATÓN DEL GRANERO (Preguntas 11 a 15)
  // ---------------------------------------------------------------------------
  {
    id: 311,
    grade: 3,
    questionNumber: 11,
    title: 'Sentimiento del ratón ante la abundancia',
    contextText: TEXTO_RATON_GRANERO_G3,
    statement: 'En la historia, ¿a quién le molestaba la idea de no contar lo bien que le iba?',
    options: [
      { number: 1, letter: 'A', text: 'A un amigo del ratón.' },
      { number: 2, letter: 'B', text: 'Al granjero.' },
      { number: 3, letter: 'C', text: 'A un invitado.' },
      { number: 4, letter: 'D', text: 'Al ratón.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Cuento / Sentimientos de Personajes',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Distingue las relaciones entre las personas que desempeñan un papel en una narración.',
    standard: 'Reconozco en los textos literarios elementos como personajes y sentimientos.',
    justification: 'En el segundo párrafo se dice literalmente: "comenzó a molestarlo la idea de que ninguno de sus amigos supiese lo bien que le iba", refiriéndose al ratón protagonista.',
    invalidOptionsReasoning: {
      A: 'Los amigos del ratón no sabían nada de la comida hasta que fueron invitados.',
      B: 'El granjero solo descubrió el hueco y lo tapó.',
      C: 'Los invitados asistieron a la fiesta sin saber el problema previo.'
    },
    socraticHints: {
      recordar: 'Relee el segundo párrafo de la historia.',
      comprender: '¿Por qué el ratón no podía disfrutar su comida en silencio y quería presumir?',
      aplicar: 'Anota en tu cuaderno: "Defecto del ratón: la vanidad y el deseo de presumir".',
      analizar: 'Identifica a quién pertenece el pensamiento sobre la fiesta y los amigos.'
    },
    icfesCode: 'I_1754972'
  },
  {
    id: 312,
    grade: 3,
    questionNumber: 12,
    title: 'Acción posterior a morder la madera',
    contextText: TEXTO_RATON_GRANERO_G3,
    statement: '¿Qué ocurrió después de que el ratón mordió la madera?',
    options: [
      { number: 1, letter: 'A', text: 'Fue a vivir debajo del granero.' },
      { number: 2, letter: 'B', text: 'Buscó a los demás ratones.' },
      { number: 3, letter: 'C', text: 'Tapó el agujero de madera.' },
      { number: 4, letter: 'D', text: 'Fue a buscar al granjero.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Secuencia Temporal Narrativa',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos.',
    standard: 'Describo eventos de manera secuencial.',
    justification: 'En el tercer párrafo se lee explícitamente: "Hecho esto, corrió en busca de los demás ratones de los alrededores y los invitó a una fiesta en su granero".',
    invalidOptionsReasoning: {
      A: 'El ratón ya vivía debajo del granero desde el principio.',
      C: 'Quien tapó el agujero fue el granjero al ver el daño.',
      D: 'El ratón nunca fue a buscar al granjero.'
    },
    socraticHints: {
      recordar: '¿Qué hizo el ratón inmediatamente después de agrandar el orificio?',
      comprender: '¿A quiénes fue a buscar para mostrarles su gran banquete?',
      aplicar: 'Copia en tu cuaderno la oración que empieza por "Hecho esto...".',
      analizar: 'Ordena cronológicamente: morder madera -> buscar amigos -> llegar a la fiesta.'
    },
    icfesCode: 'I_1652585'
  },
  {
    id: 313,
    grade: 3,
    questionNumber: 13,
    title: 'Razón de la buena alimentación del ratón',
    contextText: TEXTO_RATON_GRANERO_G3,
    statement: '¿Por qué el ratón “siempre estaba bien alimentado”?',
    options: [
      { number: 1, letter: 'A', text: 'Porque tenía trigo en su madriguera.' },
      { number: 2, letter: 'B', text: 'Porque hacía fiestas en el granero.' },
      { number: 3, letter: 'C', text: 'Porque el granjero lo cuidaba.' },
      { number: 4, letter: 'D', text: 'Porque tenía muchos amigos.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Texto Continuo - Extracción de Información Explícita',
    affirmation: 'Recupera información literal expresada en fragmentos del texto.',
    evidence: 'Ubica elementos del contenido de diferentes tipos de textos.',
    standard: 'Elaboro resúmenes y esquemas que dan cuenta del sentido de un texto.',
    justification: 'En el primer párrafo se explica que por el agujerito las tablas dejaban caer granos de trigo poco a poco a su madriguera: "De ese modo, estaba siempre bien alimentado".',
    invalidOptionsReasoning: {
      B: 'Las fiestas ocurrieron después y terminaron en fracaso.',
      C: 'El granjero no cuidaba al ratón; era el dueño del trigo.',
      D: 'Tener amigos no era la fuente de su alimento diario.'
    },
    socraticHints: {
      recordar: 'Lee el primer párrafo: ¿qué caía a través del suelo del granero?',
      comprender: '¿Cómo conseguía comida el ratón antes de cometer el error de agrandar el agujero?',
      aplicar: 'Anota en tu cuaderno: "Causa: Los granos de trigo caían constantemente a su madriguera".',
      analizar: 'Identifica el mecanismo natural por el que el ratón obtenía su comida.'
    },
    icfesCode: 'I_1652593'
  },
  {
    id: 314,
    grade: 3,
    questionNumber: 14,
    title: 'Destinatario de la frase del ratón',
    contextText: TEXTO_RATON_GRANERO_G3,
    statement: '¿A quién se dirige el ratón cuando dice: “Vengan a mi casa”?',
    options: [
      { number: 1, letter: 'A', text: 'A los demás ratones.' },
      { number: 2, letter: 'B', text: 'A un ratón en particular.' },
      { number: 3, letter: 'C', text: 'A los granos de trigo.' },
      { number: 4, letter: 'D', text: 'Al granjero.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Interlocución y Actos de Habla',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Infiere la intención comunicativa de enunciados del texto.',
    standard: 'Reconozco los principales elementos constitutivos de un proceso de comunicación.',
    justification: 'El texto indica que el ratón "corrió en busca de los demás ratones de los alrededores y los invitó a una fiesta en su granero. —Vengan a mi casa —les decía—".',
    invalidOptionsReasoning: {
      B: 'No invitó a uno solo sino a todos los ratones de los alrededores.',
      C: 'Los granos son objetos inanimados.',
      D: 'El ratón se escondía del granjero, nunca lo invitaría.'
    },
    socraticHints: {
      recordar: '¿A quiénes buscó el ratón para invitarlos a la fiesta?',
      comprender: '¿Qué significa la forma plural del verbo "Vengan"?',
      aplicar: 'Copia en tu cuaderno la invitación del ratón a sus amigos.',
      analizar: 'Identifica el receptor de la invitación en el diálogo.'
    },
    icfesCode: 'I_1652607'
  },
  {
    id: 315,
    grade: 3,
    questionNumber: 15,
    title: 'Comparación de fábulas y moralejas',
    contextText: TEXTO_RATON_GRANERO_G3,
    statement: `Lee el siguiente minicuento:

«En la selva, una serpiente cambió su piel por una hermosa piel multicolor. Emocionada, dejó la protección de los árboles para mostrársela a sus amigos fuera de la selva. En el camino, un ave vio sus colores desde el cielo y la devoró.»

¿Cuál es la relación entre el cuento titulado “El ratón del granero” y el minicuento sobre la serpiente?`,
    options: [
      { number: 1, letter: 'A', text: 'Comparten personajes.' },
      { number: 2, letter: 'B', text: 'Comparten lugares.' },
      { number: 3, letter: 'C', text: 'Tienen una moraleja similar.' },
      { number: 4, letter: 'D', text: 'Tienen enseñanzas opuestas.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Relación Intertextual - Moraleja y Estructura Fábula',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Relaciona y compara diferentes textos.',
    standard: 'Comparo textos de acuerdo con sus formatos, temáticas y funciones.',
    justification: 'Ambos relatos transmiten una moraleja similar sobre los peligros de la vanidad y la presunción: tanto el ratón como la serpiente lo perdieron todo por querer presumir ante los demás.',
    invalidOptionsReasoning: {
      A: 'Uno tiene un ratón y granjero, el otro una serpiente y un ave.',
      B: 'Uno ocurre en un granero, el otro en la selva.',
      D: 'Sus enseñanzas son idénticas (la vanidad trae consecuencias negativas), no opuestas.'
    },
    socraticHints: {
      recordar: '¿Qué le pasó al ratón por querer presumir? ¿Y qué le pasó a la serpiente?',
      comprender: '¿Cuál es la lección moral que comparten ambas historias?',
      aplicar: 'Escribe en tu cuaderno la moraleja compartida: "La vanidad y el presumir traen malas consecuencias".',
      analizar: 'Compara la estructura de error-consecuencia en los dos cuentos.'
    },
    icfesCode: 'I_1652616'
  },

  // ---------------------------------------------------------------------------
  // TEXTO 4: ¡LÁVATE LAS MANOS! (Preguntas 16 a 20)
  // ---------------------------------------------------------------------------
  {
    id: 316,
    grade: 3,
    questionNumber: 16,
    title: 'Mensaje central del lema de lavado de manos',
    contextText: TEXTO_LAVATE_LAS_MANOS_G3,
    statement: 'En el texto, se resalta el enunciado “Estar LIMPIOS y SANOS está en nuestras MANOS” para reforzar la idea de que:',
    options: [
      { number: 1, letter: 'A', text: 'Las mascotas te ensucian las manos.' },
      { number: 2, letter: 'B', text: 'Tener las manos limpias es importante para la salud.' },
      { number: 3, letter: 'C', text: 'Cuidar las manos nos ayuda a vernos bien.' },
      { number: 4, letter: 'D', text: 'Los adultos enseñan a los niños a cuidar sus manos.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Texto Discontinuo - Afiche Publicitario / Idea Central',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Infiere estrategias discursivas del texto.',
    standard: 'Reconozco la función social de los diversos tipos de textos que leo.',
    justification: 'El juego de palabras resalta que mantener una higiene adecuada en las manos es la clave para prevenir enfermedades y conservar la salud.',
    invalidOptionsReasoning: {
      A: 'Jugar con mascotas es solo una de las 4 situaciones donde se debe lavar las manos.',
      C: 'El afiche busca salud y prevención biológica, no solo apariencia estética.',
      D: 'El mensaje apela directamente a los niños y a toda la comunidad.'
    },
    socraticHints: {
      recordar: 'Lee el lema grande en el círculo morado inferior.',
      comprender: '¿Por qué dice que la salud "está en nuestras manos"?',
      aplicar: 'Dibuja en tu cuaderno el lema con letras llamativas.',
      analizar: 'Relaciona la limpieza de manos con la protección contra virus y bacterias.'
    },
    icfesCode: 'I_1653511',
    hasDiagram: true
  },
  {
    id: 317,
    grade: 3,
    questionNumber: 17,
    title: 'Función formal del lema de cierre',
    contextText: TEXTO_LAVATE_LAS_MANOS_G3,
    statement: 'En el afiche, el enunciado “Estar limpios y sanos está en nuestras manos” es',
    options: [
      { number: 1, letter: 'A', text: 'una pregunta.' },
      { number: 2, letter: 'B', text: 'una conclusión.' },
      { number: 3, letter: 'C', text: 'un ejemplo.' },
      { number: 4, letter: 'D', text: 'un título.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comprensión lectora.',
    component: 'Estructura de Textos Discontinuos',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Diferencia las funciones de las partes en las que se estructura un texto.',
    standard: 'Identifico el propósito comunicativo y la idea global de un texto.',
    justification: 'El enunciado al final del afiche resume y concluye todas las recomendaciones previas (comer, baño, mascotas, basura), funcionando como el mensaje concluyente de la campaña.',
    invalidOptionsReasoning: {
      A: 'No tiene signos de interrogación (¿?).',
      C: 'Los ejemplos son las cuatro viñetas de acciones cotidianas.',
      D: 'El título principal del afiche es "¡Lávate las manos!".'
    },
    socraticHints: {
      recordar: '¿Dónde está ubicado este enunciado y cuál es el título en la parte superior?',
      comprender: '¿Qué función cumple una frase final que sintetiza toda la enseñanza?',
      aplicar: 'Anota en tu cuaderno: "Título: ¡Lávate las manos! | Conclusión: Estar limpios y sanos está en nuestras manos".',
      analizar: 'Diferencia entre título inicial, ejemplos gráficos y mensaje de conclusión.'
    },
    icfesCode: 'I_1755052'
  },
  {
    id: 318,
    grade: 3,
    questionNumber: 18,
    title: 'Propósito de las instrucciones del afiche',
    contextText: TEXTO_LAVATE_LAS_MANOS_G3,
    statement: 'En el texto se dan instrucciones para que los niños',
    options: [
      { number: 1, letter: 'A', text: 'aprendan a cuidar a sus mascotas.' },
      { number: 2, letter: 'B', text: 'comprendan cómo asearse el cuerpo.' },
      { number: 3, letter: 'C', text: 'entiendan cuándo lavarse las manos.' },
      { number: 4, letter: 'D', text: 'conozcan cómo clasificar la basura.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comprensión lectora.',
    component: 'Propósito Comunicativo del Texto Instructivo',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Infiere estrategias discursivas del texto.',
    standard: 'Identifico la intención comunicativa de cada uno de los textos leídos.',
    justification: 'Las cuatro viñetas señalan momentos precisos (antes de comer, después del baño, tras jugar con la mascota, al sacar la basura) para que los niños sepan exactamente cuándo deben lavarse las manos.',
    invalidOptionsReasoning: {
      A: 'El afiche no es una guía veterinaria.',
      B: 'Se enfoca específicamente en las manos, no en el baño corporal completo.',
      D: 'Sacar la basura es una ocasión de lavado, no una clase de reciclaje.'
    },
    socraticHints: {
      recordar: 'Lee las frases al lado de cada dibujo: "Antes de...", "Después de...".',
      comprender: '¿Qué tipo de información comunican estas frases temporales?',
      aplicar: 'Haz en tu cuaderno una lista de los 4 momentos en que debes lavarte las manos en el colegio.',
      analizar: 'Identifica el objetivo central de las cuatro instrucciones cotidianas.'
    },
    icfesCode: 'I_1653536'
  },
  {
    id: 319,
    grade: 3,
    questionNumber: 19,
    title: 'Identificación de la imagen del perro',
    contextText: TEXTO_LAVATE_LAS_MANOS_G3,
    statement: `Observa la siguiente imagen del afiche:

(Ilustración de un perro café con un hueso en la boca junto a un niño sonriente)

¿A qué hace referencia esta imagen?`,
    options: [
      { number: 1, letter: 'A', text: 'A un perro con un hueso.' },
      { number: 2, letter: 'B', text: 'A un gato con un ratón.' },
      { number: 3, letter: 'C', text: 'A un lobo feroz.' },
      { number: 4, letter: 'D', text: 'A un león sin melena.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comprensión lectora.',
    component: 'Lectura de Elementos Visuales No Verbales',
    affirmation: 'Comprende el sentido local y global del texto mediante inferencias de información implícita.',
    evidence: 'Deduce las relaciones entre elementos lingüísticos y no lingüísticos.',
    standard: 'Relaciono gráficas con texto escrito.',
    justification: 'La ilustración del afiche muestra claramente a un perro doméstico que sostiene un hueso en su hocico mientras juega con un niño.',
    invalidOptionsReasoning: {
      B: 'No es un felino ni tiene un ratón.',
      C: 'Es una mascota amigable, no un lobo feroz.',
      D: 'No es un animal salvaje de la sabana.'
    },
    socraticHints: {
      recordar: 'Observa la figura en el centro del afiche.',
      comprender: '¿Qué animal está dibujado y qué objeto lleva en la boca?',
      aplicar: 'Dibuja en tu cuaderno a tu mascota favorita con su juguete preferido.',
      analizar: 'Verifica la correspondencia directa entre la ilustración y la opción literal.'
    },
    icfesCode: 'I_1653524',
    hasDiagram: true
  },
  {
    id: 320,
    grade: 3,
    questionNumber: 20,
    title: 'Audiencia o destinatario del afiche',
    contextText: TEXTO_LAVATE_LAS_MANOS_G3,
    statement: 'Teniendo en cuenta la información que está en el afiche, ¿a quién va dirigido?',
    options: [
      { number: 1, letter: 'A', text: 'A la Organización de la Salud.' },
      { number: 2, letter: 'B', text: 'A las mascotas.' },
      { number: 3, letter: 'C', text: 'A los enamorados.' },
      { number: 4, letter: 'D', text: 'A los niños.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comprensión lectora.',
    component: 'Pragmática - Audiencia y Enunciatario',
    affirmation: 'Asume una posición crítica sobre el texto mediante la evaluación de su forma y contenido.',
    evidence: 'Infiere estrategias discursivas del texto.',
    standard: 'Reconozco la temática de anuncios publicitarios y otros medios gráficos.',
    justification: 'El estilo de los dibujos, los personajes infantiles, el lenguaje sencillo y las situaciones cotidianas (jugar con mascotas, comer) indican que el mensaje está diseñado primordialmente para los niños.',
    invalidOptionsReasoning: {
      A: 'La Organización de la Salud es la entidad emisora, no el público destinatario.',
      B: 'Las mascotas no leen afiches.',
      C: 'El afiche no trata temas de parejas ni romance.'
    },
    socraticHints: {
      recordar: '¿Quiénes son los personajes que aparecen en todas las ilustraciones del afiche?',
      comprender: '¿Por qué los afiches educativos usan dibujos animados y colores vivos?',
      aplicar: 'Escribe en tu cuaderno: "Destinatario del afiche: Los niños y la comunidad escolar".',
      analizar: 'Diferencia entre la entidad que crea el afiche (OPS) y las personas a quienes va dirigido.'
    },
    icfesCode: 'I_1653508'
  }
];
