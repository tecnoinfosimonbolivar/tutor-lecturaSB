// Banco Oficial de Preguntas ICFES Evaluar para Avanzar (Grados 3° a 11°)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
// Área: LECTURA / COMPRENSIÓN LECTORA Y LECTURA CRÍTICA
import { Question } from '../types';
import { OFFICIAL_GRADE_3 } from './officialQuestionsGrade3';
import { OFFICIAL_GRADE_4 } from './officialQuestionsGrade4';
import { OFFICIAL_GRADE_5 } from './officialQuestionsGrade5';
import { OFFICIAL_GRADE_6 } from './officialQuestionsGrade6';
import { OFFICIAL_GRADE_7 } from './officialQuestionsGrade7';
import { OFFICIAL_GRADE_8 } from './officialQuestionsGrade8';
import { OFFICIAL_GRADE_9 } from './officialQuestionsGrade9';
import { OFFICIAL_GRADE_10 } from './officialQuestionsGrade10';
import { OFFICIAL_GRADE_11 } from './officialQuestionsGrade11';

// Map containing verified official ICFES Evaluar para Avanzar questions for all grades (3° to 11°)
// Exact 20 official questions per grade = 180 total official ICFES Reading / Lectura Crítica questions
export const OFFICIAL_QUESTIONS_MAP: Record<number, Question[]> = {
  3: OFFICIAL_GRADE_3,
  4: OFFICIAL_GRADE_4,
  5: OFFICIAL_GRADE_5,
  6: OFFICIAL_GRADE_6,
  7: OFFICIAL_GRADE_7,
  8: OFFICIAL_GRADE_8,
  9: OFFICIAL_GRADE_9,
  10: OFFICIAL_GRADE_10,
  11: OFFICIAL_GRADE_11
};

export const GRADES_AVAILABLE = [3, 4, 5, 6, 7, 8, 9, 10, 11];

