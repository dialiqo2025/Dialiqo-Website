"use client";
import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'auto',
  showSubtitle = true,
  size = 'md',
  onClick
}) => {
  const gradientId = useId();

  // Sizing definitions
  const iconSizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const titleSizes = {
    sm: 'text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl font-normal'
  };

  const subtitleSizes = {
    sm: 'text-[7px]',
    md: 'text-[8.5px] sm:text-[9.5px]',
    lg: 'text-[10px] sm:text-[11px]'
  };

  // Color theme classes
  const titleColor =
    variant === 'dark'
      ? 'text-white'
      : variant === 'light'
      ? 'text-slate-900'
      : 'text-slate-900 dark:text-white';

  const subtitleColor =
    variant === 'dark'
      ? 'text-slate-300'
      : variant === 'light'
      ? 'text-slate-600'
      : 'text-slate-600 dark:text-slate-300';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${onClick ? 'cursor-pointer group' : ''} ${className}`}
    >
      {/* Speech Bubble Icon with 3 Dots */}
      <div className={`relative shrink-0 ${iconSizes[size]} transition-transform duration-200 group-hover:scale-105`}>
        <svg
          viewBox="0 0 120 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e68f6" />
              <stop offset="50%" stopColor="#3b52f5" />
              <stop offset="100%" stopColor="#7c2bf7" />
            </linearGradient>
          </defs>

          {/* Main Speech Bubble Shape */}
          <path
            d="M 38 6 
               H 82 
               C 100 6, 114 20, 114 38 
               V 58 
               C 114 76, 100 90, 82 90 
               H 36 
               C 24 90, 14 96, 4 106 
               C 1 109, 0 106, 0 102 
               V 38 
               C 0 20, 14 6, 38 6 
               Z"
            fill={`url(#${gradientId})`}
          />

          {/* 3 Horizontal White Dots */}
          <circle cx="38" cy="48" r="6.5" fill="#FFFFFF" />
          <circle cx="58" cy="48" r="6.5" fill="#FFFFFF" />
          <circle cx="78" cy="48" r="6.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Brand Text Column */}
      <div className="flex flex-col justify-center -space-y-0.5">
        <span className={`font-black tracking-tight font-sans leading-none ${titleSizes[size]} ${titleColor} transition-colors`}>
          Dialiqo
        </span>
        {showSubtitle && (
          <span className={`font-bold tracking-[0.28em] uppercase font-sans ${subtitleSizes[size]} ${subtitleColor} mt-1 transition-colors`}>
            ULTIMATE SOLUTIONS
          </span>
        )}
      </div>
    </div>
  );
};

