'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Star, Music, Coffee, ArrowDown, X } from 'lucide-react';

// --- CONFIGURATION: YOUR STORY ---
const TIMELINE_EVENTS = [
  { 
    date: "", 
    title: "First Day We Met", 
    desc: "The day my life changed forever. I was nervous, you were perfect.", 
    photo: "/First_meet.jpeg" 
  },
  { 
    date: "", 
    title: "Happy Moments", 
    desc: "That main moment when I knew you were the one. I still remember that day.", 
    photo: "/Happy_moment.jpeg" 
  },
  { 
    date: "", 
    title: "Hand tag", 
    desc: "That cute moment when we held hands for the first time. I felt like I was in a dream.", 
    photo: "/tag.jpeg" 
  },
];

const LOVE_REASONS = [
  { icon: <Heart />, title: "Your Kindness", reason: "You treat everyone with such respect and love." },
  { icon: <Star />, title: "Your Eyes", reason: "I could get lost in them for hours." },
  { icon: <Music />, title: "Your Laugh", reason: "It's literally my favorite sound in the world." },
  { icon: <Coffee />, title: "Your Support", reason: "You believe in me even when I don't believe in myself." },
];

const BULLET_POINTS = [
  "Your smile that lights up the heart 😊",
  "Your cute madness when you are hungry 😄",
  "Your endless support for my dreams 💪",
  "The way you hug me tightly 🤗",
];

const FUTURE_PROMISES = [
  "Voyage the world together 🗼",
  "Build our dream home 🏠",
  "Adopt a puppy 🐶",
  "Grow old and grumpy together 👴👵"
];

// ------------------------------------------------

