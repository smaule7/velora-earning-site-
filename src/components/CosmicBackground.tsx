import React from 'react';

export const CosmicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#08050f]">
      {/* Calm, deep background with very subtle natural gradient transitions */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, #1c1030 0%, #0f0a1c 50%, #08050f 100%)',
        }}
      />
      <div 
        className="absolute bottom-0 inset-x-0 h-[40vh] opacity-25"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, #1c1030 0%, transparent 100%)',
        }}
      />
    </div>
  );
};
