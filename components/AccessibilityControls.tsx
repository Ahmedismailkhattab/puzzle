
import React from 'react';

interface Props {
  highContrast: boolean;
  setHighContrast: (v: boolean) => void;
  showText: boolean;
  setShowText: (v: boolean) => void;
}

const AccessibilityControls: React.FC<Props> = ({ highContrast, setHighContrast, showText, setShowText }) => {
  return (
    <div className="flex gap-4 p-4 bg-white shadow-md rounded-xl items-center flex-wrap justify-center sm:justify-start">
      <div className="flex items-center gap-2">
        <label className="text-sm font-bold text-gray-700">تباين عالٍ:</label>
        <button
          onClick={() => setHighContrast(!highContrast)}
          className={`w-12 h-6 rounded-full transition-colors ${highContrast ? 'bg-indigo-600' : 'bg-gray-300'} relative`}
        >
          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${highContrast ? 'right-7' : 'right-1'}`} />
        </button>
      </div>
      
      <div className="flex items-center gap-2">
        <label className="text-sm font-bold text-gray-700">إظهار الكلمات:</label>
        <button
          onClick={() => setShowText(!showText)}
          className={`w-12 h-6 rounded-full transition-colors ${showText ? 'bg-indigo-600' : 'bg-gray-300'} relative`}
        >
          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${showText ? 'right-7' : 'right-1'}`} />
        </button>
      </div>
    </div>
  );
};

export default AccessibilityControls;
