import React from 'react';
import { BookOpen, GraduationCap, CheckCircle, Volume2, VolumeX, Menu, Award, FileText, UserCheck, RefreshCw } from 'lucide-react';
import { EscudoInstitucional, LogoTecnoInfo } from './Branding';
import { GRADES_AVAILABLE } from '../data/questionBank';

interface HeaderProps {
  currentGrade: number | null;
  onSelectGrade: (grade: number) => void;
  studentName: string;
  onOpenCuaderno: () => void;
  onOpenEvidence: () => void;
  onOpenResources?: () => void;
  speechEnabled: boolean;
  onToggleSpeech: () => void;
  onToggleMobileSidebar: () => void;
  solvedCount: number;
  onResetProfile?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentGrade,
  onSelectGrade,
  studentName,
  onOpenCuaderno,
  onOpenEvidence,
  onOpenResources,
  speechEnabled,
  onToggleSpeech,
  onToggleMobileSidebar,
  solvedCount,
  onResetProfile
}) => {
  return (
    <header className="bg-[#1a365d] text-white shadow-md z-30 shrink-0 border-b border-blue-900/60 px-3 py-2 md:px-5 md:py-2.5">
      <div className="flex items-center justify-between gap-2 max-w-7xl mx-auto">
        {/* Left: Menu toggle (mobile) + Shield + Clear Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <button 
            onClick={onToggleMobileSidebar}
            className="md:hidden p-2 rounded-lg bg-blue-900/80 text-white hover:bg-blue-800 active:scale-95 transition-transform"
            title="Abrir menú de preguntas y competencias"
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="shrink-0">
            <EscudoInstitucional size={38} className="bg-white shadow-xs" />
          </div>
          
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h1 className="text-xs sm:text-sm md:text-base font-black leading-tight tracking-tight uppercase text-white truncate">
                I.E. Técnica Simón Bolívar
              </h1>
              <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/30 text-blue-200 border border-blue-400/30">
                Ibagué
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-amber-300 font-semibold truncate leading-tight">
              Tutor Socrático de LECTURA <span className="text-blue-200 font-normal hidden xs:inline">• Grados 3° a 11°</span>
            </p>
          </div>
        </div>

        {/* Right: Grade Selector & Quick Action Tools */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Student Profile identifier */}
          {studentName && (
            <button
              onClick={onResetProfile}
              className="hidden lg:flex items-center gap-1 bg-blue-950/70 hover:bg-blue-900 px-2.5 py-1.5 rounded-lg border border-blue-400/30 text-xs text-blue-100 font-semibold transition-colors"
              title="Cambiar datos de estudiante"
            >
              <span className="text-amber-300 font-bold max-w-[120px] truncate uppercase">👤 {studentName.toUpperCase()}</span>
              <RefreshCw className="w-3 h-3 text-blue-300 ml-1 opacity-70" />
            </button>
          )}

          {/* Grade picker (Only 3° to 11°) */}
          <div className="flex items-center bg-blue-950/90 rounded-lg px-2 py-1 border border-blue-400/40 shadow-xs">
            <GraduationCap className="w-4 h-4 text-amber-300 shrink-0 mr-1" />
            <label htmlFor="grade-select" className="text-[11px] font-bold text-blue-200 mr-1 hidden sm:inline">
              Grado:
            </label>
            <select
              id="grade-select"
              value={currentGrade || ''}
              onChange={(e) => {
                if (e.target.value) {
                  onSelectGrade(Number(e.target.value));
                }
              }}
              className="bg-[#1a365d] text-white text-xs sm:text-xs font-black rounded px-2 py-1 outline-none border border-blue-400/50 cursor-pointer focus:ring-1 focus:ring-amber-400"
              title="Selecciona tu grado (3° a 11°)"
            >
              <option value="" disabled>Grado...</option>
              {GRADES_AVAILABLE.map((g) => (
                <option key={g} value={g} className="bg-slate-900 text-white font-semibold">
                  {g}° {g >= 10 ? 'Media' : g >= 6 ? 'Sec.' : 'Prim.'}
                </option>
              ))}
            </select>
          </div>

          {/* Cuaderno Digital button */}
          <button
            onClick={onOpenCuaderno}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-all active:scale-95 border border-blue-400/40 shadow-xs"
            title="Abrir cuaderno digital de dibujo y apuntes"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-100" />
            <span className="hidden sm:inline">Cuaderno</span>
          </button>

          {/* Academic Resources button */}
          {onOpenResources && (
            <button
              onClick={onOpenResources}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold transition-all active:scale-95 border border-amber-400/40 shadow-xs"
              title="Abrir Centro de Recursos Académicos y Cápsulas Conceptuales"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-100" />
              <span className="hidden sm:inline">Recursos</span>
            </button>
          )}

          {/* Evidence report button */}
          <button
            onClick={onOpenEvidence}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition-all active:scale-95 border border-emerald-400/40 shadow-xs"
            title="Ver registro de evidencias y portal institucional"
          >
            <Award className="w-3.5 h-3.5 text-emerald-200" />
            <span className="hidden sm:inline">Evidencias</span>
            <span className="bg-emerald-950/80 text-emerald-200 font-extrabold px-1.5 py-0.2 rounded text-[10px]">
              {solvedCount}
            </span>
          </button>

          {/* Voice TTS Toggle */}
          <button
            onClick={onToggleSpeech}
            className={`p-1.5 sm:p-2 rounded-lg border transition-all active:scale-95 ${
              speechEnabled
                ? 'bg-amber-500 text-slate-950 border-amber-300 font-bold shadow-xs'
                : 'bg-blue-950/70 text-blue-200 border-blue-400/30 hover:text-white hover:bg-blue-900'
            }`}
            title={speechEnabled ? 'Voz Socrática Activada' : 'Activar lectura por voz'}
            aria-label={speechEnabled ? 'Desactivar voz' : 'Activar voz'}
          >
            {speechEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
