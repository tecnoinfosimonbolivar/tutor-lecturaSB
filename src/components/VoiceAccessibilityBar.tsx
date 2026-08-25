import React from 'react';
import { 
  Volume2, 
  Play, 
  Square, 
  X
} from 'lucide-react';

interface VoiceAccessibilityBarProps {
  speechEnabled: boolean;
  onToggleSpeech: () => void;
  speechState: 'idle' | 'playing' | 'paused';
  onPlay: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  speechRate: number;
  onChangeRate: (rate: number) => void;
  currentReadingTitle?: string;
  onClose?: () => void;
}

export const VoiceAccessibilityBar: React.FC<VoiceAccessibilityBarProps> = ({
  speechState,
  onPlay,
  onPause,
  onResume,
  onStop,
  speechRate,
  onChangeRate,
  onClose
}) => {
  const rates = [0.75, 1.0, 1.25, 1.5];

  return (
    <div className="bg-[#0b1329] text-white px-3 py-1.5 sm:px-4 sm:py-2 border-b border-slate-800/80 shadow-md flex items-center justify-between gap-2 z-20 text-xs w-full max-w-full overflow-x-hidden">
      {/* Left side: Yellow Speaker Icon, Pausa, Continuar, Stop */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        {/* Yellow Speaker Icon */}
        <div 
          className="p-1 rounded text-amber-400 flex items-center justify-center shrink-0" 
          title="Reproductor de Voz Socrática"
        >
          <Volume2 className="w-4 h-4 text-amber-400" />
        </div>

        {/* Pausa Button */}
        <button
          onClick={onPause}
          className="px-2.5 sm:px-3 py-1 bg-[#241708] hover:bg-[#38230b] text-amber-400 border border-amber-500/50 rounded-full text-xs font-bold transition-all active:scale-95 shadow-xs flex items-center justify-center"
          title="Pausar lectura"
        >
          Pausa
        </button>

        {/* Continuar Button (Blue pill with white play icon and white text) */}
        <button
          onClick={speechState === 'paused' ? onResume : onPlay}
          className="px-3 sm:px-3.5 py-1 bg-[#1d4ed8] hover:bg-blue-600 text-white rounded-full text-xs font-extrabold transition-all active:scale-95 shadow flex items-center gap-1.5"
          title={speechState === 'playing' ? 'Leyendo en voz alta' : speechState === 'paused' ? 'Continuar lectura' : 'Iniciar lectura'}
        >
          <Play className="w-3.5 h-3.5 fill-white text-white shrink-0" />
          <span>Continuar</span>
        </button>

        {/* Stop Button (Red rounded square with white square icon) */}
        <button
          onClick={onStop}
          className="p-1.5 bg-[#dc2626] hover:bg-red-500 text-white rounded-lg transition-all active:scale-95 shadow-xs flex items-center justify-center shrink-0"
          title="Detener audio"
        >
          <Square className="w-3 h-3 fill-white text-white" />
        </button>
      </div>

      {/* Right side: Speed Pill Group (0.75x, 1x, 1.25x, 1.5x) + Close Button (X) */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Speed Selector (0.75x, 1x, 1.25x, 1.5x) */}
        <div className="flex items-center bg-[#070b14] rounded-lg p-0.5 border border-slate-700/80">
          {rates.map((r) => {
            const isSelected = Math.abs(speechRate - r) < 0.01;
            const label = r === 1 ? '1x' : `${r}x`;
            return (
              <button
                key={r}
                onClick={() => onChangeRate(r)}
                className={`px-1.5 sm:px-2 py-0.5 text-[11px] sm:text-xs font-bold rounded transition-colors ${
                  isSelected
                    ? 'bg-[#facc15] text-slate-950 font-black shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                title={`Velocidad ${label}`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Close Button (X) */}
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white transition-colors shrink-0"
            title="Cerrar reproductor"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
