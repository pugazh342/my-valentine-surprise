'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Heart, Lock, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LoginPage() {
  const router = useRouter();
  
  // --- CONFIGURATION START ---
  // CHANGE THESE TO YOUR REAL VALUES!
  const SECRET_NICKNAME = "bava"; 
  
  // IMPORTANT: HTML date inputs use YYYY-MM-DD format behind the scenes.
  // So for Dec 19, 2024, we must write it as "2024-12-19"
  const FIRST_MEET_DATE = "2024-12-19"; 
  // --- CONFIGURATION END ---

  const [inputName, setInputName] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Normalize input for comparison (trim spaces, lowercase)
    const normalizedInputName = inputName.trim().toLowerCase();
    const normalizedSecretName = SECRET_NICKNAME.trim().toLowerCase();

    // Debugging: clear these lines if you want, but they help test!
    // console.log("Input:", normalizedInputName, inputDate);
    // console.log("Target:", normalizedSecretName, FIRST_MEET_DATE);

    if (normalizedInputName === normalizedSecretName && inputDate === FIRST_MEET_DATE) {
      // SUCCESS!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e11d48', '#fb7185', '#fecdd3']
      });
      
      // Delay redirect slightly to show confetti
      setTimeout(() => {
        router.push('/surprise'); 
      }, 1000);
      
    } else {
      // FAILURE
      setError("Oops! That's not the right date or nickname 😢");
      setTimeout(() => setError(''), 3000); // Clear error after 3s
    }
  };

  return (
    // FORCED LIGHT THEME: bg-gradient-to-br from-pink-200 via-red-100 to-pink-300
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-red-100 to-pink-300 p-4 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-4 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md bg-white/60 backdrop-blur-xl border border-white/80 shadow-2xl rounded-2xl p-8"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-pink-100 p-3 rounded-full shadow-inner">
            <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
          </div>
        </div>

        {/* Use the cursive font for the heading */}
        <h1 className="text-4xl font-bold text-center text-rose-600 mb-2 font-dancing">
          Locked for You
        </h1>
        <p className="text-center text-gray-600 mb-8 text-sm font-sans">
          Enter our special details to unlock your gift.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Nickname Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-rose-700 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Secret Nickname
            </label>
            <input 
              type="text" 
              required
              placeholder="What do I call you?"
              // Explicit text-gray-900 to prevent white-on-white in dark mode
              className="w-full px-4 py-3 rounded-lg bg-white border border-pink-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all placeholder:text-gray-400 text-gray-900 font-sans"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </div>

          {/* Date Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-rose-700 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> The Day We Met
            </label>
            <input 
              type="date" 
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-pink-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all text-gray-900 font-sans"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
            />
          </div>

          {/* Error Feedback */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-red-500 text-sm text-center font-medium bg-red-50 py-2 rounded-md"
            >
              {error}
            </motion.div>
          )}

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Unlock My Heart 🔓
          </button>
        </form>
      </motion.div>
    </main>
  );
}