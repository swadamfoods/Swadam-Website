import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Moon, Sun, Home, Compass, BookOpen, Languages } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { Language, TRANSLATIONS } from '../translations';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Header({ 
  cartCount, 
  onOpenCart, 
  activeSection, 
  setActiveSection,
  theme,
  setTheme,
  lang,
  setLang
}: HeaderProps) {

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = TRANSLATIONS[lang];

  return (
    <>
      {/* Desktop & Mobile Glass Pill Header Navigation */}
      <nav className="fixed top-6 left-[5%] right-[5%] px-6 py-3 bg-[var(--surface)] backdrop-blur-2xl border border-[var(--border)] rounded-full flex justify-between items-center z-50 shadow-[0_10px_40px_var(--shadow)] transition-all duration-350">
        {/* Logo Container */}
        <div 
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => handleNavClick('home')}
        >
          <img 
            src="/swadam-logo.png" 
            alt="Swadam Foods Logo" 
            className="h-10 w-10 rounded-full border border-[var(--border)] bg-[#fffcf9] object-contain p-0.5"
            onError={(e) => {
              // fallback in case of logo load failure
              (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=100&h=100&fit=crop&q=80";
            }}
          />
          <span className="logo-text font-serif text-[1.1rem] font-bold uppercase tracking-[2px] text-[var(--text)]">
            Swadam
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          <li>
            <button
              onClick={() => handleNavClick('home')}
              className={`text-xs font-semibold uppercase tracking-[1.5px] cursor-pointer relative pb-1 transition-all duration-300 ${
                activeSection === 'home' 
                  ? 'text-[var(--text)] border-b-2 border-[var(--accent)] font-bold' 
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {t.navHome}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('store')}
              className={`text-xs font-semibold uppercase tracking-[1.5px] cursor-pointer relative pb-1 transition-all duration-300 ${
                activeSection === 'store' || activeSection === 'product-profile'
                  ? 'text-[var(--text)] border-b-2 border-[var(--accent)] font-bold' 
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {t.navOurSnacks}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('heritage')}
              className={`text-xs font-semibold uppercase tracking-[1.5px] cursor-pointer relative pb-1 transition-all duration-300 ${
                activeSection === 'heritage' 
                  ? 'text-[var(--text)] border-b-2 border-[var(--accent)] font-bold' 
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {t.navOurStory}
            </button>
          </li>
        </ul>

        {/* Actions Button Bar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Dropdown */}
          <div className="relative flex items-center gap-1 bg-white/5 border border-[var(--border)] rounded-full px-2 py-1 sm:px-2.5 sm:py-1.5 hover:border-[var(--border-hover)] transition-all">
            <Languages className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-transparent text-[10px] sm:text-[11px] font-bold text-[var(--text)] focus:outline-none cursor-pointer pr-1"
              aria-label="Language Selector"
            >
              <option value="en" className="bg-[var(--surface)] text-[var(--text)]">EN</option>
              <option value="hi" className="bg-[var(--surface)] text-[var(--text)]">हिंदी</option>
              <option value="mr" className="bg-[var(--surface)] text-[var(--text)]">मराठी</option>
            </select>
          </div>

          {/* Light/Dark Toggle */}
          <button 
            className="icon-btn" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-[var(--text)]" />
            ) : (
              <Moon className="w-5 h-5 text-[var(--text)]" />
            )}
          </button>

          {/* Cart Bag Icon Button */}
          <button 
            className="icon-btn" 
            onClick={onOpenCart}
            aria-label="Open Cart Bag"
          >
            <ShoppingBag className="w-5 h-5 text-[var(--text)]" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="badge absolute top-1 right-1 bg-[var(--accent)] text-white text-[0.7rem] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-md"
                >
                  {cartCount}
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Navigation (App-like Dock) */}
      <div className="mobile-bottom-nav flex md:hidden fixed bottom-0 left-0 right-0 justify-between items-center bg-[var(--surface)] backdrop-blur-2xl border-t border-[var(--border)] z-50 px-8 py-3 pb-6 shadow-[0_-5px_25px_var(--shadow)]">
        <button 
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            activeSection === 'home' ? 'text-[var(--accent)] font-bold' : 'text-[var(--text-muted)]'
          }`}
        >
          <Home className="w-5.5 h-5.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">{t.navHome}</span>
        </button>

        <button 
          onClick={() => handleNavClick('store')}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            activeSection === 'store' || activeSection === 'product-profile' ? 'text-[var(--accent)] font-bold' : 'text-[var(--text-muted)]'
          }`}
        >
          <Compass className="w-5.5 h-5.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">{t.navOurSnacks}</span>
        </button>

        <button 
          onClick={() => handleNavClick('heritage')}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            activeSection === 'heritage' ? 'text-[var(--accent)] font-bold' : 'text-[var(--text-muted)]'
          }`}
        >
          <BookOpen className="w-5.5 h-5.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">{t.navOurStory}</span>
        </button>
      </div>
    </>
  );
}