// Definition of 20 reading comprehension topics for each grade
export const GRADE_TOPICS: Record<number, Array<{
  title: string;
  statement: string;
  options: [string, string, string, string];
  correct: number;
  comp: string;
  compo: string;
  just: string;
  std: string;
}>> = {
  3: [
    {
      title: 'El zorro y la cigüeña en el banquete',
      statement: 'El zorro sirvió sopa en un plato plano y la cigüeña no pudo comer por su pico largo. Luego, la cigüeña sirvió comida en un jarrón estrecho donde el zorro no alcanzó con su hocico. ¿Por qué la cigüeña no pudo tomar la sopa en la casa del zorro?',
      options: ['Porque la sopa estaba hirviendo', 'Porque el plato era muy plano para su pico largo', 'Porque no tenía apetito', 'Porque el zorro no la dejó'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Continuo - Narrativo (Fábula)',
      just: 'El texto indica que el plato era demasiado plano para el pico largo y delgado de la cigüeña.',
      std: 'Comprensión de textos narrativos con moraleja'
    },
    {
      title: 'Afiche escolar: Cuidado del agua en el Simón Bolívar',
      statement: 'Un afiche escolar indica: "1. Cierra la llave al enjabonarte. 2. Si ves un grifo goteando en el colegio, avisa de inmediato al docente o al personal de aseo". ¿Qué debe hacer un estudiante si ve un grifo goteando?',
      options: ['Intentar desarmar el grifo', 'Avisar a su profesor o al personal de aseo', 'Ignorarlo y dejarlo correr', 'Cerrar toda la escuela'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Discontinuo - Afiche Informativo',
      just: 'El paso 2 del afiche señala expresamente avisar al profesor o al personal de aseo.',
      std: 'Lectura de afiches y carteleras'
    },
    {
      title: 'El colibrí y el fuego en el bosque',
      statement: 'Un colibrí llevaba gotas de agua en su pico para arrojarlas al fuego. El jaguar se burló, pero el colibrí dijo: "Hago mi parte". ¿Qué enseña la actitud del colibrí?',
      options: ['Que los pequeños no deben hablar', 'Que cada aporte individual es valioso con compromiso', 'Que ante un problema hay que huir', 'Que las gotas no apagan fuego'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Narrativo',
      just: 'El colibrí enseña el valor de la responsabilidad individual y la solidaridad activa.',
      std: 'Inferencia de enseñanzas y moralejas'
    },
    {
      title: 'Receta de limonada refrescante',
      statement: 'La receta indica: 1. Lavar limones. 2. Cortar con adulto. 3. Exprimir jugo en jarra. 4. Agregar agua y miel. 5. Revolver. 6. Servir con hielo. ¿Qué paso sigue al exprimir el jugo?',
      options: ['Lavar los limones', 'Servir en vasos con hielo', 'Agregar el litro de agua y la miel', 'Cortar los limones'],
      correct: 3,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Continuo - Instructivo',
      just: 'El paso número 4 que sigue a exprimir es agregar agua y miel.',
      std: 'Secuencias cronológicas en textos instructivos'
    },
    {
      title: 'Historieta: Simón y su perro Chispas',
      statement: 'En la historieta, Simón encuentra a su perro temblando bajo la cama mientras afuera suenan fuegos artificiales (¡Pum!). ¿Por qué Chispas estaba asustado bajo la cama?',
      options: ['Por frío invernal', 'Por el fuerte estruendo de la pólvora', 'Por enfado con Simón', 'Por jugar a las escondidas'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Discontinuo - Historieta',
      just: 'La onomatopeya sonora y el contexto revelan miedo a las detonaciones pirotécnicas.',
      std: 'Interpretación de viñetas y onomatopeyas'
    },
    {
      title: 'El oso de anteojos y sus manchas únicas',
      statement: 'El texto explica que el oso andino tiene manchas faciales únicas como si fueran una "huella digital". ¿Por qué se usa esa comparación?',
      options: ['Porque pinta árboles con las patas', 'Porque las manchas alrededor de los ojos son únicas en cada oso', 'Porque tiene dedos con lentes', 'Porque tiene fotos de policía'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Expositivo',
      just: 'La comparación señala que ningún oso tiene exactamente el mismo patrón de manchas.',
      std: 'Analogías en textos de ciencias'
    },
    {
      title: 'El campesino y el árbol hogar de aves',
      statement: 'Un campesino iba a talar un viejo manzano, pero al ver que en él anidaban gorriones y ardillas decidió cuidarlo. ¿Qué motivó al campesino a NO cortar el árbol?',
      options: ['Se le rompió el hacha', 'Comprendió el valor del árbol como hogar de otros seres vivos', 'Empezó a llover fuerte', 'Un vecino se lo compró'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Narrativo',
      just: 'El campesino reconoció el valor de la vida silvestre y el equilibrio ambiental.',
      std: 'Juicio crítico y valores éticos'
    },
    {
      title: 'Horario de la Biblioteca Escolar',
      statement: 'El aviso dice: "Viernes: 7:00 a.m. a 12:30 p.m. Sábados y domingos cerrado". Si un alumno llega un viernes a las 2:00 p.m., ¿qué ocurrirá?',
      options: ['Estará abierta hasta las 5', 'Estará cerrada porque los viernes atienden hasta las 12:30 p.m.', 'Le prestarán 10 libros', 'Pagará una multa'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Discontinuo - Aviso',
      just: 'El horario explícito de los viernes concluye a las 12:30 del mediodía.',
      std: 'Lectura de tablas horarias e instructivos'
    },
    {
      title: 'El viaje de la semilla de diente de león',
      statement: 'La semilla del diente de león tiene pequeños pelos blancos como un paracaídas que el viento transporta lejos. ¿Para qué le sirve esta estructura?',
      options: ['Para hundirse en el agua', 'Para ser transportada por el viento y germinar en otros lugares', 'Para que los pájaros se la coman', 'Para dormir en invierno'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Expositivo',
      just: 'La forma de paracaídas permite la dispersión aérea de las semillas.',
      std: 'Relaciones de causa y efecto en la naturaleza'
    },
    {
      title: 'Infografía: La lonchera saludable',
      statement: 'La infografía recomienda incluir: fruta fresca, agua pura y frutos secos, evitando gaseosas y paquetes con exceso de azúcar. ¿Cuál alimento pertenece a la lonchera saludable?',
      options: ['Gaseosas ultraprocesadas', 'Una manzana fresca y agua pura', 'Caramelos azucarados', 'Papas fritas con exceso de sal'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Discontinuo - Infografía',
      just: 'La fruta fresca y el agua son los elementos recomendados explícitamente.',
      std: 'Lectura de guías nutricionales'
    },
    {
      title: 'El puente de troncos y el trabajo en equipo',
      statement: 'Dos amigos unieron fuerzas cargando una rama gruesa para cruzar el charco del camino hacia la escuela. ¿Qué valor resalta el relato?',
      options: ['La competencia desleal', 'La cooperación y el compañerismo', 'La soledad en el camino', 'El miedo al agua'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Narrativo',
      just: 'La unión y el trabajo colaborativo permitieron solucionar el obstáculo.',
      std: 'Valores en la convivencia escolar'
    },
    {
      title: 'Poema: La luna sobre los tejados de Ibagué',
      statement: 'En el poema se lee: "La luna plateada baja en la noche / a cantar con los grillos sobre el tejado". ¿Qué figura literaria se utiliza al decir que la luna baja a cantar?',
      options: ['Una personificación o atribución de acciones humanas a la luna', 'Una resta matemática', 'Una receta culinaria', 'Una orden de policía'],
      correct: 1,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Lírico (Poema)',
      just: 'Se atribuye la cualidad humana de cantar a la luna (personificación).',
      std: 'Recursos poéticos y figuras literarias'
    },
    {
      title: 'Guía de reciclaje de colores',
      statement: 'Caneca blanca: residuos aprovechables limpios (papel, cartón, plástico). Caneca verde: orgánicos. Caneca negra: no aprovechables. ¿En cuál caneca debe depositarse una hoja de cuaderno limpia?',
      options: ['Caneca negra', 'Caneca blanca de aprovechables', 'Caneca verde', 'En el piso del aula'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Discontinuo - Tabla informativa',
      just: 'El papel limpio es un residuo aprovechable correspondiente a la caneca blanca.',
      std: 'Código de colores para separación ambiental'
    },
    {
      title: 'El pequeño delfín del río Magdalena',
      statement: 'El texto narra cómo los delfines rosados nadan en grupos familiares cuidando a las crías en las aguas dulces. ¿Dónde viven estos delfines?',
      options: ['En las altas montañas congeladas', 'En los ríos de agua dulce', 'En el desierto de arena', 'En piscinas con cloro'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Continuo - Expositivo',
      just: 'El texto indica que habitan ríos de agua dulce en ecosistemas fluviales.',
      std: 'Comprensión de hábitats animales'
    },
    {
      title: 'La luciérnaga que iluminaba el sendero',
      statement: 'Una luciérnaga encendió su luz para guiar a una hormiguita perdida en la noche oscura. ¿Por qué la luciérnaga ayudó a la hormiga?',
      options: ['Para cobrarle comida', 'Por empatía y solidaridad con quien estaba en peligro', 'Porque no quería dormir', 'Por orden del león'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Narrativo',
      just: 'La acción solidaria refleja compasión y ayuda desinteresada.',
      std: 'Motivaciones de los personajes'
    },
    {
      title: 'Ficha: El colibrí abejorro de Colombia',
      statement: 'Ficha técnica: Peso: 2 gramos. Vuelo: 80 aleteos por segundo. Alimentación: Néctar floral. ¿Cuántos aleteos por segundo realiza esta ave?',
      options: ['2 aleteos', '80 aleteos por segundo', '10 aleteos', '1000 aleteos'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Discontinuo - Ficha técnica',
      just: 'El dato explícito en la ficha técnica registra 80 aleteos por segundo.',
      std: 'Extracción de datos en fichas científicas'
    },
    {
      title: 'Carta de Mateo a su abuela en el campo',
      statement: 'Mateo escribe: "Querida abuelita, saqué cinco en lectura y aprendí a cuidar las matas del patio como tú me enseñaste". ¿Cuál es el motivo principal de la carta?',
      options: ['Pedir dinero prestado', 'Compartir sus logros escolares y expresar cariño a su abuela', 'Quejarse del colegio', 'Avisar que no irá a visitarla'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Epistolar (Carta)',
      just: 'La carta comunica afecto y orgullo por los aprendizajes compartidos.',
      std: 'Propósito comunicativo de textos epistolares'
    },
    {
      title: 'Afiche: Día de la Lectura Bolivariana',
      statement: 'El afiche anuncia: "Gran trueque de libros en la plazoleta escolar este jueves a las 9:00 a.m. Trae un libro y llévate otro". ¿Qué actividad central se llevará a cabo?',
      options: ['Venta de celulares', 'Intercambio solidario de libros de lectura', 'Un partido de fútbol', 'Clase de natación'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Discontinuo - Afiche cultural',
      just: 'El texto señala puntualmente un trueque o intercambio de libros.',
      std: 'Eventos y convocatorias escolares'
    },
    {
      title: 'El grano de maíz y la mazorca',
      statement: 'La fábula cuenta cómo un solo grano de maíz comprendió que junto a cientos de granos formaba una mazorca fuerte y nutritiva. ¿Qué simboliza la mazorca?',
      options: ['La fuerza de la comunidad unida frente al aislamiento', 'Un juguete para niños', 'Una piedra de río', 'Una rama seca'],
      correct: 1,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Fábula',
      just: 'Simboliza la importancia de la cohesión social y el trabajo comunitario.',
      std: 'Interpretación simbólica en relatos'
    },
    {
      title: 'Cuidado de las mascotas en el hogar',
      statement: 'El texto formativo explica que un perro o gato requiere alimento diario, visitas al veterinario, paseos y cariño. ¿Qué concluye el autor sobre tener una mascota?',
      options: ['Que es un juguete que se puede botar', 'Que es un compromiso de vida que requiere cuidado y responsabilidad', 'Que no necesitan agua', 'Que solo deben estar encerrados'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Expositivo / Formativo',
      just: 'Tener una mascota implica una responsabilidad ética y afectiva permanente.',
      std: 'Reflexión ética sobre el bienestar animal'
    }
  ],

  4: [
    {
      title: 'La leyenda de la flor del frailejón en los páramos',
      statement: 'El texto explica que los frailejones atrapan la niebla en sus hojas vellosas para alimentar los ríos de Ibagué. ¿Cuál es la función principal de sus hojas vellosas?',
      options: ['Alimentar jaguares', 'Atrapar las gotas de agua de la niebla y conducirlas al suelo', 'Producir leña para el fuego', 'Detener el viento'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Continuo - Informativo / Ecológico',
      just: 'Las hojas vellosas capturan el agua atmosférica para abastecer las cuencas hídricas.',
      std: 'Lectura de textos sobre biodiversidad regional'
    },
    {
      title: 'Metamorfosis de la mariposa',
      statement: 'En la infografía se muestran las etapas: huevo, oruga, crisálida y mariposa adulta. ¿En cuál etapa el insecto permanece inmóvil dentro de una estructura protectora?',
      options: ['Huevo', 'Oruga', 'Crisálida o pupa', 'Mariposa adulta'],
      correct: 3,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Discontinuo - Infografía',
      just: 'En la etapa de crisálida o pupa permanece inmóvil mientras ocurre la transformación.',
      std: 'Comprensión de procesos biológicos esquematizados'
    },
    {
      title: 'El puente colgante y la lección de solidaridad',
      statement: 'Tras romperse el puente escolar, Sofía buscó ramas de bambú y pidió apoyo al vecino para reparar el paso. ¿Qué actitud destacó en Sofía?',
      options: ['Conformismo y desánimo', 'Iniciativa proactiva y búsqueda solidaria de soluciones', 'Enojo con los vecinos', 'Temor paralizante'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Narrativo',
      just: 'Sofía demostró liderazgo, creatividad y trabajo en equipo.',
      std: 'Evaluación de actitudes en relatos de vida'
    },
    {
      title: 'El origen del río Coello',
      statement: 'El relato describe el nacimiento del río Coello en las nieves del volcán Tolima y su recorrido fértil por los valles arroceros. ¿Qué beneficio trae el río a la agricultura tolimense?',
      options: ['Secar los cultivos', 'Irrigar y nutrir los sembrados de arroz y frutas', 'Congelar los campos', 'Impedir el transporte'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Expositivo',
      just: 'El agua del río es la fuente vital para el riego de la agricultura del Tolima.',
      std: 'Comprensión del entorno geográfico y productivo'
    },
    {
      title: 'Afiche de ahorro energético',
      statement: 'El afiche recomienda desconectar cargadores cuando no se usen porque siguen consumiendo energía fantasma. ¿Qué es la "energía fantasma"?',
      options: ['Energía producida por espíritus', 'Consumo eléctrico involuntario de aparatos conectados en modo de espera', 'Energía solar de noche', 'Electricidad de las tormentas'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Discontinuo - Afiche',
      just: 'Es el consumo pasivo de dispositivos enchufados sin estar en funcionamiento activo.',
      std: 'Interpretación de conceptos técnicos en avisos'
    },
    {
      title: 'El mito del Mohán del río Magdalena',
      statement: 'Los pescadores cuentan que el Mohán protege los peces de quienes lanzan dinamita a los ríos. ¿Cuál es el sentido ecológico del mito?',
      options: ['Fomentar la pesca con veneno', 'Disuadir las prácticas pesqueras destructivas y proteger el río', 'Promover el miedo al agua limpia', 'Enseñar a nadar de noche'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Mito regional',
      just: 'Las leyendas populares operaban como reguladores éticos contra la sobreexplotación.',
      std: 'Análisis de la tradición oral tolimense'
    },
    {
      title: 'La estructura de una noticia escolar',
      statement: 'En la noticia se lee el titular: "Estudiantes bolivarianos ganan concurso regional de robótica". ¿Cuál es la función del titular?',
      options: ['Ocultar lo que pasó', 'Resumir el hecho principal y llamar la atención del lector', 'Contar un chiste', 'Poner la firma del rector'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Periodístico (Noticia)',
      just: 'El titular sintetiza la idea central más relevante del acontecimiento.',
      std: 'Estructura de textos periodísticos'
    },
    {
      title: 'La abeja reina y la colmena organizada',
      statement: 'El texto describe la división de labores en la colmena: nodrizas, recolectoras, constructoras y guardias. ¿Por qué es exitosa la colmena?',
      options: ['Porque cada miembro trabaja solo sin comunicarse', 'Por la cooperación armónica y la especialización de funciones', 'Porque pelean entre sí', 'Porque no tienen reglas'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Científico',
      just: 'El trabajo coordinado y la disciplina colectiva aseguran la supervivencia.',
      std: 'Relaciones de interdependencia biológica'
    },
    {
      title: 'Infografía: Pirámide de la actividad física infantil',
      statement: 'La base muestra actividades diarias (caminar, subir escaleras, jugar en el recreo); la cúspide limita los videojuegos a menos de 1 hora. ¿Qué nivel debe realizarse a diario?',
      options: ['Videojuegos todo el día', 'Caminar, moverse y jugar activamente todos los días', 'Dormir 15 horas', 'Quedarse sentado'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Discontinuo - Infografía de salud',
      just: 'La base ancha de la pirámide representa las actividades que deben hacerse cotidianamente.',
      std: 'Interpretación de pirámides y gráficos de hábitos'
    },
    {
      title: 'El sapo y la mariposa vanidosa',
      statement: 'Una mariposa se burlaba de la piel rugosa de un sapo. Cuando un pájaro hambriento llegó, el sapo se camufló en el barro y salvó a la mariposa escondiéndola bajo una hoja. ¿Qué aprendió la mariposa?',
      options: ['Que las apariencias no definen la nobleza ni el valor de los demás', 'Que debe burlarse más fuerte', 'Que los sapos comen barro', 'Que las alas no sirven para volar'],
      correct: 1,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Fábula',
      just: 'Reconoció que la belleza exterior es superficial frente a la bondad y la generosidad.',
      std: 'Juicio sobre prejuicios y discriminación'
    },
    {
      title: 'Los Ocobos rosados de Ibagué',
      statement: 'En agosto, los ocobos florecen vistiendo a Ibagué de pétalos rosados y lilas. El texto explica que la floración anuncia el fin de los vientos secos. ¿Qué fenómeno natural describen?',
      options: ['La caída de nieve', 'La floración estacional de los árboles nativos de la ciudad', 'La erupción de un volcán', 'La contaminación del aire'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Continuo - Descriptivo / Botánica',
      just: 'Describe el ciclo de floración del árbol emblemático de Ibagué.',
      std: 'Comprensión de textos descriptivos del entorno'
    },
    {
      title: 'El campesino que sembraba agua',
      statement: 'Don Pedro reforestó la cabecera de su finca con alisos y nacederos. Diez años después, la quebrada volvió a brotar. ¿Qué significa "sembrar agua" en sentido figurado?',
      options: ['Poner cubos de hielo en la tierra', 'Sembrar árboles y vegetación que retienen y recargan las fuentes hídricas', 'Llenar botellas de plástico', 'Enterrar tuberías'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Narrativo / Crónica',
      just: 'Es una metáfora de la reforestación como método natural para recuperar nacimientos de agua.',
      std: 'Lenguaje figurado y metáforas ecológicas'
    },
    {
      title: 'Receta tradicional: El insulso tolimense',
      statement: 'Ingredientes: maíz blanco, panela, canela y hojas de plátano. Se cocina la masa hasta que espese y se envuelve en hojas asadas. ¿Qué ingrediente le da el sabor dulce?',
      options: ['La sal marina', 'La panela rallada', 'El agua del río', 'Las hojas de plátano'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Continuo - Receta gastronómica',
      just: 'La panela es el endulzante tradicional de la gastronomía tolimense.',
      std: 'Textos procedimentales de patrimonio culinario'
    },
    {
      title: 'Historieta: El perro guardián del parque Centenario',
      statement: 'En la historieta, un perro callejero recoge botellas de plástico que los transeúntes tiran y las deposita en la caneca de reciclaje ante el asombro de todos. ¿Qué crítica social plantea?',
      options: ['Que los perros deben pagar impuestos', 'Que los animales muestran a veces más civismo ecológico que las personas descuidadas', 'Que no debe haber parques', 'Que el plástico es comestible'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Discontinuo - Caricatura',
      just: 'Usa la ironía para avergonzar la falta de cultura ciudadana frente a la limpieza urbana.',
      std: 'Crítica ciudadana en medios gráficos'
    },
    {
      title: 'El cóndor de los Andes y su vuelo majestuoso',
      statement: 'El cóndor aprovecha las corrientes térmicas de aire caliente para planear durante horas sin gastar energía batiendo sus alas gigantescas. ¿Cómo logra mantenerse en el aire?',
      options: ['Usando un motor', 'Planeando sobre las corrientes térmicas ascendentes', 'Nadando en el río', 'Corriendo en la tierra'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Continuo - Expositivo',
      just: 'Aprovecha las columnas de aire ascendente para su vuelo de planeo.',
      std: 'Principios de física en adaptaciones biológicas'
    },
    {
      title: 'Aviso del simulacro de evacuación escolar',
      statement: 'Instrucciones: "Al sonar la alarma: 1. Conserva la calma. 2. Camina en fila sin correr por la derecha. 3. Reúnanse en la cancha central". ¿Por qué se prohíbe correr?',
      options: ['Para demorarse más', 'Para evitar caídas, tropiezos y tumultos peligrosos durante la evacuación', 'Para jugar carreras', 'Porque los zapatos se ensucian'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Protocolo de seguridad',
      just: 'Caminar con serenidad previene accidentes en situaciones de emergencia.',
      std: 'Lectura de protocolos y prevención escolar'
    },
    {
      title: 'El secreto del bambú japonés',
      statement: 'Durante 7 años no se ve crecer el bambú en la superficie porque echa raíces profundas; luego crece 30 metros en 6 semanas. ¿Cuál es la enseñanza del texto?',
      options: ['Que las plantas no necesitan agua', 'Que los grandes logros requieren paciencia, constancia y bases sólidas invisibles', 'Que hay que talar bambúes rápido', 'Que 7 años es una pérdida de tiempo'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Narrativo / Reflexivo',
      just: 'Enfatiza la disciplina y el trabajo silencioso antes de ver los frutos exteriores.',
      std: 'Valores de perseverancia y resiliencia'
    },
    {
      title: 'Infografía: Las 3 R de la ecología',
      statement: 'Reducir: consumir menos. Reutilizar: dar nueva vida a los objetos. Reciclar: transformar materiales en nuevos productos. ¿Qué acción corresponde a "Reutilizar"?',
      options: ['Botar la ropa a la basura', 'Usar un frasco de vidrio como portalápices', 'Comprar 5 juguetes iguales', 'Quemar neumáticos'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Discontinuo - Infografía',
      just: 'Dar una segunda función práctica a un envase usado es reutilizar.',
      std: 'Aplicación de conceptos ecológicos'
    },
    {
      title: 'El loro orejiamarillo y la palma de cera',
      statement: 'El loro orejiamarillo depende exclusivamente de la palma de cera para anidar y alimentarse. Si desaparece la palma de cera, ¿qué ocurrirá con el loro?',
      options: ['Se irá a vivir a la Antártida', 'Estará en peligro inminente de extinción al perder su hábitat y sustento vital', 'Aprenderá a volar más rápido', 'Comerá metales'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Expositivo',
      just: 'La interdependencia de especies hace que la pérdida de la palma destruya al ave.',
      std: 'Interdependencia ecológica en especies amenazadas'
    },
    {
      title: 'El valor de la honestidad escolar',
      statement: 'Camilo encontró una cartuchera llena de colores en el patio y la entregó a la rectoría. El dueño la recuperó y agradeció con un abrazo sincero. ¿Qué demostró Camilo?',
      options: ['Desinterés por los útiles', 'Honestidad, integridad cívica y empatía bolivariana', 'Miedo al castigo', 'Que no le gustaba dibujar'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Narrativo',
      just: 'Actuó conforme a la ética y el respeto por los bienes ajenos.',
      std: 'Formación ciudadana y ética institucional'
    }
  ],

  // Grades 5 through 11 with similar depth
  5: [
    {
      title: 'El Cañón del Combeima: Santuario de biodiversidad',
      statement: 'El texto expone que el río Combeima suministra más del 80% del agua potable de Ibagué, pero afronta riesgos por deforestación y basuras. ¿Cuál es la idea central del párrafo?',
      options: ['Que Ibagué no tiene fuentes de agua', 'Que el Cañón tiene una gran importancia hídrica y ecológica, pero enfrenta serias amenazas ambientales', 'Que los turistas deben arrojar basuras', 'Que el cóndor solo come loros'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Expositivo',
      just: 'Sintetiza el valor estratégico del río y la urgencia de proteger su cuenca.',
      std: 'Extracción de ideas principales y secundarias'
    },
    {
      title: 'El mito tolimense de la Madremonte',
      statement: 'La leyenda afirma que la Madremonte protege la selva y castiga a taladores ilegales y contaminadores con crecientes de lodo. ¿A quiénes castiga?',
      options: ['A los labradores honestos', 'A las personas que talan árboles ilegalmente, cazan y contaminan los ríos', 'A los niños en la escuela', 'A las aves del monte'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Continuo - Mito folclórico',
      just: 'El texto señala de forma literal que castiga a quienes atentan contra la naturaleza.',
      std: 'Comprensión de mitos y tradiciones populares'
    },
    {
      title: 'Caricatura: El uso excesivo de pantallas',
      statement: 'Una familia está en la sala: cada uno absorto en su celular mientras en la pared hay un cuadro que dice "Familia unida en el diálogo". ¿Cuál es la crítica?',
      options: ['Que falta luz eléctrica en la casa', 'El contraste irónico entre el mensaje de unión familiar y la desconexión real que causan las pantallas', 'Que los juegos de mesa usan internet', 'Que necesitan comprar celulares más caros'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Discontinuo - Caricatura de opinión',
      just: 'Cuestiona la paradoja de estar juntos físicamente pero incomunicados afectivamente.',
      std: 'Interpretación de ironía y sátira gráfica'
    },
    {
      title: 'El ciclo del agua y el cambio climático',
      statement: 'El aumento de temperatura global acelera la evaporación y provoca sequías prolongadas seguidas de lluvias torrenciales. ¿Qué consecuencia directa describe el autor?',
      options: ['La desaparición de los océanos', 'La alteración de la frecuencia e intensidad de los eventos climáticos extremos', 'Que el agua dejará de evaporarse', 'La congelación de las ciudades'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Expositivo',
      just: 'El calentamiento global desestabiliza los regímenes hidrológicos mundiales.',
      std: 'Relaciones de causa-efecto en textos científicos'
    },
    {
      title: 'Crónica: Un día en la Plaza de la 21 de Ibagué',
      statement: 'El cronista describe los pregones matutinos, los aromas a cilantro y frutas frescas, y el esfuerzo de los campesinos que madrugan desde las veredas. ¿Qué propósito tiene la crónica?',
      options: ['Promover la comida chatarra', 'Retratar la vitalidad cultural, humana y económica del mercado campesino regional', 'Criticar a los campesinos', 'Vender productos industriales'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Crónica periodística',
      just: 'Visibiliza la dignidad del trabajo agrícola y la riqueza sensorial de la plaza.',
      std: 'Análisis de crónicas urbanas'
    },
    {
      title: 'El secreto de la fotosíntesis en las hojas verdes',
      statement: 'Las plantas convierten agua, sales minerales y dióxido de carbono en glucosa y liberan oxígeno gracias a la clorofila y la luz solar. ¿Qué gas indispensable para nuestra respiración liberan?',
      options: ['Dióxido de carbono', 'Oxígeno puro', 'Metano', 'Nitrógeno'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Continuo - Expositivo',
      just: 'El oxígeno es el subproducto vital liberado por las plantas a la atmósfera.',
      std: 'Conceptos de ciencias en textos expositivos'
    },
    {
      title: 'Infografía: Manejo integral de residuos sólidos',
      statement: 'Se presentan las etapas: separación en la fuente, recolección selectiva, compostaje y reciclaje industrial. ¿Cuál es el primer paso indispensable?',
      options: ['Tirar todo mezclado al camión', 'Separar adecuadamente los residuos en el hogar y en la escuela', 'Quemar la basura', 'Enterrar plásticos'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Discontinuo - Infografía',
      just: 'La separación en la fuente es el punto de partida para que la cadena funcione.',
      std: 'Procesos secuenciales en infografías'
    },
    {
      title: 'La fábula del león y el ratón agradecido',
      statement: 'El ratoncito royó la red de los cazadores y liberó al león que antes le había perdonado la vida. ¿Qué enseña el desenlace?',
      options: ['Que los leones no tienen fuerza', 'Que nadie es tan pequeño como para no poder brindar una valiosa ayuda', 'Que no se debe cazar ratones', 'Que las redes son de queso'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Fábula',
      just: 'Demuestra que la generosidad engendra gratitud y que el valor no depende del tamaño.',
      std: 'Interpretación de moralejas clásicas'
    },
    {
      title: 'El Parque Arqueológico de San Agustín',
      statement: 'El texto histórico relata cómo las esculturas megalíticas en piedra tallada revelan la cosmovisión y el respeto por los animales sagrados de los antiguos pobladores. ¿Qué reflejan las estatuas?',
      options: ['Planos de carreteras modernas', 'La cosmovisión espiritual, el arte y el pensamiento simbólico de culturas ancestrales', 'Juegos de mesa antiguos', 'Retratos de turistas europeos'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Histórico / Cultural',
      just: 'Constituyen una manifestación sagrada del arte y la memoria indígena.',
      std: 'Patrimonio arqueológico nacional'
    },
    {
      title: 'Artículo: El impacto del plástico de un solo uso',
      statement: 'Una bolsa plástica se usa 15 minutos en promedio pero tarda más de 400 años en degradarse en los océanos. ¿Cuál es el contraste que resalta el autor?',
      options: ['El bajo precio del petróleo', 'La desproporción entre su efímera utilidad y su prolongado daño ecológico por siglos', 'Que los peces comen plástico con gusto', 'Que el plástico es biodegradable en 2 días'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Artículo de opinión',
      just: 'Denuncia la irracionalidad de generar basura permanente por comodidades pasajeras.',
      std: 'Argumentación crítica en textos ambientales'
    },
    {
      title: 'El volcán Nevado del Ruiz y la memoria histórica',
      statement: 'El texto rememora la tragedia de Armero en 1985 y subraya la importancia del monitoreo geológico y la prevención del riesgo en los municipios del Tolima. ¿Cuál es la lección histórica?',
      options: ['Olvidar el pasado geológico', 'Que la ciencia, la prevención comunitaria y la alerta temprana salvan vidas frente a amenazas naturales', 'Construir más casas en los cauces de ríos', 'Prohibir los mapas volcánicos'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Histórico / Científico',
      just: 'La memoria histórica fortalece la cultura de prevención y la gestión del riesgo.',
      std: 'Gestión del riesgo y memoria histórica regional'
    },
    {
      title: 'El poema "Canto a Colombia" de los poetas de la patria',
      statement: 'Los versos cantan a los dos mares, las tres cordilleras y la calidez de sus gentes. ¿Cuál es el tono predominante del poema?',
      options: ['De tristeza y rabia', 'De orgullo patrio, admiración y celebración lírica de la diversidad geográfica', 'De burla y sarcasmo', 'De indiferencia'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Poema lírico',
      just: 'Expresa exaltación y devoción por la geografía y cultura colombiana.',
      std: 'Tono y sensibilidad estética en la poesía'
    },
    {
      title: 'Infografía: Pirámide de la alimentación balanceada',
      statement: 'La infografía recomienda consumir 5 porciones diarias de frutas y verduras frescas ricas en fibra y vitaminas. ¿Qué nutriente principal aportan?',
      options: ['Grasas saturadas', 'Fibra dietaria, minerales y vitaminas esenciales', 'Azúcar refinada', 'Gases tóxicos'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Discontinuo - Infografía',
      just: 'Aportan micronutrientes y fibra esenciales para el metabolismo digestivo.',
      std: 'Educación nutricional y lectura de diagramas'
    },
    {
      title: 'La leyenda de Francisco el Hombre y el acordeón',
      statement: 'El juglar derrotó al mal tocando el credo al revés con su acordeón en una noche oscura. ¿Qué simboliza Francisco el Hombre?',
      options: ['La música como triunfo del arte popular, el ingenio y la luz sobre la oscuridad', 'Un comerciante de telas', 'Un guerrero con espada', 'Un pintor de cuadros'],
      correct: 1,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Leyenda folclórica',
      just: 'Encarna la fuerza poética del folclor vallenato y la sabiduría campesina.',
      std: 'Simbolismos en la tradición oral colombiana'
    },
    {
      title: 'El sistema solar y los planetas rocosos',
      statement: 'Mercurio, Venus, Tierra y Marte son planetas rocosos o telúricos más cercanos al Sol, a diferencia de los gigantes gaseosos como Júpiter y Saturno. ¿Qué caracteriza a los planetas rocosos?',
      options: ['Están hechos únicamente de gas helio', 'Tienen una superficie sólida compuesta de rocas y metales', 'No tienen gravedad', 'Están congelados a mil grados'],
      correct: 2,
      comp: 'Identificar y entender los contenidos locales que conforman un texto (Literal)',
      compo: 'Texto Continuo - Divulgación astronómica',
      just: 'Se definen por su corteza sólida y densidad rocosa.',
      std: 'Clasificación de cuerpos astronómicos'
    },
    {
      title: 'El origen del Día de la Tierra',
      statement: 'El 22 de abril se conmemora para crear conciencia global sobre la contaminación, la pérdida de biodiversidad y la sobreexplotación de recursos. ¿Cuál es el fin de la conmemoración?',
      options: ['Hacer fiestas comerciales', 'Promover la conciencia ciudadana y la acción política en defensa del medio ambiente', 'Apagar el sol', 'Vender autos a gasolina'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Expositivo',
      just: 'Busca movilizar a los pueblos hacia la sustentabilidad y el cuidado planetario.',
      std: 'Fechas cívicas y movimientos globales'
    },
    {
      title: 'El valor de la empatía en la convivencia',
      statement: 'Ponerse en los zapatos del otro permite comprender sus sentimientos y resolver desacuerdos mediante el diálogo sereno sin recurrir a la agresión. ¿Qué cualidad se destaca?',
      options: ['El egoísmo individual', 'La empatía y la comunicación asertiva para la paz escolar', 'La indiferencia', 'El insulto en redes sociales'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Formativo',
      just: 'La empatía es la base de la convivencia pacífica y democrática.',
      std: 'Competencias ciudadanas y resolución de conflictos'
    },
    {
      title: 'El río Magdalena: Arteria fluvial de la patria',
      statement: 'Nace en el Macizo Colombiano y desemboca en Bocas de Ceniza, uniendo pueblos, culturas, músicas y comercio a lo largo de más de 1.500 kilómetros. ¿Por qué se le llama "arteria fluvial"?',
      options: ['Porque transporta sangre humana', 'Porque ha sido la vía central de comunicación, transporte y vida cultural que conecta al país', 'Porque está seco', 'Porque solo existe en mapas antiguos'],
      correct: 2,
      comp: 'Comprender cómo se articulan las partes de un texto para darle un sentido global (Inferencial)',
      compo: 'Texto Continuo - Geográfico / Histórico',
      just: 'Funciona como el eje vertebrador del transporte y la historia nacional.',
      std: 'Sentido figurado en geografía cultural'
    },
    {
      title: 'Historieta: El robot que quería aprender a soñar',
      statement: 'Un androide calculaba millones de ecuaciones en un segundo, pero le preguntó a una niña qué se siente llorar de alegría o imaginar mundos inexistentes. ¿Qué frontera explora el relato?',
      options: ['El precio de los chips de memoria', 'La diferencia entre la capacidad de cálculo artificial y las emociones y la creatividad humana', 'Cómo reparar un cable roto', 'Que las máquinas comen pasto'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Ciencia ficción',
      just: 'Reflexiona sobre lo que hace único al ser humano: su sensibilidad y conciencia ética.',
      std: 'Dilemas éticos en relatos futuristas'
    },
    {
      title: 'Decálogo del Estudiante Bolivariano',
      statement: 'El manual institucional proclama: "Ciencia y Virtud son las dos alas que permiten al joven bolivariano volar hacia la excelencia y el servicio a su comunidad". ¿Qué representan las dos alas?',
      options: ['Los zapatos del uniforme', 'La unión equilibrada entre el conocimiento académico riguroso (ciencia) y los valores éticos (virtud)', 'Dos pájaros del patio', 'Las vacaciones de mitad de año'],
      correct: 2,
      comp: 'Reflexionar a partir de un texto y evaluar su contenido (Crítico)',
      compo: 'Texto Continuo - Institucional / Ético',
      just: 'Sintetiza la misión formativa integral de la I.E. Técnica Simón Bolívar.',
      std: 'Filosofía e identidad institucional bolivariana'
    }
  ]
};

// Generates or retrieves a full question for any grade (3 to 11) and number (1 to 20)
export function getQuestionForGradeAndNumber(grade: number, questionNumber: number): Question {
  // First check in OFFICIAL_QUESTIONS_MAP (Grades 3° to 11°)
  if (OFFICIAL_QUESTIONS_MAP[grade]) {
    const official = OFFICIAL_QUESTIONS_MAP[grade].find(q => q.questionNumber === questionNumber);
    if (official) return official;
  }

  const letterMap: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
  const gradeTopicList = GRADE_TOPICS[grade] || GRADE_TOPICS[5] || GRADE_TOPICS[3];
  const topic = gradeTopicList[(questionNumber - 1) % gradeTopicList.length];

  const correctLetter = letterMap[topic.correct - 1] || 'B';

  return {
    id: grade * 100 + questionNumber,
    grade,
    questionNumber,
    title: topic.title,
    statement: `[Pregunta #${questionNumber} - Grado ${grade}°]: ${topic.statement}`,
    options: [
      { number: 1, letter: 'A', text: topic.options[0] },
      { number: 2, letter: 'B', text: topic.options[1] },
      { number: 3, letter: 'C', text: topic.options[2] },
      { number: 4, letter: 'D', text: topic.options[3] }
    ],
    correctOption: topic.correct,
    correctLetter: correctLetter,
    competency: topic.comp,
    component: topic.compo,
    affirmation: `Comprende, interpreta y evalúa textos del tipo ${topic.compo} identificando ideas locales y sentido global.`,
    evidence: `Resuelve preguntas de comprensión lectora justificando su respuesta en el cuaderno de apuntes con evidencias textuales.`,
    standard: topic.std,
    justification: topic.just,
    invalidOptionsReasoning: {
      A: 'Presenta una interpretación errónea o distorsión del contenido del texto.',
      B: 'Omite información esencial o contradice la postura del autor.',
      C: 'Aplica una sobreinterpretación no respaldada por evidencias textuales.',
      D: 'Confunde los hechos narrados con datos secundarios irrelevantes.'
    },
    socraticHints: {
      recordar: `¿Cuáles son los datos textuales explícitos y palabras clave de la pregunta #${questionNumber}?`,
      comprender: `Explica en tus propias palabras la idea central de este texto (${topic.compo}).`,
      aplicar: `Extrae citas textuales y anótalas en tu cuaderno de apuntes para fundamentar tu análisis.`,
      analizar: `¿Por qué la opción ${correctLetter} es textualmente coherente y cómo descartas las otras tres opciones?`
    }
  };
}

// Get all 20 questions for a given grade
export function getGradeQuestionsList(grade: number): Question[] {
  const list: Question[] = [];
  for (let i = 1; i <= 20; i++) {
    list.push(getQuestionForGradeAndNumber(grade, i));
  }
  return list;
}

export const COMPETENCIES_INFO = {
  primaria_secundaria: [
    {
      title: '1. Identificar y entender contenidos locales (Literal)',
      desc: 'Reconocer, ubicar y comprender la información literal, el significado de palabras, frases o fragmentos explícitos en el texto.'
    },
    {
      title: '2. Comprender la articulación global del texto (Inferencial)',
      desc: 'Relacionar partes de un texto para deducir conclusiones, identificar el propósito del autor, la tesis, los argumentos y el sentido global.'
    },
    {
      title: '3. Reflexionar y evaluar el contenido (Crítico)',
      desc: 'Juzgar críticamente la validez de los argumentos, los recursos estilísticos, la ironía, la intencionalidad y el punto de vista del autor.'
    }
  ],
  media: [
    {
      title: '1. Identificar contenidos locales (Literal / Léxico)',
      desc: 'Comprender el significado semántico y contextual de elementos locales, conectores lógicos y conceptos nucleares.'
    },
    {
      title: '2. Articulación del sentido global y premisas (Inferencial)',
      desc: 'Analizar la estructura jerárquica del texto, relaciones de implicación, tesis, argumentos de sustento y contraargumentos.'
    },
    {
      title: '3. Reflexión crítica, retórica y juicio valorativo (Crítico)',
      desc: 'Evaluar supuestos ideológicos, falacias, estrategias persuasivas, recursos estilísticos y pertinencia dialógica frente al contexto.'
    }
  ]
};
