import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  ExternalLink, 
  GraduationCap, 
  Sparkles, 
  Globe, 
  Search, 
  Copy, 
  Check, 
  Bookmark, 
  AlertTriangle, 
  FileText,
  Lightbulb,
  Compass
} from 'lucide-react';
import { Question } from '../types';
import { getCapsuleForQuestion } from '../data/conceptualCapsules';

interface AcademicResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: Question;
  studentName?: string;
}

export const AcademicResourcesModal: React.FC<AcademicResourcesModalProps> = ({
  isOpen,
  onClose,
  question,
  studentName = 'ESTUDIANTE'
}) => {
  const [copiedNotebook, setCopiedNotebook] = useState(false);
  const [activeTab, setActiveTab] = useState<'capsule' | 'sources' | 'notebook'>('capsule');

  if (!isOpen || !question) return null;

  const capsule = getCapsuleForQuestion(question.component, question.title, question.grade);
  const uppercaseName = studentName.toUpperCase();

  const handleCopyNotebook = () => {
    const textToCopy = `🏛️ I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ
APUNTES EN MI CUADERNO DE LECTURA (15 MINUTOS)
Estudiante: ${uppercaseName} | Grado: ${question.grade}° | Pregunta #${question.questionNumber}

📌 TÍTULO: ${question.title.toUpperCase()}
📋 TIPOLOGÍA: ${capsule.conceptTitle} (${question.component})
🎯 COMPETENCIA EVALUADA: ${question.competency}

1. RESUMEN CONCEPTUAL Y VOCABULARIO:
${capsule.definitionSummary}

2. TÉCNICA DE LECTURA APLICADA:
${capsule.readingTechnique}

3. PREGUNTAS DE INDAGACIÓN EN MI CUADERNO:
${capsule.notebookTemplate.keyQuestions.map((q, idx) => `  ${idx + 1}. ${q}`).join('\n')}

4. EVIDENCIA TEXTUAL Y CITA CLAVE:
${capsule.notebookTemplate.evidencePrompt}

5. ANÁLISIS DE DISTRACTORES Y CONCLUSIÓN:
- Mi respuesta fundamentada: Opción ${question.correctLetter}
- Justificación: ${question.justification}`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedNotebook(true);
    setTimeout(() => setCopiedNotebook(false), 2500);
  };

  // Safe search links
  const colombiaAprendeUrl = 'https://movil.colombiaaprende.edu.co/';
  const khanAcademyUrl = 'https://es.khanacademy.org/';
  const raeUrl = 'https://dle.rae.es/';
  const wikipediaUrl = `https://es.wikipedia.org/wiki/${capsule.wikipediaSlug}`;
  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(capsule.academicSearchQuery + ' icfes lectura')}`;
  const googleScholarUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(capsule.academicSearchQuery)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden text-slate-100">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 px-5 py-4 border-b border-blue-800/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/30 border border-blue-400/40 text-amber-300">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  Grado {question.grade}° • Pregunta #{question.questionNumber}
                </span>
                <span className="text-[10px] font-semibold text-blue-300 hidden sm:inline">
                  {question.component}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white leading-tight mt-0.5">
                Centro de Recursos y Cápsula Conceptual Nativa
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            title="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-4 pt-2 gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('capsule')}
            className={`flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-t-lg transition-colors border-t-2 ${
              activeTab === 'capsule'
                ? 'bg-slate-900 text-amber-300 border-amber-400'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Cápsula Conceptual (Offline)
          </button>

          <button
            onClick={() => setActiveTab('sources')}
            className={`flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-t-lg transition-colors border-t-2 ${
              activeTab === 'sources'
                ? 'bg-slate-900 text-blue-300 border-blue-400'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            Fuentes Académicas Oficiales
          </button>

          <button
            onClick={() => setActiveTab('notebook')}
            className={`flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-t-lg transition-colors border-t-2 ${
              activeTab === 'notebook'
                ? 'bg-slate-900 text-emerald-300 border-emerald-400'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Plantilla para tu Cuaderno
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 text-sm">
          
          {/* TAB 1: CÁPSULA CONCEPTUAL */}
          {activeTab === 'capsule' && (
            <div className="space-y-4">
              {/* Concept Card */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800/90 to-blue-950/50 border border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-extrabold text-xs uppercase tracking-wide">
                  <Lightbulb className="w-4 h-4" />
                  Concepto Clave: {capsule.conceptTitle}
                </div>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                  {capsule.definitionSummary}
                </p>
              </div>

              {/* Reading Technique */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 space-y-2">
                <div className="flex items-center gap-2 text-blue-300 font-extrabold text-xs uppercase tracking-wide">
                  <Compass className="w-4 h-4" />
                  Técnica de Lectura Socrática Recomendada
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {capsule.readingTechnique}
                </p>
              </div>

              {/* Common ICFES Traps */}
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-wide">
                  <AlertTriangle className="w-4 h-4" />
                  Trampas Típicas y Errores de Lectura (ICFES)
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {capsule.commonIcfesTraps.map((trap, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold shrink-0">⚠️</span>
                      <span>{trap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Prompt to Notebook */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/60 border border-slate-700 text-xs">
                <span className="text-slate-300">
                  ¿Deseas copiar esta síntesis a tu cuaderno de apuntes?
                </span>
                <button
                  onClick={handleCopyNotebook}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors active:scale-95 shadow-xs"
                >
                  {copiedNotebook ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedNotebook ? '¡Copiado!' : 'Copiar Plantilla'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: FUENTES ACADÉMICAS OFICIALES */}
          {activeTab === 'sources' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-300 leading-relaxed">
                Enlaces directos a los portales educativos y fuentes de consulta académica más confiables. Sin reproductores de video con bloqueos o errores de reproducción:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Colombia Aprende */}
                <a
                  href={colombiaAprendeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-blue-950/70 border border-slate-700 hover:border-blue-500/50 flex items-start gap-3 transition-all group"
                >
                  <span className="text-2xl shrink-0">🇨🇴</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-white group-hover:text-blue-300">Colombia Aprende (MEN)</h4>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400" />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      Portal educativo del Ministerio de Educación Nacional de Colombia.
                    </p>
                  </div>
                </a>

                {/* Khan Academy */}
                <a
                  href={khanAcademyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-emerald-950/70 border border-slate-700 hover:border-emerald-500/50 flex items-start gap-3 transition-all group"
                >
                  <span className="text-2xl shrink-0">🦉</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-white group-hover:text-emerald-300">Khan Academy en Español</h4>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400" />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      Lecciones interactivas de comprensión lectora, lenguaje y ciencias.
                    </p>
                  </div>
                </a>

                {/* Wikipedia Enciclopedia */}
                <a
                  href={wikipediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-indigo-950/70 border border-slate-700 hover:border-indigo-500/50 flex items-start gap-3 transition-all group"
                >
                  <span className="text-2xl shrink-0">📚</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-white group-hover:text-indigo-300">Wikipedia en Español</h4>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400" />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      Definición enciclopédica detallada sobre: {capsule.conceptTitle}.
                    </p>
                  </div>
                </a>

                {/* RAE */}
                <a
                  href={raeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-amber-950/70 border border-slate-700 hover:border-amber-500/50 flex items-start gap-3 transition-all group"
                >
                  <span className="text-2xl shrink-0">📖</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-white group-hover:text-amber-300">Diccionario RAE (DLE)</h4>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400" />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      Consulta oficial de definiciones, etimología y sinónimos de palabras complejas.
                    </p>
                  </div>
                </a>

                {/* Google Search Asistido */}
                <a
                  href={googleSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-cyan-950/70 border border-slate-700 hover:border-cyan-500/50 flex items-start gap-3 transition-all group"
                >
                  <span className="text-2xl shrink-0">🔍</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-white group-hover:text-cyan-300">Búsqueda Asistida en Google</h4>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      Consulta recursos didácticos de: {capsule.conceptTitle}.
                    </p>
                  </div>
                </a>

                {/* Google Académico */}
                <a
                  href={googleScholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-violet-950/70 border border-slate-700 hover:border-violet-500/50 flex items-start gap-3 transition-all group"
                >
                  <span className="text-2xl shrink-0">🎓</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-white group-hover:text-violet-300">Google Académico (Scholar)</h4>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-violet-400" />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      Artículos académicos, papers pedagógicos y fuentes universitarias.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* TAB 3: PLANTILLA PARA EL CUADERNO */}
          {activeTab === 'notebook' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 uppercase">
                  Registro de 15 Minutos en tu Cuaderno
                </span>
                <button
                  onClick={handleCopyNotebook}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors active:scale-95 shadow-xs"
                >
                  {copiedNotebook ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedNotebook ? '¡Copiado al portapapeles!' : 'Copiar Texto para Cuaderno'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
{`🏛️ I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ, TOLIMA
CUADERNO DE LECTURA - PREPARACIÓN SABER
Estudiante: ${uppercaseName}
Grado: ${question.grade}° | Pregunta #${question.questionNumber}
Tema: ${question.title}

1️⃣ RECORDAR (Nivel 1):
• Tipología: ${capsule.conceptTitle}
• Personajes / Sujetos: _______________________
• Vocabulario nuevo: _________________________

2️⃣ COMPRENDER (Nivel 2):
• Idea global: _______________________________
• Mapa mental / esquema: [Dibuja el esquema aquí]

3️⃣ APLICAR (Nivel 3):
• Cita textual clave: "${question.statement.slice(0, 50)}..."

4️⃣ ANALIZAR (Nivel 4):
• Descarte de opciones incorrectas:
  - Opción A: _______________________________
  - Opción B: _______________________________
  - Opción C: _______________________________
  - Opción D: _______________________________

5️⃣ EVALUAR (Nivel 5):
• Opción correcta elegida: Opción ${question.correctLetter}
• Justificación basada en el texto: ${question.justification}

6️⃣ CREAR (Nivel 6):
• Reflexión crítica propia contextualizada en Ibagué o Tolima:
  _______________________________________________________`}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-5 py-3 border-t border-slate-800 flex items-center justify-between shrink-0">
          <p className="text-[11px] text-slate-400">
            Estudiante: <strong className="text-amber-300 uppercase">{uppercaseName}</strong> • Recuerda completar tus 15 minutos en el cuaderno.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg transition-colors"
          >
            Entendido / Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
