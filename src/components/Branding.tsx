import React from 'react';

export const EscudoInstitucional: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center rounded-full bg-white shadow-sm overflow-hidden p-1 border border-blue-200 ${className}`}
      style={{ width: size, height: size }}
      title="Escudo Institución Educativa Técnica Simón Bolívar - Ibagué"
    >
      <svg viewBox="0 0 200 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ribbon top */}
        <path d="M15 25 C60 5, 140 5, 185 25 L175 40 C135 25, 65 25, 25 40 Z" fill="#90CDF4" stroke="#2B6CB0" strokeWidth="2" />
        <text x="100" y="27" textAnchor="middle" fill="#1A365D" fontSize="12" fontWeight="bold" fontFamily="sans-serif">CIENCIA Y VIRTUD</text>
        
        {/* Shield outline */}
        <path d="M35 45 L165 45 C165 130, 155 170, 100 195 C45 170, 35 130, 35 45 Z" fill="#FFFFFF" stroke="#2B6CB0" strokeWidth="4" />
        
        {/* Shield inner split */}
        <path d="M37 47 L100 47 L100 170 C70 150, 45 120, 37 47 Z" fill="#63B3ED" />
        <path d="M100 47 L163 47 C155 120, 130 150, 100 170 Z" fill="#CBD5E0" />
        
        {/* Sun on left side */}
        <circle cx="58" cy="95" r="18" fill="#ECC94B" />
        {/* Sun rays */}
        <path d="M58 70 L58 63 M58 120 L58 127 M33 95 L26 95 M83 95 L90 95 M40 77 L34 71 M76 113 L82 119 M40 113 L34 119 M76 77 L82 71" stroke="#ECC94B" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Book on bottom */}
        <rect x="75" y="115" width="50" height="32" rx="3" fill="#FFFFFF" stroke="#2D3748" strokeWidth="2" />
        <line x1="100" y1="115" x2="100" y2="147" stroke="#2D3748" strokeWidth="2" />
        <line x1="80" y1="123" x2="95" y2="123" stroke="#718096" strokeWidth="1.5" />
        <line x1="80" y1="129" x2="95" y2="129" stroke="#718096" strokeWidth="1.5" />
        <line x1="80" y1="135" x2="95" y2="135" stroke="#718096" strokeWidth="1.5" />
        <line x1="105" y1="123" x2="120" y2="123" stroke="#718096" strokeWidth="1.5" />
        <line x1="105" y1="129" x2="120" y2="129" stroke="#718096" strokeWidth="1.5" />
        <line x1="105" y1="135" x2="120" y2="135" stroke="#718096" strokeWidth="1.5" />
        
        {/* Monogram SB */}
        <text x="100" y="92" textAnchor="middle" fill="#1A365D" fontSize="46" fontWeight="900" fontFamily="sans-serif">SB</text>
        
        {/* Bottom Banner */}
        <path d="M40 185 Q100 205 160 185 L165 200 Q100 218 35 200 Z" fill="#FFFFFF" stroke="#1A365D" strokeWidth="2" />
        <text x="100" y="200" textAnchor="middle" fill="#1A365D" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">SIMON BOLIVAR</text>
      </svg>
    </div>
  );
};

export const LogoTecnoInfo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Colorful L&S graphic */}
      <div className="flex items-center font-black text-xl tracking-tighter">
        <span className="bg-gradient-to-b from-green-500 to-blue-600 bg-clip-text text-transparent text-2xl font-extrabold">L</span>
        <span className="bg-gradient-to-tr from-amber-400 to-orange-500 bg-clip-text text-transparent text-base -mx-0.5">&</span>
        <span className="bg-gradient-to-b from-pink-500 via-red-500 to-amber-500 bg-clip-text text-transparent text-2xl font-extrabold">S</span>
      </div>
      <div className="leading-tight">
        <div className="text-[10px] font-bold text-gray-700 tracking-tight">
          <span className="text-[#15803d]">StartUp</span> <span className="text-[#111827]">TecnoInfo</span>
        </div>
        <div className="text-[8px] text-gray-500 font-semibold tracking-wider uppercase">Libre y Social</div>
      </div>
    </div>
  );
};