export default function SurprisePage() {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinishedTyping, setIsFinishedTyping] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: '50%', left: '70%' });
  
  // --- UPDATED LOVE LETTER ---
  const LOVE_LETTER = `My Dear bava !!!,
   In a world that is often loud and cluttered, you are the quiet clarity I always return to.

I find that the more I know you, the fewer words I actually need to describe how I feel. "I love you" is the simplest truth I own, and yet it carries the entire weight of my gratitude.

Thank you for being my constant, "the imperfect perfect couple".

నీ నవ్వుల వెలుగులో నన్ను నేను మర్చిపోయా,
నా ఊపిరి ఆగిపోయినా నీ జ్ఞాపకం వదలనన్నా. 

Forever yours Bujiii ❤️`;
  // ---------------------------

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < LOVE_LETTER.length) {
        setDisplayedText((prev) => prev + LOVE_LETTER[index]);
        index++;
      } else {
        setIsFinishedTyping(true);
        clearInterval(timer);
      }
    }, 40); // Typing speed
    return () => clearInterval(timer);
  }, []);

  const moveNoButton = () => {
    const x = Math.random() * 80 + 10;
    const y = Math.random() * 80 + 10;
    setNoButtonPos({ top: `${y}%`, left: `${x}%` });
  };

  const handleYesClick = () => {
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff0000', '#ffa500'] });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff0000', '#ffa500'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-rose-50 overflow-x-hidden">
      
      {/* SECTION 1: THE LETTER */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-white max-w-2xl w-full min-h-[300px] p-8 md:p-12 shadow-2xl rounded-sm border border-stone-200 relative z-10"
          style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '100% 2rem' }}
        >
          <p className="text-xl md:text-2xl text-stone-800 leading-relaxed font-dancing whitespace-pre-wrap">
            {displayedText}<span className="animate-pulse">|</span>
          </p>
        </motion.div>
        
        {isFinishedTyping && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-10 text-rose-400 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm font-sans font-medium tracking-widest uppercase">Scroll Down</span>
            <ArrowDown />
          </motion.div>
        )}
      </section>

      {/* SECTION 2: MEMORY LANE TIMELINE */}
      {isFinishedTyping && (
        <section id="timeline" className="py-20 px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-rose-600 mb-16 font-dancing">Our Memory Lane</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 h-full w-1 bg-rose-200 transform -translate-x-1/2"></div>
            {TIMELINE_EVENTS.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-rose-500 rounded-full border-4 border-white transform -translate-x-1/2 z-10"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-rose-100">
                    <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 text-xs font-bold rounded-full mb-2">{event.date}</span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.desc}</p>
                    <div className="w-full h-64 bg-rose-100 rounded-lg overflow-hidden relative shadow-inner group">
                         <img 
                           src={event.photo} 
                           alt={event.title} 
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                         />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: WHY I LOVE YOU */}
      {isFinishedTyping && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-rose-600 mb-16 font-dancing">Why I Love You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {LOVE_REASONS.map((item, index) => (
                <div key={index} className="group h-64 perspective-1000 cursor-pointer">
                  <div className="relative w-full h-full transition-all duration-500 transform style-preserve-3d group-hover:rotate-y-180 shadow-xl rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex flex-col items-center justify-center text-white backface-hidden">
                      <div className="mb-4 scale-150">{item.icon}</div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-xs mt-2 opacity-80">(Hover to see)</p>
                    </div>
                    <div className="absolute inset-0 bg-white border-2 border-rose-200 rounded-2xl flex items-center justify-center p-6 text-center rotate-y-180 backface-hidden">
                      <p className="text-rose-600 font-medium font-dancing text-xl">{item.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-2xl mx-auto bg-rose-50 p-8 rounded-3xl shadow-inner">
               <h3 className="text-2xl font-bold text-center text-rose-800 mb-6">Things That Make You Special</h3>
               <ul className="space-y-4">
                 {BULLET_POINTS.map((point, i) => (
                   <motion.li 
                     key={i}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.2 }}
                     className="flex items-center gap-3 text-lg text-gray-700"
                   >
                     <Heart className="text-rose-500 fill-rose-500 w-5 h-5 flex-shrink-0" />
                     {point}
                   </motion.li>
                 ))}
               </ul>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: FUTURE PROMISES */}
      {isFinishedTyping && (
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
           <h2 className="text-4xl font-bold text-rose-600 mb-12 font-dancing">Our Future Together</h2>
           <div className="flex flex-wrap justify-center gap-4">
             {FUTURE_PROMISES.map((promise, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ scale: 1.1, rotate: 2 }}
                 className="bg-white border-2 border-rose-200 px-6 py-3 rounded-full shadow-sm text-rose-600 font-medium"
               >
                 {promise}
               </motion.div>
             ))}
           </div>
        </section>
      )}

      {/* SECTION 5: THE BIG QUESTION */}
      {isFinishedTyping && (
        <section className="py-32 flex flex-col items-center justify-center bg-gradient-to-t from-rose-100 to-white">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-center z-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-rose-600 mb-12 font-dancing drop-shadow-sm">
              Will you be my Valentine?
            </h2>

            <div className="flex gap-8 justify-center items-center relative h-32">
              <button
                onClick={handleYesClick}
                className="bg-rose-500 hover:bg-rose-600 text-white text-2xl font-bold py-4 px-10 rounded-full shadow-2xl transform transition hover:scale-110 active:scale-95 ring-4 ring-rose-200"
              >
                YES! 💖
              </button>

              <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                style={{ position: 'fixed', top: noButtonPos.top, left: noButtonPos.left, transition: 'all 0.3s ease' }}
                className="bg-gray-300 text-gray-600 text-xl font-bold py-3 px-8 rounded-full opacity-80 hover:opacity-100"
              >
                No 🙄
              </button>
            </div>
          </motion.div>
        </section>
      )}

      {/* --- SUCCESS MODAL POP-UP --- */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowSuccess(false)}
            />
            
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl relative z-50 border-4 border-rose-200"
            >
              <button 
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>

              <div className="flex justify-center mb-6">
                <motion.div
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ repeat: Infinity, duration: 1.5 }}
                   className="bg-rose-100 p-6 rounded-full"
                >
                  <Heart className="w-16 h-16 text-rose-600 fill-rose-600" />
                </motion.div>
              </div>

              <h3 className="text-4xl font-bold text-rose-600 font-dancing mb-4">Yay! I Knew It! ❤️</h3>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Thank you for making me the happiest person alive. I promise to love you more every single day.
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
              >
                Let's Celebrate! 🥂
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .style-preserve-3d { transform-style: preserve-3d; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
}