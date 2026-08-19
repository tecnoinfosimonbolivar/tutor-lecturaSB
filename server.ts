import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '15mb' }));

// Lazy initialization for Gemini AI client
let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ 
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `Eres el "Tutor Socrático Institucional de LECTURA" de la Institución Educativa Técnica Simón Bolívar de Ibagué, Tolima (Barrio La Pola).
Lema institucional: "Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO".

NOMBRE_COMPLETO_DEL_ÁREA: [LECTURA / COMPRENSIÓN LECTORA Y LECTURA CRÍTICA]

COMPETENCIAS_DEL_ÁREA:
Se articulan bajo el marco general de la Comprensión lectora, la cual se desglosa y evalúa a través de tres competencias cognitivas fundamentales que avanzan gradualmente desde el procesamiento local y concreto hasta la evaluación formal y abstracta:
1. Identificar y entender los contenidos locales que conforman un texto (Literal): Capacidad para reconocer, ubicar y comprender la información literal, el significado de palabras, frases o fragmentos explícitos en el texto.
2. Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial): Capacidad para relacionar partes de un texto para deducir conclusiones, identificar el propósito del autor, la tesis, los argumentos y la estructura global.
3. Reflexionar a partir de un texto y evaluar su contenido (Crítico): Capacidad para juzgar el contenido del texto, la validez de los argumentos, los recursos estilísticos, la ironía y el punto de vista del autor.

REGLA DE ORO DE GRADOS Y PREGUNTAS:
- En Lectura SOLAMENTE existen preguntas y cuadernillos para los grados desde TERCERO (3°) hasta UNDÉCIMO (11°).
- ESTÁ ESTRICTAMENTE PROHIBIDO inventar preguntas para ningún otro grado (como 1°, 2°, preescolar, 12°, etc.).
- Las preguntas son EXCLUSIVAMENTE las oficiales de los cuadernillos con sus textos continuos y discontinuos, lecturas, enunciados y opciones de respuesta completos.
- Si el estudiante o usuario digita o solicita un grado diferente a 3°-11° (ej. 1°, 2°, preescolar, 12°, etc.), debes responder con amabilidad institucional que NO existe material de estudio de lectura para esos grados y volver a mostrar el mensaje inicial pidiendo un grado válido entre 3° y 11°.

DIRECTRICES PEDAGÓGICAS FUNDAMENTALES (MÉTODO SOCRÁTICO EXPLICATIVO Y PROFUNDO):

1. TERMINOLOGÍA OBLIGATORIA:
- Utiliza SIEMPRE la palabra "cuaderno" (o "cuaderno de apuntes"). ESTÁ ESTRICTAMENTE PROHIBIDO usar la palabra "libreta".

2. MÉTODO SOCRÁTICO EXPLICATIVO, CONCEPTUAL Y RICO EN INFORMACIÓN:
- El método socrático NO debe limitarse a hacer preguntas aisladas o devolverle preguntas al estudiante sin contexto.
- Debes ser EXPLICATIVO: DEFINIR conceptos y figuras literarias clave, CONTEXTUALIZAR la lectura, presentar EVIDENCIAS TEXTUALES y RELACIONES en detalle, y brindar IDEAS sólidas para que el estudiante piense, reflexione y tenga abundantes apuntes de calidad en su cuaderno.
- Habla directamente al estudiante por su nombre en segunda persona ("tú", ej: "RENE, en tu cuaderno de lectura...", "CARLOS ANDRÉS, observemos la tesis central de...").

3. PROHIBICIÓN EXPRESA DE CITAR PALABRAS TEÓRICAS:
- NUNCA menciones en el chat las palabras "Taxonomía de Bloom", "Bloom", "Proyecto Zero" ni etiquetas metodológicas abstractas.
- Aplica directamente las etapas, fases y verbos activos de pensamiento para el Cuaderno de Lectura:
  • Fase 1 - Recordar (Identificar tipología textual, registrar vocabulario clave, personajes y datos explícitos en el cuaderno).
  • Fase 2 - Comprender (Resumir la idea global del texto con tus propias palabras, identificar tema/propósito e ilustrar un mapa conceptual o esquema en el cuaderno).
  • Fase 3 - Aplicar (Extraer citas, evidencias textuales y relacionar fragmentos o párrafos para sustentar la interpretación en el cuaderno).
  • Fase 4 - Analizar (Comparar las opciones A, B, C, D; clasificar y explicar por qué cada distractor contiene una trampa de lectura o sobreinterpretación).
  • Fase 5 - Evaluar (Argumentar y defender críticamente por qué la opción elegida es la única respuesta textualmente válida).
  • Fase 6 - Crear (Redactar en el cuaderno una reflexión crítica propia, un desenlace alternativo o un texto análogo contextualizado en Ibagué o el Tolima).

4. PAUTAS DE ADAPTACIÓN POR GRADO:
- Primaria (3° a 5°): Textos narrativos, fábulas, cuentos, historietas y afiches infantiles. Vocabulario accesible, preguntas literales directas e inferencias sobre motivaciones de personajes y moralejas.
- Secundaria (6° a 8°): Textos descriptivos, crónicas, artículos de divulgación, noticias y caricaturas de opinión. Reconocimiento de ideas principales, tipos de párrafos, relaciones causa-efecto y tono del autor.
- Media Académica (9° a 11° / Saber 11 Lectura Crítica): Ensayos argumentativos, textos filosóficos, columnas de opinión, infografías complejas y fragmentos literarios clásicos/contemporáneos. Identificación de tesis, premisas, argumentos, falacias, recursos retóricos, ironía e intencionalidad crítica.

5. REDUCCIÓN DE TÍTULOS Y REPETICIONES REDUNDANTES:
- En las respuestas intermedias y de diálogo, NO repitas encabezados institucionales largos ni eslóganes en cada turno.
- Ve directo al análisis pedagógico, la explicación conceptual y la orientación personalizada para su cuaderno.

6. DISTINCIÓN CRÍTICA ENTRE OPCIONES ICFES (LETRAS) Y MENÚ DE CHAT (NÚMEROS):
- Opciones de la pregunta ICFES: SIEMPRE con letras (**A.**, **B.**, **C.**, **D.**).
- Menú de diálogo en el chat: SIEMPRE con números (1️⃣ Recordar, 2️⃣ Comprender, 3️⃣ Aplicar, 4️⃣ Analizar, 5️⃣ Evaluar, 6️⃣ Crear, 7️⃣ Pista).

7. REGLA FUNDAMENTAL: NOMBRE DEL ESTUDIANTE SIEMPRE EN MAYÚSCULAS:
- Debes escribir SIEMPRE el nombre del estudiante en LETRAS MAYÚSCULAS SOSTENIDAS (ejemplo: 'HARRISON', 'RENE', 'CARLOS ANDRÉS', 'VALENTINA') en absolutamente todos los saludos, explicaciones, preguntas, retroalimentaciones y respuestas sin excepción en toda la conversación.`;

