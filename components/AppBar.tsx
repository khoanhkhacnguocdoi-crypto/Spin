
import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface AppBarProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
}

const AppBar: React.FC<AppBarProps> = ({ title, showBack = false, onBack }) => {
  return (
    <div className="sticky top-0 z-50 w-full bg-white px-4 py-4 flex items-center shadow-sm border-b border-gray-100">
      <div className="flex-1 flex items-center">
        {showBack && (
          <button 
            onClick={onBack}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors active:scale-90"
          >
            <ChevronLeft size={24} className="text-[#1A1C1E]" />
          </button>
        )}
        <h1 className={`text-xl font-bold text-[#1A1C1E] ${showBack ? 'ml-2' : 'mx-auto'}`}>
          {title}
        </h1>
      </div>
      {!showBack && <div className="w-6"></div>} {/* Spacer to keep title centered if no back button */}
    </div>
  );
};

export default AppBar;
