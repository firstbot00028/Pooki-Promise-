/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Stars, MapPin, Calendar, HeartHandshake, Sparkles, MoveRight, Music, ArrowLeft } from 'lucide-react';

const STAGES = [
  'intro',
  'memories',
  'the-promise',
  'the-question',
  'celebration'
];

export default function App() {
  const [stage, setStage] = useState(0);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const nextStage = () => setStage((prev) => Math.min(prev + 1, STAGES.length - 1));
  const prevStage = () => setStage((prev) => Math.max(prev - 1, 0));

  const handleNoHover = useCallback(() => {
    const maxX = window.innerWidth * 0.3;
    const maxY = window.innerHeight * 0.3;
    setNoButtonPos({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    });
  }, []);

  const handleYes = () => {
    setShowConfetti(true);
    setStage(4);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff0f3]">
      {/* Dynamic Atmospheric Background */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-rose/30 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-soft-pink/40 blur-[100px]" 
        />
      </div>

      <AnimatePresence mode="wait">
        {stage === 0 && (
          <motion.section
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
            className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.1, 1], opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="relative"
            >
               <Heart className="w-20 h-20 mb-8 text-accent fill-accent pookie-shadow" />
               <Sparkles className="absolute -top-4 -right-4 w-10 h-10 text-gold" />
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-9xl font-cursive text-accent mb-6 leading-tight drop-shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Hey Pookie! ✨
            </motion.h1 >
            
            <motion.p
              className="text-2xl md:text-3xl text-rose font-bold max-w-xl mb-12 tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              I made this just for you because you're literally my fav person ever. 🍪💖
            </motion.p>
            
            <motion.button
              onClick={nextStage}
              whileHover={{ scale: 1.15, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 px-12 py-6 bg-accent text-white rounded-full font-black text-2xl transition-all shadow-xl shadow-accent/30"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Click me, Pookie! 🧸
            </motion.button>
          </motion.section>
        )}

        {stage === 1 && (
          <motion.section
            key="memories"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: 50 }}
            className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 overflow-y-auto pt-20 pb-20"
          >
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-12">
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="glass-card p-8 pookie-shadow"
                >
                  <div className="flex items-center gap-3 text-accent mb-4">
                    <Sparkles className="w-8 h-8" />
                    <span className="text-xl font-black uppercase tracking-widest">Core Memory</span>
                  </div>
                  <h2 className="text-4xl font-serif text-slate-800 font-bold mb-4">You're the vibe! 💅</h2>
                  <p className="text-slate-600 font-medium text-lg">
                    Literally everything we do together is 10/10. Even just doing nothing feels like everything.
                  </p>
                </motion.div>

                <motion.div 
                   initial={{ x: -50, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.6 }}
                   className="glass-card p-8 pookie-shadow"
                >
                  <div className="flex items-center gap-3 text-accent mb-4">
                    <Heart className="w-8 h-8 fill-accent" />
                    <span className="text-xl font-black uppercase tracking-widest">No Cap</span>
                  </div>
                  <h2 className="text-4xl font-serif text-slate-800 font-bold mb-4">Why you? 💖</h2>
                  <p className="text-slate-600 font-medium text-lg">
                    Because you're the only one who can handle my chaos and somehow make me a better person. 
                  </p>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div 
                  className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
                  initial={{ rotate: -5, opacity: 0 }}
                  animate={{ rotate: 2, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1516589174184-c6848463ec7c?auto=format&fit=crop&q=80&w=800" 
                    alt="Cute Couple" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose/40 to-transparent" />
                </motion.div>
                
                <motion.div 
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute -bottom-8 -right-8 bg-white p-6 rounded-full shadow-2xl"
                >
                   <Heart className="w-12 h-12 text-accent fill-accent" />
                </motion.div>
              </div>
            </div>

            <motion.div 
              className="mt-16 flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button 
                onClick={nextStage} 
                className="px-12 py-5 bg-accent text-white rounded-full font-black text-xl shadow-lg hover:scale-110 active:scale-95 transition-all"
              >
                Keep going, Pookie! 😘
              </button>
            </motion.div>
          </motion.section>
        )}

        {stage === 2 && (
          <motion.section
            key="promise"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
          >
            <div className="max-w-3xl glass-card p-16 pookie-shadow relative overflow-hidden">
               <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-20 -right-20 w-64 h-64 bg-rose/10 rounded-full blur-3xl"
               />

              <h2 className="text-5xl md:text-7xl font-cursive text-accent leading-relaxed mb-8">
                My Pookie Promise... 🎀
              </h2>
              
              <div className="space-y-8 text-2xl text-slate-700 font-bold">
                <p>"I promise to never leave you on read (unless I'm asleep) 😴"</p>
                <p>"I promise to always vibe with you 💃"</p>
                <p>"And I promise to love you more everyday! 💖"</p>
              </div>

              <motion.button
                onClick={nextStage}
                whileHover={{ scale: 1.1 }}
                className="mt-12 px-12 py-5 bg-accent text-white rounded-full font-black text-2xl shadow-2xl"
              >
                THE BIG MOMENT! ✨
              </motion.button>
            </div>
          </motion.section>
        )}

        {stage === 3 && (
          <motion.section
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
          >
             <motion.div
               animate={{ 
                 scale: [1, 1.2, 1],
                 filter: ["drop-shadow(0 0 0px #ff0054)", "drop-shadow(0 0 30px #ff0054)", "drop-shadow(0 0 0px #ff0054)"]
               }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="mb-12"
             >
                <Heart className="w-40 h-40 text-accent fill-accent" />
             </motion.div>

            <motion.h3 
              className="text-5xl md:text-8xl font-cursive text-accent mb-16 px-4 drop-shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Will you be my <span className="underline decoration-wavy">Pookie</span> forever? 💍💓
            </motion.h3 >

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-[120px] w-full">
              <motion.button
                onClick={handleYes}
                whileHover={{ scale: 1.3, rotate: -2 }}
                whileTap={{ scale: 0.9 }}
                className="z-50 px-20 py-8 bg-[#ff0054] text-white rounded-full text-3xl font-black shadow-[0_0_60px_rgba(255,0,84,0.6)]"
              >
                YESSSS! 😍💖
              </motion.button>

              <motion.button
                ref={noButtonRef}
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                className="px-12 py-5 bg-slate-200 text-slate-400 rounded-full text-xl font-bold italic"
              >
                No (Error 404)
              </motion.button>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-12 text-rose text-2xl font-black animate-bounce"
            >
              SAY YES POOKIE! 😂💖
            </motion.p>
          </motion.section>
        )}

        {stage === 4 && (
          <motion.section
            key="celebration"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, rotate: [0, 5, -5, 0] }}
            className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
          >
            <Confetti />
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass-card p-16 pookie-shadow relative max-w-2xl bg-white/60"
            >
               <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="bg-accent p-6 rounded-full shadow-2xl border-4 border-white">
                    <Heart className="w-16 h-16 text-white fill-white" />
                  </div>
               </div>

              <h2 className="text-6xl md:text-8xl font-cursive text-accent mb-8 pt-8">Yayyyy! 🎉🥳</h2>
              <p className="text-3xl text-rose font-black mb-8 uppercase tracking-tighter">Mission Accomplished! 💖</p>
              
              <div className="text-2xl text-slate-700 font-bold space-y-6">
                <p>I promise to love you the mostest, Pookie! 🧸💓</p>
                <div className="text-accent text-4xl font-cursive mt-8">
                  "You're stuck with me now! 😂💖"
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      {stage < 4 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
          {STAGES.slice(0, 4).map((_, i) => (
            <motion.div 
              key={i}
              initial={false}
              animate={{ 
                width: stage === i ? 40 : 12,
                backgroundColor: stage === i ? '#ff0054' : '#ffafbd'
              }}
              className="h-3 rounded-full transition-all"
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Confetti() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            top: -20, 
            left: `${Math.random() * 100}%`,
            opacity: 1,
            rotate: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            top: '110%', 
            rotate: 360 * 2,
            opacity: 0,
            left: `${(Math.random() * 100) + (Math.random() - 0.5) * 20}%`
          }}
          transition={{ 
            duration: Math.random() * 3 + 2, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 2
          }}
          className={`absolute w-3 h-3 rounded-sm ${
            i % 3 === 0 ? 'bg-rose' : i % 3 === 1 ? 'bg-accent' : 'bg-gold'
          }`}
        />
      ))}
    </div>
  );
}