// Word to question mapping
const WORD_TO_QUESTION: Record<string, number> = {
  'uno': 1, 'primero': 1, 'primera': 1, 'primer': 1, '1': 1, '01': 1,
  'dos': 2, 'segundo': 2, 'segunda': 2, '2': 2, '02': 2,
  'tres': 3, 'tercero': 3, 'tercera': 3, 'tercer': 3, '3': 3, '03': 3,
  'cuatro': 4, 'cuarto': 4, 'cuarta': 4, '4': 4, '04': 4,
  'cinco': 5, 'quinto': 5, 'quinta': 5, '5': 5, '05': 5,
  'seis': 6, 'sexto': 6, 'sexta': 6, '6': 6, '06': 6,
  'siete': 7, 'septimo': 7, 'séptimo': 7, 'septima': 7, 'séptima': 7, '7': 7, '07': 7,
  'ocho': 8, 'octavo': 8, 'octava': 8, '8': 8, '08': 8,
  'nueve': 9, 'noveno': 9, 'novena': 9, '9': 9, '09': 9,
  'diez': 10, 'decimo': 10, 'décimo': 10, 'decima': 10, 'décima': 10, '10': 10,
  'once': 11, 'undecimo': 11, 'undécimo': 11, 'undecima': 11, 'undécima': 11, '11': 11,
  'doce': 12, 'duodecimo': 12, 'duodécimo': 12, '12': 12,
  'trece': 13, '13': 13,
  'catorce': 14, '14': 14,
  'quince': 15, '15': 15,
  'dieciseis': 16, 'dieciséis': 16, '16': 16,
  'diecisiete': 17, '17': 17,
  'dieciocho': 18, '18': 18,
  'diecinueve': 19, '19': 19,
  'veinte': 20, 'vigesimo': 20, 'vigésimo': 20, '20': 20
};

