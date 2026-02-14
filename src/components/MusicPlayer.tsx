'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 1. Define the play function
    const attemptPlay = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = 0.4; // Set volume to 40% (pleasant background level)
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay prevented. Waiting for user interaction.");
          setIsPlaying(false);
        }
      }
    };

    // 2. Try to play immediately (works if user has visited before)
    attemptPlay();

    // 3. Add a "One-Time" listener for ANY user interaction (Click, Touch, Keypress)
    const handleInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        attemptPlay();
      }
      // Remove listeners once the music starts so we don't spam
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* The Audio Element (Hidden) */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music.mp3" type="audio/mpeg" />
        <source src="/music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      
      {/* The Toggle Button */}
      <button
        onClick={togglePlay}
        className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl border border-rose-200 hover:scale-110 transition-transform text-rose-500 hover:bg-rose-50 animate-bounce"
        aria-label="Toggle Music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  );
}