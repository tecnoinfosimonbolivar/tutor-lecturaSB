import React, { useState } from 'react';
import { Question } from '../types';
import { ZoomIn, ZoomOut, RotateCcw, Grid, Eye, Maximize2, Sparkles, BookOpen, Layers } from 'lucide-react';

interface QuestionDiagramProps {
  question: Question;
  className?: string;
  inChatBubble?: boolean;
  onOpenCuaderno?: () => void;
}

export const QuestionDiagram: React.FC<QuestionDiagramProps> = ({
  question,
  className = '',
  inChatBubble = false,
  onOpenCuaderno
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // If question explicitly has diagramType: 'none', don't render
  if (question.diagramType === 'none') {
    return null;
  }

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  const toggleGrid = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowGrid(prev => !prev);
  };

  // Render diagram based on question metadata or specific reading topic
  const renderSvgContent = () => {
    const qId = question.id;
    const grade = question.grade;
    const qNum = question.questionNumber;
    const lowerStmt = (question.statement || '').toLowerCase();
    const lowerTitle = (question.title || '').toLowerCase();
    const lowerContext = (question.contextText || '').toLowerCase();

    // ==========================================
    // 1. CARICATURA / TIRA CÓMICA (Mafalda / Libertad / Quino)
    // ==========================================
    if (lowerTitle.includes('libertad') || lowerTitle.includes('caricatura') || lowerContext.includes('quino') || (grade === 11 && qNum >= 9 && qNum <= 12)) {
      return (
        <svg viewBox="0 0 600 220" className="w-full h-auto max-h-64">
          <rect width="600" height="220" fill="#f8fafc" rx="8" />
          
          {/* Tira Cómica de 3 Viñetas */}
          {/* Viñeta 1 */}
          <g transform="translate(15, 20)">
            <rect width="180" height="180" fill="#ffffff" stroke="#334155" strokeWidth="2.5" rx="4" />
            <rect x="0" y="0" width="180" height="22" fill="#e2e8f0" />
            <text x="90" y="15" fill="#1e293b" fontSize="10" fontWeight="bold" textAnchor="middle">VIÑETA 1</text>
            
            {/* Televisor */}
            <rect x="25" y="32" width="130" height="85" fill="#1e293b" rx="6" />
            <rect x="33" y="38" width="114" height="73" fill="#38bdf8" fillOpacity="0.3" rx="4" />
            {/* Locutor en TV */}
            <circle cx="90" cy="62" r="14" fill="#fed7aa" stroke="#9a3412" strokeWidth="1" />
            <polygon points="85,76 95,76 90,92" fill="#dc2626" /> {/* Corbata */}
            <rect x="68" y="80" width="44" height="25" fill="#0f172a" rx="3" />
            
            {/* Bocadillo del televisor */}
            <rect x="15" y="125" width="150" height="68" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" rx="5" />
            <text x="90" y="140" fill="#713f12" fontSize="8.5" fontWeight="bold" textAnchor="middle">«¡El futuro está en manos</text>
            <text x="90" y="153" fill="#713f12" fontSize="8.5" fontWeight="bold" textAnchor="middle">de quienes no se quejan</text>
            <text x="90" y="166" fill="#713f12" fontSize="8.5" fontWeight="bold" textAnchor="middle">y aceptan la realidad!»</text>
            <text x="90" y="182" fill="#854d0e" fontSize="7.5" fontStyle="italic" textAnchor="middle">[Discurso conformista]</text>
          </g>

          {/* Viñeta 2 */}
          <g transform="translate(210, 20)">
            <rect width="180" height="180" fill="#ffffff" stroke="#334155" strokeWidth="2.5" rx="4" />
            <rect x="0" y="0" width="180" height="22" fill="#e2e8f0" />
            <text x="90" y="15" fill="#1e293b" fontSize="10" fontWeight="bold" textAnchor="middle">VIÑETA 2</text>
            
            {/* Libertad apagando la tele */}
            <rect x="25" y="45" width="80" height="65" fill="#475569" rx="4" />
            <rect x="30" y="50" width="70" height="55" fill="#0f172a" rx="3" />
            <circle cx="85" cy="80" r="4" fill="#ef4444" />
            
            {/* Mano / Libertad */}
            <circle cx="130" cy="95" r="18" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
            <path d="M 115 105 L 88 82" stroke="#db2777" strokeWidth="4" strokeLinecap="round" />
            
            {/* Efecto onomatopéyico de apagado */}
            <polygon points="70,65 95,50 90,70 110,60 90,80 75,70" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            <text x="90" y="73" fill="#991b1b" fontSize="13" fontWeight="extrabold" textAnchor="middle">¡CLIC!</text>
            <text x="90" y="150" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Apagado directo</text>
            <text x="90" y="168" fill="#475569" fontSize="8.5" textAnchor="middle">(Ruptura con el mensaje)</text>
          </g>

          {/* Viñeta 3 */}
          <g transform="translate(405, 20)">
            <rect width="180" height="180" fill="#fefce8" stroke="#ca8a04" strokeWidth="2.5" rx="4" />
            <rect x="0" y="0" width="180" height="22" fill="#fde047" />
            <text x="90" y="15" fill="#713f12" fontSize="10" fontWeight="extrabold" textAnchor="middle">VIÑETA 3 (REMATE)</text>
            
            {/* Libertad con brazos cruzados */}
            <circle cx="90" cy="55" r="18" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.5" />
            <circle cx="84" cy="53" r="2.5" fill="#0f172a" />
            <circle cx="96" cy="53" r="2.5" fill="#0f172a" />
            <path d="M 83 63 Q 90 58 97 63" stroke="#0f172a" strokeWidth="1.5" fill="none" /> {/* Sonrisa irónica */}
            <rect x="75" y="75" width="30" height="32" fill="#db2777" rx="4" />
            
            {/* Bocadillo de reflexión de Libertad */}
            <rect x="10" y="115" width="160" height="78" fill="#ffffff" stroke="#e11d48" strokeWidth="1.5" rx="6" />
            <text x="90" y="132" fill="#881337" fontSize="8.5" fontWeight="bold" textAnchor="middle">«¡Qué curioso! A los que les va</text>
            <text x="90" y="145" fill="#881337" fontSize="8.5" fontWeight="bold" textAnchor="middle">de maravilla con la realidad</text>
            <text x="90" y="158" fill="#881337" fontSize="8.5" fontWeight="bold" textAnchor="middle">siempre les parece pésimo</text>
            <text x="90" y="171" fill="#881337" fontSize="8.5" fontWeight="extrabold" textAnchor="middle">que alguien intente cambiarla»</text>
            <text x="90" y="185" fill="#9f1239" fontSize="7.5" fontStyle="italic" textAnchor="middle">[Ironía de crítica social]</text>
          </g>
        </svg>
      );
    }

    // ==========================================
    // 2. INFOGRAFÍA: CICLO DE VIDA DE LAS PLANTAS (Grado 5°)
    // ==========================================
    if (lowerTitle.includes('plantas') || lowerContext.includes('ciclo de vida de las plantas') || (grade === 5 && qNum >= 7 && qNum <= 10)) {
      return (
        <svg viewBox="0 0 580 220" className="w-full h-auto max-h-64">
          <rect width="580" height="220" fill="#f0fdf4" rx="8" />
          <rect x="10" y="8" width="560" height="26" fill="#15803d" rx="5" />
          <text x="290" y="25" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
            🌱 INFOGRAFÍA: CICLO DE VIDA CONTINUO DE LAS PLANTAS CON FLOR
          </text>

          {/* Diagrama Circular de 4 Fases */}
          {/* Fase 1: Germinación */}
          <g transform="translate(40, 45)">
            <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#86efac" strokeWidth="2" />
            <text x="50" y="35" fill="#166534" fontSize="18" textAnchor="middle">🌰</text>
            <text x="50" y="55" fill="#15803d" fontSize="9" fontWeight="bold" textAnchor="middle">1. Germinación</text>
            <text x="50" y="68" fill="#475569" fontSize="7.5" textAnchor="middle">Semilla y raíces</text>
          </g>

          {/* Flecha 1 -> 2 */}
          <path d="M 150 95 Q 185 60 220 75" fill="none" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrow)" />

          {/* Fase 2: Crecimiento y Hoja */}
          <g transform="translate(230, 45)">
            <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#86efac" strokeWidth="2" />
            <text x="50" y="35" fill="#166534" fontSize="18" textAnchor="middle">🌿</text>
            <text x="50" y="55" fill="#15803d" fontSize="9" fontWeight="bold" textAnchor="middle">2. Crecimiento</text>
            <text x="50" y="68" fill="#475569" fontSize="7.5" textAnchor="middle">Tallo y luz solar</text>
          </g>

          {/* Flecha 2 -> 3 */}
          <path d="M 340 95 Q 375 60 410 75" fill="none" stroke="#22c55e" strokeWidth="3" />

          {/* Fase 3: Floración y Polinización */}
          <g transform="translate(420, 45)">
            <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#fbcfe8" strokeWidth="2" />
            <text x="50" y="35" fill="#db2777" fontSize="18" textAnchor="middle">🌸 🐝</text>
            <text x="50" y="55" fill="#9d174d" fontSize="9" fontWeight="bold" textAnchor="middle">3. Polinización</text>
            <text x="50" y="68" fill="#475569" fontSize="7.5" textAnchor="middle">Abejas y polen</text>
          </g>

          {/* Fase 4: Fruto y Dispersión (Abajo Centro) */}
          <g transform="translate(230, 145)">
            <rect x="0" y="0" width="160" height="42" fill="#ffffff" stroke="#f59e0b" strokeWidth="1.5" rx="6" />
            <text x="80" y="18" fill="#b45309" fontSize="9" fontWeight="bold" textAnchor="middle">🍎 4. Fruto y Dispersión</text>
            <text x="80" y="32" fill="#475569" fontSize="7.5" textAnchor="middle">Nuevas semillas vuelven a la tierra</text>
          </g>

          {/* Flechas de retorno circular */}
          <path d="M 470 145 Q 430 185 395 165" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="3,3" />
          <path d="M 230 165 Q 130 185 90 145" fill="none" stroke="#16a34a" strokeWidth="2" strokeDasharray="3,3" />
          <text x="290" y="205" fill="#15803d" fontSize="8" fontStyle="italic" textAnchor="middle">
            🔄 Ciclo cerrado continuo que se repite generación tras generación
          </text>
        </svg>
      );
    }

    // ==========================================
    // 3. INFOGRAFÍA: HÁBITOS DE HIGIENE PERSONAL (Grado 3°)
    // ==========================================
    if (lowerTitle.includes('higiene') || lowerContext.includes('hábitos de higiene') || (grade === 3 && qNum >= 7 && qNum <= 10)) {
      return (
        <svg viewBox="0 0 580 210" className="w-full h-auto max-h-60">
          <rect width="580" height="210" fill="#f0f9ff" rx="8" />
          <rect x="10" y="8" width="560" height="26" fill="#0284c7" rx="5" />
          <text x="290" y="25" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
            🧼 INFOGRAFÍA: GUÍA DE HIGIENE Y AUTOCUIDADO INFANTIL
          </text>

          <g transform="translate(15, 45)">
            {/* Hábito 1: Baño diario */}
            <rect x="0" y="0" width="130" height="135" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="130" height="20" fill="#38bdf8" rx="6" />
            <text x="65" y="14" fill="#0c4a6e" fontSize="8.5" fontWeight="bold" textAnchor="middle">1. BAÑO DIARIO</text>
            <text x="65" y="48" fontSize="22" textAnchor="middle">🚿</text>
            <text x="65" y="75" fill="#0369a1" fontSize="8.5" fontWeight="bold" textAnchor="middle">Agua y jabón</text>
            <text x="65" y="90" fill="#475569" fontSize="7.5" textAnchor="middle">Limpia la piel y</text>
            <text x="65" y="102" fill="#475569" fontSize="7.5" textAnchor="middle">elimina microbios</text>
            <rect x="10" y="112" width="110" height="15" fill="#e0f2fe" rx="3" />
            <text x="65" y="122" fill="#0284c7" fontSize="7" fontWeight="bold" textAnchor="middle">Todos los días</text>
          </g>

          <g transform="translate(155, 45)">
            {/* Hábito 2: Lavado de manos */}
            <rect x="0" y="0" width="130" height="135" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="130" height="20" fill="#38bdf8" rx="6" />
            <text x="65" y="14" fill="#0c4a6e" fontSize="8.5" fontWeight="bold" textAnchor="middle">2. MANOS LIMPIAS</text>
            <text x="65" y="48" fontSize="22" textAnchor="middle">🧼 👐</text>
            <text x="65" y="75" fill="#0369a1" fontSize="8.5" fontWeight="bold" textAnchor="middle">20 segundos</text>
            <text x="65" y="90" fill="#475569" fontSize="7.5" textAnchor="middle">• Antes de comer</text>
            <text x="65" y="102" fill="#475569" fontSize="7.5" textAnchor="middle">• Después del baño</text>
            <rect x="10" y="112" width="110" height="15" fill="#e0f2fe" rx="3" />
            <text x="65" y="122" fill="#0284c7" fontSize="7" fontWeight="bold" textAnchor="middle">Evita infecciones</text>
          </g>

          <g transform="translate(295, 45)">
            {/* Hábito 3: Cepillado dental */}
            <rect x="0" y="0" width="130" height="135" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="130" height="20" fill="#38bdf8" rx="6" />
            <text x="65" y="14" fill="#0c4a6e" fontSize="8.5" fontWeight="bold" textAnchor="middle">3. DIENTES SANOS</text>
            <text x="65" y="48" fontSize="22" textAnchor="middle">🪥 ✨</text>
            <text x="65" y="75" fill="#0369a1" fontSize="8.5" fontWeight="bold" textAnchor="middle">3 veces al día</text>
            <text x="65" y="90" fill="#475569" fontSize="7.5" textAnchor="middle">Tras cada comida</text>
            <text x="65" y="102" fill="#475569" fontSize="7.5" textAnchor="middle">Previene las caries</text>
            <rect x="10" y="112" width="110" height="15" fill="#e0f2fe" rx="3" />
            <text x="65" y="122" fill="#0284c7" fontSize="7" fontWeight="bold" textAnchor="middle">Sonrisa radiante</text>
          </g>

          <g transform="translate(435, 45)">
            {/* Hábito 4: Ropa y Uñas */}
            <rect x="0" y="0" width="130" height="135" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="130" height="20" fill="#38bdf8" rx="6" />
            <text x="65" y="14" fill="#0c4a6e" fontSize="8.5" fontWeight="bold" textAnchor="middle">4. UÑAS Y ROPA</text>
            <text x="65" y="48" fontSize="22" textAnchor="middle">👕 ✂️</text>
            <text x="65" y="75" fill="#0369a1" fontSize="8.5" fontWeight="bold" textAnchor="middle">Uñas cortas</text>
            <text x="65" y="90" fill="#475569" fontSize="7.5" textAnchor="middle">Ropa limpia y</text>
            <text x="65" y="102" fill="#475569" fontSize="7.5" textAnchor="middle">cabello peinado</text>
            <rect x="10" y="112" width="110" height="15" fill="#e0f2fe" rx="3" />
            <text x="65" y="122" fill="#0284c7" fontSize="7" fontWeight="bold" textAnchor="middle">Salud y bienestar</text>
          </g>

          <text x="290" y="198" fill="#0369a1" fontSize="8.5" fontWeight="bold" textAnchor="middle">
            ¡Cuidar tu cuerpo todos los días te mantiene fuerte, sano y lleno de energía!
          </text>
        </svg>
      );
    }

    // ==========================================
    // 4. INFOGRAFÍA: CUIDADO RESPONSABLE DE MASCOTAS (Grado 4°)
    // ==========================================
    if (lowerTitle.includes('mascotas') || lowerContext.includes('cuidado de las mascotas') || (grade === 4 && qNum >= 7 && qNum <= 10)) {
      return (
        <svg viewBox="0 0 580 210" className="w-full h-auto max-h-60">
          <rect width="580" height="210" fill="#fffbeb" rx="8" />
          <rect x="10" y="8" width="560" height="26" fill="#d97706" rx="5" />
          <text x="290" y="25" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
            🐕 GUÍA ILUSTRADA: DIEZ MANDAMIENTOS DEL CUIDADO DE MASCOTAS 🐈
          </text>

          <g transform="translate(25, 45)">
            {/* Panel Nutrición */}
            <rect x="0" y="0" width="120" height="135" fill="#ffffff" stroke="#fde68a" strokeWidth="1.5" rx="6" />
            <circle cx="60" cy="35" r="22" fill="#fef3c7" />
            <text x="60" y="42" fontSize="18" textAnchor="middle">🍲 ❤️</text>
            <text x="60" y="74" fill="#b45309" fontSize="9" fontWeight="bold" textAnchor="middle">Nutrición & Agua</text>
            <text x="60" y="90" fill="#475569" fontSize="7.5" textAnchor="middle">Alimento de calidad</text>
            <text x="60" y="104" fill="#475569" fontSize="7.5" textAnchor="middle">y agua fresca diaria</text>
          </g>

          <g transform="translate(160, 45)">
            {/* Panel Salud */}
            <rect x="0" y="0" width="120" height="135" fill="#ffffff" stroke="#fde68a" strokeWidth="1.5" rx="6" />
            <circle cx="60" cy="35" r="22" fill="#fef3c7" />
            <text x="60" y="42" fontSize="18" textAnchor="middle">💉 🩺</text>
            <text x="60" y="74" fill="#b45309" fontSize="9" fontWeight="bold" textAnchor="middle">Veterinario</text>
            <text x="60" y="90" fill="#475569" fontSize="7.5" textAnchor="middle">Vacunación completa</text>
            <text x="60" y="104" fill="#475569" fontSize="7.5" textAnchor="middle">y desparasitación</text>
          </g>

          <g transform="translate(295, 45)">
            {/* Panel Paseo */}
            <rect x="0" y="0" width="120" height="135" fill="#ffffff" stroke="#fde68a" strokeWidth="1.5" rx="6" />
            <circle cx="60" cy="35" r="22" fill="#fef3c7" />
            <text x="60" y="42" fontSize="18" textAnchor="middle">🦮 🌳</text>
            <text x="60" y="74" fill="#b45309" fontSize="9" fontWeight="bold" textAnchor="middle">Paseo Diario</text>
            <text x="60" y="90" fill="#475569" fontSize="7.5" textAnchor="middle">Con correa y bolsas</text>
            <text x="60" y="104" fill="#475569" fontSize="7.5" textAnchor="middle">para recoger desechos</text>
          </g>

          <g transform="translate(430, 45)">
            {/* Panel Cariño */}
            <rect x="0" y="0" width="120" height="135" fill="#ffffff" stroke="#fde68a" strokeWidth="1.5" rx="6" />
            <circle cx="60" cy="35" r="22" fill="#fef3c7" />
            <text x="60" y="42" fontSize="18" textAnchor="middle">🏠 💖</text>
            <text x="60" y="74" fill="#b45309" fontSize="9" fontWeight="bold" textAnchor="middle">Hogar Seguro</text>
            <text x="60" y="90" fill="#475569" fontSize="7.5" textAnchor="middle">Cama protegida,</text>
            <text x="60" y="104" fill="#475569" fontSize="7.5" textAnchor="middle">tiempo de juego y amor</text>
          </g>

          <text x="290" y="198" fill="#92400e" fontSize="8.5" fontWeight="bold" textAnchor="middle">
            ¡Tener una mascota es un compromiso de afecto y responsabilidad para toda su vida!
          </text>
        </svg>
      );
    }

    // ==========================================
    // 5. INFOGRAFÍA: DAÑOS DEL ENOJO / SALUD (Grado 6°)
    // ==========================================
    if (lowerTitle.includes('enojo') || lowerContext.includes('daños del enojo') || (grade === 6 && qNum <= 6)) {
      return (
        <svg viewBox="0 0 580 220" className="w-full h-auto max-h-64">
          <rect width="580" height="220" fill="#f8fafc" rx="8" />
          
          {/* Título de la Infografía */}
          <rect x="10" y="8" width="560" height="26" fill="#b91c1c" rx="5" />
          <text x="290" y="25" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
            INFOGRAFÍA OFICIAL: DAÑOS FISIOLÓGICOS DEL ENOJO Y EL MAL GENIO
          </text>

          {/* Silueta Humana Central con Órganos */}
          <g transform="translate(180, 40)">
            {/* Cabeza / Cerebro */}
            <circle cx="110" cy="24" r="16" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
            <circle cx="110" cy="24" r="6" fill="#ef4444" />
            
            {/* Tronco */}
            <rect x="94" y="42" width="32" height="70" fill="#cbd5e1" rx="4" />
            
            {/* Corazón (Pecho izquierdo) */}
            <circle cx="102" cy="58" r="8" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" />
            
            {/* Estómago */}
            <circle cx="110" cy="84" r="8" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
            
            {/* Extremidades */}
            <line x1="94" y1="50" x2="72" y2="85" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
            <line x1="126" y1="50" x2="148" y2="85" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
            <line x1="102" y1="112" x2="98" y2="160" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
            <line x1="118" y1="112" x2="122" y2="160" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
          </g>

          {/* Círculos Concéntricos de Daños (Izquierda) */}
          <g transform="translate(20, 45)">
            {/* Panel 1: Cerebro */}
            <rect x="0" y="0" width="160" height="48" fill="#ffffff" stroke="#fca5a5" strokeWidth="1.5" rx="5" />
            <circle cx="16" cy="24" r="8" fill="#dc2626" />
            <text x="16" y="27" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">1</text>
            <text x="32" y="18" fill="#991b1b" fontSize="9.5" fontWeight="bold">CEREBRO</text>
            <text x="32" y="32" fill="#475569" fontSize="8">Cortisol y estrés crónico</text>
            <line x1="160" y1="24" x2="275" y2="60" stroke="#dc2626" strokeDasharray="3,3" />

            {/* Panel 2: Corazón */}
            <rect x="0" y="58" width="160" height="48" fill="#ffffff" stroke="#fca5a5" strokeWidth="1.5" rx="5" />
            <circle cx="16" cy="82" r="8" fill="#dc2626" />
            <text x="16" y="85" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">2</text>
            <text x="32" y="76" fill="#991b1b" fontSize="9.5" fontWeight="bold">CORAZÓN</text>
            <text x="32" y="90" fill="#475569" fontSize="8">Presión alta y taquicardia</text>
            <line x1="160" y1="82" x2="280" y2="98" stroke="#dc2626" strokeDasharray="3,3" />

            {/* Panel 3: Estómago */}
            <rect x="0" y="116" width="160" height="48" fill="#ffffff" stroke="#fcd34d" strokeWidth="1.5" rx="5" />
            <circle cx="16" cy="140" r="8" fill="#d97706" />
            <text x="16" y="143" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">3</text>
            <text x="32" y="134" fill="#92400e" fontSize="9.5" fontWeight="bold">ESTÓMAGO</text>
            <text x="32" y="148" fill="#475569" fontSize="8">Acidez, gastritis y úlceras</text>
            <line x1="160" y1="140" x2="290" y2="124" stroke="#d97706" strokeDasharray="3,3" />
          </g>

          {/* Panel de Hábitos y Recomendaciones (Derecha) */}
          <g transform="translate(400, 45)">
            <rect x="0" y="0" width="165" height="164" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="165" height="24" fill="#16a34a" rx="6" />
            <text x="82" y="16" fill="#ffffff" fontSize="9.5" fontWeight="bold" textAnchor="middle">🌿 CAMBIAR HÁBITOS</text>
            
            <text x="12" y="44" fill="#166534" fontSize="8.5" fontWeight="bold">• Respiración profunda</text>
            <text x="12" y="60" fill="#475569" fontSize="7.5">Inhalar 4s, retener, exhalar</text>
            
            <text x="12" y="80" fill="#166534" fontSize="8.5" fontWeight="bold">• Pausa reflexiva</text>
            <text x="12" y="96" fill="#475569" fontSize="7.5">Contar hasta 10 antes de hablar</text>
            
            <text x="12" y="116" fill="#166534" fontSize="8.5" fontWeight="bold">• Comunicación asertiva</text>
            <text x="12" y="132" fill="#475569" fontSize="7.5">Expresar desacuerdo sin agresión</text>

            <rect x="10" y="142" width="145" height="16" fill="#dcfce7" rx="3" />
            <text x="82" y="153" fill="#15803d" fontSize="7.5" fontWeight="bold" textAnchor="middle">¡Cuidar tu mente protege tu cuerpo!</text>
          </g>
        </svg>
      );
    }

    // ==========================================
    // 3. MAPA CONCEPTUAL: KANT (DIGNIDAD vs PRECIO) (Grado 11°)
    // ==========================================
    if (lowerTitle.includes('dignidad') || lowerContext.includes('kant') || (grade === 11 && qNum >= 13 && qNum <= 16)) {
      return (
        <svg viewBox="0 0 580 200" className="w-full h-auto max-h-60">
          <rect width="580" height="200" fill="#f8fafc" rx="8" />
          
          {/* Nodo Raíz: En el Reino de los Fines */}
          <rect x="190" y="12" width="200" height="32" fill="#1e3a8a" rx="6" />
          <text x="290" y="32" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
            EL REINO DE LOS FINES (KANT)
          </text>

          {/* Flechas bifurcadas */}
          <line x1="240" y1="44" x2="140" y2="70" stroke="#64748b" strokeWidth="2" />
          <line x1="340" y1="44" x2="440" y2="70" stroke="#64748b" strokeWidth="2" />

          {/* Rama Izquierda: PRECIO (Mercancías) */}
          <g transform="translate(30, 70)">
            <rect width="220" height="115" fill="#fef2f2" stroke="#f87171" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="220" height="24" fill="#dc2626" rx="6" />
            <text x="110" y="16" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
              1. AQUELLO QUE TIENE PRECIO
            </text>
            
            <text x="15" y="42" fill="#991b1b" fontSize="9" fontWeight="bold">• Valor Relativo / Instrumental:</text>
            <text x="25" y="56" fill="#475569" fontSize="8.5">Sirve como medio para fines ajenos.</text>
            
            <text x="15" y="74" fill="#991b1b" fontSize="9" fontWeight="bold">• Admite Equivalente:</text>
            <text x="25" y="88" fill="#475569" fontSize="8.5">Sustituible por dinero o mercancías.</text>

            <rect x="15" y="96" width="190" height="14" fill="#fee2e2" rx="3" />
            <text x="110" y="106" fill="#b91c1c" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              Objetos comerciales, herramientas, servicios
            </text>
          </g>

          {/* Rama Derecha: DIGNIDAD (Personas) */}
          <g transform="translate(330, 70)">
            <rect width="220" height="115" fill="#eff6ff" stroke="#60a5fa" strokeWidth="2" rx="6" />
            <rect x="0" y="0" width="220" height="24" fill="#2563eb" rx="6" />
            <text x="110" y="16" fill="#ffffff" fontSize="10" fontWeight="extrabold" textAnchor="middle">
              2. AQUELLO QUE TIENE DIGNIDAD ★
            </text>
            
            <text x="15" y="42" fill="#1e40af" fontSize="9" fontWeight="bold">• Valor Intrínseco Incondicional:</text>
            <text x="25" y="56" fill="#1e293b" fontSize="8.5">Fin en sí mismo, no un simple instrumento.</text>
            
            <text x="15" y="74" fill="#1e40af" fontSize="9" fontWeight="bold">• Insustituible e Inalienable:</text>
            <text x="25" y="88" fill="#1e293b" fontSize="8.5">No admite precio, cambio ni degradación.</text>

            <rect x="15" y="96" width="190" height="14" fill="#dbeafe" rx="3" />
            <text x="110" y="106" fill="#1d4ed8" fontSize="7.5" fontWeight="extrabold" textAnchor="middle">
              La Persona Humana / Base de los DD.HH.
            </text>
          </g>
        </svg>
      );
    }

    // ==========================================
    // 4. MAPA LITERARIO: GARCÍA MÁRQUEZ (LA SOLEDAD DE AMÉRICA LATINA)
    // ==========================================
    if (lowerTitle.includes('soledad') || lowerContext.includes('garcía márquez') || lowerContext.includes('pigafetta') || (grade === 11 && qNum >= 5 && qNum <= 8)) {
      return (
        <svg viewBox="0 0 580 200" className="w-full h-auto max-h-60">
          <rect width="580" height="200" fill="#f8fafc" rx="8" />
          
          {/* Header */}
          <rect x="10" y="8" width="560" height="26" fill="#78350f" rx="5" />
          <text x="290" y="25" fill="#fef3c7" fontSize="10.5" fontWeight="bold" textAnchor="middle">
            GABRIEL GARCÍA MÁRQUEZ - LA SOLEDAD DE AMÉRICA LATINA (NOBEL 1982)
          </text>

          {/* Tres Columnas Estructuradas */}
          <g transform="translate(15, 45)">
            {/* Columna 1: La Realidad Desmesurada */}
            <rect x="0" y="0" width="175" height="145" fill="#fffbeb" stroke="#fde68a" strokeWidth="1.5" rx="5" />
            <rect x="0" y="0" width="175" height="22" fill="#d97706" rx="5" />
            <text x="87" y="15" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">1. DESMESURA DE LA REALIDAD</text>
            <text x="10" y="38" fill="#92400e" fontSize="8.5" fontWeight="bold">• Crónicas de Indias (Pigafetta):</text>
            <text x="15" y="52" fill="#475569" fontSize="8">Animales fantásticos, prodigios.</text>
            <text x="10" y="70" fill="#92400e" fontSize="8.5" fontWeight="bold">• Realismo Mágico:</text>
            <text x="15" y="84" fill="#475569" fontSize="8">"Pedirle poco a la imaginación"</text>
            <text x="15" y="98" fill="#475569" fontSize="8">porque la realidad supera la ficción.</text>
            <rect x="10" y="112" width="155" height="22" fill="#fef3c7" rx="3" />
            <text x="87" y="126" fill="#b45309" fontSize="7.5" fontStyle="italic" textAnchor="middle">Manantial inagotable de creación</text>
          </g>

          <g transform="translate(200, 45)">
            {/* Columna 2: El Nudo de la Soledad */}
            <rect x="0" y="0" width="175" height="145" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" rx="5" />
            <rect x="0" y="0" width="175" height="22" fill="#dc2626" rx="5" />
            <text x="87" y="15" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">2. EL NUDO DE LA SOLEDAD</text>
            <text x="10" y="38" fill="#991b1b" fontSize="8.5" fontWeight="bold">• Esquemas Ajenos:</text>
            <text x="15" y="52" fill="#475569" fontSize="8">Incomprensión de Europa y potencias.</text>
            <text x="10" y="70" fill="#991b1b" fontSize="8.5" fontWeight="bold">• Contradicción Ética:</text>
            <text x="15" y="84" fill="#475569" fontSize="8">Aplauden la originalidad literaria</text>
            <text x="15" y="98" fill="#475569" fontSize="8">pero bloquean el cambio social.</text>
            <rect x="10" y="112" width="155" height="22" fill="#fee2e2" rx="3" />
            <text x="87" y="126" fill="#991b1b" fontSize="7.5" fontWeight="bold" textAnchor="middle">Menos libres, más solitarios</text>
          </g>

          <g transform="translate(385, 45)">
            {/* Columna 3: La Utopía de la Vida */}
            <rect x="0" y="0" width="180" height="145" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5" rx="5" />
            <rect x="0" y="0" width="180" height="22" fill="#16a34a" rx="5" />
            <text x="90" y="15" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">3. UTOPÍA DE LA VIDA</text>
            <text x="10" y="38" fill="#166534" fontSize="8.5" fontWeight="bold">• Respuesta a la opresión:</text>
            <text x="15" y="52" fill="#475569" fontSize="8">La vida y la dignidad resisten.</text>
            <text x="10" y="70" fill="#166534" fontSize="8.5" fontWeight="bold">• Segunda Oportunidad:</text>
            <text x="15" y="84" fill="#475569" fontSize="8">Revertir la condena trágica</text>
            <text x="15" y="98" fill="#475569" fontSize="8">de los cien años de soledad.</text>
            <rect x="10" y="112" width="160" height="22" fill="#dcfce7" rx="3" />
            <text x="90" y="126" fill="#15803d" fontSize="7.5" fontWeight="extrabold" textAnchor="middle">Amor, justicia y felicidad posibles</text>
          </g>
        </svg>
      );
    }

    // ==========================================
    // 5. MAPA TEORÍA POLÍTICA: ROUSSEAU (EL CONTRATO SOCIAL)
    // ==========================================
    if (lowerTitle.includes('contrato social') || lowerContext.includes('rousseau') || (grade === 11 && qNum <= 4)) {
      return (
        <svg viewBox="0 0 580 190" className="w-full h-auto max-h-56">
          <rect width="580" height="190" fill="#f8fafc" rx="8" />
          
          <rect x="10" y="8" width="560" height="24" fill="#0f766e" rx="4" />
          <text x="290" y="24" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
            JEAN-JACQUES ROUSSEAU: EL DERECHO POLÍTICO Y EL PACTO SOCIAL
          </text>

          {/* Comparación: Fuerza vs Convención */}
          <g transform="translate(25, 42)">
            <rect width="245" height="135" fill="#fef2f2" stroke="#f87171" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="245" height="22" fill="#b91c1c" rx="6" />
            <text x="122" y="15" fill="#ffffff" fontSize="9.5" fontWeight="bold" textAnchor="middle">❌ LA FUERZA FÍSICA NO CREA DERECHO</text>
            
            <text x="15" y="42" fill="#991b1b" fontSize="9" fontWeight="bold">• Acto de necesidad y prudencia:</text>
            <text x="25" y="56" fill="#475569" fontSize="8.5">Ceder ante la fuerza carece de moralidad.</text>
            
            <text x="15" y="74" fill="#991b1b" fontSize="9" fontWeight="bold">• Sin fuerza no hay obligación:</text>
            <text x="25" y="88" fill="#475569" fontSize="8.5">Si se obedece por miedo, cesa el deber.</text>

            <rect x="15" y="102" width="215" height="22" fill="#fee2e2" rx="4" />
            <text x="122" y="116" fill="#7f1d1d" fontSize="8" fontWeight="bold" textAnchor="middle">El despotismo carece de legitimidad moral</text>
          </g>

          <g transform="translate(305, 42)">
            <rect width="250" height="135" fill="#f0fdfa" stroke="#2dd4bf" strokeWidth="2" rx="6" />
            <rect x="0" y="0" width="250" height="22" fill="#0d9488" rx="6" />
            <text x="125" y="15" fill="#ffffff" fontSize="9.5" fontWeight="extrabold" textAnchor="middle">✓ EL PACTO SOCIAL Y LAS CONVENCIONES</text>
            
            <text x="15" y="42" fill="#0f766e" fontSize="9" fontWeight="bold">• Base del orden civil legítimo:</text>
            <text x="25" y="56" fill="#134e4a" fontSize="8.5">Acuerdo voluntario entre ciudadanos libres.</text>
            
            <text x="15" y="74" fill="#0f766e" fontSize="9" fontWeight="bold">• Soberanía Popular:</text>
            <text x="25" y="88" fill="#134e4a" fontSize="8.5">La ley es expresión de la Voluntad General.</text>

            <rect x="15" y="102" width="220" height="22" fill="#ccfbf1" rx="4" />
            <text x="125" y="116" fill="#115e59" fontSize="8" fontWeight="extrabold" textAnchor="middle">Libertad civil e igualdad ante la ley</text>
          </g>
        </svg>
      );
    }

    // ==========================================
    // 6. LEYENDA TRADICIONAL / NARRATIVA (Grados 3°, 4°, 7°)
    // ==========================================
    if (lowerTitle.includes('lupuna') || lowerTitle.includes('ipi') || lowerTitle.includes('luces enamoradas') || lowerTitle.includes('maíz') || grade === 3 || grade === 7) {
      return (
        <svg viewBox="0 0 560 180" className="w-full h-auto max-h-56">
          <rect width="560" height="180" fill="#f8fafc" rx="8" />
          
          {/* Header */}
          <rect x="10" y="8" width="540" height="24" fill="#15803d" rx="4" />
          <text x="280" y="24" fill="#ffffff" fontSize="10.5" fontWeight="bold" textAnchor="middle">
            ESTRUCTURA NARRATIVA DEL TEXTO LITERARIO (INICIO • NUDO • DESENLACE)
          </text>

          {/* Fases Narrativas */}
          <g transform="translate(20, 42)">
            {/* Inicio */}
            <rect x="0" y="0" width="160" height="120" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="160" height="20" fill="#3b82f6" rx="6" />
            <text x="80" y="14" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">1. INICIO / CONTEXTO</text>
            <text x="10" y="38" fill="#1e40af" fontSize="8.5" fontWeight="bold">Personajes y Espacio:</text>
            <text x="10" y="52" fill="#475569" fontSize="8">Presentación del escenario,</text>
            <text x="10" y="64" fill="#475569" fontSize="8">protagonistas y condición inicial.</text>
            <rect x="10" y="80" width="140" height="30" fill="#dbeafe" rx="3" />
            <text x="80" y="94" fill="#1d4ed8" fontSize="7.5" fontWeight="semibold" textAnchor="middle">Planteamiento del enigma</text>
            <text x="80" y="104" fill="#1d4ed8" fontSize="7" textAnchor="middle">o motivación de la búsqueda</text>
          </g>

          <g transform="translate(200, 42)">
            {/* Nudo */}
            <rect x="0" y="0" width="160" height="120" fill="#fefce8" stroke="#fde047" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="160" height="20" fill="#eab308" rx="6" />
            <text x="80" y="14" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">2. NUDO / CONFLICTO</text>
            <text x="10" y="38" fill="#854d0e" fontSize="8.5" fontWeight="bold">Tensión y Acción:</text>
            <text x="10" y="52" fill="#475569" fontSize="8">Desafíos, transformaciones,</text>
            <text x="10" y="64" fill="#475569" fontSize="8">obstáculos y decisiones clave.</text>
            <rect x="10" y="80" width="140" height="30" fill="#fef9c3" rx="3" />
            <text x="80" y="94" fill="#a16207" fontSize="7.5" fontWeight="semibold" textAnchor="middle">Clímax de la narración</text>
            <text x="80" y="104" fill="#a16207" fontSize="7" textAnchor="middle">Fuerzas en confrontación</text>
          </g>

          <g transform="translate(380, 42)">
            {/* Desenlace */}
            <rect x="0" y="0" width="160" height="120" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="160" height="20" fill="#22c55e" rx="6" />
            <text x="80" y="14" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">3. DESENLACE / SENTIDO</text>
            <text x="10" y="38" fill="#166534" fontSize="8.5" fontWeight="bold">Resolución y Moraleja:</text>
            <text x="10" y="52" fill="#475569" fontSize="8">Consecuencias finales,</text>
            <text x="10" y="64" fill="#475569" fontSize="8">origen mítico o valor ético.</text>
            <rect x="10" y="80" width="140" height="30" fill="#dcfce7" rx="3" />
            <text x="80" y="94" fill="#15803d" fontSize="7.5" fontWeight="bold" textAnchor="middle">Enseñanza perdurable</text>
            <text x="80" y="104" fill="#15803d" fontSize="7" textAnchor="middle">Respuesta del protagonista</text>
          </g>
        </svg>
      );
    }

    // ==========================================
    // 7. FICHA TÉCNICA INSTITUCIONAL DE LECTURA (GENÉRICA OPTIMIZADA)
    // ==========================================
    return (
      <svg viewBox="0 0 540 180" className="w-full h-auto max-h-56">
        <rect width="540" height="180" fill="#f8fafc" rx="8" />
        <rect x="10" y="10" width="520" height="160" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Encabezado del esquema */}
        <rect x="10" y="10" width="520" height="28" fill="#1e3a8a" rx="6" />
        <text x="270" y="28" fill="#ffffff" fontSize="10.5" fontWeight="bold" textAnchor="middle">
          🏛️ I.E. TÉCNICA SIMÓN BOLÍVAR - FICHA TÉCNICA DE COMPRENSIÓN LECTORA ICFES
        </text>

        {/* Paneles de datos */}
        <g transform="translate(25, 48)">
          {/* Panel Izquierdo: Competencia y Componente */}
          <rect x="0" y="0" width="235" height="108" fill="#eff6ff" rx="6" stroke="#bfdbfe" strokeWidth="1.5" />
          <text x="12" y="20" fill="#1e40af" fontSize="9.5" fontWeight="bold">📖 TIPOLOGÍA / COMPONENTE:</text>
          <text x="12" y="36" fill="#1e293b" fontSize="9" fontWeight="semibold">{question.component}</text>
          
          <text x="12" y="60" fill="#1e40af" fontSize="9.5" fontWeight="bold">🎯 COMPETENCIA LECTORA:</text>
          <text x="12" y="76" fill="#1e293b" fontSize="8.5" fontWeight="semibold">
            {question.competency.length > 50 ? question.competency.slice(0, 48) + '...' : question.competency}
          </text>
          <text x="12" y="96" fill="#64748b" fontSize="7.5" fontStyle="italic">Evaluar para Avanzar / Saber 11</text>

          {/* Panel Derecho: Modelo Mental para el Cuaderno */}
          <rect x="250" y="0" width="235" height="108" fill="#f0fdf4" rx="6" stroke="#bbf7d0" strokeWidth="1.5" />
          <text x="262" y="20" fill="#15803d" fontSize="9.5" fontWeight="bold">📓 RUTA PARA TU CUADERNO:</text>
          <text x="262" y="40" fill="#166534" fontSize="8.5">• Paso 1: Tipología textual y autor</text>
          <text x="262" y="58" fill="#166534" fontSize="8.5">• Paso 2: Extraer premisa / idea central</text>
          <text x="262" y="76" fill="#166534" fontSize="8.5">• Paso 3: Identificar evidencias y citas</text>
          <text x="262" y="94" fill="#166534" fontSize="8.5">• Paso 4: Descartar distractores con razones</text>
        </g>
      </svg>
    );
  };

  return (
    <div className={`bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden my-2 ${className}`}>
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#1a365d] to-[#2b4c7e] text-white px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <Layers className="w-4 h-4 text-amber-300 shrink-0" />
          <div className="min-w-0">
            <h4 className="text-xs font-bold truncate leading-tight">
              Figura / Diagrama Oficial - Pregunta #{question.questionNumber}
            </h4>
            <p className="text-[10px] text-blue-200 truncate leading-tight">
              Grado {question.grade}° • {question.component}
            </p>
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handleZoomOut}
            className="p-1 rounded bg-blue-900/80 hover:bg-blue-800 text-blue-100 text-xs transition-colors"
            title="Alejar (-)"
            aria-label="Alejar"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={handleResetZoom}
            className="px-1.5 py-0.5 rounded bg-blue-900/80 hover:bg-blue-800 text-blue-100 text-[10px] font-mono font-bold transition-colors"
            title="Restablecer escala (100%)"
          >
            {Math.round(zoomLevel * 100)}%
          </button>

          <button
            onClick={handleZoomIn}
            className="p-1 rounded bg-blue-900/80 hover:bg-blue-800 text-blue-100 text-xs transition-colors"
            title="Acercar (+)"
            aria-label="Acercar"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={toggleGrid}
            className={`p-1 rounded text-xs transition-colors ${
              showGrid ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-blue-900/80 text-blue-100 hover:bg-blue-800'
            }`}
            title="Activar/desactivar cuadrícula de guía"
            aria-label="Cuadrícula"
          >
            <Grid className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="p-1 rounded bg-blue-900/80 hover:bg-blue-800 text-blue-100 text-xs transition-colors"
            title="Ver en pantalla completa para calcar en el cuaderno"
            aria-label="Ampliar"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SVG Canvas Container with Zoom & Optional Grid */}
      <div className="relative p-2 sm:p-3 bg-slate-50 flex items-center justify-center overflow-auto min-h-[160px]">
        {/* Optional Grid Overlay */}
        {showGrid && (
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
        )}

        <div 
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
          className="transition-transform duration-150 w-full flex items-center justify-center"
        >
          {renderSvgContent()}
        </div>
      </div>

      {/* Pedagogical Note / Action Bar */}
      <div className="bg-blue-50/90 border-t border-blue-200/80 px-3 py-1.5 flex items-center justify-between text-[11px] gap-2">
        <span className="text-blue-950 font-semibold flex items-center gap-1 truncate">
          <BookOpen className="w-3.5 h-3.5 text-blue-700 shrink-0" />
          <span>Registra este esquema o mapa conceptual en tu cuaderno para la Fase 2 (Comprender).</span>
        </span>

        {onOpenCuaderno && (
          <button
            onClick={onOpenCuaderno}
            className="px-2 py-0.5 rounded bg-blue-700 hover:bg-blue-800 text-white font-bold text-[10px] shrink-0 transition-colors shadow-xs"
          >
            Abrir Cuaderno
          </button>
        )}
      </div>

      {/* Fullscreen Inspection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="bg-[#1a365d] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-300" />
                <h3 className="font-bold text-sm sm:text-base">
                  Ampliación Vectorial - Pregunta #{question.questionNumber}: {question.title}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-blue-900/80 hover:bg-blue-800 text-white font-bold text-sm"
              >
                ✕ Cerrar
              </button>
            </div>

            <div className="p-6 bg-slate-100 flex-1 overflow-auto flex items-center justify-center">
              <div className="w-full max-w-2xl bg-white p-4 rounded-xl shadow-md border border-slate-200">
                {renderSvgContent()}
              </div>
            </div>

            <div className="p-4 bg-white border-t border-gray-200 flex items-center justify-between">
              <p className="text-xs text-gray-600">
                💡 Utiliza este recurso visual para analizar las relaciones del texto en tu cuaderno de apuntes.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-[#1a365d] hover:bg-blue-900 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Volver a la Pregunta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
