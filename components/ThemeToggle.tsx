import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20 group"
      aria-label="Alternar tema"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-200 group-hover:text-use-gold transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-use-gold group-hover:text-white transition-colors" />
      )}
    </button>
  );
};

export default ThemeToggle;