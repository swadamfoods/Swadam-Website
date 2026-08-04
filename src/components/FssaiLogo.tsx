import React from 'react';
import { FSSAI_NUMBER, GST_NUMBER } from '../data';

interface FssaiLogoProps {
  className?: string;
  variant?: 'badge' | 'full' | 'compact' | 'footer';
  showLicenseNumber?: boolean;
}

export const FssaiLogo: React.FC<FssaiLogoProps> = ({
  className = '',
  variant = 'badge',
  showLicenseNumber = true
}) => {
  // Official-styled FSSAI SVG vector mark
  const FssaiSvg = () => (
    <svg viewBox="0 0 160 65" className="h-full w-auto overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background/Base branding shapes for FSSAI logo */}
      <g id="fssai-mark">
        {/* Curved swoosh/arcs representing nutrition & safety */}
        <path d="M 12 18 C 22 8, 42 8, 52 18 C 42 12, 22 12, 12 18 Z" fill="#E86C00" />
        <path d="M 20 14 C 30 6, 48 6, 58 14 C 48 9, 30 9, 20 14 Z" fill="#00732E" />
        
        {/* Stylized 'fssai' letters */}
        <text x="8" y="44" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="32" fontStyle="italic" fill="#123B70" letterSpacing="-1">
          fssai
        </text>
        
        {/* Green leaf motif on 'i' */}
        <path d="M 52 18 Q 58 12 62 16 Q 58 22 52 18 Z" fill="#00732E" />
        
        {/* Tagline text below fssai mark */}
        <text x="8" y="56" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="7" fill="#4B5563" letterSpacing="0.5">
          FOOD SAFETY AND STANDARDS
        </text>
        <text x="8" y="63" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="6.5" fill="#00732E" letterSpacing="0.5">
          AUTHORITY OF INDIA
        </text>
      </g>
    </svg>
  );

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white dark:bg-zinc-900 border border-emerald-500/30 shadow-sm ${className}`}>
        <div className="h-6 w-auto flex-shrink-0">
          <FssaiSvg />
        </div>
        {showLicenseNumber && (
          <div className="flex flex-col text-left leading-none">
            <span className="text-[9px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">fssai Registered</span>
            <span className="text-[10px] font-mono font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">{FSSAI_NUMBER}</span>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`p-3.5 rounded-xl bg-white/95 dark:bg-zinc-900/90 border border-emerald-500/30 shadow-sm backdrop-blur-sm ${className}`}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-auto flex-shrink-0 bg-white p-1 rounded-md border border-zinc-200 dark:border-zinc-800">
            <FssaiSvg />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 tracking-wide uppercase">
                fssai Certified Kitchen
              </span>
            </div>
            <span className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium mt-0.5">
              Registration Lic. No. <strong className="font-mono text-zinc-900 dark:text-zinc-100">{FSSAI_NUMBER}</strong>
            </span>
            <span className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium mt-0.5">
              GSTIN: <strong className="font-mono text-zinc-900 dark:text-zinc-100">{GST_NUMBER}</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`p-4 rounded-xl bg-gradient-to-r from-emerald-950/10 via-zinc-900/10 to-amber-950/10 border border-emerald-500/40 ${className}`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 px-2 py-1 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <FssaiSvg />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                Food Safety Certified (fssai)
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Lic. No: <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{FSSAI_NUMBER}</span>
              </p>
            </div>
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
            100% Hygienic Pune Kitchen
          </span>
        </div>
      </div>
    );
  }

  // Default Badge Variant
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/60 ${className}`}>
      <div className="h-7 w-auto flex-shrink-0">
        <FssaiSvg />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">fssai Registration</span>
        <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100">{FSSAI_NUMBER}</span>
      </div>
    </div>
  );
};
