import React, { useState } from 'react';
import { Award, CheckCircle2, Copy, ExternalLink, FileText, Share2, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EscudoInstitucional, LogoTecnoInfo } from './Branding';

interface EvidenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  grade: number | null;
  solvedCount: number;
  completedIds: number[];
}

export const EvidenceModal: React.FC<EvidenceModalProps> = ({
  isOpen,
  onClose,
  studentName,
  grade,
  solvedCount,
  completedIds
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const schoolPortalUrl = 'https://colegiosonline.com/secure/paginas/?ie=ietsimonbolivar';
  const currentDate = new Date().toLocaleDateString('es-CO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const sName = (studentName || 'ESTUDIANTE BOLIVARIANO').toUpperCase();
  const evidenceSummaryText = `===========================================
I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ, TOLIMA
"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"
Área: LECTURA / COMPRENSIÓN LECTORA - PREPARACIÓN SABER
===========================================
ESTUDIANTE: ${sName}
GRADO: ${grade ? grade + '°' : 'No registrado'}
FECHA DE ENTRENAMIENTO: ${currentDate}
PREGUNTAS COMPLETADAS: ${solvedCount} preguntas
BLOQUE DE ESTUDIO: ${Math.floor(solvedCount / 4)} bloque(s) (Aprox. ${Math.floor(solvedCount / 4) * 1} hora(s))
ID DE PREGUNTAS: ${completedIds.length > 0 ? completedIds.join(', ') : '1, 2, 3, 4'}
ESTADO: Evidencias de cuaderno listas para radicación docente.
PLATAFORMA INSTITUCIONAL: ${schoolPortalUrl}
===========================================`;

  const handleCopy = () => {
    navigator.clipboard.writeText(evidenceSummaryText);
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="flex flex-col w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-200 max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#1a365d] px-6 py-4 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <EscudoInstitucional size={48} className="bg-white/95" />
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-200 block">
                Control de Evidencias de Aprendizaje
              </span>
              <h2 className="text-base font-bold leading-tight">
                I.E. Técnica Simón Bolívar
              </h2>
              <p className="text-[11px] text-blue-100/90 italic">
                "Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                ✓
              </div>
              <div>
                <h4 className="text-sm font-bold text-emerald-900">
                  ¡Bloque de 4 Preguntas Completado!
                </h4>
                <p className="text-xs text-emerald-700">
                  Estudiante: <span className="font-semibold uppercase">{sName}</span> ({grade ? `${grade}° Grado` : 'Lectura'})
                </p>
              </div>
            </div>
            <Award className="w-7 h-7 text-emerald-600 shrink-0" />
          </div>

          <div className="space-y-2.5 text-xs text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h5 className="font-bold text-gray-900 uppercase text-[11px] tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#1a365d]" />
              Pasos obligatorios para registro docente:
            </h5>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed">
              <li className="pl-1">
                <strong>Toma fotos nítidas</strong> de las hojas de tu cuaderno con los apuntes, análisis, esquemas y justificaciones que realizaste para estas 4 preguntas.
              </li>
              <li className="pl-1">
                <strong>Ingresa a la plataforma del colegio</strong> con tu usuario y contraseña institucional para cargar las fotografías.
              </li>
              <li className="pl-1">
                <strong>Notifica a tu docente</strong> o director de grupo del área de Lectura / Humanidades.
              </li>
            </ol>
          </div>

          {/* Quick links & summary box */}
          <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100 flex items-center justify-between gap-3">
            <div className="text-xs">
              <div className="font-bold text-[#1a365d]">Portal Institucional ColegiosOnline</div>
              <div className="text-[11px] text-gray-500 truncate max-w-xs">
                https://colegiosonline.com/secure/paginas/?ie=ietsimonbolivar
              </div>
            </div>
            <a
              href={schoolPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 bg-[#1a365d] text-white font-bold text-xs rounded-lg hover:bg-blue-900 transition-colors shrink-0 shadow-sm"
            >
              Abrir Plataforma
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Partner & Tech signature */}
          <div className="pt-2 flex items-center justify-between border-t border-gray-100">
            <LogoTecnoInfo />
            <span className="text-[10px] text-gray-400 font-medium">Ibagué, Tolima - ICFES Saber 11</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-gray-100 border-t border-gray-200">
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
              copied 
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {copied ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? '¡Reporte Copiado!' : 'Copiar Registro de Evidencias'}
          </button>
          
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#1a365d] text-white font-bold text-xs rounded-lg hover:bg-blue-950 transition-colors shadow-sm"
          >
            ¡Continuar Aprendiendo!
          </button>
        </div>
      </div>
    </div>
  );
};
