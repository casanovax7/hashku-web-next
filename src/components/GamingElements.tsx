import React from 'react';

// Simplified gaming-inspired UI components
export const PixelBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20" 
         style={{
           clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
         }}>
    </div>
    <div className="relative bg-black border-2 border-yellow-400/30 p-4"
         style={{
           clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
         }}>
      {children}
    </div>
  </div>
);

export const ConsoleButton = ({ 
  variant = 'A', 
  color = 'yellow',
  className = "w-8 h-8" 
}: { 
  variant?: 'A' | 'B' | 'X' | 'Y';
  color?: 'yellow' | 'red' | 'blue' | 'green';
  className?: string;
}) => {
  const colors = {
    yellow: 'bg-yellow-400 text-black',
    red: 'bg-red-500 text-white',
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white'
  };

  return (
    <div className={`${colors[color]} rounded-full flex items-center justify-center font-bold text-sm shadow-lg ${className}`}>
      {variant}
    </div>
  );
};

export const GamingCursor = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.64 21.97c-.16-.02-.3-.11-.4-.26L8.04 14.4c-.27-.45-.49-.99-.49-1.59 0-.6.22-1.14.49-1.59L13.24 4.03c.1-.15.24-.24.4-.26.16-.02.33.04.44.18.11.14.15.33.1.5L11.5 12l2.68 7.55c.05.17.01.36-.1.5-.11.14-.28.2-.44.18z"/>
  </svg>
);