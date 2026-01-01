
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { GameMode, PuzzleItem, Difficulty } from './types';
import { CATEGORIES } from './constants';
import { speakText, getEncouragement } from './services/geminiService';
import PuzzleCard from './components/PuzzleCard';
import AccessibilityControls from './components/AccessibilityControls';

// رابط صورة البطل الصغير - تم اختيار صورة مستقرة جداً لطفل كرتوني ثلاثي الأبعاد
const MASCOT_IMAGE = "https://img.freepik.com/free-vector/gradient-mustache-emoji-illustration_23-2151041624.jpg?t=st=1767297796~exp=1767301396~hmac=c9f7b881973d25f1cc61764ad79c69270aacc3cf3523c72aff8c5233e3464583&w=2000?q=80&w=200&h=200&auto=format&fit=crop";

const Mascot: React.FC<{ emotion: 'idle' | 'happy' | 'thinking' | 'win' }> = ({ emotion }) => {
  const getAnimationClass = () => {
    switch (emotion) {
      case 'happy': return 'mascot-happy scale-110';
      case 'thinking': return 'mascot-think opacity-90';
      case 'win': return 'mascot-happy scale-125 brightness-110';
      default: return 'floating';
    }
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* خلفية مضيئة متغيرة حسب الحالة */}
      <div className={`absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full blur-2xl transition-all duration-700 ${
        emotion === 'happy' ? 'bg-yellow-400/40 animate-pulse' : 
        emotion === 'thinking' ? 'bg-blue-400/30' : 
        emotion === 'win' ? 'bg-orange-500/50 scale-150' : 'bg-indigo-400/10'
      }`} />
      
      <div className={`relative w-24 h-24 sm:w-36 sm:h-36 transition-all duration-500 transform ${getAnimationClass()}`}>
        <img 
          src={MASCOT_IMAGE} 
          alt="Mascot Boy" 
          className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
          onError={(e) => {
            // Fallback if image fails
            (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/bottts/svg?seed=smart-boy";
          }}
        />
        {/* مؤثرات بصرية تعبيرية */}
        {emotion === 'happy' && (
          <div className="absolute -top-4 -right-4 flex gap-1">
            <span className="text-3xl animate-bounce">⭐</span>
            <span className="text-2xl animate-pulse delay-75">✨</span>
          </div>
        )}
        {emotion === 'thinking' && <span className="absolute -top-4 -left-2 text-4xl animate-bounce">💡</span>}
        {emotion === 'win' && (
          <>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl animate-bounce">👑</span>
            <span className="absolute inset-0 rounded-full ring-4 ring-yellow-400 animate-ping opacity-20"></span>
          </>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof CATEGORIES>('ANIMALS');
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.IMAGE_TO_WORD);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [selectedLabelId, setSelectedLabelId] = useState<string | null>(null);
  const [errorIds, setErrorIds] = useState<Set<string>>(new Set());
  const [highContrast, setHighContrast] = useState(false);
  const [showText, setShowText] = useState(true);
  const [feedback, setFeedback] = useState<string>('مرحباً يا بطل! أنا صديقك ذكي، هيا لنتعلم ونلعب معاً!');
  const [mascotEmotion, setMascotEmotion] = useState<'idle' | 'happy' | 'thinking' | 'win'>('idle');

  const gameItems = useMemo(() => {
    return CATEGORIES[activeCategory].items.slice(0, difficulty);
  }, [activeCategory, difficulty]);

  const shuffledLabels = useMemo(() => {
    return [...gameItems].sort(() => Math.random() - 0.5);
  }, [gameItems]);

  const progressPercent = useMemo(() => {
    return (matchedIds.size / gameItems.length) * 100;
  }, [matchedIds.size, gameItems.length]);

  const resetGame = useCallback(() => {
    setMatchedIds(new Set());
    setSelectedImageId(null);
    setSelectedLabelId(null);
    setErrorIds(new Set());
    setFeedback('رائع! لنبدأ جولة جديدة بكل حماس.');
    setMascotEmotion('idle');
  }, []);

  const handleMatch = useCallback(async (imgId: string, lblId: string) => {
    if (imgId === lblId) {
      setMatchedIds(prev => new Set(prev).add(imgId));
      setSelectedImageId(null);
      setSelectedLabelId(null);
      setErrorIds(new Set());
      setMascotEmotion('happy');
      
      const item = gameItems.find(i => i.id === imgId);
      if (item) speakText(item.word || String(item.value));
      
      const msg = await getEncouragement(true);
      setFeedback(msg || "أحسنت يا بطل!");

      setTimeout(() => setMascotEmotion('idle'), 2500);
    } else {
      setErrorIds(new Set([imgId, lblId]));
      setMascotEmotion('thinking');
      const msg = await getEncouragement(false);
      setFeedback(msg || "حاول مرة أخرى، أنت تستطيع!");
      
      setTimeout(() => {
        setSelectedImageId(null);
        setSelectedLabelId(null);
        setErrorIds(new Set());
        setMascotEmotion('idle');
      }, 1500);
    }
  }, [gameItems]);

  useEffect(() => {
    if (selectedImageId && selectedLabelId) {
      handleMatch(selectedImageId, selectedLabelId);
    }
  }, [selectedImageId, selectedLabelId, handleMatch]);

  const handleImageClick = (id: string) => {
    if (matchedIds.has(id) || errorIds.has(id)) return;
    setSelectedImageId(id === selectedImageId ? null : id);
    const item = gameItems.find(i => i.id === id);
    if (item) {
      speakText(`هذه صورة لـ ${item.word || item.value}`);
    }
  };

  const handleLabelClick = (id: string) => {
    if (matchedIds.has(id) || errorIds.has(id)) return;
    setSelectedLabelId(id === selectedLabelId ? null : id);
    const item = gameItems.find(i => i.id === id);
    if (item) {
      const label = gameMode === GameMode.IMAGE_TO_NUMBER && item.value !== undefined ? String(item.value) : (item.word || '');
      speakText(label);
    }
  };

  const isGameComplete = matchedIds.size === gameItems.length;

  useEffect(() => {
    if (isGameComplete) {
      setMascotEmotion('win');
    }
  }, [isGameComplete]);

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'ANIMALS': return '🦁 ';
      case 'NUMBERS': return '🔢 ';
      case 'FRUITS': return '🍎 ';
      case 'SHAPES': return '📐 ';
      case 'TRANSPORTATION': return '🚗 ';
      default: return '📁 ';
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${highContrast ? 'bg-gray-900' : 'playful-bg'}`}>
      
      {!highContrast && (
        <>
          <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-40 floating pointer-events-none" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-30 floating pointer-events-none" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-200 rounded-full opacity-20 floating pointer-events-none" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-10 w-20 h-20 bg-yellow-200 rounded-full opacity-50 floating pointer-events-none" style={{ animationDelay: '0.5s' }}></div>
        </>
      )}

      <div className="relative z-10 p-4 sm:p-8 flex flex-col items-center gap-6">
        <header className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/60 backdrop-blur-md p-4 rounded-3xl shadow-sm border border-white/50">
          <div className="flex items-center gap-3">
            <span className="text-4xl animate-pulse">🌟</span>
            <h1 className={`text-3xl font-black tracking-tight ${highContrast ? 'text-white' : 'text-indigo-900'}`}>
              تحدي الذكاء والمرح
            </h1>
          </div>
          <AccessibilityControls 
            highContrast={highContrast} 
            setHighContrast={setHighContrast} 
            showText={showText} 
            setShowText={setShowText} 
          />
        </header>

        <div className="w-full max-w-4xl flex flex-col items-center gap-6 bg-white/40 backdrop-blur-sm p-6 rounded-[2rem] border border-white/30 shadow-lg">
          <div className="flex flex-col items-center gap-2">
            <label className={`text-sm font-black uppercase tracking-widest ${highContrast ? 'text-white' : 'text-indigo-400'}`}>مستوى التحدي:</label>
            <div className="flex bg-indigo-50/80 p-1.5 rounded-2xl border border-indigo-100 shadow-inner">
              {[
                { label: 'سهل 👶', value: Difficulty.EASY },
                { label: 'متوسط 👦', value: Difficulty.MEDIUM },
                { label: 'صعب 🧠', value: Difficulty.HARD }
              ].map((d) => (
                <button
                  key={d.value}
                  onClick={() => { setDifficulty(d.value); resetGame(); }}
                  className={`px-6 py-2 rounded-xl font-bold transition-all ${
                    difficulty === d.value 
                      ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg scale-105' 
                      : (highContrast ? 'text-yellow-400 hover:bg-gray-800' : 'text-indigo-600 hover:bg-indigo-100')
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <label className={`text-sm font-black uppercase tracking-widest ${highContrast ? 'text-white' : 'text-indigo-400'}`}>ماذا تريد أن تتعلم اليوم؟</label>
            <div className="flex gap-4 flex-wrap justify-center">
              {Object.entries(CATEGORIES).map(([key, cat]) => (
                <button
                  key={key}
                  onClick={() => { setActiveCategory(key as any); resetGame(); }}
                  className={`px-8 py-3 rounded-2xl font-black transition-all shadow-md active:scale-95 ${
                    activeCategory === key 
                      ? 'bg-indigo-600 text-white scale-110 shadow-indigo-200' 
                      : (highContrast ? 'bg-gray-700 text-yellow-400' : 'bg-white text-indigo-700 hover:bg-indigo-50 border-2 border-indigo-50')
                  }`}
                >
                  {getCategoryIcon(key)}
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* منطقة التغذية الراجعة مع البطل ذكي */}
        <div className={`w-full max-w-2xl flex flex-col sm:flex-row items-center gap-8 p-8 rounded-[3rem] shadow-2xl border-4 transition-all transform hover:scale-[1.01] ${
          highContrast ? 'bg-black text-yellow-400 border-yellow-400' : 'bg-white text-indigo-900 border-indigo-200'
        }`}>
          <Mascot emotion={mascotEmotion} />
          <div className="flex-1 text-center sm:text-right">
             <h3 className="text-lg font-bold text-indigo-400 mb-1">صديقك ذكي يقول:</h3>
             <p className="text-2xl sm:text-3xl font-black leading-tight">{feedback}</p>
          </div>
        </div>

        <div className="w-full max-w-2xl px-4">
          <div className="flex justify-between items-end mb-2">
             <span className={`text-lg font-black ${highContrast ? 'text-white' : 'text-indigo-900'}`}>
                نقاطك: {matchedIds.size} / {gameItems.length}
             </span>
             <span className="text-2xl animate-bounce">🏁</span>
          </div>
          <div 
            className={`w-full h-8 rounded-full overflow-hidden border-4 ${highContrast ? 'bg-gray-800 border-yellow-400' : 'bg-white border-white shadow-inner'}`}
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div 
              className={`h-full transition-all duration-700 ease-out relative ${
                highContrast 
                  ? 'bg-yellow-400' 
                  : 'bg-gradient-to-r from-green-400 to-emerald-500'
              }`}
              style={{ width: `${progressPercent}%` }}
            >
              {progressPercent > 5 && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-black text-white drop-shadow-md">
                   {Math.round(progressPercent)}%
                </div>
              )}
            </div>
          </div>
        </div>

        <main className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 px-4">
          <div className="flex flex-col items-center gap-6 bg-white/30 backdrop-blur-xs p-6 rounded-[3rem] border border-white/20">
            <h2 className={`text-2xl font-black mb-2 flex items-center gap-2 ${highContrast ? 'text-white' : 'text-indigo-900'}`}>
              <span className="p-2 bg-indigo-100 rounded-xl">🖼️</span> الصور
            </h2>
            <div className={`grid gap-6 ${difficulty === Difficulty.HARD ? 'grid-cols-3' : 'grid-cols-2 sm:grid-cols-3'}`}>
              {gameItems.map((item) => (
                <PuzzleCard
                  key={`img-${item.id}`}
                  item={item}
                  type="image"
                  isSelected={selectedImageId === item.id}
                  isMatched={matchedIds.has(item.id)}
                  isError={errorIds.has(item.id)}
                  onClick={() => handleImageClick(item.id)}
                  highContrast={highContrast}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 bg-white/30 backdrop-blur-xs p-6 rounded-[3rem] border border-white/20">
            <h2 className={`text-2xl font-black mb-2 flex items-center gap-2 ${highContrast ? 'text-white' : 'text-indigo-900'}`}>
              <span className="p-2 bg-orange-100 rounded-xl">📝</span>
              الأسماء
            </h2>
            <div className={`grid gap-6 ${difficulty === Difficulty.HARD ? 'grid-cols-3' : 'grid-cols-2 sm:grid-cols-3'}`}>
              {shuffledLabels.map((item) => (
                <PuzzleCard
                  key={`lbl-${item.id}`}
                  item={item}
                  type="label"
                  displayText={gameMode === GameMode.IMAGE_TO_NUMBER && item.value !== undefined ? item.value : item.word}
                  isSelected={selectedLabelId === item.id}
                  isMatched={matchedIds.has(item.id)}
                  isError={errorIds.has(item.id)}
                  onClick={() => handleLabelClick(item.id)}
                  highContrast={highContrast}
                />
              ))}
            </div>
          </div>
        </main>

        {isGameComplete && (
          <div className="fixed inset-0 bg-indigo-900/40 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className={`p-12 rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center gap-8 text-center max-w-md w-full border-b-8 border-indigo-100 ${
              highContrast ? 'bg-gray-900 border-4 border-yellow-400' : 'bg-white'
            }`}>
              <Mascot emotion="win" />
              <div>
                <h2 className={`text-4xl font-black mb-2 ${highContrast ? 'text-yellow-400' : 'text-indigo-600'}`}>بطل حقيقي!</h2>
                <p className={`text-xl ${highContrast ? 'text-white' : 'text-gray-500'}`}>لقد تعلمت جميع أفراد مجموعة {CATEGORIES[activeCategory].name} اليوم!</p>
              </div>
              <button
                onClick={resetGame}
                className={`w-full py-5 rounded-[2rem] text-2xl font-black transition-all transform hover:scale-105 active:scale-95 shadow-xl ${
                  highContrast ? 'bg-yellow-400 text-black' : 'bg-gradient-to-r from-green-400 to-green-500 text-white shadow-green-100'
                }`}
              >
                جولة جديدة 🔄
              </button>
            </div>
          </div>
        )}

        <footer className="mt-auto pt-8 text-indigo-300 font-bold text-sm bg-white/20 px-6 py-2 rounded-full border border-white/20">
          صنع بكل حب لدعم أبطالنا المبدعين ❤️
        </footer>
      </div>
    </div>
  );
};

export default App;
