import React from 'react';

export const LogoConnector: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 -z-10 opacity-80 hidden md:block">
       {/* Fluid ribbon connecting the two points */}
      <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M10 50 C 60 50, 60 20, 100 50 C 140 80, 140 50, 190 50" 
          stroke="url(#gradient)" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284c7" />
            <stop offset="1" stopColor="#c026d3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
