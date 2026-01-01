
import React, { useState } from 'react';
import { PuzzleItem } from '../types';

interface Props {
  item: PuzzleItem;
  type: 'image' | 'label';
  displayText?: string | number;
  isSelected: boolean;
  isMatched: boolean;
  isError: boolean;
  onClick: () => void;
  highContrast: boolean;
}

const PuzzleCard: React.FC<Props> = ({ item, type, displayText, isSelected, isMatched, isError, onClick, highContrast }) => {
  const [imgFailed, setImgFailed] = useState(false);

  // الحالة عند المطابقة بنجاح
  if (isMatched) {
    return (
      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-green-50 border-4 border-green-500 rounded-2xl flex items-center justify-center animate-success shadow-inner transition-opacity duration-1000 opacity-40">
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl text-green-600 font-bold">✓</span>
          <span className="text-[10px] font-bold text-green-700 uppercase">رائع!</span>
        </div>
      </div>
    );
  }

  const baseStyles = "w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center rounded-2xl cursor-pointer transition-all transform hover:scale-105 active:scale-95 shadow-lg overflow-hidden border-4";
  const contrastStyles = highContrast ? "bg-black text-white border-yellow-400" : "bg-white border-white";
  
  let dynamicBorder = "border-transparent";
  if (isSelected) {
    dynamicBorder = highContrast ? "border-white ring-4 ring-yellow-400" : "border-indigo-500 ring-4 ring-indigo-200 animate-glow";
  }
  if (isError) {
    dynamicBorder = "border-red-500 ring-4 ring-red-200 animate-shake";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${contrastStyles} ${dynamicBorder}`}
      aria-pressed={isSelected}
    >
      {type === 'image' && !imgFailed ? (
        <img 
          src={item.image} 
          alt={item.word} 
          onError={() => setImgFailed(true)}
          className="w-full h-full object-contain p-2 pointer-events-none" 
          draggable="false"
        />
      ) : (
        <span className={`text-base sm:text-xl font-black ${highContrast ? 'text-yellow-400' : 'text-indigo-600'} text-center px-1 leading-tight break-words max-w-full overflow-hidden`}>
          {displayText ?? item.value ?? item.word}
        </span>
      )}
    </button>
  );
};

export default PuzzleCard;