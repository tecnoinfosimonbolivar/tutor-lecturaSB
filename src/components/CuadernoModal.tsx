import React, { useRef, useState, useEffect } from 'react';
import { Eraser, Pen, RotateCcw, Send, X, Palette, Check, Eye, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { Question } from '../types';
import { QuestionDiagram } from './QuestionDiagram';

interface CuadernoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSendDrawing: (dataUrl: string) => void;
  questionTitle?: string;
  currentQuestion?: Question;
}

export const CuadernoModal: React.FC<CuadernoModalProps> = ({
  isOpen,
  onClose,
  onSendDrawing,
  questionTitle = 'Hoja de Trabajo y Análisis',
  currentQuestion
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [color, setColor] = useState('#1e3a8a'); // Blue ink by default
  const [lineWidth, setLineWidth] = useState(3);
  const [hasContent, setHasContent] = useState(false);
  const [showDiagramDrawer, setShowDiagramDrawer] = useState(false);

  const colors = ['#1e3a8a', '#dc2626', '#16a34a', '#111827', '#9333ea'];

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Match canvas dimensions to display size
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * 2;
        canvas.height = rect.height * 2;
        ctx.scale(2, 2);
        
        // Fill clean white background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, rect.width, rect.height);
        
        // Draw subtle grid lines (cuadriculado escolar)
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 0.75;
        const gridSize = 20;
        for (let x = 0; x <= rect.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, rect.height);
          ctx.stroke();
        }
        for (let y = 0; y <= rect.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(rect.width, y);
          ctx.stroke();
        }
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    setHasContent(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (tool === 'eraser') {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 20;
    } else {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, rect.width, rect.height);
    
    // Redraw grid
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 0.75;
    const gridSize = 20;
    for (let x = 0; x <= rect.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, rect.height);
      ctx.stroke();
    }
    for (let y = 0; y <= rect.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(rect.width, y);
      ctx.stroke();
    }
    setHasContent(false);
  };

  const handleSend = () => {
    if (!canvasRef.current || !hasContent) return;
    const dataUrl = canvasRef.current.toDataURL('image/jpeg', 0.9);
    onSendDrawing(dataUrl);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="flex flex-col w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 h-[85vh] max-h-[700px]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#1a365d] text-white">
          <div className="flex items-center gap-2">
            <span className="text-xl">📓</span>
            <div>
              <h3 className="font-bold text-sm leading-tight">Cuaderno de Apuntes y Operaciones</h3>
              <p className="text-[11px] text-blue-200 truncate max-w-md">{questionTitle}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200 flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setTool('pen')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-all ${
                tool === 'pen' ? 'bg-[#1a365d] text-white shadow-sm' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              <Pen className="w-3.5 h-3.5" />
              Lápiz
            </button>
            <button
              onClick={() => setTool('eraser')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-all ${
                tool === 'eraser' ? 'bg-[#1a365d] text-white shadow-sm' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              <Eraser className="w-3.5 h-3.5" />
              Borrador
            </button>
            
            <button
              onClick={handleClear}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-gray-600 bg-white border border-gray-200 hover:bg-red-50 hover:text-red-600 transition-colors ml-1"
              title="Limpiar hoja"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Limpiar
            </button>

            {currentQuestion && (
              <button
                onClick={() => setShowDiagramDrawer(prev => !prev)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-bold transition-colors ml-1 border ${
                  showDiagramDrawer 
                    ? 'bg-blue-700 text-white border-blue-800' 
                    : 'bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-100'
                }`}
                title="Ver figura o gráfico de la pregunta"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Figura</span>
                {showDiagramDrawer ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            )}
          </div>

          {/* Color picker */}
          <div className="flex items-center gap-1.5">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => { setColor(c); setTool('pen'); }}
                className={`w-6 h-6 rounded-full transition-transform border border-white shadow-sm flex items-center justify-center ${
                  color === c && tool === 'pen' ? 'scale-110 ring-2 ring-[#1a365d]' : 'opacity-80 hover:opacity-100'
                }`}
                style={{ backgroundColor: c }}
              >
                {color === c && tool === 'pen' && <Check className="w-3 h-3 text-white stroke-[3]" />}
              </button>
            ))}
          </div>
        </div>

        {/* Collapsible Diagram Reference Drawer */}
        {showDiagramDrawer && currentQuestion && (
          <div className="bg-slate-100 border-b border-gray-200 p-2 max-h-52 overflow-auto">
            <QuestionDiagram question={currentQuestion} className="my-0" />
          </div>
        )}

        {/* Canvas Area */}
        <div className="flex-1 relative bg-white overflow-hidden cursor-crosshair touch-none">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-full block"
          />
          {!hasContent && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="text-center text-gray-500 text-xs">
                <p>✏️ Realiza tus operaciones, dibujos o esquemas en esta hoja cuadriculada.</p>
                <p className="mt-1 font-semibold text-blue-900">Al terminar, presiona "Adjuntar al Chat".</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 bg-gray-100 border-t border-gray-200">
          <span className="text-[11px] text-gray-600 italic">
            Los apuntes, citas y esquemas manuscritos fortalecen la comprensión lectora.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSend}
              disabled={!hasContent}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg shadow-sm transition-all ${
                hasContent 
                  ? 'bg-[#15803d] text-white hover:bg-[#166534] hover:shadow' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              Adjuntar al Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