function normalizeTextServer(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function detectUnsupportedGradeServer(text: string): { isUnsupported: boolean; gradeText?: string } {
  const norm = normalizeTextServer(text);

  // 1. Explicit preschool / kindergarten terms
  if (/\b(preescolar|transicion|transision|jardin|kinder|parvulos|maternal|cero|guarderia)\b/.test(norm)) {
    return { isUnsupported: true, gradeText: 'Preescolar / Transición' };
  }

  // 2. Word forms for 1st and 2nd grade
  if (/\b(primer\s+grado|primero|primera|grado\s+primero|grado\s+primer|curso\s+primero|en\s+primero|de\s+primero)\b/.test(norm)) {
    if (!/\b(pregunta\s+primero|opcion\s+primera|de\s+primera)\b/.test(norm)) {
      return { isUnsupported: true, gradeText: 'Grado 1° (Primero)' };
    }
  }

  if (/\b(segundo\s+grado|segunda\s+grado|grado\s+segundo|curso\s+segundo|en\s+segundo|de\s+segundo)\b/.test(norm)) {
    if (!/\b(pregunta\s+segundo|opcion\s+segunda|en\s+un\s+segundo|segundos)\b/.test(norm)) {
      return { isUnsupported: true, gradeText: 'Grado 2° (Segundo)' };
    }
  }

  // 3. Higher grades outside school (12°, 13°, universidad, etc.)
  if (/\b(duodecimo|duodecima|grado\s+doce|grado\s+12|12°|12º|12vo|grado\s+13|13°|13º|13vo|universidad|semestre)\b/.test(norm)) {
    return { isUnsupported: true, gradeText: 'Grados 12° en adelante / Educación Superior' };
  }

  // 4. Group code checks for unsupported grades (101, 102, 201, 202, 1201, etc.)
  const groupCodeMatch = norm.match(/\b(10[1-9]|20[1-9]|120[1-9]|130[1-9])\b/);
  if (groupCodeMatch) {
    const code = parseInt(groupCodeMatch[1], 10);
    if (code >= 100 && code < 200) return { isUnsupported: true, gradeText: 'Grado 1° (Primero)' };
    if (code >= 200 && code < 300) return { isUnsupported: true, gradeText: 'Grado 2° (Segundo)' };
    if (code >= 1200) return { isUnsupported: true, gradeText: `Grado ${Math.floor(code / 100)}°` };
  }

  // 5. Numeric explicit patterns outside 3..11
  const gradeExplicitNumMatch = norm.match(/(?:del\s+grado|de\s+grado|en\s+el\s+grado|grado|curso|en)\s*[:#]?\s*(\d{1,2})\b/);
  if (gradeExplicitNumMatch) {
    const g = parseInt(gradeExplicitNumMatch[1], 10);
    if (g < 3 && g >= 0) {
      return { isUnsupported: true, gradeText: `Grado ${g}° (${g === 1 ? 'Primero' : g === 2 ? 'Segundo' : 'Preescolar'})` };
    }
    if (g > 11) {
      return { isUnsupported: true, gradeText: `Grado ${g}°` };
    }
  }

  // 6. Suffix patterns for 1° or 2°: "1°", "2°", "1ro", "2do", "12°", "13°"
  const suffixMatch = norm.match(/\b(1|2|12|13|14|15)\s*(?:°|º|ro|do|vo|mo|to|grade)\b/);
  if (suffixMatch) {
    const g = parseInt(suffixMatch[1], 10);
    if (g < 3 || g > 11) {
      return { isUnsupported: true, gradeText: `Grado ${g}°` };
    }
  }

  return { isUnsupported: false };
}

function detectGradeFromTextServer(text: string): number | undefined {
  const norm = normalizeTextServer(text);

  // 1. Group code checks like 301, 302, 401, 402, 501, 601, 701, 801, 901, 1001, 1101, 1102
  const groupCodeMatch = norm.match(/\b(30[1-9]|40[1-9]|50[1-9]|60[1-9]|70[1-9]|80[1-9]|90[1-9]|100[1-9]|110[1-9])\b/);
  if (groupCodeMatch) {
    const code = parseInt(groupCodeMatch[1], 10);
    if (code >= 300 && code < 400) return 3;
    if (code >= 400 && code < 500) return 4;
    if (code >= 500 && code < 600) return 5;
    if (code >= 600 && code < 700) return 6;
    if (code >= 700 && code < 800) return 7;
    if (code >= 800 && code < 900) return 8;
    if (code >= 900 && code < 1000) return 9;
    if (code >= 1000 && code < 1100) return 10;
    if (code >= 1100 && code < 1200) return 11;
  }

  // 2. Sub-group format like 3.1, 3.2, 4.1, 4.2, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1 or 3-1, 4-2, etc.
  const subGroupMatch = norm.match(/\b(3|4|5|6|7|8|9|10|11)[.\-_]([1-9])\b/);
  if (subGroupMatch) {
    return parseInt(subGroupMatch[1], 10);
  }

  // 3. Word patterns for grades
  if (/\b(tercero|tercera|tercer grado|grado tercero)\b/.test(norm)) return 3;
  if (/\b(cuarto|cuarta|cuarto grado|grado cuarto)\b/.test(norm)) return 4;
  if (/\b(quinto|quinta|quinto grado|grado quinto)\b/.test(norm)) return 5;
  if (/\b(sexto|sexta|sexto grado|grado sexto)\b/.test(norm)) return 6;
  if (/\b(septimo|septima|septimo grado|grado septimo)\b/.test(norm)) return 7;
  if (/\b(octavo|octava|octavo grado|grado octavo)\b/.test(norm)) return 8;
  if (/\b(noveno|novena|noveno grado|grado noveno)\b/.test(norm)) return 9;
  if (/\b(decimo|decima|decimo grado|grado decimo)\b/.test(norm)) return 10;
  if (/\b(undecimo|undecima|once|undecimo grado|grado undecimo|grado once)\b/.test(norm)) return 11;

  // 4. Numeric formats: "grado 7", "7°", "7º", "7mo", "7mo grado", "7to", "7ro", "7do", "en 7"
  const gradeExplicitNumMatch = norm.match(/(?:del\s+grado|de\s+grado|en\s+el\s+grado|grado|curso|en)\s*[:#]?\s*(\d{1,2})\b/);
  if (gradeExplicitNumMatch) {
    const g = parseInt(gradeExplicitNumMatch[1], 10);
    if (g >= 3 && g <= 11) return g;
  }

  // 5. Standalone degree symbol or suffix: 3°, 7°, 11°, 6to, 7mo, 8vo, 9no, 10mo, 11mo
  const suffixMatch = norm.match(/\b([3-9]|10|11)\s*(?:°|º|vo|mo|to|ro|do|grade)\b/);
  if (suffixMatch) {
    const g = parseInt(suffixMatch[1], 10);
    if (g >= 3 && g <= 11) return g;
  }

  return undefined;
}

function detectQuestionNumberFromTextServer(text: string): number | undefined {
  const norm = normalizeTextServer(text);

  const qRegex = /(?:pregunta|pregunta\s*#|número\s*de\s*pregunta|numero\s*de\s*pregunta|num\s*pregunta|pregunta\s*número|pregunta\s*numero|p|vamos\s*a\s*la|ir\s*a\s*la|empezar\s*en\s*la|iniciar\s*en\s*la|voy\s*en\s*la|estoy\s*en\s*la)\s*[:#]?\s*([a-z0-9]+)/i;
  const qMatch = norm.match(qRegex);
  if (qMatch) {
    const token = qMatch[1];
    if (WORD_TO_QUESTION[token] !== undefined) {
      return WORD_TO_QUESTION[token];
    }
    const num = parseInt(token, 10);
    if (!isNaN(num) && num >= 1 && num <= 20) {
      return num;
    }
  }

  const trailingMatch = norm.match(/\bpregunta\s+([a-z0-9]+)\b/);
  if (trailingMatch) {
    const token = trailingMatch[1];
    if (WORD_TO_QUESTION[token] !== undefined) {
      return WORD_TO_QUESTION[token];
    }
    const num = parseInt(token, 10);
    if (!isNaN(num) && num >= 1 && num <= 20) {
      return num;
    }
  }

  return undefined;
}

const RESERVED_WORDS_SERVER = new Set([
  'hola', 'buenas', 'buenos', 'tutor', 'profe', 'profesor', 'docente', 'profesora', 
  'estudiante', 'alumno', 'alumna', 'bolivariano', 'bolivariana', 'simon', 'bolivar', 
  'colegio', 'institucion', 'pregunta', 'preg', 'punto', 'opcion', 'respuesta', 
  'grado', 'curso', 'nivel', 'lectura', 'espanol', 'lenguaje', 'icfes', 'saber', 
  'primero', 'primera', 'primer', 'segundo', 'segunda', 'tercero', 'tercera', 'tercer', 
  'cuarto', 'cuarta', 'quinto', 'quinta', 'sexto', 'sexta', 'septimo', 'séptimo', 'septima', 'séptima', 
  'octavo', 'octava', 'noveno', 'novena', 'decimo', 'décimo', 'decima', 'décima', 
  'undecimo', 'undécimo', 'undecima', 'undécima', 'once', 'doce', 'trece', 'catorce', 'quince', 
  'dieciseis', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 
  'recordar', 'comprender', 'aplicar', 'analizar', 'evaluar', 'crear', 
  'pista', 'ayuda', 'cuaderno', 'libreta', 'si', 'no', 'ok', 'listo', 
  'empezar', 'iniciar', 'continuar', 'siguiente', 'gracias', 'adios'
]);

function detectStudentNameFromTextServer(text: string, existingName?: string): string | undefined {
  if (!text) return undefined;
  let cleaned = text.trim();

  // 1. Remove introductory greetings / salutations
  cleaned = cleaned.replace(/^(?:¡*hola!*|buenas\s+tardes|buenos\s+dias|buen\s+dia|buenas|tutor|profe|profesor|profesora|señor|estimado\s+tutor)[,\s:]*/i, '').trim();

  // 2. Remove explicit identity starter phrases (soy, me llamo, etc.)
  cleaned = cleaned.replace(/^(?:yo\s+soy|soy|me\s+llamo|mi\s+nombre\s+es|nombre\s*[:=]|estudiante\s*[:=]|alumno\s*[:=])[,\s:]*/i, '').trim();

  // 3. Cut off everything starting from grade, course, question, group codes, ordinals, or numeric grade indicators
  const cutPattern = /\b(?:del\s+grado|de\s+grado|en\s+el\s+grado|en\s+grado|del\s+curso|de\s+curso|en\s+el\s+curso|grado|curso|nivel|año|ano|pregunta|preg|punto|ejercicio|numero\s+de\s+pregunta|número\s+de\s+pregunta|num\s+pregunta|num|opcion|opción|tercero|tercera|tercer|cuarto|cuarta|quinto|quinta|sexto|sexta|septimo|séptimo|septima|séptima|octavo|octava|noveno|novena|decimo|décimo|decima|décima|undecimo|undécimo|undecima|undécima|once|primero|primera|primer|segundo|segunda|\d+\s*(?:°|º|ro|do|to|mo|vo|no|grade)|30[1-9]|40[1-9]|50[1-9]|60[1-9]|70[1-9]|80[1-9]|90[1-9]|100[1-9]|110[1-9]|(?:3|4|5|6|7|8|9|10|11)[.\-_][1-9]|en\s+\d+|de\s+\d+)\b.*/i;

  cleaned = cleaned.replace(cutPattern, '').trim();

  // Clean trailing and leading punctuation (commas, colons, hyphens, dots)
  cleaned = cleaned.replace(/^[,\-.:;]+|[,\-.:;]+$/g, '').trim();

  // 4. Validate if the remaining text is a valid student name (only letters, spaces, hyphens, apostrophes)
  if (/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s\-']{2,45}$/.test(cleaned)) {
    const norm = normalizeTextServer(cleaned);
    const words = norm.split(/\s+/).filter(Boolean);

    // If all words are reserved keywords or invalid, reject
    const hasValidNameWord = words.some(w => !RESERVED_WORDS_SERVER.has(w) && w.length >= 2);
    const isSingleReserved = words.length === 1 && RESERVED_WORDS_SERVER.has(words[0]);

    if (hasValidNameWord && !isSingleReserved && cleaned.length >= 2) {
      // Return strictly the isolated student name in uppercase
      return cleaned.toUpperCase();
    }
  }

  return undefined;
}

// Parse student message to extract name, grade, and question number
function parseStudentMessageText(
  message: string,
  existingProfile?: any
): { 
  name?: string; 
  grade?: number; 
  questionNumber?: number; 
  isIdentityMsg: boolean;
  isUnsupportedGrade: boolean;
  unsupportedGradeText?: string;
} {
  const unsupportedCheck = detectUnsupportedGradeServer(message);
  const detectedGrade = detectGradeFromTextServer(message);
  const detectedQuestion = detectQuestionNumberFromTextServer(message);
  const detectedName = detectStudentNameFromTextServer(message, existingProfile?.name);
  const rawName = detectedName || existingProfile?.name;
  const uppercaseName = rawName ? rawName.toUpperCase().trim() : undefined;

  const norm = normalizeTextServer(message);
  const isIdentityMsg = Boolean(
    detectedName ||
    detectedGrade !== undefined ||
    unsupportedCheck.isUnsupported ||
    norm.includes('grado') ||
    norm.includes('curso') ||
    norm.includes('pregunta') ||
    norm.includes('me llamo') ||
    norm.includes('soy') ||
    norm.includes('tercero') ||
    norm.includes('cuarto') ||
    norm.includes('quinto') ||
    norm.includes('sexto') ||
    norm.includes('septimo') ||
    norm.includes('octavo') ||
    norm.includes('noveno') ||
    norm.includes('decimo') ||
    norm.includes('undecimo') ||
    norm.includes('once') ||
    norm.includes('primero') ||
    norm.includes('segundo')
  );

  return {
    name: uppercaseName,
    grade: detectedGrade || (unsupportedCheck.isUnsupported ? undefined : existingProfile?.grade),
    questionNumber: detectedQuestion,
    isIdentityMsg,
    isUnsupportedGrade: unsupportedCheck.isUnsupported,
    unsupportedGradeText: unsupportedCheck.gradeText
  };
}

// Function to generate the structured institutional question presentation
function buildQuestionPresentationMessage(
  studentName: string,
  grade: number,
  q: any
): string {
  const sName = (studentName || 'ESTUDIANTE').toUpperCase().trim();
  const qNum = q.questionNumber || 1;
  const qTitle = q.title || `Comprensión Lectora Pregunta #${qNum}`;
  const comp = q.competency || 'Comprender cómo se articulan las partes de un texto (Inferencial)';
  const compo = q.component || 'Texto Continuo - Informativo / Narrativo';
  const evidence = q.evidence || q.affirmation || q.standard || 'Identifica y evalúa contenidos locales y sentido global del texto.';
  const contextText = q.contextText || '';
  const statement = q.statement || '';

  const optA = q.options?.[0]?.text || 'Opción A';
  const optB = q.options?.[1]?.text || 'Opción B';
  const optC = q.options?.[2]?.text || 'Opción C';
  const optD = q.options?.[3]?.text || 'Opción D';

  return `🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ, TOLIMA*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Bienvenido(a), **${sName}**! He cargado tu cuadernillo institucional de **LECTURA** para **Grado ${grade}°** (20 Preguntas Oficiales ICFES).

⏱️ *TIEMPO DE ESTUDIO RIGUROSO: 15 MINUTOS POR PREGUNTA*
Para consolidar tu comprensión lectora y juicio crítico, debes completar las actividades en tu cuaderno de apuntes siguiendo los 6 niveles cognitivos de estudio antes de responder.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 **PREGUNTA #${qNum}: ${qTitle.toUpperCase()}**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${contextText ? `
📜 **TEXTO DE LECTURA / CONTEXTO COMPLETO:**
${contextText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━` : ''}

📖 **ENUNCIADO / PREGUNTA:**
${statement}

🔘 **OPCIONES DE RESPUESTA (ICFES):**
**A.** ${optA}
**B.** ${optB}
**C.** ${optC}
**D.** ${optD}

📋 **FICHA PEDAGÓGICA (ICFES):**
• **Tipología / Componente:** ${compo}
• **Competencia evaluada:** ${comp}
• **Evidencia de aprendizaje:** ${evidence}

📓 **GUÍA DE ESTUDIO EN TU CUADERNO (15 MINUTOS POR PREGUNTA):**
✍️ *Realiza en tu cuaderno de apuntes los 6 pasos de la ruta de aprendizaje:*
1. **Recordar (Nivel 1):** Registra el título, grado, tipología textual, personajes y datos explícitos del texto.
2. **Comprender (Nivel 2):** Resume la idea central con tus propias palabras e ilustra un mapa mental, esquema o dibujo explicativo.
3. **Aplicar (Nivel 3):** Extrae citas textuales y relaciona párrafos o fragmentos para fundamentar tu interpretación en el cuaderno.
4. **Analizar (Nivel 4):** Compara las opciones A, B, C y D; clasifica cada una y explica qué error o trampa contiene cada distractor.
5. **Evaluar (Nivel 5):** Argumenta y defiende por escrito con evidencias del texto por qué la opción elegida es la única respuesta válida.
6. **Crear (Nivel 6):** Redacta en tu cuaderno una reflexión crítica propia, un desenlace alternativo o un texto análogo contextualizado en Ibagué o el Tolima.

💬 **¿CÓMO DESEAS INTERACTUAR CON TU TUTOR SOCRÁTICO?**
1️⃣ Registrar tipología, datos y vocabulario (Nivel 1: Recordar)
2️⃣ Resumir e ilustrar la idea central (Nivel 2: Comprender)
3️⃣ Extraer citas y sustentar en tu cuaderno (Nivel 3: Aplicar)
4️⃣ Comparar y descartar distractores (Nivel 4: Analizar)
5️⃣ Argumentar y defender tu respuesta elegida (Nivel 5: Evaluar)
6️⃣ Redactar una reflexión crítica contextualizada (Nivel 6: Crear)
7️⃣ Solicitar una pista socrática orientadora

${sName}, ¿cuál de las 4 opciones (**A**, **B**, **C** o **D**) consideras correcta o qué actividad de tu cuaderno deseas revisar primero?`;
}

// Helper function to build intelligent Socratic pedagogical responses even without API key
function buildFallbackSocraticResponse(
  message: string,
  studentProfile: any,
  currentQuestion: any
): string {
  const parsed = parseStudentMessageText(message, studentProfile);
  const studentName = (parsed.name || studentProfile?.name || 'ESTUDIANTE BOLIVARIANO').toUpperCase().trim();
  const grade = parsed.grade || studentProfile?.grade;
  const lowerMsg = message.toLowerCase().trim();

  // 0. Check if an unsupported grade was entered
  if (parsed.isUnsupportedGrade) {
    const gradeDesc = parsed.unsupportedGradeText || 'el grado ingresado';
    return `⚠️ *AVISO INSTITUCIONAL - ÁREA DE LECTURA*
🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ, TOLIMA*

Estimado(a) estudiante, te informamos que en el área de **LECTURA** de la institución contamos únicamente con cuadernillos oficiales estructurados para los grados desde **3° (Tercero) hasta 11° (Undécimo)**.

🚫 *No existe material de estudio ni preguntas oficiales para ${gradeDesc}.*

Por favor, indícanos un grado válido entre **3° y 11°** para cargar tu cuadernillo oficial de Lectura:

1️⃣ ¿Cuál es tu **Nombre completo**?
2️⃣ ¿En qué **Grado** estás? *(3°, 4°, 5°, 6°, 7°, 8°, 9°, 10°, 11°)*
3️⃣ ¿En qué **número de pregunta (1 a 20)** deseas iniciar?

💡 *Ejemplo:* 👉 *"Soy Carlos del grado 8 pregunta 1"*`;
  }

  // 1. Check if name or grade is missing
  if (!parsed.name && !studentProfile?.name && !grade) {
    return `🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ, TOLIMA*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Bienvenido, estudiante Bolivariano! 👋 Hoy entrenaremos con gran entusiasmo y rigor pedagógico el área de **LECTURA / COMPRENSIÓN LECTORA** (Preparación Saber).

Tu cuadernillo institucional cuenta con un banco estructurado de **20 preguntas de estudio** con una ruta de aprendizaje de **15 minutos por pregunta** (6 Niveles Cognitivos).

Para iniciar tu entrenamiento y cargar el cuadernillo adecuado:
1️⃣ ¿Cuál es tu **Nombre completo**?
2️⃣ ¿En qué **Grado** estás (3° a 11°)?
3️⃣ ¿En qué **número de pregunta (1 a 20)** deseas empezar hoy?`;
  }

  if (!parsed.name && !studentProfile?.name && grade) {
    return `🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ*

¡Excelente! Tenemos listo el cuadernillo oficial de **Grado ${grade}°** con sus 20 preguntas de Lectura.

Para personalizar tu sesión y el registro de tus evidencias de aprendizaje:
👤 ¿Cuál es tu **Nombre completo**?`;
  }

  if ((parsed.name || studentProfile?.name) && !grade) {
    return `🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ*

¡Mucho gusto, **${studentName}**!

Para saber en qué cuadernillo de estudio de Lectura vamos a trabajar (contamos con preguntas estructuradas desde 3° hasta 11°):
🎓 ¿En qué **Grado** te encuentras (3° a 11°)?
¿Y en qué **número de pregunta (1 a 20)** deseas empezar?`;
  }

  // 2. If this is an onboarding / identity message or explicit question navigation
  if (parsed.isIdentityMsg || parsed.questionNumber || (currentQuestion && message.includes('NUMERO DE PREGUNTA'))) {
    if (currentQuestion) {
      return buildQuestionPresentationMessage(studentName, grade || 11, currentQuestion);
    }
  }

  if (!currentQuestion) {
    return `🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ*

¡Bienvenido(a), **${studentName}**! Tu cuadernillo de Grado ${grade}° cuenta con **20 preguntas** estructuradas en el área de **LECTURA**.

¿Con cuál número de pregunta (del 1 al 20) deseas iniciar tu análisis hoy? Escríbeme: *"Tutor, empezar en la pregunta 1"* para cargarla en tu pantalla y comenzar tus apuntes de 15 minutos en el cuaderno.`;
  }

  const q = currentQuestion;
  const qTitle = q.title || `Comprensión Lectora Pregunta #${q.questionNumber}`;
  const competency = q.competency || 'Comprender la articulación del texto (Inferencial)';
  const component = q.component || 'Texto Continuo - Expositivo';

  // Detect if student selected an option (A, B, C, D)
  let selectedOption = '';
  if (
    lowerMsg.includes('opcion a') || 
    lowerMsg.includes('opción a') || 
    lowerMsg === 'a' || 
    lowerMsg.startsWith('a.') || 
    lowerMsg.startsWith('a)') || 
    lowerMsg.includes('elijo la a') ||
    lowerMsg.includes('respuesta a')
  ) {
    selectedOption = 'A';
  } else if (
    lowerMsg.includes('opcion b') || 
    lowerMsg.includes('opción b') || 
    lowerMsg === 'b' || 
    lowerMsg.startsWith('b.') || 
    lowerMsg.startsWith('b)') || 
    lowerMsg.includes('elijo la b') ||
    lowerMsg.includes('respuesta b')
  ) {
    selectedOption = 'B';
  } else if (
    lowerMsg.includes('opcion c') || 
    lowerMsg.includes('opción c') || 
    lowerMsg === 'c' || 
    lowerMsg.startsWith('c.') || 
    lowerMsg.startsWith('c)') || 
    lowerMsg.includes('elijo la c') ||
    lowerMsg.includes('respuesta c')
  ) {
    selectedOption = 'C';
  } else if (
    lowerMsg.includes('opcion d') || 
    lowerMsg.includes('opción d') || 
    lowerMsg === 'd' || 
    lowerMsg.startsWith('d.') || 
    lowerMsg.startsWith('d)') || 
    lowerMsg.includes('elijo la d') ||
    lowerMsg.includes('respuesta d')
  ) {
    selectedOption = 'D';
  }

  // Detect Bloom level actions or numbered chat actions
  const isAction1 = lowerMsg === '1' || lowerMsg.includes('1️⃣') || lowerMsg.includes('recordar') || lowerMsg.includes('datos') || lowerMsg.includes('vocabulario') || lowerMsg.includes('personajes');
  const isAction2 = lowerMsg === '2' || lowerMsg.includes('2️⃣') || lowerMsg.includes('comprender') || lowerMsg.includes('resumen') || lowerMsg.includes('mapa') || lowerMsg.includes('esquema');
  const isAction3 = lowerMsg === '3' || lowerMsg.includes('3️⃣') || lowerMsg.includes('aplicar') || lowerMsg.includes('citas') || lowerMsg.includes('evidencias') || lowerMsg.includes('fragmentos');
  const isAction4 = lowerMsg === '4' || lowerMsg.includes('4️⃣') || lowerMsg.includes('analizar') || lowerMsg.includes('descarte') || lowerMsg.includes('trampa') || lowerMsg.includes('distractor');
  const isAction5 = lowerMsg === '5' || lowerMsg.includes('5️⃣') || lowerMsg.includes('evaluar') || lowerMsg.includes('argumentar') || lowerMsg.includes('defender') || lowerMsg.includes('justificar');
  const isAction6 = lowerMsg === '6' || lowerMsg.includes('6️⃣') || lowerMsg.includes('crear') || lowerMsg.includes('reflexion') || lowerMsg.includes('reflexión') || lowerMsg.includes('desenlace') || lowerMsg.includes('nuevo texto');
  const isAction7 = lowerMsg === '7' || lowerMsg.includes('7️⃣') || lowerMsg.includes('pista') || lowerMsg.includes('ayuda') || lowerMsg.includes('orientacion') || lowerMsg.includes('orientación');

  // Option evaluation response
  if (selectedOption) {
    const isCorrectChoice = selectedOption.toUpperCase() === q.correctLetter.toUpperCase();

    return `🏛️ **EVALUACIÓN Y SUSTENTACIÓN CRÍTICA (NIVEL 5)**

¡Excelente iniciativa, **${studentName}**! Has propuesto analizar la **Opción ${selectedOption}**.

📖 **ANÁLISIS TEXTUAL Y COMPETENCIA:**
• **Tipología:** ${component}
• **Competencia:** ${competency}
• **Principio evaluado:** ${q.standard || q.evidence || 'Identificación y evaluación de evidencias textuales directas e inferenciales.'}

💡 **ANÁLISIS CONCEPTUAL PARA TU CUADERNO:**
${
  isCorrectChoice 
    ? `${studentName}, tu interpretación sobre la **Opción ${selectedOption}** es textualmente correcta y coincide con el sentido del texto. Para consolidar tus 15 minutos de estudio, redacta en tu cuaderno la justificación rigurosa: cita el fragmento que la respalda y anota por qué descartas las otras tres opciones.`
    : `${studentName}, al examinar la **Opción ${selectedOption}**, te invito a releer con atención el texto. Pregúntate: ¿esta opción refleja fielmente lo que afirma el autor o es una sobreinterpretación o trampa común de lectura? Compara nuevamente los fragmentos en tu cuaderno.`
}

📓 **TAREAS PARA TU CUADERNO:**
1. **Evidencia textual:** Escribe la cita exacta del texto que sustenta la respuesta correcta.
2. **Descarte de distractores (Nivel 4):** Registra una breve frase explicando el error de las demás opciones.
3. **Creación (Nivel 6):** Redacta una reflexión personal de 3 líneas sobre el tema leído.

💬 **¿CÓMO DESEAS CONTINUAR TU DIÁLOGO?**
1️⃣ Registrar tipología y vocabulario (Recordar)
2️⃣ Elaborar mapa conceptual o resumen (Comprender)
3️⃣ Extraer citas y evidencias (Aplicar)
4️⃣ Comparar y descartar distractores (Analizar)
5️⃣ Argumentar y defender tu opción (Evaluar)
6️⃣ Redactar reflexión crítica (Crear)
7️⃣ Pedir una pista socrática orientadora`;
  }

  // 1. Level 1: Recordar
  if (isAction1) {
    return `🏛️ **FASE 1: RECORDAR (TIPOLOGÍA, VOCABULARIO Y DATOS LITERALES)**

¡Excelente inicio, **${studentName}**! El primer paso para una lectura comprensiva es identificar la tipología textual y registrar los datos literales y vocabulario clave en tu cuaderno.

📖 **INFORMACIÓN TEXTUAL PARA TU CUADERNO:**
• **Tipología / Componente:** ${component}
• **Competencia:** ${competency}
• **Enfoque literal:** Identificar quiénes intervienen, qué ocurre de forma explícita, en qué espacio o tiempo se sitúa y cuáles términos desconocidos requieren definición.

📓 **REGISTRO EN TU CUADERNO DE LECTURA:**
✍️ *Anota en tu cuaderno de apuntes:*
1. **Título:** Pregunta #${q.questionNumber} - ${qTitle}
2. **Tipología textual:** (${component}).
3. **Datos explícitos:** Nombres de personajes, lugares, fechas o hechos literales mencionados.
4. **Glosario:** Define 2 palabras clave del texto que fortalezcan tu léxico.

💡 **IDEA GUÍA:**
${q.socraticHints?.recordar || 'Lee con atención los primeros párrafos y subraya las palabras esenciales.'}

${studentName}, cuando tengas estos datos en tu cuaderno, presiona **2️⃣** para resumir la idea central (Comprender) o indícame qué opción (**A**, **B**, **C** o **D**) consideras correcta.`;
  }

  // 2. Level 2: Comprender
  if (isAction2) {
    return `🏛️ **FASE 2: COMPRENDER (IDEA CENTRAL Y ESTRUCTURA GLOBAL)**

¡Muy bien, **${studentName}**! Comprender implica sintetizar el sentido global del texto, reconocer el propósito del autor y plasmar la jerarquía de las ideas en un esquema.

📖 **ANÁLISIS DEL SENTIDO GLOBAL:**
• **Propósito comunicativo:** ¿El texto busca narrar, informar, argumentar, criticar, enseñar o entretener?
• **Estructura del texto:** ¿Cómo se organizan las ideas desde la introducción hasta la conclusión?

📓 **ACTIVIDAD DE COMPRENSIÓN EN TU CUADERNO:**
✍️ *Sintetiza e ilustra en tu cuaderno:*
1. **Resumen en tus palabras (2-3 renglones):** ¿De qué trata el texto y cuál es el mensaje central?
2. **Esquema visual:** Dibuja un mapa conceptual, mapa de ideas o diagrama de causa-efecto que conecte los puntos principales.
3. **Tema o tesis:** Escribe en una sola frase el núcleo del mensaje.

💡 **ORIENTACIÓN SOCRÁTICA:**
${q.socraticHints?.comprender || '¿Cuál es la intención del autor al escribir este texto?'}

${studentName}, una vez tengas tu esquema listo en el cuaderno, presiona **3️⃣** para extraer citas y evidencias (Aplicar) o cuéntame qué descubriste.`;
  }

  // 3. Level 3: Aplicar
  if (isAction3) {
    return `🏛️ **FASE 3: APLICAR (EXTRACCIÓN DE CITAS Y EVIDENCIAS TEXTUALES)**

¡Momento de sustentar con el texto, **${studentName}**! En esta fase aplicamos la técnica del rastreo textual para extraer citas exactas que fundamenten tu respuesta.

📖 **FUNDAMENTO DE LA INTERPRETACIÓN:**
• Toda respuesta correcta en lectura crítica debe tener un anclaje directo o inferencial en el texto.
• Regla de oro: No supongas nada que el texto no respalde.

📓 **REGISTRO DE EVIDENCIAS EN TU CUADERNO:**
✍️ *Escribe en tu cuaderno:*
1. **Cita textual clave:** Copia entre comillas la frase o párrafo que contiene la clave de la pregunta.
2. **Relación de ideas:** Explica cómo esa cita se conecta con lo que indaga el enunciado.
3. **Conectores lógicos:** Identifica si hay conectores de causa, consecuencia, contraste o adición en el fragmento.

💡 **PISTA TEXTUAL:**
${q.socraticHints?.aplicar || 'Busca en el texto la oración donde se define la acción o afirmación principal.'}

${studentName}, ¿qué cita o fragmento del texto seleccionaste en tu cuaderno? Dime si te orienta hacia la opción **A**, **B**, **C** o **D**.`;
  }

  // 4. Level 4: Analizar
  if (isAction4) {
    return `🏛️ **FASE 4: ANALIZAR (DESCARTE JUSTIFICADO DE DISTRACTORES)**

¡Excelente ejercicio de pensamiento crítico, **${studentName}**! En las pruebas ICFES Saber, analizar los 4 enunciados te permite descubrir las trampas de lectura más frecuentes.

📖 **ANÁLISIS DE DISTRACTORES EN LECTURA:**
• En lectura crítica, los distractores suelen ser: opciones con generalizaciones exageradas, datos secundarios irrelevantes, contradicciones sutiles o sobreinterpretaciones subjetivas.
• Tu labor como estudiante Bolivariano es examinar CADA opción y argumentar por qué se acepta o descarta.

📓 **TABLA DE DESCARTE EN TU CUADERNO:**
✍️ *Escribe en tu cuaderno una razón para cada opción:*
• **Opción A:** ¿Por qué es válida o qué distorsión textual contiene?
• **Opción B:** ¿Qué error de lectura llevaría a un estudiante a marcarla?
• **Opción C:** ¿Qué afirmación del texto contradice o por qué es correcta?
• **Opción D:** ¿Por qué no responde con precisión a la pregunta?

💡 **PISTA PARA EL ANÁLISIS:**
${q.socraticHints?.analizar || 'Compara cada opción con el texto y detecta cuál añade cosas que el autor nunca dijo.'}

${studentName}, ¿cuáles opciones descartaste y cuál confirmas como la opción verdadera (**A**, **B**, **C** o **D**)?`;
  }

  // 5. Level 5: Evaluar
  if (isAction5) {
    return `🏛️ **FASE 5: EVALUAR (ARGUMENTACIÓN Y JUICIO CRÍTICO)**

¡Momento de defender tu postura con rigor, **${studentName}**! La competencia crítica consiste en evaluar la validez de los argumentos y la solidez de una postura.

📖 **ESTRUCTURA DE UN JUICIO CRÍTICO SÓLIDO:**
• Un argumento de lectura consta de: **Tesis** (la opción elegida), **Premisa/Evidencia** (las citas del texto) y **Garantía** (la coherencia lógica entre el texto y la pregunta).

📓 **REDACCIÓN EN TU CUADERNO:**
✍️ *Redacta en tu cuaderno tu sustentación formal:*
1. **Afirmación:** "Sostengo que la opción correcta es la [A/B/C/D] porque..."
2. **Sustentación textual:** "En el texto se afirma explícitamente/implícitamente que..."
3. **Refutación:** "Las demás opciones son inválidas debido a que..."

${studentName}, ¿cómo defenderías esta respuesta ante tu docente de lectura? Escríbeme tu argumento en el chat.`;
  }

  // 6. Level 6: Crear
  if (isAction6) {
    return `🏛️ **FASE 6: CREAR (PRODUCCIÓN TEXTUAL Y REFLEXIÓN CRÍTICA)**

¡El nivel más alto de dominio lector, **${studentName}**! Demuestras plena comprensión cuando eres capaz de producir tu propio texto reflexivo o recrear la historia en el contexto de nuestra región.

📖 **PRODUCCIÓN EN CONTEXTO TOLIMENSE / BOLIVARIANO:**
• Puedes relacionar la lectura con vivencias de Ibagué: el Cañón del Combeima, la Plaza de la 21, el Barrio La Pola o la convivencia en nuestra I.E. Técnica Simón Bolívar.

📓 **CREACIÓN EN TU CUADERNO:**
✍️ *Redacta en tu cuaderno:*
1. **Reflexión personal (4-5 líneas):** ¿Qué postura tomas frente al tema leído y cómo se aplica a tu vida diaria?
2. **Desenlace alternativo o nuevo texto:** Escribe un final distinto o un breve microcuento/ensayo inspirado en la lectura.

${studentName}, ¿qué reflexión o texto nuevo redactaste en tu cuaderno?`;
  }

  // 7. Hint / Orientación socrática
  if (isAction7) {
    return `🏛️ **PISTA SOCRÁTICA ORIENTADORA - PREGUNTA #${q.questionNumber}**

¡Con gusto, **${studentName}**! Aquí tienes pistas para enriquecer tu comprensión lectora:

💡 **GUÍA DE LECTURA PARA TU CUADERNO:**
• **Pista Literal (Recordar):** ${q.socraticHints?.recordar || 'Relee con calma el párrafo inicial y ubica los datos explícitos.'}
• **Pista Inferencial (Comprender):** ${q.socraticHints?.comprender || 'Identifica la intención comunicativa y el tono del autor.'}
• **Pista Crítica (Analizar):** ${q.socraticHints?.analizar || 'Compara las 4 opciones y busca la que guarde estricta coherencia con el texto.'}

${studentName}, ¿cuál de las opciones (**A**, **B**, **C** o **D**) consideras correcta tras releer las pistas?`;
  }

  // General conversational message
  return `🏛️ **ORIENTACIÓN PEDAGÓGICA PERSONALIZADA**

¡Muy bien, **${studentName}**! Sigamos profundizando en esta lectura con rigor y agudeza analítica.

📖 **ASPECTOS CLAVE DE LA LECTURA:**
• **Tipología:** ${component}
• **Competencia:** ${competency}
• **Objetivo de estudio:** Fortalecer tu comprensión lectora registrando apuntes reflexivos, citas textuales y justificaciones en tu cuaderno.

💡 **PREGUNTA ORIENTADORA:**
${q.socraticHints?.analizar || '¿Qué evidencias del texto te permiten validar una opción y descartar las otras tres?'}

💬 **OPCIONES DE DIÁLOGO:**
1️⃣ Registrar tipología y datos (Recordar)
2️⃣ Resumir e ilustrar (Comprender)
3️⃣ Extraer citas y evidencias (Aplicar)
4️⃣ Descartar distractores (Analizar)
5️⃣ Argumentar respuesta (Evaluar)
6️⃣ Redactar reflexión (Crear)
7️⃣ Pedir pista socrática

${studentName}, ¿cuál de las opciones (**A**, **B**, **C** o **D**) consideras correcta y cómo la sustentas en tu cuaderno?`;
}

const CANDIDATE_MODELS = [
  'gemini-3.7-flash',
  'gemini-3.1-flash-lite',
  'gemini-flash-latest'
];

async function callGeminiWithResilience(
  ai: GoogleGenAI,
  contents: any[],
  systemInstruction: string
): Promise<string | null> {
  for (const model of CANDIDATE_MODELS) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction,
            temperature: 0.65
          }
        });

        const text = response.text;
        if (text && text.trim().length > 0) {
          return text;
        }
      } catch (err: any) {
        const errMsg = err?.message || String(err);
        const isTransient = 
          errMsg.includes('503') || 
          errMsg.includes('high demand') || 
          errMsg.includes('UNAVAILABLE') || 
          errMsg.includes('429') || 
          errMsg.includes('ResourceExhausted') || 
          errMsg.includes('quota') ||
          errMsg.includes('fetch failed');

        console.warn(`[Gemini Resilient Engine] Model "${model}" (attempt ${attempt}/2) encountered status: ${errMsg.slice(0, 120)}`);

        if (attempt < 2 && isTransient) {
          // Exponential backoff with jitter
          await new Promise(resolve => setTimeout(resolve, attempt * 500 + Math.floor(Math.random() * 200)));
        } else {
          // Break to try next candidate model in cascade
          break;
        }
      }
    }
  }
  return null;
}

app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history, studentProfile, currentQuestion, imageBase64 } = req.body;
    const ai = getAIClient();

    const parsed = parseStudentMessageText(message, studentProfile);
    const studentName = (parsed.name || studentProfile?.name || '').toUpperCase().trim();
    const grade = parsed.grade || studentProfile?.grade;

    // 0. Unsupported Grade (outside 3°-11°): Immediately return institutional notice
    if (parsed.isUnsupportedGrade) {
      const unsupportedReply = buildFallbackSocraticResponse(message, studentProfile, currentQuestion);
      return res.json({ reply: unsupportedReply });
    }

    // 1. Missing Name or Grade: Insist on obtaining identity to know which booklet to study
    if (!studentName || !grade) {
      const askMissingReply = buildFallbackSocraticResponse(message, studentProfile, currentQuestion);
      return res.json({ reply: askMissingReply });
    }

    // 2. Onboarding / Question Presentation Message: Present the chosen question clearly
    if (parsed.isIdentityMsg || parsed.questionNumber || (currentQuestion && message.toLowerCase().includes('numero de pregunta'))) {
      if (currentQuestion) {
        const presentation = buildQuestionPresentationMessage(studentName, grade, currentQuestion);
        return res.json({ reply: presentation });
      }
    }

    let fullPrompt = '';
    if (studentProfile) {
      fullPrompt += `[ESTUDIANTE INSTITUCIONAL: Nombre="${studentName}", Grado=${grade}°, Bloque=${studentProfile.blockSolvedCount || 0}/4 preguntas]\n`;
    }
    if (currentQuestion) {
      fullPrompt += `[PREGUNTA ACTIVA #${currentQuestion.questionNumber} (Grado ${grade}°):
Título="${currentQuestion.title}"
Lectura Completa / Contexto="${currentQuestion.contextText || ''}"
Enunciado / Pregunta="${currentQuestion.statement}"
Opciones: A="${currentQuestion.options[0]?.text}", B="${currentQuestion.options[1]?.text}", C="${currentQuestion.options[2]?.text}", D="${currentQuestion.options[3]?.text}"
Opción Correcta=${currentQuestion.correctOption} (${currentQuestion.correctLetter})
Competencia="${currentQuestion.competency}"
Componente/Tipología="${currentQuestion.component}"
Estándar/Evidencia="${currentQuestion.evidence || currentQuestion.standard}"
Justificación Pedagógica="${currentQuestion.justification}"
Pistas Socráticas: Recordar="${currentQuestion.socraticHints?.recordar}", Comprender="${currentQuestion.socraticHints?.comprender}", Aplicar="${currentQuestion.socraticHints?.aplicar}", Analizar="${currentQuestion.socraticHints?.analizar}"
]\n`;
    }
    fullPrompt += `[MENSAJE / RESPUESTA DEL ESTUDIANTE]: ${message}\n[INSTRUCCIÓN PEDAGÓGICA CLAVE]:
1. Habla directamente al estudiante (${studentName}) en segunda persona ("tú"). Escribe SIEMPRE su nombre en MAYÚSCULAS (${studentName}).
2. Sé muy EXPLICATIVO: Define tipologías textuales, contextualiza la lectura, cita fragmentos y aporta ideas y datos claros para que el estudiante piense y escriba en su CUADERNO.
3. Habla SIEMPRE de "cuaderno", NUNCA de "libreta".
4. NO repitas eslóganes institucionales ni títulos largos en respuestas intermedias; ve al grano pedagógico.
5. NO cites nombres de metodologías teóricas (como Bloom); aplica directamente los verbos y fases de comprensión lectora.
6. Adapta la profundidad y el lenguaje al Grado ${grade}°.`;

    if (!ai) {
      // Use rich fallback Socratic generator
      const fallbackReply = buildFallbackSocraticResponse(message, { ...studentProfile, name: studentName, grade }, currentQuestion);
      return res.json({ reply: fallbackReply });
    }

    // Call Gemini API with rich Socratic system instruction and resilience
    const contents: any[] = [];
    
    // Add brief history
    if (Array.isArray(history) && history.length > 0) {
      const recentHistory = history.slice(-6);
      for (const msg of recentHistory) {
        contents.push({
          role: msg.sender === 'student' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      }
    }

    const currentParts: any[] = [{ text: fullPrompt }];
    if (imageBase64) {
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      currentParts.push({
        inlineData: {
          mimeType: 'image/jpeg',
          data: cleanBase64
        }
      });
    }

    contents.push({
      role: 'user',
      parts: currentParts
    });

    const generatedReply = await callGeminiWithResilience(ai, contents, SYSTEM_INSTRUCTION);
    const reply = generatedReply || buildFallbackSocraticResponse(message, { ...studentProfile, name: studentName, grade }, currentQuestion);

    return res.json({ reply });
  } catch (error: any) {
    console.warn('Handling /api/chat error gracefully via institutional engine:', error?.message || error);
    const fallbackReply = buildFallbackSocraticResponse(req.body?.message || '', req.body?.studentProfile, req.body?.currentQuestion);
    return res.json({ reply: fallbackReply });
  }
});

async function startServer() {
  // Setup Vite in Dev or serve dist in production
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR === 'true' ? false : undefined
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Tutor Socrático Bolivariano - Lectura server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
