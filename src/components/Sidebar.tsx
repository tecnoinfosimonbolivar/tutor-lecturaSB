import React from 'react';
import { Target, CheckCircle2, ExternalLink, HelpCircle, BookOpen, ChevronRight, Award, Compass, Sparkles } from 'lucide-react';
import { Question } from '../types';
import { COMPETENCIES_INFO } from '../data/questionBank';
import { LogoTecnoInfo } from './Branding';

interface SidebarProps {
  currentGrade: number | null;
  studentName: string;
  activeQuestion?: Question;
  allGradeQuestions: Question[];
  onSelectQuestion: (question: Question) => void;
  solvedCount: number;
  blockSolvedCount: number;
  completedIds: number[];
  onOpenEvidenceModal: () => void;
  onOpenCuaderno: () => void;
  className?: string;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentGrade,
  studentName,
  activeQuestion,
  allGradeQuestions,
  onSelectQuestion,
  solvedCount,
  blockSolvedCount,
  completedIds,
  onOpenEvidenceModal,
  onOpenCuaderno,
  className = '',
  onCloseMobile
}) => {
  const isMedia = currentGrade && currentGrade >= 10;
  const competencies = isMedia ? COMPETENCIES_INFO.media : COMPETENCIES_INFO.primaria_secundaria;
  const schoolPortalUrl = 'https://colegiosonline.com/secure/paginas/?ie=ietsimonbolivar';

  const blockProgressPercent = Math.min(100, (blockSolvedCount / 4) * 100);

  return (
    <aside className={`w-80 bg-white border-r border-gray-200 p-4 flex flex-col gap-4 overflow-y-auto ${className}`}>
      {/* Student Badge */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-full bg-[#1a365d] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
            {studentName ? studentName.charAt(0).toUpperCase() : 'SB'}
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-gray-900 truncate uppercase">
              {(studentName || 'ESTUDIANTE BOLIVARIANO').toUpperCase()}
            </h4>
            <p className="text-[10px] text-blue-700 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              {currentGrade ? `Grado ${currentGrade}°` : 'Selecciona Grado'} 
              {isMedia ? ' • Media' : currentGrade && currentGrade >= 6 ? ' • Secundaria' : ' • Primaria'}
            </p>
          </div>
        </div>

        {onCloseMobile && (
          <button 
            onClick={onCloseMobile}
            className="md:hidden text-xs font-bold px-2 py-1 bg-gray-200 text-gray-700 rounded-lg"
          >
            Cerrar
          </button>
        )}
      </div>

      {/* Competencias Clave (DCE ICFES) */}
      <section className="rounded-xl bg-blue-50/80 p-3.5 border border-blue-100/80 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[11px] font-extrabold text-[#1a365d] uppercase tracking-wider flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-blue-700" />
            Competencias ICFES ({isMedia ? 'Media' : 'Básica'})
          </h3>
        </div>
        <ul className="text-[11px] space-y-1.5 text-blue-900 leading-snug">
          {competencies.map((c, idx) => (
            <li key={idx} className="flex items-start gap-1.5 group">
              <span className="text-blue-600 font-bold text-xs mt-0.5">•</span>
              <div>
                <span className="font-semibold text-blue-950 block">{c.title}</span>
                <span className="text-[10px] text-blue-800/80 leading-tight block">{c.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Progreso del Bloque (1 a 4 preguntas) */}
      <section className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
            <Award className="w-3 h-3 text-blue-600" />
            Progreso del Bloque
          </h3>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
            {blockSolvedCount} / 4 Preguntas
          </span>
        </div>

        <div className="space-y-2.5">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-300"
              style={{ width: `${blockProgressPercent}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {[1, 2, 3, 4].map((step) => {
              const isDone = blockSolvedCount >= step;
              const isCurrent = blockSolvedCount + 1 === step;
              return (
                <div
                  key={step}
                  className={`h-9 border-2 rounded-lg flex flex-col items-center justify-center text-[10px] font-bold transition-all ${
                    isDone
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-xs'
                      : isCurrent
                      ? 'border-blue-600 bg-blue-50 text-blue-700 animate-pulse'
                      : 'border-gray-200 bg-white text-gray-400'
                  }`}
                >
                  <span>{step}</span>
                  <span className="text-[8px] font-medium">{isDone ? '✓ Listo' : `P${step}`}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[10px] text-gray-500 pt-1">
            <span>Total acumulado: <strong>{solvedCount}</strong></span>
            <button 
              onClick={onOpenEvidenceModal}
              className="text-blue-600 hover:text-blue-800 font-bold hover:underline"
            >
              Ver reporte →
            </button>
          </div>
        </div>
      </section>

      {/* Cuadernillo Question Selector (Autonomía de Progreso) */}
      <section className="flex-1 flex flex-col min-h-0 bg-white p-3 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-gray-100">
          <h3 className="text-[10px] font-bold text-gray-600 uppercase tracking-widest flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            Banco de Preguntas ({allGradeQuestions.length})
          </h3>
          <span className="text-[9px] text-gray-400">Cuadernillo {currentGrade}°</span>
        </div>

        <div className="flex-1 overflow-y-auto space-y-1 pr-1 max-h-48 scrollbar-thin">
          {allGradeQuestions.length > 0 ? (
            allGradeQuestions.map((q) => {
              const isCurrent = activeQuestion?.id === q.id;
              const isSolved = completedIds.includes(q.id);

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onSelectQuestion(q);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-all ${
                    isCurrent
                      ? 'bg-[#1a365d] text-white shadow-xs font-semibold'
                      : isSolved
                      ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/60'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      isCurrent ? 'bg-blue-400 text-blue-950' : isSolved ? 'bg-emerald-200 text-emerald-900' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {q.questionNumber}
                    </span>
                    <span className="truncate text-[11px]">{q.title}</span>
                  </div>
                  {isSolved ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-1" />
                  ) : (
                    <ChevronRight className="w-3 h-3 opacity-40 shrink-0" />
                  )}
                </button>
              );
            })
          ) : (
            <div className="text-center py-4 text-[11px] text-gray-400">
              Selecciona un grado para cargar el cuadernillo.
            </div>
          )}
        </div>
      </section>

      {/* Recordatorio de Evidencias (Every 4 Questions) */}
      <section className="mt-auto p-3 bg-amber-50/90 rounded-xl border border-amber-200/80 shadow-xs space-y-1.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] text-amber-900 uppercase font-black tracking-wider flex items-center gap-1">
            <span>📌</span> Cierre de Evidencias
          </p>
          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-200 text-amber-900">
            Cada 4 Preguntas
          </span>
        </div>
        <p className="text-[10px] leading-relaxed text-amber-950/90">
          Toma fotos de tu cuaderno y radícalas en el portal institucional:
        </p>
        <a
          href={schoolPortalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 w-full py-1.5 bg-[#1a365d] hover:bg-blue-900 text-white rounded-lg text-[10px] font-bold transition-colors shadow-xs"
        >
          <span>ColegiosOnline I.E. Simón Bolívar</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </section>

      {/* Startup TecnoInfo footer signature */}
      <div className="pt-2 border-t border-gray-100 flex items-center justify-center">
        <LogoTecnoInfo />
      </div>
    </aside>
  );
};
